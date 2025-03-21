import {Component, Input} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {TranslateService} from "@ngx-translate/core";
import {getRadicalTranslation} from "../../../interfaces/radical.data";

@Component({
  selector: 'app-character-tile-with-tooltip',
  templateUrl: './character-tile-with-tooltip.component.html',
  styleUrl: './character-tile-with-tooltip.component.css'
})
export class CharacterTileWithTooltipComponent {

  @Input({ required: false }) public isHighlighted = false;
  @Input({ required: true }) public sign = "";

  constructor(private characterService: CharacterService,
              private translate: TranslateService) {}

  public getTooltip(sign: string): string {
    if (this.characterService.isRadical(sign)) {
      let radical = this.characterService.getRadical(sign)!;
      let tooltip = `#${radical.index} ` + (radical.emoji || '') + " ";
      if (radical.pinyin && radical.pinyin.length > 0) {
        tooltip += radical.pinyin + ' \n'
      }
      let translation = getRadicalTranslation(this.translate.currentLang, radical);
      if (translation && translation.length > 0) {
        tooltip += translation + ' \n';
      }
      if (radical.tooltip) {
        let parts = radical.tooltip.split(':n=');
        let translateKey = parts[0];
        let param = parts.length == 2 ? {n: +parts[1]}: undefined;
        tooltip += this.translate.instant(translateKey, param);
      }
      return tooltip;
    } else {
      let word = this.characterService.getWord(sign);
      if (word) {
        let tooltip = (word.emoji || '') + " ";
        if (word.pinyin.length > 0) {
          tooltip += word.pinyin + ' \n'
        }
        if (word.translationKey.length > 0) {
          tooltip += this.translate.instant(word.translationKey) + ' \n'
        }
        tooltip += word.composition.reduce((prev, curr) => prev + " " + curr);
        return tooltip;
      }

    }

    return "";
  }

}
