import { Component, Input } from '@angular/core';
import { AllProdsService } from '../../all-prods.service';
import { CommonModule } from '@angular/common';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-product-single',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-single.component.html',
  styleUrl: './product-single.component.scss'
})
export class ProductSingleComponent {
  constructor(private allProd: AllProdsService) { }

  jsonData: any;
  
  getData(id: string): void {
    this.allProd.getDataByID(id).subscribe(
      {
        next: (data: any) => {
          this.jsonData = data;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }


  addToCart(): void {
    this.allProd.addToCart(this.jsonData.id).subscribe({
      next: (data: any) => {
        console.log(data.message);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      var id = localStorage.getItem("id");
      if (!id) {
        console.log("ID Not found");
      }
      else {
        this.getData(id);
      }
    }, 1000);
  }
}
