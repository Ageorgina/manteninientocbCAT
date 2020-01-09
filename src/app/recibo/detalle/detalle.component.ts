import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReciboService } from 'src/app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'acme-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  detalleRecibo: any;
  requestNumeroRecibo: any;
  recibo: any;
  numeroRecibo: any;
  constructor(
    public dialogRef: MatDialogRef<DetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reciboService: ReciboService,
    private router: Router
  ) {
    this.numeroRecibo = data.numeroRecibo;
  }

  ngOnInit() {

    this.getRecibo();
  }


  openRecibos(element: any): void {
    this.dialogRef.close();
    this.router.navigate(['/recibo/ver-recibos', { numeroPoliza: element.numeroPoliza, numeroRecibo: element.numeroRecibo }]);
  }
  getRecibo() {
    this.requestNumeroRecibo = {
      codIntermediarios: ["0050388001"],
      numeroRecibo: this.numeroRecibo
    };
    this.reciboService.getNumeroRecibos(this.requestNumeroRecibo)
      .pipe(first())
      .subscribe(
        data => {
          this.recibo = data;
        },
        error => {

        });

  }
}
