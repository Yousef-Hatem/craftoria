import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthLayoutComponent,NavComponent,FooterComponent],
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
