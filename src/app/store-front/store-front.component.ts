import { Component } from '@angular/core';
import { StoreHeaderComponent } from './header/header.component';
import { StoreMainSectionComponent } from "./store-main-section/store-main-section.component";
import { FilterPaneComponent } from "./store-main-section/filter-pane/filter-pane.component";
import { FooterComponent } from "./footer/footer.component";
import { CartComponent } from "./cart/cart.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-store-front',
  standalone: true,
  imports: [StoreHeaderComponent, StoreMainSectionComponent, FilterPaneComponent, FooterComponent, CartComponent, RouterOutlet],
  templateUrl: './store-front.component.html',
  styleUrl: './store-front.component.scss'
})
export class StoreFrontComponent {

}
