import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { PagoService } from '../../shared/services/pago.service';

import { CrearPagoComponent } from './crear-pago.component';


describe('crear pago component ', () => {
  let componentPago: CrearPagoComponent;
  let fixture: ComponentFixture<CrearPagoComponent>;
  let pagoService: PagoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPagoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [PagoService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPagoComponent);
    componentPago = fixture.componentInstance;
    pagoService = TestBed.inject(PagoService);
    spyOn(pagoService, 'guardar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('Debería crear el componente de crear pago', () => {
    expect(componentPago).toBeTruthy();
  });

  it('formulario es inválido cuando esta vacio', () => {
    expect(componentPago.pagoForm.valid).toBeFalsy();
  });

  it('Registrando pago', () => {

    expect(componentPago.pagoForm.valid).toBeFalsy();
    componentPago.pagoForm.controls.referenciaPago.setValue('1234');
    componentPago.pagoForm.controls.cliente.setValue(1);
    componentPago.pagoForm.controls.aplicaDescuento.setValue(true);
    componentPago.pagoForm.controls.valorBase.setValue(200000);
    componentPago.pagoForm.controls.fechaRegistro.setValue(new Date(2022, 3 , 11));

    expect(componentPago.pagoForm.valid).toBeTruthy();

    componentPago.crearPago();
    pagoService.guardar(componentPago.pagoForm.value).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
  });

});
