import {Word, WORD_TYPE} from "../interfaces/word.data";

export const COLORS: Word[] = [
  { translationKey: "color", hanzi: '色', pinyin: 'sè', composition: ['⺈', '巴'], type: [WORD_TYPE.NOUN]},
  { translationKey: "color, prize, variety", hanzi: '彩', pinyin: 'cǎi', composition: ['丿',  '米', '彡'], type: [WORD_TYPE.NOUN]},
  { translationKey: "complexion, look", hanzi: '脸色', pinyin: 'liǎnsè', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "blue", hanzi: '蓝', pinyin: 'lán', composition: ['艹', '刂', '𠂉', '丶', '皿'], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "red", hanzi: '红', pinyin: 'hóng', composition: ['纟', '工'], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "silver-colored, silver", hanzi: '银', pinyin: 'yín', composition: ['钅','艮'], type: [WORD_TYPE.ADJECTIVE, WORD_TYPE.NOUN]},
];
