import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/services/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  public listaCliente: Observable<Cliente[]>;
  displayedColumns: string[] = [ 'id', 'nombre', 'tipoIdentificacion', 'numeroIdentificacion', 'acciones'];

  public clientesArray: Array<any>;

  constructor(
    protected clienteService: ClienteService,
    private router: Router,
  ) {
    console.log('Constructor ciente');
  }

  ngOnInit(): void {
     this.clienteService.consultar().subscribe((data) => {
      this.clientesArray = data;
      console.log('Hola mundo !', data);

    } );
  }

  enviarInformacion(element: any){
    console.log(element);
    this.router.navigate(['/clientes/crear', {obj: JSON.stringify(element)}]);

  }

}
