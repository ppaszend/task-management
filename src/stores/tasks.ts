import { defineStore } from "pinia";
import type { Task } from "@/models/Task";
import { ref } from "vue";
import { usePrioritiesStore } from "@/stores/priorities";
import mockTasks from "@/mocks/tasks";

export interface TasksInterface {
  tasks: Task[];
  createTask: Function;
  getTasksWithStage: Function;
  getTaskById: Function;
}

export const useTasksStore = defineStore("tasks", () => {
  const prioritiesStore = usePrioritiesStore();

  const tasks = ref<Task[]>(mockTasks);

  const createTask = ({
    name,
    description,
    stage,
    priority,
    assignee,
    project,
  }: {
    name: Task["name"];
    description: Task["description"];
    stage: Task["stage"];
    priority: Task["priority"];
    assignee: Task["assignee"];
    project: Task["project"];
  }): Task => {
    const task = {
      id: Math.max(...tasks.value.map(({ id }) => id)) + 1,
      name,
      description,
      stage,
      priority,
      assignee,
      project,
    };
    tasks.value.push(task);
    return task;
  };

  const getTasksWithStage = (stage: Task["stage"]): Task[] => {
    return tasks.value
      .filter(({ stage: taskStage }) => stage === taskStage)
      .sort(
        (a, b) =>
          prioritiesStore.getPriorityById(b.priority).importance -
          prioritiesStore.getPriorityById(a.priority).importance
      );
  };

  const getTaskById = (id: number): Task | undefined =>
    tasks.value.find((task) => task.id === id);

  return {
    tasks,
    createTask,
    getTasksWithStage,
    getTaskById,
  };
});
