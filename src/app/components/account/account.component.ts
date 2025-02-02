import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddressFormDialogComponent } from '../address-form-dialog/address-form-dialog.component';

@Component({
  selector: 'app-account',
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  readonly dialog = inject(MatDialog);
  addresses = [
    {
      governorate: 'Cairo',
      city: 'Nasr City',
      street: 'Makram Ebeid Street',
      building: '12',
      zipCode: '11765',
    },
    {
      governorate: 'Aswan',
      city: 'Aswan',
      street: 'Corniche Street',
      building: '25',
      zipCode: '81511',
    },
  ];

  openAddressFormDialog(index?: number): void {
    const data = index !== undefined ? this.addresses[index] : undefined;

    const dialogRef = this.dialog.open(AddressFormDialogComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        if (index !== undefined) {
          this.addresses[index] = result;
        } else {
          this.addresses.push(result);
        }
      }
    });
  }

  removeAddress(index: number) {
    this.addresses.splice(index, 1);
  }
}
