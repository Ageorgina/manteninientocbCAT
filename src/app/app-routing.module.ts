import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'recibo', loadChildren: () => import('./recibo/recibo.module').then(m => m.ReciboModule) },
   { path: 'referencia-sart', loadChildren: () => import('./referencia-sart/referencia-sart.module').then(m => m.ReferenciaSartModule) }, 
   { path: 'mantenimiento-cuentas', loadChildren: () => import('./mantenimiento-cuentas/mantenimiento-cuentas.module').then(m => m.MantenimientoCuentasModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
