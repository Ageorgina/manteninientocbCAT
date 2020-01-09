import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/_services';
import { PagoExitosoComponent } from '../pago-exitoso/pago-exitoso.component';
import { PagoEmailEnviadoComponent } from '../pago-email-enviado/pago-email-enviado.component';

@Component({
  selector: 'acme-pago-email',
  templateUrl: './pago-email.component.html',
  styleUrls: ['./pago-email.component.css']
})
export class PagoEmailComponent implements OnInit {

  emailForm: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<PagoEmailComponent>,
    public dialogEnvioExitoso: MatDialog,
    public dialogEnvioFallido: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private formBuilder: FormBuilder,
    private emailService: EmailService,
  ) { 
  }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: [null, [Validators.required]]
    });
  }


  get f() {
    return this.emailForm.controls;
  }

  onEnviarCorreo() {
    this.dialogRef.close();
    this.data.tarjeta.email = this.f.email.value;
    const dialogRef = this.dialogEnvioExitoso.open(PagoEmailEnviadoComponent, {
      data: this.data
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
