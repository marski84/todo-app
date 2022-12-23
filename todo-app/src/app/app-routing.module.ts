import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todo',
    loadChildren: () =>
      import('./modules/todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'stats',
    loadChildren: () =>
      import('./modules/statistics/statistics.module').then(
        (m) => m.StatisticsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
