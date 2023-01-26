import { ToDoTask } from './todoTask.interface';

export interface list {
  listId: string;
  name: string;
  tasks: ToDoTask[];
}
