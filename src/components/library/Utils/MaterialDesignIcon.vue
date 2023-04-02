<template>
  <span
    :class="{
      'material-symbols-outlined': true,
      [`icon-${size || 'md'}`]: true
    }"
    @mousedown="$emit('mouseDown', $event)"
    @mouseup="$emit('mouseUp', $event)"
  >
    {{ icon }}
    <span
      v-if="badge"
      class="icon__badge"
      :style="{ background: badgeColor }"
    >
      {{ badge }}
    </span>
  </span>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps} from 'vue';

const props = withDefaults(defineProps<{
  icon: string;
  size?: 'sm' | 'md' | 'xl';
  badge?: string;
  badgeColor?: string;
}>(), {
  badgeColor: '#F44336',
});

const emit = defineEmits(['mouseDown', 'mouseUp']);
</script>
<script lang="ts">
export default {
  name: "MaterialDesignIcon"
}
</script>

<style lang="scss" scoped>
.material-symbols-outlined {
  font-size: v-bind('sizePixels');
  position: relative;

  &.icon-sm {
    font-size: 16px;
  }

  &.icon-md {
    font-size: 20px;
  }

  &.icon-xl {
    font-size: 24px;
  }

  .icon__badge {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -3px;
    top: -6px;
    width: 14px;
    height: 14px;
    font-size: 11px;
    color: var(--color-white);
    border-radius: 50%;
  }
}
</style>