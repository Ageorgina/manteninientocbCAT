import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReciboRoutingModule } from './recibo-routing.module';
import { ReciboComponent } from './recibo.component';
import { ConsultaPagoComponent } from './consulta-pago/consulta-pago.component';
import { PagarComponent } from './pagar/pagar.component';
import { GenerarReferenciaComponent } from './generar-referencia/generar-referencia.component';
import { MesesSinInteresesComponent } from './meses-sin-intereses/meses-sin-intereses.component';
import { PagoPolizaConivenciaComponent } from './pago-poliza-conivencia/pago-poliza-conivencia.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatosTarjetaComponent } from './datos-tarjeta/datos-tarjeta.component';
import { PagoRealizarComponent } from './pago-realizar/pago-realizar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DatosPagadorComponent } from './datos-pagador/datos-pagador.component';
import { ReciboService, CatalogosService, EmailService, MantenimientoCuentasService } from '../_services';
import { fakeBackendProvider } from '../_helpers/fake-backend';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './cliente/cliente.component';
import { FechasPipe } from '../_pipes/fechas.pipe';
import { VerRecibosComponent } from './ver-recibos/ver-recibos.component';
import { DatosPolizaComponent } from './datos-poliza/datos-poliza.component';
import { DatosRecibosComponent } from './datos-recibos/datos-recibos.component';
import { PagoEmailComponent } from './pago-email/pago-email.component';
import { PagoEmailEnviadoComponent } from './pago-email-enviado/pago-email-enviado.component';
import { PagoService } from '../_services';
import {NgxMaskModule} from 'ngx-mask';
import { PagoFallidoComponent } from './pago-fallido/pago-fallido.component';
import { PagoExitosoComponent } from './pago-exitoso/pago-exitoso.component';
import { PagoMesesSinInteresesComponent } from './pago-meses-sin-intereses/pago-meses-sin-intereses.component'
import { authInterceptor } from '../_helpers/auth-interceptor-api-key';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    FechasPipe,
    ReciboComponent,
    ConsultaPagoComponent,
    PagarComponent,
    GenerarReferenciaComponent,
    MesesSinInteresesComponent,
    PagoPolizaConivenciaComponent,
    DatosTarjetaComponent,
    PagoRealizarComponent,
    DetalleComponent,
    DatosPagadorComponent,
    ClienteComponent,
    VerRecibosComponent,
    DatosPolizaComponent,
    DatosRecibosComponent,
    PagoEmailComponent,
    PagoEmailEnviadoComponent,
    PagoFallidoComponent,
    PagoExitosoComponent,
    PagoMesesSinInteresesComponent],
  imports: [
    NgbModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReciboRoutingModule,
    FormsModule,
    MaterialModule,
    NgxMaskModule.forRoot({
      showMaskTyped : true,
    }),

  ],
  providers: [
    authInterceptor,
    fakeBackendProvider,
    CatalogosService,
    EmailService,
    PagoService,
    ReciboService,

  ],
  entryComponents: [
    ReciboComponent,
    ConsultaPagoComponent,
    PagarComponent,
    GenerarReferenciaComponent,
    MesesSinInteresesComponent,
    PagoPolizaConivenciaComponent,
    DatosTarjetaComponent,
    PagoRealizarComponent,
    DetalleComponent,
    DatosPagadorComponent,
    ClienteComponent,
    VerRecibosComponent,
    DatosPolizaComponent,
    DatosRecibosComponent,
    PagoEmailComponent,
    PagoEmailEnviadoComponent,
    PagoFallidoComponent,
    PagoExitosoComponent,
    PagoMesesSinInteresesComponent]
})
export class ReciboModule { }
