import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TodoListModel} from '../models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(
    private http: HttpClient
  ) {
  }

  getList(): Observable<TodoListModel[]> {
    return this.http.get<TodoListModel[]>(' http://localhost:3000/todo');
  }

}
