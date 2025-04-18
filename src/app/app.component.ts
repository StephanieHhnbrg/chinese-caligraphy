import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public isSidecarEnabled = false;
  public isTrainingDataGenerationActivated: boolean = environment.trainingDataGeneration;

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.router.events.subscribe((data) => {
      if ('url' in data) {
        this.isSidecarEnabled = data.url.length > 1;
      }
    });
  }

}
