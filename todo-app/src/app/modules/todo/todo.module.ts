import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoTableListComponent } from './todo-table-list/todo-table-list.component';
import { MaterialModule } from '../material/material.module';
import { TodoTableElemmentComponent } from './todo-table-element/todo-table-element.component';
import { TodoTaskFormComponent } from './todo-task-form/todo-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoTaskViewComponent } from './todo-task-view/todo-task-view.component';

@NgModule({
  declarations: [
    TodoTableListComponent,
    TodoTableElemmentComponent,
    TodoTaskFormComponent,
    TodoTaskViewComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class TodoModule {}
