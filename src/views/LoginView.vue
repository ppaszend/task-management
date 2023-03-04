<template>
  <div class="login-form-wrapper">
    <form class="login-form" @submit.prevent="loginUser" novalidate>
      <h1 class="login-form-header">Login</h1>
      <text-input label="Email" type="email" v-model="email" />
      <text-input label="Password" type="password" v-model="password" />
      <small-button color="#ffffff" :style="{ height: '40px' }">
        Login
      </small-button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const userStore = useUserStore();

const email = ref("");
const password = ref("");

const loginUser = async () => {
  await userStore.loginUser(email.value, password.value);
};
</script>
<script lang="ts">
import TextInput from "@/components/form/TextInput.vue";
import SmallButton from "@/components/buttons/SmallButton.vue";
export default {
  name: "LoginView",
  components: { SmallButton, TextInput },
};
</script>

<style lang="scss" scoped>
.login-form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 72px);
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  padding: 30px;
  background: #323741;
  gap: 24px;
  border-radius: 2px;

  .login-form-header {
    margin: 0;
    color: #ffffff;
    font-size: 1.75em;
    text-align: center;
    font-weight: 500;
  }
}
</style>
