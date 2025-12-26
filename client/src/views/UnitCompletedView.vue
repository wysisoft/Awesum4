<script lang="ts">
import type { ServerDatabaseItemInterface } from '../../../server/serverInterfaces/ServerDatabaseItemInterface';
import type { ServerFollowerDatabaseCompletionInterface } from '../../../server/serverInterfaces/ServerFollowerDatabaseCompletionInterface';
import {  followerRequestStatus, ItemLevel, successVideoType,imageType,audioType, syncAction } from '../../../server/typebox';
import type { ServerSyncRequestInterface } from '../../../server/serverInterfaces/ServerSyncRequestInterface';
import type { ServerSyncResponseInterface } from '../../../server/serverInterfaces/ServerSyncResponseInterface';
import { resources } from '@/resources/Resources';



import { reactive, ref, type Ref } from 'vue';
import { v7 as uuid } from "uuid";
import { awesum } from '@/awesum';
//@ts-ignore
import * as ConfettiGenerator from "confetti-js"


import Fireworks from 'fireworks-js';
import JSConfetti from 'js-confetti';
import { Balloons } from '@/Balloons';
import type { ServerDatabaseUnitInterface } from '../../../server/serverInterfaces/ServerDatabaseUnitInterface';
import { I18nGlobal } from '@/i18nGlobal';

