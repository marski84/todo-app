import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TodoModule } from './modules/todo/todo.module';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './modules/common/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, ContainerComponent, HomeComponent],
  imports: [
    SharedModule,
    TodoModule,
    StatisticsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
