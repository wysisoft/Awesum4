<script lang="ts">
import { reactive, ref, computed } from 'vue';
import { resources } from '@/resources/Resources';
import { awesum } from '@/awesum';
import { I18nGlobal } from '@/i18nGlobal';
import { followerRequestStatus } from '../../../server/typebox';
import type { Config } from 'datatables.net';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import { type Order } from 'datatables.net'
import type { ServerFollowerRequestInterface } from '../../../server/serverInterfaces/ServerFollowerRequestInterface';
import type { ServerUnfollowFollowerRequestInterface } from '../../../server/serverInterfaces/ServerUnfollowFollowerRequestInterface';
import type { ServerSyncRequestInterface } from '../../../server/serverInterfaces/ServerSyncRequestInterface';
export default {
  components: {
    DataTable
  },
  setup() {

    const followersColumnDefs = [
      {
        title: 'Follower Name', data: 'followerName',
        render: function (data: any, type: any, row: any, meta: any) {
          return `${row.followerName} (${row.followerEmail})`;
        },
        width: '40svmin'
      },
      {
        title: 'Groups', data: 'groups'
        , width: '20svmin', // Set the width to 9svmin

      },
      {
        title: 'Created', data: 'lastModified'
        , width: '10svmin', // Set the width to 9svmin
        className: 'text-center', // Center the content
      },
      {
        title: 'Status', data: 'status'
        , width: '10svmin', // Set the width to 9svmin
        className: 'text-center', // Center the content
      },
      {
        title: 'Actions',
        data: null,
        orderable: false,
        width: '10svmin', // Set the width to 9svmin
        className: 'text-center', // Center the content
        render: '#buttons'
      },
    ];


    const followersTableOptions = {
      lengthMenu: [5, 10, 25, 50, { label: 'All', value: -1 }],
      columns: followersColumnDefs,
      order: []
    } as Config | undefined


    const activeView = awesum.router.currentRoute.query.activeView;
    const order = awesum.router.currentRoute.query.order;
    let showApproveRejectFollowerModal = ref(false);

    if (activeView == null && order == null) {
      awesum.router.replace({
        query: {
          activeView: 'followers',
          order: JSON.stringify([[1, 'desc']])
        }
      });
    }
    else if (activeView == null) {
      awesum.router.replace({
        query: {
          activeView: 'followers',
          order: order
        }
      });
    }
    else if (order == null) {
      awesum.router.replace({
        query: {
          activeView: activeView,
          order: JSON.stringify([1, 'desc'])
        }
      });
    }
    else {
      followersTableOptions!.order = JSON.parse(order as string)
    }




    const leadersColumnDefs = [
      {
        title: 'Leader Name', data: 'leaderName',
        render: function (data: any, type: any, row: any, meta: any) {
          return `${row.leaderName} (${row.leaderEmail})`;
        },
        width: '40svmin'
      },
      {
        title: 'Groups', data: 'groups'
        , width: '20svmin', // Set the width to 9svmin

      },
      {
        title: 'Created', data: 'created'
        , width: '10svmin', // Set the width to 9svmin
        className: 'text-center', // Center the content

      },
      {
        title: 'Status', data: 'status'
        , width: '10svmin', // Set the width to 9svmin
        className: 'text-center', // Center the content
      },
      {
        title: 'Actions',
        data: null,
        orderable: false,
        width: '10svmin', // Set the width to 9svmin
        className: 'text-center', // Center the content
        render: '#buttons'
      },
    ];

    const leadersTableOptions = {
      lengthMenu: [5, 10, 25, 50, { label: 'All', value: -1 }],
      columns: leadersColumnDefs,
      order: [
        [1, 'desc']
      ] as Order // Sort by the second column (Created) in descending order
    } as Config | undefined

    let rowData = reactive(new Array<ServerFollowerRequestInterface>());

    const searchTop = computed(() => {
      return activeView == 'followers' ? '-6.5svmin' : '-6.5svmin';
    });

    const height = computed(() => {
      return activeView == 'followers' ? '48svmin' : '56.75svmin';
    });

    if (activeView == null && order == null) {
      awesum.router.replace({
        query: {
          activeView: 'followers',
          order: JSON.stringify([[I18nGlobal.t(resources.number1.key), I18nGlobal.t(resources.desc.key)]])
        }
      });
    }
    else if (activeView == null) {
      awesum.router.replace({
        query: {
          activeView: 'followers',
          order: order
        }
      });
    }
    else if (order == null) {
      awesum.router.replace({
        query: {
          activeView: activeView,
          order: JSON.stringify([[I18nGlobal.t(resources.number1.key), I18nGlobal.t(resources.desc.key)]])
        }
      });
    }

    DataTable.use(DataTablesCore);

    return {
      followerRequestStatus,
      rowData,
      showApproveRejectFollowerModal,
      followersTableOptions,
      leadersTableOptions,
      activeView,
      order,
      height,
      searchTop
    }
  },
  async beforeCreate() {
    if (this.rowData) {
      await awesum.refreshServerFollowerRequests();
      if (this.activeView == 'followers') {
        this.rowData.push(...awesum.followerRequests.filter(follower => follower.leaderAppId != follower.followerAppId && follower.leaderAppId === awesum.ownerApp.id && (follower.status == followerRequestStatus.Pending || follower.status == followerRequestStatus.Approved)));
      }
      else {
        this.rowData.push(...awesum.followerRequests.filter(follower => follower.leaderAppId != follower.followerAppId && follower.followerAppId === awesum.ownerApp.id && (follower.status == followerRequestStatus.Pending || follower.status == followerRequestStatus.Approved)));
      }
    }
    else {
      //i'm being redirected here
    }
  },
  async mounted() {


  },

  methods: {
    async approve(follower: ServerFollowerRequestInterface) {
      follower.status = followerRequestStatus.Approved;

      
      var response = await fetch(window.location.origin + "/api/sync", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ followerRequest: follower }]),
        credentials: "include",
      });
    },
    async unfollowAsLeader(follower: ServerFollowerRequestInterface) {
      var confirm = window.confirm("Are you sure you want to remove this follower?");
      if (!confirm) {
        return;
      }

      follower.status = followerRequestStatus.Rejected;

      
      var response = await fetch(window.location.origin + "/api/sync", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ followerRequest: follower } as ServerSyncRequestInterface]),
        credentials: "include",
      });

      if (response.ok) {
        await awesum.AwesumDexieDB.serverFollowerRequests.delete(follower.id);
        await awesum.removeLeaderData(follower);
        await awesum.refreshServerFollowerRequests();
      }

      awesum.router.push({
        path: "/i/LeadersAndFollowers", query: {
          activeView: "leaders",
          order: '[[' + I18nGlobal.t(resources.number2.key) + ',"' + I18nGlobal.t(resources.asc.key) + '"]]'
        }
      });
    },
    async reject(follower: ServerFollowerRequestInterface) {
      
      var response = await fetch(window.location.origin + "/api/rejectLeader", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: "{\"request\":\"" + follower.id + "\"}",
        credentials: "include",
      });

      if (response.ok) {
        await awesum.AwesumDexieDB.serverFollowerRequests.delete(follower.id);
      }
    },
    editFollower(row: ServerFollowerRequestInterface) {
      // Implement your edit logic here
      console.log('Editing follower:', row);
      // For example, open a modal with follower details
      // this.$emit('edit-follower', row);
    }
  }
};

