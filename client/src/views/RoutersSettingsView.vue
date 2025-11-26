<script lang="ts">
import { ref } from 'vue';
import EditTextComponent from '@/components/EditTextComponent.vue';
import * as Modal from '../components/Modal.vue';
import { v4 as uuid } from 'uuid';
import type { Table } from 'dexie';
import EditImageComponent from '@/components/EditImageComponent.vue';
import { audioType, imageType } from "../../../server/typebox";
import { type ServerMediaInterface } from '../../../server/serverInterfaces/ServerMediaInterface';
import { itemType } from '../../../server/typebox';
import type { ServerRouterInterface } from '../../../server/serverInterfaces/ServerRouterInterface';
import { types } from '../../../server/typebox';
import { Value } from '@sinclair/typebox/value'
import { getDefault } from '../../../server/typebox';

export default {
  components: {
    Modal,
    EditTextComponent
  },
  setup() {
    let currentRouter = getDefault(Value.Default(types.filter((x) => x.$id == "router")[0],{} )as ServerRouterInterface);
    return {
      showModal: ref(false),
      currentRouter
    }
  },
  
  async beforeCreate() {
    await this.$awesum.refreshCurrentAppRouters();
  },
  methods: {
    showDeleteModal(router: ServerRouterInterface) {
      this.currentRouter = router;
      this.showModal = true;
    },
    async deleteRouter(router: ServerRouterInterface) {
      this.showModal = false;

      await this.$awesum.AwesumDexieDB.serverRouters.delete(router.id);
      await this.$awesum.refreshCurrentAppRouters();
    },
    async addRouter() {
      
      await this.$awesum.AwesumDexieDB.serverRouters.add(
        {
          appId: this.$awesum.ownerApp.id,
          id: uuid(),
          lastModified: new Date().getTime(),
          routerMac: '00:00:00:00:00:00',
          ipAddress: '0.0.0.0',
          mondayTimesAndDurations: '06:30|60',
          tuesdayTimesAndDurations: '06:30|60',
          wednesdayTimesAndDurations: '06:30|60',
          thursdayTimesAndDurations: '06:30|60',
          fridayTimesAndDurations: '06:30|60',
          saturdayTimesAndDurations: '06:30|60',
          sundayTimesAndDurations: '06:30|60',
          version: 0,
        } as ServerRouterInterface
      );

      await this.$awesum.refreshCurrentAppRouters();
    },
  },
};

</script>

<template>
  <div class="pageView" style="">
    <h1> Router {{ $t($resources.Settings.key) }}</h1>

    <div class="content">

      <h2  style="font-size:3.5svmin; ">{{ $t($resources.Add_Router.key) }}</h2>
      <button
        class="btn btn-primary" style="margin-left:2svmin;margin-bottom:1svmin;" v-on:click="addRouter()">{{
          $t($resources.Add_Router.key) }}</button>

      <h2 v-if="$awesum.currentAppRouters.length > 0" style="font-size:3.5svmin; ">{{ $t($resources.Routers.key) }}</h2>
      <div v-for="router in $awesum.currentAppRouters" class="listItem" style="margin-bottom:1svmin;display:flex;align-items:baseline;">
        <router-link custom :to="'/' + $t($resources.i.key) + '/' + $t($resources.Settings.key) + '/Routers/' + router.routerMac + '/'"
            v-slot="{ href }">
            <button class="btn btn-primary" style="margin-left: 2svmin;margin-bottom:1svmin;" @click="$router.push(href)">
              <span>{{ $t($resources.Lets_Go.key) }}</span>
            </button>
          </router-link>
        <router-link
          :to="'/' + $t($resources.i.key) + '/' + $t($resources.Settings.key) + '/Routers/' + router.routerMac"
          class="btn btn-primary" style="margin-left:2svmin;">{{ $t($resources.Edit.key) }}</router-link>  
        <button class="btn btn-primary" style="margin-left:1svmin;" v-on:click="showDeleteModal(router)">{{ $t($resources.Delete.key) }}</button>
        <div style="margin-left:1svmin;">{{ router.routerMac }} ({{ router.ipAddress }})</div>
        
      </div>

        
      <!-- this code runs even when currentType is undefined :( -->
      <Modal @hidden="showModal = false" :shown="showModal" :title="'Delete Router'"
        :focusedElementId="'cancelButton'">
        <div class="modal-body">

          <span>Are you sure you want to delete router <strong>{{
            currentRouter?.routerMac }}</strong>?</span>
        </div>
        <div class="modal-footer" style="justify-content:space-between">
          <button id="cancelButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal"
            ref="cancelButton">Cancel</button>
          <button type="button" class="btn btn-primary" ref="submitButton" @click="deleteRouter(currentRouter)">Submit</button>
        </div>
      </Modal>

    </div>
  </div>
</template>
<style scoped>
.pageView {
  background-color:rgb(251, 251, 251);
}
</style>