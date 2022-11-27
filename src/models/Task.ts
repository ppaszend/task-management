import type { User } from "@/models/User";
import type { Priority } from "@/models/Priority";

export interface Task {
  id: number;
  name: string;
  description: string;
  stage: number;
  priority: Priority["id"];
  assignee: User["id"] | null;
  project: number;
}
