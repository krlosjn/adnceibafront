import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../../shared/components/dialog/dialog/dialog.component';
import { PagoService } from '../../shared/services/pago.service';

@Component({
  selector: 'app-crear-pago',
  templateUrl: './crear-pago.component.html',
  styleUrls: ['./crear-pago.component.css']
})
export class CrearPagoComponent implements OnInit {

  pagoForm: FormGroup;

  constructor(protected pagoService: PagoService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  crearPago(){
    //const body = {...this.pagoForm.value, fecha: this.pagoService.formatearFecha(this.pagoForm.get('fechaRegistro')?.value)};

    this.pagoService.guardar(this.pagoForm.value).subscribe(() => {
      console.log(this.pagoForm);
      this.router.navigate(['pagos/listar']);
    }, err => {
      if (err.error.nombreExcepcion && err.error.mensaje){
        const tituloSeparado = err.error.nombreExcepcion.replace(/([a-z](?=[A-Z]))/g, '$1 ');
        this.dialog.open(DialogComponent, { data: { title: tituloSeparado, content: err.error.mensaje}});
      }
    });
  }

  construirFormulario(){
    this.pagoForm = new FormGroup({
      referenciaPago: new FormControl('', [Validators.required]),
      idCliente: new FormControl('', [Validators.required]),
      valorBase: new FormControl('', [Validators.required]),
      fechaRegistro: new FormControl('', [Validators.required])
    });
  }
}
