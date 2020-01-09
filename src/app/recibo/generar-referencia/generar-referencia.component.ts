import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/_services';

@Component({
  selector: 'acme-generar-referencia',
  templateUrl: './generar-referencia.component.html',
  styleUrls: ['./generar-referencia.component.css']
})
export class GenerarReferenciaComponent implements OnInit {

  constructor(   
    public dialogRef: MatDialogRef<GenerarReferenciaComponent>,   
    private catalogosService: CatalogosService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    
   }

  ngOnInit() {
  }

}
