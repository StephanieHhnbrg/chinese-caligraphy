import {Component, Input} from '@angular/core';
import {Radical} from "../../interfaces/radical.data";
import {Word} from "../../interfaces/word.data";
import {TranslateService} from "@ngx-translate/core";
import {CharacterService} from "../../services/character.service";

@Component({
  selector: 'app-radical-info-frame',
  templateUrl: './radical-info-frame.component.html',
  styleUrl: './radical-info-frame.component.css'
})
export class RadicalInfoFrameComponent {

  @Input({ required: true }) public radical!: Radical;

  constructor(private translate: TranslateService,
              private characterService: CharacterService) {}

  getInstantedTooltip(tooltip: string): string {
    let parts = tooltip.split(':n=');
    let translateKey = parts[0];
    let param = parts.length == 2 ? {n: +parts[1]}: undefined;
    return this.translate.instant(translateKey, param);
  }

  getRadicalsOccurences(radical: Radical): Word[] {
    return this.characterService.getOccurencesOfSign(radical.sign);
  }

  public getRadicalTranslation(radical: Radical): string {
    return this.translate.currentLang == 'de' ? radical.de : radical.en;
  }
}
