
import {Component, Input, OnInit} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {TranslateService} from "@ngx-translate/core";
import {getRadicalTranslation} from "../../../interfaces/radical.data";

@Component({
  selector: 'app-expanded-character-tile',
  templateUrl: './expanded-character-tile.component.html',
  styleUrl: './expanded-character-tile.component.css'
})
export class ExpandedCharacterTileComponent implements OnInit {

  @Input({ required: true }) public sign: string = "";

  emoji: string = "";
  pinyin: string = "";
  translation: string = "";
  tooltip: string = "";

  composition: string[] = [];

  constructor(private characterService: CharacterService,
              private translate: TranslateService) {}

  public ngOnInit() {
    this.initAttributes(this.sign);
  }

  public initAttributes(sign: string) {
    if (this.characterService.isRadical(sign)) {
      let radical = this.characterService.getRadical(sign)!;

      this.emoji = radical.emoji || "";
      // index
      this.pinyin = radical.pinyin;
      this.translation = getRadicalTranslation(this.translate.currentLang, radical);


      if (radical.tooltip) {
        let parts = radical.tooltip.split(':n=');
        let translateKey = parts[0];
        let param = parts.length == 2 ? {n: +parts[1]}: undefined;
        this.tooltip = this.translate.instant(translateKey, param);
      }
    } else {
      let word = this.characterService.getWord(sign);
      if (word) {
        this.emoji = word.emoji || "";
        this.pinyin = word.pinyin;
        this.translation = this.translate.instant(word.translationKey);
        this.composition = word.composition[0];
      }
    }
  }

}
