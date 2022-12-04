<template>
  <div class="task-list">
    <task-list-item
      v-for="task in tasksStore.tasks"
      :task="task"
      :key="task.id"
      :modal-allowed="false"
    />
  </div>
</template>

<script lang="ts" setup>
import { useTasksStore } from "@/stores/tasks";
import type { TasksInterface } from "@/stores/tasks";
import TaskListItem from "@/components/TaskListItem.vue";

const tasksStore: TasksInterface = useTasksStore();
</script>
<script lang="ts">
export default {
  name: "TasksListView",
};
</script>

<style lang="scss" scoped>
.task-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
