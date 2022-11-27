import { defineStore } from "pinia";
import { ref } from "vue";
import type { Project } from "@/models/Project";
import projectsMock from "@/mocks/projects";

export interface ProjectsStoreInterface {
  projects: Project[];
  getProjectById: Function;
}

export const useProjectsStore = defineStore("projects", () => {
  const projects = ref<Project[]>(projectsMock);

  const getProjectById = (id: Project["id"]): Project | undefined =>
    projects.value.find((project) => project.id === id);

  return {
    projects,
    getProjectById,
  };
});
