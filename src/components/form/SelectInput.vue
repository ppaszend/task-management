<template>
  <div
    class="select-input"
    :class="{ active }"
    @focus="show"
    @blur="hide"
    ref="input"
    tabindex="1"
  >
    <span class="select-value">{{ getSelectedOptionName() }}</span>
    <font-awesome-icon icon="fa-solid fa-chevron-down" />
    <div class="options" v-show="active">
      <div
        class="option"
        v-for="(option, index) in props.options"
        :key="index"
        @click="() => handleChange(option)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Option {
  name: string;
  value: string | number | null | undefined;
}

interface Props {
  options: Option[];
  value?: Option["value"];
}

interface Emits {
  (e: "change", value: Option["value"]): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
const input = ref<HTMLElement | null>(null);

const value = ref<Option["value"]>(props.value);
const active = ref(false);

const show = () => (active.value = true);
const hide = () => (active.value = false);

const handleChange = (option: Option) => {
  if (input.value) {
    input.value.blur();
  }
  value.value = option.value;
  emit("change", option.value);
};

const getSelectedOptionName = () => {
  const selectedOption = props.options.find(
    (option) => option.value === value.value
  );
  if (selectedOption) {
    return selectedOption.name;
  }
  return "Undefined";
};
</script>
<script lang="ts">
export default {
  name: "SelectInput",
};
</script>

<style lang="scss" scoped>
.select-input {
  font-size: 1em;
  display: flex;
  gap: 4px;
  position: relative;
  cursor: pointer;
  border-radius: 4px 4px 0 0;

  &.active {
    background: lighten(#323741, 2);
  }

  .select-value {
    font-size: 1em;
    text-wrap: none;
    font-weight: 500;
  }

  .options {
    position: absolute;
    top: 100%;
    right: 0;
    background: lighten(#323741, 2);
    min-width: 100%;
    border-radius: 0 0 4px 4px;
    z-index: 1000;

    .option {
      display: flex;
      padding: 6px 10px;
      transition: background 300ms ease-in-out;
      white-space: nowrap;

      &:hover {
        background: transparentize(#ffffff, 0.9);
      }
    }
  }
}

.select-input-content {
  cursor: pointer;
}
</style>
