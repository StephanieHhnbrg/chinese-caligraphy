import { Injectable } from '@angular/core';
import {COMBINATIONS} from "../data/combinations";
import {WORDS} from "../data/words";
import {Radical} from "../interfaces/radical.data";
import {Word} from "../interfaces/word.data";
import * as XLSX from 'xlsx';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  private radicalsAreLoaded$ = new Subject<boolean>();
  private charactersAreLoaded$ = new Subject<boolean>();
  private isLoaded = false;
  private radicals : Radical[] = [];
  private radicalMap = new Map<string, Radical>();
  private characterMap = new Map<string, {c: Word | Radical, usedIn : string[]}>();

  constructor(private http: HttpClient) {
    this.importRadicalsFromXlsx().subscribe(() => {
      // TODO: loading screen
      this.radicalsAreLoaded$.next(true);
      this.initCharacterMap();
      this.initCharacterRelationships();
      this.charactersAreLoaded$.next(true);
      this.isLoaded = true;
    });
  }

  public getRadicalsAreLoadedObservable(): Observable<boolean> {
    return this.radicalsAreLoaded$.asObservable();
  }

  public getCharactersAreLoadedObservable(): Observable<boolean> {
    return this.charactersAreLoaded$.asObservable();
  }

  public isServiceReady(): boolean {
    return this.isLoaded;
  }


  private importRadicalsFromXlsx(): Observable<boolean> {
    let finished$ = new Subject<boolean>();
    this.http.get('assets/radicals.xlsx', { responseType: 'blob' })
      .subscribe((data: any) => {
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
          const wb: XLSX.WorkBook = XLSX.read(e.target.result, {type: 'binary'});
          const ws: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[0]];
          this.radicals = <Radical[]>(XLSX.utils.sheet_to_json(ws, {header: 0}));
          finished$.next(true);
        };
        reader.readAsBinaryString(data);
      });
    return finished$.asObservable();
  }

  private extractSigns(text: string | undefined): string[] {
    let result: string[] = [];
    if (text) {
      if (text.length > 1) {
        let trimmed = text!.replaceAll(" ", "").replaceAll(",", "");
        for (let i = 0; i < trimmed.length; i++) {
          result.push(trimmed.charAt(i));
        }
      } else {
        result.push(text);
      }
    }
    return result;
  }

  private getAndInitRadicalsSubstitutes(r: Radical): string[] {
    let subs: string[] = [];
    subs = subs.concat(this.extractSigns(r.variant));
    subs = subs.concat(this.extractSigns(r.original));

    subs.forEach(sub => {
      let c: Word = { translationKey: r.en, hanzi: sub, pinyin: r.pinyin, composition: [r.sign], emoji: r.emoji, type: []};
      this.characterMap.set(sub, {c, usedIn: []});
    })

    return subs;
  }

  private initCharacterMap() {
    this.radicals.forEach(r => {
      let usedIn = this.getAndInitRadicalsSubstitutes(r);
      this.characterMap.set(r.sign, {c: r, usedIn});
      this.radicalMap.set(r.sign, r);
    });



    COMBINATIONS.concat(WORDS).forEach(word => {
      if (this.characterMap.has(word.hanzi)) {
        console.log(`Word already defined: ${word.hanzi} - Please remove.`);
      }

      if (word.hanzi.length > 1 && word.composition.length == 0) {
        word.composition = word.hanzi.split("");
      }

      this.characterMap.set(word.hanzi, {c: word, usedIn: []})
    });

    console.log((COMBINATIONS.length+WORDS.length) + " words defined");
  }

  private initCharacterRelationships() {
    COMBINATIONS.concat(WORDS).forEach(word => {
      if (word.composition.length > 0) {
        this.addChildParentRelationship(word.composition, word.hanzi);

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
          let grandChildren = (<Word>character.c).composition;
          this.addChildParentRelationship(grandChildren, parentWord);
        }
      } else {
        console.error(`The character ${c} used in the composition of the word ${parentWord} is not defined.`);
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

  public getRadicals(): Radical[] {
    return [...this.radicals];
  }
  public getRandomRadical(): Radical {
    let randomIndex = Math.floor(Math.random() * this.radicals.length);
    return this.radicals.at(randomIndex)!;
  }

  public getRadicalByIndex(index: number): Radical | undefined {
    if (index < 0 || index >= this.radicals.length) {
      console.error("index out of bound");
      return undefined;
    }
    return this.radicals.at(index);
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
        return (<Word>word.c).composition;
      }
    }
    return [];
  }

  public addWordToVocabulary(word: Word) {
    this.characterMap.set(word.hanzi, {c: word, usedIn: []});
    // TODO: add child parent relationships?
    // TODO: somehow register event somewhere to reevaluate chanzi model and to add word to excel
  }

  public getWordsWithComposition(amountOfRads: number): Word[] {
    let words = COMBINATIONS.concat(WORDS);
    words  = words.filter(w => w.hanzi.length == 1 && w.composition.length == amountOfRads);
    words = words.filter(w => w.composition.filter(c => this.isRadical(c)).length == w.composition.length);
    return words;
  }

}
