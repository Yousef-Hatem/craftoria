import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-favorite-products',
  imports: [CommonModule], 
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.scss']
})
export class FavoriteProductsComponent {
  products = [
    { title: 'Valentine or Christmas Gnome', oldPrice: 16.25, newPrice: 13.34, discount: '25% Discount', isFavorite: false, imageUrl: '/download (2).png'},
    { title: 'Antique Edwardian Opal', oldPrice: 490, newPrice: 387.11, discount: '32% Discount', isFavorite: false, imageUrl:'/download (1).png'},
    { title: 'Custom Name Sign', oldPrice: 150, newPrice: 45, discount: '70% Discount', isFavorite: false, imageUrl:'/images (1).png' },
    { title: 'Personalized Stainless Steel Tumblers', oldPrice: 25, newPrice: 23.75, discount: '5% Discount', isFavorite: false, imageUrl:'/handemadebage.jpg' }
  ];

  toggleFavorite(product: any) {
    product.isFavorite = !product.isFavorite; 
  }

  goBack() {
    window.history.back(); 
  }

  rotateIcon(event: MouseEvent) {
    const icon = event.target as HTMLElement;
    icon.style.transform = 'rotate(360deg)';
  }

  resetIcon(event: MouseEvent) {
    const icon = event.target as HTMLElement;
    icon.style.transform = 'rotate(0deg)';
  }
}
