import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoCuentasService {

  constructor(private http: HttpClient) { }



 public clientes: Cliente[] = [
    {
      nombre: 'Juan Raúl García Segura',
      nopoliza: 111111111,
      rol: 'Contratante',

    },
    {
      nombre: 'Pedro Juan Gómez García',
      rol: 'Contratante',
    },
    {
      nombre: 'Juan Camilo González Robledo',
      rol: 'Contratante',
    },
    {
      nombre: 'Juan García Robledo',
      rol: 'Contratante',
    },

];
  getClientes() {
    console.log(this.clientes);
    return this.clientes;
  }

  buscarCliente(termino: string) {
    return this.clientes.filter(params => {
      return params.nombre.toLowerCase().includes(termino.toLowerCase());
    });
  }

  buscarPoliza(termino: string) {
    return this.clientes.filter(params => {
      return params.nombre.toLowerCase().includes(termino.toLowerCase());
    });
  }


}

export interface Cliente {
  nombre: string;
  nopoliza?: number;
  rol: string;
}



