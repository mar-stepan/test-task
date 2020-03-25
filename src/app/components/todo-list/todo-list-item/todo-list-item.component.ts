import {Component, OnInit} from '@angular/core';
import {TodoListModel} from '../../../shared/models/todo-list.model';
import {TodoListService} from '../../../shared/service/todo-list.service';
import {MatDialog} from '@angular/material/dialog';
import {NewEditTodoListComponent} from '../../popups/new-edit-todo-list/new-edit-todo-list.component';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'createAt', 'editedAt', 'edit', 'delete'];
  dataSource: TodoListModel[] = [];

  constructor(
    private todoListService: TodoListService,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.todoListService.$todoListItem
      .subscribe((res: TodoListModel[]) => {
        this.dataSource = res;
      });
  }


  editTable(item?: TodoListModel): void {
    this.matDialog.open(NewEditTodoListComponent, {
      width: '480px',
      data: item ? {item, new: false} : {new: true}
    }).afterClosed()
      .subscribe((res: { item: TodoListModel, new: boolean }) => {
        if (res && res.new) {
          this.todoListService.addList(res.item);
        } else {
          this.todoListService.updateList(res.item);
        }
        console.log('', res);
      });
    console.log('', item);
  }

  deleteTable(element: TodoListModel): void {
    console.log('', element);
  }
}
