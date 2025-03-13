import { Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterService} from "../../services/character.service";

@Component({
  selector: 'app-radical-overview',
  templateUrl: './radical-overview.component.html',
  styleUrl: './radical-overview.component.css'
})
export class RadicalOverviewComponent implements OnInit, OnDestroy {
  view: 'single' | 'grid' = 'grid';
  private subscriptions: Subscription[] = [];
  constructor(private translate: TranslateService,
              private route: ActivatedRoute,
              private router: Router,
              private characterService: CharacterService) {}

  public ngOnInit() {
    this.subscriptions.push(this.route.queryParams
      .subscribe(params => {
        if (params['view']) {
          this.view = params['view'];
        }

        if (params['radicals']) {
          let el = document.getElementById('radical-overview-top');
          if (el) {
            el.scrollIntoView({behavior: 'smooth', block: "start"});
          }
        }
      }));
  }


  public changeView(view: 'single' | 'grid') {
    this.view = view;
    let radicals = this.route.snapshot.queryParams['radicals'];
    let sort = this.route.snapshot.queryParams['sort'];
    if (!radicals && view == 'single') {
      radicals = this.characterService.getRandomRadical().sign;
    }
    this.router.navigate(
      ['/radical-deck'],
      { queryParams: { radicals, view, sort }}
    );
  }

  public switchSortingCriteria(sort: 'index' | 'occurence') {
    let radicals = this.route.snapshot.queryParams['radicals'];
    let view = this.route.snapshot.queryParams['view'];
    let prevSort = this.route.snapshot.queryParams['sort'];
    if ((prevSort && prevSort != sort) || (!prevSort && sort != 'index')) {
      this.router.navigate(
        ['/radical-deck'],
        {queryParams: {radicals, view, sort}}
      );
    }
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
