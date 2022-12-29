import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToDoTask } from '../models/todoTask.interface';

@Component({
  selector: 'todo-task-form',
  templateUrl: './todo-task-form.component.html',
  styleUrls: ['./todo-task-form.component.scss'],
})
export class TodoTaskFormComponent implements OnInit {
  todoForm!: FormGroup;

  priorityLevels = ['1', '2', '3', '4', '5'];

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
    private dialogRef: MatDialogRef<TodoTaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoTask
  ) {}

  ngOnInit(): void {
    console.log(this.data);

    if (this.data !== null) {
      this.initForm(this.data);
      return;
    }
    this.initForm();
  }

  private initForm(formData?: ToDoTask) {
    this.todoForm = this.fb.group({
      title: [formData?.title, Validators.required],
      description: [formData?.description, Validators.required],
      priority: [formData?.priority, Validators.required],
    });
  }

  handleAddTask(data: ToDoTask) {
    if (this.data) {
      const editedData = data;
      data.id = this.data.id;
      this.dialogRef.close(editedData);
      console.log(editedData);
    }
    this.dialogRef.close(data);
  }

  handleAddTaskCancel() {
    this.dialogRef.close();
  }
}
