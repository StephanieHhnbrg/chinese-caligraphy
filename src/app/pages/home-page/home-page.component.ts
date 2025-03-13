import {Component, OnDestroy, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  constructor(private route: ActivatedRoute,
              private router: Router) {}

  public ngAfterViewInit() {
    this.subscriptions.push(this.route.queryParams
      .subscribe(params => {
        if (params['goto']) {
          this.scrollToElement(params['goto']);
        }
      }));
  }

  public goToBreadcrumbOnHomepage(id: string) {
    if (this.router.url === '/' || this.router.url.startsWith('/?')) {
      this.scrollToElement(id);
    } else {
      this.router.navigate(
        ['/'], {queryParams: {goto: id}}
      );
    }
  }

  public goToSearchPage() {
    if (this.router.url === '/hanzi-search') {
      this.scrollToElement('word-page-top');
    } else {
      this.router.navigate(
        ['/hanzi-search'], {}
      );
    }
  }

  private scrollToElement(id: string) {
    let el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
