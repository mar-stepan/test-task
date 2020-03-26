import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoListModel} from '../../../shared/models/todo-list.model';
import {TodoListService} from '../../../shared/service/todo-list.service';
import {MatDialog} from '@angular/material/dialog';
import {NewEditTodoListComponent} from '../../popups/new-edit-todo-list/new-edit-todo-list.component';
import {ConfirmDialogComponent} from '../../popups/confirm-dialog/confirm-dialog.component';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit, OnDestroy {

  unsubscribe = new Subject();

  displayedColumns: string[] = ['id', 'name', 'createAt', 'editedAt', 'delete'];
  dataSource: TodoListModel[] = [];

  constructor(
    private todoListService: TodoListService,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.todoListService.$todoListItem
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: TodoListModel[]) => {
        this.dataSource = res;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


  editTable(item?: TodoListModel): void {
    this.matDialog.open(NewEditTodoListComponent, {
      width: '480px',
      data: item ? {item, new: false} : {new: true}
    }).afterClosed()
      .subscribe((res: { item: TodoListModel, new: boolean }) => {
        if (res) {
          if (res.new) {
            this.addList(res.item);
          } else {
            this.updateList(res.item);
          }
        }
      });
  }

  addList(item: TodoListModel): void {
    this.todoListService.addList(item)
      .subscribe((res: TodoListModel) => {
        if (res) {
          this.dataSource = this.dataSource.concat(res);
        }
      });
  }

  updateList(item: TodoListModel): void {
    this.todoListService.updateList(item)
      .subscribe((res: TodoListModel) => {
        if (res) {
          const itemArr: TodoListModel[] = [res];
          this.dataSource = this.dataSource.map(a => itemArr.find(b => b.id === a.id) || a);
        }
      });
  }

  deleteTable(item: TodoListModel): void {
    this.matDialog.open(ConfirmDialogComponent, {data: {action: 'delete'}})
      .afterClosed()
      .subscribe((res: boolean) => {
        if (res) {
          this.deleteItem(item);
        }
      });
  }

  deleteItem(item: TodoListModel) {
    this.todoListService.deleteItemFromList(item)
      .subscribe((res: TodoListModel) => {
        if (res) {
          this.dataSource = this.dataSource.filter(a => a.id !== item.id);
        }
      });
  }

  editRow(e: any, item: TodoListModel): void {
    if (e.target.innerText === 'delete') { return; }
    this.editTable(item);
  }
}
