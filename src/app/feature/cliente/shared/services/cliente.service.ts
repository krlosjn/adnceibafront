import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import {Cliente} from '../model/cliente';

@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes`, this.http.optsName('consultar clientes'));
  }

  public guardar(cliente: any){
    return this.http.doPost<any, number>(`${environment.endpoint}/clientes`, cliente);
  }

}
