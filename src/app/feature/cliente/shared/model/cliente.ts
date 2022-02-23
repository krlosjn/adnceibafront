export class Cliente
 {

    id: number;
    nombre: string;
    tipoIdentificacion: string;
    numeroIdentificacion: string;

    constructor( id: number, nombre: string, tipoIdentificacion: string, numeroIdentificacion: string){
        this.id = id;
        this.nombre = nombre;
        this.tipoIdentificacion = tipoIdentificacion;
        this.numeroIdentificacion = numeroIdentificacion;
    }

}
