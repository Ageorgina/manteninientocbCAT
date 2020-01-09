import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'acme-datos-poliza',
  templateUrl: './datos-poliza.component.html',
  styleUrls: ['./datos-poliza.component.css']
})
export class DatosPolizaComponent implements OnInit {

  @Input() poliza = new EventEmitter<any>();
  constructor() { }
  ngOnInit() {
  }

}
