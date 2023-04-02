<template>
<Box
  :style="{
    width: '400px',
    margin: '20px auto',
  }"
>
  <ListLayout gap="12">
    <ListLayout gap="4">
      E-mail
      <InputText v-model="userPass.email" />
    </ListLayout>

    <ListLayout gap="4">
      Password
      <InputText v-model="userPass.password" />
    </ListLayout>

    <ButtonComponent variant="outlined">Login</ButtonComponent>
  </ListLayout>
</Box>
</template>

<script lang="ts" setup>
import Box from "../components/library/Box.vue";
import InputText from "../components/library/Form/InputText.vue";
import ListLayout from "../components/library/ListLayout.vue";
import ButtonComponent from "../components/library/Button/ButtonComponent.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useUserStore} from "../store/User";

const userStore = useUserStore();
const router = useRouter();
if (userStore.data !== null) {
  router.push({ name: 'recentUpdatedView' })
}

const userPass = ref({
  email: '',
  password: '',
});
</script>
<script lang="ts">
export default {
  name: "LoginView",
}
</script>

<style scoped>

</style>