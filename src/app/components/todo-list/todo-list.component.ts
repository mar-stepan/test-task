import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewEditTodoListComponent} from '../popups/new-edit-todo-list/new-edit-todo-list.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
