import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/services/cliente.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ListarClienteComponent } from './listar-cliente.component';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

describe('ListarClienteComponent', () => {
  let component: ListarClienteComponent;
  let fixture: ComponentFixture<ListarClienteComponent>;
  let clienteService: ClienteService;

  const listaClientes: Cliente[] = [
    new Cliente(1, 'Carlos', 'CC', '1152205388'),
    new Cliente(2, 'Maria', 'CC', '1152205387')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarClienteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ListarClienteComponent, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'consultar').and.returnValue(
      of(listaClientes)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listarCliente.subscribe(resultado => {
      expect(resultado.length).toBe(2);
    });
  });
});
