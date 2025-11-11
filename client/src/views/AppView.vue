<script lang="ts">
import type { ClientDatabase } from '@/clientClasses/Database';
import { ref } from 'vue';
import { I18nGlobal } from '@/i18nGlobal';
import type { ServerDatabaseInterface } from '../../../server/serverInterfaces/ServerDatabaseInterface';
import type { ServerRouterInterface } from '../../../server/serverInterfaces/ServerRouterInterface';

export default {
  setup() {
    var background = ref("");
    var routerStatuses = ref<{[key: string]: any}>({});

    return {
      I18nGlobal,
      background,
      routerStatuses
    }
  }, 
  async beforeCreate() {
    var mediaItem = await this.$awesum.AwesumDexieDB.serverMedia.get(this.$awesum.currentApp.homePageImage);
    if (mediaItem) {
      this.background = 'url("'  +  mediaItem.data + '")';
    }
    await this.$awesum.refreshCurrentAppRouters();
    
    // Load router statuses
    for (const router of this.$awesum.currentAppRouters) {
      this.routerStatuses[router.routerMac] = await this.$awesum.getRouterStatus(router.routerMac);
    }
  },
}
</script>

<template>
  <div class="pageView" :style="{backgroundImage: background}">
    <h1>{{ $awesum.currentApp.name + ' (' + $awesum.currentApp.uniqueName + ')' }}</h1>
    <div class="content" >

      <h2 style="font-size: 3.5svmin;">{{ $t($resources.Databases.key) }}</h2>
      <div class="pageContentContainer">
        <div v-if="$awesum.currentDatabases.length == 0" style="margin-left:2svmin;">No databases found, click
          <router-link :to="{ path: '/' + $t($resources.i.key) +'/' + $t($resources.Settings.key) + $router.currentRoute.value.fullPath }">
            <span>{{ $t($resources.edit.key) }}</span>
          </router-link> to edit databases
        </div>
        <div v-for="database in $awesum.currentDatabases" class="listItem" style="display:flex;flex-direction:row;align-items:baseline;">
          <router-link custom :to="{ path: $awesum.getDynamicUrl(database as ServerDatabaseInterface,$route) }"
            v-slot="{ href }">
            <button class="btn btn-primary" style="margin-left: 2svmin;margin-bottom:1svmin;" @click="$router.push(href)">
              <span>{{ $t($resources.Lets_Go.key) }}</span>
            </button>
          </router-link>
          <div class="areaNameDiv">{{ database.name }}</div>

        </div>
      </div>

      <h2 v-if="$awesum.currentAppRouters.length > 0" style="font-size: 3.5svmin;">{{ $t($resources.Routers.key) }}</h2>
      <div class="pageContentContainer" v-if="$awesum.currentAppRouters.length > 0">
        <div v-for="router in $awesum.currentAppRouters" class="listItem" style="display:flex;flex-direction:row;align-items:baseline;">
          <div class="areaNameDiv">{{ router.routerMac }} ({{ router.ipAddress }})</div>
          <div style="margin-left: 2svmin; color: #666;">
            <span v-if="routerStatuses[router.routerMac] && routerStatuses[router.routerMac].status">{{ routerStatuses[router.routerMac] }}</span>
            <span v-else>Loading...</span>
          </div>
        </div>
      </div>

    </div>
    <div class="footer">
      <router-link :to="{ path: $route.path + '/' + $t($resources.Completions.key) }" class="btn btn-primary">
        <span>{{ $t($resources.Completions.key) }}</span>
      </router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
.pageView {
  background-Size: cover
}

.pageContentContainer{
  height:27svmin;
}

.pageContentContainer .btn {
  margin-right: 1svmin;
}

.footer {
  height: 7svmin;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>