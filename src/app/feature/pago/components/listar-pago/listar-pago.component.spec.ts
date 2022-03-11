import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pago } from '../../shared/model/pago';
import { PagoService } from '../../shared/services/pago.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ListarPagoComponent } from './listar-pago.component';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

describe('Listar pago component', () => {
  let component: ListarPagoComponent;
  let fixture: ComponentFixture<ListarPagoComponent>;
  let pagoService: PagoService;

  const listarPago: Pago[] = [
    new Pago(1, '1234', 1, 200000, 170000, new Date(2022, 2 , 22), new Date(2022, 3, 22 ) ),
    new Pago(2, '4321', 1, 200000, 170000, new Date(2022, 2 , 21), new Date(2022, 3, 21 ) )
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPagoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ListarPagoComponent, HttpService, PagoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPagoComponent);
    component = fixture.componentInstance;
    pagoService = TestBed.inject(PagoService);
    spyOn(pagoService, 'consultar').and.returnValue(
      of(listarPago)
    );
    fixture.detectChanges();
  });

  it('Debería listas los pagos', () => {
    expect(component).toBeTruthy();
    component.listarPago.subscribe(resultado => {
      expect(resultado.length).toBe(2);
    });
  });
});
