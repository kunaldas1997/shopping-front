import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private httpClient: HttpClient) { }


  getAccount(): Observable<any> {
    return this.httpClient.get(baseUrl + "user/account", { responseType: 'json' });
  }

  getOrders(): Observable<any>{
    return this.httpClient.get(baseUrl + "order/get-order", {responseType: 'json'})
  }
}
