import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReciboComponent } from './recibo.component';
import { PagoPolizaConivenciaComponent } from './pago-poliza-conivencia/pago-poliza-conivencia.component';
import { PagarComponent } from './pagar/pagar.component';
import { VerRecibosComponent } from './ver-recibos/ver-recibos.component';

const routes: Routes = [
  { path: '', component: ReciboComponent },
  { path: 'pago-poliza-conivencia', component: PagoPolizaConivenciaComponent },
  { path: 'pagar', component: PagarComponent },
  { path: 'ver-recibos', component: VerRecibosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReciboRoutingModule { }
