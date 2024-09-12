import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {

  @Input() id?: string = '';
  @Input() product_name: string = '';
  @Input() description: string = '';
  @Input() product_price: number = 0;
  @Input() product_img: string[] = [];
  @Input() seller_id?: string;
  @Input() category: string = '';

  routeToProductPage(): void {
    console.log(this.id);
  }

  ngOnInit(): void {
    this.description = this.description.length > 35 ? this.description.slice(0, 35) + ('...') : this.description;
  }
}
