import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../interfaces/address';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  getLoggedUserAddresses(): Observable<{ data: Address[] }> {
    return this.http.get<{ data: Address[] }>(
      environment.apiUrl + '/addresses',
    );
  }

  addAddress(address: Address): Observable<{ data: Address[] }> {
    return this.http.post<{ data: Address[] }>(
      environment.apiUrl + '/addresses',
      address,
    );
  }

  updateAddress(
    addressId: string,
    update: any,
  ): Observable<{ data: Address[] }> {
    return this.http.put<{ data: Address[] }>(
      environment.apiUrl + '/addresses/' + addressId,
      update,
    );
  }

  deleteAddress(addressId: string): Observable<{ data: Address[] }> {
    return this.http.delete<{ data: Address[] }>(
      environment.apiUrl + '/addresses/' + addressId,
    );
  }
}
