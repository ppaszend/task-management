<template>
  <div class="taskVerticalProperties" @focusin="state = true" @focusout="focusoutHandler" tabindex="0">
    <div class="taskVerticalProperties__name" v-if="label">{{ label }}</div>
    <div class="taskVerticalProperties__value">
      <div v-if="selectedOption?.indicator" class="taskVerticalProperties__beforeValue">
        <DotIndicator :color="selectedOption.indicator.color" />
      </div>
      {{ selectedOption?.label || 'None' }}
      <IconButton size="sm" icon="expand_more" />

      <FadeTransition>
        <div
          class="taskVerticalProperties__options"
          v-show="state"
          :style="{
          top: topPosition,
          left: '-7px',
        }"
        >
          <Box :style="{ padding: '4px 0' }">
            <ButtonComponent
              variant="text"
              v-for="(option, index) of options"
              size="sm"
              @click="optionClickHandler(option.value)"
              :ref="(el) => { optionRefs[index] = el }"
              full-width
              :style="{ justifyContent: 'flex-start' }"
            >
              <div v-if="option.indicator" class="taskVerticalProperties__beforeValue">
                <DotIndicator :color="option.indicator.color" />
              </div>
              {{ option.label }}
            </ButtonComponent>
          </Box>
        </div>
      </FadeTransition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineEmits, defineProps, ref} from 'vue';
import IconButton from "../Button/IconButton.vue";
import Box from "../Box.vue";
import ButtonComponent from "../Button/ButtonComponent.vue";
import DotIndicator from "../DotIndicator.vue";
import FadeTransition from "../../transitions/FadeTransition.vue";

const props = defineProps<{
  name: string,
  label?: string,
  modelValue: string,
  options: {
    label: string,
    value: string,
    indicator?: {
      color: string
    }
  }[]
}>();

const optionRefs = ref({});

const emit = defineEmits(['update:modelValue'])

const state = ref(false);

const selectedOption = computed(() => props.options.find((option) => option.value === props.modelValue));

const topPosition = computed(() => {
  let top = -9;
  const buttonHeight = 24;
  const indexOfSelectedOption = props.options.indexOf(selectedOption.value)
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
  name: "TaskVerticalProperties"
}
</script>

<style lang="scss" scoped>
.taskVerticalProperties {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;

  .taskVerticalProperties__name {
    font-size: 0.75em;
  }

  .taskVerticalProperties__value {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 0.875em;
    font-weight: 500;
    white-space: nowrap;
    cursor: pointer;

    .taskVerticalProperties__beforeValue {
      margin-right: 4px;
    }
  }

  .taskVerticalProperties__options {
    position: absolute;
    z-index: 50;
  }
}
</style>