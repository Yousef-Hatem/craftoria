import { Component } from '@angular/core';

@Component({
  selector: 'app-products-page',
  imports: [],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {


  originalImage: string = "images/pexels-freestockpro-3800060.jpg";
  url1: string = this.originalImage; 
  
  changeImage1(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (target) {
      this.url1 = target.src; 
    }
  }
  
  resetImage() {
    this.url1 = this.originalImage; 
  }
  

  originalImage2: string = "images/pexels-geyonk-1152077.jpg"; 
  url2: string = this.originalImage2; 
  
  changeImage2(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (target) {
      this.url2 = target.src; 
    }
  }
  
  resetImage2() {
    this.url2 = this.originalImage2; 
  }


  originalImage3: string = "images/pexels-godisable-jacob-226636-1191531.jpg"; 
  url3: string = this.originalImage3; 

  changeImage3(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (target) {
      this.url3 = target.src; 
    }
  }
  
  resetImage3() {
    this.url3 = this.originalImage3; 
  }


  originalImage4: string = "images/pexels-hazardos-1306262.jpg"; 
  url4: string = this.originalImage4; 
  
  changeImage4(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (target) {
      this.url4 = target.src; 
    }
  }
  
  resetImage4() {
    this.url4 = this.originalImage4;
  }


  originalImage5: string = "images/pexels-lum3n-44775-322207.jpg"; 
  url5: string = this.originalImage5; 
  
  changeImage5(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (target) {
      this.url5 = target.src; 
    }
  }
  
  resetImage5() {
    this.url5 = this.originalImage5;
  }



  originalImage6: string = "images/pexels-pluyar-1493112.jpg"; 
  url6: string = this.originalImage6; 
  
  changeImage6(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (target) {
      this.url6 = target.src; 
    }
  }
  
  resetImage6() {
    this.url6 = this.originalImage6;
  }


  originalImage7: string = "images/pexels-pradipna-lodh-69194-753969.jpg"; 
  url7: string = this.originalImage7; 
  
  changeImage7(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (target) {
      this.url7 = target.src; 
    }
  }
  
  resetImage7() {
    this.url7 = this.originalImage7;
  }



  originalImage8: string = "images/pexels-pixabay-266621.jpg"; 
  url8: string = this.originalImage8; 
  
  changeImage8(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (target) {
      this.url8 = target.src; 
    }
  }
  
  resetImage8() {
    this.url8 = this.originalImage8;
  }



  isFilterOpen = false; 
  
  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }


  price: number = 100; // القيمة الافتراضية

updatePrice(event: any) {
  this.price = event.target.value;
}

}
