import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faInstagram, faFacebookF, faTwitter, faPinterestP} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-store-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(library: FaIconLibrary){
    library.addIcons(faInstagram, faFacebookF, faTwitter, faPinterestP)
  }
}
