import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isLoggedIn = false;

  public login = this.isLoggedIn ? 'Logout' : 'Login';

  constructor(private router: Router) {}

  public logInOut(): void {
    this.isLoggedIn = !this.isLoggedIn;
    this.login = this.isLoggedIn ? 'Logout' : 'Login';
  }
}