import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TodoApiService } from '../todo-api.service';
import { tap } from 'rxjs';
import { dropList } from '../models/dropList.interface';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as uuid from 'uuid';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table-list.component.html',
  styleUrls: ['./todo-table-list.component.scss'],
})
export class TodoTableListComponent implements OnInit {
  taksLists: dropList[] = [];
  columnName: FormControl = new FormControl('', Validators.required);
  columnNameInputEnabled: boolean = false;

  get columnNameCtrl() {
    return this.columnName as FormControl;
  }

  constructor(private todoService: TodoApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // window.localStorage.setItem('taskLists', JSON.stringify(this.taksLists));
    this.todoService
      .getTaskLists()
      .pipe(tap((taskLists: dropList[]) => (this.taksLists = taskLists)))
      .subscribe();
  }

  drop(event: CdkDragDrop<any>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.saveTaskLists();
  }

  handleTaskListModification(data: dropList) {
    const listIndex = this.taksLists.findIndex(
      (taskList) => taskList.listId === data.listId
    );
    if (listIndex !== -1) {
      this.taksLists[listIndex] = data;
      this.saveTaskLists();
    }
  }

  private saveTaskLists() {
    const taskListsCopy = [...this.taksLists];
    this.todoService.saveTaskLists(taskListsCopy).subscribe();
  }

  addColumn() {
    console.log(this.columnNameCtrl.value);
    this.columnNameInputEnabled = !this.columnNameInputEnabled;

    if (this.columnNameCtrl.value) {
      const id = uuid.v4();
      const newTaskList: dropList = {
        listId: String(id),
        name: this.columnNameCtrl.value,
        tasks: [],
      };

      this.taksLists.push(newTaskList);
      this.saveTaskLists();
      this.columnNameCtrl.reset();
    }
  }

  handleShowCloseButton() {
    this.columnNameInputEnabled = !this.columnNameInputEnabled;
    this.columnNameCtrl.reset();
  }
}
