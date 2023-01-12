import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoTaskFormComponent } from '../todo-task-form/todo-task-form.component';
import { filter, map, mapTo, tap } from 'rxjs';
import { ToDoTask } from '../models/todoTask.interface';
import { dropList } from '../models/dropList.interface';
import * as uuid from 'uuid';

@Component({
  selector: 'app-todo-table-element',
  templateUrl: './todo-table-element.component.html',
  styleUrls: ['./todo-table-element.component.scss'],
})
export class TodoTableElemmentComponent implements OnInit {
  @Input() dropList!: dropList;
  @Input() listName!: string;
  @Output() onItemDroppedEmitted = new EventEmitter();
  @Output() onTaskAddedEmitted = new EventEmitter<dropList>();
  @Output() onTaskEditedEmitted = new EventEmitter<dropList>();
  @Output() onTaskDeletedEmitted = new EventEmitter<dropList>();

  addTaskDialogSettings: MatDialogConfig<TodoTaskFormComponent> = {
    width: '300px',
    height: '300px',
  };

  constructor(private addTaskDialog: MatDialog) {}

  ngOnInit(): void {}

  onItemDropped(event: CdkDragDrop<any>) {
    this.onItemDroppedEmitted.emit(event);
  }

  handleAddNewTask() {
    const dialogRef = this.addTaskDialog.open(
      TodoTaskFormComponent,
      this.addTaskDialogSettings
    );

    dialogRef
      .afterClosed()
      .pipe(
        filter((value) => !!value),
        tap((value) => console.log(value)),
        map((value) => {
          const newTask = value;
          newTask.id = uuid.v4();
          return newTask;
        }),
        tap((value) => this.dropList.tasks.push(value)),
        tap((value) =>
          this.onTaskAddedEmitted.emit(
            JSON.parse(JSON.stringify(this.dropList))
          )
        )
      )
      .subscribe();
  }

  handleTaskEdt(formData: ToDoTask) {
    const editTaskDialogSettings: MatDialogConfig<any> = {
      width: '300px',
      height: '300px',
      data: formData,
    };

    const dialogRef = this.addTaskDialog.open(
      TodoTaskFormComponent,
      editTaskDialogSettings
    );
    dialogRef
      .afterClosed()
      .pipe(
        filter((value) => !!value),
        map((value) => this.findAndUpdateEditedData(value)),
        tap((value) => console.log(value))
      )
      .subscribe();
  }

  handleTaskDelete(formData: ToDoTask) {
    const taskIndex = this.findTaskInListData(formData);
    this.dropList.tasks.splice(taskIndex, 1);
    const taskListCopy = JSON.parse(JSON.stringify(this.dropList));
    this.onTaskDeletedEmitted.emit(taskListCopy);
  }

  handleTaskFinished(formData: ToDoTask) {
    console.log(formData);
    const taskListCopy = JSON.parse(JSON.stringify(this.dropList));

    this.onTaskEditedEmitted.emit(taskListCopy);
  }

  private findAndUpdateEditedData(formData: ToDoTask) {
    const taskIndex = this.findTaskInListData(formData);
    this.dropList.tasks[taskIndex] = formData;
    const taskListCopy = JSON.parse(JSON.stringify(this.dropList));

    this.onTaskEditedEmitted.emit(taskListCopy);
  }

  private findTaskInListData(formData: ToDoTask) {
    const taskIndex = this.dropList.tasks.findIndex(
      (task) => task.id === formData.id
    );
    return taskIndex;
  }
}
