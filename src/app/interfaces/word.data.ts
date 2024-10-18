export interface Word {
  translationKey: string;
  hanzi: string;
  pinyin: string;
  composition: string[][];
  emoji?: string;

  type: WORD_TYPE[];
}

export enum WORD_TYPE {
  VERB, NOUN, MEASSURE_WORD, PRONOUN, QUESTION_WORD, ADJECTIVE, ADVERB, PHRASE, CONJUNCTION, COMB_EL
}
