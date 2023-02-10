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

  constructor(
    private fb: FormBuilder // private dialogRef: MatDialogRef<TodoTaskFormComponent> // @Inject(MAT_DIALOG_DATA) public task: ToDoTask
  ) {}

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

  // TODO: nie przekazuj wartości formualrza do metody bo ją juz znasz :)
  // TODO: walidacja formularza
  handleAddTask() {
    if (this.todoForm.invalid) {
      return;
    }
    this.formDataEmitted.emit(this.todoForm.value);
    const editedData = this.todoForm.value;
    // editedData.id = this.task.id;
    // this.dialogRef.close(editedData);
    // this.dialogRef.close(this.todoForm.value);
  }

  handleAddTaskCancel() {
    // this.dialogRef.close();
  }
}
