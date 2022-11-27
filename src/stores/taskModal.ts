import { defineStore } from "pinia";
import { ref } from "vue";
import type { Task } from "@/models/Task";

export interface TaskModalInterface {
  visible: boolean;
  task: Task | null;
  hide: Function;
  show: Function;
}

export const useTaskModalStore = defineStore("taskModal", () => {
  const visible = ref<boolean>(true);
  const task = ref<Task | null>(null);

  const hide = () => {
    visible.value = false;
    task.value = null;
  };

  const show = (taskToShow: Task) => {
    visible.value = true;
    task.value = taskToShow;
  };

  return {
    visible,
    task,
    hide,
    show,
  };
});
