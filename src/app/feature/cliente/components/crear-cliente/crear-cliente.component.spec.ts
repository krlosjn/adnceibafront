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

describe('crear cliente component ', () => {
  let componentClient: CrearClienteComponent;
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
    fixture.detectChanges();
    componentClient = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'guardar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('Debería crear el componente de crear cliente', () => {
    expect(componentClient).toBeTruthy();
  });

  it('formulario es inválido cuando esta vacio', () => {
    expect(componentClient.clienteForm.valid).toBeFalsy();
  });

  it('Registrando cliente', () => {
    expect(componentClient.clienteForm.valid).toBeFalsy();
    componentClient.clienteForm.controls.nombre.setValue('Carlos');
    componentClient.clienteForm.controls.tipoIdentificacion.setValue('CC');
    componentClient.clienteForm.controls.numeroIdentificacion.setValue('1152205388');
    expect(componentClient.clienteForm.valid).toBeTruthy();
    componentClient.crear();
    clienteService.guardar(componentClient.clienteForm.value).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
  });

});
