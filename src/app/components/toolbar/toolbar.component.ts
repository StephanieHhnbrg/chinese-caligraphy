import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {ToolbarInfoModalComponent} from "../../modals/toolbar-info-modal/toolbar-info-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  constructor(private translate: TranslateService,
              private dialog: MatDialog,
              private router: Router) {
  }

  public openInfoModal() {
    this.dialog.open(ToolbarInfoModalComponent, {
      autoFocus: false
    });
  }

  public switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  public goHome() {
    this.router.navigate(['/'], {});
  }

}
