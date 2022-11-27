import { defineStore } from "pinia";
import { ref } from "vue";
import type ToastNotification from "@/models/ToastNotification";

export interface ToastNotifications {
  notifications: ToastNotification[];
  push: Function;
}

export const useToastNotificationsStore = defineStore(
  "toastNotifications",
  () => {
    const notifications = ref<ToastNotification[]>([]);

    const push = (
      title: ToastNotification["title"],
      description: ToastNotification["description"],
      time: number = 10000
    ) => {
      const notificationId =
        Math.max(...notifications.value.map(({ id }) => id)) + 1;
      notifications.value.push({
        id: notificationId,
        title,
        description,
      });
      setTimeout(() => {
        notifications.value = notifications.value.filter(
          ({ id }) => id !== notificationId
        );
      }, time);
    };

    return {
      notifications,
      push,
    };
  }
);
