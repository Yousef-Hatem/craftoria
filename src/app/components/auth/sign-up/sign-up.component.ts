import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AnimationsDirective } from '../../../animations.directive';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { passwordMatchValidator } from '../../../validators';

@Component({
  selector: 'app-sign-up',
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
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  loading: boolean = false;
  form = this.fb.group(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.min(10)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl(''),
    },
    { validator: passwordMatchValidator },
  );
  errorMsg: string = '';

  signUp(): void {
    if (this.form.valid) {
      this.loading = true;
      this.form.disable();
      const { value } = this.form;
      const userForm = {
        name: <string>value.name,
        email: <string>value.email,
        phone: <string>value.phone,
        password: <string>value.password,
        passwordConfirm: <string>value.passwordConfirm,
      };
      this.auth.signup(userForm).subscribe(
        (res) => {
          this.auth.setToken(res.token);
          this.auth.setUser(res.data);
          this.router.navigate(['/auth/verify-email']);
        },
        (err) => {
          if (err.status !== 400) {
            console.log(err);
          }
          this.loading = false;
          this.form.enable();
          this.errorMsg = err.error.errors[0].msg;
        },
      );
    }
  }
}
