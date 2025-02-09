import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-delivery-cart',
  imports: [],
  templateUrl: './delivery-cart.component.html',
  styleUrl: './delivery-cart.component.css',

})
export class DeliveryCartComponent {
  hoverCard = false;
  hoverButton = false;
}
