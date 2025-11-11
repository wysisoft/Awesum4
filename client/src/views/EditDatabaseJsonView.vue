<script lang="ts">
import { reactive, ref } from 'vue';
import { awesum } from '@/awesum';
import { v7 as uuid } from "uuid";
import { successVideoType, itemType } from '../../../server/typebox';
import { audioType, imageType } from '../../../server/typebox';
import { type ServerMediaInterface } from '../../../server/serverInterfaces/ServerMediaInterface';
import { type ServerDatabaseUnitInterface } from '../../../server/serverInterfaces/ServerDatabaseUnitInterface';
import type { ServerSpellingDatabaseItemInterface, SpellingDatabaseItemData } from '../../../server/serverInterfaces/ServerSpellingDatabaseItemInterface';
import { type ServerDatabaseInterface } from '../../../server/serverInterfaces/ServerDatabaseInterface';
//import * as monaco from 'monaco-editor';
import type { editor, languages } from 'monaco-editor';
import { type ServerOneByOneMathDatabaseItemInterface } from '../../../server/serverInterfaces/ServerOneByOneMathDatabaseItemInterface';
import { type ServerOneByTwoDigraphsDatabaseItemInterface } from '../../../server/serverInterfaces/ServerOneByTwoDigraphsDatabaseItemInterface';
import { type ServerOneByTwoDigraphsDatabaseItemDataInterface } from '../../../server/serverInterfaces/ServerOneByTwoDigraphsDatabaseItemDataInterface';
import { type ServerOneByOneMathDatabaseItemDataInterface } from '../../../server/serverInterfaces/ServerOneByOneMathDatabaseItemDataInterface';
import { type ServerSpellingDatabaseItemDataInterface } from '../../../server/serverInterfaces/ServerSpellingDatabaseItemDataInterface';
import { type ServerDatabaseItemInterface } from '../../../server/serverInterfaces/ServerDatabaseItemInterface';


