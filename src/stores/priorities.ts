import { defineStore } from "pinia";
import { ref } from "vue";
import type { Priority } from "@/models/Priority";

export interface PrioritiesInterface {
  priorities: Priority[];
  getPriorityById: Function;
}

export const usePrioritiesStore = defineStore("priorities", () => {
  const priorities = ref<Priority[]>([
    {
      id: 0,
      name: "Normal",
      importance: 0,
    },
    {
      id: 1,
      name: "Major",
      importance: 1,
      color: "#FFFFCC",
    },
  ]);

  const getPriorityById = (id: Priority["id"]): Priority => {
    const priority = priorities.value.find((priority) => priority.id === id);
    if (priority) {
      return priority;
    }

    throw new Error("Priority does not exists");
  };

  return {
    priorities,
    getPriorityById,
  };
});
