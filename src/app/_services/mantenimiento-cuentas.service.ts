import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoCuentasService {
  poliza: any;

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
        pago: 'Mensual',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
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
            tarjeta: {
              estatus: 'Asignada',
              banco: 'HSBC',
              titular: 'Juan Raúl García Segura',
              notarjeta: 1234567891234,
              vencimiento: 2022,
              cvv: 763
            },
            cobro: '12/03/2019'
          },
          {
            fraccion: '4/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: {
              estatus: 'Asignada',
              banco: 'HSBC',
              titular: 'Juan Raúl García Segura',
              notarjeta: 1234567891234,
              vencimiento: 2022,
              cvv: 763
            },
            cobro: '12/04/2019'
          },
          {
            fraccion: '5/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: {
              estatus: 'Asignada',
              banco: 'HSBC',
              titular: 'Juan Raúl García Segura',
              notarjeta: 1234567891234,
              vencimiento: 2022,
              cvv: 763
            },
            cobro: '12/05/2019'
          },
          {
            fraccion: '6/6',
            norecibo: 123456789123,
            estatus: 'Pendiente',
            monto: 1000,
            desde: '16/04/2019',
            hasta: '15/05/2019',
            conducto: 'Intermediario',
            tarjeta: {
              estatus: 'Asignada',
              banco: 'HSBC',
              titular: 'Juan Raúl García Segura',
              notarjeta: 1234567891234,
              vencimiento: 2022,
              cvv: 763
            },
            cobro: '12/06/2019'
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
        pago: 'Mensual',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: { estatus: null},
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
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
            tarjeta: {
              estatus: 'Sin asignacion'
            },
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
            tarjeta: { estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
        pago: 'Mensual',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
        pago: 'Mensual',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
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
            tarjeta:{estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
        pago: 'Mensual',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
        pago: 'Mensual',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
        pago: 'Mensual',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
        pago: 'Mensual',
        recibos: [
          {
            fraccion: '1/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/01/2019',
            hasta: '15/02/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
            cobro: null
          },
          {
            fraccion: '2/6',
            norecibo: 123456789123,
            estatus: 'Pagado',
            monto: 1000,
            desde: '16/02/2019',
            hasta: '15/03/2019',
            conducto: 'Intermediario',
            tarjeta: {estatus: null},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus: 'Sin asignacion'},
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
            tarjeta: {estatus:'Sin asignacion'},
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
 public bancos: Banco[] = [
  {
    nombre: 'Bancomer',
  },
  {
    nombre: 'Banamex',
  },
  {
    nombre: 'HSBC',
  },
  {
    nombre: 'Santander',
  },
];
  getClientes() {
    return this.clientes;
  }

  getCliente(idx: number) {
    // console.log(idx, this.clientes[idx])
    return this.clientes[idx];
  }
  getPoliza(cliente, nopoliza: number) {
     cliente.polizas.filter(params => {
      // tslint:disable-next-line: triple-equals
      if (params.nopoliza == nopoliza) {
        this.poliza = params;
      }
      });
    // tslint:disable-next-line: no-unused-expression
     return  this.poliza;
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

  }

  buscarPoliza() {

    // return this.clientes.filter(params => {
    //   return params.nombre.toLowerCase().includes(termino.toLowerCase());
    // });
  }
  getBancos() {
    // console.log('bancossvr',this.bancos)
    return this.bancos;
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
  pago: string;
}
export interface Banco {
nombre: string;
}

export interface Recibo {
  fraccion: string;
  norecibo: number;
  estatus: string;
  monto: number;
  desde: string;
  hasta: string;
  conducto: string;
  tarjeta?: Tarjeta;
  cobro: string;
}

export interface Tarjeta {
  estatus: string;
  banco: Banco;
  titular: string;
  notarjeta: number;
  vencimiento: number;
  cvv: number;
}


