export class Pago {

    id: number;
    referenciaPago: string;
    cliente: number;
    valorBase: number;
    valorTotal: number;
    fechaRegistro: Date;
    fechaProximoPago: Date;



    // tslint:disable-next-line: max-line-length
    constructor( id: number, referenciaPago: string, cliente: number,  valorBase: number, valorTotal: number, fechaRegistro: Date , fechaProximoPago: Date){
      this.id = id;
      this.referenciaPago = referenciaPago;
      this.cliente = cliente;
      this.valorBase = valorBase;
      this.valorTotal = valorTotal;
      this.fechaRegistro = fechaRegistro;
      this.fechaProximoPago = fechaProximoPago;
  }
}
