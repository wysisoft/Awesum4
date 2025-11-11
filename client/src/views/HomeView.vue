<script lang="ts">
import {ref} from 'vue'
export default {
setup(){
let awesumBackground = ref('');
return {
  awesumBackground
}
},
beforeCreate(){
  this.awesumBackground =  'url("/awesumBackground' + this.$awesum.appVersion + '.webp")'
}
}
import type { ServerAppInterface } from '../../../server/serverInterfaces/ServerAppInterface';
</script>

<template>
  <div class="pageView">
    <h1>{{ $t($resources.Awesum.key) }}</h1>
    <div class=content>

      <h2 style="font-size: 3.5svmin;">{{ $t($resources.Apps.key) }}</h2>
      <div class="pageContentContainer">

        <div v-if="$awesum.apps.length == 0" style="margin-left:2svmin;">{{ $t($resources.No_apps_found.key) }}
          <router-link :to="{ name: $t($resources.Settings.key) }">
            <span>{{ $t($resources.Settings.key) }}</span>
          </router-link> {{ $t($resources.to_edit_apps.key) }}</div>

      <div v-for="app in $awesum.apps" class="listItem" style="display:flex;flex-direction:row;align-items:baseline;">

        <router-link custom :to="{path:$awesum.getDynamicUrl(app as ServerAppInterface,$route)}" v-slot="{ href }">
          <button class="btn btn-primary" style="margin-left: 2svmin;margin-bottom:1svmin;"  @click="$router.push(href)">
            <span>{{ $t($resources.Lets_Go.key) }}</span>
          </button>
        </router-link>
        <span>{{ app.name + ' (' + app.uniqueName + ')' }}</span>
      </div>
    </div>
    </div>
    <div class="footer">
      <router-link :to="{name:$t($resources.About.key)}" class="btn btn-primary">
        <span>{{ $t($resources.About.key) }}</span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pageView{
  background-image: v-bind(awesumBackground);
    background-size: cover;
}

.footer {
    height: 7svmin;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.pageContentContainer{
  height:68svmin;
}

.pageContentContainer .btn {
  margin-right: 1svmin;
}
</style>

