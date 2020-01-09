import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor(private http: HttpClient) {
  }


  getRamos() {
    return this.http.get<any>(environment.uriApiGateware + environment.uriApiCatalogoRamos);
  }
  getConductos() {
    return this.http.get<any>(environment.uriApiGateware + environment.uriApiCatalogoConductos,
    );
  }
  getEstatusRecivo() {
    return this.http.get<any>(environment.uriApiGateware + environment.uriApiCatalogoEstatusRecibos);
  }

  getcampania() {
    return this.http.get<any>(environment.uriApiGateware + environment.uriApiCatalogoCampania);
  }


}
