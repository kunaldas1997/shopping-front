import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../app.config';


interface Product {
  id?: string;               // Optional because it's nullable in C#
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
}
