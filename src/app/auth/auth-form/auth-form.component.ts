import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<FormGroup>();

  authForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.prepareData();
  }

  prepareData(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.authForm.valid) {
      this.submitted.emit(this.authForm);
    }
  }

  get passwordInvalid() {
    const control = this.authForm.get('password');
    return control.hasError('password') && control.touched;
  }

  get emailFormat() {
    const control = this.authForm.get('email');
    return control.hasError('email') && control.touched;
  }

}
