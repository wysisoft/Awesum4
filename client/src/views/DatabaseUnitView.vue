<script lang="ts">
import { I18nGlobal } from '@/i18nGlobal';
import type { ServerDatabaseItemInterface } from '../../../server/serverInterfaces/ServerDatabaseItemInterface';
import { ref } from 'vue';
import { itemType,ItemLevel } from '../../../server/typebox';
import { type ServerOneByOneMathDatabaseItemInterface } from '../../../server/serverInterfaces/ServerOneByOneMathDatabaseItemInterface';

export default {
  setup() {
    var background = ref("");
   
    return {
      I18nGlobal,
      background,
      itemType,
   
    }
  },
  async beforeCreate() {


   
   

    var mediaItem = await this.$awesum.AwesumDexieDB.serverMedia.get(this.$awesum.currentDatabaseUnit.homePageImage);
    
    if (mediaItem) {
        this.background = 'url("' + mediaItem.data + '")';
    }
  }
}
</script>

<template>

  <div class="pageView">
    <h1>{{ $awesum.currentDatabaseUnit.name }}</h1>

    <div class=content>

      <h2 style="font-size:3.5svmin;">{{ $t($resources.Items.key) }}</h2>

      <div v-if="$awesum.currentDatabaseItems.length == 0" style="margin-left:2svmin;">No items found, click <router-link
          :to="{ path: '/' + I18nGlobal.t($resources.i.key) + '/' + I18nGlobal.t($resources.Settings.key) + $router.currentRoute.value.fullPath }"
          >
            <span>{{ $t($resources.edit.key) }}</span>
        </router-link> to edit items</div>

      <div v-for="item in $awesum.currentDatabaseItems" class="listItem" style="display:flex;align-items: baseline;">
        <router-link custom :to="{path:$awesum.getDynamicUrl(item as ServerDatabaseItemInterface, $route)}" v-slot="{ href }">
          
            
          <button class="btn btn-primary"
              :style="{backgroundColor: $awesum.currentDatabaseCompletions.has(item.id) ||
                $awesum.currentDatabaseCompletions.has($awesum.currentDatabaseUnit.id)  ? '#68ff68' : '', color: $awesum.currentDatabaseCompletions.has(item.id)
                || $awesum.currentDatabaseCompletions.has($awesum.currentDatabaseUnit.id) ? 'black' : '',}"
          style="margin-left:2svmin;margin-right:1svmin;margin-bottom:1svmin;"  @click="$router.push(href)">
            <span>{{$awesum.currentDatabaseCompletions.has(item.id)
            || $awesum.currentDatabaseCompletions.has($awesum.currentDatabaseUnit.id) 
            ? $t($resources.Completed.key) : $t($resources.Lets_Go.key) }}</span>
          </button> 
        </router-link>

        <div class="unitName">{{ 
        item.itemType == itemType.spelling || item.itemType == itemType.oneByTwoDigraphs ? item.order 
        : item.itemType == itemType.oneByOneMultiplication ? (item as ServerOneByOneMathDatabaseItemInterface).data.firstNumber + ' x ' 
        + (item as ServerOneByOneMathDatabaseItemInterface).data.secondNumber 
        : item.itemType == itemType.oneByOneAddition ? (item as ServerOneByOneMathDatabaseItemInterface).data.firstNumber + ' + ' 
        + (item as ServerOneByOneMathDatabaseItemInterface).data.secondNumber : '' }}</div>
      </div>

    </div>
  </div>
</template>
<style scoped lang="scss">
.pageView {
  background-Image: v-bind(background);
  background-Size: cover;
  height: 94svmin;
}
:deep(.dt-layout-row:has(.dt-search)) {
  position: relative;
  top:-8.5svmin;
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



.dt-layout-table tbody {
  font-size: 2.2svmin;
}

.text-center span {
  padding-left: 1svmin;
}

.dt-paging > nav{
  display: flex;
  gap:.5svmin;
}


</style>