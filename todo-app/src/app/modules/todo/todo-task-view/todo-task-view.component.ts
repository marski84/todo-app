import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoTask } from '../models/todoTask.interface';

@Component({
  selector: 'app-todo-task-view',
  templateUrl: './todo-task-view.component.html',
  styleUrls: ['./todo-task-view.component.scss'],
})
export class TodoTaskViewComponent implements OnInit {
  @Input() todoTask!: ToDoTask;
  @Output() editDataEmitted = new EventEmitter<ToDoTask>();
  @Output() taskDeleteEmitted = new EventEmitter<ToDoTask>();
  @Output() taskFinishedEmitted = new EventEmitter<ToDoTask>();

  isTaskFinished!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isTaskFinished = this.todoTask.isFinished;
  }

  handleTaskEdit(formData: ToDoTask) {
    this.editDataEmitted.emit(formData);
  }

  handleTaskDelete(formData: ToDoTask) {
    this.taskDeleteEmitted.emit(formData);
  }

  handleTaskFinished(formData: ToDoTask) {
    this.isTaskFinished = true;
    this.todoTask.isFinished = true;

    this.taskFinishedEmitted.emit(formData);
  }
}
