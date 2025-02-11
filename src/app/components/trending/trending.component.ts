import { Component, ElementRef, ViewChild, Input, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss',
})
export class TrendingComponent {
  cartService = inject(CartService);
  @Input() products: Product[] = [];
  @ViewChild('cardContainer') cardContainer!: ElementRef;

  moveSlide(direction: number): void {
    const container = this.cardContainer?.nativeElement;
    if (!container) return;

    const firstCard = container.querySelector('.product-card');
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth || 250;
    const gap = 40; // نفس القيمة في CSS
    const scrollAmount = cardWidth + gap;

    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  addToCart(productId: string): void {
    this.cartService.addProductToCart(productId).subscribe(undefined, (err) => {
      console.log(err);
    });
  }
}
