import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoTask } from '../../shared/models/todoTask.interface';
import * as uuid from 'uuid';
import { ListOfTask } from '../../shared/models/listOfTask.interface';
import { filter, map, tap } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormContainerComponent } from '../form-container/form-container.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() dropList!: ListOfTask;

  @Output() onTaskChangeEmitted = new EventEmitter<ListOfTask>();

  constructor(private matDialog: MatDialog) {}

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
    console.log(toDoTask);

    if (!toDoTask) {
      return;
    }
    toDoTask.id = uuid.v4();
    this.dropList.tasks.push(toDoTask);
    const taskListCopy = this.prepareListCopy(this.dropList);

    this.onTaskChangeEmitted.emit(taskListCopy);
  }

  openEditDialog() {
    const dialogSettings: MatDialogConfig<FormContainerComponent> = {
      width: '300px',
      height: '300px',
    };

    const dialogRef = this.matDialog.open(
      FormContainerComponent,
      dialogSettings
    );

    dialogRef
      .afterClosed()
      .pipe(
        // filter((value) => !!value),
        tap((value) => console.log(value)),
        map((data) => {
          console.log(data);

          this.handleAddNewTask(data);
        })
      )
      .subscribe();
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
