import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product = {
    name: 'Antique And Vintage Gramophone',
    price: 313.00,
    description: `This antique gramophone is handcrafted by our artisans. 
                  It is brown and the dimensions are 15-inch x 16 inches x 25 inches.`,
    rating: 5,
    reviews: 10,
    images: [
      '/images (1).png',
      '/acess3.webp',
      '/images (1).png',
      '/images (1).png'
    ]
  };

  mainImage: string;

  constructor() {
    this.mainImage = this.product.images[0]; // تعيين الصورة الأساسية عند تحميل الصفحة
  }

  setMainImage(image: string): void {
    this.mainImage = image;
  }

  getStars(): number[] {
    return Array(this.product.rating).fill(0);
  }
}
