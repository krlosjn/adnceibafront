import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { MaterialModule } from 'src/app/material.module';
import { ClienteService } from './shared/services/cliente.service';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { SharedModule } from '@shared/shared.module';




@NgModule({
  declarations: [
    ListarClienteComponent,
    ClienteComponent,
    CrearClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
