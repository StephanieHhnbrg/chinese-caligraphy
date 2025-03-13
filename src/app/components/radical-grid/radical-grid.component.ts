import {AfterViewInit, Component, EventEmitter, inject, OnDestroy, OnInit, Output} from '@angular/core';
import {Radical} from "../../interfaces/radical.data";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subscription} from "rxjs";
import {CharacterService} from "../../services/character.service";
import {MatDialog} from "@angular/material/dialog";
import {RadicalInfoModalComponent} from "../../modals/radical-info-modal/radical-info-modal.component";

@Component({
  selector: 'app-radical-grid',
  templateUrl: './radical-grid.component.html',
  styleUrl: './radical-grid.component.css'
})
export class RadicalGridComponent implements OnInit, AfterViewInit, OnDestroy {


  constructor(private translate: TranslateService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private characterService: CharacterService) {}

  public radicals: Radical[] = []
  public readonly radicalDisplayTreshold = 100;
  @Output() radicalSelected = new EventEmitter<boolean>();

  private selected: Radical[] = [];
  private _snackBar = inject(MatSnackBar);
  private subscriptions: Subscription[] = [];

  public ngOnInit() {
    this.showFirstNRadicals();
  }

  public ngAfterViewInit() {
    this.init();
    this.subscriptions.push(
      this.characterService.getRadicalsAreLoadedObservable().subscribe(() => { this.init(); }));
  }

  private init() {
    this.subscriptions.push(this.route.queryParams
      .subscribe(params => {
        if (params['radicals']) {
          this.radicalSelected.emit(true);
          let radical = this.characterService.getRadical(params['radicals']);
          if (radical) {
            if (radical.index > this.radicalDisplayTreshold) {
              this.showAllRadicals();
            }
            this.selected = [radical];
            this.openRadicalModal(radical);
          }
        }
        if (params['sort'] == 'occurence') {
          this.sortByOccurence();
        } else {
          this.sortByIndex();
        }
      }));
  }

  public toggleRadical(radical: Radical) {
    this.selected = [radical];
    this.router.navigate(
      ['/radical-deck'],
      { queryParams: { radicals: radical.sign, view: 'grid' }}
    );
    this.openRadicalModal(radical);
  }

  private openRadicalModal(radical: Radical) {
    this.dialog.open(RadicalInfoModalComponent, {
      autoFocus: false,
      data: { radical }
    });
  }

  public toggleMultipleRadicals(radical: Radical) {
    let index = this.selected.findIndex((r) => r == radical);
    if (index >= 0) {
      this.selected.splice(index, 1);
    } else {
      this.selected.push(radical);
    }
    if (this.selected.length > 0) {
      let radicals = this.selected.map(c => c.sign).reduce((prev, current) => prev + ', ' + current);
      let message = this.translate.instant('SNACKBAR.FIND_WORDS.MESSAGE', {radicals});
      let action = this.translate.instant('SNACKBAR.FIND_WORDS.ACTION');
      let snackBarRef = this._snackBar.open(message, action);
      this.subscriptions.push(snackBarRef.onAction().subscribe(() => {
        let radicals = this.selected.map(c => c.sign).reduce((prev, current) => prev + '&' + current);
        let sort = this.route.snapshot.queryParams['sort'];
        this.router.navigate(
          ['/radical-deck'],
          { queryParams: { radicals, view: 'grid', sort }}
        );
        this.radicalSelected.emit(true);
      }));
    }
  }

  public getTooltip(radical: Radical): string | undefined {
    let lines: string[] = [];
    if (radical.tooltip) {
      let parts = radical.tooltip.split(':n=');
      let translateKey = parts[0];
      let param = parts.length == 2 ? {n: +parts[1]}: undefined;
      lines.push(this.translate.instant(translateKey, param));
    }
    if (radical.compare) {
      lines.push(`${this.translate.instant('TOOLTIP.COMPARE')} ${radical.compare}`);
    }
    if (radical.long) {
      lines.push(`${this.translate.instant('TOOLTIP.SHORT_FORM')} ${radical.long}`);
    }
    if (radical.short) {
      lines.push(`${this.translate.instant('TOOLTIP.LONG_FORM')} ${radical.short}`);
    }
    if (radical.original) {
      lines.push(`${this.translate.instant('TOOLTIP.ORIGINAL')}: ${radical.original}`);
    }
    if (radical.variant) {
      lines.push(`${this.translate.instant('TOOLTIP.VARIANT')}: ${radical.variant}`);
    }
    if (lines.length == 1) {
      return lines[0];
    } else if (lines.length > 1) {
      return lines.reduce((previous, current) => `${previous} \n${current}`);
    }
    return undefined;
  }

  public showAllRadicals() {
    this.radicals = this.characterService.getRadicals();
  }

  public showFirstNRadicals() {
    this.radicals = this.characterService.getRadicals().splice(0, this.radicalDisplayTreshold);
    this.selected = this.selected.filter(r => this.radicals.includes(r));
  }

  private sortByOccurence() {
    let sorted = this.characterService.getRadicals().sort((r1, r2) =>
      this.characterService.getOccurencesOfSign(r2.sign).length - this.characterService.getOccurencesOfSign(r1.sign).length);
    // TODO: not the smartest way, refactor
    if (this.radicals.length > this.radicalDisplayTreshold) {
      this.radicals = sorted;
    } else {
      this.radicals = [...sorted].splice(0, this.radicalDisplayTreshold);
      this.selected = this.selected.filter(r => this.radicals.includes(r));
    }
  }

  private sortByIndex() {
    if (this.radicals.length > this.radicalDisplayTreshold) {
      this.showAllRadicals();
    } else {
      this.showFirstNRadicals();
    }
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public getRadicalTranslation(radical: Radical): string {
    return this.translate.currentLang == 'de' ? radical.de : radical.en;
  }
}
