import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ToDoTask } from '../../shared/models/todoTask.interface';
import { list } from '../../shared/models/list.interface';

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

  constructor() {}

  ngOnInit(): void {}

  handleTaskEdit(editedTask: ToDoTask) {
    this.editDataEmitted.emit(editedTask);
  }

  handle(event: any) {
    console.log(event);
    this.editDataEmitted.emit(event);
  }

  handleTaskDelete(formData: ToDoTask) {
    this.taskDeleteEmitted.emit(formData);
  }

  handleTaskFinished(formData: ToDoTask) {
    this.todoTask.isFinished = true;

    this.taskFinishedEmitted.emit(formData);
  }
}
