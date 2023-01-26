import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TodoModule } from './modules/todo/todo.module';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';
@NgModule({
  declarations: [AppComponent, ContainerComponent, HomeComponent],
  imports: [CoreModule, SharedModule, TodoModule, StatisticsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
