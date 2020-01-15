import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../datos-tarjeta-asignada/datos-tarjeta-asignada.component';

@Component({
  selector: 'acme-tarjeta-asignada',
  templateUrl: './tarjeta-asignada.component.html',
  styleUrls: ['./tarjeta-asignada.component.css']
})
export class TarjetaAsignadaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TarjetaAsignadaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  clicked = false;
  closeDialog(): void {
    this.dialogRef.close();

  }
}
