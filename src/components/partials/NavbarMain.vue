<template>
  <div class="navbarShadow"></div>
  <nav class="navbarWrapper">
    <Box :style="{ padding: '8px 24px', borderRadius: '0', borderWidth: '0 0 1px' }">
      <div class="navbar">
        <div>
          <ListLayout
            :style="{
              gap: '0'
            }"
            direction="horizontal"
          >
            <RouterLink :to="{ name: 'recentUpdatedView' }">
              <ButtonComponent
                variant="text"
                size="md"
                :style="{ fontWeight: router.currentRoute.value.name === 'recentUpdatedView' ? '500' : undefined }"
              >
                Recent Updated
              </ButtonComponent>
            </RouterLink>

            <RouterLink :to="{ name: 'boardView' }">
              <ButtonComponent
                variant="text"
                size="md"
                :style="{ fontWeight: router.currentRoute.value.name === 'boardView' ? '500' : undefined }"
              >
                Boards
              </ButtonComponent>
            </RouterLink>

<!--            <ButtonComponent
              variant="text"
              size="md"
              :style="{ fontWeight: router.currentRoute.value.name === 'chartsView' ? '500' : undefined }"
            >
              Charts
            </ButtonComponent>-->
          </ListLayout>
        </div>

        <ListLayout>
          <ListLayout direction="horizontal" gap="12">
            <NotificationsDropdownMenu />

            <LineSeparator vertical />

            <UserProfileDropdownMenu />
          </ListLayout>
        </ListLayout>
      </div>
    </Box>
  </nav>
</template>

<script lang="ts" setup>
import Box from "../library/Box.vue";
import ButtonComponent from "../library/Button/ButtonComponent.vue";
import ListLayout from "../library/ListLayout.vue";
import LineSeparator from "../library/Utils/LineSeparator.vue";
import UserProfileDropdownMenu from "./UserProfileDropdownMenu/UserProfileDropdownMenu.vue";
import NotificationsDropdownMenu from "./NotificationsDropdownMenu/NotificationsDropdownMenu.vue";
import {useRouter} from "vue-router";

const router = useRouter();
</script>
<script lang="ts">
export default {
  name: "NavbarMain"
}
</script>

<style lang="scss" scoped>
.navbarShadow {
  width: 100%;
  height: 64px;
  margin-bottom: 24px;
}

.navbarWrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 150;

  .box {
    height: 100%;
  }
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
}
</style>