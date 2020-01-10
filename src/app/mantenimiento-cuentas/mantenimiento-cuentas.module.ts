import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoCuentasRoutingModule } from './mantenimiento-cuentas-routing.module';
import { MantenimientoCuentasComponent } from './mantenimiento-cuentas.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ClienteComponent } from './cliente/cliente.component';
import { PolizaComponent } from './poliza/poliza.component';
import { TarjetaAsignadaComponent } from './tarjeta-asignada/tarjeta-asignada.component';
import { CatalogosService } from '../_services';
import { fakeBackendProvider } from '../_helpers/fake-backend';
import { DatosPolizaComponent } from './datos-poliza/datos-poliza.component';
import { DatosTarjetaAsignadaComponent } from './datos-tarjeta-asignada/datos-tarjeta-asignada.component';
import { AsignacionTarjetaExitosaComponent } from './asignacion-tarjeta-exitosa/asignacion-tarjeta-exitosa.component';
import { AsignacionTarjetaComponent } from './asignacion-tarjeta/asignacion-tarjeta.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MantenimientoCuentasComponent,
    ClienteComponent,
     PolizaComponent,
     TarjetaAsignadaComponent,
     DatosPolizaComponent,
     DatosTarjetaAsignadaComponent,
     AsignacionTarjetaExitosaComponent,
     AsignacionTarjetaComponent],
  imports: [
    CommonModule,
    MantenimientoCuentasRoutingModule,
    FormsModule,
    MaterialModule,
    NgbModule,
  ],
  providers: [
    CatalogosService,
    fakeBackendProvider
  ],
  entryComponents: [
    TarjetaAsignadaComponent
  ]

})
export class MantenimientoCuentasModule { }
