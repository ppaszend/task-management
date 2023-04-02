<template>
  <div class="notificationsDropdownMenu__header">
    <div class="notificationsDropdownMenu__title">
      Notifications
    </div>

    <button class="notificationsDropdownMenu__button" @click="$emit('update:modelValue', 'settings')">
      Settings
    </button>
  </div>
  <div>
    <ListLayout :style="{ padding: '16px', gap: '14px', maxHeight: '400px', overflowY: 'scroll' }">
      <template v-for="(notification, index) in notificationsStore.data">
        <CommentItem :comment="notification" />

        <LineSeparator v-if="index < notificationsStore.data.length - 1" />
      </template>
    </ListLayout>
    <div class="notificationsDropdownMenu__shadow"></div>
  </div>
</template>

<script lang="ts" setup>
import ListLayout from "../../../../components/library/ListLayout.vue";
import CommentItem from "../../../../components/library/CommentItem.vue";
import LineSeparator from "../../../../components/library/Utils/LineSeparator.vue";
import {useNotificationsStore} from "../../../../store/Notifications";

defineProps<{
  modelValue: string;
}>();

defineEmits(['update:modelValue']);

const notificationsStore = useNotificationsStore();
</script>
<script lang="ts">

export default {
  name: "DefaultTab",
}
</script>

<style lang="scss" scoped>

.notificationsDropdownMenu__header {
  display: flex;
  padding: 8px 16px 0;

  .notificationsDropdownMenu__title {
    font-size: 1.25em;
    font-weight: 500;
  }

  .notificationsDropdownMenu__button {
    cursor: pointer;
    margin-left: auto;
  }
}

.notificationsDropdownMenu__shadow {
  display: flex;
  position: absolute;
  bottom: 8px;
  left: 16px;
  width: calc(100% - 32px);
  height: 32px;
  background: linear-gradient(transparent, var(--color-paper));
}
</style>