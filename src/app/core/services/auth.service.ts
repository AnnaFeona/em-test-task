import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { STORAGE_KEY_PREFIX } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn$ = new BehaviorSubject<boolean>(false);

  public userName$ = new BehaviorSubject<string>('');

  private readonly userNameKey = `${STORAGE_KEY_PREFIX}-userName`;

  constructor(private router: Router) {
    this.initUserName();
  }

  public logIn(value: string): void {
    this.userName$.next(value);
    this.isLoggedIn$.next(true);
    localStorage.setItem(this.userNameKey, value);
  }

  public logOut(): void {
    this.isLoggedIn$.next(false);
    localStorage.removeItem(this.userNameKey);
  }

  private initUserName(): void {
    const user = localStorage.getItem(this.userNameKey);

    if (user) {
      this.isLoggedIn$.next(true);
      this.userName$.next(user);
    } else {
      this.isLoggedIn$.next(false);
    }
  }
}
