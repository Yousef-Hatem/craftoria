
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, MatIconModule,]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('topSellingChart') topSellingChart!: ElementRef;
  @ViewChild('mostSearchedChart') mostSearchedChart!: ElementRef;
  @ViewChild('salesAnalysisChart') salesAnalysisChart!: ElementRef;
  @ViewChild('orderPercentageChart') orderPercentageChart!: ElementRef;

  newOrders: number = 0;
  totalSales: number = 0;
  newCustomers: number = 0;
  pendingOrders: number = 0;
  date:string="vs. last month"
  topSellingProducts: any[] = [];
  mostSearchedProducts: any[] = [];

  constructor(private dashboardService: DashboardService, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    const dashboardData = this.dashboardService.getDashboardData();
    this.newOrders = dashboardData.newOrders;
    this.totalSales = dashboardData.totalSales;
    this.newCustomers = dashboardData.newCustomers;
    this.pendingOrders = dashboardData.pendingOrders;
    this.topSellingProducts = dashboardData.topSellingProducts;
    this.mostSearchedProducts = dashboardData.mostSearchedProducts;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createTopSellingChart();
      this.createMostSearchedChart();
      this.createSalesAnalysisChart();
      this.createOrderPercentageChart();
    }
  }

  createTopSellingChart() {
    if (!this.topSellingChart?.nativeElement) return;
    new Chart(this.topSellingChart.nativeElement, {
      type: 'bar',
      data: {
        labels: this.topSellingProducts.map(product => product.name),
        datasets: [{
          label: 'Sales',
          data: this.topSellingProducts.map(product => product.sales),
          backgroundColor: 'blue'
        }]
      }
    });
  }

  createMostSearchedChart() {
    if (!this.mostSearchedChart?.nativeElement) return;
    new Chart(this.mostSearchedChart.nativeElement, {
      type: 'bar',
      data: {
        labels: this.mostSearchedProducts.map(product => product.name),
        datasets: [{
          label: '  Number of searches',
          data: this.mostSearchedProducts.map(product => product.searches),
          backgroundColor: 'red'
        }]
      }
    });
  }

  createSalesAnalysisChart() {
    if (!this.salesAnalysisChart?.nativeElement) return;
    new Chart(this.salesAnalysisChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Electronics', 'Clothes', ' Housewares'],
        datasets: [{
          label: ' Sales analysis',
          data: [40, 30, 30],
          backgroundColor: ['green', 'yellow', 'blue']
        }]
      }
    });
  }

  createOrderPercentageChart() {
    if (!this.orderPercentageChart?.nativeElement) return;
    new Chart(this.orderPercentageChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Delivered ', 'In process ', 'Canceled '],
        datasets: [{
          label: ' Status of orders',
          data: [60, 30, 10],
          backgroundColor: ['green', 'orange', 'red']
        }]
      }
    });
  }
}
