<script lang="ts">


import { useFullscreen } from '@vueuse/core'
import Breadcrumb from '@/components/Breadcrumb.vue';
import { I18nGlobal } from '@/i18nGlobal';
import { resources } from '@/resources/Resources';
import { ref } from 'vue';
import { useToast } from "vue-toastification";
import { awesum } from '@/awesum';

function recenter() {
  const w = document.documentElement.scrollWidth;
  const h = document.documentElement.scrollHeight;
  const x = (w - window.innerWidth) / 2;
  const y = (h - window.innerHeight) / 2;
  window.scrollTo(x, y);
}


function resetZoom() {
  const vp = document.querySelector("meta[name=viewport]");
  if (!vp) return;

  // Save user’s settings
  const content = vp.getAttribute("content");

  // Force reset
  vp.setAttribute("content", "width=device-width, initial-scale=1");


}


window.addEventListener("orientationchange", () => {
  // iOS Safari needs a tick for viewport to settle
  setTimeout(recenter, 300);
  setTimeout(resetZoom, 300);
});


export default {
  setup() {
    const toast = useToast();
    awesum.toast = toast;
    const { isFullscreen, toggle } = useFullscreen()

const modifications = ref(new Map<string, any>());

    

    let currentElement = ref(null);
    let currentElementDisplay = ref('');

    return {
      isFullscreen,
      toggle,
      I18nGlobal,
      resources,
      currentElement,
      currentElementDisplay,
      modifications
    };
  },
  components: {
    Breadcrumb
  },
  async beforeCreate() {

    

  },
  mounted() {

  },
  methods: {
    
    areImagesLoading(parentElement: HTMLElement): boolean {
      // Get all <img> elements inside the parent element
      const images = parentElement.getElementsByTagName('img');

      if (images.length == 0)
        return false
      // Loop through each image to check its loading status
      for (let img of images) {
        if (img.src) {
          // If any image is not fully loaded, return true
          if (!img.complete || img.naturalHeight === 0) {
            return true;
          }
        }
      }

      // If no images are loading, return false
      return false;
    },
    beforeEnter(el: any) {
      if (!(this.$router.options.history as any).length || (this.$router.options.history as any).length  == 0) {
        return;
      }
      // Called before the new component enters
      this.currentElementDisplay = el.style.display;
      el.style.display = 'none';
      this.currentElement = el;
    },

    enter(el: any, done: any) {
      // Called when the new component is mounted
      done();
      // // Example: fade in manually
      // requestAnimationFrame(() => {
      //   el.style.transition = "opacity 0.2s ease"
      //   el.style.opacity = 1

      //   // Call `done()` when finished
      //   el.addEventListener("transitionend", done, { once: true })
      // })
    },

    afterEnter(el: any) {
    },

    beforeLeave(el: any) {
      // Start at full opacity

    },

    leave(el: any, done: any) {
      if (!this.currentElement) {
        done();
        return;
      }
      var interval = setInterval(() => {
        if ( !this.areImagesLoading(this.currentElement! as HTMLElement)) {
          clearInterval(interval);
          el.style.display = 'none';
          (this.currentElement! as HTMLElement).style.display = this.currentElementDisplay;
          done();
        }
        else { }
      }, 50);
      // Example: fade out manually
      // el.style.transition = "opacity 0.2s ease"
      // el.style.opacity = 0
      // el.addEventListener("transitionend", done, { once: true })
    },

    afterLeave(el: any) {
    },
    toggleFullScreen() {
      this.toggle();
    },
    showEdit() {
      return this.$awesum.currentApp && this.$awesum.currentApp.id == this.$awesum.ownerApp.id 
      && this.$awesum.currentApp.uniqueName
        && !this.$route.fullPath.startsWith("/" + I18nGlobal.t(resources.i.key) + "/") &&
        this.$router.currentRoute.value.name != 'unitCompleted'
        
    },
    showPlay() {
      return this.$router.currentRoute.value.fullPath.startsWith('/' + I18nGlobal.t(resources.i.key) + '/');
    }
  }
};
</script>

