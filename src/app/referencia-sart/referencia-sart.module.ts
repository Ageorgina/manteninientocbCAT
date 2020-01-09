import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenciaSartRoutingModule } from './referencia-sart-routing.module';
import { ReferenciaSartComponent } from './referencia-sart.component';
import { NuevaReferenciaComponent } from './nueva-referencia/nueva-referencia.component';
import { EnviarCorreoComponent } from './enviar-correo/enviar-correo.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultaComponent } from './consulta/consulta.component';
import { CatalogosService } from '../_services';
import { fakeBackendProvider } from '../_helpers/fake-backend';
import { HttpClientModule } from '@angular/common/http';
import { PagoPrimaComponent } from './pago-prima/pago-prima.component';
import { AportacionPolizasVidaComponent } from './aportacion-polizas-vida/aportacion-polizas-vida.component';
import { PagoPolizasConvivenciasComponent } from './pago-polizas-convivencias/pago-polizas-convivencias.component';
import { ReferenciaCreadaComponent } from './referencia-creada/referencia-creada.component';


@NgModule({
  declarations: [
    ReferenciaSartComponent, 
    NuevaReferenciaComponent, 
    EnviarCorreoComponent,
     ConsultaComponent,
     PagoPrimaComponent,
     AportacionPolizasVidaComponent,
     PagoPolizasConvivenciasComponent,
     ReferenciaCreadaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReferenciaSartRoutingModule,   
    FormsModule,
    MaterialModule
  ], 
  providers: [
    CatalogosService,
    fakeBackendProvider
  ],
  entryComponents:[
     NuevaReferenciaComponent,
      EnviarCorreoComponent, 
      ConsultaComponent,
      PagoPrimaComponent,
      AportacionPolizasVidaComponent,
      PagoPolizasConvivenciasComponent,
      ReferenciaCreadaComponent]
})
export class ReferenciaSartModule { }
