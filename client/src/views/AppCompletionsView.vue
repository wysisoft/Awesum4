<script lang="ts">
import { reactive, ref } from 'vue';
import { I18nGlobal } from '@/i18nGlobal';
import type { Config } from 'datatables.net';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

export default {
  components: {
    DataTable
  },
  setup() {
    var background = ref("");

    const completionTableColumnDefs = [
      {
        title: 'Database',
        data: 'databaseName',
        width: '25svmin'
      },
      {
        title: 'Name',
        data: 'followerName',
        width: '25svmin'
      },
      {
        title: 'Status',
        data: 'completionLevel',
        width: '23svmin',
        className: 'text-center'
      },
      {
        title: 'Completed',
        data: 'completionDate',
        width: '10svmin',
        className: 'text-center'
      },
      {
        title: 'Assigned',
        data: 'assignedDate',
        width: '10svmin',
        className: 'text-center'
      }
    ];

    const completionTableOptions = {
      lengthMenu: [5, 10, 25, 50, { label: 'All', value: -1 }],
      pageLength: 10,
      columns: completionTableColumnDefs,
      order: [[2, 'desc'], [3, 'desc']] // Sort by completion level first, then by completion date
    } as Config | undefined;

    let completionData = reactive<Array<{
      databaseName: string;
      followerName: string;
      completionLevel: string;
      completionDate: string;
      assignedDate: string;
    }>>([]);

    DataTable.use(DataTablesCore);

    return {
      I18nGlobal,
      background,
      completionTableOptions,
      completionData
    }
  }, 
  async beforeCreate() {
    var mediaItem = await this.$awesum.AwesumDexieDB.serverMedia.get(this.$awesum.currentApp.homePageImage);
    if (mediaItem) {
      this.background = 'url("'  +  mediaItem.data + '")';
    }
  },
  async mounted() {
    // Populate completion data
    await this.loadCompletionData();
  },
  methods: {
    async loadCompletionData() {
      // Iterate through all databases in the current app
      for (var database of this.$awesum.currentDatabases) {
        // Get all follower databases for this database
        var followerDatabases = await this.$awesum.AwesumDexieDB.serverFollowerDatabases
          .filter((x) => x.databaseId == database.id).toArray();

        // Get the total number of units in this database
        var totalUnits = await this.$awesum.AwesumDexieDB.serverDatabaseUnits
          .where('databaseId').equals(database.id).count();

        // Get all database-level completion records
        var databaseCompletionRecords = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions
          .where('itemId').equals(database.id).toArray();

        // Get all unit-level completion records for units in this database
        var unitCompletionRecords = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions
          .where('parentItemId').equals(database.id).toArray();

        // Create maps for quick lookup
        var databaseCompletionMap = new Map<string, number>(); // followerRequestId -> completion date
        var unitCompletionMap = new Map<string, Set<string>>(); // followerRequestId -> Set of completed unit IDs
        var unitCompletionDateMap = new Map<string, number>(); // followerRequestId -> most recent unit completion date

        // Process database completions
        for (var completionRecord of databaseCompletionRecords) {
          databaseCompletionMap.set(completionRecord.followerRequestId, completionRecord.lastModified);
        }

        // Process unit completions
        for (var completionRecord of unitCompletionRecords) {
          // Add to set of completed units
          if (!unitCompletionMap.has(completionRecord.followerRequestId)) {
            unitCompletionMap.set(completionRecord.followerRequestId, new Set());
          }
          unitCompletionMap.get(completionRecord.followerRequestId)!.add(completionRecord.itemId);

          // Track most recent unit completion date
          var currentDate = unitCompletionDateMap.get(completionRecord.followerRequestId);
          if (!currentDate || completionRecord.lastModified > currentDate) {
            unitCompletionDateMap.set(completionRecord.followerRequestId, completionRecord.lastModified);
          }
        }

        // Process each follower database
        for (var followerDatabase of followerDatabases) {
          var assignedDate = new Date(followerDatabase.lastModified).toISOString().slice(0, 10);
          var followerRequest = await this.$awesum.AwesumDexieDB.serverFollowerRequests
            .where('id').equals(followerDatabase.followerRequestId).first();

          if (followerRequest) {
            var completionLevel: string;
            var completionDate = '';
            

            // Check if there's a database-level completion
            if (databaseCompletionMap.has(followerDatabase.followerRequestId)) {
              completionLevel = '100% complete';
              var dbCompletionDate = databaseCompletionMap.get(followerDatabase.followerRequestId)!;
              var date = new Date(dbCompletionDate);
              completionDate = date.toISOString().slice(0, 10);
            } else {
              // No database completion, calculate unit completion ratio
              var completedUnits = unitCompletionMap.get(followerDatabase.followerRequestId)?.size || 0;
              completionLevel = `${completedUnits}/${totalUnits} units completed`;
              
              // Get most recent unit completion date if any
              if (unitCompletionDateMap.has(followerDatabase.followerRequestId)) {
                var unitDate = new Date(unitCompletionDateMap.get(followerDatabase.followerRequestId)!);
                completionDate = unitDate.toISOString().slice(0, 10);
              }
            }

            this.completionData.push({
              databaseName: database.name,
              followerName: followerRequest.followerName,
              completionLevel: completionLevel,
              completionDate: completionDate,
              assignedDate: assignedDate
            });
          }
        }
      }
    }
  }
}
</script>

<template>
  <div class="pageView" :style="{backgroundImage: background}">
    <h1>{{ $awesum.currentApp.name }} {{ $t($resources.Completions.key) }}</h1>
    <div class="content" >

      <h2 style="font-size: 3.5svmin;">{{ $t($resources.Completions.key) }}</h2>

      <!-- Completion Table Section -->
      <div class="completionSection" style="margin-top: 1svmin;">
        <div style="padding-right:1svmin;">
          <DataTable id="completionDataTable" ref="completionDataTable" :data="completionData"
            :options="completionTableOptions" class="display">
          </DataTable>
        </div>
      </div>
      <div v-if="completionData.length == 0">
        <div style="margin-left:2svmin;">No followers found for this app. When followers are added and complete assignments, they will appear here.
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.pageView {
  background-Size: cover
}

.content{
  padding-top: 2svmin;
}

.pageContentContainer{
  height:27svmin;
}

.pageContentContainer .btn {
  margin-right: 1svmin;
}
:deep(.dt-layout-row:has(.dt-search)) {
  position: relative;
  top:-6.5svmin;
  height:0svmin;
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
#completionDataTable {
  font-size: 2.2svmin;
}



/* Set the font size for the DataTable header */
#completionDataTable thead th {
  font-size: 2.5svmin;
}

/* Adjust the button size to match the table font size */
#completionDataTable .btn {
  font-size: 2.2svmin;
  padding: 0.3svmin 0.8svmin;
}

#completionDataTable_wrapper .dt-layout-table {
  font-size: 2.2svmin;
}

.dt-layout-table tbody {
  font-size: 2.2svmin;
}

.text-center span {
  padding-left: 1svmin;
}

.dt-paging>nav {
  display: flex;
  gap: .5svmin;
}

.completionSection{
  flex:1;
}

#completionDataTable_wrapper .dt-layout-table {
  font-size: 2.2svmin;
  height: 62svmin;
  margin-top: 1svmin;
}

</style>

