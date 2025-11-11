<script lang="ts">
export default {
  setup() {
    return {
      window
    };
  },
  async beforeCreate() {
  },

  methods: {
    async logOut() {
      await fetch('/api/logout');
      this.$awesum.serverEmail = '';
      window.location.href = '/';
    },
  },
};

</script>

<template>

<div class="pageView">
  <h1>{{ $t($resources.Login.key) }}</h1>
    <div class="content">
      <div v-if="$awesum.serverEmail">
        <h2 style="font-size: 3.5svmin;">Logged in as {{ $awesum.serverEmail }}</h2>
        <p>
        <button class="btn btn-primary" @click="logOut()">{{ $t($resources.Log_Out.key) }}</button>
      </p>
      </div>
      <div v-else>
        <h2 style="font-size: 3.5svmin;">{{ $t($resources.Choose_A_Login_Provider.key) }}</h2>
        <form :action="window.location.origin + '/api/login-google'" method="get">
          <p>
          <button class="btn btn-primary">{{ $t($resources.Google.key) }}</button>
        </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>