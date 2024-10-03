import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl } from '../../../app.config';
import { ProductSingleComponent } from '../product-single/product-single.component';
import { AllProdsService } from '../../all-prods.service';


@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {

  @Input() id: string = '';
  @Input() product_name: string = '';
  @Input() description: string = '';
  @Input() product_price: number = 0;
  @Input() product_img: string[] = [];
  @Input() seller_id?: string;
  @Input() category: string = '';

  constructor(private pageRouter: Router, private allServ: AllProdsService) { }

  routeToProductPage(): void {
    var path = "store/product/" + this.id;
    localStorage.setItem("id", this.id);
    this.pageRouter.navigate([path]);
  }

  ngOnInit(): void {
    this.description = this.description.length > 35 ? this.description.slice(0, 35) + ('...') : this.description;
  }
}
