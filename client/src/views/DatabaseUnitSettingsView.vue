<script lang="ts">
import { reactive, ref } from 'vue';
import { v4 as uuid } from 'uuid';
import type { ServerDatabaseItemInterface } from "../../../server/serverInterfaces/ServerDatabaseItemInterface";
import { successVideoType, itemType } from "../../../server/typebox";
import { audioType, imageType } from "../../../server/typebox";
import { I18nGlobal } from '@/i18nGlobal';
import type { ServerDatabaseUnitInterface } from "../../../server/serverInterfaces/ServerDatabaseUnitInterface";
import EditImageComponent from '@/components/EditImageComponent.vue';
import type { ServerMediaInterface } from '../../../server/serverInterfaces/ServerMediaInterface';
import type { ServerSpellingDatabaseItemInterface } from '../../../server/serverInterfaces/ServerSpellingDatabaseItemInterface';
import type { ServerSpellingDatabaseItemDataInterface } from '../../../server/serverInterfaces/ServerSpellingDatabaseItemDataInterface';
import type { ServerOneByTwoDigraphsDatabaseItemInterface } from '../../../server/serverInterfaces/ServerOneByTwoDigraphsDatabaseItemInterface';
import { type ServerOneByTwoDigraphsDatabaseItemDataInterface } from '../../../server/serverInterfaces/ServerOneByTwoDigraphsDatabaseItemDataInterface';
import Multiselect from 'vue-multiselect';
import { type ServerOneByOneMathDatabaseItemInterface } from '../../../server/serverInterfaces/ServerOneByOneMathDatabaseItemInterface';


