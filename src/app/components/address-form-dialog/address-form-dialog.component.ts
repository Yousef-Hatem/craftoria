import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address-form-dialog',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './address-form-dialog.component.html',
  styleUrl: './address-form-dialog.component.scss',
})
export class AddressFormDialogComponent {
  readonly dialogRef = inject(MatDialogRef);
  readonly data = inject(MAT_DIALOG_DATA);
  title = 'Add a new address';
  form = new FormGroup({
    governorate: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    building: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
  });

  constructor() {
    if (this.data !== undefined) {
      this.form.setValue(this.data);
      this.title = 'Edit your address';
    }
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
