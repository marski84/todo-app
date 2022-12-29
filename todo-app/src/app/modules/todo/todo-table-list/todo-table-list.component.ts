import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ToDoTask } from '../models/todoTask.interface';
import * as uuid from 'uuid';
import { dropListData } from '../models/dropListData.interface';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table-list.component.html',
  styleUrls: ['./todo-table-list.component.scss'],
})
export class TodoTableListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  lists: dropListData[] = [
    {
      listId: uuid.v4(),
      name: 'To do',
      tasks: [
        {
          id: uuid.v4(),
          title: 'Get to work',
          description: 'Earn money',
          priority: '4',
        },
        {
          id: uuid.v4(),
          title: 'Pick up groceries',
          description: 'okok',
          priority: '1',
        },
        {
          id: uuid.v4(),
          title: 'Go home',
          description: 'come back home',
          priority: '5',
        },
        {
          id: uuid.v4(),
          title: 'Fall asleep',
          description: 'rest',
          priority: '2',
        },
      ],
    },

    {
      listId: uuid.v4(),
      name: 'In progress',
      tasks: [],
    },
  ];

  todo: ToDoTask[] = [
    {
      id: uuid.v4(),
      title: 'Get to work',
      description: 'Earn money',
      priority: '4',
    },
    {
      id: uuid.v4(),
      title: 'Pick up groceries',
      description: 'okok',
      priority: '1',
    },
    {
      id: uuid.v4(),
      title: 'Go home',
      description: 'come back home',
      priority: '5',
    },
    {
      id: uuid.v4(),
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

  addColumn() {
    // const maxId = this.lists.sort((a, b) => b.listId - a.listId)[0].id;
    // console.log(maxId);
  }
}
