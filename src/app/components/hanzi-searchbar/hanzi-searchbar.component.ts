import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-hanzi-searchbar',
  templateUrl: './hanzi-searchbar.component.html',
  styleUrl: './hanzi-searchbar.component.css'
})
export class HanziSearchbarComponent implements OnInit, OnDestroy  {

  private subscriptions: Subscription[] = [];

  public searchBarFormControl: FormControl;
  constructor(private customValidators: CustomValidators,
              private route: ActivatedRoute,
              private router: Router) {
    this.searchBarFormControl = new FormControl('',Validators.compose([Validators.required, this.customValidators.hanziValidator]));
  }

  public ngOnInit() {
    this.subscriptions.push(this.route.queryParams
      .subscribe(params => {
        if (params['search']) {
          this.searchBarFormControl.setValue(params['search']);
        }
      }));
  }

  public search(searchString: string) {
    if (!this.searchBarFormControl.hasError('invalidHanzi') && !this.searchBarFormControl.hasError('required')) {

      this.router.navigate(
        ['/hanzi-search'],
        {queryParams: {search: searchString}}
      );
    }
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}

export class CustomValidators {
  hanziValidator(control: FormControl): { [key: string]: boolean } {
    const nameRegexp: RegExp = /[a-zA-Z0-9]/;
    if (control.value && nameRegexp.test(control.value)) {
      return { invalidHanzi: true };
    }
    return { invalidHanzi: false };
  }
}
