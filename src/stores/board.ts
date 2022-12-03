import { defineStore } from "pinia";
import { ref } from "vue";
import type { Column } from "@/models/Column";

export interface BoardStore {
  columns: Column[];
  getColumnById: Function;
  selection: Number[];
  unSelectAll: Function;
  selectOne: Function;
  addToSelection: Function;
  unSelectOne: Function;
  dragged: boolean;
  dragPositionX: number;
  dragPositionY: number;
  dragWidth: number;
  dragHeight: number;
  draggedOverColumn: number | null;
  draggedTaskId: number | null;
}

export const useBoardStore = defineStore("board", () => {
  const dragged = ref<boolean>(false);
  const dragPositionX = ref<number>(0);
  const dragPositionY = ref<number>(0);
  const dragWidth = ref<number>(0);
  const dragHeight = ref<number>(0);
  const draggedOverColumn = ref<number | null>(null);
  const draggedTaskId = ref<number | null>(null);

  document.body.addEventListener("mousemove", (event) => {
    dragPositionX.value = event.x;
    dragPositionY.value = event.y;
  });

  const columns = ref<Column[]>([
    {
      id: 0,
      name: "Todo",
    },
    {
      id: 1,
      name: "In Progress",
    },
    {
      id: 2,
      name: "Code Review",
    },
    {
      id: 3,
      name: "Ready for test",
    },
    {
      id: 4,
      name: "Testing",
    },
    {
      id: 5,
      name: "Final review",
    },
    {
      id: 6,
      name: "Done",
    },
  ]);

  const getColumnById = (id: number) =>
    columns.value.find((column) => column.id === id);

  const selection = ref<number[]>([]);

  const unSelectAll = () => {
    selection.value = [];
  };

  const selectOne = (taskId: number) => {
    selection.value = [taskId];
  };

  const addToSelection = (taskId: number) => {
    selection.value.push(taskId);
  };

  const unSelectOne = (taskId: number) => {
    selection.value = selection.value.filter((id) => id !== taskId);
  };

  return {
    columns,
    getColumnById,
    selection,
    unSelectAll,
    selectOne,
    addToSelection,
    unSelectOne,
    dragged,
    dragPositionX,
    dragPositionY,
    dragWidth,
    dragHeight,
    draggedOverColumn,
    draggedTaskId,
  };
});
