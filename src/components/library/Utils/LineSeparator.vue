<template>
<div
  :class="{
    lineSeparator: true,
    'lineSeparator--vertical': vertical === true,
  }"
  :style="{
    height: vertical ? `${length || 44}px` : undefined,
  }"
></div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

withDefaults(defineProps<{
  vertical?: boolean,
  length?: string,
  color?: string,
}>(), {
  color: '#D9D9D9',
});
</script>
<script lang="ts">
export default {
  name: "LineSeparator"
}
</script>

<style lang="scss" scoped>
.lineSeparator {
  height: 1px;
  width: 100%;
  background: v-bind('color');
  flex-shrink: 0;

  &.lineSeparator--vertical {
    height: 100%;
    width: 1px;
  }
}
</style>