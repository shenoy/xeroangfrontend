import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { LoginComponent } from './login/login.component';

@Injectable()
export class AuthHttpInterceptor implements OnInit, HttpInterceptor {
  requestCounter: number = 0;
  message: string;
  subscription: Subscription;

  constructor(private data: LoginComponent, private cookie: CookieService) {}
  token: string;

  ngOnInit() {
    console.log('MESSSAGE>>>');
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    

    request = request.clone({
      headers: request.headers.set(
        'Authorization',
        'Bearer ' + this.cookie.get('jwt')
      ),
    });

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      })
    );
  }
}

