import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-platform-page',
  templateUrl: './platform-page.component.html',
  styleUrl: './platform-page.component.css'
})
export class PlatformPageComponent {

  constructor(private router: Router) {
  }

  public switchPage(url: string) {
    this.router.navigate([`/${url}`], {});
  }

}
