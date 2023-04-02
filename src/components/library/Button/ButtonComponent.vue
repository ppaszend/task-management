<template>
<component
  :is="tag"
  ref="element"
  @click="$emit('click')"
  :class="{
    button: true,
    fullWidth: fullWidth,
    [`button--${size}`]: true,
    [`button--${variant}`]: true,
    [`button--${color}`]: true,
    noHover: noHover === true,
    'button--fitContent': fitContent === true,
  }"
  :style="style"
>
  <slot />
</component>
</template>

<script lang="ts" setup>
import {defineEmits, defineExpose, defineProps, ref} from 'vue';

withDefaults(defineProps<{
  tag?: 'router-link' | 'button';
  size?: 'sm' | 'md' | 'xl';
  fullWidth?: boolean;
  noHover?: boolean;
  style?: Partial<CSSStyleDeclaration>;
  variant?: 'filled' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'danger' | 'none' | 'success';
  fitContent?: boolean;
}>(), {
  tag: 'button',
  size: 'md',
  variant: 'filled',
  color: 'primary',
});

defineEmits(['click']);

const element = ref(null);
defineExpose({el: element});
</script>
<script lang="ts">
export default {
  name: "ButtonComponent"
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 6px 16px;
  font-size: 1.125em;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  transition: background 200ms ease-in-out, border-color 200ms ease-in-out;

  &.button--fitContent {
    width: fit-content;
  }

  &.button--filled {
    &.button--primary {
      background: #039BE5;
      border-color: #039BE5;
      color: var(--color-paper);
    }

    &.button--success {
      background: #4CAF50;
      border-color: #4CAF50;
      color: var(--color-paper);
    }
  }

  &.button--outlined {
    transition: background 300ms ease-in-out;

    &.button--primary {
      background: var(--color-paper);
      border-color: #039BE5;
      color: #039BE5;

      &:not(.noHover):hover {
        background: lighten(#039BE5, 50);
      }
    }

    &.button--danger {
      background: var(--color-paper);
      border-color: #F44336;
      color: #F44336;

      &:not(.noHover):hover {
        background: lighten(#F44336, 38);
      }
    }

    &.button--success {
      background: var(--color-paper);
      border-color: #4CAF50;
      color: #4CAF50;

      &:not(.noHover):hover {
        background: lighten(#4CAF50, 40);
      }
    }
  }

  &.button--text {
    border-color: transparent;

    &:hover {
      background: var(--color-hover);
      border-color: var(--color-hover) transparent;
    }
  }

  &.fullWidth {
    width: 100%;
  }

  &.button--sm {
    padding: 4px 6px;
    font-size: 0.875rem;
    font-weight: 500;
    height: 24px;
  }
}
</style>