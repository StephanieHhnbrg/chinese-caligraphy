export interface Word {
  translationKey: string;
  hanzi: string;
  pinyin: string;
  composition: string[][];
  emoji?: string;

  type: WORD_TYPE[];
}

export enum WORD_TYPE {
  VERB,
  NOUN,
  OBJECT,
  MEASSURE_WORD,
  PRONOUN,
  QUESTION_WORD,
  QUESTION_PARTICLE,
  ADJECTIVE,
  ADVERB,
  PHRASE,
  CONJUNCTION,
  PREPROSITION,
  NUMERAL,
  COMB_EL
}
