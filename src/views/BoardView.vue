<template>
  <div class="boardView">
    <Box>
      <ListLayout direction="horizontal" gap="10" :style="{ alignItems: 'baseline' }">
        <div>Board:</div>
        <InputSelect :options="[]" model-value=""/>

        <div>Sprint:</div>
        <InputSelect :options="[]" model-value=""/>
      </ListLayout>
    </Box>

    <div class="boardView__content">
      <BoardColumnLayout
        v-for="column in board.columns"
        :name="column.name"
      >
        <BoardTask
          v-for="task in board.tasks.filter((task) => column.slug === task.properties.stage)"
          :task="task"
          @drag-end="dragEndHandler(task.id)"
        />

        <div class="boardView__createNewTaskInColumn">
          <RouterLink :to="{ name: 'createNewTaskView' }">
            <ButtonComponent
              variant="text"
              color="none"
              size="sm"
              :style="{ gap: '2px' }"
              fit-content
            >
              Create new
              <MaterialDesignIcon icon="add" />
            </ButtonComponent>
          </RouterLink>
        </div>
      </BoardColumnLayout>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BoardTask from "../components/library/Board/BoardTask.vue";
import TaskListMock from "../mocks/TaskListMock";
import BoardColumnLayout from "../components/library/Board/BoardColumnLayout.vue";
import BoardMock from "../mocks/BoardMock";
import ButtonComponent from "../components/library/Button/ButtonComponent.vue";
import MaterialDesignIcon from "../components/library/Utils/MaterialDesignIcon.vue";
import Box from "../components/library/Box.vue";
import InputSelect from "../components/library/Form/InputSelect.vue";
import ListLayout from "../components/library/ListLayout.vue";

const board = BoardMock;

const dragEndHandler = (taskId: number) => {
  console.log(taskId)
}
</script>
<script lang="ts">

export default {
  name: "BoardView",
}
</script>

<style lang="scss" scoped>
.boardView {
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: scroll;
  height: calc(100% - 56px);
  padding: 0 16px;

  .boardView__content {
    display: flex;
    gap: 16px;
  }

  .boardView__createNewTaskInColumn {
    transition: opacity 300ms ease-in-out;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
}
</style>