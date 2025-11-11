<script lang="ts">
import { ref } from 'vue';
import type { ServerDatabaseUnitInterface } from '../../../server/serverInterfaces/ServerDatabaseUnitInterface';
import { itemType } from '../../../server/typebox';

export default {
  setup() {
    var background = ref("");

    return {
      background,
      itemType
    }
  },
  async mounted() {
    var mediaItem = await this.$awesum.AwesumDexieDB.serverMedia.get(this.$awesum.currentDatabase.homePageIcon);
    if (mediaItem) {
      this.background = 'url("' + mediaItem.data + '")';
    }
  }
}
</script>

<template>
  <div class="pageView">
    <h1>{{ $awesum.currentDatabase.name }}</h1>
    <div class="content">
      <h2 style="font-size: 3.5svmin; ">{{ $t($resources.Units.key) }}</h2>
      <div class="pageContentContainer">
        <div v-for="typ in $awesum.currentDatabaseUnits" class="listItem" style="display:flex;align-items:baseline;"
        >

          <router-link custom :to="{ path: $awesum.getDynamicUrl(typ as ServerDatabaseUnitInterface, $route) }"
            v-slot="{ href }">
            <button class="btn btn-primary" style="margin-left: 2svmin;margin-bottom:1svmin;"
              v-bind:style="{ marginBottom: typ == $awesum.currentDatabaseUnits[$awesum.currentDatabaseUnits.length - 1] ? '0' : '1svmin' ,backgroundColor: $awesum.currentDatabaseCompletions.has(typ.id) ? '#68ff68' : '', color: $awesum.currentDatabaseCompletions.has(typ.id) ? 'black' : '',}"



              @click="$router.push(href)">
              <span>{{$awesum.currentDatabaseCompletions.has(typ.id) ? $t($resources.Completed.key) : $t($resources.Lets_Go.key) }}</span>
            </button>
          </router-link>
          <span style="">{{ typ.name}}</span>


        </div>
        <div v-if="$awesum.currentDatabaseUnits.length == 0">
          <div style="margin-left:2svmin;margin-bottom:1svmin;">No unit types found, click
            <router-link
              :to="{ path: '/' + $t($resources.i.key) + '/' + $t($resources.Settings.key) + '/' + encodeURI($awesum.currentApp.name) + '/' + encodeURI($awesum.currentDatabase.name) }">
              <span>{{ $t($resources.edit.key) }}</span>
            </router-link> to add units
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
  background-Image: v-bind(background);
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