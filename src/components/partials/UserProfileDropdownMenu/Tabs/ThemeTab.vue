<template>
  <ListLayout gap="0" direction="vertical" :style="{ padding: '10px 16px 0' }">
    <HeaderLayout>
      <IconButton size="xl" icon="arrow_back_ios" @click="$emit('back')" />

      <div class="themeTab__title">Change Theme</div>
    </HeaderLayout>

    <template v-for="(theme, index) in themeStore.options">
      <ButtonComponent
        variant="text"
        :style="{
          height: '50px',
          paddingLeft: theme.value !== themeStore.active ? '34px' : '0',
          justifyContent: 'flex-start',
        }"
        @click="setTheme(theme)"
        size="xl"
        no-hover
      >
        <MaterialDesignIcon v-if="theme.value === themeStore.active" size="xl" icon="check" />

        {{ theme.label }}
      </ButtonComponent>

      <LineSeparator v-if="index < themeStore.options.length - 1" />
    </template>
  </ListLayout>
</template>

<script lang="ts" setup>
import {defineEmits} from 'vue';

import ListLayout from "../../../library/ListLayout.vue";
import ButtonComponent from "../../../library/Button/ButtonComponent.vue";
import LineSeparator from "../../../library/Utils/LineSeparator.vue";
import IconButton from "../../../library/Button/IconButton.vue";
import HeaderLayout from "../../../library/Layouts/HeaderLayout.vue";
import MaterialDesignIcon from "../../../library/Utils/MaterialDesignIcon.vue";
import {useThemeStore} from "../../../../store/Theme";

const themeStore = useThemeStore();

const emit = defineEmits(['back']);

const setTheme = (theme) => {
  themeStore.setActiveTheme(theme.value);
  emit('back');
};
</script>
<script lang="ts">

export default {
  name: "ThemeTab",
}
</script>

<style scoped>
.themeTab__title {
  font-weight: 500;
}
</style>