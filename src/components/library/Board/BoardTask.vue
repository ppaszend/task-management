<template>
  <div
    :class="{
      boardTask: true,
      'boardTask--selected': selected,
    }"
    :style="{
      position: dragMode ? 'fixed' : undefined,
      left: dragMode ? `${mouse.position.x - mouseOffset.x}px` : undefined,
      top: dragMode ? `${mouse.position.y - mouseOffset.y}px` : undefined,
      zIndex: dragMode ? 100 : undefined,
    }"
    @dblclick="modalVisibility = true"
    tabindex="0"
    @focusin="selected = true"
    @focusout="selected = false"
    ref="taskElement"
  >
      <div class="boardTask__name">
        <RouterLink :to="{ name: 'taskDetailsView', params: { id: task.id } }">
          {{task.name}}
        </RouterLink>
        <MaterialDesignIcon
          icon="drag_indicator"
          @mouse-down="dragStart($event)"
          @mouse-up="dragEnd($event)"
        />
      </div>
    <div class="boardTask__description">{{ $truncate(task.description, 120) }}</div>
    <div class="boardTask__properties">
      <InputSelect v-model="properties.priority" :options="prioritiesStore.options" />
      <InputSelect v-model="properties.assignee" :options="participantsStore.options" />
    </div>
  </div>

  <TaskDetailsModal :task="task" v-model:visibility="modalVisibility" />
</template>

<script lang="ts" setup>
import {defineProps, reactive, ref, watch} from 'vue';
import TaskInterface from "../../../interface/Task";
import InputSelect from "../Form/InputSelect.vue";
import {usePrioritiesStore} from "../../../store/Priorities";
import TaskDetailsModal from "../Modals/TaskDetailsModal.vue";
import {useParticipantsStore} from "../../../store/Participants";
import MaterialDesignIcon from "../Utils/MaterialDesignIcon.vue";
import useMouse from "../../../composables/mouse";

const prioritiesStore = usePrioritiesStore();
const participantsStore = useParticipantsStore();
const mouse = useMouse();
const modalVisibility = ref(false);
const dragMode = ref(false);
const taskElement = ref();

const { task } = defineProps<{
  task: TaskInterface;
}>();
const emit = defineEmits(['dragEnd']);

const properties = ref(task.properties);
const selected = ref(false);
const mouseOffset = reactive({ x: 0, y: 0 });

const dragStart = (event) => {
  dragMode.value = true;

  if (taskElement.value) {
      mouseOffset.x = event.clientX - taskElement.value.getBoundingClientRect().x;
      mouseOffset.y = event.clientY - taskElement.value.getBoundingClientRect().y;
  }
};

const dragEnd = () => {
  dragMode.value = false;
  emit('dragEnd');
};

watch(mouse.clicked, (clicked) => {
  if (dragMode.value && !clicked) {
    dragEnd();
  }
})
</script>
<script lang="ts">
export default {
  name: "BoardTask"
}
</script>

<style lang="scss" scoped>
.boardTask {
  display: flex;
  flex-direction: column;
  width: 280px;
  background: var(--color-paper);
  padding: 10px;
  border-radius: 8px;
  gap: 6px;
  border: 1px solid var(--color-border);
  cursor: pointer;
  user-select: none;

  &.boardTask--selected {
    border-color: #039BE5;
  }

  .boardTask__name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
  }

  .boardTask__description {
    font-size: 0.875em;
  }

  .boardTask__properties {
    display: flex;
    gap: 8px;
  }
}
</style>