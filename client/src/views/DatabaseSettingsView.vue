<script lang="ts">
import { ref } from 'vue';
import EditTextComponent from '@/components/EditTextComponent.vue';
import * as Modal from '../components/Modal.vue';
import { v4 as uuid } from 'uuid';
import type { Table } from 'dexie';
import EditImageComponent from '@/components/EditImageComponent.vue';
import { type ServerMediaInterface } from '../../../server/serverInterfaces/ServerMediaInterface';
import type { ServerDatabaseUnitInterface } from '../../../server/serverInterfaces/ServerDatabaseUnitInterface';

import { type ServerFollowerDatabaseInterface } from '../../../server/serverInterfaces/ServerFollowerDatabaseInterface';
import { type ServerDatabaseInterface } from '../../../server/serverInterfaces/ServerDatabaseInterface';
import type { ServerFollowerRequestInterface } from '../../../server/serverInterfaces/ServerFollowerRequestInterface';
import { itemType } from '../../../server/typebox';

import { successVideoType } from '../../../server/typebox';
import { audioType, imageType } from '../../../server/typebox';
import { constants } from '../../../server/constants';
import { awesum } from '@/awesum';

export default {
  components: {
    Modal,
    EditTextComponent
  },
  setup() {
    const existingAssignments = ref<Array<{ followerDatabase: ServerFollowerDatabaseInterface, displayName: string, isGroup: boolean }>>([]);

    return {
      showModal: ref(false),
      homepageImage: ref(null) as any as typeof EditImageComponent,
      currentType: ref(null) as any,
      itemType,
      existingAssignments,
    }
  },
  async beforeRouteLeave(to, from, next) {

    var currentImageData = (await this.$awesum.AwesumDexieDB.serverMedia.get(this.$awesum.currentDatabase.homePageIcon))?.data;

    if (this.homepageImage.imageSource == 'From File') {
      this.$awesum.currentDatabase.homePageIconType = imageType.File
    }
    if (this.homepageImage.imageSource == 'From Web Address') {
      this.$awesum.currentDatabase.homePageIconType = imageType.WebAddress
    }
    if (this.homepageImage.imageSource == 'From Camera') {
      this.$awesum.currentDatabase.homePageIconType = imageType.Camera
    }

    if (currentImageData != this.homepageImage.imageData) {

      if (this.$awesum.currentDatabase.homePageIconType != imageType.None) {
        var mediaId = uuid();

        await this.$awesum.AwesumDexieDB.serverMedia.add({
          id: mediaId,
          databaseId: this.$awesum.currentDatabase?.id,
          lastModified: new Date().getTime(),
          version: 0,
          appId: this.$awesum.currentDatabase.appId,
          created: new Date().getTime(),
          data: this.homepageImage.imageData,
          size: this.homepageImage.imageData?.length,
          touched: true
        } as ServerMediaInterface)

        this.$awesum.currentDatabase.homePageIcon = mediaId;

      }
      else if (this.$awesum.currentDatabase.homePageIcon != this.homepageImage.imageData) {
        this.$awesum.currentDatabase.homePageIcon = this.homepageImage.imageData;
      }

      await this.$awesum.waitForDexie();

    }

    next();
  },
  async beforeCreate() {
  },
  async mounted() {
    this.homepageImage = this.$refs.homepageImage as typeof EditImageComponent;
    await this.loadExistingAssignments();
  },
  methods: {
    showDeleteModal(typ: ServerDatabaseUnitInterface) {
      this.currentType = typ;
      this.showModal = true;
    },
    async deleteType() {
      this.showModal = false;

      //in a single transaction, delete all items and units under this.currentType, then delete this.currentType
      await this.$awesum.AwesumDexieDB.transaction('rw',
        this.$awesum.AwesumDexieDB.serverDatabaseUnits,
        this.$awesum.AwesumDexieDB.serverDatabaseItems, async () => {

          await this.$awesum.AwesumDexieDB.serverDatabaseItems.where('unitId').equals(this.currentType.id).delete();


          await this.$awesum.AwesumDexieDB.serverDatabaseUnits.delete(this.currentType.id);
          await this.$awesum.refreshCurrentDatabaseUnits();

          var order = 1;
          var units = this.$awesum.currentDatabaseUnits;
          for (var i = 0; i < units.length; i++) {
            units[i].order = order++;
          }

          await this.$awesum.AwesumDexieDB.serverDatabaseUnits.bulkPut(units);

          await this.$awesum.cleanMedia();
        });
    },
    async loadExistingAssignments() {
      var followerDatabases = await this.$awesum.AwesumDexieDB.serverFollowerDatabases
        .where("databaseId").equals(this.$awesum.currentDatabase.id)
        .toArray() as ServerFollowerDatabaseInterface[];

      var assignments: Array<{ followerDatabase: ServerFollowerDatabaseInterface, displayName: string, isGroup: boolean }> = [];

      var allFollowerRequestsById = await this.$awesum.AwesumDexieDB.serverFollowerRequests.toArray() as ServerFollowerRequestInterface[];
      var allFollowerRequestsByFollowerRequestId = allFollowerRequestsById.reduce((acc, followerRequest) => {
        acc[followerRequest.id] = followerRequest;
        return acc;
      }, {} as Record<string, ServerFollowerRequestInterface>);

      for (const followerDatabase of followerDatabases) {
        const followerRequest = allFollowerRequestsByFollowerRequestId[followerDatabase.followerRequestId];
        // Check if it's a group (followerRequestId matches a group name)


        if (followerRequest.groups.length > 0) {
          assignments.push({
            followerDatabase,
            displayName: `Group - ${followerDatabase.followerRequestId}`,
            isGroup: true
          });
        } else {
          assignments.push({
            followerDatabase,
            displayName: `User - ${followerRequest.followerName} (${followerRequest.followerEmail})`,
            isGroup: false
          });
        }
      }

      this.existingAssignments = assignments;
    },
    getCurrentAssignments() {
      return this.existingAssignments;
    },
    async addUnit() {
      var maxOrder = this.$awesum.currentDatabaseUnits.length == 0 ? 0 : this.$awesum.currentDatabaseUnits.reduce((max, databaseUnit) => Math.max(max, databaseUnit.order), 0);

      await this.$awesum.AwesumDexieDB.serverDatabaseUnits.add({
        name: "Unit " + (maxOrder + 1),
        order: maxOrder + 1,
        lastModified: Date.now(),
        databaseId: this.$awesum.currentDatabase.id,
        version: 1,
        id: uuid(),
        appId: this.$awesum.currentApp.id,
        successVideoType: successVideoType.YouTube,
        successVideoUrl: awesum.defaultYouTubeVideoUrl,
        successAnimations: '',
        successSound: awesum.defaultSuccessSoundGuid,
        successSoundType: audioType.WebAddress,
        homePageImageType: imageType.WebAddress,
        homePageImage: awesum.defaultAppBackgroundGuid,
        router: constants.emptyGuid,
      } as ServerDatabaseUnitInterface);

      await this.$awesum.refreshCurrentDatabaseUnits();
    },
  },
};

