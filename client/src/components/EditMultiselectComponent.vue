<script lang="ts">
import Multiselect from 'vue-multiselect'
import { reactive } from 'vue';
import type { ValidationError } from '../../../server/validationError';

import { computed, getCurrentInstance, ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import type { ErrorObject } from 'ajv'


export default {
  props: {
    validationFunction: Function,
    validationPath: String,
    displayName: String,
    parentObject: Object,
    propertyName: String,
    required: Boolean,
    name: String,
    vuelidate: Object,
    inputWidth: String,
    inputHeight: String,
    placeholder: String,
    underText: String,
    options: Array,
    multiple: Boolean,
    searchable: {
      type: Boolean,
      default: true
    },
    label: String,
    labelWidth: String
  },
  components: {
    Multiselect

  },

  setup(props) {
    let errors = reactive<ErrorObject[]>([]);

    let propertyValue = ref(props.parentObject![props.propertyName as any]);
    
    if (propertyValue.value == '') {
      propertyValue.value = [];
    }
    else {
      propertyValue.value = propertyValue.value.split(',');
    }

    let options = ref(props.options!.filter((option: any) => {
      return option && option != ''
    }));

    return {
      propertyValue,
      options,
      errors
    };
  },
  async beforeCreate() {
  },
  async mounted() {
  },
  watch: {
    propertyValue(newValue, oldValue) {
      this.$props.parentObject![this.$props.propertyName as any] =  this.propertyValue.length > 0 ? this.propertyValue.join(',') : '';
    },
  },
  methods: {
    async validate() {
      var errors = await this.$props.validationFunction!(this.$props.parentObject);
      
      // Filter errors that are relevant to this component
      this.errors = errors.filter((x: ValidationError) => {
        // Direct path match (e.g., /name validation error)
        if (x.instancePath === this.$props.validationPath) {
          return true;
        }
        
        // Required field error where the parent object is invalid but the specific property is missing
        if (x.keyword === 'required' && x.params?.missingProperty === this.$props.propertyName) {
          return true;
        }
        
        // Check if the error is on the parent object but affects this property
        if (x.instancePath === '' && x.params?.missingProperty === this.$props.propertyName) {
          return true;
        }
        
        return false;
      });
      
      this.$forceUpdate();
    },
  },
};

</script>

<template>
  <div class="view">

    <div class="formRow">

          <div class="input-group" style="height:5.2svmin;">
            <label style="height:5.5svmin;" :style="{ width: $props.labelWidth }" for="gettingStartedNameInput"
              class="input-group-text">{{ $props.label }}</label>

            <div :style="{ width: $props.inputWidth, height: $props.inputHeight }">
              <multiselect v-model="propertyValue" :options="options" :multiple="$props.multiple"
                :searchable="$props.searchable" :close-on-select="false" :show-labels="false"
                placeholder="Pick a value">
              </multiselect>

            </div>
          </div>
        </div>

        <div v-for="err in errors" class="invalid-feedback">
            {{ err.message }}
          </div>
        <div v-if="$props.underText" class="form-text" id="basic-addon4">{{ $props.underText }}</div>


  </div>
</template>

<style scoped lang="scss">
.invalid-feedback {
  display: block;
}
</style>