<template>
  <div class="appDiv">       
    <div class="appViewHeaderAndBreadcrumb">
      <div class="appViewHeader">
        <router-link custom :to="{ name: $t($resources.Home.key) }" v-slot="{ href }">
          <button @click="$router.push(href)" class="btn btn-link">
            <FaHouse />
            <span>{{ $t($resources.Home.key) }}</span>
          </button>
        </router-link>

        <router-link custom :to="{ name: $t($resources.Settings.key) }" v-slot="{ href }">
          <button @click="$router.push(href)" class="btn btn-link">
            <faGears />
            <span>{{ $t($resources.Settings.key) }}</span>
          </button>
        </router-link>

        <router-link custom :to="{ path: '/' + $t($resources.i.key) + '/' + $t($resources.Settings.key) + $router.currentRoute.value.fullPath }"
          v-slot="{ href }" v-if="showEdit()">
          <button :disabled="!$awesum.currentApp || !$awesum.currentApp.uniqueName" @click="$router.push(href)"
            class="btn btn-link">
            <faPenToSquare />
            <span>{{ $t($resources.Edit.key) }}</span>
          </button>
        </router-link>

        <router-link custom
          :to="{ path: $awesum.replaceAtFront($router.currentRoute.value.fullPath, '/' +  $t($resources.i.key) + '/' + $t($resources.Settings.key) , '') }"
          v-slot="{ href }" v-if="showPlay()">
          <button v-if="$awesum.currentApp && $awesum.currentApp.uniqueName" @click="$router.push(href)"
            class="btn btn-link">
            <CgPlayButtonR />

            <span>{{ $t($resources.Play.key) }}</span>
          </button>
        </router-link>

        <router-link v-if="$awesum.serverEmail && !$awesum.noInternet" custom :to="{ name: $t($resources.Sync.key) }"
          v-slot="{ href }">
          <button class="btn btn-link" @click="$router.push(href)">
            <ChRefresh />
            <span>{{ $t($resources.Sync.key) }}</span>
            <!-- <div v-if="$awesum.updatesToSync.length > 0" style="
    font-size: 1vmin;
    position: absolute;
    color: black;
    border: .1vmin solid black;
    padding: .5vmin;
    background: red;
    left: 16vmin;
">
  <span>{{ $awesum.updatesToSync.length }} </span>
</div> -->
          </button>
        </router-link>

        <div v-if="modifications.size > 0">
          <span>{{ modifications.size }} </span>
        </div>

        <button class="btn btn-link" @click="toggleFullScreen" role="link">
          <faCompress v-if="isFullscreen" />
          <faExpand v-else />
          <span>{{ $t($resources.Fullscreen.key) }}</span>
        </button>

        <div class="appViewLoginDiv">
          <router-link custom :to="{ name: $t($resources.Login.key) }" v-slot="{ href }">
            <button class="btn btn-link" @click="$router.push(href)">
              <faUser />
              <div class="loginTextDiv">
                <span> {{ (!$awesum.serverEmail ? $t($resources.Log_In.key) : '' + $awesum.serverEmail) }}</span>
              </div>
            </button>
          </router-link>
        </div>


      </div>
      <Breadcrumb />
    </div>


    <router-view v-slot="{ Component }">
      <transition :css="false" mode="in-out" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
        @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
        <component :is="Component" :key="$route.fullPath + $awesum.refreshNumber" />
      </transition>
    </router-view>

    <PWABadge />
  </div>
</template>

<style scoped>
.appDiv {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.appViewHeader {

  display: flex;
  flex-direction: row;
  align-items: start;
  position: relative;
}

.appViewHeaderAndBreadcrumb {
  height: 8.9svmin;
  border-bottom: .1svmin solid black;
}

.appViewLoginDiv {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}


.appViewHeader .btn {
  padding-top: .2svmin;
  padding-bottom: 0svmin;
  padding-left: .5svmin;
  padding-right: .5svmin;
  border-radius: .5svmin;
  margin-left: .5svmin;
  margin: .3svmin .3svmin .3svmin .3svmin;
}

.appViewHeader span {
  font-weight: 500;
  font-size: 1.3svmin;
  display: block;
}

.appViewHeader a,
.appViewHeader button {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  color: inherit
}

.appViewHeader a:hover,
.appViewHeader button:hover {
  color: inherit
}

.appViewHeader svg {
  cursor: pointer;
  color: black;
  font-size: 2.3svmin;
  margin-top: .25svmin;
  margin-bottom: .25svmin;
}


</style>