import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClienteService } from './cliente.service';
import { environment } from 'src/environments/environment';
import { HttpService } from '@core/services/http.service';
import { Cliente } from '../model/cliente';
import { HttpResponse } from '@angular/common/http';

describe('PagoService', () => {
  let httpMock: HttpTestingController;
  let service: ClienteService;
  const apiEndpointCliente = `${environment.endpoint}/clientes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    const clienteService: ClienteService = TestBed.inject(ClienteService);
    expect(clienteService).toBeTruthy();
  });

  it('deberia listar clientes', () => {
    const dummyclientes = [
      new Cliente(1, 'Carlos', 'CC', '1152205388'),
      new Cliente(2, 'Maria', 'CC', '1152205387')
    ];
    service.consultar().subscribe(clientes => {
      expect(clientes.length).toBe(2);
      expect(clientes).toEqual(dummyclientes);
    });
    const req = httpMock.expectOne(apiEndpointCliente);
    expect(req.request.method).toBe('GET');
    req.flush(dummyclientes);
  });

  it('deberia crear un pago', () => {
    const dummyCliente = {
      nombre: 'prueba',
      tipoDocumento: 'CC',
      numeroDocumento: '1152205388'
    };

    service.guardar(dummyCliente).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointCliente);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

});
