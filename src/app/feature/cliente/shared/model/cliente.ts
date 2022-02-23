export class Cliente
 {

    id: number;
    nombre: string;
    tipoDocumento: string;
    numeroDocumento: string;

    constructor( id: number, nombre: string, tipoDocumento: string, numeroDocumento: string){
        this.id = id;
        this.nombre = nombre;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
    }

}
