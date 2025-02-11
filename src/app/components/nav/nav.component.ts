import { CartService } from './../../services/cart.service';
import { LogoComponent } from './../logo/logo.component';
import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
    LogoComponent,
    MatMenuModule,
    MatBadgeModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  private cartService = inject(CartService);
  auth = inject(AuthService);

  menuItems = [
    { label: 'Home', route: '/' },
    { label: 'Shop', route: '/shop' },
  ];
  searchQuery: string = '';
  isOrdersVisible: boolean = false;
  countOfCartItems: number = 0;

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.cartService.getLoggedUserCart().subscribe(
        (cart) => {
          this.countOfCartItems = cart.data.length;
        },
        (err) => console.log(err),
      );
    }
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
    console.log('Search Query:', this.searchQuery);
  }

  toggleOrders(): void {
    this.isOrdersVisible = !this.isOrdersVisible;
  }
}
