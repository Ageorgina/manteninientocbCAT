import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ReciboService } from 'src/app/_services';
import { Router } from '@angular/router';
import { PagoEmailEnviadoComponent } from '../pago-email-enviado/pago-email-enviado.component';
import { PagoEmailComponent } from '../pago-email/pago-email.component';

@Component({
  selector: 'acme-pago-exitoso',
  templateUrl: './pago-exitoso.component.html',
  styleUrls: ['./pago-exitoso.component.css']
})
export class PagoExitosoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PagoExitosoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reciboService: ReciboService,
    private router: Router,
    public dialogEnviarCorreo: MatDialog,
    public dialogDescargar: MatDialog,
  ) { }

  ngOnInit() {
  }
  openDialogEnviarCorreo() {
    this.dialogRef.close();
    const dialogRef = this.dialogEnviarCorreo.open(PagoEmailComponent, {
      data: this.data
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogDescargar() {
    this.dialogRef.close();
  }
}
