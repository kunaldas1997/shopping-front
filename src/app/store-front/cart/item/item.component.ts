import { Component, Input, Output } from '@angular/core';
import { AllProdsService } from '../../all-prods.service';
import { EventEmitter } from 'stream';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() id: string = '';
  @Input() product_name: string = '';
  @Input() product_price: number = 0;
  @Input() count: string = '';

  constructor(private allProd: AllProdsService, private shared: SharedService) { }

  remove(): void {

    console.log(this.id);
    this.allProd.removeFromCart(this.id).subscribe({
      next: (data: any) => {
        console.log(data.message);
        this.allProd.getCartData().subscribe(
          {
            next: (data: any) => {
              this.shared.sendData(data.data.cart);
            },
            error: (err) => {
              console.log(err);
            }
          }
        );
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  add(): void {
    this.allProd.addToCart(this.id).subscribe({
      next: (data: any) => {
        console.log(data.message);

        this.allProd.getCartData().subscribe(
          {
            next: (data: any) => {
              this.shared.sendData(data.data.cart);
            },
            error: (err) => {
              console.log(err);
            }
          }
        );
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
