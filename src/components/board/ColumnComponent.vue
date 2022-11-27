<template>
  <div class="column" :class="{ empty: tasks.length === 0 }">
    <div class="column-name">{{ props.column.name }} ({{ tasks.length }})</div>
    <div
      class="column-content"
      @drop="(event) => columnOnDropHandler(event, column.id)"
      @dragover.prevent
      @dragenter.prevent
    >
      <task-list-item
        class="task-list-item"
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        :modal-allowed="true"
        draggable="true"
        @dragstart="(event) => onDragStartHandler(event, task.id)"
        @click="(event) => clickHandler(event, task)"
        @dblclick="() => dblClickHandler(task)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BoardStore, useBoardStore } from "@/stores/board";
import type { Task } from "@/models/Task";
import type { Column } from "@/models/Column";
import type { TasksInterface } from "@/stores/tasks";
import { useTasksStore } from "@/stores/tasks";
import TaskListItem from "@/components/TaskListItem.vue";
import { TaskModalInterface, useTaskModalStore } from "@/stores/taskModal";
import { computed } from "vue";

interface Props {
  column: Column;
}

const props = defineProps<Props>();

const boardStore: BoardStore = useBoardStore();
const tasksStore: TasksInterface = useTasksStore();
const taskModal: TaskModalInterface = useTaskModalStore();
const tasks = computed((): Task[] =>
  tasksStore.getTasksWithStage(props.column.id)
);

const emit = defineEmits([
  "removeFromSelection",
  "addToSelection",
  "selectOne",
]);

const columnOnDropHandler = (event: DragEvent, columnId: number) => {
  if (event.dataTransfer) {
    const taskId = parseInt(event.dataTransfer?.getData("taskId"));
    const task = tasksStore.tasks.find(({ id }: Task) => id === taskId);
    if (task) {
      task.stage = columnId;
    }
  }
};

const onDragStartHandler = (event: DragEvent, id: number) => {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("taskId", id.toString());
  }
};

const clickHandler = (event: MouseEvent, task: Task) => {
  if (event.shiftKey) {
    if (boardStore.selection.includes(task.id)) {
      emit("removeFromSelection", task.id);
    } else {
      emit("addToSelection", task.id);
    }
  } else {
    emit("selectOne", task.id);
  }
};

const dblClickHandler = (task: Task) => {
  taskModal.show(task);
};
</script>
<script lang="ts">
export default {
  name: "ColumnComponent",
};
</script>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100% - 48px);

  &:not(.empty) {
    min-width: 420px;
  }

  .column-name {
    font-weight: 500;
    font-size: 0.95em;
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    white-space: nowrap;
  }

  .column-content {
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 100%;
    gap: 10px;

    .task-list-item {
      cursor: pointer;
    }
  }
}
</style>