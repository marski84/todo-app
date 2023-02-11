import { Component, OnInit } from '@angular/core';
import { TodoApiService } from '../todo-api.service';
import { tap } from 'rxjs';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as uuid from 'uuid';
import { LoggerService } from 'src/app/logger.service';
import { ListOfTask } from '../../shared/models/listOfTask.interface';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table-list.component.html',
  styleUrls: ['./todo-table-list.component.scss'],
})
export class TodoTableListComponent implements OnInit {
  taksLists: ListOfTask[] = [];
  columnName: FormControl = new FormControl('', Validators.required);
  columnNameInputEnabled: boolean = false;

  get columnNameCtrl() {
    return this.columnName as FormControl;
  }

  constructor(
    private todoService: TodoApiService,
    private fb: FormBuilder,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.todoService
      .getTaskLists()
      .pipe(tap((taskLists: ListOfTask[]) => (this.taksLists = taskLists)))
      .subscribe();

    this.logger.logTasks();
  }

  handleTaskListChange(data: ListOfTask) {
    const listIndex = this.taksLists.findIndex(
      (taskList) => taskList.listId === data.listId
    );

    console.log(listIndex);

    if (listIndex === -1) {
      return;
    }
    this.taksLists[listIndex] = data;
    console.log(this.taksLists);

    this.saveTaskLists();
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
      const newTaskList: ListOfTask = {
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
