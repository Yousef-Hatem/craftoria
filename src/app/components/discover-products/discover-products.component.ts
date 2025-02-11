import { Component, inject, Input } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-discover-products',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    DecimalPipe,
  ],
  templateUrl: './discover-products.component.html',
  styleUrl: './discover-products.component.scss',
})
export class DiscoverProductsComponent {
  cartService = inject(CartService);
  @Input() products: Product[] = [];
  favorites: number[] = [];

  toggleFavorite(index: number) {
    if (this.favorites.includes(index)) {
      this.favorites.filter((f) => f !== index);
    } else {
      this.favorites.push(index);
    }
  }

  addToCart(productId: string): void {
    this.cartService.addProductToCart(productId).subscribe(undefined, (err) => {
      console.log(err);
    });
  }
}
