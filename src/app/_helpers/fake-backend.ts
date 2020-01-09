import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        return of(null).pipe(mergeMap(() => {

            if (request.url.endsWith(environment.uriApi+environment.uriApiConteoRecibos) && request.method === 'POST') {
                let body = 
                
                {
                  "recibosExigibles": {
                      "recibos": [
                          {
                              "codigoIntermediario": "0050388001",
                              "numeroPoliza": "00001404937771",
                              "nombreContratante": "Gonzalez Jimenez Isabel",
                              "estado": {
                                  "clvEstado": "P",
                                  "descEstado": "Pendiente",
                                  "clvSubEstado": "PD",
                                  "descSubEstado": "PuroPuro",
                                  "descApp": "Pendiente"
                              },
                              "formaPago": {
                                  "clvFormaPago": "M",
                                  "descFormaPago": "Mensual"
                              },
                              "fraccion": "1/12",
                              "inicioVigencia": 20191113,
                              "fechaVencimiento": 20191213,
                              "canalCobro": {
                                  "clvCanalCobro": "IN",
                                  "descCanalCobro": "Intermediario"
                              },
                              "versionPoliza": 0,
                              "numeroRecibo": "001935707620",
                              "importe": 712.95,
                              "moneda": "MXP",
                              "ramo": {
                                  "clvRamo": "AU",
                                  "descRamo": "Autos"
                              },
                              "estatusPoliza": "Vigente",
                              "fechaEstatus": null,
                              "clvTecnico": "A2400LNEVO",
                              "clvComercial": "00001",
                              "reintento": 0,
                              "fechaCancelacionRecibo": null,
                              "numeroCobranza": null,
                              "motivoCancelacion": null,
                              "motivoRechazo": null,
                              "permitirPago": {
                                  "banPermitirPago": false,
                                  "fraccionReciboFaltante": null,
                                  "numeroReciboFaltante": null
                              },
                              "numeroTarjeta": null,
                              "nombreBanco": "",
                              "fechaReintento": 0,
                              "fechaProgramada": 0
                          },
                          {
                              "codigoIntermediario": "0050388001",
                              "numeroPoliza": "00001404937771",
                              "nombreContratante": "Gonzalez Jimenez Isabel",
                              "estado": {
                                  "clvEstado": "P",
                                  "descEstado": "Pendiente",
                                  "clvSubEstado": "PD",
                                  "descSubEstado": "PuroPuro",
                                  "descApp": "Pendiente"
                              },
                              "formaPago": {
                                  "clvFormaPago": "M",
                                  "descFormaPago": "Mensual"
                              },
                              "fraccion": "2/12",
                              "inicioVigencia": 20191213,
                              "fechaVencimiento": 20200113,
                              "canalCobro": {
                                  "clvCanalCobro": "IN",
                                  "descCanalCobro": "Intermediario"
                              },
                              "versionPoliza": 0,
                              "numeroRecibo": "001936123501",
                              "importe": 713.11,
                              "moneda": "MXP",
                              "ramo": {
                                  "clvRamo": "AU",
                                  "descRamo": "Autos"
                              },
                              "estatusPoliza": "Vigente",
                              "fechaEstatus": null,
                              "clvTecnico": "A2400LNEVO",
                              "clvComercial": "00001",
                              "reintento": 0,
                              "fechaCancelacionRecibo": null,
                              "numeroCobranza": null,
                              "motivoCancelacion": null,
                              "motivoRechazo": null,
                              "permitirPago": {
                                  "banPermitirPago": false,
                                  "fraccionReciboFaltante": null,
                                  "numeroReciboFaltante": null
                              },
                              "numeroTarjeta": null,
                              "nombreBanco": "",
                              "fechaReintento": 0,
                              "fechaProgramada": 0
                          },
                          {
                              "codigoIntermediario": "0050388001",
                              "numeroPoliza": "00001404947200",
                              "nombreContratante": "Martinez Meza Odi",
                              "estado": {
                                  "clvEstado": "P",
                                  "descEstado": "Pendiente",
                                  "clvSubEstado": "PD",
                                  "descSubEstado": "PuroPuro",
                                  "descApp": "Pendiente"
                              },
                              "formaPago": {
                                  "clvFormaPago": "M",
                                  "descFormaPago": "Mensual"
                              },
                              "fraccion": "1/12",
                              "inicioVigencia": 20191219,
                              "fechaVencimiento": 20200119,
                              "canalCobro": {
                                  "clvCanalCobro": "IN",
                                  "descCanalCobro": "Intermediario"
                              },
                              "versionPoliza": 0,
                              "numeroRecibo": "001956007890",
                              "importe": 1428.08,
                              "moneda": "MXP",
                              "ramo": {
                                  "clvRamo": "AU",
                                  "descRamo": "Autos"
                              },
                              "estatusPoliza": "Vigente",
                              "fechaEstatus": null,
                              "clvTecnico": "A2400LNEVO",
                              "clvComercial": "00001",
                              "reintento": 0,
                              "fechaCancelacionRecibo": null,
                              "numeroCobranza": null,
                              "motivoCancelacion": null,
                              "motivoRechazo": null,
                              "permitirPago": {
                                  "banPermitirPago": false,
                                  "fraccionReciboFaltante": null,
                                  "numeroReciboFaltante": null
                              },
                              "numeroTarjeta": null,
                              "nombreBanco": "",
                              "fechaReintento": 0,
                              "fechaProgramada": 0
                          },
                          {
                              "codigoIntermediario": "0050388001",
                              "numeroPoliza": "00001405039270",
                              "nombreContratante": "Martinez Meza Odi",
                              "estado": {
                                  "clvEstado": "P",
                                  "descEstado": "Pendiente",
                                  "clvSubEstado": "PD",
                                  "descSubEstado": "PuroPuro",
                                  "descApp": "Pendiente"
                              },
                              "formaPago": {
                                  "clvFormaPago": "M",
                                  "descFormaPago": "Mensual"
                              },
                              "fraccion": "1/12",
                              "inicioVigencia": 20191219,
                              "fechaVencimiento": 20200119,
                              "canalCobro": {
                                  "clvCanalCobro": "IN",
                                  "descCanalCobro": "Intermediario"
                              },
                              "versionPoliza": 0,
                              "numeroRecibo": "001956029920",
                              "importe": 965.53,
                              "moneda": "MXP",
                              "ramo": {
                                  "clvRamo": "AU",
                                  "descRamo": "Autos"
                              },
                              "estatusPoliza": "Vigente",
                              "fechaEstatus": null,
                              "clvTecnico": "A2400LNEVO",
                              "clvComercial": "00001",
                              "reintento": 0,
                              "fechaCancelacionRecibo": null,
                              "numeroCobranza": null,
                              "motivoCancelacion": null,
                              "motivoRechazo": null,
                              "permitirPago": {
                                  "banPermitirPago": false,
                                  "fraccionReciboFaltante": null,
                                  "numeroReciboFaltante": null
                              },
                              "numeroTarjeta": null,
                              "nombreBanco": "",
                              "fechaReintento": 0,
                              "fechaProgramada": 0
                          }
                      ],
                      "numeroRecibosExigibles": 4
                  },
                  "recibosBanco": {
                      "recibos": [],
                      "numeroRechazosBancarios": 0
                  }
              }
                
                ;

                return of(new HttpResponse({ status: 200, body:JSON.parse( JSON.stringify(body)) }));
            }

            if (request.url.endsWith(environment.uriApi+environment.uriApiConsultaEstatus) && request.method === 'POST') {
              let body =  {
                "consultaRecibos": [
                    {
                        "codigoIntermediario": "0010022001",
                        "numeroPoliza": "00000376049037",
                        "nombreContratante": "Carreola Cano Paty",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191029,
                        "fechaVencimiento": 20201029,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 0,
                        "numeroRecibo": "001720832030",
                        "importe": 114670.0,
                        "moneda": "USD",
                        "ramo": {
                            "clvRamo": "VI",
                            "descRamo": "Vida"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "V1011PTRAD",
                        "clvComercial": "00003",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "7610",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0010022001",
                        "numeroPoliza": "00000376014015",
                        "nombreContratante": "Torres Martinez Sidney",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191015,
                        "fechaVencimiento": 20201015,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 1,
                        "numeroRecibo": "001914532941",
                        "importe": 289200.06,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "VI",
                            "descRamo": "Vida"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "V1011ATRAD",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "X246",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0010022001",
                        "numeroPoliza": "00000376013975",
                        "nombreContratante": "Carmna Santos Alexa",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191015,
                        "fechaVencimiento": 20201015,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 1,
                        "numeroRecibo": "001914576641",
                        "importe": 289200.06,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "VI",
                            "descRamo": "Vida"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "V1011ATRAD",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "J891",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0010022001",
                        "numeroPoliza": "00000376013983",
                        "nombreContratante": "Martinez Lopez Andru",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191015,
                        "fechaVencimiento": 20201015,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 1,
                        "numeroRecibo": "001914578241",
                        "importe": 289200.06,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "VI",
                            "descRamo": "Vida"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "V1011ATRAD",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "C725",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0010022001",
                        "numeroPoliza": "00000376014098",
                        "nombreContratante": "Martinez Lopez Andru",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191015,
                        "fechaVencimiento": 20201015,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 1,
                        "numeroRecibo": "001914580571",
                        "importe": 289200.06,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "VI",
                            "descRamo": "Vida"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "V1011ATRAD",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "C725",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0010022001",
                        "numeroPoliza": "00000376019816",
                        "nombreContratante": "Carreola Cano Paty",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191022,
                        "fechaVencimiento": 20201022,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 1,
                        "numeroRecibo": "001919453341",
                        "importe": 300083.28,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "VI",
                            "descRamo": "Vida"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "V1011ATRAD",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "7610",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0010022001",
                        "numeroPoliza": "00000376015095",
                        "nombreContratante": "Ayluardo Lopez Cristhian",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191016,
                        "fechaVencimiento": 20201016,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 1,
                        "numeroRecibo": "001919466811",
                        "importe": 3579.4,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "VI",
                            "descRamo": "Vida"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "V1011ATRAD",
                        "clvComercial": "00003",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "0468",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0010022001",
                        "numeroPoliza": "00000376019824",
                        "nombreContratante": "Martinez Lopez Andru",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191022,
                        "fechaVencimiento": 20201022,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 1,
                        "numeroRecibo": "001919473961",
                        "importe": 300083.28,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "VI",
                            "descRamo": "Vida"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "V1011ATRAD",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "C725",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0010022001",
                        "numeroPoliza": "00000376019931",
                        "nombreContratante": "Lungo Lannda Catherine",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191022,
                        "fechaVencimiento": 20201022,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 1,
                        "numeroRecibo": "001919475191",
                        "importe": 300083.28,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "VI",
                            "descRamo": "Vida"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "V1011ATRAD",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "7223",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0010022001",
                        "numeroPoliza": "00000376030391",
                        "nombreContratante": "Ayluardo Lopez Cristhian",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191025,
                        "fechaVencimiento": 20201025,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 1,
                        "numeroRecibo": "001921619541",
                        "importe": 299928.26,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "VI",
                            "descRamo": "Vida"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "V1011ATRAD",
                        "clvComercial": "00001",
                        "reintento": 1,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": "Cobranza con Debito",
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "0468",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0073060001",
                        "numeroPoliza": "00001404890988",
                        "nombreContratante": "Hernandez Castro Enrique",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191026,
                        "fechaVencimiento": 20201026,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 0,
                        "numeroRecibo": "001922461610",
                        "importe": 7042.29,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "AU",
                            "descRamo": "Autos"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "A2400LNEVO",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "6096",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0073060001",
                        "numeroPoliza": "00001404895888",
                        "nombreContratante": "Hernandez Castro Enrique",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191026,
                        "fechaVencimiento": 20201026,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 0,
                        "numeroRecibo": "001924723440",
                        "importe": 7042.29,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "AU",
                            "descRamo": "Autos"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "A2400LNEVO",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "6096",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0073060001",
                        "numeroPoliza": "00001404895896",
                        "nombreContratante": "Hernandez Castro Enrique",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191026,
                        "fechaVencimiento": 20201026,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 0,
                        "numeroRecibo": "001924723530",
                        "importe": 7042.29,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "AU",
                            "descRamo": "Autos"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "A2400LNEVO",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "6096",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0073060001",
                        "numeroPoliza": "00001404907378",
                        "nombreContratante": "Hernandez Castro Enrique",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191026,
                        "fechaVencimiento": 20201026,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 0,
                        "numeroRecibo": "001926642530",
                        "importe": 7042.29,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "AU",
                            "descRamo": "Autos"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "A2400LNEVO",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "6096",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0073060001",
                        "numeroPoliza": "00001404907386",
                        "nombreContratante": "Hernandez Castro Enrique",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191026,
                        "fechaVencimiento": 20201026,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 0,
                        "numeroRecibo": "001926642620",
                        "importe": 7042.29,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "AU",
                            "descRamo": "Autos"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "A2400LNEVO",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "6096",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0073060001",
                        "numeroPoliza": "00001404925768",
                        "nombreContratante": "Watts Rivers Naomi",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191105,
                        "fechaVencimiento": 20201105,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 0,
                        "numeroRecibo": "001931497190",
                        "importe": 40742.18,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "SA",
                            "descRamo": "GMM"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "G0334GMMIN",
                        "clvComercial": "00001",
                        "reintento": 0,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": null,
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "3580",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    },
                    {
                        "codigoIntermediario": "0073060001",
                        "numeroPoliza": "00001404927202",
                        "nombreContratante": "Michael English George",
                        "estado": {
                            "clvEstado": "P",
                            "descEstado": "Pendiente",
                            "clvSubEstado": "EB",
                            "descSubEstado": "Env.Banco Enviado al banco",
                            "descApp": "En reintento"
                        },
                        "formaPago": {
                            "clvFormaPago": "A",
                            "descFormaPago": "Anual"
                        },
                        "fraccion": "1/1",
                        "inicioVigencia": 20191106,
                        "fechaVencimiento": 20201106,
                        "canalCobro": {
                            "clvCanalCobro": "BC",
                            "descCanalCobro": "Banco"
                        },
                        "versionPoliza": 0,
                        "numeroRecibo": "001932067000",
                        "importe": 46351.69,
                        "moneda": "MXP",
                        "ramo": {
                            "clvRamo": "SA",
                            "descRamo": "GMM"
                        },
                        "estatusPoliza": "Vigente",
                        "fechaEstatus": 0,
                        "clvTecnico": "G0334GMMIN",
                        "clvComercial": "00001",
                        "reintento": 1,
                        "fechaCancelacionRecibo": null,
                        "numeroCobranza": null,
                        "motivoCancelacion": null,
                        "motivoRechazo": "Cobranza CAT",
                        "permitirPago": {
                            "banPermitirPago": false,
                            "fraccionReciboFaltante": null,
                            "numeroReciboFaltante": null
                        },
                        "numeroTarjeta": "6097",
                        "nombreBanco": "SCOTIABANK INVERLAT",
                        "fechaReintento": 0,
                        "fechaProgramada": 20191029
                    }
                ]
            };
              
          

              return of(new HttpResponse({ status: 200, body:JSON.parse(  JSON.stringify(body)) }));
          }
            if (request.url.endsWith(environment.uriApi+environment.uriApiCatalogoEstatusRecibos) && request.method === 'GET') {
                let body = [
                    { value: '0', viewValue: 'Pendiente' },
                    { value: '1', viewValue: 'En reintento' },
                    { value: '2', viewValue: 'Domiciliado' }
                ];

                return of(new HttpResponse({ status: 200, body: JSON.stringify(body) }));
            }
            if (request.url.endsWith(environment.uriApi+environment.uriApiCatalogoRamos) && request.method === 'GET') {
                let body = [
                    { value: 'GMM', viewValue: 'GMM' },
                    { value: 'VI', viewValue: 'VIDA' },
                    { value: 'DA', viewValue: 'DAÑO' },
                    { value: 'AUT', viewValue: 'AUTOS' }
                ];

                return of(new HttpResponse({ status: 200, body: JSON.stringify(body) }));
            }
            if (request.url.endsWith(environment.uriApi+environment.uriApiCatalogoConductos) && request.method === 'GET') {
                let body = [
                    { value: '0', viewValue: 'Banco' },
                    { value: '1', viewValue: 'Intermediario' }
                ];

                return of(new HttpResponse({ status: 200, body: JSON.stringify(body) }));
            }

            if (request.url.endsWith(environment.uriApi+environment.uriApiCatalogoCampania) && request.method === 'GET') {
                let body = [
                    {
                      label: 'Autos', bancos: [
                        { id: '1', name: 'Banorte',
                        data: [
                          { meses: '6', sobretasa: '0.00%' },
                          { meses: '12', sobretasa: '0.00%'  }
                        ]
                      },
                        { id: '2', name: 'Citibanamex',
                        data: [
                          { meses: '6', sobretasa: '0.00%' },
                          { meses: '12', sobretasa: '0.00%'  }
                        ] }
                      ]
                    },
                    { label: 'GMM',bancos: [
                      { id: '1', name: 'Banorte',
                      data: [
                        { meses: '6', sobretasa: '0.00%' },
                        { meses: '12', sobretasa: '0.00%'  }
                      ]
                    },
                      { id: '2', name: 'Citibanamex',
                      data: [
                        { meses: '6', sobretasa: '0.00%' },
                        { meses: '12', sobretasa: '0.00%'  }
                      ] }
                    ] },
                    { label: 'Vida', bancos: [
                      { id: '1', name: 'Banorte',
                      data: [
                        { meses: '6', sobretasa: '0.00%' },
                        { meses: '12', sobretasa: '0.00%'  }
                      ]
                    },
                      { id: '2', name: 'Citibanamex',
                      data: [
                        { meses: '6', sobretasa: '0.00%' },
                        { meses: '12', sobretasa: '0.00%'  }
                      ] }
                    ] },
                    { label: 'Daño' },
                  ];

                  
                return of(new HttpResponse({ status: 200, body: JSON.stringify(body) }));
            }


            if (request.url.endsWith(environment.uriApi+environment.uriApiCatalogoCampaniaEspecifica) && request.method === 'GET') {
                let body = [
                    {
                        "mesesSinIntereses": "3 Meses|Sobretasa 2.5,6 Meses|Sobretasa 4.25,12 Meses|Sobretasa 7.5",
                        "banco": "AMERICAN EXPRESS",
                        "bines": [
                            "376724",
                            "376723",
                            "376689",
                            "376722",
                            "370740",
                            "376721",
                            "376720",
                            "370745",
                            "370746",
                            "370747",
                            "370748",
                            "376729",
                            "370741",
                            "376728",
                            "370742",
                            "376727",
                            "370743",
                            "376726",
                            "370744",
                            "376725",
                            "370749",
                            "376694",
                            "376693",
                            "376692",
                            "376691",
                            "376690",
                            "376679",
                            "376678",
                            "376677",
                            "376676",
                            "376675",
                            "376674",
                            "376673",
                            "370734",
                            "370735",
                            "370736",
                            "370737",
                            "376718",
                            "370730",
                            "376717",
                            "370731",
                            "376716",
                            "370732",
                            "370733",
                            "370738",
                            "370739",
                            "377650",
                            "377651",
                            "376681",
                            "376680",
                            "370760",
                            "370761",
                            "370762",
                            "370767",
                            "370768",
                            "370769",
                            "370763",
                            "370764",
                            "370765",
                            "370766",
                            "370750",
                            "370751",
                            "376699",
                            "376698",
                            "376697",
                            "376696",
                            "376695",
                            "370756",
                            "370757",
                            "377664",
                            "370758",
                            "370759",
                            "370752",
                            "370753",
                            "370754",
                            "376858",
                            "370755",
                            "376857",
                            "370781",
                            "370782",
                            "370783",
                            "370784",
                            "370780",
                            "370701",
                            "370789",
                            "370702",
                            "370703",
                            "370704",
                            "370785",
                            "379911",
                            "370786",
                            "370787",
                            "370700",
                            "370788",
                            "370709",
                            "370705",
                            "370706",
                            "370707",
                            "370708",
                            "370770",
                            "370771",
                            "370772",
                            "370773",
                            "370778",
                            "370779",
                            "370774",
                            "370775",
                            "370776",
                            "370777",
                            "371772",
                            "376669",
                            "376702",
                            "376668",
                            "376701",
                            "371774",
                            "376667",
                            "376700",
                            "371773",
                            "376666",
                            "376665",
                            "376664",
                            "376663",
                            "376662",
                            "370723",
                            "370724",
                            "371779",
                            "376709",
                            "370725",
                            "376708",
                            "370726",
                            "376707",
                            "371776",
                            "376706",
                            "370720",
                            "371775",
                            "376705",
                            "370721",
                            "371778",
                            "376704",
                            "370722",
                            "371777",
                            "376703",
                            "370727",
                            "370728",
                            "370729",
                            "376672",
                            "376671",
                            "376670",
                            "370792",
                            "370793",
                            "370794",
                            "370795",
                            "370790",
                            "370791",
                            "370712",
                            "370713",
                            "370714",
                            "370715",
                            "370796",
                            "370797",
                            "370710",
                            "370798",
                            "370711",
                            "370799",
                            "370716",
                            "370717",
                            "370718",
                            "370719",
                            "376661",
                            "376660"
                        ]
                    },
                    {
                        "mesesSinIntereses": "3 Meses|Sobretasa 3.8,6 Meses|Sobretasa 5.92,12 Meses|Sobretasa 10.51",
                        "banco": "BANAMEX",
                        "bines": [
                            "518899",
                            "407559",
                            "545039",
                            "512795",
                            "518853",
                            "519347",
                            "520213",
                            "549639",
                            "408244",
                            "408245",
                            "408242",
                            "441541",
                            "512709",
                            "554625",
                            "526489",
                            "528866",
                            "512823",
                            "544672",
                            "520021",
                            "548236",
                            "548234",
                            "403707",
                            "454057",
                            "454492",
                            "518004",
                            "410852",
                            "549949",
                            "528875",
                            "522130",
                            "549631",
                            "547093",
                            "491271",
                            "528877",
                            "491272",
                            "529088",
                            "545631",
                            "529001",
                            "435741",
                            "529091",
                            "455255",
                            "544925",
                            "498460",
                            "425763",
                            "520830",
                            "490176",
                            "530756",
                            "532858",
                            "512809",
                            "490178",
                            "493165",
                            "493164",
                            "528843",
                            "405306",
                            "491501",
                            "491502",
                            "520608",
                            "542537",
                            "548119",
                            "528805",
                            "530056",
                            "528804",
                            "427435",
                            "439120",
                            "547075",
                            "528851",
                            "420713",
                            "525424",
                            "549138",
                            "559209",
                            "425766",
                            "425768",
                            "477247",
                            "547112",
                            "454069"
                        ]
                    },
                    {
                        "mesesSinIntereses": "3 Meses|Sobretasa 2.5,6 Meses|Sobretasa 5,12 Meses|Sobretasa 9.5",
                        "banco": "BANORTE",
                        "bines": [
                            "544548",
                            "480077",
                            "544549",
                            "493173",
                            "520212",
                            "425982",
                            "493172",
                            "425981",
                            "491366",
                            "491586",
                            "493158",
                            "547097",
                            "491341",
                            "493157",
                            "547096",
                            "402318",
                            "547050",
                            "554764",
                            "491371",
                            "512745",
                            "547079",
                            "547078"
                        ]
                    },
                    {
                        "mesesSinIntereses": "3 Meses|Sobretasa 3.3,6 Meses|Sobretasa 5.1,12 Meses|Sobretasa 10.6",
                        "banco": "BBVA BANCOMER",
                        "bines": [
                            "418090",
                            "418093",
                            "535875",
                            "444085",
                            "517440",
                            "547086",
                            "455508",
                            "455529",
                            "418094",
                            "455505",
                            "542010",
                            "455504",
                            "455526",
                            "544551",
                            "418075",
                            "455503",
                            "455525",
                            "477213",
                            "542073",
                            "544053",
                            "418077",
                            "455545",
                            "477214",
                            "554629",
                            "455500",
                            "477210",
                            "455540",
                            "477212",
                            "481514",
                            "542977",
                            "481515",
                            "542015",
                            "418080",
                            "481516",
                            "481517",
                            "493162",
                            "493161",
                            "477291",
                            "493160",
                            "477292",
                            "441311",
                            "410181",
                            "410180",
                            "547095",
                            "522498",
                            "547156",
                            "547155",
                            "547077"
                        ]
                    },
                    {
                        "mesesSinIntereses": "3 Meses|Sobretasa 3,6 Meses|Sobretasa 5.2,12 Meses|Sobretasa 9.5",
                        "banco": "HSBC",
                        "bines": [
                            "413406",
                            "541278",
                            "491280",
                            "491281",
                            "426012",
                            "540956",
                            "522174",
                            "547074",
                            "541290",
                            "491284",
                            "491295",
                            "547092",
                            "491283",
                            "491294",
                            "416502",
                            "541286",
                            "456880",
                            "452421",
                            "547068"
                        ]
                    },
                    {
                        "mesesSinIntereses": "3 Meses|Sobretasa 2.5,6 Meses|Sobretasa 4,12 Meses|Sobretasa 9",
                        "banco": "SANTANDER",
                        "bines": [
                            "545307",
                            "379911",
                            "540845",
                            "493136",
                            "552488",
                            "554900",
                            "491572",
                            "493135",
                            "491573",
                            "494134",
                            "494133",
                            "547015",
                            "491512",
                            "547146",
                            "547157",
                            "547046"
                        ]
                    }
                ];

                  
                return of(new HttpResponse({ status: 200, body: JSON.stringify(body) }));
            }
                 
                 


            return next.handle(request);

        }))

            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};