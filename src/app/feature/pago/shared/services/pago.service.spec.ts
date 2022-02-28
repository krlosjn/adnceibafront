import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PagoService } from './pago.service';
import { environment } from 'src/environments/environment';
import { HttpService } from '@core/services/http.service';
import { Pago } from '../model/pago';
import { HttpResponse } from '@angular/common/http';

describe('PagoService', () => {
  let httpMock: HttpTestingController;
  let service: PagoService;
  const apiEndPointPago = `${environment.endpoint}/pagos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PagoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PagoService);
  });

  it('should be created', () => {
    const pagoService: PagoService = TestBed.inject(PagoService);
    expect(pagoService).toBeTruthy();
  });

  it('deberia listar pagos', () => {
    const dummyPagos = [
      new Pago(1, '1234', 1 , 200000, 170000, new Date(2022, 2, 22), new Date(2022, 3, 22)),
      new Pago(2, '4321', 1 , 200000, 170000, new Date(2022, 2, 22), new Date(2022, 3, 22))
    ];
    service.consultar().subscribe(pagos => {
      expect(pagos.length).toBe(2);
      expect(pagos).toEqual(dummyPagos);
    });
    const req = httpMock.expectOne(apiEndPointPago);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPagos);
  });

  it('deberia crear un pago', () => {
    const dummyPago = {
      referenciaPago: '1234',
      idCliente: '1',
      valorBase: 200000,
      fechaRegistro: new Date(2022, 2, 22)
    };

    service.guardar(dummyPago).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndPointPago);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });


});
