import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';

export const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/sign-up',
    component: SignUpComponent,
  },
  {
    path: 'auth/verify-email',
    component: VerifyEmailComponent,
  },
];
