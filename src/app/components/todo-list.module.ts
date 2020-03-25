import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {NewEditTodoListComponent} from './new-edit-todo-list/new-edit-todo-list.component';
import {RouterModule, Routes} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: TodoListComponent}
    ]
  }
];

@NgModule({
  declarations: [
    TodoListComponent,
    NewEditTodoListComponent,
    TodoListItemComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatSortModule,
    MatIconModule
  ]
})
export class TodoListModule {
}
