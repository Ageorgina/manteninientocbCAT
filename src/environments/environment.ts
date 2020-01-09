// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: 'l7xx63f313ab37be41ecacb2301c7bbcad92',
  uriApiGateware: 'http://localhost:4200/api/',
  uriApiGatewareOscp: 'https://api-dev.oscp.gnp.com.mx/',
  uriApiGatewareGnp: 'http://api.service.gnp.com.mx/',
  uriApi: '/api/',
  uriApiCatalogoRamos: 'ramos',
  uriApiCatalogoConductos: 'conductos',
  uriApiCatalogoEstatusRecibos: 'estatus/recibos',
  uriApiRecibos: 'recibos',
  uriApiReferenciaSart: 'referncias-sart',
  uriApiCatalogoCampania: 'campania',
  uriApiCatalogoCampaniaEspecifica: 'sce/cut/mesesSinIntereses',
  uriApiPago: 'pago',
  uriApiEmail: 'email',

  uriApiConteoRecibos: "mdc-recibos/conteo-recibos",
  uriApiConsultaEstatus: "mdc-recibos/consulta-estatus",
  uriApiConsultanumeroRecibo: "mdc-recibos/consulta-numero-recibo",
  uriApiConsultanumeroPoliza: "mdc-recibos/consulta-numero-poliza",

  uriAppReferenciaSart: 'referencia-sart',
  uriAppPagoPrima: 'referencia-sart/pago/prima',
  uriAppAportacionPolizaVida: 'referencia-sart/aportacion/poliza/vida',
  uriAppPagoPolizaConvivencia: 'referencia-sart/pago/convivencia',



};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
