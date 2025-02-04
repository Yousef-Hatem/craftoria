import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCartComponent } from './delivery-cart.component';

describe('DeliveryCartComponent', () => {
  let component: DeliveryCartComponent;
  let fixture: ComponentFixture<DeliveryCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
