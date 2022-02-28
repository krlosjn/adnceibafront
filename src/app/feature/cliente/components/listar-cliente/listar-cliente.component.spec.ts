import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/services/cliente.service';
import { of } from 'rxjs';

import { ListarClienteComponent } from './listar-cliente.component';

describe('ListarClientesComponent', () => {
  let component: ListarClienteComponent;
  let fixture: ComponentFixture<ListarClienteComponent>;
  let clienteService: ClienteService;

  const listaCliente: Cliente[] = [
    new Cliente(1, 'Carlos', 'CC' , '1152205388'),
    new Cliente(2, 'Maria', 'CC' , '1152205387'),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarClienteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ClienteService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'consultar').and.returnValue(
      of(listaCliente)
    );
    fixture.detectChanges();
  });

  it('Debería listar clientes', () => {
    expect(component).toBeTruthy();
    component.listaCliente.subscribe(resultado => {
      expect(resultado.length).toBe(2);
    });
  });
});
