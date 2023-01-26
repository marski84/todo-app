import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { taskMapping } from './models/taskListMapping.interface';
import { list } from '../shared/models/list.interface';

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

      return of(dataMapping);
    }
    return of([]);
  }

  private createMapping(taskListData: list[]) {
    const listDataMapping: taskMapping[] = taskListData.map((taskList) => ({
      name: taskList.name,
      priority: {
        Low: 0,
        Medium: 0,
        High: 0,
      },
    }));

    listDataMapping.forEach((list, index) => {
      const listKeys = Object.keys(list.priority);

      const tasksPriority = taskListData[index].tasks.map(
        (taskList) => taskList.priority
      );

      listKeys.forEach((listKey) => {
        // get each list key and check if it is on priority list
        tasksPriority.forEach((taskPriority) => {
          if (taskPriority === listKey) {
            const key = listKey;
            listDataMapping[index].priority[key] += 1;
          }
        });
      });
    });

    return listDataMapping;
  }
}
