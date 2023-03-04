<template>
  <div class="text-input-wrapper">
    <label>{{ props.label }}</label>
    <input
      class="text-input"
      :type="props.type"
      v-model="value"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  label: string;
  type: string;
  modelValue: string;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const value = ref<string>(props.modelValue);

const handleInput = () => {
  emit("update:modelValue", value.value);
};
</script>
<script lang="ts">
export default {
  name: "TextInput",
};
</script>

<style lang="scss" scoped>
.text-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #ffffff;

  .text-input {
    height: 32px;
    border: 0;
    padding: 0 10px;
    outline: none;
    border-radius: 2px;
  }
}
</style>
