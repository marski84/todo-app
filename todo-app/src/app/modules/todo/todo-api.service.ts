import { Injectable } from '@angular/core';
import { dropListData } from './models/dropListData.interface';
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

  saveTaskLists(taskLists: dropListData[]) {
    console.log(taskLists);
    const dataToSave = JSON.stringify(taskLists);
    window.localStorage.setItem('taskLists', dataToSave);

    // const value = JSON.stringify(dropListData);
    return of(true);
  }
}
