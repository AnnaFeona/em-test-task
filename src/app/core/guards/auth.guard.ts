import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuard {
  private login = true;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn$.value) {
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
