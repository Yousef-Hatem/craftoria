import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';

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
  @Output() addToCart = new EventEmitter<string>();
  @Input() products: Product[] = [];
  favorites: number[] = [];

  toggleFavorite(index: number) {
    if (this.favorites.includes(index)) {
      this.favorites.filter((f) => f !== index);
    } else {
      this.favorites.push(index);
    }
  }
}
