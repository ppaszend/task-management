<template>
  <Box :style="{
    width: '986px',
    margin: '0 auto',
    padding: '24px',
  }">
    <ListLayout direction="horizontal" gap="0" :style="{alignItems: 'flex-start'}">
      <ListLayout>
        <div class="menu">
          <slot name="menu" />
        </div>
      </ListLayout>

      <div class="menuContent">
        <slot />
      </div>
    </ListLayout>
  </Box>
</template>

<script lang="ts" setup>
import Box from "../../../components/library/Box.vue";
import ListLayout from "../../../components/library/ListLayout.vue";</script>
<script lang="ts">
export default {
  name: "BoxWithSidebar"
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #D9D9D9;
  min-width: 280px;
  padding: 12px 0;
}

.menuContent {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px 24px 12px 40px;
  width: 100%;
  gap: 24px;
}

.form__column {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
}
</style>