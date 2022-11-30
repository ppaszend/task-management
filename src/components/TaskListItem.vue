<template>
  <div
    class="task"
    @dblclick="
      () => {
        modalAllowed === true;
        this.taskModalActive = true;
      }
    "
  >
    <div class="task-header">
      <router-link
        :to="{ name: 'task-details', params: { id: task.id } }"
        class="task-name"
      >
        {{ task.name }}
      </router-link>
      <tap-bar
        :buttons="[
          {
            label: 'Edit',
            onClick: () => {
              $router.push({
                name: 'task-details',
                params: { id: task.id },
                hash: '#edit',
              });
            },
          },
          { label: 'Remove', onClick: () => {} },
        ]"
      />
    </div>
    <div class="task-properties">
      <div class="task-property">
        Priority
        <select-input
          :options="
            prioritiesStore.priorities.map((priority) => ({
              name: priority.name,
              value: priority.id,
            }))
          "
          :value="prioritiesStore.getPriorityById(task.priority).id"
          @change="(value) => (task.priority = value)"
        />
      </div>
      <div class="task-property">
        Assignee
        <select-input
          :options="
            usersStore.users.map((user) => ({
              name: user.name,
              value: user.id,
            }))
          "
          :value="usersStore.getUserById(task.assignee).id"
          @change="(value) => (task.assignee = value)"
        />
      </div>
      <div class="task-property">
        Project
        <select-input
          :options="
            projectsStore.projects.map((project) => ({
              name: project.name,
              value: project.id,
            }))
          "
          :value="projectsStore.getProjectById(task.project).id"
          @change="(value) => (task.project = value)"
        />
      </div>
    </div>
    <Teleport to="#popup-container">
      <fade-transition>
        <div
          class="modal"
          v-if="modalAllowed && taskModalActive"
          @click="taskModalActive = false"
        >
          <task-details @click.stop :id="props.task.id" />
        </div> </fade-transition
    ></Teleport>
  </div>
</template>

<script lang="ts" setup>
import type { Task } from "@/models/Task";
import type { PrioritiesInterface } from "@/stores/priorities";
import { usePrioritiesStore } from "@/stores/priorities";
import type { UsersInterface } from "@/stores/users";
import { useUsersStore } from "@/stores/users";
import SelectInput from "@/components/form/selectInput.vue";
import type { ProjectsStoreInterface } from "@/stores/projects";
import { useProjectsStore } from "@/stores/projects";
import type { TasksInterface } from "@/stores/tasks";
import { useTasksStore } from "@/stores/tasks";
import TapBar from "@/components/tapBar.vue";
import TaskDetails from "@/components/TaskDetails.vue";
import { ref } from "vue";
import FadeTransition from "@/transitions/fadeTransition.vue";

interface Props {
  task: Task;
  modalAllowed: Boolean;
}

const props = defineProps<Props>();
const prioritiesStore: PrioritiesInterface = usePrioritiesStore();
const usersStore: UsersInterface = useUsersStore();
const projectsStore: ProjectsStoreInterface = useProjectsStore();
const tasksStore: TasksInterface = useTasksStore();

const task = tasksStore.getTaskById(props.task.id);
const taskModalActive = ref<Boolean>(false);
</script>
<script lang="ts">
export default {
  name: "TaskListItem",
};
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #323741;
  padding: 18px 24px 24px;
  width: 100%;
  border-radius: 4px;
  color: #ffffff;
  transition: background 100ms ease-in-out;

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid transparentize(#ffffff, 0.8);

    .task-name {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 1.125em;
      color: #ffffff;
      height: 32px;
      padding-right: 48px;
    }
  }

  .task-properties {
    display: flex;
    gap: 36px;
    font-size: 0.875em;

    .task-property {
      display: flex;
      flex-direction: column;
      position: relative;
      gap: 6px;
    }
  }
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background: transparentize(#000000, 0.15);
  padding-top: 60px;
  padding-bottom: 60px;
  z-index: 5000;
  cursor: default;
}
</style>
