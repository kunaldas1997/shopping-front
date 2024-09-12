import { Component } from '@angular/core';
import { CategorySectionComponent } from "./category-section/category-section.component";
import { AllProdsService } from '../all-prods.service';
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { CommonModule, NgFor } from '@angular/common';
import { FilterPaneComponent } from "./filter-pane/filter-pane.component";


export interface Product {
  id?: string;
  product_name: string;
  description: string;
  product_price: number;
  product_img: string[];
  seller_id?: string;
  category: string;
};

@Component({
  selector: 'app-store-main-section',
  standalone: true,
  imports: [CategorySectionComponent, ProductListItemComponent, NgFor, CommonModule, FilterPaneComponent],
  templateUrl: './store-main-section.component.html',
  styleUrl: './store-main-section.component.scss'
})
export class StoreMainSectionComponent {

  constructor(private product: AllProdsService) { }
  jsonData: Product[] = [];

  getData(): void {
    this.product.getProducts("product").subscribe({
      next: (data: Product[]) => {
        this.jsonData = data;
        console.log(this.jsonData);
      },
      error: (err) => {
        console.log(err.message, err.status);
      }
    })
  }



  ngOnInit(): void {
    this.getData();
  }
}
