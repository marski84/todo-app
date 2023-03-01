import { Component, OnInit } from '@angular/core';
import { StatisticsApiService } from '../statistics-api.service';
import { LoggerService } from 'src/app/logger.service';
import { AbstractApiHandler } from '../../shared/abstract-api-handler';

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
  ) {}

  ngOnInit(): void {
    this.logger.logTasks();
  }
}
