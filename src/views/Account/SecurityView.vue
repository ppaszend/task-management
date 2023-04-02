<template>
  <ListLayout gap="24">
    <ListLayout gap="16">
      <h3 class="sectionName">Change password</h3>

      <ListLayout gap="24">
        <div class="form__column">
          <label>Current password</label>
          <InputText v-model="password.current" />
        </div>
        <div class="form__column">
          <label>New password</label>
          <InputText v-model="password.current" />
        </div>
        <div class="form__column">
          <label>Repeat new password</label>
          <InputText v-model="password.current" />
        </div>
      </ListLayout>

      <ButtonComponent>Change password</ButtonComponent>
    </ListLayout>

    <LineSeparator />

    <ListLayout gap="16">
      <h3 class="sectionName">Two-factor authentication</h3>
      <ButtonComponent>Setup two-factor authentication</ButtonComponent>
    </ListLayout>
  </ListLayout>

</template>

<script lang="ts" setup>
import {ref} from "vue";

import ListLayout from "../../components/library/ListLayout.vue";
import InputText from "../../components/library/Form/InputText.vue";
import ButtonComponent from "../../components/library/Button/ButtonComponent.vue";
import LineSeparator from "../../components/library/Utils/LineSeparator.vue";

const password = ref({
  current: '',
  new: '',
  newRepeat: '',
});
</script>
<script lang="ts">
export default {
  name: "SecurityView",
}
</script>

<style lang="scss" scoped>
.sectionName {
  margin: 0;
}
</style>