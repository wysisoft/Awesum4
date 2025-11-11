<script lang="ts">
import { I18nGlobal } from '@/i18nGlobal';
import { resources } from '@/resources/Resources';
import { reactive, ref } from 'vue'
import { awesum } from '@/awesum';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
import QRCodeVue3 from '@/qrcode-vue3/QRCodeVue3.vue';
import EditMultiselectComponent from '@/components/EditMultiselectComponent.vue';
import { Value } from '@sinclair/typebox/value'
import { types,imageType } from '../../../server/typebox';
import type { ServerFollowerDatabaseInterface } from '../../../server/serverInterfaces/ServerFollowerDatabaseInterface';
import { validateFollowerDatabase } from '../../../server/javascriptClientValidations/followerDatabase';
import type { ServerSyncRequestInterface } from '../../../server/serverInterfaces/ServerSyncRequestInterface';

export default {
  components: {
    EditMultiselectComponent

  },
  setup() {
    //awesum.serverApp.groups is a comma separated string of groups
    let addAssignmentPayload = Value.Default(types.filter((x) => x.$id == "followerDatabase")[0], {}) as ServerFollowerDatabaseInterface;
    

    let usersOrGroups = ref({});

    let selectedUserOrGroup = ref('');

    return {
      addAssignmentPayload,
      usersOrGroups,
      selectedUserOrGroup
    };
  },
  async beforeCreate  () {
    this.addAssignmentPayload.databaseId = this.$awesum.currentDatabase.id;
    var allUsers = await this.$awesum.AwesumDexieDB.serverFollowerRequests.where("leaderAppId").equals(this.$awesum.ownerApp.id)
    .and((x) => x.followerAppId != this.$awesum.ownerApp.id)
    .toArray();
    for(const user of allUsers) {
      (this.usersOrGroups as any)[user.id] = "User - " + user.followerName + " (" + user.followerEmail + ")";
    }
    for(const group of this.$awesum.ownerApp.groups.split(',')) {
      (this.usersOrGroups as any)[group] = "Group - " + group;
    }
  },
  methods: {
    async addAssignment() {
      this.addAssignmentPayload.followerRequestId = this.selectedUserOrGroup;

        //parse the payload and catch all the ZODErrors
        var errors = await validateFollowerDatabase(this.addAssignmentPayload);
        if (errors.length > 0) {
          return;
        }

        this.$awesum.AwesumDexieDB.serverFollowerDatabases.put(this.addAssignmentPayload);

        var syncRequest:Array<ServerSyncRequestInterface> = [];
        syncRequest.push({
          followerDatabase:this.addAssignmentPayload
        });

        //important to refresh the latest version of the database before sending it to others?
        await awesum.refresh();
        
        await awesum.sync(syncRequest);

        this.$awesum.router.push({
          name: I18nGlobal.t(resources.LeadersAndFollowers.key)
        });
      }


















  }
}
</script>

<template>

  <div class="pageView" style="">
    <h1> {{ $t($resources.Add_Assignment.key) }}</h1>

    <div class="content">

      <select v-model="selectedUserOrGroup" class="form-select" aria-label="Default select example">
        <option v-for="userOrGroup in Object.keys(usersOrGroups)" :value="userOrGroup">{{ usersOrGroups[userOrGroup as keyof typeof usersOrGroups] }}</option>
      </select>

      

      <div class="modal-footer" style="justify-content:space-between;margin-top:3svmin;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="cancelButton"
          @click="$router.push({ name: $t($resources.LeadersAndFollowers.key) })">Cancel</button>
        <button type="button" class="btn btn-primary" ref="submitButton" @click="addAssignment()">Submit</button>
      </div>
    </div>
  </div>
</template>
<style>
.multiselect__tags {
  border-radius: 0;
}
</style>


<style scoped lang="scss">
.invalid-feedback {
  display: block;
}
</style>