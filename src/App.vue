<script lang="ts" setup>
import NavbarMain from "./components/partials/NavbarMain.vue";
import {useUserStore} from "./store/User";
import {useRouter} from "vue-router";

const router = useRouter();
const userStore = useUserStore();

if (userStore.data === null) {
  router.push({ name: 'loginView' })
}
</script>

<template>
  <NavbarMain v-if="userStore.data" />

  <RouterView />
</template>

<style scoped>
</style>
