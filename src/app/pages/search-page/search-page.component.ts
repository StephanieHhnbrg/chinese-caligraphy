import { Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterService} from "../../services/character.service";
import {Word} from "../../interfaces/word.data";
import {Radical} from "../../interfaces/radical.data";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit, OnDestroy  {

  private subscriptions: Subscription[] = [];
  public searchElement: string | undefined;
  public foundElement: Word | Radical | undefined;
  public expandTiles = true;
  public showRadicalButton: boolean = false;
  public isLoading: boolean = false;
  public alertMessages: string[] = [];
  public results: any[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private characterService: CharacterService) {}

  public ngOnInit() {
    this.init();
    this.subscriptions.push(this.characterService.getCharactersAreLoadedObservable().subscribe(() => {
      this.init();
    }));
  }

  private init() {
    this.subscriptions.push(this.route.queryParams
      .subscribe(params => {
        this.searchElement = undefined;
        this.foundElement = undefined;

        if (params['search']) {
          this.showRadicalButton = false;
          this.isLoading = true;
          setTimeout(()=>{
            this.isLoading = false;
            this.alertMessages = this.findChanzi(params['search']);
          }, 0); // artificial loading time
        }
      }));
  }

  private findChanzi(hanzi: string): string[] {
    this.searchElement = hanzi;

    this.foundElement = this.characterService.getRadical(hanzi);
    if (this.foundElement) {
      this.showRadicalButton = true;
      this.results.push(this.foundElement);
      return [`The searched hanzi ${hanzi} is representing a radical.`];
    }

    this.foundElement = this.characterService.getWord(hanzi);
    if (this.foundElement) {
      this.results.push(this.foundElement);
      return [`The searched hanzi ${hanzi} was found.`];
    }

    if (hanzi.length > 1) {
      let resultMessages: string[] = [];
      for (let i = 0; i < hanzi.length; i++) {
        resultMessages = resultMessages.concat(this.findChanzi(hanzi.charAt(i)));
      }

      return [`xxx `].concat(resultMessages);
    }

    return [`The searched hanzi ${hanzi} was not found.`];
  }

  public getSentimentIconForAlertMessages(msg: string[]): 'sentiment_satisfied' | 'sentiment_neutral' |'sentiment_dissatisfied' {
    let notFound = msg.filter(m => m.includes("was not found")).length;
    if (notFound == 0) {
      return 'sentiment_satisfied'
    }

    if (notFound >= msg.length - 1) {
      return 'sentiment_dissatisfied';
    } else if (notFound > 0) {
      return 'sentiment_neutral';
    }

    return 'sentiment_satisfied'
  }

  public getColorForAlertMessages(msg: string[]): string {
    let notFound = msg.filter(m => m.includes("was not found")).length;
    if (notFound == 0) {
      return 'green'
    }

    if (notFound >= msg.length - 1) {
      return 'red';
    } else if (notFound > 0) {
      return 'orange';
    }

    return 'green'
  }


  public isRadical(el: Radical | Word | undefined) : boolean{
    return (el && 'index' in el) || false;
  }

  public castElAsRadical(el: Radical | Word | undefined): Radical {
    return el as Radical;
  }

  public castElAsWord(el: Radical | Word | undefined): Word {
    return el as Word;
  }

  public goToRadical() {
    if (this.isRadical(this.foundElement)) {
      this.router.navigate(
        ['/radical-deck'],
        {queryParams: {radicals: this.castElAsRadical(this.foundElement).sign, view: 'grid'}}
      );
    }
  }

  public isInVocabularyRepertoire(el: Radical | Word | undefined) : boolean{
    return (el && 'composition' in el) || false;
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
