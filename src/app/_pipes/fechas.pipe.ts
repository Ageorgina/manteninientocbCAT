import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'fechas'
})
export class FechasPipe implements PipeTransform {


  currentDate: any;


  transform(value: String): Date {
    if (value != null) {
      this.currentDate = value.toString().substring(0, 4) + '-' + value.toString().substring(4, 6) + '-' + value.toString().substring(6, 8);
      return new Date(this.currentDate);
    } else {
      return new Date();
    }
  }

}