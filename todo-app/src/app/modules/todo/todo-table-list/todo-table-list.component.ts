import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table-list.component.html',
  styleUrls: ['./todo-table-list.component.scss'],
})
export class TodoTableListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  smth = ['a', 'b', 'c', 'd'];

  drop(
    event: CdkDragDrop<string[]>
    // CdkDragDrop<string[]>
  ) {
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
    console.log(this.todo);
  }

  addColumn() {}
}
