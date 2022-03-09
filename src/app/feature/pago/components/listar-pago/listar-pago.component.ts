import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Pago } from '../../shared/model/pago';
import { PagoService } from '../../shared/services/pago.service';

@Component({
  selector: 'app-listar-pago',
  templateUrl: './listar-pago.component.html',
  styleUrls: ['./listar-pago.component.css']
})
export class ListarPagoComponent implements OnInit {

  public listarPago: Observable<Pago[]>;
  public pagosArray: Array<any>;
  displayedColumns: string[] = [ 'id', 'referenciaPago', 'cliente', 'valorBase', 'valorTotal', 'fechaRegistro', 'fechaProximoPago'];

  constructor(
    protected pagoService: PagoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.pagoService.consultar().subscribe((data) => {
     this.pagosArray = data;
     console.log('Hola mundo desde lista pagos component !', data);

   } );
 }

  enviarInformacion(element: any){
    console.log(element);
    this.router.navigate(['/pagos/crear', {obj: JSON.stringify(element)}]);

  }

  eliminarRegistro(id: number){
    Swal.fire({
      title: 'Está seguro que desea eliminar este pago?',
      text: 'Esta accion es irreversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pagoService.eliminar(id).subscribe(res => {
          if (res) {
            Swal.fire(
              'Pago eliminado!',
              'El pago ha sido eliminado exitosamente.',
              'success'
            ).then(() => window.location.reload());
          }
        });
      }
    });
  }

}
