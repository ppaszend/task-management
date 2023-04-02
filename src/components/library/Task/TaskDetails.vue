<template>
  <Box :style="{ padding: '26px 20px' }">
    <ListLayout :style="{ alignItems: 'flex-start' }" direction="horizontal">
      <ListLayout :style="{ gap: '20px', width: '100%' }">
        <ListLayout :style="{ justifyContent: 'space-between' }" direction="horizontal">
          <h1 class="taskDetails__name">{{ task.name }}</h1>

          <ListLayout :style="{ gap: '10px' }" direction="horizontal">
            <template v-if="!editMode">
              <ButtonComponent
                @click="editMode = true"
                size="sm"
                variant="outlined"
                color="primary"
              >
                Edit
              </ButtonComponent>

              <ButtonComponent
                size="sm"
                variant="outlined"
                color="danger"
              >
                Remove
              </ButtonComponent>
            </template>

            <template v-if="editMode">
              <ButtonComponent
                @click="editMode = false"
                size="sm"
                variant="outlined"
                color="success"
              >
                Save changes
              </ButtonComponent>

              <ButtonComponent
                @click="editMode = false"
                size="sm"
                variant="outlined"
                color="danger"
              >
                Cancel
              </ButtonComponent>
            </template>
          </ListLayout>
        </ListLayout>

        <template v-if="editMode">
          <InputRichText v-model="taskDescription" />
        </template>

        <template v-if="!editMode">
          <div class="taskDetails__description">
            {{ task.description }}
          </div>

          <div>
            <TabsLayout
              :tabs="[
                      { name: 'Comments', value: 'comments' },
                      { name: 'Updates', value: 'updates' },
                    ]"
            >
              <template #comments>
                <ListLayout
                  :style="{ gap: '12px' }"
                >
                  <template v-for="(comment, index) in comments">
                    <CommentItem :comment="comment"/>

                    <LineSeparator v-if="index < comments.length - 1" />
                  </template>

                  <div class="taskDetails__commentsEmpty" v-if="comments.length === 0">
                    There are no comments for this task
                  </div>
                </ListLayout>
              </template>

              <template #updates>
                updates1
              </template>
            </TabsLayout>
          </div>
        </template>
      </ListLayout>

      <div v-if="!editMode" :style="{ width: '320px' }">
        <div class="taskDetails__actions">
          <slot name="actions" />
        </div>
        <ListLayout :style="{ gap: '16px' }">
          <div class="taskDetails__property">
            Priority
            <InputSelect v-model="taskProperties.priority" :options="prioritiesStore.options" />
          </div>
          <div class="taskDetails__property">
            Assignee
            <InputSelect v-model="taskProperties.assignee" :options="participantsStore.options" />
          </div>
          <div class="taskDetails__property">
            Project
            <InputSelect v-model="taskProperties.project" :options="projectsStore.options" />
          </div>
          <div class="taskDetails__property">
            Type
            <InputSelect v-model="taskProperties.type" :options="typesStore.options" />
          </div>
          <div class="taskDetails__property">
            Estimation
            <InputSelect v-model="taskProperties.estimation" :options="prioritiesStore.options" />
          </div>
          <div class="taskDetails__property">
            Spent time
            <InputSelect v-model="taskProperties.spentTime" :options="prioritiesStore.options" />
          </div>
        </ListLayout>
      </div>
    </ListLayout>
  </Box>
</template>

<script lang="ts" setup>
import {usePrioritiesStore} from "../../../store/Priorities";
import {useParticipantsStore} from "../../../store/Participants";
import {useProjectsStore} from "../../../store/Projects";
import {useTypesStore} from "../../../store/Types";
import {ref} from "vue";
import {CommentInterface} from "../../../interface/Comment";
import {getCommentsForTask} from "../../../mocks/CommentsMock";
import TaskInterface from "../../../interface/Task";
import Box from "../Box.vue";
import ListLayout from "../ListLayout.vue";
import ButtonComponent from "../Button/ButtonComponent.vue";
import InputRichText from "../Form/InputRichText.vue";
import TabsLayout from "../Layouts/TabsLayout.vue";
import CommentItem from "../CommentItem.vue";
import LineSeparator from "../Utils/LineSeparator.vue";
import IconButton from "../Button/IconButton.vue";
import InputSelect from "../Form/InputSelect.vue";

const props = defineProps<{
  task: TaskInterface;
}>();

const taskProperties = ref(props.task.properties);

const prioritiesStore = usePrioritiesStore();
const participantsStore = useParticipantsStore();
const projectsStore = useProjectsStore();
const typesStore = useTypesStore();

const editMode = ref(false);
const comments = ref<CommentInterface[]>(getCommentsForTask(props.task.id));
const taskDescription = ref(props.task.description);
</script>
<script lang="ts">
export default {
  name: "TaskDetails"
}
</script>

<style lang="scss" scoped>
.taskDetails__name {
  font-size: 1.5em;
  font-weight: 500;
  margin: 0;
}

.taskDetails__description {
  line-height: 24px;
}

.taskDetails__actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 29px;
  margin-bottom: 20px;
}

.taskDetails__property {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.taskDetails__commentsEmpty {
  display: flex;
  justify-content: center;
  padding: 12px 0;
  font-size: 1.125em;
}
</style>