<template>
  <FadeTransition>
    <div class="taskDetailsModal" v-if="visibility" @click.self="$emit('update:visibility', false)">
      <div class="taskDetailsModal__box">
        <TaskDetails :task="task">
          <template #actions>
            <IconButton
              size="md"
              icon="close_fullscreen"
              @click="$emit('update:visibility', false)"
            />
          </template>
        </TaskDetails>
      </div>
    </div>
  </FadeTransition>
</template>

<script lang="ts" setup>
import { watch } from "vue";
import TaskInterface from "../../../interface/Task";
import {useWindowStore} from "../../../store/Window";
import FadeTransition from "../../../transitions/FadeTransition.vue";
import TaskDetails from "../Task/TaskDetails.vue";
import IconButton from "../Button/IconButton.vue";

const props = defineProps<{
  visibility: boolean;
  task: TaskInterface;
}>();

defineEmits(['update:visibility']);
const windowStore = useWindowStore();

watch(() => props.visibility, () => {
  windowStore.lockScroll = props.visibility
});
</script>
<script lang="ts">
export default {
  name: "TaskDetailsModal",
}
</script>

<style lang="scss" scoped>
.taskDetailsModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparentize(#212121, .85);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 16px 60px;
  z-index: 200;
  overflow-y: scroll;

  .taskDetailsModal__box {
    width: 100%;
    max-width: 992px;
  }
}
</style>