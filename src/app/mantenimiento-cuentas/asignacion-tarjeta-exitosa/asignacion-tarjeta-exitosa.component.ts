import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TarjetaAsignadaComponent } from '../tarjeta-asignada/tarjeta-asignada.component';
import { DialogData } from '../datos-tarjeta-asignada/datos-tarjeta-asignada.component';

@Component({
  selector: 'acme-asignacion-tarjeta-exitosa',
  templateUrl: './asignacion-tarjeta-exitosa.component.html',
  styleUrls: ['./asignacion-tarjeta-exitosa.component.css']
})
export class AsignacionTarjetaExitosaComponent implements OnInit {
  exitosa = 'asignada exitosamente';
  fallo = 'ha fallado, vuelve a intentarlo';
  estado: string;

  constructor(public dialogRef: MatDialogRef<TarjetaAsignadaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.estado = this.exitosa;
  }
  closeDialog(): void {
    this.dialogRef.close();
  }


}
