import { Component, OnInit } from '@angular/core';
import { MantenimientoCuentasService } from '../_services/mantenimiento-cuentas.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'acme-mantenimiento-cuentas',
  templateUrl: './mantenimiento-cuentas.component.html',
  styleUrls: ['./mantenimiento-cuentas.component.css']
})
export class MantenimientoCuentasComponent implements OnInit {


  constructor( private mtoSrv: MantenimientoCuentasService,
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

  nopoliza() {
    this.clicked = true;
    this.setButton();
  }
  cliente() {
    this.clicked = false;
    this.setButton();
  }

  buscar(termino) {
    console.log(termino);
    this.clientesArr = this.mtoSrv.buscarCliente(termino);
    this.limpiar();
  }
limpiar(){
  this.buscarTexto = '';
}
}

