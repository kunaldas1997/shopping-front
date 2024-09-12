import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../app.config';
import { response } from 'express';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(endpoint: string, body: any): Observable<any> {
    return this.http.post<any>(baseUrl + endpoint, body, { withCredentials: true, responseType: 'json' }).pipe(
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }


  private handleError(err: HttpErrorResponse) {
    console.error("An Error Occured ", err);

    return throwError(() => ({
      status: err.status,
      message: err.message
    }));
  }
}
