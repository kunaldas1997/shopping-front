import { Component, Input } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUser, faStar);
  }

  @Input()
  rating: string = "";

  @Input()
  comment: string = "";
}
