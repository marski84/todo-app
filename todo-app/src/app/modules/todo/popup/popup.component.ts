import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoTaskFormComponent } from '../todo-task-form/todo-task-form.component';
import { filter, map, tap } from 'rxjs';
import { ToDoTask } from '../../shared/models/todoTask.interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  handleOpenDialog(formData: ToDoTask) {
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
        tap((value) => console.log(value))
      )
      .subscribe();
  }

  ngOnInit(): void {}
}
