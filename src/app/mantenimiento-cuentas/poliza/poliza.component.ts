import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoCuentasService } from '../../_services/mantenimiento-cuentas.service';
@Component({
  selector: 'acme-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.css']
})
export class PolizaComponent implements OnInit {

  nopoliza: any = {};
  poliza: any = {};
  recibos: any[];
  cliente: any ={};
  constructor( private actived: ActivatedRoute, 
               private mtoSrv: MantenimientoCuentasService, 
               private router: Router) {
      
   }

  ngOnInit() {

  }

  back() {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.router.navigate(['/mantenimiento-cuentas/cliente', (this.cliente.id) - 1]);
  }

}
