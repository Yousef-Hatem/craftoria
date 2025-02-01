import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AnimationsDirective } from '../../../animations.directive';

@Component({
  selector: 'app-verify-email',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AnimationsDirective,
  ],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss',
})
export class VerifyEmailComponent {}
