import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoTaskComponent } from '../add-todo-task/add-todo-task.component';
import { mapTo, tap } from 'rxjs';
import { ToDoTask } from '../models/todoTask.interface';
import { dropListData } from '../models/dropListData.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-table-element.component.html',
  styleUrls: ['./todo-table-element.component.scss'],
})
export class TodoTableElemmentComponent implements OnInit {
  @Input() dropListData!: dropListData;
  @Input() listName!: string;
  @Output() onItemDroppedEmitted = new EventEmitter();
  @Output() onTaskAddedEmitted = new EventEmitter();

  constructor(private addTaskDialog: MatDialog) {}

  addTaskDialogSettings: MatDialogConfig<TodoTaskComponent> = {
    width: '300px',
    height: '300px',
  };

  ngOnInit(): void {}

  onItemDropped(event: CdkDragDrop<any>) {
    this.onItemDroppedEmitted.emit(event);
  }

  handleAddNewTask() {
    const dialogRef = this.addTaskDialog.open(
      TodoTaskComponent,
      this.addTaskDialogSettings
    );

    dialogRef
      .afterClosed()
      .pipe(
        tap((value) => this.dropListData.tasks.push(value)),
        tap((value) => this.onTaskAddedEmitted.emit(this.dropListData))
      )
      .subscribe((value) => console.log(value));
  }
}
