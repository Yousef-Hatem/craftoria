import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({

  selector: 'app-nav',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    RouterModule

  ],

  templateUrl: './nav.component.html',
  styleUrl:    './nav.component.css'
})
export class NavComponent {
  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'Shop', route: '/shop' },

  ];
  searchQuery: string = '';
  isOrdersVisible: boolean = false; // حالة ظهور الطلبات

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
    console.log('Search Query:', this.searchQuery);
  }

  toggleOrders(): void {
    this.isOrdersVisible = !this.isOrdersVisible;
  }
}
