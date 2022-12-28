import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ToDoTask } from '../models/todoTask.interface';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table-list.component.html',
  styleUrls: ['./todo-table-list.component.scss'],
})
export class TodoTableListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  lists = [
    {
      id: 1,
      name: 'To do',
      tasks: [
        {
          title: 'Get to work',
          description: 'Earn money',
          priority: '4',
        },
        {
          title: 'Pick up groceries',
          description: 'okok',
          priority: '1',
        },
        {
          title: 'Go home',
          description: 'come back home',
          priority: '5',
        },
        {
          title: 'Fall asleep',
          description: 'rest',
          priority: '2',
        },
      ],
    },

    {
      id: 2,
      name: 'In progress',
      tasks: [],
    },
  ];

  todo: ToDoTask[] = [
    {
      title: 'Get to work',
      description: 'Earn money',
      priority: '4',
    },
    {
      title: 'Pick up groceries',
      description: 'okok',
      priority: '1',
    },
    {
      title: 'Go home',
      description: 'come back home',
      priority: '5',
    },
    {
      title: 'Fall asleep',
      description: 'rest',
      priority: '2',
    },
  ];

  done = [];

  smth = [];

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

  handleAddNewTask(data: ToDoTask[]) {
    console.log(data);
  }

  addColumn() {}
}
