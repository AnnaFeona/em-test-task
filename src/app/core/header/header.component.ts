import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLoggedIn$ = this.auth.isLoggedIn$;

  public login!: 'LogOut' | 'LogIn';

  public userName!: Observable<string>;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.isLoggedIn$.subscribe((v) => {
      this.login = v ? 'LogOut' : 'LogIn';
      console.log(this.auth.isLoggedIn$, this.auth.userName$);
    });
    this.userName = this.auth.userName$;
  }

  public logInOut(): void {
    if (this.isLoggedIn$.value) {
      this.auth.logOut();
      this.login = 'LogIn';
    }
    this.router.navigate(['/auth']);
  }
}
