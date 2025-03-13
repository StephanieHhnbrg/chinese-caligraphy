
export interface Radical {
  index: number,
  sign: string,
  de: string,
  en: string,
  pinyin: string,

  tooltip?: string,
  compare?: string,
  original?: string,
  short?: string,
  long?: string,
  variant?: string,

  emoji?: string,
  strokes: number,

}

export function getRadicalTranslation(lang: string, radical: Radical): string {
  if (lang == 'en') {
    return radical.en;
  }
  if (lang == 'de') {
    return radical.de;
  }
  return '';
}
