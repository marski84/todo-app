import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageApiService } from '../local-storage-api.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as uuid from 'uuid';
import { LoggerService } from 'src/app/logger.service';
import { ListOfTask } from '../../shared/models/listOfTask.interface';

// BOARD
@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.scss'],
})
export class TodoBoardComponent implements OnInit, OnDestroy {
  taksLists: ListOfTask[] = [];
  columnName: FormControl = new FormControl('', Validators.required);
  columnNameInputEnabled: boolean = false;
  onDestroy$ = new Subject<void>();

  get columnNameCtrl() {
    return this.columnName as FormControl;
  }

  constructor(
    private todoService: LocalStorageApiService,
    private fb: FormBuilder,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.todoService.data$
      .pipe(
        takeUntil(this.onDestroy$),
        tap((taskLists: ListOfTask[]) => (this.taksLists = taskLists))
      )
      .subscribe();

    this.todoService.getData();
    // .getTaskLists()

    // .pipe(tap((taskLists: ListOfTask[]) => (this.taksLists = taskLists)))
    // .subscribe();

    this.logger.logTasks();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  handleTaskListChange(data: ListOfTask) {
    const listIndex = this.taksLists.findIndex(
      (taskList) => taskList.listId === data.listId
    );

    if (listIndex === -1) {
      return;
    }
    this.taksLists[listIndex] = data;
    console.log(this.taksLists);

    this.saveTaskLists();
  }

  private saveTaskLists() {
    const taskListsCopy = [...this.taksLists];
    this.todoService.saveData(taskListsCopy).subscribe();
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
