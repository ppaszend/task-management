<template>
<div class="boardColumnLayout">
  <div class="boardColumnLayout__name">
    {{ name }}
    <MaterialDesignIcon icon="chevron_right" />
  </div>

  <div class="boardColumnLayout__content">
    <slot />
  </div>
</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import MaterialDesignIcon from "../Utils/MaterialDesignIcon.vue";

defineProps<{
  name: string;
}>();
</script>
<script lang="ts">
export default {
  name: "BoardColumnLayout"
}
</script>

<style lang="scss" scoped>
.boardColumnLayout {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 280px;
  flex-shrink: 0;

  .boardColumnLayout__name {
    display: flex;
    gap: 2px;
    align-items: center;
    font-weight: 500;
    padding: 0 10px;
  }

  .boardColumnLayout__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>