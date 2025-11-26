<script lang="ts">
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
import QRCodeVue3 from '../qrcode-vue3';
import Dexie, { type Table } from "dexie";
import { ItemLevel,syncAction } from '../../../server/typebox';
import { awesum } from '@/awesum.ts';
export default {
  components: {
    Modal,
    QRCodeVue3

  },
  setup() {
    let showDeleteBrowserDataModal = ref(false);
    let resetEverythingValue = ref(0);
    let storageUsage = ref(0 as number | undefined)
    let storageQuota = ref(0 as number | undefined)
    let showDeleteServerDataModal = ref(false);
    let databases = ref([] as string[])
    let databaseName = ref('')

    return {
      showDeleteBrowserDataModal,
      resetEverythingValue,
      storageUsage,
      storageQuota,
      showDeleteServerDataModal,
      databases,
      databaseName
    };
  },
  async beforeCreate() {
    let estimation = await navigator.storage.estimate();
    this.storageUsage = estimation.usage;
    this.storageQuota = estimation.quota;
    this.databases = await Dexie.getDatabaseNames()
  },
  beforeRouteLeave(to, from, next) {
    this.showDeleteBrowserDataModal = false;
    this.showDeleteServerDataModal = false;
    next();
  },
  mounted() {
  },

  methods: {
    showResetBrowserDataModal(databaseName: string) {
      this.databaseName = databaseName;
      this.resetEverythingValue = 0;
      this.showDeleteBrowserDataModal = true;
      this.showDeleteServerDataModal = false;
    },
    showResetServerDataModal(databaseName: string) {
      this.databaseName = databaseName;
      this.resetEverythingValue = 0;
      this.showDeleteServerDataModal = true;
      this.showDeleteBrowserDataModal = false;
    },


    async resetAllBrowserData() {
      //open database
      if (this.databaseName == this.$awesum.AwesumDexieDB.name) {
        this.$awesum.AwesumDexieDB.close();
      }

      await new Dexie(this.databaseName).delete();

      window.location.href = '/'
    },

    async resetAllServerData() {      

      var response = await awesum.sync([
        {
          id: this.$awesum.ownerApp?.id,
          level: ItemLevel.app,
          action:syncAction.delete
        },
      ]);

      await this.resetAllBrowserData();
    }
  }
};

</script>

