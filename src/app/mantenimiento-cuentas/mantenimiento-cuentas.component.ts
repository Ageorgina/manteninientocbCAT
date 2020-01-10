import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acme-mantenimiento-cuentas',
  templateUrl: './mantenimiento-cuentas.component.html',
  styleUrls: ['./mantenimiento-cuentas.component.css']
})
export class MantenimientoCuentasComponent implements OnInit {
  nombrecliente = true;


  constructor() { }

  ngOnInit() {
  }

  nopoliza() {
    this.nombrecliente = false;
  }


// fskr
}
