<template>
<div class="inputText">
  <input :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)">
</div>
</template>

<script lang="ts" setup>
import {defineProps, defineEmits} from 'vue';

const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits(['update:modelValue']);

</script>
<script lang="ts">
export default {
  name: "InputText"
}
</script>

<style lang="scss" scoped>
.inputText {
  input {
    height: 36px;
    width: 100%;
    background: #FAFAFA;
    border: 1px solid #FAFAFA;
    outline: none;
    padding: 0 16px;
    font-size: 1em;
  }
}
</style>