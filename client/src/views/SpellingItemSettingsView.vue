<script lang="ts">
import { ref } from 'vue';
import { type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router';
import { v4 as uuid } from 'uuid';
import type { ServerDatabaseItemInterface } from "../../../server/serverInterfaces/ServerDatabaseItemInterface";
import { audioType, imageType } from "../../../server/typebox";
import type { ServerMediaInterface } from '../../../server/serverInterfaces/ServerMediaInterface';
import EditImageComponent from '@/components/EditImageComponent.vue';
import type { ServerSpellingDatabaseItemInterface } from "../../../server/serverInterfaces/ServerSpellingDatabaseItemInterface";

import {onBeforeRouteLeave} from 'vue-router';


export default {
  setup() {
    
    let showModal = ref(false);
    let currentItem = ref({} as ServerDatabaseItemInterface);
    let editImageComponent: typeof EditImageComponent = ref({}) as any;
    let editSuccessImageComponent: typeof EditImageComponent = ref({}) as any;
    let editAudioComponent = ref({}) as any;
    let editSuccessSoundComponent = ref({}) as any;



    return {
      showModal,
      currentItem,
      editImageComponent,
      editAudioComponent,
      editSuccessSoundComponent,
      editSuccessImageComponent
    }
  },
  beforeCreate() {
    onBeforeRouteLeave(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      if ((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text == '') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text = 'word';
    }

    var currentImageData = '';
    if((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.image){
      var imageMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.image);
      if(imageMedia){
        currentImageData = imageMedia.data;
      }
    }

    if (this.editImageComponent.imageSource == 'From File') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.imageType = imageType.File
    }
    if (this.editImageComponent.imageSource == 'From Web Address') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.imageType = imageType.WebAddress
    }
    if (this.editImageComponent.imageSource == 'From Camera') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.imageType = imageType.Camera
    }

    if (currentImageData != this.editImageComponent.imageData) {

      if ((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.imageType != imageType.None) {
        var mediaId = uuid();

        await this.$awesum.AwesumDexieDB.serverMedia.add({
          id: mediaId,
          databaseId: this.$awesum.currentDatabase.id,
          lastModified: new Date().getTime(),
          version: 0,
          appId: this.$awesum.currentApp.id,
          created: new Date().getTime(),
          data: this.editImageComponent.imageData,
          size: this.editImageComponent.imageData?.length,
          touched: true
        } as ServerMediaInterface,mediaId);

        (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.image = mediaId;

      }
      else if ((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.image != this.editImageComponent.imageData) {
        (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.image = this.editImageComponent.imageData;
      }

      await this.$awesum.waitForDexie();

    }

    var currentSuccessImageData = '';
    if((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImage){
      var successImageMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImage);
      if(successImageMedia){
        currentSuccessImageData = successImageMedia.data;
      }
    }

    if (this.editSuccessImageComponent.imageSource == 'From File') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImageType = imageType.File
    }
    if (this.editSuccessImageComponent.imageSource == 'From Web Address') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImageType = imageType.WebAddress
    }
    if (this.editSuccessImageComponent.imageSource == 'From Camera') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImageType = imageType.Camera
    }
    if (this.editSuccessImageComponent.imageSource == 'None') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImageType = imageType.None;
    }

    if (currentSuccessImageData && currentSuccessImageData != this.editSuccessImageComponent.imageData) {

      if ((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImageType != imageType.None) {
        var mediaId = uuid();

        await this.$awesum.AwesumDexieDB.serverMedia.add({
          id: mediaId,
          databaseId: this.$awesum.currentDatabase.id,
          lastModified: new Date().getTime(),
          version: 0,
          appId: this.$awesum.currentApp.id,
          created: new Date().getTime(),
          data: this.editSuccessImageComponent.imageData,
          size: this.editSuccessImageComponent.imageData?.length,
          touched: true
        } as ServerMediaInterface,mediaId);

        (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImage = mediaId;

      }
      else if ((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImage != this.editSuccessImageComponent.imageData) {
        (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImage = this.editSuccessImageComponent.imageData;
      }

      await this.$awesum.waitForDexie();

    }

    var currentAudioData = '';
    if((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.sound){
      var audioMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.sound);
      if(audioMedia){
        currentAudioData = audioMedia.data;
      }
    }


    if (this.editAudioComponent.soundSource == 'From File') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.audioType = audioType.File
    }
    if (this.editAudioComponent.soundSource == 'From Web Address') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.audioType = audioType.WebAddress
    }
    if (this.editAudioComponent.soundSource == 'From Microphone') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.audioType = audioType.Microphone
    }
    if (this.editAudioComponent.soundSource == 'From Text To Speech') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.audioType = audioType.TTS
    }

    if (
      currentAudioData != this.editAudioComponent.soundData) {

      if ((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.audioType != audioType.WebAddress
        && (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.audioType != audioType.TTS) {

        var mediaId = uuid();

        await this.$awesum.AwesumDexieDB.serverMedia.add({
          id: mediaId,
          databaseId: this.$awesum.currentDatabase.id,
          lastModified: new Date().getTime(),
          version: 0,
          appId: this.$awesum.currentApp.id,
          created: new Date().getTime(),
          data: this.editAudioComponent.soundData,
          size: this.editAudioComponent.soundData.length,
          touched: true
        } as ServerMediaInterface,mediaId);

        (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.sound = mediaId;
      }
      else if ((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.sound != this.editAudioComponent.soundData) {
        (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.sound = this.editAudioComponent.soundData;
      }

      await this.$awesum.waitForDexie();
    }



    if (this.editSuccessSoundComponent.soundSource == 'From File') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSoundType = audioType.File
    }
    if (this.editSuccessSoundComponent.soundSource == 'From Web Address') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSoundType = audioType.WebAddress
    }
    if (this.editSuccessSoundComponent.soundSource == 'From Microphone') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSoundType = audioType.Microphone
    }
    if (this.editSuccessSoundComponent.soundSource == 'From Text To Speech') {
      (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSoundType = audioType.TTS
    }

    var currentSuccessSoundData = '';
    if((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSound){
      var successSoundMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSound);
      if(successSoundMedia){
        currentSuccessSoundData = successSoundMedia.data;
      }
    }

    if (
      currentSuccessSoundData != this.editSuccessSoundComponent.soundData) {

      if ((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSoundType != audioType.WebAddress
        && (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSoundType != audioType.TTS) {

        var mediaId = uuid();

        await this.$awesum.AwesumDexieDB.serverMedia.add({
          id: mediaId,
          databaseId: this.$awesum.currentDatabase.id,
          lastModified: new Date().getTime(),
          version: 0,
          appId: this.$awesum.currentApp.id,
          created: new Date().getTime(),
          data: this.editSuccessSoundComponent.soundData,
          size: this.editSuccessSoundComponent.soundData.length,
          touched: true
        } as ServerMediaInterface,mediaId);

        (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSound = mediaId;
      }
      else if ((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSound != this.editSuccessSoundComponent.soundData) {
        (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSound = this.editSuccessSoundComponent.soundData;
      }



      await this.$awesum.waitForDexie();

    }

    await this.$awesum.cleanMedia();

    next();
    })
  },
  mounted() {
    this.editImageComponent = this.$refs.editImageComponent as typeof EditImageComponent;
    this.editSuccessImageComponent = this.$refs.editSuccessImageComponent as typeof EditImageComponent;
    this.editAudioComponent = this.$refs.editAudioComponent;
    this.editSuccessSoundComponent = this.$refs.editSuccessSoundComponent;
    
  },

  methods: {

  }
}
</script>

<template>
  <div class="pageView" style="padding-bottom:3svmin;">
    <h1>{{ $t($resources.Spelling_Item_Settings.key) }}</h1>
    <div class="content">
      <h2>{{ $t($resources.Word.key) }}</h2>

      <EditTextComponent style="margin-bottom:1svmin;margin-left:1svmin;" :maxLength="12" :labelWidth="'17svmin'" :inputWidth="'94svmin'"
        :parentObject="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data" :displayName="'Item Text'" :propertyName="'text'" />
      <EditTextComponent style="margin-bottom:1svmin;margin-left:1svmin;" :labelWidth="'17svmin'" :inputWidth="'94svmin'" :parentObject="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data"
        :displayName="'Visual Hint'" :propertyName="'visualHint'" :multiline="true" />
      <EditTextComponent style="margin-bottom:1svmin;margin-left:1svmin;" :labelWidth="'17svmin'" :inputWidth="'94svmin'" :parentObject="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data"
        :displayName="'Letters'" :propertyName="'letters'" :multiline="true" />

      <h2>{{ $t($resources.Image.key) }}</h2>
      <EditImageComponent style="margin-bottom:1svmin;margin-left:1svmin;" ref="editImageComponent" :imageType="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.imageType"
        :image="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.image" />

      <h2>{{ $t($resources.Audio.key) }}</h2>
      <EditAudioComponent style="margin-bottom:1svmin;margin-left:1svmin;" ref="editAudioComponent" :audioType="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.audioType"
        :audio="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.sound" />

      <h2>{{ $t($resources.Success_Sound.key) }}</h2>
      <EditAudioComponent style="margin-bottom:1svmin;margin-left:1svmin;" ref="editSuccessSoundComponent" :audioType="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSoundType"
        :audio="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSound" :allowNone="true" />

      <h2>{{ $t($resources.Success_Image.key) }}</h2>
      <EditImageComponent style="margin-bottom:1svmin;margin-left:1svmin;" ref="editSuccessImageComponent" :imageType="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImageType"
        :image="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImage" :allowNone="true" />

      <h2>{{ $t($resources.Success_Animation_Duration.key) }}</h2>
      <EditTextComponent style="margin-bottom:1svmin;margin-left:1svmin;" :labelWidth="'35svmin'" :inputWidth="'94svmin'" :parentObject="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data"
        :displayName="'Success Animation Duration'" :propertyName="'successImageTime'" />

      <h2>{{ $t($resources.Success_Animations.key) }}</h2>
      <EditMultiselectComponent style="margin-bottom:1svmin;margin-left:1svmin;" :inputWidth="'69svmin'" :labelWidth="'25svmin'" :multiple="true"
        :underText="'Choose animations to play when the user gets the word correct.'"
        :parentObject="($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data" :displayName="'Success Animations'"
        :propertyName="'successAnimations'" :label="'Success Animations'"
        :options="['Fireworks', 'Balloons', 'Confetti']" />

    </div>
  </div>
</template>
