import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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


  public dataSource = new MatTableDataSource<Cliente>();
  public listaCliente: Observable<Cliente[]>;
  public cliente: Cliente;

  public displayedColumns: string[] = [ 'id', 'nombre', 'tipoIdentificacion', 'numeroIdentificacion', 'acciones', 'accionesDos'];

  public clientesArray: Array<Cliente>;

  constructor(
    protected clienteService: ClienteService,
    private router: Router,
  ) {
    console.log('Constructor cliente');
  }


  ngOnInit(): void  {
    this.listaCliente = this.clienteService.consultar();
    this.listaCliente.subscribe(data => {
      this.dataSource.data = data;
    });
  }
  public enviarInformacion(element: any): void{
    console.log(element);
    this.router.navigate(['/clientes/crear', {obj: JSON.stringify(element)}]);

  }


  public eliminarInformacion(cliente: Cliente) {
    this.clienteService.eliminar(cliente)
      .subscribe(() => {
        this.router.navigate(['clientes/crear']);
      }
      );
  }

}
