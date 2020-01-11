import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { ReciboService, CatalogosService } from './_services';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptor } from './_helpers/auth-interceptor-api-key';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BusquedaPipe } from './_pipes/busqueda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaPipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule ,
  ],
  providers: [
    ReciboService,
    CatalogosService,
    authInterceptor,
    fakeBackendProvider
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

