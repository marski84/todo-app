import { Component, Input, OnInit } from '@angular/core';
import { dropListData } from '../models/dropListData.interface';
import { ToDoTask } from '../models/todoTask.interface';
import { taskMapping } from '../models/taskListMapping.interface';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.scss'],
})

// * Po wejściu zliczamy ile zadań jest w takiej kolumnie(dzielimy zliczenie na poszczególne priortety -> ile z wysokim, ile z niskim...) i wyświetlamy informacje o każdej kolumnie w osobnych `<mat-card>`
export class StatisticsViewComponent implements OnInit {
  @Input() taskListData!: taskMapping[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.taskListData);

    // const taskListMapping = this.createMapping(this.taskListData);
    // console.log(taskListMapping);
    // taskListMapping.map((taskList, mappingIndex) => {
    //   const taskKeys = Object.keys(taskList);
    //   const sortedPriorities = this.taskListData[mappingIndex].tasks
    //     .sort((a, b) => Number(a.priority) - Number(b.priority))
    //     .map((task) => task.priority);
    //   sortedPriorities.forEach((priority) => {
    //     taskKeys.forEach((key) => {
    //       if (key === priority) {
    //         console.log(key, priority);
    //         console.log(taskListMapping[mappingIndex]);
    //         taskListMapping[mappingIndex][key as keyof taskMapping] += 1;
    //       }
    //     });
    //   });
    //   console.log(taskListMapping);
    //   taskList;
    // });
    // this.taskListData.map((taskList) => {
    //   const sortedPriorities = taskList.tasks
    //     .sort((a, b) => Number(a.priority) - Number(b.priority))
    //     .map((task) => task.priority);
    //   const listOfpriorites = [...new Set(sortedPriorities)];
    //   const tempObject = {
    //     name: taskList.name,
    //   };
    //   listOfpriorites.forEach((item) =>
    //     Object.defineProperty(tempObject, item, {
    //       value: 0,
    //       writable: true,
    //       enumerable: true,
    //       configurable: true,
    //     })
    //   );
    //   const tempKeys = Object.keys(tempObject);
    //   sortedPriorities.forEach((priority) => {
    //     // if (temp[priority])
    //     console.log(priority);
    //     tempKeys.forEach((key, index) => {
    //       if (key === priority) {
    //         // console.log(key);
    //         console.log(tempObject[key as keyof typeof tempObject]);
    //         // console.log(tempValue[index]);
    //         tempObject[key as keyof typeof tempObject] += 1;
    //       }
    //     });
    //     console.log(tempObject);
    //   });
    // });
  }
}
