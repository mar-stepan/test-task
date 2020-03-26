import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  async loginUser(email, password): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/users')
        .subscribe((users: User[]) => {
          if (users.length > 0) {
            const user = users.find(a => a.email === email);
            if (user && user.password === password) {
              localStorage.setItem('todo-task', JSON.stringify(users));
              resolve();
            } else {
              reject();
            }
          } else {
            reject();
          }
        });
    });
  }

  async createUser(email, password): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/users/', {email, password})
        .subscribe((res: User) => {
          if (res) {
            localStorage.setItem('todo-task', JSON.stringify(res));
            resolve();
          } else {
            reject();
          }
        });
    });
  }
}
