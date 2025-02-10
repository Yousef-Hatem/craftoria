import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-selling',
  imports: [CommonModule],
  templateUrl: './best-selling.component.html',
  styleUrl: './best-selling.component.css'
})
export class BestSellingComponent implements OnInit {
  products = [
    { name: 'Handmade Hat', price: 30, description: 'A beautiful handmade hat.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade Earrings', price: 15, description: 'Elegant handmade earrings.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJvMF20yIwhVlEN6iH0IHNkvKPA0_6RUMsQ&s' },
    { name: 'Handmade Necklace', price: 25, description: 'Unique handmade necklace.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASHlSrQmwqlaT9qxAsK39CG0KyJSGz7WU8Q&s' },
    { name: 'Handmade Bracelet', price: 18, description: 'Charming handmade bracelet.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade Scarf', price: 20, description: 'Cozy and stylish handmade scarf.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade Gloves', price: 22, description: 'Warm and comfy handmade gloves.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade Wallet', price: 40, description: 'Elegant and durable handmade wallet.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dbWBUKK5kwi_zGRXrTDw8j6pjtXrv5I0Uw&s' },
    { name: 'Handmade Belt', price: 35, description: 'Premium handmade leather belt.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade Shoes', price: 70, description: 'Comfortable and fashionable\n handmade shoes.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-5-AXbmDLQbrlijuYKnmkSrHoe1CkCGIdQ&s' },
    { name: 'Handmade Sunglasses', price: 45, description: 'Trendy and protective\n handmade sunglasses.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade Jacket', price: 100, description: 'Stylish handmade jacket\n for all seasons.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade Skirt', price: 60, description: 'Chic handmade skirt.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade T-shirt', price: 25, description: 'Comfortable and stylish\n handmade T-shirt.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade Tote Bag', price: 50, description: 'Eco-friendly and spacious\n handmade tote bag.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade Pillow', price: 35, description: 'Comfortable handmade pillow.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade Rug', price: 80, description: 'Beautifully designed handmade rug.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
    { name: 'Handmade Wall Art', price: 90, description: 'Creative handmade wall art.', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPx0GUoSUpyS-tdAJARwX6-F1-N5-Oo9HzwWKStVkMtyvMEOrkIRgwfqVWz31zkGoQVMcLkLS_TG9nGbbZtBDnTQ3Au7LMUg-siiuPxAb8JXhjRTI5-WA7A&usqp=CAc' },
  ];


  constructor() {}

  ngOnInit(): void {}
}