</script>

<template>
  <div class="pageView" style="">
    <h1> {{ $awesum.currentDatabase.name }} {{ $t($resources.Settings.key) }}</h1>

    <div class="content">



      <h2 style="font-size:3.5svmin; ">{{ $t($resources.Add_Unit.key)
        }}</h2>
      <button class="btn btn-primary" style="margin-left:2svmin;margin-bottom:1svmin;" v-on:click="addUnit()">{{
        $t($resources.Add_Unit.key) }}</button>

      <h2 v-if="$awesum.currentDatabaseUnits.length > 0" style="font-size:3.5svmin; ">{{ $t($resources.Units.key) }}
      </h2>
      <div v-for="typ in $awesum.currentDatabaseUnits" class="listItem"
        style="margin-bottom:1svmin;display:flex;align-items:baseline;">
        <div>{{ $router.currentRoute.value.fullPath + '/' + encodeURIComponent(typ.name) }}</div>
        <router-link :to="$router.currentRoute.value.fullPath + '/' + encodeURIComponent(typ.name)"
          class="btn btn-primary" style="margin-left:2svmin;">{{ $t($resources.Edit.key) }}</router-link>
        <button class="btn btn-primary" style="margin-left:1svmin;" v-on:click="showDeleteModal(typ)">{{
          $t($resources.Delete.key) }}</button>
        <span style="margin-left:1svmin;">{{ typ.name }}</span>


      </div>



      <h2 v-if="$awesum.currentApp.id != $awesum.publicAppId" style="font-size:3.5svmin; ">{{
        $t($resources.Assignments.key) }}</h2>

      <button v-if="$awesum.currentApp.id != $awesum.publicAppId" class="btn btn-primary"
        style="margin-left:2svmin;margin-bottom:1svmin;"
        v-on:click="$router.push({ path: '/' + $t($resources.i.key) + '/' + $t($resources.AddAssignment.key) + '/' + encodeURI($awesum.currentApp.name) + '/' + encodeURI($awesum.currentDatabase.name) })">{{
          $t($resources.Add_Assignment.key) }}</button>

      <div v-if="existingAssignments.length > 0" v-for="assignment in existingAssignments"
        :key="assignment.followerDatabase.id" class="listItem"
        style="margin-bottom:1svmin;display:flex;align-items:baseline;">
        <button class="btn btn-primary" style="margin-left:1svmin;">{{
          $t($resources.Delete.key) }}</button>
        <span style="margin-left:2svmin;">{{ assignment.displayName }}</span>

      </div>

      <h2 style="font-size:3.5svmin;">{{ $t($resources.Edit_Json.key) }}</h2>

      <router-link custom
        :to="{ path: $awesum.getDynamicUrl($awesum.currentDatabase as ServerDatabaseInterface, $awesum.router.currentRoute) + '/EditJson' }"
        v-slot="{ href }">
        <button @click="$router.push(href)" style="margin-left:2svmin;margin-bottom:1svmin;" class="btn btn-primary">
          <span>{{ $t($resources.Edit_Json.key) }}</span>
        </button>
      </router-link>


      <h2 style="font-size:3.5svmin;margin-top:1svmin;">{{ $t($resources.Database_Settings.key) }}</h2>
      <EditTextComponent :labelWidth="'17svmin'" style="margin-left:2svmin;" :inputWidth="'99%'" :required="true"
        :requiresEditAndSave="true" :maxLength="100" :forbiddenChars="'/'"
        :redirectUrlAfterSave="'/' + $t($resources.i.key) + '/' + $t($resources.Settings.key) + '/' + encodeURI($awesum.currentApp.name) + '/'"
        :parentObject="$awesum.currentDatabase" :displayName="'Name'" :propertyName="'name'" />

      <h2 style="font-size:3.5svmin;margin-top:2svmin;">{{ $t($resources.Background_Image.key) }}</h2>
      <EditImageComponent style="margin-left:2svmin;" ref="homepageImage"
        :imageType="$awesum.currentDatabase.homePageIconType" :image="$awesum.currentDatabase.homePageIcon" />


      <!-- this code runs even when currentType is undefined :( -->
      <Modal @hidden="showModal = false" :shown="showModal" :title="'Delete Unit Type'"
        :focusedElementId="'cancelButton'">
        <div class="modal-body">

          <span>Are you sure you want to delete unit type <strong>{{
            currentType ? $awesum.capitalizeFirstLetter(itemType[currentType.type]) : '' }}</strong>?</span>
        </div>
        <div class="modal-footer" style="justify-content:space-between">
          <button id="cancelButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal"
            ref="cancelButton">Cancel</button>
          <button type="button" class="btn btn-primary" ref="submitButton" @click="deleteType">Submit</button>
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