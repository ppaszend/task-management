<template>
  <task-details :task="task" />
</template>

<script lang="ts" setup>
import TaskDetails from "@/components/TaskDetails.vue";
import { useTasksStore } from "@/stores/tasks";
import type { Task } from "@/models/Task";

interface Props {
  id: string;
}
const props = defineProps<Props>();
const tasksStore = useTasksStore();

const task: Task | undefined = tasksStore.getTaskById(parseInt(props.id));
</script>
<script lang="ts">
export default {
  name: "TaskDetailsView",
};
</script>

<style lang="scss" scoped></style>
