import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TodoListService} from '../../shared/service/todo-list.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private todoService: TodoListService
  ) {
  }

  canActivate() {
    if (localStorage.getItem('todo-task')) {
      this.todoService.getList();
      return true;
    }
    this.router.navigate(['/auth/login']).then();
  }

}
