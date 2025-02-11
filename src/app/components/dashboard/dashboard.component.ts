import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { Product } from '../../interfaces/product';
import { finalize } from 'rxjs/operators';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBarModule  } from '@angular/material/progress-bar';
import { MatTableModule  } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports:[
    MatIcon,
    MatProgressBarModule,
    MatTableModule,
    CurrencyPipe
]
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  displayedColumns: string[] = ['image', 'name', 'price', 'stock', 'category', 'actions'];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.loading = true;
    this.productService.getProducts()
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (response) => this.products = response.data,
        error: (err) => console.error('Failed to load products:', err)
      });
  }

  openProductForm(product?: Product): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '600px',
      data: product || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.loadProducts();
    });
  }

  confirmDelete(product: Product): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Product',
        message: `Are you sure you want to delete ${product.title}?`
      }
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.productService.deleteProduct(product._id)
          .subscribe({
            next: () => this.loadProducts(),
            error: (err) => console.error('Delete failed:', err)
          });
      }
    });
  }
}