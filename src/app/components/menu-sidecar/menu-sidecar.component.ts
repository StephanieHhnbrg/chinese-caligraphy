import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-sidecar',
  templateUrl: './menu-sidecar.component.html',
  styleUrl: './menu-sidecar.component.css'
})
export class MenuSidecarComponent implements AfterViewInit {

  @ViewChild('sideMenu') menuSidecar: any;

  public readonly menuItems: {translationKey: string, url: string}[]  = [
    { translationKey: "NAV.PINYIN_TONES", url: "pinyin-tone" },
    { translationKey: "NAV.RADICAL_DECK", url: "radical-deck" },
    { translationKey: "NAV.HANZI_SEARCH", url: "hanzi-search" },
    { translationKey: "NAV.CALIGRAPHY_GARDEN", url: "caligraphy-garden" },
  ];

  constructor(private router: Router) {}

  public switchPage(url: string) {
    this.router.navigate([`/${url}`], {});
  }
  public ngAfterViewInit() { // FIXME ExpressionChangedAfterItHasBeenCheckedError
    if (this.menuSidecar) {
      this.menuSidecar.open();
    }
  }

}
