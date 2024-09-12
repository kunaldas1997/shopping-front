import { Component } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBarsProgress, faChair, faComputer, faPaperclip, faTable } from '@fortawesome/free-solid-svg-icons';
import { AllProdsService } from '../../all-prods.service';
import { StoreMainSectionComponent } from '../store-main-section.component';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.scss'
})
export class CategorySectionComponent {

  constructor(private library: FaIconLibrary, private product: AllProdsService, private storeMain: StoreMainSectionComponent) {
    library.addIcons(faChair, faTable, faComputer, faBarsProgress, faPaperclip);
  }

  defaultVal: string = '';
  jsonData: any;

  getThisCat(category: string): void {
    this.product.getProductsByCategory("product", category).subscribe({
      next: (data: any) => {
        this.storeMain.jsonData = data;
      },
      error: (err) => {
        console.log(err.message, err.status);
      }
    });

  }
  
  ngOnInit() {
    this.getThisCat(this.defaultVal);
  }
}
