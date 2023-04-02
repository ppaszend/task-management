<template>
  <ListLayout gap="0" direction="vertical" :style="{ padding: '10px 16px' }">
    <HeaderLayout>
      <IconButton size="xl" icon="arrow_back_ios" @click="$emit('back')" />

      <div class="themeTab__title">Manage notifications</div>
    </HeaderLayout>

    <ListLayout :style="{ gap: '22px', padding: '8px 0 4px' }">
      <InputSwitch v-model="settings.sound">Sound</InputSwitch>
      <InputSwitch v-model="settings.tabTitle">Tab title</InputSwitch>

      <LineSeparator />

      <InputSwitch v-model="settings.taskStatusChanged">Task status changed</InputSwitch>
      <InputSwitch v-model="settings.newComment">New comment</InputSwitch>
      <InputSwitch v-model="settings.mentions">Mentions</InputSwitch>
    </ListLayout>
  </ListLayout>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from "vue";

import HeaderLayout from "../../../library/Layouts/HeaderLayout.vue";
import InputSwitch from "../../../../components/library/Form/InputSwitch.vue";
import ListLayout from "../../../library/ListLayout.vue";
import IconButton from "../../../library/Button/IconButton.vue";
import LineSeparator from "../../../library/Utils/LineSeparator.vue";

const settings = ref({
  sound: false,
  tabTitle: false,
  taskStatusChanged: false,
  newComment: false,
  mentions: false,
})

defineEmits(['back']);
</script>
<script lang="ts">
export default {
  name: "SettingsTab",
}
</script>

<style scoped>

</style>