<script lang="ts">
import type { ValidationError } from '../../../server/validationError';
import { computed, getCurrentInstance, ref, nextTick,reactive } from 'vue';
import { resources } from '@/resources/Resources';
import { useRouter } from 'vue-router';
import { I18nGlobal } from '@/i18nGlobal';
import { awesum } from '@/awesum';
import type { ErrorObject } from 'ajv'
export default {
  props: {
    validationFunction: Function,
    validationPath: String,
    requiresEditAndSave: {
      type: Boolean,
      default: false
    },
    displayName: String,
    redirectUrlAfterSave: String,
    parentObject: Object,
    propertyName: String,
    maxLength: Number,
    forbiddenChars: String,
    required: Boolean,
    name: String,
    vuelidate: Object,
    inputWidth: String,
    placeholder: String,
    underText: String,
    changeFunction: Function,
    multiline: Boolean,
    labelWidth: String
  },

  setup(props) {
    var currentInstance = getCurrentInstance();
    let propertyValue = ref(props.parentObject![props.propertyName!]);
    let maxLength = ref(undefined);
    let editing = ref(false);
    let errors = reactive<ErrorObject[]>([]);

    const router = useRouter();

    return {
      propertyValue,
      editing,
      maxLength,
      errors
    };
  },
  async beforeCreate() {
  },
  async mounted() {
  },
  watch: {
    propertyValue(newValue, oldValue) {
      if (!this.$props.requiresEditAndSave) {
        this.$props.parentObject![this.$props.propertyName!] = this.propertyValue;
      }
    },
  },
  methods: {
    editButtonClicked() {
      this.editing = true;
    },
    cancelButtonClicked() {
      this.editing = false;
      this.propertyValue = this.$props.parentObject![this.$props.propertyName!];
    },
    async validate() {
      if(!this.$props.validationFunction) {
        return;
      }
      var errors = await this.$props.validationFunction!(this.$props.parentObject);
      this.errors = errors.filter((x: ValidationError) => x.instancePath == this.$props.validationPath || 
      x.params.missingProperty == this.$props.propertyName);
      this.$forceUpdate();
    },

    async saveButtonClicked() {
      
      await this.validate();
      if (this.errors.length == 0) {

        this.editing = false;
        var oldName = this.$props.parentObject![this.$props.propertyName!];
        this.$props.parentObject![this.$props.propertyName!] = this.propertyValue;

        await awesum.waitForDexie();

        if (this.$props.redirectUrlAfterSave) {
          //change all values in the oldNameRedirects map to the new value
          awesum.oldNameRedirects.forEach((value, key) => {
            if (value == oldName) {
              awesum.oldNameRedirects.set(key, this.propertyValue);
            }
          });

          awesum.oldNameRedirects.set(oldName, this.propertyValue);
          this.$router.replace({
            path: this.$props.redirectUrlAfterSave + '/' + encodeURI(this.propertyValue)
          });
        }
      }
    }
  },
};

</script>

<template>
  <div class="view">

    <div class="formRow">

      <div >
        <div :style="'width:' + $props.inputWidth + ';'">
          <div class="input-group" style="border:.1svmin solid #bfbfbf;border-radius:.7svmin;">
            <label :style="{ width: labelWidth }" for="gettingStartedNameInput" class="input-group-text">{{
              $props.displayName }}</label>

            <component :is="$props.multiline ? 'textarea' : 'input'" spellcheck="false" v-on:input="changeFunction" 
              ref="input" :maxlength="$props.maxLength" :name="$props.name" :value="propertyValue"
              @input="(e: Event) => propertyValue = (e.target as HTMLInputElement).value" :readonly="requiresEditAndSave && !editing" type="text"
              class="form-control" :placeholder="$props.placeholder" :aria-label="$props.displayName"
              :class="errors.length > 0 ? 'is-invalid' : ''" />

            <button class="btn btn-outline-secondary" style="margin:0svmin" type="button" @click="editButtonClicked"
              v-if="requiresEditAndSave && !editing">Edit</button>
            <button class="btn btn-outline-secondary" style="margin:0svmin" type="button" @click="cancelButtonClicked"
              v-if="requiresEditAndSave && editing">Cancel</button>
            <button class="btn btn-outline-secondary" style="margin:0svmin" type="button" @click="saveButtonClicked"
              v-if="requiresEditAndSave && editing">Save</button>


          </div>
          <div v-for="err in errors" class="invalid-feedback">
            {{ err.message }}
          </div>
        </div>
      </div>
      <div v-if="$props.underText" class="form-text" id="basic-addon4">{{ $props.underText }}</div>

    </div>

  </div>
</template>

<style scoped lang="scss">
.invalid-feedback {
  display: block;
}
</style>