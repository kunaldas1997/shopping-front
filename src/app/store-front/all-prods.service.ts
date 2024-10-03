import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { baseUrl } from '../app.config';


interface Product {
  id: string;               // Optional because it's nullable in C#
  product_name: string;
  description: string;
  product_price: number;    // Use `number` for decimal values in TypeScript
  product_img: string[];    // Array of strings
  seller_id?: string;       // Optional because it's nullable in C#
  category: string;
};

@Injectable({
  providedIn: 'root'
})
export class AllProdsService {


  constructor(private httpClient: HttpClient) { }

  getProducts(endpoint: string): Observable<Product[]> {
    return this.httpClient.get<any>(baseUrl + endpoint, { responseType: 'json' });
  }

  getProductsByCategory(endpoint: string, category: string): Observable<Product[]> {
    return this.httpClient.get<any>(baseUrl + endpoint + "/" + category, { responseType: 'json' });
  }

  getDataByID(id: string): Observable<any> {
    if (id == null) {
      console.log("ID is empty");
      return EMPTY;
    } else {
      const url = `${baseUrl}product/${id.toString()}`;
      return this.httpClient.get<any>(url, { responseType: 'json' });
    }
  }

  getCartData(): Observable<any> {
    return this.httpClient.get(baseUrl + "user/account", { responseType: 'json' });
  }

  addToCart(id: string): Observable<any> {
    return this.httpClient.post<any>(baseUrl + "user/add?pid=" + id, { responseType: 'json' });
  }

  removeFromCart(id: string): Observable<any> {
    return this.httpClient.delete<any>(baseUrl + "user/delete?pid=" + id, { responseType: 'json' });
  }

  placeOrder(): Observable<any> {
    return this.httpClient.post<any>(baseUrl + "order/create", { responsType: 'json' });
  }
}
