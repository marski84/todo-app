import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoTaskFormComponent } from '../todo-task-form/todo-task-form.component';
import { filter, map, tap } from 'rxjs';
import { ToDoTask } from '../../shared/models/todoTask.interface';
import { list } from '../../shared/models/list.interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  @Output() taskEditEmitted = new EventEmitter<ToDoTask>();

  handleOpenEditDialog(formData: ToDoTask) {
    const editTaskDialogSettings: MatDialogConfig<any> = {
      width: '300px',
      height: '300px',
      data: formData,
    };

    const dialogRef = this.matDialog.open(
      TodoTaskFormComponent,
      editTaskDialogSettings
    );

    dialogRef
      .afterClosed()
      .pipe(
        filter((value) => !!value),
        // map((value) => this.findAndUpdateEditedData(value)),
        tap((value) => console.log(value)),
        tap((data: ToDoTask) => this.taskEditEmitted.emit(data))
      )
      .subscribe();
  }

  ngOnInit(): void {}
}
