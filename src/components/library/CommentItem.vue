<template>
<div class="comment">
  <div class="comment__title">
    <span>{{ title }}</span>

    <IconButton size="sm" icon="notifications_off" />
  </div>

  <div class="comment__content">
    {{ $truncate(content, 160) }}
  </div>

  <div class="comment__details">
    {{ author }} @ yesterday 12:51
  </div>

</div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import IconButton from "./Button/IconButton.vue";
import {CommentInterface} from "../../interface/Comment";

defineProps<CommentInterface>();
</script>
<script lang="ts">
export default {
  name: "CommentItem"
}
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  flex-direction: column;
  gap: 6px;

  .comment__title {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
  }

  .comment__content {
    font-size: 0.875em;
  }

  .comment__details {
    width: 100%;
    text-align: right;
    font-size: 0.875em;
  }
}
</style>