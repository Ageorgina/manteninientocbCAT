import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NuevaReferenciaComponent } from '../nueva-referencia/nueva-referencia.component';

@Component({
  selector: 'acme-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource = new MatTableDataSource();
  referenciaData: any[];

  displayedColumns: string[] = [
    'nombreContratante',
    'noReferencia',
    'importe',
    'fechaDesde',
    'fechaHasta',
    'estatus'
  ];
  constructor(public dialog: MatDialog) {

  }


  ngOnInit() {
    this.getTabla();
  }


  getTabla() {

    this.referenciaData = [
      {
        nombreContratante: 'nombreContratante',
        noReferencia: 'noReferencia',
        importe: '10000',
        fechaDesde: '10/02/2019',
        fechaHasta: '25/02/2019',
        estatus:
        {
          idEstatus: 3,
          descEstatus: 'Pago parcial'
        }
      },
      {
        nombreContratante: 'nombreContratante',
        noReferencia: 'noReferencia',
        importe: '565858',
        fechaDesde: '18/05/2019',
        fechaHasta: '20/09/2019',
        estatus:
        {
          idEstatus: 2,
          descEstatus: 'Pagada'
        }
      }, {
        nombreContratante: 'nombreContratante',
        noReferencia: 'noReferencia',
        importe: '68012',
        fechaDesde: '1/03/2019',
        fechaHasta: '23/09/2019',
        estatus:
        {
          idEstatus: 1,
          descEstatus: 'Vencida'
        }
      }
    ];

    this.dataSource = new MatTableDataSource<any>(this.referenciaData);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NuevaReferenciaComponent, {
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
