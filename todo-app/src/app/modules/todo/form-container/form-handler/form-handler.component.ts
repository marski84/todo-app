import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoTask } from 'src/app/modules/shared/models/todoTask.interface';
import { TodoTaskFormComponent } from '../../todo-task-form/todo-task-form.component';

@Component({
  selector: 'app-form-handler',
  templateUrl: './form-handler.component.html',
  styleUrls: ['./form-handler.component.scss'],
})
export class FormHandlerComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ToDoTask>,
    @Inject(MAT_DIALOG_DATA) public task?: ToDoTask
  ) {}

  ngOnInit(): void {}

  handleFormDataEmitted(data: ToDoTask) {
    this.dialogRef.close(data);
  }
}
