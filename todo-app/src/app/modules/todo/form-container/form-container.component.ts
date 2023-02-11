import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoTaskFormComponent } from '../todo-task-form/todo-task-form.component';
import { filter, map, tap } from 'rxjs';
import { ToDoTask } from '../../shared/models/todoTask.interface';
import { FormHandlerComponent } from './form-handler/form-handler.component';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  @Input() task?: ToDoTask;
  @Output() taskEmitted = new EventEmitter<ToDoTask>();

  ngOnInit(): void {}

  handleOpenDialog() {
    const dialogSettings: MatDialogConfig<any> = {
      width: '300px',
      height: '300px',
      data: this.task,
    };

    const dialogRef = this.matDialog.open(FormHandlerComponent, dialogSettings);

    dialogRef
      .afterClosed()
      .pipe(
        filter((value) => !!value),
        tap((value) => console.log(value)),
        tap((data: ToDoTask) => this.taskEmitted.emit(data))
      )
      .subscribe();
  }
}
