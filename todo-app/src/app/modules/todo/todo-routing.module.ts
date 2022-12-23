import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoTableListComponent } from './todo-table-list/todo-table-list.component';

const routes: Routes = [{ path: '', component: TodoTableListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
