import { NgModule } from '@angular/core';
import { ListarPagoComponent } from './components/listar-pago/listar-pago.component';
import { RouterModule, Routes } from '@angular/router';
import { PagoComponent } from './components/pago/pago.component';
import { CrearPagoComponent } from './components/crear-pago/crear-pago.component';

const routes: Routes = [
  {
    path: '',
    component: PagoComponent,
    children: [
      {
        path: 'listar',
        component: ListarPagoComponent
      },
      {
        path: 'crear',
        component: CrearPagoComponent
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
