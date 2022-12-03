<template>
  <button
    class="button"
    :style="{ 'border-color': props.color, color: props.color }"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  color: string;
}

const props = defineProps<Props>();
</script>
<script lang="ts">
export default {
  name: "SmallButton",
};
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  color: #ffffff;
  border: 1px solid transparentize(#ffffff, 0.09);
  border-radius: 2px;
  padding: 2px 6px;
  cursor: pointer;
}
</style>
