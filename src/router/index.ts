import { createRouter, createWebHistory } from "vue-router";
import BoardView from "@/views/BoardView.vue";
import CreateTask from "@/views/CreateTask.vue";
import TasksListView from "@/views/TasksListView.vue";
import TaskDetails from "@/views/TaskDetailsView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "tasks-list",
      component: TasksListView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/task/new",
      name: "create-task",
      component: CreateTask,
    },
    {
      path: "/board",
      name: "board",
      component: BoardView,
    },
    {
      path: "/task/:id",
      props: true,
      name: "task-details",
      component: TaskDetails,
    },
  ],
});

export default router;
