import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoCuentasService } from '../../_services/mantenimiento-cuentas.service';

@Component({
  selector: 'acme-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: any = {};
  polizas: any[];
  poliza : any = {};

  constructor( private actived: ActivatedRoute,
               private mtoSrv: MantenimientoCuentasService,
               private router: Router) {
   }

  ngOnInit() {
  
    this.actived.params.subscribe( params => {
      this.cliente = this.mtoSrv.getCliente(params.id);
      this.polizas = this.cliente.polizas;
  });
}
irpoliza(resultado) {
  this.router.navigate(['mantenimiento-cuentas/poliza', resultado.nopoliza]);
  // this.mtoSrv.getPoliza( this.cliente, resultado.nopoliza);
  this.guardarStorage();
}

guardarStorage() {
  localStorage.setItem('cliente', JSON.stringify(this.cliente));
}

}
