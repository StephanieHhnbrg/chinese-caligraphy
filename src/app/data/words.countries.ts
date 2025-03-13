import {Word, WORD_TYPE} from "../interfaces/word.data";

export const COUNTRIES: Word[] = [
  { translationKey: 'country', hanzi:'国', pinyin: 'guó', composition: [['囗', '玉']], type: [WORD_TYPE.NOUN] },
  { translationKey: "US", hanzi: '美国', pinyin: 'měiguó', composition: [['美'], ['国']], type: [WORD_TYPE.NOUN]},
  { translationKey: "China", hanzi: '中国', pinyin: 'zhōngguó', composition: [['中'], ['国']], type: [WORD_TYPE.NOUN]},
  { translationKey: "Japan", hanzi: '日本', pinyin: 'rìběn', composition: [['日'], ['本']], type: [WORD_TYPE.NOUN]},
  { translationKey: "Peking", hanzi: '北京', pinyin: 'Běijīng', composition: [['北'], ['京']], type: [WORD_TYPE.NOUN]},
  { translationKey: "capital", hanzi: '京', pinyin: 'jīng', composition: [['亠', '口', '小']], type: [WORD_TYPE.NOUN]},
  { translationKey: "north, northern", hanzi: '北', pinyin: 'běi', composition: [['丬', '匕']], type: [WORD_TYPE.NOUN, WORD_TYPE.ADJECTIVE]},
  { translationKey: "east, eastern", hanzi: '东', pinyin: 'dōng', composition: [['𠂇', '朩']], type: [WORD_TYPE.NOUN, WORD_TYPE.ADJECTIVE]},
  { translationKey: "central, middle", hanzi: '央', pinyin: 'yāng', composition: [['中', '人']], type: [WORD_TYPE.ADJECTIVE, WORD_TYPE.NOUN, ]},
  { translationKey: "abroad, foreign country", hanzi: '外国', pinyin: 'wàiguó', composition: [['外'], ['国']], type: [WORD_TYPE.NOUN]},
  { translationKey: "Western", hanzi: '西方', pinyin: 'xīfāng', composition: [['西'], ['方']], type: [WORD_TYPE.NOUN]},
]

export const LANGUAGES: Word[] = [
  { translationKey: "Mandarin", hanzi: '汉语', pinyin: 'hànyǔ', composition: [['汉'], ['语']], type: [WORD_TYPE.NOUN]},
  { translationKey: "Han dynasty, chinese", hanzi: '汉', pinyin: 'hàn', composition: [['氵', '又']], type: [WORD_TYPE.NOUN, WORD_TYPE.ADJECTIVE]},
  { translationKey: "English", hanzi: '英语', pinyin: 'yīngyǔ', composition: [['英'], ['语']], type: [WORD_TYPE.NOUN]},
  { translationKey: "language, speech", hanzi: '语', pinyin: 'yǔ', composition: [['讠', '五', '口']], type: [WORD_TYPE.NOUN]},
  { translationKey: "calligraphy", hanzi: '书法', pinyin: 'shūfǎ', composition: [['书'], ['法']], type: [WORD_TYPE.NOUN]},
  { translationKey: "word, character", hanzi: '字', pinyin: 'zì', composition: [['宀', '子']], type: [WORD_TYPE.NOUN]},
  { translationKey: "culture", hanzi: '文化', pinyin: 'wénhuà', composition: [['文'], ['化']], type: [WORD_TYPE.NOUN]},
];
