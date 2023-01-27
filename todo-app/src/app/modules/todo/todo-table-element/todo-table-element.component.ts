import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoTaskFormComponent } from '../todo-task-form/todo-task-form.component';
import { filter, map, tap } from 'rxjs';
import { ToDoTask } from '../../shared/models/todoTask.interface';
import * as uuid from 'uuid';
import { list } from '../../shared/models/list.interface';

@Component({
  selector: 'app-todo-table-element',
  templateUrl: './todo-table-element.component.html',
  styleUrls: ['./todo-table-element.component.scss'],
})
export class TodoTableElemmentComponent implements OnInit {
  @Input() dropList!: list;

  @Output() onItemDroppedEmitted = new EventEmitter<CdkDragDrop<any>>();
  // uporścić do jednego emitera - ponieważ ten komponent sam ogarnia to w jakis sposób się zmienia aparent dostaje tylko gotową wersje po zmianach
  @Output() onTaskChangeEmitted = new EventEmitter<list>();

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  onItemDropped(event: CdkDragDrop<any>) {
    this.onItemDroppedEmitted.emit(event);
  }

  handleAddNewTask() {
    const dialogSettings: MatDialogConfig<TodoTaskFormComponent> = {
      width: '300px',
      height: '300px',
    };
    const dialogRef = this.matDialog.open(
      TodoTaskFormComponent,
      dialogSettings
    );

    dialogRef
      .afterClosed()
      .pipe(
        filter((value) => !!value),
        tap((value) => console.log(value)),
        map((value) => {
          value.id = uuid.v4();
          return value;
        }),
        tap((value) => this.dropList.tasks.push(value)),
        tap((value) =>
          this.onTaskChangeEmitted.emit(
            JSON.parse(JSON.stringify(this.dropList))
          )
        )
      )
      .subscribe();
  }

  // przerzucił bym na poziom komponentu TodoTaskViewComponent
  handleTaskEdt(formData: ToDoTask) {
    this.findAndUpdateEditedData(formData);
  }

  handleTaskDelete(formData: ToDoTask) {
    const taskIndex = this.findTaskIndexInList(formData);
    this.dropList.tasks.splice(taskIndex, 1);

    const taskListCopy = JSON.parse(JSON.stringify(this.dropList));
    this.onTaskChangeEmitted.emit(taskListCopy);
  }

  handleTaskFinished(formData: ToDoTask) {
    const taskListCopy = JSON.parse(JSON.stringify(this.dropList));
    this.onTaskChangeEmitted.emit(taskListCopy);
  }

  private findAndUpdateEditedData(task: ToDoTask) {
    const taskIndex = this.findTaskIndexInList(task);
    this.dropList.tasks[taskIndex] = task;

    const taskListCopy = JSON.parse(JSON.stringify(this.dropList));
    this.onTaskChangeEmitted.emit(taskListCopy);
  }

  // nazwa sugeruje że zwracasz obiekt
  private findTaskIndexInList(formData: ToDoTask) {
    const taskIndex = this.dropList.tasks.findIndex(
      (task) => task.id === formData.id
    );
    return taskIndex;
  }
}
