<template>
<div class="dotIndicator" :style="{ background: color }"></div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';

defineProps<{
  color: string;
}>();
</script>
<script lang="ts">
export default {
  name: "DotIndicator"
}
</script>

<style lang="scss" scoped>
.dotIndicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>