import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DetalleComponent } from '../detalle/detalle.component';
import { MesesSinInteresesComponent } from '../meses-sin-intereses/meses-sin-intereses.component';
import { ReciboService } from 'src/app/_services/recibo.service';
import { first } from 'rxjs/operators';
import { CatalogosService } from 'src/app/_services';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { GenerarReferenciaComponent } from '../generar-referencia/generar-referencia.component';
import { Router } from '@angular/router';

@Component({
  selector: 'acme-consulta-pago',
  templateUrl: './consulta-pago.component.html',
  styleUrls: ['./consulta-pago.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConsultaPagoComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  varmMuseoverRow = false;
  rowData: any;
  countFilter: number = 0;
  dataSource = new MatTableDataSource();
  activeLink: any;
  showMainContent: Boolean = true;
  pageEvent: PageEvent;
  selectedRamo: string;
  selectedConducto: string;
  selectedEstatus: string;
  requestRecibo: any
  ramos: any;
  conductos: any;
  estatus: any;
  recibosData: any;
  responseConteorecibos: any;
  status: any = 'E';
  displayedColumns: string[] = [
    'poliza',
    'ramo',
    'cliente',
    'noRecibo',
    'estatusRecibo',
    'monto',
    'fechaDesde',
    'fechaHasta'
  ];

  navLinks: any[] = [
    { value: 'E', label: 'Recibos exigibles' },
    { value: 'P', label: 'Pólizas pendientes' },
    { value: 'L', label: 'Pólizas pagadas' },
    { value: 'A', label: 'Pólizas canceladas' },
  ];
  filterForm: FormGroup;
  searchForm: FormGroup;
  constructor(
    public dialogGenerarRefererncia: MatDialog,
    public dialogMeses: MatDialog,
    public dialog: MatDialog,
    private reciboService: ReciboService,
    private catalogosService: CatalogosService,
    private formBuilder: FormBuilder,
    private searchFormBuilder: FormBuilder,   
    private router: Router
  ) {
    this.activeLink = this.navLinks[0];

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MesesSinInteresesComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openGenerarReferencia(element: any): void {
    const dialogRef = this.dialog.open(GenerarReferenciaComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openRecibos(element: any): void {
    this.router.navigate(['/recibo/ver-recibos', { numeroPoliza: element.numeroPoliza, numeroRecibo: element.numeroRecibo } ]);
  }

  openPagar(element: any): void {
    this.router.navigate(['/recibo/pagar', { numeroRecibo: element.numeroRecibo }]);
  }

  mouseoverRow(row: any) {
    this.rowData = row;

  }

  mouseout() {
   // this.rowData = null;
  }

  openRecibo(element: any): void {
    const dialogRef = this.dialog.open(DetalleComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      ramo: [null],
      conducto: [null],
      estatu: [null],

      fechaPagoDesde: [null],
      fechaPagoHasta: [null],

      fechaCancelacionDesde: [null],
      fechaCancelacionHasta: [null],

      periodoDesde: [null],
      periodoHasta: [null],
    });

    this.searchForm = this.searchFormBuilder.group({
      campo: [null],
    });



    this.getTabla();

    this.catalogosService.getRamos()
      .pipe(first())
      .subscribe(
        data => {
          this.ramos = JSON.parse(data);
        },
        error => {

        });


    this.catalogosService.getConductos()
      .pipe(first())
      .subscribe(
        data => {
          this.conductos = JSON.parse(data);
        },
        error => {
        });


    this.catalogosService.getEstatusRecivo()
      .pipe(first())
      .subscribe(
        data => {
          this.estatus = JSON.parse(data);
        },
        error => {
        });

  }

  get f() { return this.filterForm.controls; }
  get searchF() { return this.searchForm.controls; }


  showHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
  }

  countFilt() {
    this.countFilter = 0;
    this.countFilter = this.f.ramo.value != null ? this.countFilter + 1 : this.countFilter;
    this.countFilter = this.f.conducto.value != null ? this.countFilter + 1 : this.countFilter;
    this.countFilter = this.f.estatu.value != null ? this.countFilter + 1 : this.countFilter;
    this.countFilter = this.f.fechaPagoDesde.value != null ? this.countFilter + 1 : this.countFilter;
    this.countFilter = this.f.fechaPagoHasta.value != null ? this.countFilter + 1 : this.countFilter;
    this.countFilter = this.f.fechaCancelacionDesde.value != null ? this.countFilter + 1 : this.countFilter;
    this.countFilter = this.f.fechaCancelacionHasta.value != null ? this.countFilter + 1 : this.countFilter;
    this.countFilter = this.f.periodoDesde.value != null ? this.countFilter + 1 : this.countFilter;
    this.countFilter = this.f.periodoHasta.value != null ? this.countFilter + 1 : this.countFilter;
    if (this.countFilter != 0) { this.getTabla(); }

  }

  onsearch() {
    alert(this.searchF.campo.value);
  }

  getTabla() {



    if (this.status === 'E') {

      this.requestRecibo = {
        codIntermediarios: ["0050388001"]
      };

      this.reciboService.getConteoRecibos(this.requestRecibo)
        .pipe(first())
        .subscribe(
          data => {
            this.responseConteorecibos = data;
            this.recibosData = this.responseConteorecibos.recibosExigibles.recibos;
            this.recibosData.concat(this.responseConteorecibos.recibosBanco.recibos);
            this.dataSource = new MatTableDataSource<any>(this.recibosData);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

          },
          error => {
          });
    } else {

      this.requestRecibo = {
        codIntermediarios: [
          "0069905001"
        ],
        estatus: this.status,
        fechaDesde: 20191012,
        fechaHasta: 20191212
      };

      this.reciboService.getRecibosEstatus(this.requestRecibo)
        .pipe(first())
        .subscribe(
          data => {
            this.responseConteorecibos = data;
            this.recibosData = this.responseConteorecibos.consultaRecibos;
            this.dataSource = new MatTableDataSource<any>(this.recibosData);
            this.dataSource.paginator = this.paginator;
          },
          error => {
          });
    }


  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }

  matTabTable(link: any) {
    if (link != this.activeLink) {
      this.activeLink = link;
      this.getHeader(link.value);
      this.getTabla();

    }
  }

  getHeader(status: any) {
    this.status = status;
    if (status === 'E') {
      this.displayedColumns = [
        'poliza',
        'ramo',
        'cliente',
        'noRecibo',
        'estatusRecibo',
        'monto',
        'fechaDesde',
        'fechaHasta'
      ];
    }
    else if (status === 'P') {
      this.displayedColumns = [
        'poliza',
        'ramo',
        'cliente',
        'noRecibo',
        'estatusRecibo',
        'monto',
        'fechaDesde',
        'fechaHasta',
        'conducto'
      ];
    }
    else if (status === 'L') {
      this.displayedColumns = [
        'poliza',
        'ramo',
        'cliente',
        'noRecibo',
        'fechaPago',
        'monto',
        'fechaDesde',
        'fechaHasta',
        'conducto'
      ];
    }
    else if (status === 'A') {
      this.displayedColumns = [
        'poliza',
        'ramo',
        'cliente',
        'noRecibo',
        'fechaCancelacion',
        'monto',
        'fechaDesde',
        'fechaHasta',
        'conducto'
      ];
    }
  }
}