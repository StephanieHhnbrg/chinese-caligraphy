import { Injectable } from '@angular/core';
import {RADICALS} from "../data/radicals";
import {COMBINATIONS} from "../data/combinations";
import {WORDS} from "../data/words";
import {Radical} from "../interfaces/radical.data";
import {Word} from "../interfaces/word.data";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  private radicalMap = new Map<string, Radical>();
  private characterMap = new Map<string, {c: Word | Radical, usedIn : string[]}>();
  constructor() {
    this.initCharacterMap();
    this.initCharacterRelationships();
  }

  private initCharacterMap() {
    RADICALS.forEach(r => {
      this.characterMap.set(r.sign, {c: r, usedIn: []});
      this.radicalMap.set(r.sign, r);
    });

    let characters: string[] = [];
    let duplicated: string[] = [];
    COMBINATIONS.concat(WORDS).forEach(word => {
      if (this.characterMap.has(word.hanzi)) {
        console.log(`Word already defined: ${word.hanzi} - Please remove.`);
      }
      this.characterMap.set(word.hanzi, {c: word, usedIn: []})

      if (word.hanzi.length > 0) {
        for (let i = 0; i < word.hanzi.length; i++) {
          let c = word.hanzi.at(i)!;
          if (word.composition.length > i && word.composition.at(i)!.length > 1) {
            if(characters.includes(c)) {
              duplicated.push(c);
            } else {
              characters.push(c);
            }
            if(this.radicalMap.has(c)) {
              console.log(`The composition of the radical ${c} is redefined in the word ${word.hanzi} - Please remove.`)
            }
          }
        }
      }
    });

    console.log((COMBINATIONS.length+WORDS.length) + " words defined");
    console.log(characters.length + " characters defined");
    if (duplicated.length>0) {
      console.log(`The composition of the following characters might be defined multiple times within different words - Please extract as comb elements - ${duplicated}`);
    }
  }

  private initCharacterRelationships() {
    COMBINATIONS.concat(WORDS).forEach(word => {
      if (word.composition.length > 0) {
        let characters = word.composition.reduce((prev, curr) => prev.concat(curr));
        this.addChildParentRelationship(characters, word.hanzi);

        if (word.hanzi.length > 1) {
          for (let i = 0; i < word.hanzi.length; i++) {
            let c = word.hanzi.at(i)!;
            if (word.composition.length > i && word.composition.at(i)!.length > 1 && this.characterMap.has(c)) {
              console.log(`The composition of the character ${c} might be defined multiple times within the word ${word.hanzi} - Please check.`);
            }
          }
        }
      }
    });
  }

  private addChildParentRelationship(children: string[], parentWord: string) {
    children.forEach(c => {
      if (this.characterMap.has(c)) {
        let character = this.characterMap.get(c)!;
        let usedIn = character.usedIn;
        if (!usedIn.includes(parentWord)) {
          usedIn.push(parentWord);
        }
        this.characterMap.set(c, {...character, usedIn})
        if ('composition' in character.c && (<Word>character.c).composition.length > 0) {
          let grandChildren = (<Word>character.c).composition.reduce((prev, curr) => prev.concat(curr));
          this.addChildParentRelationship(grandChildren, parentWord);
        }
      } else {
        console.log(`Character not defined: ${c} within ${parentWord}`);
      }
    });
  }

  public getOccurencesOfSign(sign: string): Word[] {
    if (this.characterMap.has(sign)) {
      let character = this.characterMap.get(sign)!;
      let result: Word[] = [];
      character.usedIn.forEach(c => {
        if (this.characterMap.has(c)) {
          let word = this.characterMap.get(c)!.c;
          result.push(<Word>word);
        } else {
          console.log(`Faulty Child Parent Relationship - child: ${sign}, parent: ${c}`);
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


  // TODO: review this piece of code
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
