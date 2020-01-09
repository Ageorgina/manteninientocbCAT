import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PagoEmailComponent } from '../pago-email/pago-email.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';

import { default as _rollupMoment, Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { PagoService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { PagoExitosoComponent } from '../pago-exitoso/pago-exitoso.component';
import { PagoMesesSinInteresesComponent } from '../pago-meses-sin-intereses/pago-meses-sin-intereses.component';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'acme-datos-tarjeta',
  templateUrl: './datos-tarjeta.component.html',
  styleUrls: ['./datos-tarjeta.component.css'],
  providers: [

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DatosTarjetaComponent implements OnInit {
  tarjeta: any;
  tarjetaForm: FormGroup;
  selectedBanco: string;
  selectedMeses: string;
  politica: any;
  requestPagar: any;
  bancos: any[] = [
    { value: '0', viewValue: 'Banorte' },
    { value: '1', viewValue: 'Citibanamex' }
  ];


  meses: any[] = [
    { value: '0', viewValue: '3' },
    { value: '1', viewValue: '6' }
  ];

  @Input() recibo = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    public dialogSend: MatDialog,
    public dialogPagoExito: MatDialog,
    public dialogPagoRechazado: MatDialog,
    public dialogMeses: MatDialog,
    private pagoService: PagoService
  ) {
    this.politica = "El agente de seguros se obliga a verificar los datos del formato responsabilizándose de la autenticidad de estos, de acuerdo alart. 10 de la Ley de Títulos y Operaciones de Crédito";
  }

  get f() {
    return this.tarjetaForm.controls;
  }

  openDialogSend(): void {

    this.f.fechaVenciminto = this.date.value;
    const dialogRef = this.dialogSend.open(PagoEmailComponent, {
      data: {
        recibo: this.recibo,
        tarjeta: this.tarjeta
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openDialogPagoExitoso(): void {

  
    const dialogRef = this.dialogSend.open(PagoExitosoComponent, {
      data: {
        recibo: this.recibo,
        tarjeta: this.tarjeta
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onPagar() {

    this.tarjeta = {
      banco: this.f.banco.value,
      noMeses: this.f.noMeses.value,
      nombreTitular: this.f.nombreTitular.value,
      noTarjeta: this.f.noTarjeta.value,
      fechaVenciminto: {
        mes : this.f.date.value.toString().substring(0, 2),
        anio : this.f.date.value.toString().substring(2, 4)
      },
      cvv: this.f.cvv.value,
      email: this.f.email.value
    }

    this.requestPagar = {
      recibo: this.recibo,
      tarjeta: this.tarjeta 
    };


    this.openDialogPagoExitoso();
    this.pagoService.pagarRecibo(this.requestPagar).pipe(first())
    .subscribe(
      data => {
        this.openDialogSend();
      },
      error => {

      });;



    
  }
  ngOnInit() {
    this.tarjetaForm = this.formBuilder.group({
      banco: [null, [Validators.required]],
      noMeses: [null, [Validators.required]],
      nombreTitular: [null, [Validators.required]],
      noTarjeta: [null, [Validators.required, Validators.minLength(15), Validators.maxLength(16)]],
      date: [null, [Validators.required]],
      cvv: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
      politicas: [false, [Validators.requiredTrue]],
      email:[null]
    });
  }


  date = new FormControl(moment());

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  onMeses(){
    
    const dialogRef = this.dialogSend.open(PagoMesesSinInteresesComponent, {
      data: {
        recibo: this.recibo
      }
    });
  }

}
