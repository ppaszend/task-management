<template>
  <div class="comments">
    <div class="comments-header">Comments</div>
    <div class="comments-body">
      <form @submit.prevent="addComment" class="comment-item comment-add-form">
        <div class="comment-properties">Add new comment</div>
        <div
          class="comment-text"
          contenteditable="true"
          ref="commentContentElement"
          @input="commentContentInput"
          @keydown.enter.ctrl="addComment"
        />
        <button class="comment-button">Save</button>
      </form>
      <div
        class="comment-item"
        v-for="comment in sortedComments"
        :key="comment.id"
      >
        <div class="comment-properties">
          <tool-tip
            :label="
              comment.created.toLocaleString(userLanguage, {
                dateStyle: 'long',
                timeStyle: 'short',
              })
            "
            :key="refreshCounter"
          >
            <div>
              Added: <b>{{ humanizeDate(comment.created) }}</b>
            </div>
          </tool-tip>
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
import { computed, ref } from "vue";
import type { UsersInterface } from "@/stores/users";
import { useUsersStore } from "@/stores/users";
import ToolTip from "@/components/ToolTip.vue";

const usersStore: UsersInterface = useUsersStore();

const commentContentElement = ref<HTMLElement | null>(null);
let commentContent = ref<string>("");
let refreshCounter = ref<number>(0);
let userLanguage = navigator.language;

setInterval(() => {
  refreshCounter.value++;
}, 60000);

const comments = ref([
  {
    id: 0,
    text: "Ut mi dui, feugiat id suscipit ut, efficitur sit amet tortor. Vestibulum et pretium odio. Donec id ante quam. Integer sit amet nisl eget orci eleifend congue in eget ligula. Vivamus cursus blandit eros ac hendrerit. Suspendisse eu eros aliquet, convallis tortor vitae, efficitur eros. In eleifend neque non vulputate sollicitudin. In hac habitasse platea dictumst. Curabitur non eros massa.",
    author: 1,
    created: new Date(2022, 10, 5, 19, 32),
  },
  {
    id: 1,
    text: "Donec feugiat gravida euismod. Suspendisse sed vestibulum nisl. Sed eu elementum ante. Cras at egestas justo. Nullam vitae sagittis ante. Cras eu turpis dapibus lacus ullamcorper mollis feugiat tempus tortor.",
    author: 0,
    created: new Date(2022, 4, 11, 15, 11),
  },
  {
    id: 2,
    text: "Donec feugiat gravida euismod. Suspendisse sed vestibulum nisl. Sed eu elementum ante. Cras at egestas justo. Nullam vitae sagittis ante. Cras eu turpis dapibus lacus ullamcorper mollis feugiat tempus tortor.",
    author: 0,
    created: new Date(2022, 11, 4, 19, 25),
  },
  {
    id: 3,
    text: "Donec feugiat gravida euismod. Suspendisse sed vestibulum nisl. Sed eu elementum ante. Cras at egestas justo. Nullam vitae sagittis ante. Cras eu turpis dapibus lacus ullamcorper mollis feugiat tempus tortor.",
    author: 0,
    created: new Date(2022, 11, 4, 18, 54),
  },
  {
    id: 4,
    text: "Donec feugiat gravida euismod. Suspendisse sed vestibulum nisl. Sed eu elementum ante. Cras at egestas justo. Nullam vitae sagittis ante. Cras eu turpis dapibus lacus ullamcorper mollis feugiat tempus tortor.",
    author: 0,
    created: new Date(2022, 11, 4, 18, 30),
  },
  {
    id: 5,
    text: "Donec feugiat gravida euismod. Suspendisse sed vestibulum nisl. Sed eu elementum ante. Cras at egestas justo. Nullam vitae sagittis ante. Cras eu turpis dapibus lacus ullamcorper mollis feugiat tempus tortor.",
    author: 0,
    created: new Date(2020, 11, 4, 18, 30),
  },
]);

const sortedComments = computed(() => {
  return [...comments.value].sort(
    (a, b) => b.created.getTime() - a.created.getTime()
  );
});

const commentContentInput = () => {
  if (commentContentElement.value) {
    commentContent.value = commentContentElement.value.innerHTML;
  }
};

const addComment = () => {
  if (commentContentElement.value) {
    commentContent.value = commentContentElement.value.innerHTML;
    comments.value.push({
      id: Math.max(...comments.value.map(({ id }) => id)) + 1,
      text: commentContentElement.value.innerText,
      author: 0,
      created: new Date(),
    });
    commentContentElement.value.innerHTML = "";
  }
};

const humanizeDate = (date: Date) => {
  const offsetFromNow = new Date().getTime() - date.getTime();
  const secondOffset = 1000;
  const minuteOffset = 60 * secondOffset;
  const hourOffset = 60 * minuteOffset;
  const dayOffset = 24 * hourOffset;
  const weekOffset = 7 * dayOffset;
  const monthOffset = dayOffset * 30;
  const yearOffset = monthOffset * 12;
  const toleration = 1;

  if (offsetFromNow < minuteOffset - toleration * secondOffset) {
    return "Just now";
  } else if (offsetFromNow < hourOffset - toleration * minuteOffset) {
    const minutesAgo = Math.floor(offsetFromNow / minuteOffset);
    if (minutesAgo <= 1) {
      return `1 minute ago`;
    } else {
      return `${minutesAgo} minutes ago`;
    }
  } else if (offsetFromNow < dayOffset - toleration * hourOffset) {
    const hoursAgo = Math.floor(offsetFromNow / hourOffset);
    if (hoursAgo <= 1) {
      return `1 hour ago`;
    } else {
      return `${hoursAgo} hours ago`;
    }
  } else if (offsetFromNow <= weekOffset - toleration * dayOffset) {
    const daysAgo = Math.floor(offsetFromNow / dayOffset);
    if (daysAgo <= 1) {
      return `Yesterday`;
    } else {
      return `${daysAgo} days ago`;
    }
  } else if (offsetFromNow < monthOffset - toleration * weekOffset) {
    const weeksAgo = Math.floor(offsetFromNow / weekOffset);
    if (weeksAgo <= 1) {
      return `1 week ago`;
    } else {
      return `${weeksAgo} weeks ago`;
    }
  } else if (offsetFromNow < yearOffset - toleration * monthOffset) {
    const monthsAgo = Math.floor(offsetFromNow / monthOffset);
    if (monthsAgo <= 1) {
      return `1 month ago`;
    } else {
      return `${monthsAgo} months ago`;
    }
  } else {
    const yearsAgo = Math.floor(offsetFromNow / yearOffset);
    if (yearsAgo <= 1) {
      return `1 year ago`;
    } else {
      return `${yearsAgo} years ago`;
    }
  }
};
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
