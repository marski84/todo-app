import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsContainerComponent } from './statistics-container/statistics-container.component';
import { MaterialModule } from '../material/material.module';
import { StatisticsViewComponent } from './statistics-view/statistics-view.component';

@NgModule({
  declarations: [StatisticsContainerComponent, StatisticsViewComponent],
  imports: [CommonModule, StatisticsRoutingModule, MaterialModule],
})
export class StatisticsModule {}
