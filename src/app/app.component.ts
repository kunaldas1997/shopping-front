import { Component, Input, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Home/Header/header.component';
import { HomeComponent } from "./Home/home.component";
import { StoreFrontComponent } from "./store-front/store-front.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, StoreFrontComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-front';
  constructor(private renderer: Renderer2) { }

  scrollable(scrollable: boolean) {


    if (scrollable == true) {
      console.log("here");
      this.renderer.addClass(document.body, "stop-scroll");

    } else if (scrollable == false) {
      console.log("wtf");
      this.renderer.removeClass(document.body, "stop-scroll");
    }
  }
}
