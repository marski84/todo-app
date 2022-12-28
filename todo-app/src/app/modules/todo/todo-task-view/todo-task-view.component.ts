import { Component, Input, OnInit } from '@angular/core';
import { ToDoTask } from '../models/todoTask.interface';

@Component({
  selector: 'app-todo-task-view',
  templateUrl: './todo-task-view.component.html',
  styleUrls: ['./todo-task-view.component.scss'],
})
export class TodoTaskViewComponent implements OnInit {
  @Input() todoTaskData!: ToDoTask;

  constructor() {}

  ngOnInit(): void {}
}
