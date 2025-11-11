<template>
  <component :is="currentView" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { awesum } from '../awesum'
import HomeView from './HomeView.vue'
import MainView from './MainView.vue'

const currentView = computed(() => {
  return awesum.serverEmail ? HomeView : MainView
})
</script>
