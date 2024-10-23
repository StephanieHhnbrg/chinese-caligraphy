import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Word} from "../../interfaces/word.data";
import {CharacterService} from "../../services/character.service";
import {TranslateService} from "@ngx-translate/core";


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
              private characterService: CharacterService,
              private translate: TranslateService) {}
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

  public getComposition(comp: string[]): string[] {
    let result: string[] = [];
    comp.forEach(c => {
      if (this.characterService.isRadical(c)) {
        result.push(c);
      } else {
       result = result.concat(this.characterService.getComposition(c));
      }
    });
    return result;
  }

  public getTooltip(sign: string): string {
    if (this.characterService.isRadical(sign)) {
      let radical = this.characterService.getRadical(sign)!;
      let tooltip = `#${radical.index} ` + (radical.emoji || '') + " ";
      if (radical.pinyin.length > 0) {
        tooltip += radical.pinyin + ' \n'
      }
      if (radical.translationKey.length > 0) {
        tooltip += this.translate.instant(radical.translationKey) + ' \n';
      }
      if (radical.tooltip) {
        let parts = radical.tooltip.split(':n=');
        let translateKey = parts[0];
        let param = parts.length == 2 ? {n: +parts[1]}: undefined;
        tooltip += this.translate.instant(translateKey, param);
      }
      return tooltip;
    } else {
      let word = this.characterService.getWord(sign);
      if (word) {
        let tooltip = (word.emoji || '') + " ";
        if (word.pinyin.length > 0) {
          tooltip += word.pinyin + ' \n'
        }
        if (word.translationKey.length > 0) {
          tooltip += this.translate.instant(word.translationKey) + ' \n'
        }
        tooltip += word.composition[0].reduce((prev, curr) => prev + " " + curr);
        return tooltip;
      }

    }

    return "";
  }
  public closeDrawer() {
    this.closeIconClicked.emit(true);
    this.router.navigate(
      ['/'],
      { queryParams: { view: this.route.snapshot.queryParams['view'] }}
    );
  }
  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public scrollToRadical(r: string) {
    let isRadical = this.characterService.isRadical(r);
    if (isRadical) {
      this.router.navigate(
        ['/'],
        { queryParams: { radicals: r, view: this.route.snapshot.queryParams['view'] }}
      );
    } else {
     // TODO: WordView
    }
  }
}
