import { AuthService } from './../../../services/auth.service';
import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AnimationsDirective } from '../../../animations.directive';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    AnimationsDirective,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loading: boolean = false;
  errorMsg: boolean = false;
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  auth = inject(AuthService);
  router = inject(Router);

  login(): void {
    if (this.form.valid) {
      this.loading = true;
      this.form.disable();

      const { value } = this.form;
      this.auth.login(<string>value.email, <string>value.password).subscribe(
        (res) => {
          this.auth.setToken(res.token);
          this.auth.setUser(res.data);
          this.router.navigate(['/account']);
        },
        (err) => {
          if (err.status !== 401) {
            console.log(err);
          }
          this.errorMsg = true;
          this.loading = false;
          this.form.enable();
        },
      );
    }
  }
}
