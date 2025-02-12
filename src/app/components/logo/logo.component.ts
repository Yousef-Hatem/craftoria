import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  @Input() height: number = 40;
  @Input() fill: string = '';
  @Input() background: string = '#ffffff';
}
