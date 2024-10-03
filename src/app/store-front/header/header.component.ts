import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-store-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class StoreHeaderComponent {

  constructor(private library: FaIconLibrary, private pageRouter: Router) {
    library.addIcons(faShoppingCart, faUser);
  }

  returnHome(): void {
    const path = "store";
    this.pageRouter.navigate([path]);
  }

  myAccount(): void{
    const path = "store/my-account"
    this.pageRouter.navigate([path]);
  }
}
