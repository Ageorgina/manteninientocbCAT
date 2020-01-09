import { Component, OnInit, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReciboService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'acme-ver-recibos',
  templateUrl: './ver-recibos.component.html',
  styleUrls: ['./ver-recibos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VerRecibosComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  
  dataSource = new MatTableDataSource();

  displayedColumns: string[] = [
    'fraccion',
    'noRecibo',
    'estatusRecibo',
    'monto',
    'periodoDesde',
    'periodoHasta',
    'conducto'
  ];

  numeroRecibo:any;
  numeroPoliza :any;
  requestNumeroRecibo: any;
  recibo :any;
  requestNumeroPoliza: any;
  poliza :any;
  dataPoliza :any;
  constructor( 
    private router: Router,
       private route: ActivatedRoute,  
       private reciboService: ReciboService ) {
        this.numeroRecibo = this.route.snapshot.paramMap.get('numeroRecibo');
        this.numeroPoliza = this.route.snapshot.paramMap.get('numeroPoliza');
        this.recibo= {
    
        }
        this.getRecibo();
        this.getPoliza();
        }

  ngOnInit() {

  }

  getRecibo(){
    this.requestNumeroRecibo = {
      codIntermediarios: ["0050388001"],
      numeroRecibo: this.numeroRecibo
    };
    this.reciboService.getNumeroRecibos(this.requestNumeroRecibo)
    .pipe(first())
    .subscribe(
      data => {
        this.recibo = data;
        this.poliza = data;
      },
      error => {

      });

  }
  getPoliza(){
    this.requestNumeroPoliza = {
      codIntermediarios: ["0050388001"],
      numPoliza:  this.numeroPoliza
    };
    this.reciboService.getNumeroPoliza(this.requestNumeroPoliza)
    .pipe(first())
    .subscribe(
      data => {
        this.dataPoliza = data;
        this.dataSource = new MatTableDataSource<any>(this.dataPoliza.consultaRecibos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {

      });
  }

}
