import { Component, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home-cards',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.scss',
})
export class HomeCardsComponent {
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
