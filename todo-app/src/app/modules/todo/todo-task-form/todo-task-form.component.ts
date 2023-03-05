import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToDoTask } from '../../shared/models/todoTask.interface';
import { taskPriority } from '../../shared/models/taskPriority.enum';

// TODO: wydzielić logikę formularza od logiki popupu
// tzn rozbić na 2 komponenty -> form nie powinien wiedzieć gdzie jest osadzony
@Component({
  selector: 'app-todo-task-form',
  templateUrl: './todo-task-form.component.html',
  styleUrls: ['./todo-task-form.component.scss'],
})
export class TodoTaskFormComponent implements OnInit {
  @Input() task?: ToDoTask;
  @Output() formDataEmitted: EventEmitter<ToDoTask> =
    new EventEmitter<ToDoTask>();
  todoForm!: FormGroup;

  priorityLevels: taskPriority[] = [
    taskPriority.HIGH,
    taskPriority.MEDIUM,
    taskPriority.LOW,
  ];

  get titleCtrl() {
    return this.todoForm.get('title') as FormControl;
  }
  get descriptionCtrl() {
    return this.todoForm.get('description') as FormControl;
  }
  get priorityCtrl() {
    return this.todoForm.get('priority') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.task);
    if (this.task !== null) {
      this.initForm(this.task);
      return;
    }
    this.initForm();
  }

  private initForm(formData?: ToDoTask) {
    this.todoForm = this.fb.group({
      title: [formData?.title, Validators.required],
      description: [formData?.description, Validators.required],
      priority: [formData?.priority, Validators.required],
      isFinished: [false],
    });
  }

  handleConfirm() {
    if (this.todoForm.invalid) {
      return;
    }

    if (this.task) {
      const editedData = this.todoForm.value;
      editedData.id = this.task.id;
      this.formDataEmitted.emit(this.todoForm.value);
    }
    this.formDataEmitted.emit(this.todoForm.value);
  }

  handleCancel() {}
}
