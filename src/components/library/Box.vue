<template>
  <div
    :class="{
      box: true,
      disableHorizontalPadding: disableHorizontalPadding
    }"
    :style="style"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';

withDefaults(defineProps<{
  disableHorizontalPadding?: boolean,
  style?: Partial<CSSStyleDeclaration>
}>(), {
  disableHorizontalPadding: false,
});
</script>
<script lang="ts">
export default {
  name: "Box"
}
</script>

<style lang="scss" scoped>
.box {
  background: var(--color-paper);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  width: 100%;

  &.disableHorizontalPadding {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>