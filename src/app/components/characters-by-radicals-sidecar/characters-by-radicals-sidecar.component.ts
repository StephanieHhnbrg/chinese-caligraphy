import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Word} from "../../interfaces/word.data";
import {CharacterService} from "../../services/character.service";


@Component({
  selector: 'app-characters-by-radicals-sidecar',
  templateUrl: './characters-by-radicals-sidecar.component.html',
  styleUrl: './characters-by-radicals-sidecar.component.css'
})
export class CharactersByRadicalsSidecarComponent implements OnInit, OnDestroy {

  public characters: Word[] = [];
  public radicals = "";

  private subscriptions: Subscription[] = [];
  @Output() closeIconClicked = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private characterService: CharacterService) {}
  ngOnInit() {
    this.subscriptions.push(this.route.queryParams
      .subscribe(params => {
        if (params['radicals']) {
          this.radicals = ""+params['radicals'].replaceAll('&', ', ');
          this.characters = [];
          this.radicals.split(', ').forEach(r => {
            // TODO && statt || for multiple radicals
            this.characters = this.characters.concat(this.characterService.getOccurencesOfSign(r));
          })
        }
      }));
  }

  public isSelectedRadical(r: string): boolean {
    return this.radicals.includes(r);
  }

  public getComposition(comp: string): string[] {
    let result: string[] = [];

    if (this.characterService.isRadical(comp)) {
      result.push(comp);
    } else {
     result = result.concat(this.characterService.getComposition(comp));
    }
    return result;
  }

  public closeDrawer() {
    this.closeIconClicked.emit(true);
    let view = this.route.snapshot.queryParams['view'];
    let sort = this.route.snapshot.queryParams['sort'];
    this.router.navigate(
      ['/radical-deck'],
      { queryParams: { view, sort }}
    );
  }
  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public scrollToRadical(r: string) {
    let isRadical = this.characterService.isRadical(r);
    if (isRadical) {
      let view = this.route.snapshot.queryParams['view'];
      let sort = this.route.snapshot.queryParams['sort'];
      this.router.navigate(
        ['/radical-deck'],
        { queryParams: { radicals: r, view, sort }}
      );
    } else {
     // TODO: WordView
    }
  }
}
