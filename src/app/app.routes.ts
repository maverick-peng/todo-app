import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo', component: TodoPageComponent }
];
