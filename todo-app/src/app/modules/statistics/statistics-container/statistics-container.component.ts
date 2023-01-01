import { Component, OnInit } from '@angular/core';
import { StatisticsApiService } from '../statistics-api.service';

@Component({
  selector: 'app-statistics-container',
  templateUrl: './statistics-container.component.html',
  styleUrls: ['./statistics-container.component.scss'],
})
export class StatisticsContainerComponent implements OnInit {
  constructor(private statisticsApiService: StatisticsApiService) {}

  taskListDataObservable$ = this.statisticsApiService.getTaskList();

  ngOnInit(): void {}
}
