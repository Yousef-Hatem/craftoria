import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AnimationsDirective } from '../../../animations.directive';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../../interfaces/user';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-verify-email',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AnimationsDirective,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss',
})
export class VerifyEmailComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  isBrowser = false;
  loading: boolean = false;
  form = new FormGroup({
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
  });
  errorMsg: string = '';
  user!: User;
  userEmail: string = '';

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.user = <User>this.auth.getUser();
      this.userEmail = this.user.email;
      this.sendCodeToEmail();
    }
  }

  sendCodeToEmail(): void {
    this.auth.sendCodeToEmail().subscribe(
      () => {},
      (err) => console.log(err),
    );
  }

  verifyEmail(): void {
    if (this.form.valid) {
      this.loading = true;
      this.form.disable();
      this.auth.verifyEmail(<string>this.form.value.code).subscribe(
        () => {
          this.user.verified = true;
          this.auth.setUser(this.user);
          this.router.navigate(['/']);
        },
        (err) => {
          if (err.status !== 400) {
            console.log(err);
          }
          this.errorMsg = err.error.message;
          this.loading = false;
          this.form.enable();
        },
      );
    }
  }
}
