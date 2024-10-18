import {NgModule, provideZoneChangeDetection} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import {routes} from "./app.routes";
import { provideRouter, RouterOutlet } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from "@angular/common";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {RadicalOverviewComponent} from "./components/radical-overview/radical-overview.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ColorSlideToggleComponent} from "./components/color-slide-toggle/color-slide-toggle.component";
import {
  PinyinToneIntroductionComponent
} from "./components/pinyin-tone-introduction/pinyin-tone-introduction.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {
  CharactersByRadicalsSidecarComponent
} from "./components/characters-by-radicals-sidecar/characters-by-radicals-sidecar.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AggregatedPageComponent} from "./pages/aggregated-page/aggregated-page.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {CalendarPageComponent} from "./pages/calendar-page/calendar-page.component";
import {TopicBannerComponent} from "./components/topic-banner/topic-banner.component";
import {CharacterService} from "./services/character.service";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {RadicalGridComponent} from "./components/radical-grid/radical-grid.component";
import {RadicalCarouselComponent} from "./components/radical-carousel/radical-carousel.component";
import {MatCardModule} from "@angular/material/card";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AggregatedPageComponent,
    HomePageComponent,
    PinyinToneIntroductionComponent,
    RadicalOverviewComponent,
    RadicalGridComponent,
    RadicalCarouselComponent,
    CharactersByRadicalsSidecarComponent,
    ColorSlideToggleComponent,
    CalendarPageComponent,
    TopicBannerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // Angular Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatTooltipModule,
    MatCardModule,
  ],
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    CharacterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
