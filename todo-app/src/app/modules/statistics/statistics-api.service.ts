import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { taskMapping } from './models/taskListMapping.interface';
import { dropListData } from '../todo/models/dropListData.interface';

@Injectable({
  providedIn: 'root',
})
export class StatisticsApiService {
  constructor() {}

  getTaskList(): Observable<taskMapping[] | []> {
    const taskData = window.localStorage.getItem('taskLists');
    if (taskData) {
      const data = JSON.parse(taskData);

      const dataMapping = this.createMapping(data);
      console.log(dataMapping);
      console.log(typeof dataMapping);

      return of(dataMapping);
    }
    return of([]);
  }

  private createMapping(taskListData: dropListData[]) {
    const listDataMapping: taskMapping[] = taskListData.map((taskList) => ({
      name: taskList.name,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }));

    listDataMapping.forEach((list, index) => {
      const listKeys = Object.keys(list);

      const tasksPriority = taskListData[index].tasks.map(
        (taskList) => taskList.priority
      );

      console.log(listDataMapping[index]);

      listKeys.forEach((listKey) => {
        // get each list key and check if it is on priority list
        tasksPriority.forEach((taskPriority) => {
          if (taskPriority === listKey) {
            listDataMapping[index][listKey] += 1;
          }
        });
      });
    });
    // console.log(listDataMapping);
    console.log(listDataMapping);

    return listDataMapping;
  }
}
