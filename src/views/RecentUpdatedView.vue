<template>
  <ListLayout :style="{ paddingBottom: '40px', gap: '16px' }">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @remove="removeTask(task)"
      @clone="cloneTask(task)"
    />
  </ListLayout>
</template>

<script lang="ts" setup>
import ListLayout from "../components/library/ListLayout.vue";
import TaskItem from "../components/library/Task/TaskItem.vue";
import TaskListMock from "../mocks/TaskListMock";
import {ref} from "vue";

const tasks = ref(TaskListMock);

const removeTask = (task) => {
  tasks.value = tasks.value.filter(({id}) => id !== task.id);
};

const cloneTask = (task) => {
  tasks.value.unshift({
    ...task,
    id: Math.max(...tasks.value.map(({id}) => id)),
  });
}
</script>
<script lang="ts">

export default {
  name: "RecentUpdatedView",
}
</script>

<style scoped>

</style>