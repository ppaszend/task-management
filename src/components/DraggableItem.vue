<template>
  <div
    ref="draggableElement"
    @mousedown="mouseDownHandler"
    @mouseup="mouseUpHandler"
    @click="clickHandler"
    :style="{
      left: drag ? `${elementPositionX}px` : 'auto',
      top: drag ? `${elementPositionY}px` : 'auto',
      width: drag ? `${elementWidth}px` : 'auto',
    }"
    :class="{ drag: drag }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { BoardStore, useBoardStore } from "@/stores/board";
import type { Task } from "@/models/Task";

interface Props {
  id: Task["id"];
}

const props = defineProps<Props>();

const draggableElement = ref<HTMLElement | null>(null);
const boardStore: BoardStore = useBoardStore();

let drag = ref<boolean>(false);
let diffX = ref<number>(0);
let diffY = ref<number>(0);
let elementPositionX = ref<number>(0);
let elementPositionY = ref<number>(0);
let elementWidth = ref<number>(0);
let firstMove = ref<boolean>(false);
let mouseClickEvent = ref<MouseEvent | null>(null);

const mouseMoveHandler = (mouseMoveEvent: MouseEvent) => {
  if (firstMove.value) {
    if (mouseClickEvent.value) {
      mouseClickEvent.value.preventDefault();
    }

    if (draggableElement.value) {
      const draggedElementBoundingRect =
        draggableElement.value.getBoundingClientRect();

      diffX.value = mouseMoveEvent.x - draggedElementBoundingRect.x;
      diffY.value = mouseMoveEvent.y - draggedElementBoundingRect.y;

      document.body.addEventListener("mouseup", mouseUpHandler);
      document.body.addEventListener("mouseleave", mouseUpHandler);

      elementPositionX.value = draggedElementBoundingRect.x;
      elementPositionY.value = draggedElementBoundingRect.y;
      elementWidth.value = draggedElementBoundingRect.width;
      drag.value = true;
      boardStore.dragged = true;
      boardStore.dragWidth = draggedElementBoundingRect.width;
      boardStore.dragHeight = draggedElementBoundingRect.height;
      boardStore.draggedTaskId = props.id;
      firstMove.value = false;
    }
  } else {
    elementPositionX.value = mouseMoveEvent.x - diffX.value;
    elementPositionY.value = mouseMoveEvent.y - diffY.value;
  }
};

const mouseUpHandler = () => {
  document.body.removeEventListener("mousemove", mouseMoveHandler);
  document.body.removeEventListener("mouseup", mouseUpHandler);
  document.body.removeEventListener("mouseleave", mouseUpHandler);
  drag.value = false;
  boardStore.dragged = false;
  firstMove.value = false;
};

const mouseDownHandler = (event: MouseEvent) => {
  mouseClickEvent.value = event;
  firstMove.value = true;
  document.body.addEventListener("mousemove", mouseMoveHandler);
};
</script>
<script lang="ts">
export default {
  name: "DraggableItem",
};
</script>

<style lang="scss" scoped>
.drag {
  user-select: none;
  position: fixed;
  z-index: 1000;
}
</style>
