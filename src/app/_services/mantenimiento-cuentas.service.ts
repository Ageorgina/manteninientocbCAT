import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoCuentasService {

  constructor(private http: HttpClient) { }



 public clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Juan Raúl García Segura',
      rol: 'Contratante',
      polizas: [
        {
        nopoliza: 111111111111,
        ramo: 'GMM',
        producto: 'Premiere Individual',
        estatus: 'Vigente',
        version: 1,
        desde: '00/00/0000',
        hasta: '00/00/0000',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '3/6',
            norecibo: 123456789123,
            estatus: 'Pendiente exigible',
            monto: 1000,
            desde: '16/03/2019',
            hasta: '15/04/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '4/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '5/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '6/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
        ] 
      },
      {
        nopoliza: 2222222222222,
        ramo: 'GMM',
        producto: 'Premiere Individual',
        estatus: 'Vigente',
        version: 1,
        desde: '00/00/0000',
        hasta: '00/00/0000',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '3/6',
            norecibo: 123456789123,
            estatus: 'Pendiente exigible',
            monto: 1000,
            desde: '16/03/2019',
            hasta: '15/04/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '4/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '5/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '6/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
        ] 
      },
      {
        nopoliza: 123456789123,
        ramo: 'Vida',
        producto: 'Vida Inversión',
        estatus: 'Vigente',
        version: 1,
        desde: '00/00/0000',
        hasta: '00/00/0000',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '3/6',
            norecibo: 123456789123,
            estatus: 'Pendiente exigible',
            monto: 1000,
            desde: '16/03/2019',
            hasta: '15/04/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '4/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '5/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '6/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
        ] 
      },
      {
        nopoliza: 1234567891231,
        ramo: 'Daños',
        producto: 'Hogar Versátil Opera',
        estatus: 'Vigente',
        version: 1,
        desde: '00/00/0000',
        hasta: '00/00/0000',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '3/6',
            norecibo: 123456789123,
            estatus: 'Pendiente exigible',
            monto: 1000,
            desde: '16/03/2019',
            hasta: '15/04/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '4/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '5/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '6/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
        ] 
      },
      {
        nopoliza: 1234567891232,
        ramo: 'Autos',
        producto: 'Seguros Personales',
        estatus: 'Cancelada',
        version: 1,
        desde: '00/00/0000',
        hasta: '00/00/0000',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '3/6',
            norecibo: 123456789123,
            estatus: 'Pendiente exigible',
            monto: 1000,
            desde: '16/03/2019',
            hasta: '15/04/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '4/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '5/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '6/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
        ] 
      },
      {
        nopoliza: 1234567891233,
        ramo: 'Vida',
        producto: 'Vida Inversión',
        estatus: 'Cancelada',
        version: 1,
        desde: '00/00/0000',
        hasta: '00/00/0000',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '3/6',
            norecibo: 123456789123,
            estatus: 'Pendiente exigible',
            monto: 1000,
            desde: '16/03/2019',
            hasta: '15/04/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '4/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '5/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '6/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
        ] 
      },
      {
        nopoliza: 1234567891234,
        ramo: 'Vida',
        producto: 'Vida Inversión',
        estatus: 'Vigente',
        version: 1,
        desde: '00/00/0000',
        hasta: '00/00/0000',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '3/6',
            norecibo: 123456789123,
            estatus: 'Pendiente exigible',
            monto: 1000,
            desde: '16/03/2019',
            hasta: '15/04/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '4/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '5/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '6/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
        ] 
      },
      {
        nopoliza: 1234567891235,
        ramo: 'Autos',
        producto: 'Seguros Personales',
        estatus: 'Vigente',
        version: 1,
        desde: '00/00/0000',
        hasta: '00/00/0000',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado (00/000/000)',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: null,
            cobro: null
          },
          {
            fraccion: '3/6',
            norecibo: 123456789123,
            estatus: 'Pendiente exigible',
            monto: 1000,
            desde: '16/03/2019',
            hasta: '15/04/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '4/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '5/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
          {
            fraccion: '6/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: 'Sin asignacion',
            cobro: 'Sin asignacion'
          },
        ] 
      }
    ]
    },
    {
      id: 2,
      nombre: 'Pedro Juan Gómez García',
      rol: 'Contratante',
    },
    {
      id: 3,
      nombre: 'Juan Camilo González Robledo',
      rol: 'Contratante',
    },
    {
      id: 4,
      nombre: 'Juan García Robledo',
      rol: 'Contratante',
    },

];
  getClientes() {
    return this.clientes;
  }

  getCliente(idx: number) {
    return this.clientes[idx];
  }
  getPoliza(cliente, nopoliza: number) {
    //  console.log('srv', cliente.polizas[nopoliza]);
    //return cliente.polizas[nopoliza];
   return cliente.polizas.filter(params => {
     console.log(cliente.polizas)
     console.log(cliente.params)
       if (params.nopoliza === nopoliza) {
         console.log('srv ',params)
         return params;
     }
      console.log('srv error ')
      });
  }

  buscarCliente(termino) {
    const clientesArr: Cliente[] = [];
    termino = termino.toLowerCase();
    for (let i = 0; i < this.clientes.length; i++) {
       const cliente = this.clientes[i];
       const nombre = cliente.nombre.toLowerCase();
       if (nombre.indexOf(termino) >= 0) {
         cliente.idx = i;
         clientesArr.push(cliente);
       }
     }
    return clientesArr;

    // return this.clientes.filter(params => {
    //   return params.nombre.toLowerCase().includes(termino.toLowerCase());
    // });
  }

  buscarPoliza() {
      return this.clientes.filter(params => {
        console.log('buscar Poliza', params)
      });
  }

}

export interface Cliente {
  nombre: string;
  nopoliza?: number;
  rol: string;
  id: number;
  idx?: number;
  polizas?: Poliza[];
}

export interface Poliza {
  nopoliza: number;
  ramo: string;
  producto: string;
  estatus: string;
  version: number;
  desde: string;
  hasta: string;
  recibos: any[];
}



