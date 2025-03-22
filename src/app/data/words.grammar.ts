import {Word, WORD_TYPE} from "../interfaces/word.data";

export const GRAMMAR: Word[] = [
  { translationKey: "past tense particle", hanzi: '了', pinyin: 'le', composition: ['乛', '丿'], type: [WORD_TYPE.ADVERB]},
  { translationKey: "of, possessive, belonging to", hanzi: '的', pinyin: 'de', composition: ['白', '勺'], type: [WORD_TYPE.ADVERB]},
  { translationKey: "this", hanzi: '这', pinyin: 'zhè', composition: ['辶', '文'], type: [WORD_TYPE.ADVERB]},
  { translationKey: "all, everybody", hanzi: '都', pinyin: 'dōu', composition: ['耂', '日', '⻏'], type: [WORD_TYPE.ADVERB]},
  { translationKey: "everyone", hanzi: '大家', pinyin: 'dàjiā', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "if, in case", hanzi: '如果', pinyin: 'rúguǒ', composition: [], type: [WORD_TYPE.CONJUNCTION]},
  { translationKey: "like, as, if", hanzi: '如', pinyin: 'rú', composition: ['女','口'], type: [WORD_TYPE.CONJUNCTION]},
  { translationKey: "probably, roughly, approximately, about", hanzi: '大概', pinyin: 'dàgài', composition: [], type: [WORD_TYPE.ADVERB]},
  { translationKey: "surely, certainly", hanzi: '一定', pinyin: 'yídìng', composition: [], type: [WORD_TYPE.ADVERB]},
  { translationKey: "so much, this much", hanzi: '这么', pinyin: 'zhème', composition: [], type: [WORD_TYPE.ADVERB]},
  { translationKey: "none, no, not", hanzi: '无', pinyin: 'wú', composition: ['一','尢'], type: [WORD_TYPE.ADVERB]},
  { translationKey: "therefore, hence, intentionally", hanzi: '故', pinyin: 'gù', composition: ['古', '攵'], type: [WORD_TYPE.ADVERB]},
  { translationKey: "again, once again, one more, another, any more", hanzi: '再', pinyin: 'zài', composition: ['一', '土', '月'], type: [WORD_TYPE.ADVERB, WORD_TYPE.ADJECTIVE]},
  { translationKey: "this, almost, nearly, just, for the time being", hanzi: '且', pinyin: 'qiě', composition: ['月', '一'], type: [WORD_TYPE.ADVERB]},

];

export const PERSONAL_PRONOUN: Word[] = [
  { translationKey: "I", hanzi: '我', pinyin: 'wǒ', composition: ['丿', '一', '一', '戈'], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "you", hanzi: '你', pinyin: 'nǐ', composition: ['亻', '𠂉', '小'], type: [WORD_TYPE.PRONOUN] },
  { translationKey: "he", hanzi: '他', pinyin: 'tā', composition: ['亻', '也'], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "she, her", hanzi: '她', pinyin: 'tā', composition: ['女', '也'], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "we, us", hanzi: '我们', pinyin: 'wǒmen', composition: [], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "you (plural)", hanzi: '你们', pinyin: 'nǐmen', composition: [], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "they (male)", hanzi: '他们', pinyin: 'tāmen', composition: [], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "they (female)", hanzi: '她们', pinyin: 'tāmen', composition: [], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "other, somebody", hanzi: '其他', pinyin: 'qítā', composition: [], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "that, it, their, its", hanzi: '其', pinyin: 'qí', composition: ['廿', '一', '一', '八'], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "oneself, myself, ownself", hanzi: '自己', pinyin: 'zìjǐ', composition: [], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "same, similar, with", hanzi: '同', pinyin: 'tóng', composition: ['冂', '一', '口'], type: [WORD_TYPE.PRONOUN, WORD_TYPE.ADJECTIVE, WORD_TYPE.PREPROSITION]},

];

export const QUESTION_WORDS: Word[] = [
  { translationKey: "question", hanzi: '题', pinyin: 'tí', composition: ['是','页'], type: [WORD_TYPE.NOUN]},
  { translationKey: "question particle for yes/no questions", hanzi: '吗', pinyin: 'ma', composition: ['口', '马'], type: [WORD_TYPE.QUESTION_PARTICLE]},
  { translationKey: "question particle (and you?)", hanzi: '呢', pinyin: 'ne', composition: ['口', '尸', '匕'], type: [WORD_TYPE.QUESTION_PARTICLE]},
  { translationKey: "who", hanzi: '谁', pinyin: 'shéi', composition: ['讠','亻','主'], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "when", hanzi: '什么时候', pinyin: 'shénme shíhou', composition: [], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "what", hanzi: '什么', pinyin: 'shénme', composition: [], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "where", hanzi: '哪儿', pinyin: 'nǎ\'er', composition: [], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "what kind", hanzi: '哪种', pinyin: 'nǎ zhǒng', composition: [], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "kind", hanzi: '种', pinyin: 'zhǒng', composition: ['禾','中'], type: [WORD_TYPE.MEASURE_WORD]},
  { translationKey: "which", hanzi: '哪', pinyin: 'nǎ', composition: ['口', '月', '⻏'], type: [WORD_TYPE.MEASURE_WORD]},
  { translationKey: "how", hanzi: '怎', pinyin: 'zěn', composition: ['乍', '心'], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "How to ...?", hanzi: '怎么', pinyin: 'zěnme', composition: [], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "What's up?, What's going on?, What happened?", hanzi: '怎么了', pinyin: 'zěnmele', composition: [], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "How long ...?", hanzi: '多久', pinyin: 'duōjiǔ', composition: [], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "How old ...?", hanzi: '几岁', pinyin: 'jǐ suì', composition: [], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "How many ...?", hanzi: '多少', pinyin: 'duōshǎo', composition: [], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "How's this? How is it? How about that?", hanzi: '怎么样', pinyin: 'zěnmeyàng', composition: [], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "why", hanzi: '为什么', pinyin: 'wèishénme', composition: [], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "for, act as, serve as", hanzi: '为', pinyin: 'wèi', composition: ['丶','力','丶'], type: [WORD_TYPE.CONJUNCTION]},
  { translationKey: "because", hanzi: '因为', pinyin: 'yīnwèi', composition: [], type: [WORD_TYPE.CONJUNCTION]},
  { translationKey: "-", hanzi: '因', pinyin: 'yīn', composition: ['囗', '大'], type: [WORD_TYPE.COMB_EL]},
  { translationKey: "therefore", hanzi: '所以', pinyin: 'suǒyǐ', composition: [], type: [WORD_TYPE.CONJUNCTION]},
  { translationKey: "by, with, according to, in order to", hanzi: '以', pinyin: 'yǐ', composition: ['丨','丶','丶','人'], type: [WORD_TYPE.CONJUNCTION]},
  { translationKey: "then, in that case", hanzi: '那', pinyin: 'nà', composition: ['月', '⻏'], type: [WORD_TYPE.CONJUNCTION]},
  { translationKey: "so then ...", hanzi: '那么', pinyin: 'nàme', composition: [], type: [WORD_TYPE.CONJUNCTION]},
  { translationKey: "when (we were doing sth...), at the time", hanzi: '时候', pinyin: 'shíhòu', composition: [], type: [WORD_TYPE.CONJUNCTION]},
];
