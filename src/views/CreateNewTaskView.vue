<template>
  <div class="createNewTaskView">
    <Box>
      <ListLayout gap="16">
        <div>Title:</div>
        <InputText />

        <div>Description:</div>
        <InputRichText v-model="task.description" />
      </ListLayout>
    </Box>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import TaskInterface from "../interface/Task";
import Box from "../components/library/Box.vue";
import {taskTemplateDescriptionMock} from "../mocks/TaskTemplateDescriptionMock";
import InputRichText from "../components/library/Form/InputRichText.vue";
import InputText from "../components/library/Form/InputText.vue";
import ListLayout from "../components/library/ListLayout.vue";

const task = ref<TaskInterface>({
  id: 0,
  name: '',
  description: taskTemplateDescriptionMock,
  properties: {
    stage: '',
    priority: '',
    assignee: '',
    project: '',
    type: '',
    estimation: '',
    spentTime: '',
  }
})
</script>
<script lang="ts">
export default {
  name: "CreateNewTaskView",
}
</script>

<style lang="scss" scoped>
.createNewTaskView {
  max-width: 1000px;
  margin: 0 auto;
}
</style>