import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferenciaSartComponent } from './referencia-sart.component';
import { PagoPolizasConvivenciasComponent } from './pago-polizas-convivencias/pago-polizas-convivencias.component';
import { AportacionPolizasVidaComponent } from './aportacion-polizas-vida/aportacion-polizas-vida.component';
import { PagoPrimaComponent } from './pago-prima/pago-prima.component';

const routes: Routes = [
  { path: '', component: ReferenciaSartComponent },
  { path: 'pago/prima', component: PagoPrimaComponent },
  { path: 'aportacion/poliza/vida', component: AportacionPolizasVidaComponent },
  { path: 'pago/convivencia', component: PagoPolizasConvivenciasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenciaSartRoutingModule { }
