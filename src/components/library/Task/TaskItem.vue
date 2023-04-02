<template>
  <div class="taskWrapper">
    <Box>
      <div class="task">
        <div class="header">
          <RouterLink :to="{ name: 'taskDetailsView', params: { id: task.id } }">
            <div class="header__title">
                {{ task.name }}
            </div>
          </RouterLink>
          <div class="header__buttons">
            <IconButton size="md" icon="open_in_full" @click="modalVisibility = true" />

            <DropdownMenu align="right">
              <template #button>
                <IconButton size="md" icon="more_vert" />
              </template>
              <template #default>
                <ButtonComponent variant="text" :style="{ justifyContent: 'flex-start' }" full-width>
                  <IconButton size="md" icon="edit" />
                  Edit
                </ButtonComponent>

                <ButtonComponent @click="$emit('clone')" variant="text" :style="{ justifyContent: 'flex-start' }" full-width>
                  <IconButton size="md" icon="content_copy" />
                  Clone
                </ButtonComponent>

                <ButtonComponent @click="$emit('remove')" variant="text" :style="{ justifyContent: 'flex-start' }" full-width>
                  <IconButton size="md" icon="delete" />
                  Delete
                </ButtonComponent>
              </template>
            </DropdownMenu>
          </div>
        </div>

        <div class="description">
          {{ $truncate(task.description, 200) }}
        </div>

        <LineSeparator />

        <div class="properties">
          <TaskVerticalProperties name="project" label="Project" v-model="properties.project" :options="projectOptions" />

          <TaskVerticalProperties name="assignee" label="Assignee" v-model="properties.assignee" :options="assigneeOptions" />

          <TaskVerticalProperties name="priority" label="Priority" v-model="properties.priority" :options="priorityOptions" />
        </div>
      </div>
    </Box>
  </div>

  <TaskDetailsModal
    v-model:visibility="modalVisibility"
    :task="task"
  />
</template>

<script lang="ts" setup>
import {defineProps, ref} from 'vue';
import Box from "../Box.vue";
import IconButton from "../Button/IconButton.vue";
import LineSeparator from "../Utils/LineSeparator.vue";
import TaskVerticalProperties from "./TaskVerticalProperties.vue";
import DropdownMenu from "../Utils/DropdownMenu.vue";
import ButtonComponent from "../Button/ButtonComponent.vue";
import TaskDetailsModal from "../Modals/TaskDetailsModal.vue";
import TaskInterface from "../../../interface/Task";

const props = withDefaults(defineProps<{
  task: TaskInterface,
}>(), {});

defineEmits(['remove', 'clone']);

const modalVisibility = ref(false);

const properties = ref(props.task.properties);

const projectOptions = [
  { label: 'Core', value: 'core' },
  { label: 'Helpdesk', value: 'helpdesk' },
  { label: 'CRM', value: 'crm' }
];

const assigneeOptions = [
  { label: 'John Kowalski', value: 'jkowalski@gmail.com' },
  { label: 'Dan Nowak', value: 'dnowas@gmail.com' },
  { label: 'Adam Mickiewicz', value: 'amickiewicz@gmail.com' },
]

const priorityOptions = [
  { label: 'ShowStopper', value: 'showstopper', indicator: { color: '#F44336' } },
  { label: 'Critical', value: 'critical', indicator: { color: '#FFBDBD' } },
  { label: 'Major', value: 'major', indicator: { color: '#FAFF0D' } },
  { label: 'Normal', value: 'normal', indicator: { color: '#4CAF50' } },
]

</script>
<script lang="ts">
export default {
  name: "TaskItem",
}
</script>

<style lang="scss" scoped>
.taskWrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.task {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.header {
  display: flex;
  justify-content: space-between;

  .header__title {
    font-size: 1.25em;
  }

  .header__buttons {
    display: flex;
    gap: 10px;

    .material-symbols-outlined {
      font-size: 16px;
    }
  }
}

.description {
  font-size: 1em;
  line-height: 1.5em;
}

.properties {
  display: flex;
  gap: 24px;
}
</style>