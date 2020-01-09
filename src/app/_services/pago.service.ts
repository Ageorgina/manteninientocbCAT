import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private http: HttpClient) {  
  }

  pagarRecibo(requestRecibo: any){
    return this.http.post<any>(environment.uriApiGateware + environment.uriApiPago, requestRecibo);
  }
}
