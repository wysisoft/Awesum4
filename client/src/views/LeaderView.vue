<script lang="ts">
import { reactive, ref } from 'vue';
import { resources } from '@/resources/Resources';
import { awesum } from '@/awesum';
import { I18nGlobal } from '@/i18nGlobal';

import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import { type Order } from 'datatables.net';
import type { ServerFollowerRequestInterface } from '../../../server/serverInterfaces/ServerFollowerRequestInterface';
import { followerRequestStatus } from '../../../server/typebox';
export default {
  setup() {
    var leader = ref<ServerFollowerRequestInterface>({} as ServerFollowerRequestInterface);
    return {
      I18nGlobal,
      leader
    }
  },
  async beforeCreate() {
    await awesum.refreshServerFollowerRequests();
    this.leader = awesum.followerRequests.filter(follower => follower.leaderEmail == this.$awesum.router.currentRoute.params.leaderEmail)[0];
  },
  methods: {
    async approve(follower: ServerFollowerRequestInterface) {
      follower.status = followerRequestStatus.Approved;

      var response = await fetch(window.location.origin + "/api/approveLeader?leaderEmail=" + follower.leaderEmail, {
        method: 'GET',
        credentials: "include",
      });

      if (response.ok) {
        this.$awesum.router.push({
          path: "/i/Settings/LeadersAndFollowers",query: {
            activeView: "leaders",
            order:'[[2,"asc"]]'
          }
        });
      }


    },
    async reject(follower: ServerFollowerRequestInterface) {
      var response = await fetch(window.location.origin + "/api/rejectLeader?leaderEmail=" + follower.leaderEmail, {
        method: 'GET',
        credentials: "include",
      });

      if (response.ok) {
        this.$awesum.AwesumDexieDB.serverFollowerRequests.delete(follower.id);
      }
    },
  }
};

</script>

<template>
  <div class="pageView" style="background-image: none;background-color: inherit;">
    <span style="text-align: center;font-size: 4svmin;" tabindex="0" aria-label="TODD" aria-describedby="TODD"
      aria-labelledby="TODD">{{
        I18nGlobal.t($resources.Leader.key) + " " + leader.leaderName + "(" + leader.leaderEmail + ")" + " wants you to follow them."
      }}</span>
      <div style="font-size: 2svmin;text-align: center;">Only approve a leader's request for you to follow them if you are know the leader and are anticipating this request.</div>
    <div class="content" style="display: flex;height: 8svmin;flex-direction: row;flex-wrap: nowrap;align-content: flex-start;justify-content: center;align-items: flex-start;">


      <button class="btn btn-primary" v-on:click="approve(leader)">Approve</button>
      <button class="btn btn-primary" v-on:click="reject(leader)">Reject</button>

    </div>
  </div>
</template>
<style scoped>
.text-center {
  justify-content: center
}

.dt-length {
  display: none;
}


/* Apply focus style only to inactive buttons */
.input-group .btn-outline-secondary:focus,
.input-group .btn-outline-secondary:hover {
  background-color: transparent !important;
  border-color: #007bff !important;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
  color: #007bff !important;
}

/* Ensure active button retains its style when focused */
.input-group .btn-primary:focus,
.input-group .btn-primary:hover {
  background-color: #007bff !important;
  border-color: #007bff !important;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5) !important;
}

/* Add this new style to ensure the button is centered */
.text-center {
  text-align: center;
}

/* Add this new style to set the font size for the DataTable */
#dataTable {
  font-size: 2svmin;
}

/* Set the font size for the DataTable header */
#dataTable thead th {
  font-size: 2.5svmin;
}

/* Adjust the edit button size to match the table font size */
#dataTable .btn {
  font-size: 2svmin;
  padding: 0.3svmin 0.8svmin;
}
</style>