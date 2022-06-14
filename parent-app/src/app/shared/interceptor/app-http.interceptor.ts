import { Injectable } from '@angular/core';
import { catchError } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar,) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    if (!(request.method == 'POST' && request.url.includes('api/session/v1')) && !(request.url.includes('assets/'))) {
      //  add session id in the header if it is not a login api or otp api or  api to access assets
      request = request.clone({
        setHeaders: { 'X-SESSIONID': sessionStorage.getItem('ccsa_session_id') }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 0 || error.status > 500) { //Anticipating Cors Issue here as the cause of 0
          this.snackBar.open("Oops! Something went wrong and we were unable to complete this action. Let's give it another try, shall we?", 'OK', {
            duration: 6000
          });
        }
        if (error.status === 500) {
          console.log('internal server error occured');
        }
        if (error.status > 400 && error.status < 500) {
          this.snackBar.open("Unable to process your request. Please try again after sometime", 'OK', {
            duration: 4000
          });
        }

        return throwError(error);
      })
    )
  }
}
