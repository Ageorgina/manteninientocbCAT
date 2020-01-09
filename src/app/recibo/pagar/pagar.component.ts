import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReciboService } from 'src/app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'acme-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {
  numeroRecibo: any;
  requestNumeroRecibo: any;
  recibo: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reciboService: ReciboService
  ) {
    this.numeroRecibo = this.route.snapshot.paramMap.get('numeroRecibo');
    this.getRecibo();
  }

  ngOnInit() {
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
