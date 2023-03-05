import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToDoTask } from '../../shared/models/todoTask.interface';
import { TodoTaskFormComponent } from '../todo-task-form/todo-task-form.component';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public task: ToDoTask,
    private dialogRef: MatDialogRef<TodoTaskFormComponent>
  ) {
    console.log(task);
  }

  ngOnInit(): void {}

  handleTaskEmitted(task: ToDoTask) {
    console.log(task);
    this.dialogRef.close(task);
  }
}
