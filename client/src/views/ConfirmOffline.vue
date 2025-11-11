<script lang="ts">
export default {
  setup() {
    return {
    }
  },
  async beforeCreate() {
    console.log('confirm offline view from route ' + this.$awesum.router.currentRoute)
  },
  methods: {
    restartApp() {
      window.location.href = '/';
    },
    async continueOffline() {
      var globalRow = await this.$awesum.AwesumDexieGlobalDB.global.get(1);
      if(globalRow){
        this.$awesum.serverEmail = globalRow.latestEmail;
        this.$awesum.router.push({ name: this.$t(this.$resources.Home.key) });
      }
    }
  }
}
</script>

<template>
    <h1>{{ $t($resources.Confirm_Offline.key) }}</h1>
    <p style="display:flex;flex-direction:row;gap:1svmin;margin-top:1svmin;">You appear to be offline. Would you like to continue?
        <button class="btn btn-primary"  @click="continueOffline">Continue Offline</button>
        <button class="btn btn-primary" @click="restartApp">Restart App</button>
  </p>
</template>
