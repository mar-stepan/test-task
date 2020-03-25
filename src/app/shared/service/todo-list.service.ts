import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {TodoListModel} from '../models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  $todoListItem = new BehaviorSubject<TodoListModel[]>([]);

  constructor(
    private http: HttpClient
  ) {
    this.getList();
  }

  getList(): void {
    this.http.get('http://localhost:3000/todo')
      .subscribe((res: TodoListModel[]) => {
        this.$todoListItem.next(res);
      });
  }

  addList(item: TodoListModel): void {
    this.http.post('http://localhost:3000/todo', item)
      .subscribe((res: any) => {
        this.getList();
      });
  }

  updateList(item: TodoListModel): void {
    const id = item.id;
    this.http.put(`http://localhost:3000/todo/${id}`, item)
      .subscribe((res: TodoListModel) => {
        this.getList();
      });
  }

  deleteItemFromList(item: TodoListModel): void {
    const id = item.id;
    this.http.delete(`http://localhost:3000/todo/${id}`)
      .subscribe((res: TodoListModel) => {
        this.getList();
      });
  }
}
