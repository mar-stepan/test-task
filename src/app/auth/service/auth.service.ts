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

  async loginUser(email, password) {
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:3000/users/${email}`)
        .subscribe((res: User) => {
          if (res && password === res.password) {
            resolve();
          } else {
            reject();
          }
        });
    });
  }

  async createUser(email, password) {
    const user = {email, password};
    console.log('', {email, password});
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/users/', user)
        .subscribe((res: any) => {
          console.log('', res);
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
