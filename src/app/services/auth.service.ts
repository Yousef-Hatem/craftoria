import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserForm } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  localStorage: Storage | undefined;

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.localStorage = document.defaultView?.localStorage;
  }

  login(
    email: string,
    password: string,
  ): Observable<{ data: User; token: string }> {
    return this.http.post<{ data: User; token: string }>(
      environment.apiUrl + '/auth/login',
      { email, password },
    );
  }

  signup(userForm: UserForm): Observable<{ data: User; token: string }> {
    return this.http.post<{ data: User; token: string }>(
      environment.apiUrl + '/auth/signup',
      { ...userForm },
    );
  }

  setToken(token: string): void {
    if (this.localStorage) {
      this.localStorage.setItem('user_token', token);
    }
  }

  getToken(): string | null {
    if (this.localStorage) {
      return this.localStorage.getItem('user_token');
    }
    return null;
  }

  setUser(user: User): void {
    if (this.localStorage) {
      this.localStorage.setItem('user', JSON.stringify(user));
    }
  }

  getUser(): User | null {
    if (this.localStorage) {
      const userJson = this.localStorage.getItem('user');
      if (userJson) {
        return JSON.parse(userJson);
      }
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    if (this.localStorage) {
      this.localStorage.removeItem('user');
      this.localStorage.removeItem('user_token');
    }
  }

  sendCodeToEmail(): Observable<any> {
    return this.http.put(environment.apiUrl + '/auth/verifyEmail', {});
  }

  verifyEmail(code: string): Observable<any> {
    return this.http.put(environment.apiUrl + '/auth/verifyEmailCode', {
      code,
    });
  }
}
