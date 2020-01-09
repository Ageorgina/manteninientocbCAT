import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'acme-pago-realizar',
  templateUrl: './pago-realizar.component.html',
  styleUrls: ['./pago-realizar.component.css']
})
export class PagoRealizarComponent implements OnInit {
  selectedRamo: string = "0";
  ramos: any[];
  selectedMoneda: string;
  monedas: any[];

  selectedFormaPago: string;
  formasPago: any[];
  pagoaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }


  ngOnInit() {
    this.getFormasPago();
    this.getMoneda();
    this.getRamos();

    this.pagoaForm = this.formBuilder.group({
      noPoliza: [null, [Validators.required]],
      ramo: [null, [Validators.required]],
      noFolio: [null],
      comprobante: [null],
      email: [null, [Validators.required]],
      monto: [null, [Validators.required]],
      moneda: [null, [Validators.required]],
      formaPago: [null, [Validators.required]]
    });
  }

  get f() {
    return this.pagoaForm.controls;
  }

  getFormasPago() {
    this.formasPago = [
      { value: '0', viewValue: 'forma de Pago 1' },
      { value: '1', viewValue: 'forma de Pago 2' }
    ];
  }

  getMoneda() {
    this.monedas = [
      { value: '0', viewValue: 'MXN' },
      { value: '1', viewValue: 'USD' }
    ];
  }

  getRamos() {
    this.ramos = [
      { value: '0', viewValue: 'Vida' },
      { value: '1', viewValue: 'GMM' }
    ];
  }

}

