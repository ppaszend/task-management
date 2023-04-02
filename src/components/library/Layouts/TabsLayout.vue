<template>
  <div class="tabsLayout">
    <div class="tabsLayout__header">
      <ButtonComponent
        v-for="tab in tabs"
        :style="{
          padding: '0 10px',
          height: '26px',
          borderWidth: '0 0 1px',
          borderBottomColor: activeTab === tab.value ? '#212121': '#D9D9D9',
          borderRadius: '0',
          zIndex: '100',
        }"
        variant="text"
        size="sm"
        @click="activeTab = tab.value"
      >
        {{ tab.name }}
      </ButtonComponent>

      <div class="tabsLayout__bottomLine"></div>
    </div>

    <div class="tabsLayout__content">
      <div v-for="tab in tabs" v-show="tab.value === activeTab">
        <slot :name="tab.value"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, ref} from 'vue';
import ButtonComponent from "../Button/ButtonComponent.vue";

defineProps<{
  tabs: {
    name: string;
    value: string;
  }[];
}>();

const activeTab = ref('comments');
</script>
<script lang="ts">
export default {
  name: "TabsLayout"
}
</script>

<style lang="scss" scoped>
.tabsLayout {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .tabsLayout__header {
    display: flex;
    position: relative;

    .tabsLayout__bottomLine {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #D9D9D9;
    }
  }
}
</style>