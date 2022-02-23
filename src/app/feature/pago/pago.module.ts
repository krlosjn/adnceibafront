import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './pago-routing.module';
import { ListarPagoComponent } from './components/listar-pago/listar-pago.component';
import { MaterialModule } from 'src/app/material.module';
import { PagoService } from './shared/services/pago.service';
import { PagoComponent } from './components/pago/pago.component';
import { CrearPagoComponent } from './components/crear-pago/crear-pago.component';
import { SharedModule } from '@shared/shared.module';




@NgModule({
  declarations: [
    ListarPagoComponent,
    PagoComponent,
    CrearPagoComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [PagoService]
})
export class PagoModule { }
