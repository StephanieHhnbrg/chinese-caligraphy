import { Routes } from '@angular/router';
import {CalendarPageComponent} from "./pages/calendar-page/calendar-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";
import {PlatformPageComponent} from "./pages/platform-page/platform-page.component";
import {
  PinyinToneIntroductionComponent
} from "./pages/pinyin-tone-introduction/pinyin-tone-introduction.component";
import {RadicalOverviewComponent} from "./components/radical-overview/radical-overview.component";
import {CaligraphyGardenPageComponent} from "./pages/caligraphy-garden-page/caligraphy-garden-page.component";

export const routes: Routes = [
  {path:'calendar', component: CalendarPageComponent},
  {path:'pinyin-tone', component: PinyinToneIntroductionComponent},
  {path:'radical-deck', component: RadicalOverviewComponent},
  {path:'hanzi-search', component: SearchPageComponent},
  {path:'caligraphy-garden', component: CaligraphyGardenPageComponent},
  {path:'', component: PlatformPageComponent}
];
