import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FavoriteProductsComponent  } from './components/favorite-products/favorite-products.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
  {
    path: 'shop',
    component: ProductsPageComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'product-details', 
    component: ProductDetailsComponent },

  { path: 'favorites',
     component: FavoriteProductsComponent  },


];
