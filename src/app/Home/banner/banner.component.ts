import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input()
  banner: any

  @Input()
  styleString: any
}
