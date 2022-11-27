<template>
  <div class="toast-notifications">
    <div
      v-for="notification in toastNotificationsStore.notifications"
      :key="notification.id"
      class="notification"
    >
      {{ notification.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ToastNotifications,
  useToastNotificationsStore,
} from "@/stores/toastNotifications";

const toastNotificationsStore: ToastNotifications =
  useToastNotificationsStore();
</script>
<script lang="ts">
export default {
  name: "ToastNotificationsComponent",
};
</script>

<style lang="scss" scoped>
.toast-notifications {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 24px;

  .notification {
    background: #ffffff;
    padding: 8px;
  }
}
</style>
