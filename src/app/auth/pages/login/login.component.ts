import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import passwordValidator from '../../utils/password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: FormGroup;

  hide = true;

  public loginFormControl!: FormControl<string>;

  public passwordFormControl!: FormControl<string>;

  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.user = fb.group({
      login: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required, passwordValidator()]),
    });
  }

  public ngOnInit(): void {
    this.loginFormControl = this.user.get('login') as FormControl<string>;
    this.passwordFormControl = this.user.get('password') as FormControl<string>;
  }

  onSubmit() {
    this.auth.logIn(this.loginFormControl.value);
    console.log(this.loginFormControl.value);

    this.router.navigate(['']);
  }
}
