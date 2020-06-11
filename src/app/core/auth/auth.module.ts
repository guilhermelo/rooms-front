import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            // Caso tenha mais um interceptor, ele delega para o próximo
            multi: true,
        },
    ],
})
export class InterceptorModule { }
