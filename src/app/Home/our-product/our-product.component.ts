import { Component } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBarsProgress, faChair, faComputer, faPaperclip, faTable } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-our-product',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './our-product.component.html',
  styleUrl: './our-product.component.scss'
})
export class OurProductComponent {
  constructor(library: FaIconLibrary){
    library.addIcons(faChair, faTable, faComputer, faBarsProgress, faPaperclip);
  }

  emptyClick(): void{
    console.log("null click");
  }
}
