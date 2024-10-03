import { Component } from '@angular/core';
import { StoreHeaderComponent } from "../header/header.component";
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ItemComponent } from "./item/item.component";
import { AllProdsService } from '../all-prods.service';

import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SharedService } from './shared.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [StoreHeaderComponent, NgIf, ItemComponent, NgFor, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  jsonDataCart: any;
  message: string = "";
  post_order_message: string | null = null;

  //fadeoutAnim
  isFadeOut: boolean = false;
  isFadeIn: boolean = false;

  constructor(private allProd: AllProdsService, private shared: SharedService) { }
  getData(): void {
    this.allProd.getCartData().subscribe(
      {
        next: (data: any) => {
          this.jsonDataCart = data.data.cart;
          if (this.jsonDataCart.product_list.length === 0) {
            this.jsonDataCart = null;
            this.message = "Cart is Empty";
          }
        },
        error: (err) => {
          this.message = "Cart is empty"
          console.log(this.message);
        }
      }
    );
  }

  placeOrder(): void {
    this.allProd.placeOrder().subscribe(
      {
        next: (data: any) => {

          this.jsonDataCart = null;
          this.getData();
          this.post_order_message = data.message;
          
          this.isFadeIn = true;

          setTimeout(() => {
            this.isFadeIn = false;
            this.isFadeOut = true;
          
            setTimeout(() => {
              this.isFadeOut = false;
              this.post_order_message = null;
            }, 1000);
          
          }, 3000);
          
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  ngOnInit() {
    this.getData();
    this.shared.data$.subscribe({
      next: (data: any) => {
        this.jsonDataCart = data;
      }
    })
  }
}
