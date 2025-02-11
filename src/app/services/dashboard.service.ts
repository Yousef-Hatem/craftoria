import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() {}

  getDashboardData() {
    return {
      newOrders: 120,
      totalSales: 50000,
      newCustomers: 30,
      pendingOrders: 15,
      date:"vs. last month",
      topSellingProducts: [
        { name: 'Bags ', sales: 300 },
        { name: 'Dress', sales: 200 },
        { name: ' Mugs', sales: 150 }
      ],
      mostSearchedProducts: [
        { name: 'Bags', searches: 500 },
        { name: 'Dress', searches: 450 },
        { name: 'Mugs', searches: 300 }
      ],
      salesAnalysisChart:[
        { name: 'Bags', searches: 500 },
        { name: ' Dress', searches: 450 },
        { name: 'Mugs', searches: 300 }
      ],
      orderPercentageChart:[
        { name: 'laptop', searches: 500 },
        { name: 'Dress ', searches: 450 },
        { name: 'Mugs', searches: 300 }
      ],
    };
  }
}
