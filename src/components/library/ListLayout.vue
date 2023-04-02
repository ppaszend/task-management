<template>
  <div
    :class="{
      listLayout: true,
      horizontal: direction === 'horizontal'
    }"
    :style="style"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {computed, defineProps} from 'vue';

const props = defineProps<{
  direction?: 'horizontal' | 'vertical';
  gap?: string | number;
  style?: Partial<CSSStyleDeclaration>;
}>();

const gapPixels = computed(() => `${props.gap || '30'}px`);
</script>
<script lang="ts">
export default {
  name: "ListLayout"
}
</script>

<style lang="scss" scoped>
.listLayout {
  display: flex;
  flex-direction: column;
  gap: v-bind(gapPixels);

  &.horizontal {
    flex-direction: row;
    align-items: center;
  }
}
</style>