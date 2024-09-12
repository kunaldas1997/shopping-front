import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NgIf, NgClass, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(library: FaIconLibrary, private scrollSet: AppComponent) {
    library.addIcons(faBars, faUser, faClose, faCartShopping);
  }

  showPanel: boolean = false;

  activatePanel(): void {

    this.showPanel = !this.showPanel;
    this.scrollSet.scrollable(this.showPanel);
  }

  ngOnInit() {
    this.showPanel = false;
  }
}
