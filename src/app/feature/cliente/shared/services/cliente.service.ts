import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import {Cliente} from '../model/cliente';

@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) {}

  public consultar() {
    console.log('estamos consultar');
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes`, this.http.optsName('consultar clientes'));
  }

  public guardar(cliente: any){
    console.log('Estamos en crear cliente');
    return this.http.doPost<any, number>(`${environment.endpoint}/clientes`, cliente);
  }

  public eliminar(cliente: any) {
    console.log('Se ejecuta eliminar cliente');
    return this.http.doDelete<number>(`${environment.endpoint}/clientes/${cliente.id}`, this.http.optsName('Eliminar cliente'));
  }

}