export default {
  components: {
    Multiselect
  },
  setup() {
    let showModal = ref(false);
    let currentItem = ref({} as ServerDatabaseItemInterface);

    var editImageComponent: typeof EditImageComponent = ref({}) as any;
    var editSuccessSoundComponent = ref({}) as any;

    // Setup for item type selection
    let selectedItemType = ref<{label: string; value: itemType} | null>(null);
    
    const itemTypeOptions = [
      {
        category: 'Spelling',
        items: [
          { label: 'Spelling', value: itemType.spelling }
        ]
      },
      {
        category: 'Math',
        items: [
          { label: 'One by One Addition', value: itemType.oneByOneAddition },
          { label: 'One by One Multiplication', value: itemType.oneByOneMultiplication }
        ]
      },
      {
        category: 'Reading',
        items: [
          { label: 'One by Two Digraphs', value: itemType.oneByTwoDigraphs }
        ]
      }
    ];

    return {
      showModal,
      currentItem,
      I18nGlobal,
      successVideoType,
      editImageComponent,
      editSuccessSoundComponent,
      selectedItemType,
      itemTypeOptions,
      itemType
    }
  },
  async mounted() {
    this.editImageComponent = this.$refs.homepageImage as typeof EditImageComponent;
    this.editSuccessSoundComponent = this.$refs.editSuccessSoundComponent;
    await this.$awesum.refreshCurrentAppRouters();
  },
  async beforeRouteLeave(to, from, next) {



    var currentSuccessImageData = '';
    if (this.$awesum.currentDatabaseUnit.homePageImage) {
      var successImageMedia = await this.$awesum.AwesumDexieDB.serverMedia.get(this.$awesum.currentDatabaseUnit.homePageImage);
      if (successImageMedia) {
        currentSuccessImageData = successImageMedia.data;
      }
    }

    if (this.editImageComponent.imageSource == 'From File') {
      this.$awesum.currentDatabaseUnit.homePageImageType = imageType.File
    }
    if (this.editImageComponent.imageSource == 'From Web Address') {
      this.$awesum.currentDatabaseUnit.homePageImageType = imageType.WebAddress
    }
    if (this.editImageComponent.imageSource == 'From Camera') {
      this.$awesum.currentDatabaseUnit.homePageImageType = imageType.Camera
    }
    if (this.editImageComponent.imageSource == 'None') {
      this.$awesum.currentDatabaseUnit.homePageImageType = imageType.None;
    }

    if (currentSuccessImageData && currentSuccessImageData != this.editImageComponent.imageData) {

      if (this.$awesum.currentDatabaseUnit.homePageImageType != imageType.None) {
        var mediaId = uuid();

        await this.$awesum.AwesumDexieDB.serverMedia.add({
          id: mediaId,
          databaseId: this.$awesum.currentDatabase.id,
          lastModified: new Date().getTime(),
          version: 0,
          appId: this.$awesum.currentApp.id,
          created: new Date().getTime(),
          data: this.editImageComponent.imageData,
          size: this.editImageComponent.imageData?.length,
          touched: true
        } as ServerMediaInterface)

        this.$awesum.currentDatabaseUnit.homePageImage = mediaId;

      }
      else if (this.$awesum.currentDatabaseUnit.homePageImage != this.editImageComponent.imageData) {
        this.$awesum.currentDatabaseUnit.homePageImage = this.editImageComponent.imageData;
      }

      await this.$awesum.waitForDexie();

    }



    if (this.editSuccessSoundComponent.soundSource == 'From File') {
      this.$awesum.currentDatabaseUnit.successSoundType = audioType.File
    }
    if (this.editSuccessSoundComponent.soundSource == 'From Web Address') {
      this.$awesum.currentDatabaseUnit.successSoundType = audioType.WebAddress
    }
    if (this.editSuccessSoundComponent.soundSource == 'From Microphone') {
      this.$awesum.currentDatabaseUnit.successSoundType = audioType.Microphone
    }
    if (this.editSuccessSoundComponent.soundSource == 'From Text To Speech') {
      this.$awesum.currentDatabaseUnit.successSoundType = audioType.TTS
    }

    var currentSuccessSoundData = '';
    if (this.$awesum.currentDatabaseUnit.successSound) {
      var successSoundMedia = await this.$awesum.AwesumDexieDB.serverMedia.get(this.$awesum.currentDatabaseUnit.successSound);
      if (successSoundMedia) {
        currentSuccessSoundData = successSoundMedia.data;
      }
    }

    if (
      currentSuccessSoundData != this.editSuccessSoundComponent.soundData) {

      if (this.$awesum.currentDatabaseUnit.successSoundType != audioType.WebAddress
        && this.$awesum.currentDatabaseUnit.successSoundType != audioType.TTS) {

        var mediaId = uuid();

        await this.$awesum.AwesumDexieDB.serverMedia.add({
          id: mediaId,
          databaseId: this.$awesum.currentDatabase.id,
          lastModified: new Date().getTime(),
          version: 0,
          appId: this.$awesum.currentApp.id,
          created: new Date().getTime(),
          data: this.editSuccessSoundComponent.soundData,
          size: this.editSuccessSoundComponent.soundData.length,
          touched: true
        } as ServerMediaInterface)

        this.$awesum.currentDatabaseUnit.successSound = mediaId;
      }
      else if (this.$awesum.currentDatabaseUnit.successSound != this.editSuccessSoundComponent.soundData) {
        this.$awesum.currentDatabaseUnit.successSound = this.editSuccessSoundComponent.soundData;
      }



      await this.$awesum.waitForDexie();

    }

    await this.$awesum.cleanMedia();

    next();
  },
  methods: {
    successVideoTypeChanged() {
      this.$awesum.currentDatabaseUnit.successVideoUrl = '';
      this.$awesum.refreshNumber++;
    },
    async addItemFromSelect() {
      if (this.selectedItemType) {
        await this.addItem(this.selectedItemType.value);
        this.selectedItemType = null; // Reset selection after adding
      }
    },
    async addItem(type: itemType) {
      var maxOrder = this.$awesum.currentDatabaseItems.length == 0 ? 0 : this.$awesum.currentDatabaseItems.reduce((max, databaseItem) => Math.max(max, databaseItem.order), 0);

      /*      export interface ServerSpellingDatabaseItemInterface {
       data: {
         letters: string;
         image: string;
         sound: string;
         text: string;
         imageType: number;
         visualHint: string;
         audioType: number;
         successSound: string;
         successSoundType: number;
         successImage: string;
         successImageType: number;
         successAnimations: string;
         successImageTime: number;
         
       };
       order: number;
       unitId: string;
       appId: string;
       touched: boolean;
       created: number;
       lastModified: number;
       version: number;
       databaseId: string;
       id: string;
       
     } */

      if (type == itemType.spelling) {

        await this.$awesum.AwesumDexieDB.serverDatabaseItems.add({
          id: uuid(),
          unitId: this.$awesum.currentDatabaseUnit.id,
          name: "Item " + (maxOrder + 1),
          order: maxOrder + 1,
          databaseId: this.$awesum.currentDatabase.id,
          lastModified: new Date().getTime(),
          deleted: false,
          version: 0,
          appId: this.$awesum.currentApp.id,
          created: new Date().getTime(),
          touched: true,
          completed: false,
          dataText: "",
          data: {
            letters: 'w,o,r\no,r,d\nr,d,e\nd,e,l',
            image: this.$awesum.emptyImageGuid,
            sound: this.$awesum.ttsGuid,
            text: 'word',
            imageType: imageType.WebAddress,
            visualHint: 'Visual Hint',
            audioType: audioType.TTS,
            successSound: this.$awesum.defaultSuccessSoundGuid,
            successSoundType: audioType.WebAddress,
            successImage: this.$awesum.defaultSuccessImageGuid,
            successImageType: imageType.WebAddress,
            successAnimations: "Fireworks,Balloons,Confetti",
            successImageTime: 3000,
          } as ServerSpellingDatabaseItemDataInterface,
          itemType: itemType.spelling,

        } as ServerSpellingDatabaseItemInterface);
      }
      else if (type == itemType.oneByTwoDigraphs) {
        await this.$awesum.AwesumDexieDB.serverDatabaseItems.add({
          id: uuid(),
          unitId: this.$awesum.currentDatabaseUnit.id,
          name: "Item " + (maxOrder + 1),
          order: maxOrder + 1,
          databaseId: this.$awesum.currentDatabase.id,
          lastModified: new Date().getTime(),
          deleted: false,
          version: 0,
          appId: this.$awesum.currentApp.id,
          created: new Date().getTime(),
          touched: true,
          completed: false,
          dataText: "",
          data: {
            leftDigraphs: 'c,b,s,h,r',
            rightDigraphs: 'an,at',
            text: 'cat',
            image: this.$awesum.emptyImageGuid,
            sound: this.$awesum.ttsGuid,
            imageType: imageType.WebAddress,
            visualHint: 'Visual Hint',
            audioType: audioType.TTS,
            successSound: this.$awesum.defaultSuccessSoundGuid,
            successSoundType: audioType.WebAddress,
            successImage: this.$awesum.defaultSuccessImageGuid,
            successImageType: imageType.WebAddress,
            successAnimations: "Fireworks,Balloons,Confetti",
            successImageTime: 3000,
          },
          itemType: itemType.oneByTwoDigraphs,

        } as ServerOneByTwoDigraphsDatabaseItemInterface);
      }
      else if (type == itemType.oneByOneMultiplication) {
        await this.$awesum.AwesumDexieDB.serverDatabaseItems.add({
          id: uuid(),
          unitId: this.$awesum.currentDatabaseUnit.id,
          name: "Item " + (maxOrder + 1),
          order: maxOrder + 1,
          databaseId: this.$awesum.currentDatabase.id,
          lastModified: new Date().getTime(),
          deleted: false,
          version: 0,
          appId: this.$awesum.currentApp.id,
          created: new Date().getTime(),
          touched: true,
          completed: false,
          dataText: "",
          data: {
            firstNumber: 2,
            secondNumber: 3,
            options: '6,12,18,24,30,36,42,48,54,60',
            sound: this.$awesum.ttsGuid,
            audioType: audioType.TTS,
            successSound: this.$awesum.defaultSuccessSoundGuid,
            successSoundType: audioType.WebAddress,
            successImage: this.$awesum.defaultSuccessImageGuid,
            successImageType: imageType.WebAddress,
            successAnimations: "Fireworks,Balloons,Confetti",
            successImageTime: 3000,
          },
          itemType: itemType.oneByOneMultiplication,

        } as ServerOneByOneMathDatabaseItemInterface);
      }
      else if (type == itemType.oneByOneAddition) {
        await this.$awesum.AwesumDexieDB.serverDatabaseItems.add({
          id: uuid(),
          unitId: this.$awesum.currentDatabaseUnit.id,
          name: "Item " + (maxOrder + 1),
          order: maxOrder + 1,
          databaseId: this.$awesum.currentDatabase.id,
          lastModified: new Date().getTime(),
          deleted: false,
          version: 0,
          appId: this.$awesum.currentApp.id,
          created: new Date().getTime(),
          touched: true,
          completed: false,
          dataText: "",
          data: {
            firstNumber: 2,
            secondNumber: 3,
            options: '6,12,18,24,30,36,42,48,54,60',
            sound: this.$awesum.ttsGuid,
            audioType: audioType.TTS,
            successSound: this.$awesum.defaultSuccessSoundGuid,
            successSoundType: audioType.WebAddress,
            successImage: this.$awesum.defaultSuccessImageGuid,
            successImageType: imageType.WebAddress,
            successAnimations: "Fireworks,Balloons,Confetti",
            successImageTime: 3000,
          },
          itemType: itemType.oneByOneAddition,
        } as ServerOneByOneMathDatabaseItemInterface);
      }

      
      await this.$awesum.refreshCurrentDatabaseItems();
    },


    async deleteItem() {
      this.showModal = false;
      await this.$awesum.AwesumDexieDB.serverDatabaseItems.delete(this.currentItem.id);

      await this.$awesum.refreshCurrentDatabaseItems();

      //fix all the orders
      var order = 1;
      var items = this.$awesum.currentDatabaseItems;
      for (var i = 0; i < items.length; i++) {
        items[i].order = order++;
      }

      await this.$awesum.AwesumDexieDB.serverDatabaseItems.bulkPut(items);

      await this.$awesum.cleanMedia();
    },
    showDeleteModal(item: any) {
      this.currentItem = item;
      this.showModal = true;
    }
  }
}
</script>

