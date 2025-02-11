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
}