export default {
  setup() {

    const monacoModel = {} as typeof editor;
    return {
      monacoModel
    }

  },

  async mounted() {
    //get mediaIds for all items in all units in awesum.currentDatabaseType
    var mediaIds = [];

    var databaseUnits = [] as ServerDatabaseUnitInterface[];
    var databaseItems = [] as ServerDatabaseItemInterface[];

    mediaIds.push(awesum.currentDatabase.homePageIcon);

    var unitsInType = await awesum.AwesumDexieDB.serverDatabaseUnits.where('databaseId').equals(this.$awesum.currentDatabase.id).toArray();
    databaseUnits.push(...unitsInType);
    for (const unit of unitsInType) {

      mediaIds.push(unit.homePageImage);
      mediaIds.push(unit.successSound);

      var itemsInUnit = await awesum.AwesumDexieDB.serverDatabaseItems.where('unitId').equals(unit.id).toArray();
      databaseItems.push(...itemsInUnit);
      for (const item of itemsInUnit) {
        mediaIds.push((item as ServerSpellingDatabaseItemInterface).data.image);
        mediaIds.push((item as ServerSpellingDatabaseItemInterface).data.sound);
        mediaIds.push((item as ServerSpellingDatabaseItemInterface).data.successImage);
        mediaIds.push((item as ServerSpellingDatabaseItemInterface).data.successSound);
      }
    }

    //make medaiIds unique list
    mediaIds = [...new Set(mediaIds)];

    mediaIds = mediaIds.filter((mediaId: any) => mediaId != undefined && mediaId != '');


    var mediaItems = await awesum.AwesumDexieDB.serverMedia.bulkGet(mediaIds);

    var mediaItemsMap = new Map(mediaItems.map((mediaItem: any) => [mediaItem.id, mediaItem]));

    var jsonDatabase = {} as any;

    jsonDatabase.homePageIconType = imageType[awesum.currentDatabase.homePageIconType];
    jsonDatabase.homePageIcon = mediaItemsMap.get(awesum.currentDatabase.homePageIcon) ? mediaItemsMap.get(awesum.currentDatabase.homePageIcon).data : '';
    jsonDatabase.name = awesum.currentDatabase.name;


    jsonDatabase.units = [];


    var jsonUnits = databaseUnits.filter((unit: any) => unit.databaseId == awesum.currentDatabase.id);

    for (const unit of jsonUnits) {

      var jsonUnit = {} as any;

      jsonUnit.name = unit.name;
      jsonUnit.successVideoType = successVideoType[unit.successVideoType];
      jsonUnit.successVideoUrl = unit.successVideoUrl;
      jsonUnit.successAnimations = unit.successAnimations;
      jsonUnit.successSoundType = audioType[unit.successSoundType];
      jsonUnit.successSound = mediaItemsMap.get(unit.successSound) ? mediaItemsMap.get(unit.successSound).data : '';
      jsonUnit.homePageImage = mediaItemsMap.get(unit.homePageImage) ? mediaItemsMap.get(unit.homePageImage).data : '';
      jsonUnit.homePageImageType = imageType[unit.homePageImageType];

      jsonDatabase.units.push(jsonUnit);

      var jsonItems = databaseItems.filter((item: any) => item.unitId == unit.id);

      jsonUnit.items = jsonItems.map((item: any) => {

        if ((item as ServerDatabaseItemInterface).itemType == itemType.spelling) {


          return {
            itemType: itemType[itemType.spelling],
            letters: (item as ServerSpellingDatabaseItemInterface).data.letters,
            audioType: audioType[(item as ServerSpellingDatabaseItemInterface).data.audioType],
            imageType: imageType[(item as ServerSpellingDatabaseItemInterface).data.imageType],
            sound: mediaItemsMap.get((item as ServerSpellingDatabaseItemInterface).data.sound).data,
            image: (item as ServerSpellingDatabaseItemInterface).data.imageType == imageType.None ? '' : mediaItemsMap.get((item as ServerSpellingDatabaseItemInterface).data.image).data,
            text: (item as ServerSpellingDatabaseItemInterface).data.text,
            visualHint: (item as ServerSpellingDatabaseItemInterface).data.visualHint,
            successSound: (item as ServerSpellingDatabaseItemInterface).data.successSoundType == audioType.None ? '' : mediaItemsMap.get((item as ServerSpellingDatabaseItemInterface).data.successSound) ? mediaItemsMap.get((item as ServerSpellingDatabaseItemInterface).data.successSound).data : "",
            successSoundType: audioType[(item as ServerSpellingDatabaseItemInterface).data.successSoundType],
            successImage: (item as ServerSpellingDatabaseItemInterface).data.successImageType == imageType.None ? '' : mediaItemsMap.get((item as ServerSpellingDatabaseItemInterface).data.successImage) ? mediaItemsMap.get((item as ServerSpellingDatabaseItemInterface).data.successImage).data : "",
            successImageType: imageType[(item as ServerSpellingDatabaseItemInterface).data.successImageType],
            successAnimations: (item as ServerSpellingDatabaseItemInterface).data.successAnimations,
            successImageTime: (item as ServerSpellingDatabaseItemInterface).data.successImageTime

          }
        }
        else if ((item as ServerDatabaseItemInterface).itemType == itemType.oneByOneMultiplication ||
          (item as ServerDatabaseItemInterface).itemType == itemType.oneByOneAddition) {

          return {
            itemType: item.itemType == itemType.oneByOneMultiplication ? itemType[itemType.oneByOneMultiplication] : itemType[itemType.oneByOneAddition],
            firstNumber: (item as ServerOneByOneMathDatabaseItemInterface).data.firstNumber,
            secondNumber: (item as ServerOneByOneMathDatabaseItemInterface).data.secondNumber,
            options: (item as ServerOneByOneMathDatabaseItemInterface).data.options,
            sound: mediaItemsMap.get((item as ServerOneByOneMathDatabaseItemInterface).data.sound).data,
            audioType: audioType[(item as ServerOneByOneMathDatabaseItemInterface).data.audioType],
            successSound: (item as ServerOneByOneMathDatabaseItemInterface).data.successSoundType == audioType.None ? '' : mediaItemsMap.get((item as ServerOneByOneMathDatabaseItemInterface).data.successSound) ? mediaItemsMap.get((item as ServerOneByOneMathDatabaseItemInterface).data.successSound).data : "",
            successSoundType: audioType[(item as ServerOneByOneMathDatabaseItemInterface).data.successSoundType],
            successImage: (item as ServerOneByOneMathDatabaseItemInterface).data.successImageType == imageType.None ? '' : mediaItemsMap.get((item as ServerOneByOneMathDatabaseItemInterface).data.successImage) ? mediaItemsMap.get((item as ServerOneByOneMathDatabaseItemInterface).data.successImage).data : "",
            successImageType: imageType[(item as ServerOneByOneMathDatabaseItemInterface).data.successImageType],
            successAnimations: (item as ServerOneByOneMathDatabaseItemInterface).data.successAnimations,
            successImageTime: (item as ServerOneByOneMathDatabaseItemInterface).data.successImageTime

          }
        }
        else if ((item as ServerDatabaseItemInterface).itemType == itemType.oneByTwoDigraphs) {

          return {
            itemType: itemType[itemType.oneByTwoDigraphs],
            leftDigraphs: (item as ServerOneByTwoDigraphsDatabaseItemInterface).data.leftDigraphs,
            rightDigraphs: (item as ServerOneByTwoDigraphsDatabaseItemInterface).data.rightDigraphs,
            audioType: audioType[(item as ServerOneByTwoDigraphsDatabaseItemInterface).data.audioType],
            imageType: imageType[(item as ServerOneByTwoDigraphsDatabaseItemInterface).data.imageType],
            image: (item as ServerOneByTwoDigraphsDatabaseItemInterface).data.imageType == imageType.None ? '' : mediaItemsMap.get((item as ServerOneByTwoDigraphsDatabaseItemInterface).data.image).data,
            sound: mediaItemsMap.get((item as ServerOneByTwoDigraphsDatabaseItemInterface).data.sound).data,
            text: (item as ServerOneByTwoDigraphsDatabaseItemInterface).data.text,
            visualHint: (item as ServerOneByTwoDigraphsDatabaseItemInterface).data.visualHint,
            successSound: (item as ServerOneByTwoDigraphsDatabaseItemInterface).data.successSoundType == audioType.None ? '' : mediaItemsMap.get((item as ServerOneByTwoDigraphsDatabaseItemInterface).data.successSound) ? mediaItemsMap.get((item as ServerOneByTwoDigraphsDatabaseItemInterface).data.successSound).data : "",
            successSoundType: audioType[(item as ServerOneByTwoDigraphsDatabaseItemInterface).data.successSoundType],
            successImage: (item as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImageType == imageType.None ? '' : mediaItemsMap.get((item as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImage) ? mediaItemsMap.get((item as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImage).data : "",
            successImageType: imageType[(item as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImageType],
            successAnimations: (item as ServerOneByTwoDigraphsDatabaseItemInterface).data.successAnimations,
            successImageTime: (item as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImageTime
          }
        }
      });
    }

    //this.monacoModel = (window as any).monaco.editor.create(this.$refs.editorContainer, 
    //{ value: JSON.stringify(jsonDatabase, null, '\t'), language: 'json', wordWrap: "off", wordWrapOverride1: 'off' }) as any;


    await new Promise<void>((resolve) => {
      (window as any).require(["vs/editor/editor.main"], () => {
        this.monacoModel = (window as any).monaco.editor.create(this.$refs.editorContainer, {
          value: JSON.stringify(jsonDatabase, null, '\t'),
          language: "json",
          automaticLayout: true,
        });
        resolve();
      });
    });

  },
  methods: {
    async saveJson() {

      var validationError = '';

      //@ts-ignore
      var jsonText = JSON.parse(this.monacoModel.getModel().getValue());

      jsonText.units.forEach((unit: any) => {



        if (!unit.name || unit.name == '') {
          validationError += 'Unit name is required\n';
        }

        unit.items.forEach((item: any) => {

          if ((item.itemType == itemType[itemType.spelling] || item.itemType == itemType[itemType.oneByTwoDigraphs]) && (!item.text || item.text == '')) {
            validationError += 'Text is required\n';
          }

          if ((item.itemType == itemType[itemType.spelling]) && item.letters.length > 0 && item.letters.split('\n').length != item.text.length) {
            validationError += 'Letters must have as many lines as the text\n';
          }

          if ((item.itemType == itemType[itemType.oneByOneMultiplication] || item.itemType == itemType[itemType.oneByOneAddition]) && (!item.firstNumber || item.firstNumber == '' || !item.secondNumber || item.secondNumber == '')) {
            validationError += 'First number and second number are required\n';
          }

          if ((item.itemType == itemType[itemType.oneByOneMultiplication] || item.itemType == itemType[itemType.oneByOneAddition]) && (!item.options || item.options.length == 0)) {
            validationError += 'Options are required\n';
          }

          if ((item.itemType == itemType[itemType.oneByTwoDigraphs]) && (!item.leftDigraphs || item.leftDigraphs == '' || !item.rightDigraphs || item.rightDigraphs == '')) {
            validationError += 'Left and right digraphs are required\n';
          }

        });



      });


      if (validationError == '') {

        var newTypes = []
        var newItems = []
        var newUnits = []
        var order = 1;

        awesum.currentDatabase.homePageIconType = imageType[jsonText.homePageIconType as keyof typeof imageType];

        var mediaIds = [];

        mediaIds.push(awesum.currentDatabase.homePageIcon);

        var unitsInType = await awesum.AwesumDexieDB.serverDatabaseUnits.where('databaseId').equals(awesum.currentDatabase.id).toArray();
        for (const unit of unitsInType) {
          mediaIds.push(unit.homePageImage);
          mediaIds.push(unit.successSound);

          var itemsInUnit = await awesum.AwesumDexieDB.serverDatabaseItems.where('unitId').equals(unit.id).toArray();
          for (const item of itemsInUnit) {
            mediaIds.push((item as ServerSpellingDatabaseItemInterface).data.image);
            mediaIds.push((item as ServerSpellingDatabaseItemInterface).data.sound);
            mediaIds.push((item as ServerSpellingDatabaseItemInterface).data.successImage);
            mediaIds.push((item as ServerSpellingDatabaseItemInterface).data.successSound);
          }
        }

        //make medaiIds unique list
        mediaIds = [...new Set(mediaIds)];

        mediaIds = mediaIds.filter((mediaId: any) => mediaId != undefined && mediaId != '');

        var mediaItems = await this.$awesum.AwesumDexieDB.serverMedia.bulkGet(mediaIds);

        var foundExistingHomePageIcon = false;
        mediaItems.forEach((mediaItem: any) => {
          if (mediaItem.data == jsonText.homePageIcon) {
            awesum.currentDatabase.homePageIcon = mediaItem.id;
            foundExistingHomePageIcon = true;
          }
        });

        if (!foundExistingHomePageIcon) {
          var mediaItem = {
            id: uuid(),
            data: jsonText.homePageIcon,
            appId: this.$awesum.currentApp.id,
            created: new Date().getTime(),
            deleted: false,
            lastModified: new Date().getTime(),
            version: 0,
            size: jsonText.homePageIcon.length,
            touched: false
          };
          mediaItems.push(mediaItem);
          await this.$awesum.AwesumDexieDB.serverMedia.put(mediaItem as ServerMediaInterface);
          awesum.currentDatabase.homePageIcon = mediaItem.id;
        }

        var unitsInType = await awesum.AwesumDexieDB.serverDatabaseUnits.where('databaseId').equals(awesum.currentDatabase.id).toArray();

        for (const unit of unitsInType) {
          await this.$awesum.AwesumDexieDB.serverDatabaseItems.where('unitId').equals(unit.id).delete();
        }

        //delete all units in the current database type
        await this.$awesum.AwesumDexieDB.serverDatabaseUnits.where('databaseId').equals(awesum.currentDatabase.id).delete();



        var unitOrder = 1;
        for (const unit of jsonText.units) {

          var newUnit = {} as ServerDatabaseUnitInterface;
          newUnit.id = uuid();
          newUnit.databaseId = this.$awesum.currentDatabase.id;
          newUnit.order = unitOrder++;
          newUnit.name = unit.name;
          newUnit.successVideoType = successVideoType[unit.successVideoType as keyof typeof successVideoType];
          newUnit.successVideoUrl = unit.successVideoUrl;
          newUnit.successAnimations = unit.successAnimations;
          newUnit.successSoundType = audioType[unit.successSoundType as keyof typeof audioType];

          var foundExistingSuccessSound = false;
          mediaItems.forEach((mediaItem: any) => {
            if (mediaItem.data == unit.successSound) {
              newUnit.successSound = mediaItem.id;
              foundExistingSuccessSound = true;
            }
          });

          if (!foundExistingSuccessSound) {
            var mediaItem = {
              id: uuid(),
              data: unit.successSound,
              appId: this.$awesum.currentApp.id,
              created: new Date().getTime(),
              deleted: false,
              lastModified: new Date().getTime(),
              version: 0,
              size: unit.successSound.length,
              touched: false
            };
            mediaItems.push(mediaItem);
            await this.$awesum.AwesumDexieDB.serverMedia.put(mediaItem as ServerMediaInterface);
            newUnit.successSound = mediaItem.id;
          }

          var foundExistingHomePageImage = false;
          mediaItems.forEach((mediaItem: any) => {
            if (mediaItem.data == unit.homePageImage) {
              newUnit.homePageImage = mediaItem.id;
              foundExistingHomePageImage = true;
            }
          });

          if (!foundExistingHomePageImage) {
            var mediaItem = {
              id: uuid(),
              data: unit.homePageImage,
              appId: this.$awesum.currentApp.id,
              created: new Date().getTime(),
              deleted: false,
              lastModified: new Date().getTime(),
              version: 0,
              size: unit.homePageImage.length,
              touched: false
            };
            mediaItems.push(mediaItem);
            await this.$awesum.AwesumDexieDB.serverMedia.put(mediaItem as ServerMediaInterface);
            newUnit.homePageImage = mediaItem.id;
          }

          newUnits.push(newUnit);

          var itemOrder = 1;

          for (const item of unit.items) {


            var newItem = {
              id: uuid(),
              unitId: newUnit.id,
              databaseId: awesum.currentDatabase.id,
              lastModified: new Date().getTime(),
              deleted: false,
              version: 0,
              appId: this.$awesum.currentApp.id,
              created: new Date().getTime(),
              completed: false,
              order: itemOrder++,
              touched: true,
              itemType: item.itemType,
              data: {} as any,
              dataText: "",
            };

            var foundExistingSound = false;
            mediaItems.forEach((mediaItem: any) => {
              if (mediaItem.data == item.sound) {
                item.sound = mediaItem.id;
                foundExistingSound = true;
              }
            });

            if (!foundExistingSound) {
              var mediaItem = {
                id: uuid(),
                data: item.sound,
                appId: awesum.currentApp.id,
                created: new Date().getTime(),
                deleted: false,
                lastModified: new Date().getTime(),
                version: 0,
                size: item.sound.length,
                touched: false
              };
              mediaItems.push(mediaItem);
              await this.$awesum.AwesumDexieDB.serverMedia.put(mediaItem as ServerMediaInterface);
              item.sound = mediaItem.id;
            }

            var foundExistingSuccessSound = false;
            mediaItems.forEach((mediaItem: any) => {
              if (mediaItem.data == item.successSound) {
                item.successSound = mediaItem.id;
                foundExistingSuccessSound = true;
              }
            });

            if (!foundExistingSuccessSound) {
              var mediaItem = {
                id: uuid(),
                data: item.successSound,
                appId: this.$awesum.currentApp.id,
                created: new Date().getTime(),
                deleted: false,
                lastModified: new Date().getTime(),
                version: 0,
                size: item.successSound.length,
                touched: false
              };
              mediaItems.push(mediaItem);
              await this.$awesum.AwesumDexieDB.serverMedia.put(mediaItem);
              item.successSound = mediaItem.id;
            }

            if (item.itemType == itemType[itemType.spelling] || item.itemType == itemType[itemType.oneByTwoDigraphs]) {
              var foundExistingImage = false;
              mediaItems.forEach((mediaItem: any) => {
                if (mediaItem.data == item.image) {
                  item.image = mediaItem.id;
                  foundExistingImage = true;
                }
              });

              if (!foundExistingImage) {
                var mediaItem = {
                  id: uuid(),
                  data: item.image,
                  appId: this.$awesum.currentApp.id,
                  created: new Date().getTime(),
                  deleted: false,
                  lastModified: new Date().getTime(),
                  version: 0,
                  size: item.image.length,
                  touched: false
                };
                mediaItems.push(mediaItem);
                await this.$awesum.AwesumDexieDB.serverMedia.put(mediaItem);
                item.image = mediaItem.id;
              }
            }

            var foundExistingSuccessImage = false;
            mediaItems.forEach((mediaItem: any) => {
              if (mediaItem.data == item.successImage) {
                item.successImage = mediaItem.id;
                foundExistingSuccessImage = true;
              }
            });

            if (!foundExistingSuccessImage) {
              var mediaItem = {
                id: uuid(),
                data: item.successImage,
                appId: this.$awesum.currentApp.id,
                created: new Date().getTime(),
                deleted: false,
                lastModified: new Date().getTime(),
                version: 0,
                size: item.successImage.length,
                touched: false
              };
              mediaItems.push(mediaItem);
              await this.$awesum.AwesumDexieDB.serverMedia.put(mediaItem as ServerMediaInterface);
              item.successImage = mediaItem.id;
            }

            



            newItems.push(newItem);

            if (item.itemType == itemType[itemType.spelling]) {
              newItem.data = {
                image: item.image,
                letters: item.letters,
                sound: item.sound,
                text: item.text,
                audioType: audioType[item.audioType as keyof typeof audioType],
                imageType: imageType[item.imageType as keyof typeof imageType],
                visualHint: item.visualHint,
                successSound: item.successSound,
                successSoundType: audioType[item.successSoundType as keyof typeof audioType],
                successImage: item.successImage,
                successImageType: imageType[item.successImageType as keyof typeof imageType],
                successAnimations: item.successAnimations,
                successImageTime: item.successImageTime
              } as ServerSpellingDatabaseItemDataInterface;
            }
            else if (item.itemType == itemType[itemType.oneByOneMultiplication] || item.itemType == itemType[itemType.oneByOneAddition]) {
              newItem.data = {
                firstNumber: item.firstNumber,
                secondNumber: item.secondNumber,
                options: item.options,
                sound: item.sound,
                audioType: audioType[item.audioType as keyof typeof audioType],
                successSound: item.successSound,
                successSoundType: audioType[item.successSoundType as keyof typeof audioType],
                successImage: item.successImage,
                successImageType: imageType[item.successImageType as keyof typeof imageType],
                successAnimations: item.successAnimations,
                successImageTime: item.successImageTime
              } as ServerOneByOneMathDatabaseItemDataInterface;
            }
            else if (item.itemType == itemType[itemType.oneByTwoDigraphs]) {
              newItem.data = {
                leftDigraphs: item.leftDigraphs,
                rightDigraphs: item.rightDigraphs,
                sound: item.sound,
                text: item.text,
                audioType: audioType[item.audioType as keyof typeof audioType],
                successSound: item.successSound,
                successSoundType: audioType[item.successSoundType as keyof typeof audioType],
                successImage: item.successImage,
                successImageType: imageType[item.successImageType as keyof typeof imageType],
                successAnimations: item.successAnimations,
                successImageTime: item.successImageTime
              } as ServerOneByTwoDigraphsDatabaseItemDataInterface;
            }

          }

          
        }
        await this.$awesum.AwesumDexieDB.serverDatabaseItems.bulkPut(newItems as ServerDatabaseItemInterface[]);
          await this.$awesum.AwesumDexieDB.serverDatabaseUnits.bulkPut(newUnits as ServerDatabaseUnitInterface[]);
          await awesum.refreshCurrentDatabaseUnits();
          this.$router.push({ path: awesum.getDynamicUrl(awesum.currentDatabase as ServerDatabaseInterface, this.$router.currentRoute.value) })

          await awesum.cleanMedia();
      }
    },
    cancel() {
      this.$router.push({ path: awesum.getDynamicUrl(awesum.currentDatabaseUnit as ServerDatabaseUnitInterface, this.$router.currentRoute.value) })
    }
  }
};
</script>

<template>
  <div class="pageView">
    <h1>Database JSON</h1>

    <div class="content">
      <!-- Monaco Editor Container -->
      <div ref="editorContainer" style="height: 70svmin; width: 100%; border: 1px solid #ccc"></div>

      <div style="display: flex; justify-content: flex-end">
        <button class="btn btn-primary" style="margin-top: 2svmin; margin-bottom: 2svmin; margin-right: 2svmin"
          v-on:click="saveJson()">
          {{ $t($resources.Save.key) }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.monaco-editor-container {
  margin-top: 20px;
}
</style>
