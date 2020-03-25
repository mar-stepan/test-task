import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) {
  }

  canActivate() {
    if (localStorage.getItem('todo-task')) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return true;
  }

}
