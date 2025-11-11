<script lang="ts">
import { ref } from 'vue';
import EditTextComponent from '@/components/EditTextComponent.vue';
import * as Modal from '../components/Modal.vue';
import { v4 as uuid } from 'uuid';
import type { Table } from 'dexie';
import EditImageComponent from '@/components/EditImageComponent.vue';
import { type ServerMediaInterface } from '../../../server/serverInterfaces/ServerMediaInterface';
import { itemType,imageType } from '../../../server/typebox';
import { type ServerFollowerDatabaseInterface } from '../../../server/serverInterfaces/ServerFollowerDatabaseInterface';
import type { ServerRouterInterface } from '../../../server/serverInterfaces/ServerRouterInterface';

export default {
  components: {
    Modal,
    EditTextComponent
  },
  setup() {
    
    return {
      showModal: ref(false),
      currentRouter: ref(null) as any as ServerRouterInterface,
      currentType: ref(null) as any,
      itemType
    }
  },
  async beforeRouteLeave(to, from, next) {

    next();
  },
  async beforeCreate() {
  },
  mounted() {
  },
  methods: {

  },
};

</script>

<template>
  <div class="pageView" style="">
    <h1> {{ $awesum.currentRouter.routerMac }} {{ $t($resources.Settings.key) }}</h1>

    <div class="content">
      <EditTextComponent style="margin-left:2svmin;margin-bottom:2svmin;" :key="$awesum.refreshNumber" :required="true" :requiresEditAndSave="true"
        :redirectUrlAfterSave="'/' + $t($resources.i.key)  + '/' + $t($resources.Routers.key)"
        :labelWidth="'30svmin'" :inputWidth="'94svmin'" :parentObject="$awesum.currentRouter"
        :displayName="'Router MAC Address'"
        :propertyName="'routerMac'" />

        <span>connection status: {{ $awesum.currentRouter.status }}</span>

      <EditTextComponent style="margin-left:2svmin;margin-bottom:2svmin;" :key="$awesum.refreshNumber" :required="true" 
        :labelWidth="'30svmin'" :inputWidth="'94svmin'" :parentObject="$awesum.currentRouter"
        :displayName="'Router IP Address'"
        :propertyName="'ipAddress'" />

      <EditTextComponent style="margin-left:2svmin;margin-bottom:2svmin;" :key="$awesum.refreshNumber" :required="true" 
        :labelWidth="'30svmin'" :inputWidth="'94svmin'" :parentObject="$awesum.currentRouter"
        :displayName="$t($resources.Monday.key)"
        :propertyName="'mondayTimesAndDurations'" />

      <EditTextComponent style="margin-left:2svmin;margin-bottom:2svmin;" :key="$awesum.refreshNumber" :required="true" 
        :labelWidth="'30svmin'" :inputWidth="'94svmin'" :parentObject="$awesum.currentRouter"
        :displayName="$t($resources.Tuesday.key)"
        :propertyName="'tuesdayTimesAndDurations'" />

      <EditTextComponent style="margin-left:2svmin;margin-bottom:2svmin;" :key="$awesum.refreshNumber" :required="true" 
        :labelWidth="'30svmin'" :inputWidth="'94svmin'" :parentObject="$awesum.currentRouter"
        :displayName="$t($resources.Wednesday.key)"
        :propertyName="'wednesdayTimesAndDurations'" />

      <EditTextComponent style="margin-left:2svmin;margin-bottom:2svmin;" :key="$awesum.refreshNumber" :required="true" 
        :labelWidth="'30svmin'" :inputWidth="'94svmin'" :parentObject="$awesum.currentRouter"
        :displayName="$t($resources.Thursday.key)"
        :propertyName="'thursdayTimesAndDurations'" />

      <EditTextComponent style="margin-left:2svmin;margin-bottom:2svmin;" :key="$awesum.refreshNumber" :required="true" 
        :labelWidth="'30svmin'" :inputWidth="'94svmin'" :parentObject="$awesum.currentRouter"
        :displayName="$t($resources.Friday.key)"
        :propertyName="'fridayTimesAndDurations'" />

      <EditTextComponent style="margin-left:2svmin;margin-bottom:2svmin;" :key="$awesum.refreshNumber" :required="true" 
        :labelWidth="'30svmin'" :inputWidth="'94svmin'" :parentObject="$awesum.currentRouter"
        :displayName="$t($resources.Saturday.key)"
        :propertyName="'saturdayTimesAndDurations'" />

      <EditTextComponent style="margin-left:2svmin;margin-bottom:2svmin;" :key="$awesum.refreshNumber" :required="true" 
        :labelWidth="'30svmin'" :inputWidth="'94svmin'" :parentObject="$awesum.currentRouter"
        :displayName="$t($resources.Sunday.key)"
        :propertyName="'sundayTimesAndDurations'" />
















        

    </div>
  </div>
</template>
<style scoped>
.pageView {
  background-color:rgb(251, 251, 251);
}
</style>