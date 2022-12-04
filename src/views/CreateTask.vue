<template>
  <div class="wrapper">
    <!-- todo: improve form for creating task (better UI) -->
    <h1 class="header">Create New Task</h1>
    <task-form @submit="createTask" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToastNotificationsStore } from "@/stores/toastNotifications";
import type { Task } from "@/models/Task";
import { useTasksStore } from "@/stores/tasks";
import type { TasksInterface } from "@/stores/tasks";
import TaskForm from "@/components/TaskForm.vue";

const tasksStore: TasksInterface = useTasksStore();
const toastNotificationsStore = useToastNotificationsStore();
const router = useRouter();

const task = ref({
  name: "",
  description: "",
  stage: 0,
  priority: 0,
  assignee: null,
});

const createTask = () => {
  const createdTask: Task = tasksStore.createTask(task.value);
  router.push({ name: "board" });
  toastNotificationsStore.push(
    "Successfully Created Task",
    `Your new task id: ${createdTask.id}`
  );
};
</script>
<script lang="ts">
export default {
  name: "CreateTask",
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 24px auto;
  width: 800px;
  background: #323741;
  padding: 24px;
  border-radius: 4px;
}

.header {
  font-size: 1.5em;
  color: #ffffff;
}
</style>
