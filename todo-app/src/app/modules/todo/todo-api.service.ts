import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ListOfTask } from '../shared/models/listOfTask.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  constructor() {}

  getTaskLists() {
    const data = window.localStorage.getItem('taskLists');
    if (data) {
      return of(JSON.parse(data));
    }
    return of([]);
  }

  saveTaskLists(taskLists: ListOfTask[]) {
    console.log(taskLists);
    const dataToSave = JSON.stringify(taskLists);
    window.localStorage.setItem('taskLists', dataToSave);

    return of();
  }
}
