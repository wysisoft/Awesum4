<script lang="ts">
import { awesum } from '@/awesum';
import type { ServerSyncResponseInterface } from '../../../server/serverInterfaces/ServerSyncResponseInterface';
import type { ServerSyncRequestInterface } from '../../../server/serverInterfaces/ServerSyncRequestInterface';
import { syncResultType, syncAction, ItemLevel } from '../../../server/typebox';
export default {
    setup() {

        let viewData = awesum.viewData as ServerSyncResponseInterface[];

        return {
            viewData,
            syncResultType,
        };
    },
    async beforeCreate() {
        var syncRequests = []
        if (awesum.ownerApp.touched) {
            alert(awesum.serverEmail == '')
            var syncRequest = {} as ServerSyncRequestInterface;
            syncRequest.id = awesum.ownerApp.id;
            syncRequest.level = ItemLevel.app;
            syncRequest.action = syncAction.modify;
            syncRequest.values = {};

            var touchedProps = awesum.touchedObjects.get(awesum.ownerApp.id);
            if (touchedProps) {
                for (const touchedProp of touchedProps) {
                    (syncRequest.values as any)[touchedProp] = (awesum.ownerApp as any)[touchedProp];
                }
            }
            else {
                syncRequest.values = awesum.ownerApp;
            }
            syncRequests.push(syncRequest);
        }
        else{
            var syncRequest = {} as ServerSyncRequestInterface;
            syncRequest.id = awesum.ownerApp.id;
            syncRequest.level = ItemLevel.app;
            syncRequest.action = syncAction.receiveChanges;
            syncRequest.values = {
                lastModified: awesum.ownerApp.lastModified,
                version: awesum.ownerApp.version,
            }
            syncRequests.push(syncRequest);
        }
        for (const database of awesum.currentDatabases) {
            if (database.touched) {
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = database.id;
                syncRequest.level = ItemLevel.database;
                syncRequest.action = syncAction.modify;
                syncRequest.values = {};
                var touchedProps = awesum.touchedObjects.get(database.id);
                if (touchedProps) {
                    for (const touchedProp of touchedProps) {
                        (syncRequest.values as any)[touchedProp] = (database as any)[touchedProp];
                    }
                }
                else {
                    syncRequest.values = database;
                }
                syncRequests.push(syncRequest);
            }
            else{
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = database.id;
                syncRequest.level = ItemLevel.database;
                syncRequest.action = syncAction.receiveChanges;
                syncRequest.values = {
                    lastModified: database.lastModified,
                    version: database.version,
                }
                syncRequests.push(syncRequest);
            }
        }
        for (const databaseUnit of awesum.currentDatabaseUnits) {
            if (databaseUnit.touched) {
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = databaseUnit.id;
                syncRequest.level = ItemLevel.databaseUnit;
                syncRequest.action = syncAction.modify;
                syncRequest.values = {};
                var touchedProps = awesum.touchedObjects.get(databaseUnit.id);
                if (touchedProps) {
                    for (const touchedProp of touchedProps) {
                        (syncRequest.values as any)[touchedProp] = (databaseUnit as any)[touchedProp];
                    }
                }
                else {
                    syncRequest.values = databaseUnit;
                }
                syncRequests.push(syncRequest);
            }
            else{
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = databaseUnit.id;
                syncRequest.level = ItemLevel.databaseUnit;
                syncRequest.action = syncAction.receiveChanges;
                syncRequest.values = {
                    lastModified: databaseUnit.lastModified,
                    version: databaseUnit.version,
                }
                syncRequests.push(syncRequest);
            }
        }
        for (const databaseItem of awesum.currentDatabaseItems) {
            if (databaseItem.touched) {
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = databaseItem.id;
                syncRequest.level = ItemLevel.databaseItem;
                syncRequest.action = syncAction.modify;
                syncRequest.values = {};
                var touchedProps = awesum.touchedObjects.get(databaseItem.id);
                if (touchedProps) {
                    for (const touchedProp of touchedProps) {
                        (syncRequest.values as any)[touchedProp] = (databaseItem as any)[touchedProp];
                    }
                }
                else {
                    syncRequest.values = databaseItem;
                }
                syncRequests.push(syncRequest);
            }
            else{
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = databaseItem.id;
                syncRequest.level = ItemLevel.databaseItem;
                syncRequest.action = syncAction.receiveChanges;
                syncRequest.values = {
                    lastModified: databaseItem.lastModified,
                    version: databaseItem.version,
                }
                syncRequests.push(syncRequest);
            }
        }
        for (const followerRequest of awesum.followerRequests) {
            if (followerRequest.touched) {
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = followerRequest.id;
                syncRequest.level = ItemLevel.followerRequest;
                syncRequest.action = syncAction.modify;
                syncRequest.values = {};
                var touchedProps = awesum.touchedObjects.get(followerRequest.id);
                if (touchedProps) {
                    for (const touchedProp of touchedProps) {
                        (syncRequest.values as any)[touchedProp] = (followerRequest as any)[touchedProp];
                    }
                    syncRequests.push(syncRequest);
                }
                
                
            }
            else{
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = followerRequest.id;
                syncRequest.level = ItemLevel.followerRequest;
                syncRequest.action = syncAction.receiveChanges;
                syncRequest.values = {
                    lastModified: followerRequest.lastModified,
                    version: followerRequest.version,
                }
                syncRequests.push(syncRequest);
            }
        }
        var deletions = await awesum.AwesumDexieDB.deletions.toArray();
        for(const deletion of deletions) {
            var syncRequest = {} as ServerSyncRequestInterface;
            syncRequest.id = deletion.id;
            syncRequest.level = deletion.level;
            syncRequest.action = syncAction.delete;
            syncRequests.push(syncRequest);
        }
        var followerDatabases = await awesum.AwesumDexieDB.serverFollowerDatabases.toArray();
        for(const followerDatabase of followerDatabases) {
            var syncRequest = {} as ServerSyncRequestInterface;
            syncRequest.id = followerDatabase.id;
            syncRequest.level = ItemLevel.followerDatabase;
            syncRequest.action = syncAction.receiveChanges;
            syncRequests.push(syncRequest);
        }
        var serverMedia = await awesum.AwesumDexieDB.serverMedia.toArray();
        for(const media of serverMedia) {
            if (media.touched) {
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = media.id;
                syncRequest.level = ItemLevel.media;
                syncRequest.action = syncAction.add;
                syncRequest.values = media
            }
            else{
                var syncRequest = {} as ServerSyncRequestInterface;
                syncRequest.id = media.id;
                syncRequest.level = ItemLevel.media;
                syncRequest.action = syncAction.receiveChanges;
                syncRequests.push(syncRequest);
            }
        }

        var response = await awesum.sync(syncRequests);
        this.viewData = response;
    }
};
</script>

<template>
    <div class="pageView">
        <h1>{{ $t($resources.Sync.key)
            }}</h1>
        <div class="content">
            <div v-for="item in viewData">
             <div>{{ item.id }} - {{ item.level }} - {{ item.action }} - {{ item.values }}</div>   
                
            </div>
        </div>
    </div>
</template>
