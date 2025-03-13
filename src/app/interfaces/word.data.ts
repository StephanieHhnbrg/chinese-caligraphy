export interface Word {
  translationKey: string;
  hanzi: string;
  pinyin: string;
  composition: string[][];
  emoji?: string;

  type: WORD_TYPE[];
}

export enum WORD_TYPE {
  VERB = "VERB",
  NOUN = "NOUN",
  OBJECT = "OBJECT",
  MEASURE_WORD = "MEASURE_WORD",
  PRONOUN = "PRONOUN",
  QUESTION_WORD = "QUESTION_WORD",
  QUESTION_PARTICLE = "QUESTION_PARTICLE",
  ADJECTIVE = "ADJECTIVE",
  ADVERB = "ADVERB",
  PHRASE = "PHRASE",
  CONJUNCTION = "CONJUNCTION",
  PREPROSITION = "PREPROSITION",
  NUMERAL = "NUMERAL",
  COMB_EL = "COMB_EL"
}
