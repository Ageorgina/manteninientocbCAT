import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MantenimientoCuentasService } from '../_services/mantenimiento-cuentas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'acme-mantenimiento-cuentas',
  templateUrl: './mantenimiento-cuentas.component.html',
  styleUrls: ['./mantenimiento-cuentas.component.css']
})
export class MantenimientoCuentasComponent implements OnInit {


  constructor( private mtoSrv: MantenimientoCuentasService,
               private router: Router
    ) {
    this.setButton();
  }

  placeholderText: string;
  clicked = false;
  clientesArr: any[] = [];
  termino: any;
  buscarTexto = '';

  ngOnInit() {
    this.mtoSrv.getClientes();
  }

  setButton() {
    this.placeholderText = this.clicked ? 'Número de póliza' : 'Nombre del cliente';
  }

  nopolizaOp() {
    this.clicked = true;
    this.setButton();
  }
  clienteOp() {
    this.clicked = false;
    this.setButton();
  }

  buscar(termino) {
    // console.log(termino);
    this.clientesArr = this.mtoSrv.buscarCliente(termino);
    this.limpiar();
  }
limpiar() {
  this.buscarTexto = '';
}
guardar(resultado) {
  // console.log('resultado', resultado);
  this.router.navigate(['/mantenimiento-cuentas/cliente', resultado.idx]);
}

}

