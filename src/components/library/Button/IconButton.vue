<template>
  <button
    :class="{
      iconButton: true,
      [`iconButton-${size}`]: true
    }"
    @click="$emit('click')"
  >
    <MaterialDesignIcon v-bind="$props" />
  </button>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps} from 'vue';
import MaterialDesignIcon from "../Utils/MaterialDesignIcon.vue";

defineProps<{
  size: 'sm' | 'md' | 'xl';
  icon: string;
  badge?: string;
  badgeColor?: string;
}>()

defineEmits(['click']);
</script>
<script lang="ts">
export default {
  name: "IconButton"
}
</script>

<style lang="scss" scoped>
.iconButton {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.iconButton-sm {
  width: 16px;
  height: 16px;
}

.iconButton-md {
  width: 20px;
  height: 20px;
}

.iconButton-xl {
  width: 24px;
  height: 24px;
}
</style>