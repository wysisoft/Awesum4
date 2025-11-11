<script lang="ts">
import { computed, shallowRef } from "vue";
import { useRoute } from "vue-router";

import SpellingItemView from "@/views/SpellingItemView.vue";
import { itemType } from "../../../server/typebox";
import OneByTwoDigraphsView from "@/views/OneByTwoDigraphsItemView.vue";
import Multiplication1x1ItemView from "@/views/Multiplication1x1ItemView.vue";

import Addition1x1ItemView from "@/views/Addition1x1ItemView.vue";
import { awesum } from "@/awesum";

export default {
  setup() {
    const route = useRoute()

    // decide which view to show
    const currentView = computed(() => {
      if (awesum.currentDatabaseItemTemp.itemType == itemType.spelling) {
        return SpellingItemView;
      }
      else if (awesum.currentDatabaseItemTemp.itemType == itemType.oneByTwoDigraphs) {
        return OneByTwoDigraphsView;
      }
      else if (awesum.currentDatabaseItemTemp.itemType == itemType.oneByOneMultiplication) {
        return Multiplication1x1ItemView;
      }
      else if (awesum.currentDatabaseItemTemp.itemType == itemType.oneByOneAddition) {
        return Addition1x1ItemView;
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
  async beforeRouteUpdate(to, from, next) {

    let currentView = null;

    if (awesum.currentDatabaseItemTemp.itemType == itemType.spelling) {
      currentView = SpellingItemView;
    } else if (
      awesum.currentDatabaseItemTemp.itemType == itemType.oneByTwoDigraphs
    ) {
      currentView = OneByTwoDigraphsView;
    } else if (
      awesum.currentDatabaseItemTemp.itemType == itemType.oneByOneMultiplication
    ) {
      currentView = Multiplication1x1ItemView;
    } else if (
      awesum.currentDatabaseItemTemp.itemType == itemType.oneByOneAddition
    ) {
      currentView = Addition1x1ItemView;
    } else {
      alert("Item type not found");
    }

    if (currentView && currentView.methods && (currentView.methods as any).beforeRouteEnter) {
      await (currentView.methods as any).beforeRouteEnter();
    }


    await next();

  },
  async beforeRouteEnter(to, from, next) {
    let currentView = null;

    if (awesum.currentDatabaseItemTemp.itemType == itemType.spelling) {
      currentView = SpellingItemView;
    } else if (
      awesum.currentDatabaseItemTemp.itemType == itemType.oneByTwoDigraphs
    ) {
      currentView = OneByTwoDigraphsView;
    } else if (
      awesum.currentDatabaseItemTemp.itemType == itemType.oneByOneMultiplication
    ) {
      currentView = Multiplication1x1ItemView;
    } else if (
      awesum.currentDatabaseItemTemp.itemType == itemType.oneByOneAddition
    ) {
      currentView = Addition1x1ItemView;
    } else {
      alert("Item type not found");
    }

    if (currentView && currentView.methods && (currentView.methods as any).beforeRouteEnter) {
      await (currentView.methods as any).beforeRouteEnter();
    }

    await next();
  },
};
</script>
<template>
  <!-- dynamically render whichever view is chosen -->
  <component :key="$route.fullPath " :is="currentView" v-bind="passThroughProps" />
</template>
