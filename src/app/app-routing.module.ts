import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './auth/guard/auth.guard';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'todo'
  },
  {
    path: 'todo',
    loadChildren: () => import('./components/todo-list.module').then(m => m.TodoListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
