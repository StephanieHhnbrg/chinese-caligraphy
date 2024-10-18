import { Injectable } from '@angular/core';
import {RADICALS} from "../data/radicals";
import {COMBINATIONS} from "../data/combinations";
import {WORDS} from "../data/words";
import {Radical} from "../interfaces/radical.data";
import {Word, WORD_TYPE} from "../interfaces/word.data";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  private radicalMap = new Map<string, Radical>();
  private characterMap = new Map<string, {c: Word | Radical, usedIn : string[]}>();
  constructor() {
    RADICALS.forEach(r => {
      this.characterMap.set(r.sign, {c: r, usedIn: []});
      this.radicalMap.set(r.sign, r);
    });
    let radicalN = this.characterMap.size;

    COMBINATIONS.forEach(c => {
      this.characterMap.set(c.hanzi, {c, usedIn: []})
      this.updateUsedInForCompostion(c.composition[0], c.hanzi);
    })
    let combinationsN = this.characterMap.size - radicalN;

    WORDS.forEach(w => {
      w.composition.forEach((comp, i) => {
        if (comp.length > 1 && w.hanzi.at(i)) {
          let sign = w.hanzi.at(i)!;
          if (this.characterMap.has(sign)) {
            console.log(sign + ' character already exist in map, will be overwritten');
          }
          let character: Word = {hanzi: sign, pinyin: w.pinyin, translationKey: '', composition: [comp], type: [WORD_TYPE.COMB_EL]};
          this.characterMap.set(sign, {c: character, usedIn: []});
          // TODO pinyin only syllable
          this.updateUsedInForCompostion(comp, w.hanzi);
        } else if (comp.length == 1 &&  w.hanzi.at(i) && comp[0] == w.hanzi.at(i)) {
          this.updateUsedInForCombinationElement(comp[0], w.hanzi);
        }
        this.characterMap.set(w.hanzi, {c: w, usedIn: []});
      });
    })
    let wordCharactersN = this.characterMap.size - radicalN - combinationsN;



    console.log(radicalN + " Radicals");
    console.log(combinationsN + " Characters defined as Combination");
    console.log(wordCharactersN + " Characters defined in Words");
  }

  private updateUsedInForCompostion(composition: string[], sign: string) {
    composition.forEach(c => {
      if (this.characterMap.has(c)) {
        let character = this.characterMap.get(c)!;
        let usedIn = character.usedIn;
        if (!usedIn.includes(sign)) {
          usedIn.push(sign);
        }
        this.characterMap.set(c, {...character, usedIn})
      } else {
        console.log('ERROR: '+ c + ' is not defined for sign: ' + sign);
        // TODO: Schreibvarianten in Map einpflegen ??
      }
    });
  }

  private updateUsedInForCombinationElement(combEl: string, word: string) {
    if (this.characterMap.has(combEl)) {
      let character = this.characterMap.get(combEl)!;
      if ('composition' in character.c) {
          (<Word>character.c).composition.forEach(comp => this.updateUsedInForCompostion(comp, word));
      }
    }
  }

  public getOccurencesOfSign(sign: string): Word[] {
    if (this.characterMap.has(sign)) {
      let character = this.characterMap.get(sign)!;
      let result: Word[] = [];
      character.usedIn.forEach(c => {
        if (this.characterMap.has(c)) {
          let word = this.characterMap.get(c)!.c;
          result.push(<Word>word);
        }
      });
      return result;
    } else {
      return [];
    }
  }

  public isRadical(sign: string): boolean {
    return this.radicalMap.has(sign);
  }

  public getRadical(sign: string): Radical | undefined {
    return this.radicalMap.get(sign);
  }

  public getRandomRadical(): Radical {
    let randomIndex = Math.floor(Math.random() * RADICALS.length);
    return RADICALS.at(randomIndex)!;
  }

  public getWord(comb: string): Word | undefined {
    if (this.characterMap.has(comb)) {
      let word = this.characterMap.get(comb)!;
      if ('composition' in word.c) {
        return <Word>word.c;
      }
    }
    return undefined;
  }

  public getComposition(comb: string): string[] {
    if (comb.length > 1) {
      return [];
    }

    if (this.characterMap.has(comb)) {
      let word = this.characterMap.get(comb)!;
      if ('composition' in word.c) {
        return (<Word>word.c).composition[0];
      }
    }
    return [];
  }

}