<template>
  <div class="pageView" style="background-color:white;">
    <h1>{{ $t($resources.Settings.key)
    }}</h1>
    <div class="content">



      <div v-if="$awesum.ownerApp.id">
        <h2 style="font-size:3.5svmin;">{{ $t($resources.Awesum_Barcode.key) }}</h2>
        <div style="margin-left:1svmin;margin-bottom:1svmin;">
          <QRCodeVue3 :myclass="'QRCodeVue3'" :ButtonName="''" :imgclass="''" :margin="0"
            :background-options="{ color: '#ffffff' }" :download-button="''" :file-ext="''" :image="''"
            :download-options="{ name: 'vqr', extension: 'png' }" :width="200" :height="200"
            :value="$awesum.serverEmail" :key="$awesum.serverEmail" :qr-options="{
              errorCorrectionLevel: 'H'
            }" :image-options="{ hideBackgroundDots: true, imageSize: 0.4, margin: 10 }"
            :corners-square-options="{ type: 'square', color: '#000000' }" :corners-dot-options="{
              type: 'square',
              color: '#000000'
            }" :dots-options="{
      type: 'square',
      color: '#000000',
    }" :download="false" />
        </div>
      </div>

      <h2 style="font-size:3.5svmin;">{{ $t($resources.Browser_Storage.key) }}</h2>
      <p>
        {{ $t($resources.Storage_Usage.key) }} - {{ ((storageUsage ?? 0) / 1024 / 1024).toFixed(2) }} MB
      </p>
      <p>
        {{ $t($resources.Storage_Quota.key) }} - {{ ((storageQuota ?? 0) / 1024 / 1024).toFixed(2) }} MB
      </p>
      <p>
        {{ $t($resources.Percent_Used.key) }} - {{ ((storageUsage ?? 0) / (storageQuota ?? 0) * 100).toFixed(2) }}%
      </p>

      <h2 style="font-size:3.5svmin;">{{ $t($resources.Local_App.key) }}</h2>
      <p>
        {{ $t($resources.Name.key) }} - {{ $awesum.ownerApp?.name }}
      </p>
      <p>
        {{ $t($resources.Unique_Name.key) }} - {{ $awesum.ownerApp?.uniqueName }}
      </p>

      <button v-if="$awesum.serverEmail" class="btn btn-primary" style="margin-left:2svmin;margin-bottom:1svmin;"
        @click="$router.push({ name: $t($resources.Name.key) })">{{ $t($awesum.ownerApp &&
          $awesum.ownerApp.lastModified ? $resources.Rename_App.key : $resources.Create_App.key) }}</button>

      <button v-if="$awesum.ownerApp &&
        $awesum.ownerApp.lastModified" class="btn btn-primary" style="margin-left:2svmin;margin-bottom:1svmin;"
        @click="$router.push({ path: $awesum.replaceAtFront($awesum.getDynamicUrl($awesum.ownerApp, $route), '/' + $t($resources.i.key) + '/' + $t($resources.Settings.key), '') })">View
        Local App</button>

      <button v-if="$awesum.ownerApp &&
        $awesum.ownerApp.lastModified" class="btn btn-primary" style="margin-left:2svmin;margin-bottom:1svmin;"
        @click="$router.push({ path: $awesum.getDynamicUrl($awesum.ownerApp, $route) })">Edit Local App</button>

      <div v-if="$awesum.ownerApp && $awesum.ownerApp.lastModified">
        <h2 style="font-size:3.5svmin;">{{ $t($resources.Manage_Routers.key) }}</h2>
        <p>
          {{ $t($resources.Manage_Routers_Description.key) }}
        </p>
        <router-link v-bind:style="{ opacity: !$awesum.serverEmail ? 0.5 : 1 }"
          :to="{ path: !$awesum.serverEmail ? '' : '/' + $t($resources.i.key) + '/' + $t($resources.Routers.key) + '?activeView=routers' }"
          class="btn btn-primary" style="margin-left:2svmin;margin-bottom:1svmin;">{{ $t($resources.Manage_Routers.key)
          }}</router-link>
        <div v-if="!$awesum.serverEmail">
          <p style="color:red;">
            You need to be logged in to manage routers
          </p>
        </div>


      </div>

      <h2 style="font-size:3.5svmin;">{{ $t($resources.Console_Logs.key) }}</h2>
      <p>
        View and monitor console logs, errors, and warnings from the application
      </p>
      <router-link :to="{ path: '/' + $t($resources.i.key) + '/' + $t($resources.Log.key) }" class="btn btn-primary"
        style="margin-left:2svmin;margin-bottom:1svmin;">{{ $t($resources.Console_Logs.key) }}</router-link>




      <div v-if="$awesum.ownerApp && $awesum.ownerApp.lastModified">
        <h2 style="font-size:3.5svmin;">Manage Leaders and Followers</h2>
        <p>
          Manage users who are following you and users you are following
        </p>

        <router-link v-bind:style="{ opacity: !$awesum.serverEmail ? 0.5 : 1 }"
          :to="{ path: !$awesum.serverEmail ? '' : '/' + $t($resources.i.key) + '/' + $t($resources.LeadersAndFollowers.key) + '?activeView=followers&order=[[%221%22,%22desc%22]]' }"
          class="btn btn-primary" style="margin-left:2svmin;margin-bottom:1svmin;">Manage Leaders and
          Followers</router-link>
        <div v-if="!$awesum.serverEmail">
          <p style="color:red;">
            You need to be logged in to manage leaders and followers
          </p>
        </div>
      </div>



      <h2 style="font-size:3.5svmin;">{{ $t($resources.Delete_All_Browser_Data.key) }}</h2>
      <p>
      <div v-for="database in databases.filter(d => d == 'awesum_' ||
        d == 'awesum_' + $awesum.serverEmail)" style="display:flex;flex-direction:row;align-items:baseline">

        <button class="btn btn-primary" style="margin-bottom:1svmin;" @click="showResetBrowserDataModal(database)">{{
          $t($resources.Delete_All_Browser_Data.key) }}</button>
        <span style="margin-left:1svmin;">{{ database }}</span>

      </div>
      </p>
      <div v-if="$awesum.serverEmail">
        <h2 style="font-size:3.5svmin;">{{ $t($resources.Delete_All_Server_Data.key) }}</h2>

        <div v-for="database in databases.filter(d => d.startsWith('awesum_') && d != 'awesum_')"
          style="display:flex;flex-direction:row;align-items:baseline">

          <button v-if="$awesum.serverEmail" class="btn btn-primary btnMarginTop"
            @click="showResetServerDataModal(database)" style="margin-left:2svmin;margin-bottom:1svmin;">{{
              $t($resources.Delete_All_Server_Data.key) }}</button>
          <span style="margin-left:1svmin;">{{ database }}</span>

        </div>
      </div>



      <Modal ref="modal" :additionalCss="'max-width:70svmin;'" @hidden="showDeleteBrowserDataModal = false"
        :shown="showDeleteBrowserDataModal" :title="$t($resources.Delete_All_Browser_Data.key)"
        :focusedElementId="'resetEverythingValueInput'">
        <div class="modal-body">

          <span>{{ $t($resources.Are_you_sure_you_want_to_totally_delete_everything.key) }}</span>
          <br />
          <input type="number" v-model="resetEverythingValue" id="resetEverythingValueInput" />

        </div>
        <div class="modal-footer" style="justify-content:space-between">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="cancelButton">Cancel</button>
          <button type="button" class="btn btn-primary" ref="submitButton" @click="resetAllBrowserData()"
            v-if="resetEverythingValue == 38">Submit</button>
        </div>
      </Modal>

      <Modal ref="modal" :additionalCss="'max-width:70svmin;'" @hidden="showDeleteServerDataModal = false"
        :shown="showDeleteServerDataModal" :title="$t($resources.Delete_All_Server_Data.key)"
        :focusedElementId="'resetEverythingValueInput2'">
        <div class="modal-body">

          <span>{{ $t($resources.Are_you_sure_you_want_to_totally_delete_everything2.key) }}</span>
          <br />
          <input type="number" v-model="resetEverythingValue" id="resetEverythingValueInput2" />

        </div>
        <div class="modal-footer" style="justify-content:space-between">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="cancelButton">{{
            $t($resources.Cancel.key) }}</button>
          <button type="button" class="btn btn-primary" ref="submitButton" @click="resetAllServerData()"
            v-if="resetEverythingValue == 38">{{ $t($resources.Submit.key) }}</button>
        </div>
      </Modal>
    </div>
  </div>
</template>
<style lang="scss" scoped>
:deep(.QRCodeVue3) img {
  border: .1svmin solid #000000;
  border-radius: 1svmin;
  width: 20svmin;
}
</style>