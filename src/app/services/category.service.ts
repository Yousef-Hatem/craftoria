import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<{ data: Category[] }> {
    return this.http.get<{ data: Category[] }>(
      environment.apiUrl + '/categories',
    );
  }

  getCategory(id: string): Observable<{ data: Category }> {
    return this.http.get<{ data: Category }>(
      environment.apiUrl + '/categories/' + id,
    );
  }
}
