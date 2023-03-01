import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialog,
} from '@angular/material/dialog';
import { ToDoTask } from 'src/app/modules/shared/models/todoTask.interface';
import { TodoTaskFormComponent } from '../../todo-task-form/todo-task-form.component';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-form-handler',
  templateUrl: './form-handler.component.html',
  styleUrls: ['./form-handler.component.scss'],
})
export class FormHandlerComponent implements OnInit {
  @Input() task?: ToDoTask;

  @Output() taskEmitted = new EventEmitter<ToDoTask>();

  constructor(
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<ToDoTask>,
    @Inject(MAT_DIALOG_DATA) public toDotask?: ToDoTask
  ) {}

  ngOnInit(): void {
    console.log(this.task);
  }

  handleFormDataEmitted(data: ToDoTask) {
    this.dialogRef.close(data);
  }

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
