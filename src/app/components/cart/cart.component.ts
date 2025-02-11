import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { AddressFormDialogComponent } from '../address-form-dialog/address-form-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart-item';
import { AuthService } from '../../services/auth.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    DecimalPipe,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  readonly dialog = inject(MatDialog);
  readonly auth = inject(AuthService);
  readonly cartService = inject(CartService);

  stopUpdateQuantity: number | null = null;
  cartItems: CartItem[] = [];
  addresses = [
    {
      _id: '1',
      governorate: 'Cairo',
      city: 'Nasr City',
      street: 'Makram Ebeid Street',
      building: '12',
      zipCode: '11765',
    },
    {
      _id: '1',
      governorate: 'Aswan',
      city: 'Aswan',
      street: 'Corniche Street',
      building: '25',
      zipCode: '81511',
    },
  ];

  subtotal = 0;
  discount = 0;
  total = 0;

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.getCartItems();
    }
  }

  getCartItems(): void {
    this.cartService.getLoggedUserCart().subscribe(
      (cart) => {
        this.cartItems = cart.data;
        this.calculateCost();
      },
      (err) => console.log(err),
    );
  }

  updateQuantity(index: number, newQuantity: number): void {
    this.stopUpdateQuantity = index;
    this.cartService
      .updateItemQuantity(this.cartItems[index].product._id, newQuantity)
      .subscribe(
        () => {
          this.cartItems[index].quantity = newQuantity;
          this.calculateCost();
          this.stopUpdateQuantity = null;
        },
        (err) => {
          console.log(err);
          this.stopUpdateQuantity = null;
        },
      );
  }

  removeCartItem(index: number): void {
    const item = this.cartItems[index];
    this.cartItems.splice(index, 1);
    this.calculateCost();
    this.cartService
      .removeItem(item.product._id)
      .subscribe(undefined, (err) => {
        this.cartItems.push(item);
        this.calculateCost();
        console.log(item);
      });
  }

  calculateCost() {
    this.subtotal = 0;
    this.discount = 0;

    this.cartItems.forEach((item) => {
      if (item.product.originalPrice) {
        this.subtotal += item.quantity * item.product.originalPrice;
        this.discount +=
          item.quantity * item.product.originalPrice -
          item.quantity * item.product.price;
      } else {
        this.subtotal += item.quantity * item.product.price;
      }
    });

    this.total = this.subtotal - this.discount;
    if (this.total) {
      this.total += 15;
    }
  }

  openAddressFormDialog(): void {
    const dialogRef = this.dialog.open(AddressFormDialogComponent, {
      data: undefined,
    });
    dialogRef
      .afterClosed()
      .subscribe((result) =>
        result !== undefined ? this.addresses.push(result) : '',
      );
  }
}
