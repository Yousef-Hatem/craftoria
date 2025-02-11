import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<{ data: Product[] }> {
    return this.http.get<{ data: Product[] }>(environment.apiUrl + '/products');
  }

  getProduct(id: string): Observable<{ data: Product }> {
    return this.http.get<{ data: Product }>(
      environment.apiUrl + '/products/' + id,
    );
  }
  createProduct(product: Omit<Product, 'id'>): Observable<{ data: Product }> {
    return this.http.post<{ data: Product }>(
      environment.apiUrl + '/products',
      product
    );
  }

  updateProduct(id: string, product: Partial<Product>): Observable<{ data: Product }> {
    return this.http.patch<{ data: Product }>(
      environment.apiUrl + '/products/' + id,
      product
    );
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(
      environment.apiUrl + '/products/' + id
    );
  }
}
