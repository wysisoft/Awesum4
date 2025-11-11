<script lang="ts">

export default {

}
</script>

<template>
  <div class="pageView">
    <h1>Welcome to the Awesum App!</h1>
    <div class="content">
      <router-link style="margin-right:1svmin;" :to="{ path: '/' + $t($resources.Public.key) +'/' + $t($resources.Public_Database.key) 
      + '/'  + $t($resources.Unit_1.key) +'/1'  }">
            <span>Spelling Example</span>
          </router-link>

          <router-link style="margin-right:1svmin;" :to="{ path: '/' + $t($resources.Public.key) +'/' + $t($resources.Public_Database.key) 
      + '/'  + $t($resources.Unit_2.key) +'/1'  }">
            <span>Two Digraphs Example</span>
          </router-link>

          <router-link style="margin-right:1svmin;" :to="{ path: '/' + $t($resources.Public.key) +'/' + $t($resources.Public_Database.key) 
      + '/'  + $t($resources.Unit_3.key) +'/1'  }">
            <span>Multiplication Example</span>
          </router-link>

          <router-link style="margin-right:1svmin;" :to="{ path: '/' + $t($resources.Public.key) +'/' + $t($resources.Public_Database.key) 
      + '/'  + $t($resources.Unit_4.key) +'/1'  }">
            <span>Addition Example</span>
          </router-link>

      <h2 style="font-size:3.5svmin;margin-top:2svmin;">
        What is the Awesum App?
      </h2>
      <p>Awesum app is a tool for kids that reinforces spelling and math with rewards. Teachers and parents can assign a
        kid assignments, and can monitor the completion of the assignments. It is a website located at
        https://awesum.app</p>
      
    </div>
  </div>
</template>

<style scoped>

</style>