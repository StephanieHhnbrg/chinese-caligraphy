import {Word, WORD_TYPE} from "../interfaces/word.data";

export const COMBINATIONS: Word[] = [
  { hanzi:'母', pinyin: 'mǔ', composition: [['乙', '𠃌', '丶', '一', '丶']], translationKey: 'mother', type: [WORD_TYPE.NOUN, WORD_TYPE.COMB_EL]},
  { hanzi:'莓', pinyin: 'méi', composition: [['艹', '𠂉', '母']], translationKey: 'FRUITS.RASPBERRY' , type: [WORD_TYPE.NOUN, WORD_TYPE.COMB_EL]},
  { hanzi:'丁', pinyin: 'dīng', composition: [['一', '丿']], translationKey: 'man', type: [WORD_TYPE.NOUN, WORD_TYPE.COMB_EL]},
  { hanzi:'兆', pinyin: 'zhào', composition: [['冫', '儿', '丶', '丶']], translationKey: 'trillion, good news, omen, sign', type: [WORD_TYPE.NOUN, WORD_TYPE.COMB_EL]},
  { hanzi:'桃', pinyin: 'táo', composition: [['木', '兆']], translationKey: 'FRUITS.PEACH', type: [WORD_TYPE.NOUN, WORD_TYPE.COMB_EL], emoji: '🍑' },
  { hanzi:'甫', pinyin: 'fǔ', composition: [['十', '丶', '月']], translationKey: 'just now', type: [WORD_TYPE.PHRASE, WORD_TYPE.COMB_EL] },
  { hanzi:'丩', pinyin: 'jiū', composition: [['乙', '丨']], translationKey: 'entanglement', type: [WORD_TYPE.NOUN, WORD_TYPE.COMB_EL] },
  { hanzi:'生', pinyin: 'shēng', composition: [['𠂉', '土']], translationKey: 'born', type: [WORD_TYPE.ADJECTIVE, WORD_TYPE.COMB_EL] },
  { hanzi:'果', pinyin: 'guǒ', composition: [['田', '木']], translationKey: 'FRUITS.FRUIT', type: [WORD_TYPE.NOUN, WORD_TYPE.COMB_EL] },
  { hanzi:'好', pinyin: 'hǎo', composition: [['女', '子']], translationKey: 'good', type: [WORD_TYPE.ADJECTIVE, WORD_TYPE.COMB_EL] },
  { hanzi:'国', pinyin: 'guó', composition: [['囗', '玉']], translationKey: 'country', type: [WORD_TYPE.NOUN, WORD_TYPE.COMB_EL] },
  { hanzi: '家', pinyin: 'jiā', composition: [['宀', '豕']], translationKey: "family, home", type: [WORD_TYPE.NOUN, WORD_TYPE.COMB_EL] },
  { hanzi: '你', pinyin: 'nǐ', composition: [['亻', '𠂉', '小']], translationKey: "PERSONAL_PRONOUNS.YOU", type: [WORD_TYPE.PRONOUN, WORD_TYPE.COMB_EL] },
];
