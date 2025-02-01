import { Component } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { AnimationsDirective } from '../../../animations.directive';

@Component({
  selector: 'app-auth-layout',
  imports: [LogoComponent, LogoComponent, AnimationsDirective],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {}
