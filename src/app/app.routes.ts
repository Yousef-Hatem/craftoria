import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
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
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
