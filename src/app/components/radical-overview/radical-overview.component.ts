import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterService} from "../../services/character.service";

@Component({
  selector: 'app-radical-overview',
  templateUrl: './radical-overview.component.html',
  styleUrl: './radical-overview.component.css'
})
export class RadicalOverviewComponent implements OnInit, AfterViewInit, OnDestroy {
  view: 'single' | 'grid' = 'grid';
  @ViewChild('drawer') characterSidecar: any;
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

  public ngAfterViewInit() { // FIXME ExpressionChangedAfterItHasBeenCheckedError
    this.subscriptions.push(this.route.queryParams
      .subscribe(params => {
        if (params['radicals']) {
          if (this.characterSidecar) {
            this.characterSidecar.open();
          }
        }
      }));
  }

  public changeView(view: 'single' | 'grid') {
    this.view = view;
    let radicals = this.route.snapshot.queryParams['radicals'];
    if (!radicals && view == 'single') {
      radicals = this.characterService.getRandomRadical().sign;
    }
    this.router.navigate(
      ['/'],
      { queryParams: { radicals, view }}
    );
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
