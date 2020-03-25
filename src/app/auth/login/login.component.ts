import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async loginUser(e: FormGroup) {
    const {email, password} = e.value;
    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(['/']).then();
    } catch (e) {
      this.error = e.message;
    }
  }
}
