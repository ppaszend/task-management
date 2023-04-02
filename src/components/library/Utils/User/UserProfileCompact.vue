<template>
<div class="userProfileCompact">
  <img
    v-if="user.avatar"
    :src="user.avatar"
    class="userProfileCompact__avatar"
    alt=""
  />

  <IconButton
    v-if="!user.avatar"
    size="xl"
    icon="person"
  />

  <div class="userProfileCompact__group">
    <div class="userProfileCompact__name">
      <span>
        {{ user.name }}
      </span>

      <DotIndicator :color="userStore.activeStatus.indicator.color" />
    </div>

    <div class="userProfileCompact__email">
      {{ user.email }}
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useUserStore } from "../../../../store/User";
import { UserData } from "../../../../interface/User";

import IconButton from "../../Button/IconButton.vue";
import DotIndicator from "../../DotIndicator.vue";

const userStore = useUserStore();

defineProps<{
  user: UserData
}>();
</script>
<script lang="ts">
export default {
  name: "UserProfileCompact"
}
</script>

<style lang="scss" scoped>
.userProfileCompact {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  .userProfileCompact__group {
    display: flex;
    flex-direction: column;
  }

  .userProfileCompact__name {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .userProfileCompact__avatar {
    width: 40px;
    height: 40px;
  }

  .userProfileCompact__email {
    font-size: 0.75em;
    color: #616161;
  }
}
</style>