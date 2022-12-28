import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToDoTask } from '../models/todoTask.interface';

@Component({
  selector: 'add-todo-task',
  templateUrl: './add-todo-task.component.html',
  styleUrls: ['./add-todo-task.component.scss'],
})
export class TodoTaskComponent implements OnInit {
  todoForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    priority: ['', Validators.required],
  });

  priorityLevels = [1, 2, 3, 4, 5];

  get titleCtrl() {
    return this.todoForm.get('title') as FormControl;
  }
  get descriptionCtrl() {
    return this.todoForm.get('description') as FormControl;
  }
  get priorityCtrl() {
    return this.todoForm.get('priority') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TodoTaskComponent>
  ) {}

  ngOnInit(): void {}

  handleAddTask(data: ToDoTask) {
    console.log(data);

    this.dialogRef.close(data);
  }

  handleAddTaskCancel() {
    this.dialogRef.close();
  }
}
