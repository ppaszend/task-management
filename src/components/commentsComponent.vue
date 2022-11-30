<template>
  <div class="comments">
    <div class="comments-header">Comments</div>
    <div class="comments-body">
      <div class="comment-item comment-add-form">
        <div class="comment-properties">Add new comment</div>
        <div class="comment-text" contenteditable="true"></div>
        <button class="comment-button">Save</button>
      </div>
      <div class="comment-item" v-for="comment in comments" :key="comment.id">
        <div class="comment-properties">
          <div>Added: <b>Yesterday</b></div>
          <div>
            Author: <b>{{ usersStore.getUserById(comment.author).name }}</b>
          </div>
        </div>
        <div class="comment-text">
          {{ comment.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { UsersInterface } from "@/stores/users";
import { useUsersStore } from "@/stores/users";

const usersStore: UsersInterface = useUsersStore();

const comments = ref([
  {
    id: 0,
    text: "Ut mi dui, feugiat id suscipit ut, efficitur sit amet tortor. Vestibulum et pretium odio. Donec id ante quam. Integer sit amet nisl eget orci eleifend congue in eget ligula. Vivamus cursus blandit eros ac hendrerit. Suspendisse eu eros aliquet, convallis tortor vitae, efficitur eros. In eleifend neque non vulputate sollicitudin. In hac habitasse platea dictumst. Curabitur non eros massa.",
    author: 1,
  },
  {
    id: 1,
    text: "Donec feugiat gravida euismod. Suspendisse sed vestibulum nisl. Sed eu elementum ante. Cras at egestas justo. Nullam vitae sagittis ante. Cras eu turpis dapibus lacus ullamcorper mollis feugiat tempus tortor.",
    author: 0,
  },
]);
</script>
<script lang="ts">
export default {
  name: "CommentsComponent",
};
</script>

<style lang="scss" scoped>
.comments {
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin-top: 32px;
  gap: 8px;

  .comments-header {
    font-size: 1.5em;
  }

  .comments-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .comment-item {
    display: flex;
    flex-direction: column;
    padding: 14px 20px;
    gap: 6px;
    border-left: 1px solid #ffffff;
    background: transparentize(#ffffff, 0.99);

    .comment-properties {
      display: flex;
      gap: 12px;
      font-size: 0.85em;
    }

    .comment-text {
      font-size: 0.975em;
    }

    .comment-button {
      display: flex;
      width: fit-content;
      margin-left: auto;
      margin-right: 2px;
      padding: 8px 12px;
      background: transparent;
      border: 1px solid #ffffff;
      color: #ffffff;
      border-radius: 2px;
      cursor: pointer;
      transition: background 250ms ease-in-out;

      &:hover {
        background: transparentize(#ffffff, 0.8);
      }
    }
  }

  .comment-add-form {
    .comment-properties {
      font-size: 0.9em;
    }

    .comment-text {
      background: transparentize(#ffffff, 0.8);
      padding: 6px;
      outline: none;
      border-radius: 2px;
      min-height: 60px;
    }
  }
}
</style>
