import { ToDoTask } from './todoTask.interface';

export interface ListOfTask {
  listId: string;
  name: string;
  tasks: ToDoTask[];
}
