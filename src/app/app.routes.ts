import { Routes } from '@angular/router';
import {AggregatedPageComponent} from "./pages/aggregated-page/aggregated-page.component";
import {CalendarPageComponent} from "./pages/calendar-page/calendar-page.component";

export const routes: Routes = [
  {path:'calendar', component: CalendarPageComponent},
  {path:'', component: AggregatedPageComponent}
];
