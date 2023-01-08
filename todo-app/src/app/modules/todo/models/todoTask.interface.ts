import { taskPriority } from './taskPriority.enum';
export interface ToDoTask {
  id: string;
  title: string;
  description: string;
  priority: taskPriority;
}
