import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'acme-datos-recibos',
  templateUrl: './datos-recibos.component.html',
  styleUrls: ['./datos-recibos.component.css']
})
export class DatosRecibosComponent implements OnInit {
  @Input() recibo = new EventEmitter<any>();
  dataRecibo : any;
  constructor( private router: Router) {
    
     }

  ngOnInit() {
  }

  openDialog(): void {
    this.router.navigate(['/recibo/pagar', { numeroRecibo: JSON.parse(JSON.stringify(this.recibo)).numeroRecibo}]);
  }

}
