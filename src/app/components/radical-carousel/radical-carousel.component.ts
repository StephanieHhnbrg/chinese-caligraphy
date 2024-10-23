import {Component, OnDestroy, OnInit} from '@angular/core';
import {Radical} from "../../interfaces/radical.data";
import {RADICALS} from "../../data/radicals";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterService} from "../../services/character.service";
import {Subscription} from "rxjs";
import {Word} from "../../interfaces/word.data";

@Component({
  selector: 'app-radical-carousel',
  templateUrl: './radical-carousel.component.html',
  styleUrl: './radical-carousel.component.css'
})
export class RadicalCarouselComponent implements OnInit, OnDestroy {

  public radicals: Radical[] = RADICALS;
  public displayedRadicalIndex: number = 0;
  private subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService,
              private route: ActivatedRoute,
              private router: Router,
              private characterService: CharacterService) {}

  public ngOnInit() {
    this.subscriptions.push(this.route.queryParams
      .subscribe(params => {
          let routeIndex = this.radicals.findIndex(r => params['radicals'].includes(r.sign));
          this.displayedRadicalIndex = routeIndex > -1 ? routeIndex : 0;
      }));
  }
  prev() {
    this.displayedRadicalIndex = this.displayedRadicalIndex > 0 ? this.displayedRadicalIndex - 1 : this.radicals.length -1;
    this.router.navigate(['/'], { queryParams: { radicals: this.radicals[this.displayedRadicalIndex].sign, view: 'single' }});
  }

  next() {
    this.displayedRadicalIndex = this.displayedRadicalIndex < (this.radicals.length -1) ? this.displayedRadicalIndex + 1 : 0;
    this.router.navigate(['/'], { queryParams: { radicals: this.radicals[this.displayedRadicalIndex].sign, view: 'single' }});
  }

  getInstantedTooltip(tooltip: string): string {
    let parts = tooltip.split(':n=');
    let translateKey = parts[0];
    let param = parts.length == 2 ? {n: +parts[1]}: undefined;
    return this.translate.instant(translateKey, param);
  }

  getRadicalsOccurences(radical: Radical): Word[] {
    return this.characterService.getOccurencesOfSign(radical.sign);
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
