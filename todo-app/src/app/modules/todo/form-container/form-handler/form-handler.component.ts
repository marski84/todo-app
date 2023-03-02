import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ToDoTask } from 'src/app/modules/shared/models/todoTask.interface';
import { TodoTaskFormComponent } from '../../todo-task-form/todo-task-form.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-handler',
  templateUrl: './form-handler.component.html',
  styleUrls: ['./form-handler.component.scss'],
})
export class FormHandlerComponent implements OnInit, OnDestroy {
  @Input() task?: ToDoTask;
  @Output() taskEmitted = new EventEmitter<ToDoTask>();
  private onDestroy$ = new Subject<void>();

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.task);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private handleFormDataEmitted(editedTask: ToDoTask) {
    this.taskEmitted.emit(editedTask);
  }

  handleOpenDialog() {
    const dialogSettings: MatDialogConfig<TodoTaskFormComponent> = {
      width: '300px',
      height: '300px',
    };

    const dialogRef = this.matDialog.open(
      TodoTaskFormComponent,
      dialogSettings
    );

    dialogRef.componentInstance.task = this.task;

    dialogRef.componentInstance.formDataEmitted
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((taskData) => this.handleFormDataEmitted(taskData));
  }
}
