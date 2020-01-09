import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'acme-nueva-referencia',
  templateUrl: './nueva-referencia.component.html',
  styleUrls: ['./nueva-referencia.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NuevaReferenciaComponent implements OnInit {

  newForm: FormGroup;
  url: any;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NuevaReferenciaComponent>,
    private router: Router
  ) { }

  ngOnInit() {
    this.newForm = this.formBuilder.group({
      type: [null, Validators.required],
    });
  }
  get f() { return this.newForm.controls; }

  onNoClick(): void {
    this.dialogRef.close();
  }

  continuarPago() : void {

    this.url = this.f.type.value == 1 ? environment.uriAppPagoPrima : this.url;
    this.url = this.f.type.value == 2 ? environment.uriAppAportacionPolizaVida  : this.url;
    this.url = this.f.type.value == 3 ? environment.uriAppPagoPolizaConvivencia  : this.url;
    alert(this.url);
  
    this.onNoClick();
    this.router.navigate([this.url]);
  }
}
