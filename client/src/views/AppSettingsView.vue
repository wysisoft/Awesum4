<script lang="ts">
import { ref } from 'vue';
import EditTextComponent from '@/components/EditTextComponent.vue';
import EditImageComponent from '@/components/EditImageComponent.vue';
import * as Modal from '../components/Modal.vue';
import { v4 as uuid } from 'uuid';
import type { Table } from 'dexie';
import { audioType, imageType } from '../../../server/typebox';
import { type ServerDatabaseInterface } from '../../../server/serverInterfaces/ServerDatabaseInterface';
import { type ServerMediaInterface } from '../../../server/serverInterfaces/ServerMediaInterface';
import { validateApp } from '../../../server/javascriptClientValidations/app';
import { followerRequestStatus } from '../../../server/typebox';
import { type ServerFollowerRequestInterface } from '../../../server/serverInterfaces/ServerFollowerRequestInterface';
import { type ServerFollowerDatabaseInterface } from '../../../server/serverInterfaces/ServerFollowerDatabaseInterface';
import { awesum } from '@/awesum';

export default {
  setup() {
    let showModal = ref(false);
    let currentDatabase = ref({} as ServerDatabaseInterface);
    let homepageImage: typeof EditImageComponent = ref(null) as any;
    return {
      showModal,
      currentDatabase,
      homepageImage,
      validateApp
    }
  },

  async beforeCreate() {
  },
  mounted() {
    this.homepageImage = this.$refs.homepageImage as typeof EditImageComponent;
  },
  async beforeRouteLeave(to, from, next) {

    var currentImageData = (await this.$awesum.AwesumDexieDB.serverMedia.get(this.$awesum.currentApp.homePageImage))?.data;


    if (this.homepageImage.imageSource == 'From File') {
      this.$awesum.currentApp.homePageImageType = imageType.File
    }
    if (this.homepageImage.imageSource == 'From Web Address') {
      this.$awesum.currentApp.homePageImageType = imageType.WebAddress
    }
    if (this.homepageImage.imageSource == 'From Camera') {
      this.$awesum.currentApp.homePageImageType = imageType.Camera
    }

    if (currentImageData != this.homepageImage.imageData) {

      if (this.$awesum.currentApp.homePageImageType != imageType.None) {
        var mediaId = uuid();

        await this.$awesum.AwesumDexieDB.serverMedia.add({
          id: mediaId,
          databaseId: this.$awesum.currentDatabase?.id,
          lastModified: new Date().getTime(),
          version: 0,
          appId: this.$awesum.currentApp.id,
          created: new Date().getTime(),
          data: this.homepageImage.imageData,
          size: this.homepageImage.imageData?.length,
          touched: true
        } as ServerMediaInterface)

        this.$awesum.currentApp.homePageImage = mediaId;

      }
      else if (this.$awesum.currentApp.homePageImage != this.homepageImage.imageData) {
        this.$awesum.currentApp.homePageImage = this.homepageImage.imageData;
      }

      await this.$awesum.waitForDexie();

    }

    next();
  },
  methods: {
    showDeleteModal(database: ServerDatabaseInterface) {
      this.currentDatabase = database;
      this.showModal = true;
    },
    async deleteDatabase() {
      this.showModal = false;
      await this.$awesum.AwesumDexieDB.serverDatabases.delete(this.currentDatabase.id);
      await this.$awesum.refreshCurrentDatabases();

      var localFollowerRequest = await this.$awesum.AwesumDexieDB.serverFollowerRequests.filter((x) => x.followerAppId == this.$awesum.ownerApp.id && x.leaderAppId == this.$awesum.ownerApp.id).first();
      await this.$awesum.AwesumDexieDB.serverFollowerDatabases.filter((x) => x.databaseId == this.currentDatabase.id && x.followerRequestId != localFollowerRequest?.id).delete();
      await this.$awesum.refreshCurrentFollowerDatabases();
      
    },
    async addDatabase() {
      //change to not use linq
      var maxOrder = this.$awesum.currentDatabases.length == 0 ? 0 : this.$awesum.currentDatabases.reduce((max, database) => Math.max(max, database.order), 0);
      var databaseId = uuid();
      await this.$awesum.AwesumDexieDB.serverDatabases.add({
        //id: maxId + 1,
        // name: 'Local' + (maxOrder + 1).toString(),
        id: databaseId,
        // appId: this.$awesum.awesum.currentServerApp.id,
        // lastModified: new Date().toISOString(),
        // appUniqueId: this.$awesum.currentServerApp.uniqueId,
        // deleted: false,
        // version: 0,
        // order: maxOrder + 1,
        // loginid: '',
        // groupName: ''
        appId: this.$awesum.currentApp.id,
        name: 'Local' + (maxOrder + 1).toString(),
        created: new Date().getTime(),
        lastModified: new Date().getTime(),
        order: maxOrder + 1,
        touched: true,
        version: 0,
        homePageIcon: this.$awesum.defaultDatabaseBackgroundGuid,
        homePageIconType: imageType.WebAddress
      } as ServerDatabaseInterface);

      await this.$awesum.refreshCurrentDatabases();

      //add followerRequest to own database
      var followerRequestId = uuid();
      await this.$awesum.AwesumDexieDB.serverFollowerRequests.add({
        leaderAppId: this.$awesum.currentApp.id,
        followerAppId: this.$awesum.currentApp.id,
        id: followerRequestId,
        followerName: this.$awesum.currentApp.name,
        leaderName: this.$awesum.currentApp.name,
        followerEmail: this.$awesum.currentApp.email,
        leaderEmail: this.$awesum.currentApp.email,
        initiatedByFollower: false,
        lastModified: new Date().getTime(),
        version: 0,
        status: followerRequestStatus.Pending,
        groups: ''
      } as ServerFollowerRequestInterface);

      await this.$awesum.refreshServerFollowerRequests();

      //add followerDatabase to own database
      await this.$awesum.AwesumDexieDB.serverFollowerDatabases.add({
        followerRequestId: followerRequestId,
        id: uuid(),
        databaseId: databaseId,
        touched: true,
        created: new Date().getTime(),
        lastModified: new Date().getTime(),
        version: 0,
      } as ServerFollowerDatabaseInterface);

      if (this.$awesum.currentApp.id == this.$awesum.ownerApp.id) {
        await this.$awesum.AwesumDexieDB.serverFollowerDatabases.add({
          followerRequestId: followerRequestId,
          id: uuid(),
          databaseId: databaseId,
        } as ServerFollowerDatabaseInterface);
      }


    }
  },
};

