<script lang="ts">
import { getDefault, types,imageType, syncAction, ItemLevel } from '../../../server/typebox';
import { Value } from '@sinclair/typebox/value'
import { I18nGlobal } from '@/i18nGlobal';
import { resources } from '@/resources/Resources';
import { reactive, ref } from 'vue'
import { awesum } from '@/awesum';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
import EditMultiselectComponent from '@/components/EditMultiselectComponent.vue';
import type { ServerFollowerRequestInterface } from '../../../server/serverInterfaces/ServerFollowerRequestInterface'
import { validateFollowerRequest } from '../../../server/javascriptClientValidations/followerRequest';
import type { ServerAddFollowerResponseInterface } from '../../../server/serverInterfaces/ServerAddFollowerResponseInterface';
import type { ServerSyncRequestInterface } from '../../../server/serverInterfaces/ServerSyncRequestInterface';
import type { ServerDisplayNameFromEmailResponseInterface } from '../../../server/serverInterfaces/ServerDisplayNameFromEmailResponseInterface';
import { constants } from '../../../server/constants';

export default {
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture,
    EditMultiselectComponent

  },
  setup() {

  let payload = getDefault(Value.Default(types.filter((x) => x.$id == "followerRequest")[0],{} )as ServerFollowerRequestInterface);
    payload.followerEmail = '';
    payload.followerName = '';

let groups = reactive({value:''});

    let followerDetails = ref('');

    let followerName = ref('');

    return {
      payload,
      I18nGlobal,
      followerDetails,
      followerName,
      validateFollowerRequest,
      groups
    };
  },
  methods: {
    async emailChanged(e: Event) {
      await awesum.waitForDexie();

      this.followerName = ''
      var followerName = await fetch(window.location.origin + "/api/displayNameFromEmail?appEmail=" + this.payload.followerEmail, {
        method: 'GET',
        credentials: "include",
      });

      if (followerName.ok) {
        var details = await followerName.json() as ServerDisplayNameFromEmailResponseInterface;
        this.followerName = details.name;
      }
      else {
        this.followerName = this.$t(resources.Follower_Not_Found.key, {followerName:this.payload.followerEmail});
      }

    },
    onDetect(detectedCodes: any) {
      this.payload.followerEmail = detectedCodes[0].data;
    },
    async addFollower() {
      await awesum.waitForDexie();

      if (this.groups.value) {
        //convert this.addFollowerPayload.groups from object values to a comma separated string
        this.payload.groups = this.groups.value;
        awesum.mostRecentGroups = this.payload.groups
      }

      this.payload.leaderAppId = awesum.ownerApp.id;
      this.payload.leaderEmail = awesum.ownerApp.email;
      this.payload.leaderName = awesum.ownerApp.name;

      this.payload.followerAppId = constants.emptyGuid;
      this.payload.followerName = this.followerName;

      var validationResults = await validateFollowerRequest(this.payload);
      if (validationResults.length > 0) {
        await (this.$refs.followerEmail as any).validate();
        await (this.$refs.followerGroups as any).validate();
        return;
      }

      var syncRequest:Array<ServerSyncRequestInterface> = [];
      var appSyncRequest = await awesum.getAppSyncRequest(awesum.ownerApp.id);
      syncRequest.push(appSyncRequest);
      syncRequest.push({
        action: syncAction.add,
        id: this.payload.id,
        level: ItemLevel.followerRequest,
        values: this.payload,
      });
      
      await awesum.sync(syncRequest);

        this.$awesum.router.push({
          path: "/" + this.$t(resources.i.key) + "/" + this.$t(resources.LeadersAndFollowers.key), query: {
            activeView: "followers",
            order: '[[2,"asc"]]'
          }
        });
      
    }


















  }

}
</script>

<template>

<div class="pageView">
    <h1>{{ $t($resources.Add_Follower.key)
      }}</h1>
    <div class="content">

  <div
    style="margin-bottom:2svmin;display: flex;flex-direction: row;align-content: center;width: 100%;height: 30svmin;/* justify-items: center; *//* align-items: center; */justify-content: center;align-items: center">

    <FeCameraOff style="
    font-size: 11svmin;
    position: absolute;
    width: 30svmin;
    
" />

    <qrcode-stream style="width:30svmin;height:30svmin;" @detect="onDetect"></qrcode-stream>
  </div>

  <EditTextComponent :labelWidth="'22svmin'" :input-width="'99%'" 
    :underText="'Enter the followers email address or scan their barcode'" ref="followerEmail"
    :parentObject="payload" :displayName="'Follower Email'" :propertyName="'followerEmail'"
    :validationFunction="validateFollowerRequest" :validationPath="'\/followerEmail'" />
<div style="display: flex;flex-direction: row-reverse;margin-bottom:1svmin;">
    <button class="btn btn-primary" style="margin-right:2svmin;" @click="emailChanged">{{ $t($resources.Search.key) }}</button>
</div>

    <div v-if="followerName">
    <EditTextComponent id="followerName" style="margin-top:2svmin;" v-if="true" :labelWidth="'22svmin'" :input-width="'99%'" 
     ref="followerNameComponent"
    :parentObject="this" :displayName="'Follower Name'" :propertyName="'followerName'"
     />
</div>  
    <div v-if="followerName && followerName != $t($resources.Follower_Not_Found.key, {followerName:payload.followerEmail} )">

  <EditMultiselectComponent style="margin-top:2svmin;" :inputWidth="'77%'" :labelWidth="'22svmin'" :multiple="true"
    :underText="'Choose the groups for this follower. Followers will see these groups.'" ref="followerGroups"
    :parentObject="groups" :displayName="'Follower Group'" :propertyName="'value'"
    :label="'Follower Groups'" :options="$awesum.ownerApp.groups.split(',')"
    :validationFunction="validateFollowerRequest" :validationPath="'\/groups'" />

  <div style="display: flex;flex-direction: row-reverse">
    <button :disabled="!followerName" style="margin:1svmin;" type="button" class="btn btn-primary" ref="submitButton" @click="addFollower()">Submit</button>
  </div>
</div>
  </div>
</div>
</template>
<style scoped>
:deep(#followerName) input {
  background-color: rgb(244, 244, 244);
}
</style>  
