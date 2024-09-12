import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { baseUrl } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }


  signupUser(endpoint: string, body: any): Observable<any> {
    return this.http.post<any>(baseUrl + endpoint, body, {
      withCredentials: true,
      responseType: 'json'
    }).pipe(
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
