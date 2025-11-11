<script lang="ts">
import { ref, toRaw, nextTick, reactive } from 'vue';
import { I18nGlobal } from '@/i18nGlobal';
import { resources } from '@/resources/Resources';
import { awesum } from '@/awesum';
import { v7 as uuid } from "uuid";
import { validatePushAppRequest } from '../../../server/javascriptClientValidations/pushAppRequest';
import { types } from '../../../server/typebox';
import { audioType, imageType } from "../../../server/typebox";
import { Value } from '@sinclair/typebox/value'
import type { ServerAppInterface } from '../../../server/serverInterfaces/ServerAppInterface';
import { constants } from '../../../server/constants';
import { AwesumDexieDB } from '@/awesumDexieDB';
import EditTextComponent from '@/components/EditTextComponent.vue';
import { validateApp } from '../../../server/javascriptClientValidations/app';
import type { ServerSyncRequestInterface } from '../../../server/serverInterfaces/ServerSyncRequestInterface';
import { validateSyncRequest } from '../../../server/javascriptClientValidations/syncRequest';
import type { ServerSyncResponseInterface } from '../../../server/serverInterfaces/ServerSyncResponseInterface';
export default {
  setup() {

    let payload = Value.Default(types.filter((x) => x.$id == "app")[0], {}) as ServerAppInterface;
    payload.name = "";

    return {
      payload,
      validateApp
    };
  },
  async beforeCreate() {
    if (awesum.ownerApp) {
      this.payload.name = awesum.ownerApp.name;
      this.payload.uniqueName = awesum.ownerApp.uniqueName;
    }
    else{
      awesum.errorMessage = "No app found for this email - You may need to reset your client data";
      awesum.router.push({ name: I18nGlobal.t(resources.Error.key) });
    }
  },
  methods: {
    async onSubmit() {

      await awesum.waitForDexie();

      this.payload.email = awesum.serverEmail;
      this.payload.groups = 'Everyone';
      this.payload.authenticationType = awesum.authenticationType;

      var validationResults = await validateApp(this.payload);
      if (validationResults.length > 0) {
        await (this.$refs.name as any).validate();
        await (this.$refs.uniqueName as any).validate();
        return;
      }
      
      var jsonPayload = [{ app: this.payload }] as ServerSyncRequestInterface[];
      //parse the payload and catch all the ZODErrors
      var errors = await validateSyncRequest(jsonPayload[0]);
      if (errors.length > 0) {
        return;
      }

      
      var response = await fetch(window.location.origin + "/api/sync", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonPayload),
        credentials: "include",
      });

      if (response.ok) {
        var appResponse = await response.json() as ServerSyncResponseInterface[];

        await awesum.putOwnerAppInsideDatabase(jsonPayload[0].app as ServerAppInterface);

        awesum.router.push({ name: I18nGlobal.t(resources.Home.key) });
      }
      else {
        awesum.errorMessage = await response.text();
        awesum.router.push({
          name: I18nGlobal.t(resources.Error.key)
        });
      }
    }
  },
};

</script>

<template>
  <div id="pageview">
    <h1>Choose a Name</h1>
    <div class=content>

      <form @submit.prevent="onSubmit()" class="nameViewForm" id="form">

        <EditTextComponent ref="name" :parentObject="payload" :displayName="'Name'" :placeholder="'Display Name'"
          :propertyName="'name'" :validationFunction="validateApp" :validationPath="'\/name'" :inputWidth="'60svmin'"
          style="margin-top:3svmin" />


        <EditTextComponent ref="uniqueName" :parentObject="payload" :displayName="'Unique Name'"
          :placeholder="'Unique Name'" :propertyName="'uniqueName'" :validationFunction="validateApp"
          :validationPath="'\/uniqueName'" :inputWidth="'60svmin'" style="margin-top:3svmin" />


        <button style="margin-top:3svmin;float:right;margin-right:0svmin;margin-bottom:1svmin;" class="btn btn-primary"
          id="submitButton" type="submit">Lets Go!</button>
      </form>

    </div>
  </div>
</template>