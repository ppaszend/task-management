<template>
  <div
    class="column"
    :class="{ empty: tasks.length === 0, expanded }"
    ref="columnElement"
  >
    <tool-tip
      :time-to-show="1000"
      :label="expanded ? 'Click to minimize' : 'Click to expand'"
      :close-after-click="true"
    >
      <div class="column-name" @click="expanded = !expanded">
        {{ props.column.name }} ({{ tasks.length }})
        <div class="column-name-icon">
          <font-awesome-icon icon="fa-solid fa-chevron-left" v-if="expanded" />
          <font-awesome-icon
            icon="fa-solid fa-chevron-right"
            v-if="!expanded"
          />
        </div>
      </div>
    </tool-tip>
    <div class="column-content" :class="{ minimized: !expanded }">
      <div
        class="task-drag-placeholder"
        :style="{ height: `${boardStore.dragHeight}px` }"
        v-if="boardStore.dragged && draggedOver"
      ></div>

      <div class="column-content-tasks" v-if="expanded">
        <draggable-item v-for="task in tasks" :key="task.id" :id="task.id">
          <task-list-item
            class="task-list-item"
            v-if="expanded"
            :task="task"
            :modal-allowed="true"
            @click="(event) => clickHandler(event, task)"
            @dblclick="() => dblClickHandler(task)"
          />
        </draggable-item>
      </div>

      <div class="column-content-squares" v-if="!expanded">
        <div class="square" v-for="task in tasks" :key="task.id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBoardStore } from "@/stores/board";
import type { BoardStore } from "@/stores/board";
import type { Task } from "@/models/Task";
import type { Column } from "@/models/Column";
import type { TasksInterface } from "@/stores/tasks";
import { useTasksStore } from "@/stores/tasks";
import TaskListItem from "@/components/TaskListItem.vue";
import { useTaskModalStore } from "@/stores/taskModal";
import type { TaskModalInterface } from "@/stores/taskModal";
import { computed, ref, watch, watchEffect } from "vue";
import ToolTip from "@/components/ToolTip.vue";
import DraggableItem from "@/components/DraggableItem.vue";

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
const expanded = ref<Boolean>(true);
const draggedOver = ref<boolean>(false);
const columnElement = ref<HTMLElement | null>(null);

watchEffect(() => {
  if (columnElement.value) {
    const columnBoundingRect = columnElement.value.getBoundingClientRect();
    draggedOver.value =
      boardStore.dragPositionX > columnBoundingRect.x &&
      boardStore.dragPositionX <
        columnBoundingRect.x + columnBoundingRect.width &&
      boardStore.dragPositionY > columnBoundingRect.y &&
      boardStore.dragPositionY <
        columnBoundingRect.y + columnBoundingRect.height;

    if (draggedOver.value) {
      boardStore.draggedOverColumn = props.column.id;
    } else if (boardStore.draggedOverColumn === props.column.id) {
      boardStore.draggedOverColumn = null;
    }
  }
});

watch(
  () => boardStore.dragged,
  (value, oldValue) => {
    if (!value && oldValue) {
      const draggedTask = tasksStore.tasks.find(
        ({ id }) => id === boardStore.draggedTaskId
      );

      if (draggedTask && typeof boardStore.draggedOverColumn === "number") {
        draggedTask.stage = boardStore.draggedOverColumn;
      }
    }
  }
);

const emit = defineEmits([
  "removeFromSelection",
  "addToSelection",
  "selectOne",
]);

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
  min-height: calc(100% - 48px);

  &.expanded {
    width: 100%;

    &:not(.empty) {
      min-width: 420px;
    }
  }

  .column-name {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 0.95em;
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    white-space: nowrap;
    cursor: pointer;

    .column-name-icon {
      margin-left: auto;
      padding-left: 6px;
      font-size: 12px;
    }
  }

  .column-content {
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 100%;
    gap: 10px;

    .column-content-tasks {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }

    .column-content-squares {
      display: flex;
      gap: 4px;
      width: 100%;
    }

    .task-list-item {
      cursor: pointer;
    }

    .task-drag-placeholder {
      display: flex;
      width: 100%;
      border: 1px dashed #ffffff;
      border-radius: 4px;
    }

    .square {
      width: 10px;
      height: 10px;
      background: #323741;
    }
  }
}
</style>
