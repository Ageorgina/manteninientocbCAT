import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../datos-tarjeta-asignada/datos-tarjeta-asignada.component';
import { MantenimientoCuentasService } from '../../_services/mantenimiento-cuentas.service';

@Component({
  selector: 'acme-tarjeta-asignada',
  templateUrl: './tarjeta-asignada.component.html',
  styleUrls: ['./tarjeta-asignada.component.css']
})

export class TarjetaAsignadaComponent implements OnInit {
bancos = {};
banco: string;
  constructor(public dialogRef: MatDialogRef<TarjetaAsignadaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private mtoSrv: MantenimientoCuentasService) { }

  ngOnInit() {
    this.bancos = this.mtoSrv.getBancos();
    console.log(this.bancos)
  }
  clicked = false;
  closeDialog(): void {
    this.dialogRef.close();

  }
  bancoselect(respuesta){
    console.log(respuesta)
    this.banco = respuesta;
  }
}
