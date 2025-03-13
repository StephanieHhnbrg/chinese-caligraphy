import * as XLSX from "xlsx";
import {RADICALS} from "./radicals";
import {DRINKS, FOOD, FRUITS, VEGGIES} from "./words.food";
import {ADJECTIVES} from "./words.adjectives";
import {FAUNA, FLORA} from "./words.animals";
import {COLORS} from "./words.colors";
import {GRAMMAR, PERSONAL_PRONOUN, QUESTION_WORDS} from "./words.grammar";
import {BODY, MEDICINE} from "./words.body";
import {Word} from "../interfaces/word.data";

export function exportRadicalsAsExcel() {
  let wb: XLSX.WorkBook = XLSX.utils.book_new();

  let data = RADICALS.map(r => {
    return {
      index: r.index,
      pinyin: r.pinyin,
      sign: r.sign,
      en: '',
      de: r.translationKey,
      emoji: r.emoji,
      strokes: r.strokes,
      short: r.short,
      long: r.long,
      original: r.original,
      variant: r.variant,
      compare: r.compare,
      tooltip: r.tooltip
    }
  });



  let ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, `radicals (${data.length})`);
  XLSX.writeFile(wb, 'radicals.xlsx');

}

export function exportWordsAsExcel() {
  let wb: XLSX.WorkBook = XLSX.utils.book_new();

  this.addSheetToWb(wb, FRUITS, 'fruits');
  this.addSheetToWb(wb, VEGGIES, 'veggies');
  this.addSheetToWb(wb, DRINKS, 'drinks');
  this.addSheetToWb(wb, FOOD, 'food');
  this.addSheetToWb(wb, ADJECTIVES, 'adjectives');
  this.addSheetToWb(wb, FLORA, 'flora');
  this.addSheetToWb(wb, FAUNA, 'fauna');
  this.addSheetToWb(wb, COLORS, 'colors');
  this.addSheetToWb(wb, GRAMMAR, 'grammar');
  this.addSheetToWb(wb, QUESTION_WORDS, 'question words');
  this.addSheetToWb(wb, PERSONAL_PRONOUN, 'personal pronouns');
  this.addSheetToWb(wb, BODY, 'body');
  this.addSheetToWb(wb, MEDICINE, 'medicine');
  XLSX.writeFile(wb, 'test.xlsx');
}

function mapData(words: Word[]): any {
  return words.map(d => { return {
    pinyin: d.pinyin,
    hanzi: d.hanzi,
    composition: d.composition.toString(),
    en: d.translationKey,
    de: "",
    type: d.type.toString()
  }});
}

function addSheetToWb(wb: XLSX.WorkBook, words: Word[], sheetName: string) {
  let ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.mapData(words));
  XLSX.utils.book_append_sheet(wb, ws, `${sheetName} (${words.length})`);
}
