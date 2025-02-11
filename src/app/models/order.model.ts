export interface Order {
  id: number;  
  customerName: string;
  items: OrderItem[];
  totalPrice: number;
  status: 'shipped' | 'delivered' | 'confirmed'|'cancelled';
  paymentMethod: 'cash' | 'visa';
  estimatedDeliveryDays?: number;
  shippedAt?: Date;
}

export interface OrderItem {
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
}
