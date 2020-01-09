import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'acme-datos-pagador',
  templateUrl: './datos-pagador.component.html',
  styleUrls: ['./datos-pagador.component.css']
})
export class DatosPagadorComponent implements OnInit {
  
  @Input() recibo = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
