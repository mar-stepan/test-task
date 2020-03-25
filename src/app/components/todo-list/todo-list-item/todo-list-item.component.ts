import {Component, OnInit} from '@angular/core';
import {TodoListModel} from '../../../shared/models/todo-list.model';
import {TodoListService} from '../../../shared/service/todo-list.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'createdAt', 'editedAt', 'edit', 'delete'];
  dataSource: TodoListModel[] = [];

  constructor(
    private todoListService: TodoListService
  ) {
  }

  ngOnInit(): void {
    this.todoListService.getList()
      .subscribe((res: TodoListModel[]) => {
        this.dataSource = res;
      });
  }

}
