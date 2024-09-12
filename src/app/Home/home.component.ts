import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { BannerComponent } from "./banner/banner.component";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { OurProductComponent } from "./our-product/our-product.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./Header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, BannerComponent, FontAwesomeModule, OurProductComponent, ReviewsComponent, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  banners = [
    {
      title: 'Comfortable sittings at an affordable price',
      subtitle: 'Support your delicate back without compromising',
      imageUrl: 'assets/Product.svg',
      altText: 'Product Image 1',
      price: '$199'
    },
    {
      title: 'Modern design for your home with minimal designs',
      subtitle: 'Elevate your living space with our latest collection',
      imageUrl: 'assets/Product2.svg',
      altText: 'Product Image 2',
      price: '$249'
    },
    {
      title: 'Ergonomic and stylish within your wallet reach',
      subtitle: 'Perfect for office and home use',
      imageUrl: 'assets/Product.png',
      altText: 'Product Image 3',
      price: '$299'
    }
  ];

  currentIndex = 0;
  private intervalId: any;


  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowLeft, faArrowRight);
  }

 
  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextBanner();
    }, 5000);
  }

  nextBanner(): void {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  previousBanner(): void {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  get transformValue() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  ngOnInit() {

    this.startAutoSlide()
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

