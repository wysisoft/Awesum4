<script lang="ts">

export default {
  setup() {
    return {
    }
  },
}
</script>

<template>
  <div class="pageView">
    <h1 tabindex="0" >{{ $t($resources.Error.key)
      }}</h1>
    <div class="content">
    <p>{{ $awesum.errorMessage ? $awesum.errorMessage : $t($resources.No_Error_Found.key) }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pageView {
  height: 90svmin;
  overflow: auto; 
}

</style>
