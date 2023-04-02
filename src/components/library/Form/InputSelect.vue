<template>
  <div class="inputSelect" @focusin="state = true" @focusout="focusoutHandler" tabindex="0">
    <div class="inputSelect__value">
      <div v-if="selectedValue?.indicator" class="inputSelect__beforeValue">
        <DotIndicator :color="selectedValue.indicator.color" />
      </div>
      {{ selectedValue?.name || 'None' }}
      <IconButton size="sm" icon="expand_more" />

      <FadeTransition>
        <div
          class="inputSelect__options"
          v-show="state"
          :style="{
            top: topPosition,
            left: '-8px',
          }"
        >
          <Box :style="{ padding: '4px 0' }">
            <ButtonComponent
              size="sm"
              variant="text"
              v-for="(option, index) of options"
              @click="optionClickHandler(option.value)"
              :ref="(el) => { optionRefs[index] = el }"
              full-width
              :style="{ justifyContent: 'flex-start' }"
            >
              <div v-if="option.indicator" class="inputSelect__beforeValue">
                <DotIndicator :color="option.indicator.color" />
              </div>
              {{ option.name }}
            </ButtonComponent>
          </Box>
        </div>
      </FadeTransition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineProps, ref} from 'vue';

import DotIndicator from "../DotIndicator.vue";
import IconButton from "../Button/IconButton.vue";
import ButtonComponent from "../Button/ButtonComponent.vue";
import Box from "../Box.vue";
import FadeTransition from "../../../transitions/FadeTransition.vue";

const props = withDefaults(defineProps<{
  modelValue: string;
  options: {
    name: string;
    value: string;
    indicator?: {
      color: string;
    }
  }[];
}>(), {
  options: () => []
});
const emit = defineEmits(['update:modelValue']);

const optionRefs = ref({});

const state = ref(false);

const selectedValue = computed(() => props.options.find(({value}) => props.modelValue === value));

const topPosition = computed(() => {
  let top = -8;
  const buttonHeight = 24;
  const indexOfSelectedOption = props.options.indexOf(selectedValue.value)
  top -= buttonHeight * (indexOfSelectedOption);

  return `${top}px`;
});

const focusoutHandler = (event) => {
  if (!Object.values(optionRefs.value).map(optionRef => optionRef.el).includes(event.relatedTarget)) {
    state.value = false
  }
};

const optionClickHandler = (value: string) => {
  emit('update:modelValue', value);
  state.value = false;
}
</script>
<script lang="ts">
export default {
  name: "InputSelect"
}
</script>

<style lang="scss" scoped>
.inputSelect {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .inputSelect__name {
    font-size: 0.75em;
  }

  .inputSelect__value {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 0.875em;
    font-weight: 500;
    white-space: nowrap;
    cursor: pointer;

    .inputSelect__beforeValue {
      margin-right: 4px;
    }
  }

  .inputSelect__options {
    position: absolute;
    z-index: 50;
  }
}
</style>