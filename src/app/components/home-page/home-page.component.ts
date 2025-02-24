import { Component, HostListener, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Category } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  private categoryService = inject(CategoryService);
  categories: Category[] = [];

  products = [
    { image: '/bg1.jpg' },
    { image: '/bg2.jpg' },
    { image: '/bg3.jpg' },
  ];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (categories) => {
        this.categories = categories.data;
      },
      (err) => console.log(err),
    );
  }

  trackByFn(index: number, item: any): number {
    return item.id; // استخدام ID العنصر كمفتاح تتبع
  }
  currentIndex = 0;

  // دالة تغيير الخلفية بناءً على التمرير
  getBackgroundStyle(product: any) {
    return {
      'background-image': `url(${product.image})`, // تغيير الخلفية بناءً على الصورة
    };
  }

  // دالة لالتقاط حدث التمرير وتغيير الخلفية بناءً عليه
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollTop = window.scrollY;
    // تحديد السلايد بناءً على التمرير
    const backgroundIndex = Math.min(
      Math.floor(scrollTop / 300),
      this.products.length - 1,
    );
    this.currentIndex = backgroundIndex;
  }

  // دالة للانتقال إلى السلايد المحدد عند النقر على النقاط
  goToSlide(index: number) {
    this.currentIndex = index;
  }

  selectedCategory: string = 'Category will be displayed here!';
}
