<template>
  <task-details :id="props.id" />
</template>

<script lang="ts" setup>
import TaskDetails from "@/components/TaskDetails.vue";

interface Props {
  id: string;
}

const props = defineProps<Props>();
</script>
<script lang="ts">
export default {
  name: "TaskDetailsView",
};
</script>

<style lang="scss" scoped></style>
