import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../../shared/components/dialog/dialog/dialog.component';
import { ClienteService } from '../../shared/services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(protected clienteService: ClienteService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  crear(){
    this.clienteService.guardar(this.clienteForm.value).subscribe(() => {
      this.router.navigate(['clientes/listar']);
    }, err => {
      if (err.error.nombreExcepcion && err.error.mensaje){
        const tituloSeparado = err.error.nombreExcepcion.replace(/([a-z](?=[A-Z]))/g, '$1 ');
        this.dialog.open(DialogComponent, { data: { title: tituloSeparado, content: err.error.mensaje}});
      }
    });
  }

  construirFormulario(){
    this.clienteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      tipoDocumento: new FormControl('', [Validators.required]),
      numeroDocumento: new FormControl('', [Validators.required]),
    });
  }
}
