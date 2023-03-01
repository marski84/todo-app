import { NgModule } from '@angular/core';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsContainerComponent } from './statistics-container/statistics-container.component';
import { MaterialModule } from '../shared/material/material.module';
import { StatisticsViewComponent } from './statistics-view/statistics-view.component';
import { LoggerService } from 'src/app/logger.service';
import { SharedModule } from '../shared/shared.module';
import { LOGGER_TOKEN } from '../shared/abstract-logger-token';

@NgModule({
  declarations: [StatisticsContainerComponent, StatisticsViewComponent],
  imports: [SharedModule, StatisticsRoutingModule],
  providers: [
    {
      provide: LoggerService,
    },
    {
      provide: LOGGER_TOKEN,
      useValue: 'statistic-module-logger',
    },
  ],
})
export class StatisticsModule {}
