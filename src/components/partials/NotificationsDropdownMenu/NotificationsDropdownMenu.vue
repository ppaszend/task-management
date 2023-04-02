<template>
  <DropdownMenu @close="activeTab = 'default'" width="400px" :gap="28" arrow>
    <template #button>
      <IconButton size="xl" icon="notifications" badge="2" />
    </template>

    <template #default>
      <div v-show="activeTab === 'default'">
        <DefaultTab v-model="activeTab" />
      </div>

      <div v-show="activeTab === 'settings'">
        <SettingsTab @back="activeTab = 'default'" />
      </div>
    </template>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import DropdownMenu from "../../../components/library/Utils/DropdownMenu.vue";
import IconButton from "../../../components/library/Button/IconButton.vue";
import DefaultTab from "./Tabs/DefaultTab.vue";
import {ref} from "vue";
import SettingsTab from "./Tabs/SettingsTab.vue";

const activeTab = ref<'default' | 'settings'>('default');
</script>
<script lang="ts">

export default {
  name: "NotificationsDropdownMenu",
}
</script>

<style lang="scss" scoped>
</style>