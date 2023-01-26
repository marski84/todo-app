import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoTableListComponent } from './todo-table-list/todo-table-list.component';
import { TodoTableElemmentComponent } from './todo-table-element/todo-table-element.component';
import { TodoTaskFormComponent } from './todo-task-form/todo-task-form.component';
import { TodoTaskViewComponent } from './todo-task-view/todo-task-view.component';
import { LoggerService } from 'src/app/logger.service';
import { SharedModule } from '../shared/shared.module';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    TodoTableListComponent,
    TodoTableElemmentComponent,
    TodoTaskFormComponent,
    TodoTaskViewComponent,
    PopupComponent,
  ],
  imports: [SharedModule, TodoRoutingModule],
  providers: [
    {
      provide: LoggerService,
    },
    {
      provide: 'logger-token',
      useValue: 'to-do-module-logger',
    },
  ],
})
export class TodoModule {}

// BoardComponent
// ListComponent
// TaskComponent
