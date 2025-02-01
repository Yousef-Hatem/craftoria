import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
