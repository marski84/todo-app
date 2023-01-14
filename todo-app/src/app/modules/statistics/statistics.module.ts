import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsContainerComponent } from './statistics-container/statistics-container.component';
import { MaterialModule } from '../material/material.module';
import { StatisticsViewComponent } from './statistics-view/statistics-view.component';
import { LoggerService } from 'src/app/logger.service';

@NgModule({
  declarations: [StatisticsContainerComponent, StatisticsViewComponent],
  imports: [CommonModule, StatisticsRoutingModule, MaterialModule],
  providers: [
    {
      provide: LoggerService,
    },
    {
      provide: 'logger-token',
      useValue: 'statistic-module-logger',
    },
  ],
})
export class StatisticsModule {}
