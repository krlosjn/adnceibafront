import { NgModule } from '@angular/core';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: 'listar',
        component: ListarClienteComponent
      },
      {
        path: 'crear',
        component: CrearClienteComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
