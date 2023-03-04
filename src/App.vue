<template>
  <div class="main">
    <nav class="navbar" v-if="$route.name !== 'login'">
      <router-link class="navbar__link" :to="{ name: 'tasks-list' }">
        All Tasks
      </router-link>
      <router-link class="navbar__link" :to="{ name: 'board' }">
        Board
      </router-link>
      <router-link class="navbar__link" :to="{ name: 'board' }">
        Projects
        <!-- todo: View for projects -->
      </router-link>
      <router-link class="navbar__link" :to="{ name: 'board' }">
        Users
        <!-- todo: View for users (list of users with assigned tasks) -->
      </router-link>
      <router-link class="navbar__button" :to="{ name: 'create-task' }"
        >Create New Task</router-link
      >
      <div class="user-profile">{{ loggedUserStore.user.name }}</div>
    </nav>
    <RouterView />
    <toast-notifications-component />
    <div id="popup-container"></div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import ToastNotificationsComponent from "@/components/ToastNotificationsComponent.vue";
import { useLoggedUserStore } from "@/stores/loggedUser";
import type { LoggedUserStoreInterface } from "@/stores/loggedUser";

const loggedUserStore: LoggedUserStoreInterface = useLoggedUserStore();
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 72px;
  background: #232832;
  z-index: 500;
  box-shadow: 0 0 4px rgb(0 0 0 / 60%);

  &__link {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 16px;
    color: #ffffff;
  }

  &__button {
    display: flex;
    align-items: center;
    height: 32px;
    color: #ffffff;
    padding: 8px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    transition: background 250ms ease-in-out;
    font-size: 0.875em;
    font-weight: 500;
    margin: 0 12px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .user-profile {
    display: flex;
    margin-left: auto;
    color: #ffffff;
    padding: 0 24px;
  }
}

.main {
  height: 100%;
  width: 100%;
}
</style>
