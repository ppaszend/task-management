<template>
  <button
    class="tap-bar"
    :class="{ active }"
    @focus="active = true"
    @blur="active = false"
    tabindex="0"
  >
    <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
    <fade-transition>
      <div class="tap-bar-tooltip" v-show="active">
        <button
          class="option"
          v-for="(button, index) in props.buttons"
          :key="index"
          @click="button.onClick"
        >
          {{ button.label }}
        </button>
      </div>
    </fade-transition>
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import FadeTransition from "@/transitions/fadeTransition.vue";

interface Props {
  buttons: {
    label: string;
    onClick: Function;
  }[];
}

const active = ref<boolean>(false);
const props = defineProps<Props>();
</script>
<script lang="ts">
export default {
  name: "TapBar",
};
</script>

<style lang="scss" scoped>
.tap-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  color: #ffffff;
  cursor: pointer;
  padding: 0;
  font-size: 1.125em;
  position: relative;
  background: transparent;
  border-radius: 50%;
  transition: background 250ms ease-in-out;
  flex-shrink: 0;

  &.active {
    background: rgba(255, 255, 255, 0.05);
  }

  .tap-bar-tooltip {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(100% + 2px);
    right: 2px;
    border-radius: 2px;
    overflow: hidden;
    z-index: 100;

    .option {
      display: flex;
      padding: 12px 24px;
      background: lighten(#323741, 3);
      color: #ffffff;
      cursor: pointer;
      font-size: 0.95em;

      &:hover {
        background: lighten(#323741, 5);
      }
    }
  }
}
</style>
