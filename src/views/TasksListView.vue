<template>
  <div v-if="error">We cannot</div>

  <div v-if="!error" class="task-list">
    <task-list-item
      v-for="task in tasks"
      :task="task"
      :key="task._id"
      :modal-allowed="false"
    />
  </div>
</template>

<script lang="ts" setup>
import { useTasksStore } from "@/stores/tasks";
import type { TasksInterface } from "@/stores/tasks";
import TaskListItem from "@/components/TaskListItem.vue";
import { ref } from "vue";

const tasksStore: TasksInterface = useTasksStore();

const tasks = ref([]);
const error = ref(null);

fetch("http://localhost:3000/tasks")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    tasks.value = data;
  })
  .catch((err) => {
    error.value = err;
  });
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
