import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoBoardComponent } from './todo-board/todo-board.component';

const routes: Routes = [{ path: '', component: TodoBoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
