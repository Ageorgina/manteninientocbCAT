import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TarjetaAsignadaComponent } from '../tarjeta-asignada/tarjeta-asignada.component';
import { Tarjeta } from 'src/app/_services';


export interface DialogData {
  banco: string;
  titular: string;
  notarjeta: number;
  vencimiento: number;
  cvv: number;
  meses: number;
}


@Component({
  selector: 'acme-datos-tarjeta-asignada',
  templateUrl: './datos-tarjeta-asignada.component.html',
  styleUrls: ['./datos-tarjeta-asignada.component.css']
})
export class DatosTarjetaAsignadaComponent implements OnInit {
  @Input() tarjetaAsignada: Tarjeta;

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
  }
  tarjetas(): void {
    const dialogRef = this.dialog.open(TarjetaAsignadaComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Cerro Modal');
    });
  }
}
