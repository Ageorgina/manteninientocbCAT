import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TarjetaAsignadaComponent } from '../tarjeta-asignada/tarjeta-asignada.component';

@Component({
  selector: 'acme-datos-tarjeta-asignada',
  templateUrl: './datos-tarjeta-asignada.component.html',
  styleUrls: ['./datos-tarjeta-asignada.component.css']
})
export class DatosTarjetaAsignadaComponent implements OnInit {

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
