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
} from "./pages/pinyin-tone-introduction/pinyin-tone-introduction.component";
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
import {CustomValidators, HanziSearchbarComponent} from "./components/hanzi-searchbar/hanzi-searchbar.component";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchPageComponent} from "./pages/search-page/search-page.component";
import {RadicalInfoFrameComponent} from "./components/radical-info-frame/radical-info-frame.component";
import {CharacterTileWithTooltipComponent} from "./components/character-tile/character-tile-with-tooltip/character-tile-with-tooltip.component";
import {WordInfoFrameComponent} from "./components/word-info-frame/word-info-frame.component";
import {
  ExpandedCharacterTileComponent
} from "./components/character-tile/expanded-character-tile/expanded-character-tile.component";
import {MatRippleModule} from "@angular/material/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {PlatformPageComponent} from "./pages/platform-page/platform-page.component";
import {MenuSidecarComponent} from "./components/menu-sidecar/menu-sidecar.component";
import {RadicalInfoModalComponent} from "./modals/radical-info-modal/radical-info-modal.component";
import {ToolbarInfoModalComponent} from "./modals/toolbar-info-modal/toolbar-info-modal.component";
import {CaligraphyGardenPageComponent} from "./pages/caligraphy-garden-page/caligraphy-garden-page.component";
import {ChanziModelService} from "./services/chanzi-model.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AggregatedPageComponent,
    HomePageComponent,
    SearchPageComponent,
    CaligraphyGardenPageComponent,
    PlatformPageComponent,
    PinyinToneIntroductionComponent,
    RadicalOverviewComponent,
    RadicalGridComponent,
    RadicalCarouselComponent,
    RadicalInfoFrameComponent,
    WordInfoFrameComponent,
    CharacterTileWithTooltipComponent,
    ExpandedCharacterTileComponent,
    CharactersByRadicalsSidecarComponent,
    ColorSlideToggleComponent,
    CalendarPageComponent,
    TopicBannerComponent,
    HanziSearchbarComponent,
    MenuSidecarComponent,
    RadicalInfoModalComponent,
    ToolbarInfoModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
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
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    MatProgressBarModule,
  ],
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    CharacterService,
    ChanziModelService,
    CustomValidators,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
