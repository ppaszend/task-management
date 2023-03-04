import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/models/User";

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);
  const authenticationToken = ref<string | null>(null);

  const loginUser = async (email: string, password: string) => {
    const data = await fetch("http://127.0.0.1:5173/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  };

  return { user, authenticationToken, loginUser };
});
