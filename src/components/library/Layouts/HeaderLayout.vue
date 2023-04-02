<template>
<div class="userProfileDropdownMenu__header">
  <slot />
</div>
</template>

<script lang="ts">
export default {
  name: "HeaderLayout"
}
</script>

<style scoped>
.userProfileDropdownMenu__header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
}
</style>