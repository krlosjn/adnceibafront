import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import {Pago} from '../model/pago';

@Injectable()
export class PagoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Pago[]>(`${environment.endpoint}/pagos`, this.http.optsName('consultar pagos'));
  }

  public guardar(pago: any){
    return this.http.doPost<any, number>(`${environment.endpoint}/pagos`, pago);
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/pagos/${id}`);
  }

  public formatearFecha(fecha: Date): string{
    return `${formatDate(
      fecha,
      'yyyy-MM-dd',
      'es-CO',
      'UTC'
    )}`;
  }



}
