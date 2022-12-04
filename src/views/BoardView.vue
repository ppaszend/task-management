<template>
  <div class="board" @click="boardStore.unSelectAll">
    <column-component
      v-for="column in boardStore.columns"
      :key="column.id"
      :column="column"
    />
  </div>
</template>

<script lang="ts" setup>
import { useBoardStore } from "@/stores/board";
import type { BoardStore } from "@/stores/board";
import ColumnComponent from "@/components/board/ColumnComponent.vue";

const boardStore: BoardStore = useBoardStore();
</script>
<script lang="ts">
export default {
  name: "BoardView",
};
</script>

<style lang="scss" scoped>
.board {
  display: flex;
  width: 100%;
  gap: 1px;
  height: calc(100vh - 72px);
  overflow: auto;
}

.board::-webkit-scrollbar {
  width: 10px;
  height: 8px;
}
.board::-webkit-scrollbar-thumb {
  /* Foreground */
  background: #999;
  border-radius: 4px;
}
.board::-webkit-scrollbar-track {
  /* Background */
  background: transparent;
  height: 20px;
}
</style>