</script>

<template>
  <div class="pageView">
    <h1>
      {{
        $t($resources.Leaders_And_Followers.key)
      }}</h1>
    <div class="content">

      <div class="settingsArea">
        <p class="input-group mb-3" style="margin-top:1svmin;">

          <button class="btn"
            :class="{ 'btn-primary': activeView === 'followers', 'btn-outline-secondary': activeView !== 'followers' }"
            type="button" @click="$router.push({ query: { order, activeView: 'followers' } })">
            Manage Followers
          </button>
          <button class="btn"
            :class="{ 'btn-primary': activeView === 'leaders', 'btn-outline-secondary': activeView !== 'leaders' }"
            type="button" @click="$router.push({ query: { order, activeView: 'leaders' } })">
            Manage Leaders
          </button>
          
      </p>
        <h2 style="margin-top:2svmin;font-size:3.5svmin;">{{ activeView === 'followers' ? "People Following You" : "People You Follow" }}</h2>
<p>
        <router-link v-if="activeView == 'followers'"
          :to="'/' + $t($resources.i.key) +  '/' + $t($resources.LeadersAndFollowers.key) + '/' + $t($resources.AddFollower.key)" class="btn btn-primary"
          style="margin-bottom:0svmin;">Add Person Following You</router-link>
        </p>
        <div style="padding-right:1svmin;">

          <DataTable v-if="activeView == 'followers'" id="followersDataTable" ref="followersDataTable" :data="rowData"
            :options="followersTableOptions" class="display">
            <template #buttons="props">
              <button class="btn btn-primary" type="button" v-on:click="unfollowAsLeader(props.rowData)"
                style="font-size:2.2svmin;padding:0.5svmin 1svmin;">Remove</button>
            </template>
          </DataTable>

          <DataTable v-if="activeView == 'leaders'" id="leadersDataTable" ref="leadersDataTable" :data="rowData"
            :options="leadersTableOptions" class="display">
            <template #buttons="props">
              <button class="btn btn-primary" style="font-size:2.2svmin;padding:0.5svmin 1svmin;" type="button"
                v-if="props.rowData.status == followerRequestStatus.Pending"
                v-on:click="reject(props.rowData)">Reject</button>
              <button v-if="props.rowData.status == followerRequestStatus.Approved" class="btn btn-primary"
                type="button" v-on:click="unfollowAsLeader(props.rowData)"
                style="font-size:2.2svmin;padding:0.5svmin 1svmin;">Remove</button>
            </template>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../scss/dataTables.bootstrap5.scss';
@use '../scss/bootstrap.scss';



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
</style>
<style lang="scss">
@use '../scss/dataTables.bootstrap5.scss';
@use '../scss/bootstrap.scss';



.dt-length {
  display: none;
}

/* Add this new style to ensure the button is centered */
.text-center {
  text-align: center !important;
}


/* Add this new style to set the font size for the DataTable */
#dataTable {
  font-size: 2.2svmin;
}

/* Set the font size for the DataTable header */
#dataTable thead th {
  font-size: 2.5svmin;
}

/* Adjust the edit button size to match the table font size */
#dataTable .btn {
  font-size: 2.2svmin;
  padding: 0.3svmin 0.8svmin;
}

#leadersDataTable_wrapper .dt-layout-table {
  font-size: 2.2svmin;
  height: v-bind(height);
}

#followersDataTable_wrapper .dt-layout-table {
  font-size: 2.2svmin;
  height: v-bind(height);
}

.dt-layout-table tbody {
  font-size: 2.2svmin;
}

.text-center span {
  padding-left: 1svmin;
}

.dt-paging > nav{
  display: flex;
  gap:.5svmin;
}
.dt-search {
  position: relative;
  top:v-bind(searchTop);
  height:0svmin;
}
</style>