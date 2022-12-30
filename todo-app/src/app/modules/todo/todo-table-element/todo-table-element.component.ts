import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoTaskFormComponent } from '../todo-task-form/todo-task-form.component';
import { filter, map, mapTo, tap } from 'rxjs';
import { ToDoTask } from '../models/todoTask.interface';
import { dropListData } from '../models/dropListData.interface';
import * as uuid from 'uuid';
import { TodoApiService } from '../todo-api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-table-element.component.html',
  styleUrls: ['./todo-table-element.component.scss'],
})
export class TodoTableElemmentComponent implements OnInit {
  @Input() dropListData!: dropListData;
  @Input() listName!: string;
  @Output() onItemDroppedEmitted = new EventEmitter();
  @Output() onTaskAddedEmitted = new EventEmitter<dropListData>();
  @Output() onTaskEditedEmitted = new EventEmitter<dropListData>();

  constructor(private addTaskDialog: MatDialog) {}

  addTaskDialogSettings: MatDialogConfig<TodoTaskFormComponent> = {
    width: '300px',
    height: '300px',
  };

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
          newTask.id = uuid.v4;
          return newTask;
        }),
        tap((value) => this.dropListData.tasks.push(value)),
        tap((value) => this.onTaskAddedEmitted.emit(this.dropListData))
      )
      .subscribe((value) => console.log(value));
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
        // tap((value) => this.onTaskAddedEmitted.emit(this.dropListData))
      )
      .subscribe();
  }

  private findAndUpdateEditedData(formData: ToDoTask) {
    const taskIndex = this.dropListData.tasks.findIndex(
      (task) => task.id === formData.id
    );

    if (taskIndex !== -1) {
      this.dropListData.tasks[taskIndex] = formData;
      this.onTaskEditedEmitted.emit(this.dropListData);
    }
  }
}
