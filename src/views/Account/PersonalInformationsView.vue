<template>
<UserProfileCompact :name="userStore.data.name" :email="userStore.data.email" :avatar="userStore.data.avatar" />

<ListLayout gap="24">
  <ListLayout direction="horizontal">
    <div class="form__column">
      <label>Full name</label>
      <InputText v-model="user.name" />
    </div>
    <div class="form__column">
      <label>E-mail</label>
      <InputText v-model="user.email" />
    </div>
  </ListLayout>

  <ListLayout direction="horizontal">
    <div class="form__column">
      <label>Phone number</label>
      <InputText v-model="user.phoneNumber" />
    </div>
    <div class="form__column">
      <label>Title</label>
      <InputText v-model="user.title" />
    </div>
  </ListLayout>
</ListLayout>

<ButtonComponent @click="saveUserData">Save</ButtonComponent>
</template>

<script lang="ts" setup>
import {ref} from "vue";

import {UserData} from "../../interface/User";
import {useUserStore} from "../../store/User";
import BoxWithSidebar from "../../components/library/Layouts/BoxWithSidebar.vue";
import UserProfileCompact from "../../components/library/Utils/User/UserProfileCompact.vue";
import ListLayout from "../../components/library/ListLayout.vue";
import InputText from "../../components/library/Form/InputText.vue";
import ButtonComponent from "../../components/library/Button/ButtonComponent.vue";

const userStore = useUserStore();
const user = ref<UserData>(Object.assign({}, userStore.data));

const saveUserData = () => {
  userStore.data = user.value
};
</script>
<script lang="ts">
export default {
  name: "PersonalInformationsView",
}
</script>

<style lang="scss" scoped>
.form__column {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
}
</style>