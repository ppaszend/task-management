import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/models/User";

export interface UsersInterface {
  users: User[];
  getUserById: Function;
}

export const useUsersStore = defineStore("users", () => {
  const users = ref<User[]>([
    {
      id: 0,
      name: "John Kowalski",
      slug: "john.kowalski",
    },
    {
      id: 1,
      name: "Adam Mickiewicz",
      slug: "adam.mickiewicz",
    },
  ]);

  const getUserById = (id: User["id"]): User | undefined =>
    users.value.find((user) => user.id === id);

  return { users, getUserById };
});
