import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   constructor() {}
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const authReq =
        req.clone({headers: req.headers.set('apiKey', environment.apiKey)});
       return next.handle(authReq);
   }
}

export let authInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};