import { Component, OnInit } from '@angular/core';
import { StatisticsApiService } from '../statistics-api.service';
import { LoggerService } from 'src/app/logger.service';
import { AbstractApiHandler } from '../../custom-api-handler/abstract-api-handler';

@Component({
  selector: 'app-statistics-container',
  templateUrl: './statistics-container.component.html',
  styleUrls: ['./statistics-container.component.scss'],
})
export class StatisticsContainerComponent implements OnInit {
  taskListDataObservable$ = this.statisticsApiService.getTaskList();
  constructor(
    private statisticsApiService: StatisticsApiService,
    private logger: LoggerService
  ) // private apiHandler: AbstractApiHandler
  {}

  ngOnInit(): void {
    this.logger.logTasks();
    // this.apiHandler.data$.subscribe();
  }
}
