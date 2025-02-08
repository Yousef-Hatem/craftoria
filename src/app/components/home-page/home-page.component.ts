import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [MatButtonModule, MatCardModule, MatIconModule,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl:    './home-page.component.css',

})
export class HomePageComponent {
  products = [
    { name: "Valentine's Day Gifts", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7tZbNudXOAYZJbcncc93QTuC2HLbspEk0cTE2eQD2wUsg0c1XndBxinnHG-RSkJ_Eo-zLxAcfmSp_gQ_wLegbtHsIaOl3VxaO9AMdtMtuQv2NS1GVVhq9WzpVJ1JwuoaN99SCzA&usqp=CAc" },
    { name: "Galentine Gifts", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRI_zBg0B97UEnzuOVm0dFoHnooHgjF0aLAZM3Dpq4slmL6O7cMSDbvy-eLllNuCDHMQIP2wEymnvKyUDFsr_zug9QhBxNq5xpJCwPATT3zWsIpTmifM0-ACLpxXj12TEauhLr5TTI&usqp=CAc" },
    { name: "Gifts for Him", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHTiCdfX-mofvgq6w7X7c9HDGKmBtm2l65T3XdZ1LxSMSVewt4ulZwG0z5jbXRpXKI71XA5oKArdaNea2yasrakHC80bB8A8jm_2Xb7bmhX_HXptC-O8Ev9FGPEtXx326tbYVyhcA&usqp=CAc" },
    { name: "Anniversary Gifts", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXtUZT1s46eSahz9yPDPz43ZV8m5WO0qr-ZELBHUat6HF-FGlAYHJz_jpqfQnB8snu-WG3f1mr68y8BsdF1hquZw6uppzUlR5o6xrwj2-n2qJPmzVyCKF7_68fQvGsLTCDqm8iLMM&usqp=CAc" },
    { name: "Personalized Gifts", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQw__OItv60e_Kx_o2ANc24HJZjZuzdyfr4Ja3JsAbuDU1yYBTND9XxfQYlw3eijBQAgQ8wJOyK8mV8pOTnLo9lxj7_22cSiie_4fiuha0VpoHdLRFCyvPWU0n3DD8VQ9ExjDm-T44&usqp=CAc" },
    { name: "Lab Grown Diamonds", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7HM4CDhPf3o8NVMzrkgs_wC9J3c66TLpznqtlnmLe6_IplAhfWUFXADMyIHBwQm5pQisCbqJB-VoYCzfecZCg2d851pQQCpjKroE3hMr3Ul07JuxR79KWoGk&usqp=CAc" },
  ];
  hoverCard = false;
  hoverButton = false;
}
