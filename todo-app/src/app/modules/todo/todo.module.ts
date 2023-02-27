import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoTaskFormComponent } from './todo-task-form/todo-task-form.component';
import { TodoTaskViewComponent } from './todo-task-view/todo-task-view.component';
import { LoggerService } from 'src/app/logger.service';
import { SharedModule } from '../shared/shared.module';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormHandlerComponent } from './form-container/form-handler/form-handler.component';
import { AbstractApiHandler } from '../custom-api-handler/abstract-api-handler';
import { LocalStorageApiService } from './local-storage-api.service';
import { TodoBoardComponent } from './todo-board/todo-board.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoBoardComponent,
    TodoListComponent,
    TodoTaskFormComponent,
    TodoTaskViewComponent,
    FormContainerComponent,
    FormHandlerComponent,
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
      provide: 'logger-token',
      useValue: 'to-do-module-logger',
    },
  ],
})
export class TodoModule {}

// BoardComponent
// ListComponent
// TaskComponent
