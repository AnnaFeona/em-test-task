import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isLoggedIn = false;

  public login = this.isLoggedIn ? 'Logout' : 'Login';

  public logInOut(): void {
    this.isLoggedIn = !this.isLoggedIn;
    this.login = this.isLoggedIn ? 'Logout' : 'Login';
  }
}
