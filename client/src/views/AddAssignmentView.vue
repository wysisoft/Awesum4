<script lang="ts">
import { getDefault } from '../../../server/typebox';
import { I18nGlobal } from '@/i18nGlobal';
import { resources } from '@/resources/Resources';
import { reactive, ref, computed } from 'vue'
import { awesum } from '@/awesum';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
import QRCodeVue3 from '@/qrcode-vue3/QRCodeVue3.vue';
import EditMultiselectComponent from '@/components/EditMultiselectComponent.vue';
import { Value } from '@sinclair/typebox/value'
import { types, imageType } from '../../../server/typebox';
import type { ServerFollowerDatabaseInterface } from '../../../server/serverInterfaces/ServerFollowerDatabaseInterface';
import { validateFollowerDatabase } from '../../../server/javascriptClientValidations/followerDatabase';
import type { ServerSyncRequestInterface } from '../../../server/serverInterfaces/ServerSyncRequestInterface';
import { syncAction, ItemLevel } from '../../../server/typebox';
import type { ServerFollowerRequestInterface } from '../../../server/serverInterfaces/ServerFollowerRequestInterface';
import type { ServerDatabaseInterface } from '../../../server/serverInterfaces/ServerDatabaseInterface';
export default {
  components: {
    EditMultiselectComponent

  },
  setup() {
    //awesum.serverApp.groups is a comma separated string of groups
    let addAssignmentPayload = getDefault(Value.Default(types.filter((x) => x.$id == "followerDatabase")[0],{} )as ServerFollowerDatabaseInterface);

    let users = ref({});
    let groups = ref({});
    let assignmentType = ref<'user' | 'group'>('user');
    let selectedUserOrGroup = ref('');
    let existingAssignments = ref<Array<{followerDatabase: ServerFollowerDatabaseInterface, displayName: string, isGroup: boolean}>>([]);

    const isSelectionValid = computed(() => {
      return selectedUserOrGroup.value !== '';
    });

    return {
      addAssignmentPayload,
      users,
      groups,
      assignmentType,
      selectedUserOrGroup,
      isSelectionValid,
      existingAssignments
    };
  },
  async beforeCreate() {
    this.addAssignmentPayload.databaseId = this.$awesum.currentDatabase.id;
    var allUsers = await this.$awesum.AwesumDexieDB.serverFollowerRequests.where("leaderAppId").equals(this.$awesum.ownerApp.id)
      .and((x) => x.followerAppId != this.$awesum.ownerApp.id)
      .toArray() as ServerFollowerRequestInterface[];
    for (const user of allUsers) {
      (this.users as any)[user.id] = user.followerName + " (" + user.followerEmail + ")";
    }
    for (const group of this.$awesum.ownerApp.groups.split(',')) {
      if (group.trim()) {
        (this.groups as any)[group] = group;
      }
    }
    await this.loadExistingAssignments();
  },
  methods: {
    async loadExistingAssignments() {
      var followerDatabases = await this.$awesum.AwesumDexieDB.serverFollowerDatabases
        .where("databaseId").equals(this.$awesum.currentDatabase.id)
        .toArray() as ServerFollowerDatabaseInterface[];
      
      var assignments: Array<{followerDatabase: ServerFollowerDatabaseInterface, displayName: string, isGroup: boolean}> = [];
      
      for (const followerDatabase of followerDatabases) {
        // Check if it's a group (followerRequestId matches a group name)
        const groupNames = this.$awesum.ownerApp.groups.split(',').map(g => g.trim()).filter(g => g);
        const isGroup = groupNames.includes(followerDatabase.followerRequestId);
        
        if (isGroup) {
          assignments.push({
            followerDatabase,
            displayName: `Group - ${followerDatabase.followerRequestId}`,
            isGroup: true
          });
        } else {
          // Look up the followerRequest to get user info
          const followerRequest = await this.$awesum.AwesumDexieDB.serverFollowerRequests
            .where("id").equals(followerDatabase.followerRequestId)
            .first() as ServerFollowerRequestInterface | undefined;
          
          if (followerRequest) {
            assignments.push({
              followerDatabase,
              displayName: `User - ${followerRequest.followerName} (${followerRequest.followerEmail})`,
              isGroup: false
            });
          } else {
            assignments.push({
              followerDatabase,
              displayName: `Unknown - ${followerDatabase.followerRequestId}`,
              isGroup: false
            });
          }
        }
      }
      
      this.existingAssignments = assignments;
    },
    setAssignmentType(type: 'user' | 'group') {
      this.assignmentType = type;
      this.selectedUserOrGroup = ''; // Reset selection when switching types
    },
    async addAssignment() {


      if (this.assignmentType === 'user') {
        await awesum.sync([{
          id: this.addAssignmentPayload.id,
          action: syncAction.add,
          level: ItemLevel.followerDatabase,
          values: {
            databaseId: this.$awesum.currentDatabase.id,
            followerRequestId: this.selectedUserOrGroup,
          } as ServerFollowerDatabaseInterface
        }])
      }
      else {
        alert('not implemented yet');
      }

      await this.loadExistingAssignments();
      
      this.$awesum.router.push({
        path: awesum.getDynamicUrl(this.$awesum.currentDatabase as ServerDatabaseInterface, this.$awesum.router.currentRoute)
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

        <div style="margin-top:1svmin;margin-bottom:2svmin;" class="btn-group" role="group"
          aria-label="Assignment type toggle">
          <button type="button" class="btn" :class="assignmentType === 'user' ? 'btn-primary' : 'btn-outline-primary'"
            @click="setAssignmentType('user')">
            Assign to User
          </button>
          <button type="button" class="btn" :class="assignmentType === 'group' ? 'btn-primary' : 'btn-outline-primary'"
            @click="setAssignmentType('group')">
            Assign to Group
          </button>
        </div>
      </div>

      <div class="mb-3">


        <select style="margin-left:0svmin;width:97svmin;" v-model="selectedUserOrGroup" class="form-select"
          :aria-label="assignmentType === 'user' ? 'Select user' : 'Select group'">
          <option value="" disabled>-- Select {{ assignmentType === 'user' ? 'User' : 'Group' }} --</option>
          <option v-if="assignmentType === 'user'" v-for="userId in Object.keys(users)" :key="userId" :value="userId">
            {{ users[userId as keyof typeof users] }}
          </option>
          <option v-if="assignmentType === 'group'" v-for="groupName in Object.keys(groups)" :key="groupName"
            :value="groupName">
            {{ groups[groupName as keyof typeof groups] }}
          </option>
        </select>
      </div>

      <div class="modal-footer" style="justify-content:space-between;margin-top:3svmin;width:97svmin;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="cancelButton"
          @click="$router.push({ name: 'AppDatabaseSettings', params: { app: $awesum.currentApp.name, database: $awesum.currentDatabase.name } })">Cancel</button>
        <button type="button" class="btn btn-primary" ref="submitButton" @click="addAssignment()"
          :disabled="!isSelectionValid">Submit</button>
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