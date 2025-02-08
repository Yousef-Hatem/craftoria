import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddressFormDialogComponent } from '../address-form-dialog/address-form-dialog.component';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { passwordMatchValidator } from '../../validators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [
    RouterLink,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  private fb = inject(FormBuilder);
  readonly dialog = inject(MatDialog);
  readonly auth = inject(AuthService);
  readonly userService = inject(UserService);

  isBrowser = false;
  user!: User;
  username: string = '';
  userEmail: string = '';
  loading = {
    updateUser: false,
    updatePassword: false,
  };
  errorMsg = {
    updateUser: '',
    updatePassword: '',
  };
  updateUserForm = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.min(10)]),
  });
  updatePasswordForm = this.fb.group(
    {
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl(''),
    },
    { validator: passwordMatchValidator },
  );
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

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.getUserData();
    }
  }

  getUserData(): void {
    this.user = <User>this.auth.getUser();
    this.displayUserData(this.user);

    this.userService.getLoggedUser().subscribe(
      (res) => {
        this.user = res.data;
        this.displayUserData(this.user);
        this.auth.setUser(this.user);
      },
      (err) => console.log(err),
    );
  }

  displayUserData({ name, email, phone }: User): void {
    this.username = name;
    this.userEmail = email;
    this.updateUserForm.setValue({ name, email, phone });
  }

  getUserFromData(): any {
    let data: any = null;
    const { name, email, phone } = this.updateUserForm.value;

    if (name !== this.user.name) data = { name };
    if (email !== this.user.email) {
      try {
        data.email = email;
      } catch {
        data = { email };
      }
    }
    if (phone !== this.user.phone) {
      try {
        data.phone = phone;
      } catch {
        data = { phone };
      }
    }

    return data;
  }

  updateUserData(): void {
    const data: any = this.getUserFromData();

    if (this.updateUserForm.valid && data !== null) {
      this.loading.updateUser = true;
      this.updateUserForm.disable();

      this.userService.updateLoggedUser(data).subscribe(
        (res) => {
          this.auth.setUser(res.data);
          this.user = res.data;
          this.displayUserData(res.data);

          this.errorMsg.updateUser = '';
          this.loading.updateUser = false;
          this.updateUserForm.enable();
        },
        (err) => {
          if (err.status !== 400) {
            console.log(err);
          }

          this.errorMsg.updateUser = err.error.errors[0].msg;

          this.loading.updateUser = false;
          this.updateUserForm.enable();
        },
      );
    }
  }

  changePassword(): void {
    if (this.updatePasswordForm.valid) {
      this.loading.updatePassword = true;
      this.updatePasswordForm.disable();
      const { password, passwordConfirm } = this.updatePasswordForm.value;
      this.userService
        .updateLoggedUserPassword(password, passwordConfirm)
        .subscribe(
          (res) => {
            this.auth.setUser(res.data);
            this.auth.setToken(res.token);

            this.loading.updatePassword = false;
            this.updatePasswordForm.enable();
            this.updatePasswordForm.reset();
            this.updatePasswordForm.clearValidators();
            this.updatePasswordForm.clearAsyncValidators();
          },
          (err) => console.log(err),
        );
    }
  }

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
