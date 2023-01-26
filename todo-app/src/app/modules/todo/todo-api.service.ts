import { Injectable } from '@angular/core';
import { list } from '../shared/models/list.interface';
import { of } from 'rxjs';

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

  saveTaskLists(taskLists: list[]) {
    console.log(taskLists);
    const dataToSave = JSON.stringify(taskLists);
    window.localStorage.setItem('taskLists', dataToSave);

    return of();
  }
}
