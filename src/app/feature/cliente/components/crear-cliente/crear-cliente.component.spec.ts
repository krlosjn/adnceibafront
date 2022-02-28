import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClienteComponent } from './crear-cliente.component';
import { ClienteService } from '../../shared/services/cliente.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';

describe('CrearRestauranteComponent', () => {
  let component: CrearClienteComponent;
  let fixture: ComponentFixture<CrearClienteComponent>;
  let clienteService: ClienteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearClienteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [ClienteService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'guardar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es inválido cuando esta vacio', () => {
    expect(component.clienteForm.valid).toBeFalsy();
  });

  it('Registrando cliente', () => {
    expect(component.clienteForm.valid).toBeFalsy();
    component.clienteForm.controls.nombre.setValue('Carlos');
    component.clienteForm.controls.tipoIdentificacion.setValue('CC');
    component.clienteForm.controls.numeroIdentificacion.setValue('1152205388');
    expect(component.clienteForm.valid).toBeTruthy();

    component.crear();


    clienteService.guardar(component.clienteForm.value).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
  });

});
