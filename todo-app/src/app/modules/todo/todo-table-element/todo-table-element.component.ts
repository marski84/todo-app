import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoTask } from '../../shared/models/todoTask.interface';
import * as uuid from 'uuid';
import { ListOfTask } from '../../shared/models/listOfTask.interface';

@Component({
  selector: 'app-todo-table-element',
  templateUrl: './todo-table-element.component.html',
  styleUrls: ['./todo-table-element.component.scss'],
})
export class TodoTableElemmentComponent implements OnInit {
  @Input() dropList!: ListOfTask;

  @Output() onTaskChangeEmitted = new EventEmitter<ListOfTask>();

  constructor() {}

  ngOnInit(): void {}

  onItemDropped(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    const taskListCopy = this.prepareListCopy(this.dropList);

    this.onTaskChangeEmitted.emit(taskListCopy);
  }

  handleAddNewTask(toDoTask: ToDoTask) {
    if (toDoTask) {
      toDoTask.id = uuid.v4();
      this.dropList.tasks.push(toDoTask);
      const taskListCopy = this.prepareListCopy(this.dropList);

      this.onTaskChangeEmitted.emit(taskListCopy);
    }
  }

  handleTaskEdit(formData: ToDoTask) {
    this.findAndUpdateEditedData(formData);
  }

  handleTaskDelete(formData: ToDoTask) {
    const taskIndex = this.findTaskIndexInList(formData);
    this.dropList.tasks.splice(taskIndex, 1);

    const taskListCopy = this.prepareListCopy(this.dropList);
    this.onTaskChangeEmitted.emit(taskListCopy);
  }

  handleTaskFinished(formData: ToDoTask) {
    const taskListCopy = this.prepareListCopy(this.dropList);
    this.onTaskChangeEmitted.emit(taskListCopy);
  }

  private findAndUpdateEditedData(task: ToDoTask) {
    const taskIndex = this.findTaskIndexInList(task);
    this.dropList.tasks[taskIndex] = task;

    const taskListCopy = this.prepareListCopy(this.dropList);
    this.onTaskChangeEmitted.emit(taskListCopy);
  }

  private findTaskIndexInList(formData: ToDoTask) {
    const taskIndex = this.dropList.tasks.findIndex(
      (task) => task.id === formData.id
    );
    return taskIndex;
  }

  private prepareListCopy(list: ListOfTask) {
    const taskListCopy = JSON.parse(JSON.stringify(list));
    return taskListCopy;
  }
}
