import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatisticsApiService {
  constructor() {}

  getTaskList() {
    const taskData = window.localStorage.getItem('taskLists');
    if (taskData) {
      const data = JSON.parse(taskData);
      return of(data);
    }
    return of('no data');
    // console.log(taskData);
  }
}
