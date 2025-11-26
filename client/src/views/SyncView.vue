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
            syncAction,
            ItemLevel,
        };
    },
    async beforeCreate() {
        var fullSyncRequests = await awesum.getFullSyncRequests();
        var response = await awesum.sync(fullSyncRequests);
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
            <div v-for="item in viewData">
                <div>{{ item.id }} - {{ ItemLevel[item.level] }} - {{ syncAction[item.action] }} - {{ syncResultType[item.result] }}</div>

            </div>
        </div>
    </div>
</template>
