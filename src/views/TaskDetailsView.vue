<template>
  <div class="taskDetailsView">
    <TaskDetails :task="task">
    </TaskDetails>
  </div>
</template>

<script lang="ts" setup>
import TaskDetails from "../components/library/Task/TaskDetails.vue";
import {getTaskById} from "../mocks/TaskListMock";
import {useRoute} from "vue-router";

const route = useRoute();

const task = getTaskById(parseInt(route.params.id[0]));
</script>
<script lang="ts">

export default {
  name: "TaskDetailsView",
}
</script>

<style scoped>
.taskDetailsView {
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
  padding-bottom: 24px;
}
</style>