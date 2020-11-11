import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'todo/detail/:id', component: TodoDetailComponent},
  {path: '', redirectTo: '/todo', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
