import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Observer } from 'rxjs';
import { CatalogosService } from 'src/app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'acme-meses-sin-intereses',
  templateUrl: './meses-sin-intereses.component.html',
  styleUrls: ['./meses-sin-intereses.component.css']
})
export class MesesSinInteresesComponent implements OnInit {
  campanias: Observable<any[]>;
  displayedColumns: string[] = ['meses', 'sobretasa'];
 


  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<MesesSinInteresesComponent>,   
    private catalogosService: CatalogosService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

      this.catalogosService.getcampania()
      .pipe(first())
      .subscribe(
        data => {
          this.campanias = new Observable((observer: Observer<any[]>) => {
            setTimeout(() => {
              observer.next(JSON.parse(data));
            }, 0);
          });
        },
        error => {
        });


  }




  onNoClick(): void {
    this.dialogRef.close();
  }
}
