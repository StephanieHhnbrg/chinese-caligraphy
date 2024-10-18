import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CharacterService} from "./services/character.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