</script>

<template>
  <div class="pageView">
    <h1>{{ $awesum.currentApp.name }} {{ $t($resources.Settings.key) }}</h1>

    <div class="content">


      <h2 style="font-size:3.5svmin;">{{ $t($resources.Add_Database.key) }}</h2>


      <div v-if="$awesum.currentApp.id == $awesum.ownerApp.id">
        <button class="btn btn-primary" style="margin-left:2svmin;margin-bottom:1svmin;" v-on:click="addDatabase()">{{
          $t($resources.Add_Database.key) }}</button>
      </div>

      <h2 v-if="$awesum.currentDatabases.length > 0" style="font-size:3.5svmin; ">{{
        $t($resources.Edit_Databases.key) }}</h2>
      <div v-for="database in $awesum.currentDatabases" class="listItem"
        style="display:flex;flex-direction:row;align-items:baseline">

        <router-link custom :to="{ path: $awesum.getDynamicUrl(database as ServerDatabaseInterface, $route) }"
          v-slot="{ href }" style="margin-right:1svmin;">
          <button class="btn btn-primary" style="margin-left:2svmin;" @click="$router.push(href)">
            <span>{{ $t($resources.Edit.key) }}</span>
          </button>
        </router-link>

        <button class="btn btn-primary" v-on:click="showDeleteModal(database)"
          style="margin-right:1svmin;margin-bottom:1svmin;">{{
            $t($resources.Delete.key) }}</button>
        <div class="areaNameDiv">{{ database.name }}</div>
      </div>

      <h2 style="font-size:3.5svmin;">{{ $t($resources.App_Settings.key) }}</h2>

      <EditTextComponent  style="margin-left:2svmin;" :labelWidth="'16.5svmin'" :inputWidth="'99%'" :required="true"
        :forbiddenChars="'/'" :requiresEditAndSave="true" :redirectUrlAfterSave="'/' + $t($resources.Settings.key)"
        :parentObject="$awesum.currentApp" :displayName="'Name'" :propertyName="'name'"
        :validation-function="validateApp" />


      <h2 style="font-size:3.5svmin;margin-top:1svmin;">{{ $t($resources.Background_Image.key) }}</h2>
      <EditImageComponent style="margin-left:2svmin;" ref="homepageImage"
        :imageType="$awesum.currentApp.homePageImageType" :image="$awesum.currentApp.homePageImage"
        :inputWidth="'99%'" />



      <Modal @hidden="showModal = false" :shown="showModal" :title="$t($resources.Delete_Database.key)"
        :focusedElementId="'cancelButton'">
        <div class="modal-body">

          <span>Are you sure you want to delete database {{ currentDatabase.name }}</span>
        </div>
        <div class="modal-footer" style="justify-content:space-between">
          <button id="cancelButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal"
            ref="cancelButton">Cancel</button>
          <button type="button" class="btn btn-primary" ref="submitButton" @click="deleteDatabase">Submit</button>
        </div>
      </Modal>
    </div>

  </div>
</template>
<style scoped>
.pageView {
  background-color: rgb(251, 251, 251);
}
</style>