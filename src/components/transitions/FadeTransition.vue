<template>
  <Transition @enter="$emit('enter')" @leave="$emit('leave')" @after-leave="$emit('afterLeave')">
    <slot />
  </Transition>
</template>

<script lang="ts" setup>
import {defineEmits} from 'vue';

const { duration } = withDefaults(defineProps<{
  duration?: string;
}>(), {
  duration: '300ms',
});

defineEmits(['enter', 'leave', 'afterLeave']);
</script>
<script lang="ts">
export default {
  name: "FadeTransition"
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity v-bind(duration) ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>