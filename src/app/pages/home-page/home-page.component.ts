import { Component } from '@angular/core';
import {WORDS} from "../../data/words";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  public scrollToElement(id: string) {
    let el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  }

  constructor() {
    console.log("words:"+ WORDS.length);
  }

}
