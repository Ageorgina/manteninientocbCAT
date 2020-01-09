import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReciboService {


  constructor(private http: HttpClient
  ) {}


  get(requestRecibo: any) {
    return this.http.post<any>(environment.uriApiGateware +environment.uriApiRecibos, requestRecibo);
  }

  getConteoRecibos(requestRecibo: any) {
    return this.http.post<any>(environment.uriApiGatewareOscp + environment.uriApiConteoRecibos, requestRecibo);
  }
  getRecibosEstatus(requestRecibo: any) {
    return this.http.post<any>(environment.uriApiGatewareOscp + environment.uriApiConsultaEstatus, requestRecibo);
  }
  getNumeroRecibos(requestRecibo: any) {
    return this.http.post<any>(environment.uriApiGatewareOscp + environment.uriApiConsultanumeroRecibo, requestRecibo);
  }

  getNumeroPoliza(requestRecibo: any) {
    return this.http.post<any>(environment.uriApiGatewareOscp + environment.uriApiConsultanumeroPoliza, requestRecibo);
  }

}
