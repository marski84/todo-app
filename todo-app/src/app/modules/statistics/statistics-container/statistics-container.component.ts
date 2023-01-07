import { Component, OnInit } from '@angular/core';
import { StatisticsApiService } from '../statistics-api.service';

@Component({
  selector: 'app-statistics-container',
  templateUrl: './statistics-container.component.html',
  styleUrls: ['./statistics-container.component.scss'],
})
export class StatisticsContainerComponent implements OnInit {
  taskListDataObservable$ = this.statisticsApiService.getTaskList();
  constructor(private statisticsApiService: StatisticsApiService) {}

  ngOnInit(): void {}
}
