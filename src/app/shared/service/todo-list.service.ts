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
  }

  getList(): void {
    this.http.get('http://localhost:3000/todo')
      .subscribe((res: TodoListModel[]) => {
        this.$todoListItem.next(res);
      });
  }

  addList(item: TodoListModel): Observable<TodoListModel> {
    return this.http.post<TodoListModel>('http://localhost:3000/todo', item);
  }

  updateList(item: TodoListModel): Observable<TodoListModel> {
    const id = item.id;
    return this.http.put<TodoListModel>(`http://localhost:3000/todo/${id}`, item);
  }

  deleteItemFromList(item: TodoListModel): Observable<TodoListModel> {
    const id = item.id;
    return this.http.delete<TodoListModel>(`http://localhost:3000/todo/${id}`);
  }
}
