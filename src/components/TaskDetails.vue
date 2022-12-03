<template>
  <div class="task-details">
    <div class="task-main">
      <div class="task-informations">
        <div>
          Id: {{ projectsStore.getProjectById(task.project).shortName }}-{{
            task.id
          }}
        </div>
        <tool-tip label="02/03/2023 20:23">Created: Yesterday</tool-tip>
        <tool-tip label="02/03/2023 21:14">Last Edited: Today</tool-tip>
        <div class="buttons">
          <span v-show="discardChangesConfirmation">Are you sure?</span>
          <span v-show="changesSaved">Changes saved!</span>
          <small-button
            @click="editMode = true"
            v-show="!editMode && !discardChangesConfirmation"
            color="#81d4fa"
          >
            Edit
          </small-button>
          <small-button
            @click="removeTaskConfirmation = true"
            v-show="!editMode && !discardChangesConfirmation"
            color="#ef9a9a"
          >
            Remove
          </small-button>
          <small-button
            @click="
              editMode = false;
              changesSaved = true;
            "
            v-show="editMode"
            color="#a5d6a7"
          >
            Save
          </small-button>
          <small-button
            @click="
              editMode = false;
              discardChangesConfirmation = true;
            "
            v-show="editMode"
            color="#ef9a9a"
          >
            Discard changes
          </small-button>
          <small-button
            color="#ef9a9a"
            v-show="discardChangesConfirmation"
            @click="discardChangesConfirmation = false"
          >
            Yes
          </small-button>
          <small-button
            color="#81d4fa"
            v-show="discardChangesConfirmation"
            @click="
              editMode = true;
              discardChangesConfirmation = false;
            "
          >
            No
          </small-button>
        </div>
      </div>
      <div class="task-modal-header">
        <div
          class="task-name"
          :class="{ editable: editMode }"
          :contenteditable="editMode"
        >
          {{ task.name }}
        </div>
      </div>
      <div
        class="task-description"
        :class="{ editable: editMode }"
        :contenteditable="editMode"
      >
        {{ task.description }}
      </div>
      <comments-component />
    </div>

    <div class="task-sidebar">
      <div class="task-properties">
        <div class="task-property">
          <div class="property-name">Priority:</div>
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
          <div class="property-name">Assignee:</div>
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
          <div class="property-name">Project:</div>
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TasksInterface } from "@/stores/tasks";
import { useTasksStore } from "@/stores/tasks";
import SelectInput from "@/components/form/SelectInput.vue";
import type { PrioritiesInterface } from "@/stores/priorities";
import { usePrioritiesStore } from "@/stores/priorities";
import type { UsersInterface } from "@/stores/users";
import { useUsersStore } from "@/stores/users";
import type { ProjectsStoreInterface } from "@/stores/projects";
import { useProjectsStore } from "@/stores/projects";
import { ref, watch } from "vue";
import SmallButton from "@/components/buttons/SmallButton.vue";
import ToolTip from "@/components/ToolTip.vue";
import CommentsComponent from "@/components/CommentsComponent.vue";
import { useRoute } from "vue-router";

interface Props {
  id: string | number;
}

const tasksStore: TasksInterface = useTasksStore();
const prioritiesStore: PrioritiesInterface = usePrioritiesStore();
const usersStore: UsersInterface = useUsersStore();
const projectsStore: ProjectsStoreInterface = useProjectsStore();
const props = defineProps<Props>();
const route = useRoute();

const task = tasksStore.getTaskById(
  typeof props.id === "string" ? parseInt(props.id) : props.id
);
const editMode = ref<Boolean>(route.hash === "#edit");
if (route.hash === "#edit") {
  window.location.hash = "";
}

const discardChangesConfirmation = ref<Boolean>(false);
const changesSaved = ref<Boolean>(false);
const removeTaskConfirmation = ref<Boolean>(false);

watch(changesSaved, (currValue, prevValue) => {
  if (currValue && !prevValue) {
    setTimeout(() => (changesSaved.value = false), 3000);
  }
});
</script>
<script lang="ts">
export default {
  name: "TaskDetails",
};
</script>

<style lang="scss" scoped>
.task-details {
  display: flex;
  background: #323741;
  max-width: 1000px;
  margin: 24px auto;
  border-radius: 4px;
  color: #ffffff;

  .task-modal-header {
    display: flex;
    padding-bottom: 24px;
    border-bottom: 1px solid transparentize(#ffffff, 0.8);
    margin-bottom: 16px;

    .task-name {
      font-size: 1.35em;
      font-weight: 700;
      width: 100%;
      padding: 4px 8px;
      outline: none;
      transition: background 400ms ease-in-out;
    }
  }

  .task-description {
    line-height: 125%;
    white-space: pre-wrap;
    outline: none;
    padding: 8px;
    transition: background 400ms ease-in-out;
  }

  .task-main {
    width: 100%;
    padding: 32px;

    .task-informations {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 0.875em;
      margin-bottom: 18px;
      padding: 0 8px;

      .buttons {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-left: auto;
      }
    }
  }

  .task-sidebar {
    display: flex;
    flex-direction: column;
    width: 420px;
    background: lighten(#323741, 1);
    padding: 36px 36px 24px;
    border-radius: 2px;

    .task-sidebar-title {
      font-size: 1.25em;
      padding-bottom: 24px;
      border-bottom: 1px solid transparentize(#ffffff, 0.8);
      margin-bottom: 16px;
    }

    .task-properties {
      display: flex;
      gap: 16px;
      flex-direction: column;
      font-size: 0.875em;

      .task-property {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .property-name {
          font-size: 1em;
        }
      }
    }
  }
}

.editable {
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.03);
}
</style>
