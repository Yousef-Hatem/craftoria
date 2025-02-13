import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthLayoutComponent, NavComponent, FooterComponent, CommonModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pureCrafts';
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
