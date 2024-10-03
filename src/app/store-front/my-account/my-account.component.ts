import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AllProdsService } from '../all-prods.service';
import { AccountServiceService } from './account-service.service';
import { NgIf, NgFor } from '@angular/common';
import { ItemComponent } from "./item/item.component";


@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [FontAwesomeModule, NgIf, NgFor, ItemComponent],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss'
})
export class MyAccountComponent {

  constructor(private library: FaIconLibrary, private account: AccountServiceService) {
    library.addIcons(faUser)
  }

  jsonData: any;
  orderData: any;

  getAccountData(): void {
    this.account.getAccount().subscribe(
      {
        next: (data: any) => {
          this.jsonData = data.data.user_name
          this.account.getOrders().subscribe(
            {
              next: (data: any) => {
                this.orderData = data;
                console.log(this.orderData.message);
              },
              error: (err) => {
                console.log("from order: ", err);
              }
            }
          )
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  ngOnInit(): void {
    this.getAccountData();
  }
}
