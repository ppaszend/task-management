<template>
  <label :style="style">
    <slot />
    <input v-show="false" type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)">
    <div
      :class="{
        inputSwitch: true,
        'inputSwitch--active': modelValue
      }"
    >
      <div class="inputSwitch__valueIndicator"></div>
    </div>
  </label>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps, withDefaults} from 'vue';

withDefaults(defineProps<{
  modelValue?: boolean;
  style?: Partial<CSSStyleDeclaration>;
}>(), {
  modelValue: false,
});

defineEmits(['update:modelValue']);
</script>
<script lang="ts">
export default {
  name: "InputSwitch"
}
</script>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.125em;
  cursor: pointer;
}

.inputSwitch {
  position: relative;
  display: flex;
  align-items: center;
  background: #D9D9D9;
  width: 46px;
  height: 22px;
  border-radius: 11px;
  padding: 0 3px;
  transition: background 150ms ease-in-out;

  .inputSwitch__valueIndicator {
    position: absolute;
    left: 3px;
    display: flex;
    background: var(--color-paper);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: left 150ms ease-in-out;
  }

  &.inputSwitch--active {
    background: #4CAF50;

    .inputSwitch__valueIndicator {
      left: calc(100% - 19px);
    }
  }
}
</style>