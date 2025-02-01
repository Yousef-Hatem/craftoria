import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthLayoutComponent,NavComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
