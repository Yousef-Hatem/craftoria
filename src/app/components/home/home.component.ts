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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  imports: [
    HomePageComponent,
    HomeCardsComponent,
    DeliveryCartComponent,
    DiscoverProductsComponent,
    TrendingComponent,
    BestSellingComponent,
    MatSnackBarModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private _snackBar = inject(MatSnackBar);
  private cartService = inject(CartService);
  private productService = inject(ProductService);

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

  addToCart(productId: any): void {
    this.cartService.addProductToCart(productId).subscribe(
      (cart) => {
        const { length } = cart.data;
        this._snackBar.open(
          `Product added to your cart. You now have ${length} products`,
          'OK',
          { duration: 5000 },
        );
        this.cartService.countOfItems.set(length);
      },
      (err) => {
        console.log(err);
      },
    );
  }
}
