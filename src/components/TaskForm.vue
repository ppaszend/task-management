<template>
  <form class="form" @submit.prevent="() => emit('submit', task)">
    <div class="form__row">
      <label class="form__label" for="task-name">Name</label>
      <input id="task-name" v-model="task.name" />
    </div>

    <div class="form__row">
      <label class="form__label" for="task-description">Description</label>
      <textarea id="task-description" v-model="task.description"></textarea>
    </div>

    <div class="form__row">
      <label class="form__label" for="task-assignee">Assignee</label>
      <select id="task-assignee" v-model="task.assignee">
        <option :value="null">Unassigned</option>
        <option
          v-for="user of usersStore.users"
          :key="user.id"
          :value="user.id"
        >
          {{ user.name }}
        </option>
      </select>
    </div>

    <div class="form__row">
      <label class="form__label">Priority</label>
      <select v-model="task.priority">
        <option
          v-for="priority in prioritiesStore.priorities"
          :key="priority.id"
          :value="priority.id"
        >
          {{ priority.name }}
        </option>
      </select>
    </div>

    <button class="form__button">Create</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUsersStore } from "@/stores/users";
import type { UsersInterface } from "@/stores/users";
import type { PrioritiesInterface } from "@/stores/priorities";
import { usePrioritiesStore } from "@/stores/priorities";

interface Emits {
  (e: "submit", formData: Object): void;
}

const emit = defineEmits<Emits>();
const usersStore: UsersInterface = useUsersStore();
const prioritiesStore: PrioritiesInterface = usePrioritiesStore();

const task = ref({
  name: "",
  description: "",
  stage: 0,
  priority: 0,
  assignee: null,
});
</script>
<script lang="ts">
export default {
  name: "TaskForm",
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__header {
    font-size: 1.75em;
    color: #ffffff;
    padding-bottom: 24px;
    margin: 0 0 16px;
    border-bottom: 1px solid transparentize(#ffffff, 0.8);
  }

  &__row {
    display: flex;
    flex-direction: column;
    padding: 12px 0;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    width: 240px;
    border-radius: 24px;
    margin: 16px 0 0 auto;
    background: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
    font-size: 1.125em;
    height: 48px;
    transition: background 150ms ease-in-out;
    cursor: pointer;

    &:hover {
      background: transparentize(#ffffff, 0.8);
    }
  }

  &__label {
    color: #ffffff;
    height: 28px;
    font-size: 1.125em;
  }
}

input,
textarea,
select {
  height: 40px;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  outline: none;
  font-size: 1em;
  background: lighten(#323741, 3);
  color: #ffffff;
}

textarea {
  padding: 16px;
  resize: none;
  width: 100%;
  height: 200px;
  font-size: 1em;
  line-height: 150%;
}
</style>
