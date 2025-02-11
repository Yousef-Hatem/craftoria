import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getLoggedUser(): Observable<{ data: User }> {
    return this.http.get<{ data: User }>(environment.apiUrl + '/users/getMe');
  }

  updateLoggedUser(data: any): Observable<{ data: User }> {
    return this.http.put<{ data: User }>(
      environment.apiUrl + '/users/updateMe',
      data,
    );
  }

  updateLoggedUserPassword(
    password: string,
    passwordConfirm: string,
  ): Observable<{ data: User; token: string }> {
    return this.http.put<{ data: User; token: string }>(
      environment.apiUrl + '/users/changeMyPassword',
      { password, passwordConfirm },
    );
  }
}
