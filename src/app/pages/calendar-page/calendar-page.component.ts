import { Component } from '@angular/core';
import {EARTH_BRANCHES} from "../../data/earth.branches";
import {HEAVENLY_STEMS} from "../../data/heaven.stems";

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.css'
})
export class CalendarPageComponent {

  public readonly earthSigns = EARTH_BRANCHES;
  public readonly heavenSigns = HEAVENLY_STEMS;

}
