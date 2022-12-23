import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoTableListComponent } from './todo-table-list/todo-table-list.component';
import { MaterialModule } from '../material/material.module';
import { TodoTableElemmentComponent } from './todo-table-element/todo-table-element.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';

@NgModule({
  declarations: [
    TodoTableListComponent,
    TodoTableElemmentComponent,
    TodoTaskComponent,
  ],
  imports: [CommonModule, TodoRoutingModule, MaterialModule],
})
export class TodoModule {}