<template>
  <div class="pageView">
    <h1>{{ $t($resources.Unit_Settings.key) }}</h1>

    <div class="content">

      <h2 style="font-size:3.5svmin;">{{ $t($resources.Add_Item.key) }}</h2>

      <div id="itemTypeSelect" style="margin-left:2svmin;margin-bottom:2svmin;max-width:48svmin;">
        <multiselect 
          v-model="selectedItemType" 
          :options="itemTypeOptions"
          :searchable="true"
          :close-on-select="true"
          :show-labels="false"
          placeholder="Select item type..."
          label="label"
          track-by="value"
          group-values="items"
          group-label="category"
          :group-select="false"
          :options-limit="300"
          :limit="3"
          :max-height="600"
          :show-no-results="false"
          @select="addItemFromSelect"
          :internal-search="true">
        </multiselect>
      </div>

      <h2 v-if="$awesum.currentDatabaseItems.length > 0" style="font-size:3.5svmin; ">{{ $t($resources.Items.key) }}
      </h2>

      <div v-for="item in $awesum.currentDatabaseItems" class="listItem"
        style="display:flex;flex-direction:row;align-items:baseline">
        <router-link custom
          :to="{ path: $awesum.getDynamicUrl(item as ServerDatabaseItemInterface, $awesum.router.currentRoute) }"
          v-slot="{ href }">
          <button class="btn btn-primary" style="margin-left:2svmin;margin-right:1svmin;margin-bottom:1svmin;"
            @click="$router.push(href)">
            <span>{{ $t($resources.Edit.key) }}</span>
          </button>
        </router-link>

        <button class="btn btn-primary" style="margin-right:1svmin;" v-on:click="showDeleteModal(item)">{{
          $t($resources.Delete.key) }}</button>
        <div class="unitName">{{  item.itemType == itemType.spelling || item.itemType == itemType.oneByTwoDigraphs ? item.order 
        : item.itemType == itemType.oneByOneMultiplication ? (item as ServerOneByOneMathDatabaseItemInterface).data.firstNumber + ' x ' 
        + (item as ServerOneByOneMathDatabaseItemInterface).data.secondNumber 
        : item.itemType == itemType.oneByOneAddition ? (item as ServerOneByOneMathDatabaseItemInterface).data.firstNumber + ' + ' 
        + (item as ServerOneByOneMathDatabaseItemInterface).data.secondNumber : '' }}</div>
      </div>

      <h2 style="font-size:3.5svmin;">{{ $t($resources.Edit_Json.key) }}</h2>

      <router-link custom
        :to="{ path: $awesum.getDynamicUrl($awesum.currentDatabaseUnit as ServerDatabaseUnitInterface, $awesum.router.currentRoute) + '/EditJson' }"
        v-slot="{ href }">
        <button @click="$router.push(href)" style="margin-left:2svmin;" class="btn btn-primary">
          <span>{{ $t($resources.Edit_Json.key) }}</span>
        </button>
      </router-link>

      <h2 style="font-size:3.5svmin;margin-top:2svmin; ">{{ $t($resources.Unit_Settings.key) }}</h2>

      <EditTextComponent style="margin-left:2svmin;" :labelWidth="'25svmin'" :inputWidth="'99%'"
        :requiresEditAndSave="true"
        :redirectUrlAfterSave="'/' + $t($resources.i.key) + '/' + $t($resources.Settings.key) + '/' + encodeURI($awesum.currentApp.name) + '/' + encodeURI($awesum.currentDatabase.name) + '/' + $t($resources.Spelling.key)"
        :parentObject="$awesum.currentDatabaseUnit" :displayName="'Name'" :propertyName="'name'" />

      <EditTextComponent style="margin-left:2svmin;margin-top:1svmin;" :labelWidth="'25svmin'" :inputWidth="'99%'"
        :parentObject="$awesum.currentDatabaseUnit" :displayName="'Points'" :propertyName="'points'" />

      <div class="input-group mb-3" style="width:93svmin;margin-left:2svmin;margin-top:1svmin;margin-bottom:2svmin;">
        <label style="width:25svmin;" class="input-group-text" for="routerSelect">Router</label>
        <select class="form-select" id="routerSelect" v-model="$awesum.currentDatabaseUnit.router"
          style="width:68svmin;">
          <option :value="$awesum.emptyGuid">None</option>
          <option v-for="router in $awesum.currentAppRouters" :key="router.id" :value="router.id"
            :selected="$awesum.currentDatabaseUnit.router == router.id">
            {{ router.routerMac }} ({{ router.ipAddress }})
          </option>
        </select>
      </div>

      <div v-if="$awesum.currentDatabaseUnit.router != $awesum.emptyGuid" class="input-group mb-3"
        style="width:93svmin;margin-left:2svmin;margin-bottom:2svmin;">
        <label style="width:25svmin;" class="input-group-text" for="routerTimeSelect">Router Time</label>
        <select class="form-select" id="routerTimeSelect" v-model="$awesum.currentDatabaseUnit.routerTime"
          style="width:68svmin;">
          <option value="0">None</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
          <option value="20">20 minutes</option>
          <option value="25">25 minutes</option>
          <option value="30">30 minutes</option>
          <option value="40">40 minutes</option>
          <option value="50">50 minutes</option>
          <option value="60">1 hour</option>
        </select>
      </div>



      <div v-if="$awesum.currentDatabaseUnit.router != $awesum.emptyGuid" class="input-group mb-3"
        style="width:93svmin;margin-left:2svmin;margin-bottom:2svmin;">
        <label style="width:25svmin;" class="input-group-text" for="routerTimeImmediateSelect">Immediate Time</label>
        <select class="form-select" id="routerTimeImmediateSelect"
          v-model="$awesum.currentDatabaseUnit.routerTimeImmediate" style="width:68svmin;">
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
      </div>

      <h2 style="font-size:3.5svmin;margin-top:2svmin; ">{{ $t($resources.Success_Animations.key) }}</h2>

      <div class="input-group mb-3" style="width:93svmin;margin-left:2svmin;margin-top:1svmin;">
        <label style="width:25svmin;" class="input-group-text" for="inputGroupSelect01">Success Video</label>
        <select @change="successVideoTypeChanged" class="form-select"
          v-model="$awesum.currentDatabaseUnit.successVideoType" style="width:68svmin;">
          <option value="0">None</option>
          <option value="1">From YouTube</option>
          <option value="2">From Giphy</option>
        </select>
      </div>

      <EditTextComponent style="margin-left:2svmin;margin-top:1svmin;" :key="$awesum.refreshNumber"
        v-if="$awesum.currentDatabaseUnit.successVideoType != successVideoType.None" :labelWidth="'25svmin'"
        :inputWidth="'93svmin'" :parentObject="$awesum.currentDatabaseUnit"
        :displayName="($awesum.currentDatabaseUnit.successVideoType == successVideoType.YouTube ? 'YouTube Embed' : 'Giphy') + ' Url'"
        :propertyName="'successVideoUrl'" />

      <EditMultiselectComponent style="margin-left:2svmin;margin-top:1svmin;" :inputWidth="'68svmin'"
        :labelWidth="'25svmin'" :multiple="true" :underText="'Choose the success animations'" ref="followerGroups"
        :parentObject="$awesum.currentDatabaseUnit" :displayName="'Follower Group'" :propertyName="'successAnimations'"
        :label="'Success Animations'" :options="['Fireworks', 'Balloons', 'Confetti']" />

      <h2 style="font-size:3.5svmin;margin-top:1svmin;">{{ $t($resources.Success_Sound.key) }}</h2>
      <EditAudioComponent style="margin-left:2svmin;" ref="editSuccessSoundComponent" :audioType="$awesum.currentDatabaseUnit.successSoundType"
        :audio="$awesum.currentDatabaseUnit.successSound" :allowNone="true" />

      <h2 style="font-size:3.5svmin;margin-top:1svmin;">{{ $t($resources.Background_Image.key) }}</h2>
      <EditImageComponent style="margin-left:2svmin;" ref="homepageImage"
        :imageType="$awesum.currentDatabaseUnit.homePageImageType" :image="$awesum.currentDatabaseUnit.homePageImage" />

      <Modal @hidden="showModal = false" :shown="showModal" :title="'Delete Item'" :focusedElementId="'cancelButton'">
        <div class="modal-body">

          <span>Are you sure you want to delete item {{ currentItem && (currentItem as
            ServerSpellingDatabaseItemInterface).data ? (currentItem as ServerSpellingDatabaseItemInterface).data.text :
            '??' }}</span>
        </div>
        <div class="modal-footer" style="justify-content:space-between">
          <button id="cancelButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal"
            ref="cancelButton">Cancel</button>
          <button type="button" class="btn btn-primary" ref="submitButton" @click="deleteItem">Submit</button>
        </div>
      </Modal>

    </div>
  </div>
</template>
<style src="/public/vue-multiselect0.0.0.css"></style>
<style scoped>
.pageView {
  background-color: rgb(251, 251, 251);
}
</style>
<style>
#itemTypeSelect .multiselect__placeholder {
  font-size: 2svmin ;
  padding-top: 1.3svmin;
  color:black;
}
#itemTypeSelect .multiselect__input {
  padding-top: 1svmin;
  font-size: 2svmin;
}
#itemTypeSelect .multiselect__option{
  font-size: 2svmin;
  padding-top: 2svmin;
}

</style>