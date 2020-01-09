import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/_services';

@Component({
  selector: 'acme-pago-email-enviado',
  templateUrl: './pago-email-enviado.component.html',
  styleUrls: ['./pago-email-enviado.component.css']
})
export class PagoEmailEnviadoComponent implements OnInit {


  

  constructor(
    public dialogRef: MatDialogRef<PagoEmailEnviadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) { }

  ngOnInit() {
  }



}
