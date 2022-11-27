<template>
  <Transition name="fade">
    <slot />
  </Transition>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  fadeEnterTime?: number | string;
  fadeLeaveTime?: number | string;
}

const props = defineProps<Props>();

const fadeEnterTime = computed(() => `${props.fadeEnterTime || 300}ms`);
const fadeLeaveTime = computed(() => `${props.fadeLeaveTime || 300}ms`);
</script>
<script lang="ts">
export default {
  name: "fadeTransition",
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity v-bind("fadeEnterTime") ease;
}
.fade-leave-active {
  transition: opacity v-bind("fadeLeaveTime") ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
