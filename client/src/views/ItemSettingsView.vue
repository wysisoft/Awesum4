<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import SpellingItemSettingsView from "@/views/SpellingItemSettingsView.vue";
import { itemType } from "../../../server/typebox";
import OneByTwoDigraphsItemSettingsView from "@/views/OneByTwoDigraphsItemSettingsView.vue";
import Multiplication1x1ItemSettingsView from "@/views/Multiplication1x1ItemSettingsView.vue";

import Addition1x1ItemSettingsView from "@/views/Addition1x1ItemSettingsView.vue";
import { awesum } from '@/awesum';

export default {
    setup() {
        const route = useRoute()

        // decide which view to show
        const currentView = computed(() => {
            if (awesum.currentDatabaseItem.itemType == itemType.spelling) {
                return SpellingItemSettingsView;
            }
            else if (awesum.currentDatabaseItem.itemType == itemType.oneByTwoDigraphs) {
                return OneByTwoDigraphsItemSettingsView;
            }
            else if (awesum.currentDatabaseItem.itemType == itemType.oneByOneMultiplication) {
                return Multiplication1x1ItemSettingsView;
            }
            else if (awesum.currentDatabaseItem.itemType == itemType.oneByOneAddition) {
                return Addition1x1ItemSettingsView;
            }
            else {
                alert("Item type not found");
            }
        })

        // pass route params/props down
        const passThroughProps = computed(() => ({
            id: route.params.id
        }))

        return {
            currentView,
            passThroughProps
        }
    },
}
</script>
<template>
    <!-- dynamically render whichever view is chosen -->
    <component :is="currentView" v-bind="passThroughProps" />
</template>
