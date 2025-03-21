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

  addSheetToWb(wb, FRUITS, 'fruits');
  addSheetToWb(wb, VEGGIES, 'veggies');
  addSheetToWb(wb, DRINKS, 'drinks');
  addSheetToWb(wb, FOOD, 'food');
  addSheetToWb(wb, ADJECTIVES, 'adjectives');
  addSheetToWb(wb, FLORA, 'flora');
  addSheetToWb(wb, FAUNA, 'fauna');
  addSheetToWb(wb, COLORS, 'colors');
  addSheetToWb(wb, GRAMMAR, 'grammar');
  addSheetToWb(wb, QUESTION_WORDS, 'question words');
  addSheetToWb(wb, PERSONAL_PRONOUN, 'personal pronouns');
  addSheetToWb(wb, BODY, 'body');
  addSheetToWb(wb, MEDICINE, 'medicine');
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
  let ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mapData(words));
  XLSX.utils.book_append_sheet(wb, ws, `${sheetName} (${words.length})`);
}
