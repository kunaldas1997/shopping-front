import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ReviewCardComponent } from "./review-card/review-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [FontAwesomeModule, ReviewCardComponent, NgFor],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  constructor(library: FaIconLibrary){
    library.addIcons(faUser);
  }

  text = [
    {
      rating: "4.0",
      comment: "The product quality is great, but the delivery was delayed by a couple of days. Overall, happy with the purchase."
    },
    {
      rating: "2.5",
      comment: "The table is sturdy, but the color was not as expected. Also, it came with a few scratches. A bit disappointed."
    },
    {
      rating: "5.0",
      comment: "Absolutely love the sofa! It is exactly as described, and the comfort level is amazing. No issues at all."
    },
    {
      rating: "3.0",
      comment: "The lamp works fine, but the base feels a little flimsy. Could be better in terms of build quality."
    },
    {
      rating: "4.5",
      comment: "The bed frame is solid and looks great in the room. The assembly was a bit tricky, but overall a great buy."
    }
  ];
  
}
