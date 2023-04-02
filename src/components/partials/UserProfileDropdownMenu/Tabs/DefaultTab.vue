<template>
  <ListLayout
    direction="horizontal"
    :style="{
        justifyContent: 'space-between',
        padding: '8px 16px'
      }"
  >
    <div :style="{ fontWeight: 500 }">{{ userStore.data.name }}</div>

    <TaskVerticalProperties name="Status" :options="userStore.statuses" v-model="userStore.activityStatus" label="" />
  </ListLayout>

  <ListLayout gap="0" direction="vertical" :style="{ padding: '10px 16px 0' }">
    <template v-for="(button, index) of accountSettingsButtons">
      <ButtonComponent
        :tag="button.tag"
        variant="text"
        @click="button.onClick"
        :style="{ padding: '0', height: '50px' }"
        size="xl"
        full-width
        no-hover
        v-bind="button.attrs"
        v-on="button.events || {}"
      >
        <MaterialDesignIcon :icon="button.icon" />

        {{ button.label }}

        <div class="tabButton__text">
          {{ button.text }}
        </div>
      </ButtonComponent>

      <LineSeparator v-if="index < accountSettingsButtons.length - 1" />
    </template>
  </ListLayout>
</template>

<script lang="ts" setup>
import {computed, defineEmits, defineProps, ref} from 'vue';

import ListLayout from "../../../../components/library/ListLayout.vue";
import TaskVerticalProperties from "../../../../components/library/Task/TaskVerticalProperties.vue";
import ButtonComponent from "../../../library/Button/ButtonComponent.vue";
import LineSeparator from "../../../library/Utils/LineSeparator.vue";
import MaterialDesignIcon from "../../../library/Utils/MaterialDesignIcon.vue";
import {useThemeStore} from "../../../../store/Theme";
import {useUserStore} from "../../../../store/User";
import {Status} from "../../../../interface/User";
import {useRouter} from "vue-router";

defineProps<{
  modelValue: string;
  user: object;
  activityStatus: Status;
}>();

const emit = defineEmits(['update:modelValue']);

const router = useRouter();
const themeStore = useThemeStore();
const userStore = useUserStore();

const accountSettingsButtons = ref<{
  label: string;
  icon: string;
  tag?: 'router-link' | 'button';
  onClick?: () => void;
  text?: string;
  attrs?: object;
  events?: object;
}[]>([
  {
    label: 'Account Settings',
    icon: 'settings',
    type: 'link',
    tag: 'router-link',
    attrs: {
      to: { name: 'accountPersonalDetailsView' },
    },
  },
  {
    label: 'Theme',
    icon: 'dark_mode',
    text: computed(() => themeStore.activeThemeOptions.label),
    type: 'button',
    events: {
      click: () => emit('update:modelValue', 'theme'),
    }
  },
  {
    label: 'Logout',
    icon: 'logout',
    events: {
      click: () => {
        userStore.logout();
      }
    }
  },
]);
</script>
<script lang="ts">
export default {
  name: "defaultTab",
}
</script>

<style scoped>
.tabButton__text {
  color: #757575;
  margin-left: auto;
  font-size: 0.875em;
}
</style>