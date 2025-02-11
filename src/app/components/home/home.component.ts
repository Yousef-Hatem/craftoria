import { Component, inject } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { HomeCardsComponent } from '../home-cards/home-cards.component';
import { DeliveryCartComponent } from '../delivery-cart/delivery-cart.component';
import { DiscoverProductsComponent } from '../discover-products/discover-products.component';
import { TrendingComponent } from '../trending/trending.component';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { BestSellingComponent } from '../best-selling/best-selling.component';

@Component({
  selector: 'app-home',
  imports: [
    HomePageComponent,
    HomeCardsComponent,
    DeliveryCartComponent,
    DiscoverProductsComponent,
    TrendingComponent,
    BestSellingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cartService = inject(CartService);
  productService = inject(ProductService);
  oneProductPerCategory: Product[] = [];
  discountedProducts: Product[] = [];
  latestProducts: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (res) => {
        const products = res.data;
        this.getOneProductPerCategory(products);
        this.getDiscountedProducts(products);
        this.getLatestProducts(products);
      },
      (err) => console.log(err),
    );
  }

  getDiscountedProducts(products: Product[], limit: number = 5): void {
    this.discountedProducts = products.filter(
      (product, i) => product.originalPrice && i < limit,
    );
  }

  getLatestProducts(products: Product[], limit: number = 10): void {
    this.latestProducts = products.filter((p, i) => i < limit);
  }

  getOneProductPerCategory(products: Product[], limit: number = 5): void {
    const categories: string[] = [];
    this.oneProductPerCategory = products.filter((p, i) => {
      if (p.category && !categories.includes(p.category._id) && i < limit) {
        categories.push(p.category._id);
        return true;
      }
      return false;
    });
  }

  addToCart(productId: string): void {
    console.log(productId);
    // this.cartService.addProductToCart(productId)
  }
}
