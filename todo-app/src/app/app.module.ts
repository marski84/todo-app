import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { TodoModule } from './modules/todo/todo.module';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ContainerComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoModule,
    StatisticsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
