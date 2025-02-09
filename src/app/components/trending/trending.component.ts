import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent implements AfterViewInit {
  @ViewChild('cardContainer') cardContainer!: ElementRef;

  products = [
    { name: "Handmade Wooden Clock", price: 250, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc", description: "Elegant handcrafted wooden wall clock." },
    { name: "Knitted Wool Scarf", price: 180,  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc", description: "Elegant handcrafted wooden wall clock."},
    { name: "Ceramic Coffee Mug", price: 120, image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc", description: "Elegant handcrafted wooden wall clock." },
    { name: "Leather Wallet", price: 300,  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc", description: "Elegant handcrafted wooden wall clock." },
    { name: "Handwoven Basket", price: 220,  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc", description: "Elegant handcrafted wooden wall clock." },

    { name: "Handwoven Basket", price: 220,  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc", description: "Elegant handcrafted wooden wall clock." },
    { name: "Resin Jewelry Set", price: 350,  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc", description: "Elegant handcrafted wooden wall clock."},
    { name: "Macrame Wall Hanging", price: 275,  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc", description: "Elegant handcrafted wooden wall clock." },
    { name: "Embroidered Tote Bag", price: 190,  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc", description: "Elegant handcrafted wooden wall clock." },
    { name: "Hand-Painted Canvas Art", price: 500, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc", description: "Elegant handcrafted wooden wall clock." }
];
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.cardContainer) {
        console.log("✅ `cardContainer` معرف:", this.cardContainer.nativeElement);
      } else {
        console.error("❌ `cardContainer` غير معرف! تأكدي من وجود `#cardContainer` في القالب.");
      }
    }, 0);
  }

  moveSlide(direction: number): void {
    const container = this.cardContainer?.nativeElement;
    if (!container) return;

    const firstCard = container.querySelector('.product-card');
    if (!firstCard) {
      console.error("لا توجد كروت داخل `cards-container`!");
      return;
    }

    const cardWidth = firstCard.offsetWidth || 250;
    const gap = 40; // نفس القيمة في CSS
    const scrollAmount = cardWidth + gap;

    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

}
