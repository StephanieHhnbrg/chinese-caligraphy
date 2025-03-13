import {Component, OnDestroy, OnInit} from '@angular/core';
import {Radical} from "../../interfaces/radical.data";
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterService} from "../../services/character.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-radical-carousel',
  templateUrl: './radical-carousel.component.html',
  styleUrl: './radical-carousel.component.css'
})
export class RadicalCarouselComponent implements OnInit, OnDestroy {

  public radicals: Radical[] = [];
  public displayedRadicalIndex: number = 0;
  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private characterService: CharacterService) {}

  public ngOnInit() {
    this.init();
    this.subscriptions.push(
      this.characterService.getRadicalsAreLoadedObservable().subscribe(
        () => {
        this.init();
    }));
  }

  private init() {
    this.radicals = this.characterService.getRadicals();
    this.subscriptions.push(this.route.queryParams
      .subscribe(params => {
        let routeIndex = this.radicals.findIndex(r => params['radicals'].includes(r.sign));
        this.displayedRadicalIndex = routeIndex > -1 ? routeIndex : 0;
      }));
  }

  prev() {
    this.displayedRadicalIndex = this.displayedRadicalIndex > 0 ? this.displayedRadicalIndex - 1 : this.radicals.length -1;
    this.router.navigate(['/radical-deck'], { queryParams: { radicals: this.radicals[this.displayedRadicalIndex].sign, view: 'single' }});
  }

  next() {
    this.displayedRadicalIndex = this.displayedRadicalIndex < (this.radicals.length -1) ? this.displayedRadicalIndex + 1 : 0;
    this.router.navigate(['/radical-deck'], { queryParams: { radicals: this.radicals[this.displayedRadicalIndex].sign, view: 'single' }});
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
