<template>
<div ref="dropdownRef">
  <div class="dropdownMenu"
       @focusin="state = true"
       tabindex="0"
  >
    <div>
      <slot name="button" />
    </div>

    <FadeTransition v-if="arrow">
      <div class="dropdownMenu__arrow" v-show="state"></div>
    </FadeTransition>

    <FadeTransition @enter="manageDropdownMenuPosition" @afterLeave="mustBeStatic = false">
        <div
          :class="{
            dropdownMenu__content: true,
            'dropdownMenu__content--right': align === 'right',
            staticToRight: mustBeStatic,
          }"
          v-show="state"
          :style="{
            width,
            left: mustBeStatic ? `calc(50% - ${0 - rightStaticPosition}px)` : undefined
          }"
          ref="contentElement"
        >
          <Box :style="{paddingTop: '8px', paddingBottom: '8px'}" disable-horizontal-padding>
            <slot/>
          </Box>
        </div>
    </FadeTransition>
  </div>
</div>
</template>

<script lang="ts" setup>
import Box from "../Box.vue";
import {computed, defineEmits, defineProps, onMounted, onUnmounted, ref} from "vue";

import FadeTransition from "../../../transitions/FadeTransition.vue";
import useWindowWidth from "../../../composables/windowWidth";
import {useRouter} from "vue-router";

const props = withDefaults(defineProps<{
  width?: string;
  gap?: number;
  arrow?: boolean;
  align?: 'right' | 'center';
}>(), {
  align: 'center',
});

const emit = defineEmits(['close']);
const router = useRouter();

router.afterEach(() => {
  state.value = false;
  emit('close');
});

const windowWidth = useWindowWidth();

const dropdownRef = ref(null);
const contentElement = ref(null);

const close = (event) => {
  if (state.value && !dropdownRef.value.contains(event.target)) {
    state.value = false;
    emit('close');
  }
};

const state = ref(false);
const mustBeStatic = ref(false);
const rightStaticPosition = ref(null);

const arrowTopOffsetPixels = computed(() => `${props.gap || 0}px`);
const contentTopOffsetPixels = computed(() => `${(props.gap || 0) + 8}px`);
const rightPadding = 10;

onMounted(() => {
  document.addEventListener("click", close);
});

onUnmounted(() => {
  document.removeEventListener("click", close);
});

const manageDropdownMenuPosition = () => {
  const dropdownRightOffset = windowWidth.value - contentElement.value.getBoundingClientRect().right;
  mustBeStatic.value = dropdownRightOffset < rightPadding;
  if (mustBeStatic.value) {
    rightStaticPosition.value = dropdownRightOffset - rightPadding;
  }
};
</script>
<script lang="ts">

export default {
  name: "DropdownMenu"
}
</script>

<style lang="scss" scoped>
.dropdownMenu {
  position: relative;

  .dropdownMenu__arrow {
    position: absolute;
    left: 50%;
    display: flex;
    width: 16px;
    height: 16px;
    background: var(--color-paper);
    top: calc(100% + v-bind(arrowTopOffsetPixels));
    transform: translateX(-50%) rotate(45deg);
    z-index: 50;
    border-width: 1px 0 0 1px;
    border-color: #D9D9D9;
    border-style: solid;
  }

  .dropdownMenu__content {
    position: absolute;
    top: calc(100% + v-bind(contentTopOffsetPixels));
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;

    &.dropdownMenu__content--right {
      left: auto;
      right: 0;
      transform: none;
    }
  }
}
</style>