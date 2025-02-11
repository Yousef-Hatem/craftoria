import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ProductService } from '../.././services/product.service';
import { Product } from '../.././interfaces/product';
import { MatSpinner } from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  imports:[
    MatDialogModule,
    MatSpinner,
    MatIcon,
    MatError,
    MatLabel,
    MatFormField,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    NgIf
  ]
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditing = false;
  loading = false;
  categories = ['Art', 'Jewelry', 'Home Decor', 'Clothing', 'Crafts'];
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      category: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]],
      imageUrl: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    });

    if (data) {
      this.isEditing = true;
      this.productForm.patchValue(data);
      this.imagePreview = data.images[0];
    }
  }

  ngOnInit(): void {}

  onImageUrlChange(): void {
    const url = this.productForm.get('imageUrl')?.value;
    if (url) {
      this.imagePreview = url;
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    this.loading = true;
    const productData = this.productForm.value;

    const operation = this.isEditing 
      ? this.productService.updateProduct(this.data._id, productData)
      : this.productService.createProduct(productData);

    operation.subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error('Operation failed:', err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  get f() {
    return this.productForm.controls;
  }
}
