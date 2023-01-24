import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoTableListComponent } from './todo-table-list/todo-table-list.component';
import { MaterialModule } from '../material/material.module';
import { TodoTableElemmentComponent } from './todo-table-element/todo-table-element.component';
import { TodoTaskFormComponent } from './todo-task-form/todo-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoTaskViewComponent } from './todo-task-view/todo-task-view.component';
import { LoggerService } from 'src/app/logger.service';
import { SharedModule } from '../common/shared/shared.module';

@NgModule({
  declarations: [
    TodoTableListComponent,
    TodoTableElemmentComponent,
    TodoTaskFormComponent,
    TodoTaskViewComponent,
  ],
  imports: [
    TodoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
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
