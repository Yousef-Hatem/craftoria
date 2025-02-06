import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  authLayout: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event.type === 0) {
        if (event.url.includes('/auth/')) {
          this.authLayout = true;
        } else {
          this.authLayout = false;
        }
      }
    });
  }
}
