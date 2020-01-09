import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CampaniasService {

  constructor(private http: HttpClient) { }

  getcampania(requestCampania:any) {

 
     
    let myParams = new HttpParams();
    myParams = myParams.append('productoTecnico', requestCampania.recibo.clvTecnico);
    myParams = myParams.append('productoComercial', requestCampania.recibo.clvComercial);
    myParams = myParams.append('claveFormaPago', requestCampania.recibo.formaPago.clvFormaPago);
    myParams = myParams.append('emision', 'true');
    myParams = myParams.append('fecha', requestCampania.date  );
 
    
    return this.http.get<any>(environment.uriApiGatewareGnp + environment.uriApiCatalogoCampaniaEspecifica, { params: myParams });

  }
}
