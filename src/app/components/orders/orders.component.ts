
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  imports: [CommonModule,MatIconModule,],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  getRemainingTime(order: Order): string {
    if (order.status !== 'shipped' || !order.estimatedDeliveryDays || !order.shippedAt) {
      return '';
    }

    const shippedTime = new Date(order.shippedAt).getTime();
    const deliveryTime = shippedTime + order.estimatedDeliveryDays * 24 * 60 * 60 * 1000;
    const now = Date.now();
    const remainingMs = deliveryTime - now;

    if (remainingMs <= 0) {
      return 'Arriving soon!';
    }

    const remainingHours = Math.floor(remainingMs / (1000 * 60 * 60));
    return `${remainingHours} hour(s) left`;
  }

  getProgress(order: Order): number {
    if (!order.shippedAt || !order.estimatedDeliveryDays) {
      return 0;
    }

    const shippedTime = new Date(order.shippedAt).getTime();
    const deliveryTime = shippedTime + order.estimatedDeliveryDays * 24 * 60 * 60 * 1000;
    const now = Date.now();
    const elapsed = now - shippedTime;
    const total = deliveryTime - shippedTime;

    return Math.min((elapsed / total) * 100, 100);
  }

  confirmOrder(orderId: number) {
    this.orderService.confirmOrder(orderId);
    this.orders = this.orderService.getOrders();
  }
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'status-confirmed';
      case 'shipped':
        return 'status-shipped';
      case 'delivered':
        return 'status-delivered';
      case 'cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  }

}
