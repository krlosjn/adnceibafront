import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPagoComponent } from './crear-pago.component';

describe('CrearClienteComponent', () => {
  let component: CrearPagoComponent;
  let fixture: ComponentFixture<CrearPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
