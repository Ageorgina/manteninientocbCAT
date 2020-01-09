import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoCuentasComponent } from './mantenimiento-cuentas.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PolizaComponent } from './poliza/poliza.component';

const routes: Routes = [
  { path: '', component: MantenimientoCuentasComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'poliza', component: PolizaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoCuentasRoutingModule { }
