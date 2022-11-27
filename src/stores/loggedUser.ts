import { defineStore } from "pinia";
import { ref } from "vue";
import type { LoggedUser } from "@/models/LoggedUser";
import loggedUser from "@/mocks/loggedUser";

export interface LoggedUserStoreInterface {
  user: LoggedUser;
}

export const useLoggedUserStore = defineStore("loggedUser", () => {
  const user = ref<LoggedUser>(loggedUser);

  return { user };
});
