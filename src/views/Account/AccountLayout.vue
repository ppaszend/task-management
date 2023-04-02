<template>
<BoxWithSidebar>
  <template #menu>
    <h1 class="menu__title">Account settings</h1>

    <router-link
      :to="{ name: 'accountPersonalDetailsView' }"
      :class="{
        'menu__item': true,
        'menu__item--active': router.currentRoute.value.name === 'accountPersonalDetailsView',
    }">
      <material-design-icon icon="person" size="xl" />
      Personal informations
    </router-link>

    <router-link
      :to="{ name: 'accountSecurityView' }"
      :class="{
        'menu__item': true,
        'menu__item--active': router.currentRoute.value.name === 'accountSecurityView',
    }">
      <material-design-icon icon="security" size="xl" />
      Security
    </router-link>

    <router-link
      :to="{ name: 'accountNotificationsView' }"
      :class="{
        'menu__item': true,
        'menu__item--active': router.currentRoute.value.name === 'accountNotificationsView',
    }">
      <material-design-icon icon="notifications" size="xl" />
      Notifications
    </router-link>

    <button
      @click="userStore.logout()"
      :style="{ marginTop: 'auto' }"
      :class="{
        'menu__item': true,
    }">
      <material-design-icon icon="logout" size="xl" />
      Logout
    </button>
  </template>

  <template #default>
    <router-view></router-view>
  </template>
</BoxWithSidebar>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";
import BoxWithSidebar from "../../components/library/Layouts/BoxWithSidebar.vue";
import MaterialDesignIcon from "../../components/library/Utils/MaterialDesignIcon.vue";
import {useUserStore} from "../../store/User";

const router = useRouter();
const userStore = useUserStore();
</script>
<script lang="ts">
export default {
  name: "AccountLayout",
}
</script>

<style lang="scss" scoped>
.menu__title {
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 24px;
}

.menu__item {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
  transition: background 300ms ease-in-out;
  padding: 0;

  &:hover {
    background: var(--color-hover);
  }

  &.menu__item--active {
    border-right: 3px solid #039BE5;
    margin-right: -2px;
  }
}
</style>