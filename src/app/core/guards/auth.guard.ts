import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import LoginService from 'src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuard {
  private login = true;

  constructor(
    // private login: LoginService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.login) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }

  canLoad(): boolean {
    return this.canActivate();
  }
}