export default {
  setup() {


    let progressInterval = ref(0);
    let player = ref(null);
    let progress = ref(0);

    let jsConfetti = ref(null as any);
    let balloons = ref(null as any as Balloons);
    let fireworks = ref(null as any as Fireworks);

    let confettiHandle = ref(0);
    let confetti = ref(null as any);


    return {
      player, progress, progressInterval, successVideoType
      , jsConfetti,
      balloons,
      fireworks,
      confettiHandle,
      confetti

    };
  },
  async mounted() {
    if (this.$awesum.currentDatabaseUnit.successAnimations.indexOf('Balloons') > -1) {
      var balloonCanvas = document.getElementById('balloonCanvas') as HTMLCanvasElement;
      balloonCanvas.style.display = '';
      this.balloons = new Balloons(balloonCanvas);
      this.balloons.createBalloons(30);
    }

    if (this.$awesum.currentDatabaseUnit.successAnimations.indexOf('Fireworks') > -1) {

      let fireworksCanvas = document.getElementById('fireworksCanvas') as HTMLCanvasElement
      fireworksCanvas.style.display = '';

      const fireworks = new Fireworks(fireworksCanvas, { /* options */ })
      fireworks.start();
      this.fireworks = fireworks;
    }

    if (this.$awesum.currentDatabaseUnit.successAnimations.indexOf('Confetti') > -1) {

      let confettiCanvas = document.getElementById('confettiCanvas') as HTMLCanvasElement
      confettiCanvas.style.display = '';
      let emojiCanvas = document.getElementById('emojiCanvas') as HTMLCanvasElement
      emojiCanvas.style.display = '';


      const jsConfetti = new JSConfetti({ canvas: emojiCanvas });

      this.jsConfetti = jsConfetti;

      const showConfetti = () => {
        jsConfetti.addConfetti({
          emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
          emojiSize: 10,
          confettiNumber: 300,
        });
      }

      showConfetti();
      this.confettiHandle = window.setInterval(() => {
        showConfetti();
      }, 2000);

      var confettiSettings = { target: confettiCanvas };
      this.confetti = new ConfettiGenerator.default(confettiSettings);
      this.confetti.render();
    }







    await this.$awesum.refreshCurrentDatabaseItems();

    var itemsInUnit = this.$awesum.currentDatabaseItems;
    var completedItemsInUnit = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('parentItemId').equals(this.$awesum.currentDatabaseUnit.id)
      .and((followerDatabaseCompletion: ServerFollowerDatabaseCompletionInterface) => followerDatabaseCompletion.itemId != '').toArray();

    //get all itemsInUnit that are not inside completedItemsInUnit
    var incompleteItemsInUnit = itemsInUnit.filter((item: ServerDatabaseItemInterface) => !completedItemsInUnit.some((completedItem: ServerFollowerDatabaseCompletionInterface) => completedItem.itemId == item.id));

    var doneUnit = {} as ServerDatabaseUnitInterface;
    if (incompleteItemsInUnit.length == 0) {
      doneUnit = this.$awesum.currentDatabaseUnit;
    }
    else {
      this.$awesum.errorMessage = this.$t(resources.Not_All_Items_In_Unit_Are_Completed.key);
      this.$awesum.router.push({
        name: 'Error',
      });
      return;
    }

    // Check if done with the entire database type
    //var doneType = {} as ServerDatabaseTypeInterface;
    //if (doneUnit.id) {
    //   // Get all units in the current database type
    //   var allUnitsInType = await this.$awesum.AwesumDexieDB.serverDatabaseUnits.where('databaseTypeId').equals(this.$awesum.currentDatabaseType.id).toArray();

    //   // Check if all units in the type are completed
    //   var allUnitsCompleted = true;
    //   for (const unit of allUnitsInType) {
    //     if (unit.id == doneUnit.id) {
    //       continue;
    //     }
    //     var completedUnit = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('itemId').equals(unit.id).and((followerDatabaseCompletion: ServerFollowerDatabaseCompletionInterface) => followerDatabaseCompletion.itemLevel == ItemLevel.databaseUnit).first();
    //     if (!completedUnit) {
    //       allUnitsCompleted = false;
    //       break;
    //     }
    //   }

    //   if (allUnitsCompleted) {
    //     doneType = this.$awesum.currentDatabaseType;
    //   }
    // }

    // Check if done with the entire database
    var doneWithDatabase = false;
    if (doneUnit.id) {
      // Get all database types in the current database
      var allTypesInDatabase = await this.$awesum.AwesumDexieDB.serverDatabaseUnits.where('databaseId').equals(this.$awesum.currentDatabase.id).toArray();

      // Check if all types in the database are completed
      var allTypesCompleted = true;
      for (const databaseType of allTypesInDatabase) {
        if (databaseType.id == doneUnit.id) {
          continue;
        }
        var completedType = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('itemId')
          .equals(databaseType.id).and((followerDatabaseCompletion: ServerFollowerDatabaseCompletionInterface) => followerDatabaseCompletion.itemLevel == ItemLevel.databaseUnit).first();
        if (!completedType) {
          allTypesCompleted = false;
          break;
        }
      }

      if (allTypesCompleted) {
        doneWithDatabase = true;
      }
    }

    var currentFollowerRequest = this.$awesum.followerRequests.filter((o) => {
      return o.leaderAppId == this.$awesum.currentApp.id 
      && o.followerAppId == this.$awesum.ownerApp.id 
      && o.status == followerRequestStatus.Approved
    })[0];

    let completionData = {} as ServerFollowerDatabaseCompletionInterface;

    if (doneWithDatabase) {
      // Clear all completion rows for all items, units, and types in this database in a single transaction
      await this.$awesum.AwesumDexieDB.transaction('rw',
        [
          this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions,
          this.$awesum.AwesumDexieDB.serverFollowerRequests,
          this.$awesum.AwesumDexieDB.serverFollowerDatabases,
          this.$awesum.AwesumDexieDB.serverDatabaseUnits,
          this.$awesum.AwesumDexieDB.additions,
          this.$awesum.AwesumDexieDB.serverDatabases,
        ],
        async () => {

          var allUnitsInType = await this.$awesum.AwesumDexieDB.serverDatabaseUnits.where('databaseId').equals(this.$awesum.currentDatabase.id).toArray();

          for (const unit of allUnitsInType) {
            await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('parentItemId').equals(unit.id).delete();
          }

          // Delete all completion rows for all units in this type
          //await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('parentItemId').equals(this.$awesum.currentDatabase.id).delete();

          var existingCompletions = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('itemId').equals(this.$awesum.currentDatabase.id).toArray();

          if (existingCompletions.length == 0) {
            // Add completion record for the database
            completionData = {
              id: uuid(),
              followerRequestId: currentFollowerRequest.id,
              lastModified: Date.now(),
              itemId: this.$awesum.currentDatabase.id,
              parentItemId: this.$awesum.currentApp.id,
              itemLevel: ItemLevel.database,
            } satisfies ServerFollowerDatabaseCompletionInterface;

            await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.add(completionData);
          }

          await this.$awesum.refreshCurrentDatabaseCompletions();

        });



      if (completionData && completionData.id ) {
        
        awesum.currentFollowerRequest.completionLastModified = completionData.lastModified;
        await awesum.waitForDexie();
        
        if( awesum.serverEmail != "" && currentFollowerRequest.followerAppId != currentFollowerRequest.leaderAppId){
          await this.syncCompletion(completionData);
        }
      }
    }
    // if (doneType.id) {
    //   // Add completion record for the database type
    //   completionData = {
    //     id: uuid(),
    //     followerRequestId: awesum.serverEmail == "" ? awesum.emptyGuid: currentFollowerRequest.id,
    //     description: '',
    //     created: Date.now(),
    //     lastModified: Date.now(),
    //     version: 0,
    //     itemId: this.$awesum.currentDatabaseType.id,
    //     parentItemId: this.$awesum.currentDatabase.id,
    //     itemLevel: ItemLevel.databaseType,
    //     touched: false,
    //   } as ServerFollowerDatabaseCompletionInterface;

    //   if (!doneWithDatabase) {
    //     // Clear all completion rows for all items and units in this database type in a single transaction
    //     await this.$awesum.AwesumDexieDB.transaction('rw',
    //       [
    //         this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions,
    //         this.$awesum.AwesumDexieDB.serverFollowerRequests,
    //         this.$awesum.AwesumDexieDB.serverFollowerDatabases,
    //         this.$awesum.AwesumDexieDB.serverDatabaseUnits
    //       ], async () => {
    //         // Get all units in the current database type
    //         var allUnitsInType = await this.$awesum.AwesumDexieDB.serverDatabaseUnits.where('databaseTypeId').equals(this.$awesum.currentDatabaseType.id).toArray();

    //         // Delete all completion rows for all items in all units of this type
    //         for (const unit of allUnitsInType) {
    //           await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('parentItemId').equals(unit.id).delete();
    //           await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('itemId').equals(unit.id).delete();
    //         }




    //         await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.add(completionData);

    //         await this.$awesum.refreshCurrentDatabaseCompletions();
    //       });
    //   }
    //   if (awesum.serverEmail != "" && currentFollowerRequest.followerAppId != currentFollowerRequest.leaderAppId) {
    //     await this.syncCompletion(completionData);
    //   }

    // }
    else if (doneUnit.id) {



      //if(!doneUnit){
      await this.$awesum.AwesumDexieDB.transaction('rw',
        [
          this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions,
          this.$awesum.AwesumDexieDB.serverFollowerRequests,
          this.$awesum.AwesumDexieDB.serverFollowerDatabases,
          this.$awesum.AwesumDexieDB.additions,
          this.$awesum.AwesumDexieDB.serverDatabases,
        ], async () => {

          await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('parentItemId').equals(this.$awesum.currentDatabaseUnit.id).and((followerDatabaseCompletion: ServerFollowerDatabaseCompletionInterface) => followerDatabaseCompletion.itemId != '').delete();

          var existingCompletions = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('itemId').equals(this.$awesum.currentDatabaseUnit.id).toArray();
          if (existingCompletions.length == 0) {
            completionData = {
              id: uuid(),
              followerRequestId: currentFollowerRequest.id,
              lastModified: Date.now(),
              itemId: this.$awesum.currentDatabaseUnit.id,
              parentItemId: this.$awesum.currentDatabase.id,
              itemLevel: ItemLevel.databaseUnit,
            } satisfies ServerFollowerDatabaseCompletionInterface;

            await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.add(completionData);
          }

          await this.$awesum.refreshCurrentDatabaseCompletions();

          // const asdValue = await Global.waitForFunctionWithValidation(
          //   "serverFollowerDatabaseCompletions",
          //   () => {
          //     //return true if "value" has newId as an id, looping through each item
          //     for (const item of Global.this.$awesum.currentDatabaseItemCompletions.values()) {
          //       if (item.id == newId) {
          //         console.log('found it')
          //         return true;
          //       }
          //     }
          //     console.log('not found')
          //     return false;
          //   },
          //   5000 // Timeout in milliseconds
          // );

          // //route to /completed instead of /this.$awesum.currentDatabaseItem.order
          // setTimeout(() => {

          //   if (this.jsConfetti)
          //     this.jsConfetti.clearCanvas();

          //   if (this.confettiHandle)
          //     clearInterval(this.confettiHandle)

          //   if (this.fireworks)
          //     this.fireworks.stop();

          //   if (this.balloons)
          //     this.balloons.removeBalloons();

          //   if (this.confetti)
          //     this.confetti.clear();

          //   this.$router.push('/' + encodeURI(this.$awesum.currentServerApp.name) + '/' +
          //     encodeURI(this.$awesum.currentDatabase.name) + '/' +
          //     I18nGlobal.t(ItemType[this.$awesum.currentItemType.type]) + '/' +
          //     encodeURI(this.$awesum.currentDatabaseUnit.name) + '/' +
          //     I18nGlobal.t(resources.UnitCompleted.key));
          // }, 4000);

        });
      //}
      if (completionData && completionData.id ) {
        awesum.currentFollowerRequest.completionLastModified = Date.now();
        await awesum.waitForDexie();
        
        if( awesum.serverEmail != "" && currentFollowerRequest.followerAppId != currentFollowerRequest.leaderAppId){
          await this.syncCompletion(completionData);
        }
      }
    }

    if (this.$awesum.currentDatabaseUnit.successVideoType == successVideoType.YouTube) {

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag!.parentNode!.insertBefore(tag, firstScriptTag);

      // 4. The API will call this function when the video player is ready.
      (window as any).onPlayerReady = (event: any) => {
        //window.ytPlayer = event.target;
        event.target.playVideo();
        this.startTrackingProgress();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      (window as any).onPlayerStateChange = (event: any) => {
        if (event.data == (window as any).YT.PlayerState.PLAYING && !done) {
          //setTimeout(this.stopVideo, 6000);
          done = true;
        }
      }

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      (window as any).onYouTubeIframeAPIReady = () => {

        (window as any).ytPlayer = new (window as any).YT.Player('player', {
          height: '100',
          width: '100',
          videoId: this.$awesum.currentDatabaseUnit.successVideoUrl,
          playerVars: {
            'playsinline': 1, 'controls': 0, origin: window.location.host, disablekb: 1, iv_load_policy: 3
          },
          events: {
            'onReady': (window as any).onPlayerReady,
            'onStateChange': (window as any).onPlayerStateChange
          }
        });
        (window as any).ytPlayer.g.style.height = '71svmin';
        (window as any).ytPlayer.g.style.width = '97svmin';
        (window as any).ytPlayer.g.style.marginTop = '1svmin';
        (window as any).ytPlayer.g.style.display = '';
        (window as any).ytPlayer.g.style.pointerEvents = 'none';

        (this.$refs.playerDiv as HTMLDivElement).appendChild((window as any).ytPlayer.g);
        (window as any).ytPlayer.g.setAttribute('tabindex', '-1');

      }

      if ((window as any).ytPlayer) {
        (this.$refs.playerDiv as HTMLDivElement).appendChild((window as any).ytPlayer.g);
      }




    }
    else if (this.$awesum.currentDatabaseUnit.successVideoType == successVideoType.Giphy) {
      var giphy = document.getElementById('successImage') as HTMLImageElement;
      giphy.src = this.$awesum.currentDatabaseUnit.successVideoUrl;
      giphy.style.display = '';
    }

    //route to /completed instead of /this.$awesum.currentDatabaseItem.order
    window.setTimeout(() => {

      if (this.jsConfetti)
        this.jsConfetti.clearCanvas();

      if (this.confettiHandle)
        clearInterval(this.confettiHandle)

      if (this.fireworks)
        this.fireworks.stop();

      if (this.balloons)
        this.balloons.removeBalloons();

      if (this.confetti)
        this.confetti.clear();


      // this.$router.push('/' + encodeURI(this.$awesum.currentServerApp.name) + '/' +
      //   encodeURI(this.$awesum.currentDatabase.name) + '/' +
      //   I18nGlobal.t(ItemType[this.$awesum.currentItemType.type]) + '/' +
      //   encodeURI(this.$awesum.currentDatabaseUnit.name) + '/' +
      //   I18nGlobal.t(resources.UnitCompleted.key));
    }, 8000);

  },
  async beforeRouteLeave(to, from, next) {
    var giphy = document.getElementById('successImage') as HTMLImageElement;
    giphy.style.display = 'none';
    next();
  },
  methods: {
    async syncCompletion(completionData: ServerFollowerDatabaseCompletionInterface) {
      // Create a sync request with only the completion data
      var allData = Array<ServerSyncRequestInterface>();

      allData.push({
        id: completionData.id,
        level: ItemLevel.followerDatabaseCompletion,
        values: completionData,
        action: syncAction.add,
      });

      
      allData.push({
        id: awesum.currentFollowerRequest.id,
        level: ItemLevel.followerRequest,
        values: awesum.toPOJO(awesum.currentFollowerRequest),
        action: syncAction.modify,
      });

      await this.$awesum.sync(allData);
    },
    stopVideo() {
      (window as any).ytPlayer.stopVideo();
    },
    playClicked() {
      (window as any).ytPlayer.playVideo();
      this.startTrackingProgress();
    },

    pauseVideo() {
      (window as any).ytPlayer.pauseVideo();
    },
    fullScreen() {
      (window as any).ytPlayer.g.requestFullscreen();
    },
    rewind() {
      // Get the current playback time and subtract 15 seconds
      const currentTime = (window as any).ytPlayer.getCurrentTime();
      (window as any).ytPlayer.seekTo(Math.max(0, currentTime - 15), true);
    },

    fastForward() {
      // Get the current playback time and add 15 seconds
      const currentTime = (window as any).ytPlayer.getCurrentTime();
      (window as any).ytPlayer.seekTo(Math.min((window as any).ytPlayer.getDuration(), currentTime + 15), true);
    },
    updateProgress() {
      const currentTime = (window as any).ytPlayer.getCurrentTime();
      const duration = (window as any).ytPlayer.getDuration();
      if (duration > 0) {
        this.progress = (currentTime / duration) * 100;
      }
    },

    startTrackingProgress() {
      // Update the progress every 500ms
      this.progressInterval = window.setInterval(this.updateProgress, 500);
    },
    restartVideo() {
      // Set the playback position to 0 and start the video
      (window as any).ytPlayer.seekTo(0, true);
      (window as any).ytPlayer.playVideo();
      this.startTrackingProgress(); // Ensure the progress bar updates
    },
    seekToPosition(event: MouseEvent) {
      const progressBar = event.currentTarget as HTMLDivElement;
      const rect = progressBar.getBoundingClientRect();
      const clickX = event.clientX - rect.left; // X coordinate relative to the progress bar
      const progressBarWidth = rect.width;

      // Calculate the percentage of the progress bar that was clicked
      const clickedPercentage = (clickX / progressBarWidth) * 100;

      // Calculate the new playback time
      const duration = (window as any).ytPlayer.getDuration();
      const newTime = (clickedPercentage / 100) * duration;

      // Seek to the new playback time
      (window as any).ytPlayer.seekTo(newTime, true);
    }
  }
}
</script>

<template>
  <div class="pageView">
    <img id="successImage"
      style="display:none;z-index: 9999;object-fit: contain;width: 97svmin;height: 81svmin;pointer-events: none;position: absolute;margin: auto;margin-top: 8svmin;" />

    <div id="balloonCanvas"
      style="display: none; position:absolute;width:100svmin;height:100svmin;margin:auto;z-index:9999;pointer-events:none;">
    </div>
    <canvas id="emojiCanvas"
      style="background:transparent;display: none;position:absolute;width:100svmin;height:100svmin;margin:auto;z-index:9999;pointer-events:none;"></canvas>
    <canvas id="confettiCanvas"
      style="background:transparent;display: none;position:absolute;width:100svmin;height:100svmin;margin:auto;z-index:9999;pointer-events:none;"></canvas>
    <canvas id="fireworksCanvas"
      style="background:transparent;display: none;position:absolute;width:100svmin;height:87svmin;margin:auto;z-index:9999;pointer-events:none;"></canvas>
    <div style="display: none;width:100%;height:100%;position:absolute;margin:auto;z-index:9998;" id="player">
    </div>

    <h1>Unit Completed</h1>

    <div class="content">
      <div v-if="$awesum.currentDatabaseUnit.successVideoType == successVideoType.YouTube">
        <div class="progress mt-3" style="height: 2svmin;cursor:pointer;margin-bottom: 1svmin;margin-right: 1svmin;"
          @click="seekToPosition">

          <div class="progress-bar" role="progressbar" :style="{ width: progress + '%' }" :aria-valuenow="progress"
            aria-valuemin="0" aria-valuemax="100">
            {{ progress.toFixed(0) }}%
          </div>
        </div>

        <button style="margin-right:.5svmin;" type="button" class="btn btn-primary"
          @click="playClicked()"><span>Play</span></button>
        <button style="margin-right:.5svmin;" type="button" class="btn btn-primary" @click="pauseVideo()">Pause</button>
        <button style="margin-right:.5svmin;" type="button" class="btn btn-primary"
          @click="fullScreen()">Fullscreen</button>
        <button style="margin-right:.5svmin;" type="button" class="btn btn-primary"
          @click="fastForward()">Forwards</button>
        <button style="margin-right:.5svmin;" type="button" class="btn btn-primary" @click="rewind()">Backwards</button>
        <button style="" type="button" class="btn btn-primary" @click="restartVideo">Restart</button>

        <div ref="playerDiv"></div>
      </div>



    </div>
  </div>
</template>
