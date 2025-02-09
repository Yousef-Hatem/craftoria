import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-discover-products',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './discover-products.component.html',
  styleUrl: './discover-products.component.css'
})
export class DiscoverProductsComponent {

  products = [
    {
      id: 1,
      name: 'Handmade Bag',
      description: 'A beautiful handcrafted bag.',
      price: '$40.00',
      image: '/handemadebage.jpg',
      isFavorite: false
    },
    {
      id: 2,
      name: 'Wooden Art',
      description: 'Beautiful wooden sculpture.',
      price: '$60.00',
      image: '/wodenart.jfif',
      isFavorite: false
    },
    {
      id: 3,
      name: 'Accessories',
      description: 'Handmade Accessories.',
      price: '$25.00',
      image: '/acsess2.png',
      isFavorite: false
    },
    {
      id: 3,
      name: 'Children Dress',
      description: 'Handmade Dress.',
      price: '$25.00',
      image: '/dress1.jfif',
      isFavorite: false
    },

  ];

  toggleFavorite(product: any) {
    product.isFavorite = !product.isFavorite;
    console.log(`Product ${product.id} favorite state:`, product.isFavorite);
  }
  navigateTo(route: string): void {
    console.log('Navigating to:', route);
  }
}
