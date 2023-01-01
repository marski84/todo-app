import { Component, Input, OnInit } from '@angular/core';
import { dropListData } from '../models/dropListData.interface';
import { ToDoTask } from '../models/todoTask.interface';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.scss'],
})

// * Po wejściu zliczamy ile zadań jest w takiej kolumnie(dzielimy zliczenie na poszczególne priortety -> ile z wysokim, ile z niskim...) i wyświetlamy informacje o każdej kolumnie w osobnych `<mat-card>`
export class StatisticsViewComponent implements OnInit {
  @Input() taskListData!: dropListData[];

  constructor() {}

  ngOnInit(): void {
    this.taskListData.map((taskList) => {
      // taskList.tasks.forEach((task) => console.log(task.priority));
      const a = taskList.tasks.sort(
        (a, b) => Number(a.priority) - Number(b.priority)
      );

      const listOfpriorites = [
        ...new Set(taskList.tasks.map((task) => task.priority)),
      ];
      console.log(listOfpriorites);

      const temp = {
        name: taskList.name,
      };

      // Object.defineProperty(object1, 'property1', {
      //   value: 42,
      //   writable: false
      // });

      listOfpriorites.forEach((item) =>
        Object.defineProperty(temp, item, {
          value: 0,
          writable: true,
        })
      );
      console.log(temp);
    });
  }
}
