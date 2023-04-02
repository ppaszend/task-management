<template>
<div class="inputRichText">
  <ListLayout
    :style="{ gap: '4px' }"
  >
    <ListLayout
      direction="horizontal"
      :style="{
      gap: '12px',
      padding: '4px 16px',
    }"
    >
      <ListLayout
        direction="horizontal"
        :style="{
        gap: '12px'
      }"
      >
        <IconButton size="md" icon="format_bold" />
        <IconButton size="md" icon="format_italic" />
        <IconButton size="md" icon="format_underlined" />
        <IconButton size="md" icon="format_color_text" />
      </ListLayout>

      <LineSeparator length="25" color="#ffffff" vertical />

      <ListLayout
        direction="horizontal"
        :style="{
        gap: '12px'
      }"
      >
        <IconButton size="md" icon="format_align_left" />
        <IconButton size="md" icon="format_align_center" />
        <IconButton size="md" icon="format_align_right" />
        <IconButton size="md" icon="format_align_justify" />
      </ListLayout>

      <LineSeparator length="25" color="#ffffff" vertical />

      <ListLayout
        direction="horizontal"
        :style="{
        gap: '12px'
      }"
      >
        <IconButton size="md" icon="format_list_bulleted" />
        <IconButton size="md" icon="checklist" />
        <IconButton size="md" icon="format_list_numbered" />
      </ListLayout>
    </ListLayout>

    <div
      class="inputRichText__content"
      contenteditable="true"
      @input="$emit('update:modelValue', $event.target.innerHTML)"
      v-html="modelValue"
    />
  </ListLayout>
</div>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps} from 'vue';

import ListLayout from "../../library/ListLayout.vue";
import IconButton from "../Button/IconButton.vue";
import LineSeparator from "../Utils/LineSeparator.vue";

defineProps<{
  modelValue: string;
}>();

defineEmits(['update:modelValue']);
</script>
<script lang="ts">
export default {
  name: "InputRichText",
}
</script>

<style lang="scss" scoped>
.inputRichText {
  background: #FAFAFA;
  border-radius: 2px;

  .inputRichText__content {
    padding: 16px;
    outline: none;
  }
}
</style>