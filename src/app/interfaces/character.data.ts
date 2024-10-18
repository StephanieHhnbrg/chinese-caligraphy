export interface Character {
  hanzi: string,
  pinyin: string,
  translationKey: string,
  composition: string[],

  usedIn: string[],
  emoji?: string;
}
