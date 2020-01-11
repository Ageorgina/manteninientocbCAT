import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(lista: any[], texto: string): any {
    if (!texto) { return null; }
  }

}
