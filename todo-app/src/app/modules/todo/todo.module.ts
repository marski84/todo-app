import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoTaskFormComponent } from './todo-task-form/todo-task-form.component';
import { TodoTaskViewComponent } from './todo-task-view/todo-task-view.component';
import { LoggerService } from 'src/app/logger.service';
import { SharedModule } from '../shared/shared.module';
import { FormContainerComponent } from './form-container/form-container.component';
import { AbstractApiHandler } from '../shared/abstract-api-handler';
import { LocalStorageApiService } from './local-storage-api.service';
import { TodoBoardComponent } from './todo-board/todo-board.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LOGGER_TOKEN } from '../shared/abstract-logger-token';

@NgModule({
  declarations: [
    TodoBoardComponent,
    TodoListComponent,
    TodoTaskFormComponent,
    TodoTaskViewComponent,
    FormContainerComponent,
  ],
  imports: [SharedModule, TodoRoutingModule],
  providers: [
    {
      provide: LoggerService,
    },
    {
      provide: AbstractApiHandler,
      useClass: LocalStorageApiService,
    },
    {
      provide: LOGGER_TOKEN,
      useValue: 'to-do-module-logger',
    },
  ],
})
export class TodoModule {}

// BoardComponent
// ListComponent
// TaskComponent
