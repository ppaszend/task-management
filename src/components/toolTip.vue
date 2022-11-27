<template>
  <div class="tool-tip-wrapper">
    <div @mouseenter="hovered = true" @mouseleave="hovered = false">
      <slot />
    </div>

    <fade-transition fade-leave-time="600">
      <div v-show="hovered" class="tool-tip">{{ props.label }}</div>
    </fade-transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import FadeTransition from "@/transitions/fadeTransition.vue";

interface Props {
  label: String;
}

const props = defineProps<Props>();
const hovered = ref<Boolean>(false);
</script>
<script lang="ts">
export default {
  name: "toolTip",
};
</script>

<style lang="scss" scoped>
.tool-tip-wrapper {
  position: relative;
}

.tool-tip {
  background: transparentize(#000000, 0.08);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% + 6px);
  text-align: center;
  padding: 10px 12px;
  border-radius: 2px;
  white-space: nowrap;

  &:before {
    content: "";
    display: flex;
    background: transparentize(#000000, 0.08);
    width: 8px;
    height: 8px;
    position: absolute;
    left: 50%;
    top: -4px;
    transform: translateX(-50%) rotate(45deg);
  }
}
</style>
