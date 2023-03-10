import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoTask } from '../../shared/models/todoTask.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormContainerComponent } from '../form-container/form-container.component';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-todo-task-view',
  templateUrl: './todo-task-view.component.html',
  styleUrls: ['./todo-task-view.component.scss'],
})
export class TodoTaskViewComponent implements OnInit {
  @Input() todoTask!: ToDoTask;
  @Output() editDataEmitted = new EventEmitter<ToDoTask>();
  @Output() taskDeleteEmitted = new EventEmitter<ToDoTask>();
  @Output() taskFinishedEmitted = new EventEmitter<ToDoTask>();

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openEditDialog(data: ToDoTask) {
    const dialogSettings: MatDialogConfig<any> = {
      width: '300px',
      height: '300px',
      data: data,
    };

    const dialogRef = this.matDialog.open(
      FormContainerComponent,
      dialogSettings
    );

    dialogRef
      .afterClosed()
      .pipe(
        filter((value) => !!value),
        tap((value) => console.log(value)),
        tap((data: ToDoTask) => this.editDataEmitted.emit(data))
      )
      .subscribe();
  }

  handleTaskEdit(editedTask: ToDoTask) {
    this.editDataEmitted.emit(editedTask);
  }

  handle(event: ToDoTask) {
    console.log(event);
    this.editDataEmitted.emit(event);
  }

  handleTaskDelete(formData: ToDoTask) {
    this.taskDeleteEmitted.emit(formData);
  }

  handleTaskFinished(formData: ToDoTask) {
    this.todoTask.isFinished = true;

    this.taskFinishedEmitted.emit(formData);
  }
}

// 1. tutaj dorzuć otwarcie dialogu FormContainerComponent
// 2. FormContainerComponent przyjmuje task i przekazuje go do child form'
