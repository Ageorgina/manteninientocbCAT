import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/_services';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CampaniasService } from 'src/app/_services/campanias.service';
import { first } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'acme-pago-meses-sin-intereses',
  templateUrl: './pago-meses-sin-intereses.component.html',
  styleUrls: ['./pago-meses-sin-intereses.component.css'],
  providers: [DatePipe]
})
export class PagoMesesSinInteresesComponent implements OnInit {

  mesesForm: FormGroup;
  responseMeses: any;
  constructor(
    public dialogRef: MatDialogRef<PagoMesesSinInteresesComponent>,
    private campaniasService: CampaniasService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private datePipe: DatePipe) {

  }

  ngOnInit() {
    this.mesesForm = this.formBuilder.group({
      meses: [null, [Validators.required]],
    });
    this.getMeses();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  get f() {
    return this.mesesForm.controls;
  }

  selectMeses() {
  }

  getMeses() {
    let myDate = new Date();
    this.data.date= this.datePipe.transform(myDate, 'yyyy-MM-dd');
    this.campaniasService.getcampania(this.data)
      .pipe(first())
      .subscribe(
        data => {
          this.responseMeses = data;
        },
        error => {

        });
  }

}
