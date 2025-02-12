import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  countOfItems = signal(0);

  constructor(private http: HttpClient) {}

  getLoggedUserCart(): Observable<{ data: CartItem[] }> {
    return this.http.get<{ data: CartItem[] }>(environment.apiUrl + '/cart');
  }

  addProductToCart(productId: string): Observable<{ data: CartItem[] }> {
    return this.http.post<{ data: CartItem[] }>(environment.apiUrl + '/cart', {
      productId,
    });
  }

  updateItemQuantity(
    productId: string,
    quantity: number,
  ): Observable<{ data: CartItem[] }> {
    return this.http.put<{ data: CartItem[] }>(
      environment.apiUrl + '/cart/' + productId,
      { quantity },
    );
  }

  removeItem(productId: string): Observable<{ data: CartItem[] }> {
    return this.http.delete<{ data: CartItem[] }>(
      environment.apiUrl + '/cart/' + productId,
    );
  }
}
