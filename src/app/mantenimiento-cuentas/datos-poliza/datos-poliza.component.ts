import { Component, OnInit, Input } from '@angular/core';
import { Cliente, Poliza } from 'src/app/_services';

@Component({
  selector: 'acme-datos-poliza',
  templateUrl: './datos-poliza.component.html',
  styleUrls: ['./datos-poliza.component.css']
})
export class DatosPolizaComponent implements OnInit {
  @Input() polizainfo: Cliente;
  @Input() poliza: Poliza;



  constructor() { 
  }

  ngOnInit() {
  }


}
