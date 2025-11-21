<script lang="ts">
import { I18nGlobal } from '@/i18nGlobal';
import { resources } from '@/resources/Resources';
import { reactive, ref, computed } from 'vue'
import { awesum } from '@/awesum';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
import QRCodeVue3 from '@/qrcode-vue3/QRCodeVue3.vue';
import EditMultiselectComponent from '@/components/EditMultiselectComponent.vue';
import { Value } from '@sinclair/typebox/value'
import { types,imageType } from '../../../server/typebox';
import type { ServerFollowerDatabaseInterface } from '../../../server/serverInterfaces/ServerFollowerDatabaseInterface';
import { validateFollowerDatabase } from '../../../server/javascriptClientValidations/followerDatabase';
import type { ServerSyncRequestInterface } from '../../../server/serverInterfaces/ServerSyncRequestInterface';
import { syncAction } from '../../../server/typebox';
import type { ServerFollowerRequestInterface } from '../../../server/serverInterfaces/ServerFollowerRequestInterface';
export default {
  components: {
    EditMultiselectComponent

  },
  setup() {
    //awesum.serverApp.groups is a comma separated string of groups
    let addAssignmentPayload = Value.Default(types.filter((x) => x.$id == "followerDatabase")[0], {}) as ServerFollowerDatabaseInterface;
    

    let users = ref({});
    let groups = ref({});
    let assignmentType = ref<'user' | 'group'>('user');
    let selectedUserOrGroup = ref('');

    const isSelectionValid = computed(() => {
      return selectedUserOrGroup.value !== '';
    });

    return {
      addAssignmentPayload,
      users,
      groups,
      assignmentType,
      selectedUserOrGroup,
      isSelectionValid
    };
  },
  async beforeCreate  () {
    this.addAssignmentPayload.databaseId = this.$awesum.currentDatabase.id;
    var allUsers = await this.$awesum.AwesumDexieDB.serverFollowerRequests.where("leaderAppId").equals(this.$awesum.ownerApp.id)
    .and((x) => x.followerAppId != this.$awesum.ownerApp.id)
    .toArray() as ServerFollowerRequestInterface[];
    for(const user of allUsers) {
      (this.users as any)[user.id] = user.followerName + " (" + user.followerEmail + ")";
    }
    for(const group of this.$awesum.ownerApp.groups.split(',')) {
      if(group.trim()) {
        (this.groups as any)[group] = group;
      }
    }
  },
  methods: {
    setAssignmentType(type: 'user' | 'group') {
      this.assignmentType = type;
      this.selectedUserOrGroup = ''; // Reset selection when switching types
    },
    async addAssignment() {
      this.addAssignmentPayload.followerRequestId = this.selectedUserOrGroup;

        //parse the payload and catch all the ZODErrors
        var errors = await validateFollowerDatabase(this.addAssignmentPayload);
        if (errors.length > 0) {
          return;
        }

        var syncRequest:Array<ServerSyncRequestInterface> = [];
      syncRequest.push({
        id: this.addAssignmentPayload.id,
        action: syncAction.add,
        followerDatabase: this.addAssignmentPayload
      });
      
      await awesum.sync(syncRequest);

        this.$awesum.router.push({
          path: "/" + this.$t(resources.i.key) + "/" + this.$t(resources.LeadersAndFollowers.key), query: {
            activeView: "followers",
            order: '[[2,"asc"]]'
          }
        });
        
      }


















  }
}
</script>

<template>

  <div class="pageView" style="">
    <h1> {{ $t($resources.Add_Assignment.key) }}</h1>

    <div class="content">

      <div class="mb-3">
        <label class="form-label">Assignment Type</label>
        <div class="btn-group" role="group" aria-label="Assignment type toggle">
          <button 
            type="button" 
            class="btn" 
            :class="assignmentType === 'user' ? 'btn-primary' : 'btn-outline-primary'"
            @click="setAssignmentType('user')"
          >
            User
          </button>
          <button 
            type="button" 
            class="btn" 
            :class="assignmentType === 'group' ? 'btn-primary' : 'btn-outline-primary'"
            @click="setAssignmentType('group')"
          >
            Group
          </button>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label" v-if="assignmentType === 'user'">Select User</label>
        <label class="form-label" v-else>Select Group</label>
        <select 
          v-model="selectedUserOrGroup" 
          class="form-select" 
          :aria-label="assignmentType === 'user' ? 'Select user' : 'Select group'"
        >
          <option value="" disabled>-- Select {{ assignmentType === 'user' ? 'User' : 'Group' }} --</option>
          <option 
            v-if="assignmentType === 'user'"
            v-for="userId in Object.keys(users)" 
            :key="userId"
            :value="userId"
          >
            {{ users[userId as keyof typeof users] }}
          </option>
          <option 
            v-if="assignmentType === 'group'"
            v-for="groupName in Object.keys(groups)" 
            :key="groupName"
            :value="groupName"
          >
            {{ groups[groupName as keyof typeof groups] }}
          </option>
        </select>
      </div>

      <div class="modal-footer" style="justify-content:space-between;margin-top:3svmin;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="cancelButton"
          @click="$router.push({ name: 'AppDatabaseSettings', params: { app: $awesum.currentApp.name, database: $awesum.currentDatabase.name } })">Cancel</button>
        <button type="button" class="btn btn-primary" ref="submitButton" @click="addAssignment()" :disabled="!isSelectionValid">Submit</button>
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