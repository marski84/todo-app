import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TodoApiService } from '../todo-api.service';
import { tap } from 'rxjs';
import { dropList } from '../models/dropList.interface';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table-list.component.html',
  styleUrls: ['./todo-table-list.component.scss'],
})
export class TodoTableListComponent implements OnInit {
  taksLists: dropList[] = [];
  constructor(private todoService: TodoApiService) {}

  ngOnInit(): void {
    // window.localStorage.setItem('taskLists', JSON.stringify(this.taksLists));
    this.todoService
      .getTaskLists()
      .pipe(tap((taskLists) => (this.taksLists = taskLists)))
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
    this.todoService.saveTaskLists(this.taksLists).subscribe();
  }

  addColumn() {
    // const maxId = this.lists.sort((a, b) => b.listId - a.listId)[0].id;
    // console.log(maxId);
  }
}
