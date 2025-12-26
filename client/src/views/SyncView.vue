<script lang="ts">
import { awesum } from '@/awesum';
import type { ServerSyncResponseInterface } from '../../../server/serverInterfaces/ServerSyncResponseInterface';
import type { ServerSyncRequestInterface } from '../../../server/serverInterfaces/ServerSyncRequestInterface';
import { syncResultType, syncAction, ItemLevel } from '../../../server/typebox';
import type { ServerDatabaseInterface } from '../../../server/serverInterfaces/ServerDatabaseInterface';
import type { ServerFollowerDatabaseInterface } from '../../../server/serverInterfaces/ServerFollowerDatabaseInterface';
import { constants } from '../../../server/constants';
export default {
    setup() {

        let viewData = awesum.viewData as ServerSyncResponseInterface[];

        return {
            viewData,
            syncResultType,
            syncAction,
            ItemLevel,
        };
    },
    async beforeCreate() {

        var additionsQuery = await awesum.AwesumDexieDB.additions.toArray();
        var additions = new Set<string>();
        for (const addition of additionsQuery) {
            additions.add(addition.id);
        }

        var syncRequestArray = [] as ServerSyncRequestInterface[];

        var apps = await awesum.AwesumDexieDB.serverApps.toArray();

        await awesum.waitForDexie();

        var syncRequests = new Array<ServerSyncRequestInterface>();

        for (const app of apps) {
            if (app.id == awesum.ownerApp.id && awesum.ownerApp.touched) {
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = awesum.ownerApp.id;
                syncRequest.level = ItemLevel.app;
                syncRequest.action = syncAction.modify;
                syncRequest.values = awesum.toPOJO(awesum.ownerApp);
                syncRequests.push(syncRequest);
            }

            var medias = await awesum.AwesumDexieDB.serverMedia.where('appId').equals(app.id).toArray();
            for (const media of medias) {
                if (additions.has(media.id)) {
                    var syncRequest = {} as ServerSyncRequestInterface;
                    syncRequest.id = media.id;
                    syncRequest.level = ItemLevel.media;
                    syncRequest.action = syncAction.add;
                    syncRequest.values = {};
                    syncRequests.push(syncRequest);
                }
            }

        }

        var followerRequests = await awesum.AwesumDexieDB.serverFollowerRequests.toArray();

        for (const followerRequest of followerRequests) {
            if (followerRequest.leaderAppId == awesum.ownerApp.id && followerRequest.followerAppId == awesum.ownerApp.id) {
                continue;
            }
            var syncRequest = {} as ServerSyncRequestInterface;
            syncRequest.id = followerRequest.id;
            syncRequest.level = ItemLevel.followerRequest;
            syncRequest.values = {};
            syncRequests.push(syncRequest);
            if (followerRequest.touched) {
                syncRequest.action = syncAction.modify;
                syncRequest.values = awesum.toPOJO(followerRequest);
            }
            else {
                syncRequest.action = syncAction.receiveChanges;
                syncRequest.values = {
                    lastModified: followerRequest.lastModified,
                    version: followerRequest.version,
                    leaderAppId: followerRequest.leaderAppId,
                }
            }

            var followerDatabases = await awesum.AwesumDexieDB.serverFollowerDatabases.where('followerRequestId').equals(followerRequest.id).toArray();
            for (const followerDatabase of followerDatabases) {
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = followerDatabase.id;
                syncRequest.level = ItemLevel.followerDatabase;
                syncRequest.action = syncAction.receiveChanges;
                syncRequest.values = {
                    lastModified: followerDatabase.lastModified,
                    version: followerDatabase.version,
                }
                syncRequests.push(syncRequest);

                var databaseSyncRequests = await awesum.getDatabaseSyncRequests(followerDatabase.databaseId);
                for (const databaseSyncRequest of databaseSyncRequests) {
                    syncRequests.push(databaseSyncRequest);
                }
            }

            var followerDatabaseCompletions = await awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('followerRequestId').equals(followerRequest.id)
            .and((x) => x.lastModified >= followerRequest.completionLastModified).toArray();

            for (const followerDatabaseCompletion of followerDatabaseCompletions) {
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = followerDatabaseCompletion.id;
                syncRequest.level = ItemLevel.followerDatabaseCompletion;
                syncRequest.values = {};
                syncRequests.push(syncRequest);
                if (additions.has(followerDatabaseCompletion.id)) {
                    syncRequest.action = syncAction.add;
                    syncRequest.values = awesum.toPOJO(followerDatabaseCompletion);
                }
            }
        }

        var deletions = await awesum.AwesumDexieDB.deletions.toArray();
        for (const deletion of deletions) {
            var syncRequest = {} as ServerSyncRequestInterface;
            syncRequest.id = deletion.id;
            syncRequest.level = deletion.level;
            syncRequest.action = syncAction.delete;
            syncRequests.push(syncRequest);
        }

        // var followerDatabases = await awesum.AwesumDexieDB.serverFollowerDatabases.toArray();
        // for (const followerDatabase of followerDatabases) {
        //     var syncRequest = {} as ServerSyncRequestInterface;
        //     syncRequest.id = followerDatabase.id;
        //     syncRequest.level = ItemLevel.followerDatabase;
        //     syncRequest.values = {};
        //     syncRequests.push(syncRequest);
        //     if (additions.has(followerDatabase.id)) {
        //         syncRequest.action = syncAction.add;
        //         syncRequest.values = awesum.toPOJO(followerDatabase);

        //     }
        //     else if (followerDatabase.touched) {
        //         syncRequest.action = syncAction.modify;
        //         syncRequest.values = awesum.toPOJO(followerDatabase);
        //     }
        //     else {
        //         syncRequest.action = syncAction.receiveChanges;
        //         syncRequest.values = {
        //             lastModified: followerDatabase.lastModified,
        //             version: followerDatabase.version,
        //         }
        //     }
        // }

        // var databases = await awesum.AwesumDexieDB.serverDatabases.toArray();
        // for (const database of databases) {
        //     var syncRequest = {} as ServerSyncRequestInterface;
        //     syncRequest.id = database.id;
        //     syncRequest.level = ItemLevel.followerDatabase;
        //     syncRequest.values = {};
        //     syncRequests.push(syncRequest);
        //     if (additions.has(database.id)) {
        //         syncRequest.action = syncAction.add;
        //         syncRequest.values = awesum.toPOJO(database);

        //     }
        //     else if (database.touched) {
        //         syncRequest.action = syncAction.modify;
        //         syncRequest.values = awesum.toPOJO(database);
        //     }
        //     else {
        //         syncRequest.action = syncAction.receiveChanges;
        //         syncRequest.values = {
        //             lastModified: database.lastModified,
        //             version: database.version,
        //         }
        //     }

        //     var units = await awesum.AwesumDexieDB.serverDatabaseUnits.where('databaseId').equals(database.id).toArray();
        //     for (const unit of units) {
        //         var syncRequest = {} as ServerSyncRequestInterface;
        //         syncRequest.id = unit.id;
        //         syncRequest.level = ItemLevel.databaseUnit;
        //         syncRequest.values = {};
        //         syncRequests.push(syncRequest);
        //         if (additions.has(unit.id)) {
        //             syncRequest.action = syncAction.add;
        //             syncRequest.values = awesum.toPOJO(unit);

        //         }
        //         else if (unit.touched) {
        //             syncRequest.action = syncAction.modify;
        //             syncRequest.values = awesum.toPOJO(unit);
        //         }
        //         else {
        //             syncRequest.action = syncAction.receiveChanges;
        //             syncRequest.values = {
        //                 lastModified: unit.lastModified,
        //                 version: unit.version,
        //             }
        //         }
        //     }

        //     var items = await awesum.AwesumDexieDB.serverDatabaseItems.where('databaseId').equals(database.id).toArray();
        //     for (const item of items) {
        //         var syncRequest = {} as ServerSyncRequestInterface;
        //         syncRequest.id = item.id;
        //         syncRequest.level = ItemLevel.databaseItem;
        //         syncRequest.values = {};
        //         syncRequests.push(syncRequest);
        //         if (additions.has(item.id)) {
        //             syncRequest.action = syncAction.add;
        //             syncRequest.values = awesum.toPOJO(item);

        //         }
        //         else if (item.touched) {
        //             syncRequest.action = syncAction.modify;
        //             syncRequest.values = awesum.toPOJO(item);
        //         }
        //         else {
        //             syncRequest.action = syncAction.receiveChanges;
        //             syncRequest.values = {
        //                 lastModified: item.lastModified,
        //                 version: item.version,
        //             }
        //         }
        //     }
        // }

        // var mostRecentLastModified = 0;
        // var mostRecentLastModifiedItem = await awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.orderBy('lastModified').reverse().limit(1).first();
        // if (mostRecentLastModifiedItem) {
        //     mostRecentLastModified = mostRecentLastModifiedItem.lastModified;
        // }

        // syncRequests.push({
        //     id: constants.emptyGuid,
        //     level: ItemLevel.followerDatabaseCompletion,
        //     action: syncAction.receiveChanges,
        //     values: {
        //         lastModified: awesum.ownerApp.lastModified,
        //         version: awesum.ownerApp.version,
        //     }
        // });

        var response = await awesum.sync(syncRequests);

        this.viewData = response;
        this.$forceUpdate();
    }
};
</script>

<template>
    <div class="pageView">
        <h1>{{ $t($resources.Sync.key)
        }}</h1>
        <div class="content">
            <div v-if="viewData.length == 0">No sync requests</div>
            <div v-else>
                <div v-for="item in viewData">
                    <div>{{ item.message }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
