import { Category } from './category';

export interface Product {
  _id: string;
  title: string;
  price: number;
  originalPrice: number;
  category: Category;
  description: string;
  quantity: number;
  images: string[];
  createdAt: string;
}
