<template>
  <DropdownMenu @close="activeTab = 'default'" width="400px" :gap="28" arrow>
    <template #button>
      <UserProfileCompact
        :user="userStore.data"
        :status="userStore.activityStatus"
      />
    </template>

    <template #default>
      <div v-show="activeTab === 'default'">
        <DefaultTab v-model="activeTab" :user="userStore.data" :activityStatus="userStore.activityStatus" />
      </div>

      <div v-show="activeTab === 'theme'">
        <ThemeTab @back="activeTab = 'default'" />
      </div>
    </template>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useUserStore } from "../../../store/User";

import DropdownMenu from "../../library/Utils/DropdownMenu.vue";
import UserProfileCompact from "../../library/Utils/User/UserProfileCompact.vue";
import DefaultTab from "./Tabs/DefaultTab.vue";
import ThemeTab from "./Tabs/ThemeTab.vue";
import {useRouter} from "vue-router";

const userStore = useUserStore();

const activeTab = ref<'default' | 'theme'>('default');
</script>
<script lang="ts">
export default {
  name: "UserProfileDropdownMenu",
}
</script>

<style scoped>

</style>