<script lang="ts">
import { awesum } from '@/awesum';
import type { ServerSyncResponseInterface } from '../../../server/serverInterfaces/ServerSyncResponseInterface';
import { syncResultType } from '../../../server/typebox';
export default {
    setup() {

        let viewData = awesum.viewData as ServerSyncResponseInterface[];

        return {
            viewData,
            syncResultType,
        };
    }
};
</script>

<template>
    <div class="pageView">
        <h1>{{ $t($resources.Sync.key)
        }}</h1>
        <div class="content">
            <div v-for="item in viewData">
                <div v-if="item.deletion">
                    <div v-if="item.result == syncResultType.deleted">

                    </div>     
                    <div v-if="item.message?.message == '1'">

                    </div>
                </div>
                <div v-if="item.app">
                    <div v-if="item.message?.message == '0'">

                    </div>
                    <div v-if="item.message?.message == '1'">

                    </div>

                </div>
                <div v-if="item.database">
                    <div v-if="item.message?.message == '0'">

                    </div>
                    <div v-if="item.message?.message == '1'">

                    </div>

                </div>
                <div v-if="item.databaseUnit">
                    <div v-if="item.message?.message == '0'">

                    </div>
                    <div v-if="item.message?.message == '1'">

                    </div>

                </div>
                <div v-if="item.databaseItem">
                    <div v-if="item.message?.message == '0'">

                    </div>
                    <div v-if="item.message?.message == '1'">

                    </div>
                </div>
                <div v-if="item.followerRequest">
                    <div v-if="item.message?.message == '0'">

                    </div>
                    <div v-if="item.message?.message == '1'">

                    </div>
                </div>
                <div v-if="item.followerDatabase">
                    <div v-if="item.message?.message == '0'">

                    </div>
                    <div v-if="item.message?.message == '1'">

                    </div>
                </div>
                <div v-if="item.followerDatabaseCompletion">
                    <div v-if="item.message?.message == '0'">

                    </div>
                    <div v-if="item.message?.message == '1'">

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
