import {Word, WORD_TYPE} from "../interfaces/word.data";

const FRUITS: Word[] = [
  { translationKey: "FRUITS.GRAPES", hanzi: '葡萄', pinyin: 'pútáo', composition: [['艹', '勹', '甫'], ['艹', '勹', '缶']], emoji: '🍇', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.ORANGE", hanzi: '橙子', pinyin: 'chéngzi', composition: [['木', '癶', '豆'], ['子']], emoji: '🍊', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.LEMON", hanzi: '柠檬', pinyin: 'níngméng', composition: [['木', '宀', '一', '丿'],['木', '艹', '冖', '一', '豕']], emoji: '🍋', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.APPLE", hanzi: '苹果', pinyin: 'píngguǒ', composition: [['艹', 'x'], ['果']], emoji: '🍎', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.PEAR", hanzi: '梨', pinyin: 'lí', composition: [['禾', '刂', '木']], emoji: '🍐', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.BANANA", hanzi: '香蕉', pinyin: 'xiāngjiāo', composition: [['香'],['艹','隹', '灬']], emoji: '🍌', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.KIWI", hanzi: '猕猴桃', pinyin: 'míhóutáo', composition: [['犭', '弓', '丶', '乛', '小'],['犭', '亻', '一', '亠', '矢'],['桃']], emoji: '🥝', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.CHERRY", hanzi: '樱桃', pinyin: 'yīngtáo', composition: [['木', '贝', '贝', '女'],['桃']], emoji: '🍒', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.RASPBERRY", hanzi: '莓', pinyin: 'méi', composition: [['莓']], type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.STRAWBERRY", hanzi: '草莓', pinyin: 'cǎoméi', composition: [['艹','日','十'],['莓']], emoji: '🍓', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.BLUEBERRY", hanzi: '蓝莓', pinyin: 'lánméi', composition: [['艹', '刂', '𠂉', '丶', '皿'], ['莓']], emoji: '🫐', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.COCONUT", hanzi: '椰子', pinyin: 'yēzi', composition: [['木', '耳', '⻏'], ['子']], emoji: '🥥', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.PINEAPPLE", hanzi: '菠萝', pinyin: 'bōluó', composition: [['艹', '氵', '皮'],['艹', '罒', '夕']], emoji: '🍍', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.MANGO", hanzi: '芒果', pinyin: 'mángguǒ', composition: [['艹', '亡'],['果']], emoji: '🥭', type: [WORD_TYPE.NOUN]},
  { translationKey: "FRUITS.WATERMELON", hanzi: '西瓜', pinyin: 'xīguā', composition: [['西'],['瓜']], emoji: '🍉', type: [WORD_TYPE.NOUN]}
];

const FOOD: Word[] = [
  { translationKey: "eat", hanzi: '吃', pinyin: 'chī', composition: [['口', '𠂉', '乙']], type: [WORD_TYPE.VERB]},
  { translationKey: "dish, cuisine", hanzi: '菜', pinyin: 'cài', composition: [['艹', '爪', '木']], type: [WORD_TYPE.NOUN]},
];

const DRINKS: Word[] = [
  { translationKey: "DRINKS.DRINK", hanzi: '喝', pinyin: 'hē', composition: [['口', '日', '丶', '𠃌', '人', '乙']], type: [WORD_TYPE.VERB]},
  { translationKey: "DRINKS.TEA", hanzi: '茶', pinyin: 'chá', composition: [['艹', '人', '木']], type: [WORD_TYPE.NOUN]},
  { translationKey: "DRINKS.COFFEE", hanzi: '咖啡', pinyin: 'kāfēi', composition: [['口', '力', '口'], ['口','非']], emoji: '☕', type: [WORD_TYPE.NOUN]},
  { translationKey: "DRINKS.BEER", hanzi: '啤酒', pinyin: 'píjiǔ', composition: [['口', '申', '十'], ['氵','酉']], emoji: '🍻', type: [WORD_TYPE.NOUN]}
];

const GET_TO_KNOW: Word[] = [
  { translationKey: "to be called", hanzi: '叫', pinyin: 'jiào', composition: [['口', '丩']], type: [WORD_TYPE.VERB]},
  { translationKey: "surname, one’s family name is", hanzi: '姓', pinyin: 'xìng', composition: [['女', '生']], type: [WORD_TYPE.VERB, WORD_TYPE.NOUN]},
  { translationKey: "name", hanzi: '名字', pinyin: 'míngzi', composition: [['夕', '口'], ['宀', '子']], type: [WORD_TYPE.NOUN]},
  { translationKey: "a person of which country", hanzi: '哪国人', pinyin: 'nǎguórén', composition: [['口', '月', '⻏'], ['国'], ['人']], type: [WORD_TYPE.QUESTION_WORD]},
  { translationKey: "get to know, meet", hanzi: '认识', pinyin: 'rènshì', composition: [['讠', '人'], ['讠', '口', '丶', '丶']], type: [WORD_TYPE.VERB]},
  { translationKey: "very", hanzi: '很', pinyin: 'hěn', composition: [['彳', '目', '匕']], type: [WORD_TYPE.ADVERB]},
  { translationKey: "happy", hanzi: '高兴', pinyin: 'gāoxìng', composition: [['高'], ['⺌','一','丶','丶']], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "Goodbye", hanzi: '再见', pinyin: 'zàijiàn', composition: [['一', '土', '月'], ['见']], type: [WORD_TYPE.PHRASE]},
  { translationKey: "meassure word", hanzi: '个', pinyin: 'gè', composition: [['人', '丨']], type: [WORD_TYPE.MEASSURE_WORD]},
  { translationKey: "and", hanzi: '和', pinyin: 'hé', composition: [['禾', '口']], type: [WORD_TYPE.CONJUNCTION]},
  { translationKey: "introduce", hanzi: '介绍', pinyin: 'jièshào', composition: [['人', '八'], ['纟', '刀', '口']], type: [WORD_TYPE.VERB]},
];

const VERBS: Word[] = [
  { translationKey: "be", hanzi: '是', pinyin: 'shì', composition: [['是']], type: [WORD_TYPE.VERB]},
  { translationKey: "want", hanzi: '要', pinyin: 'yào', composition: [['一', '罒', '女']], type: [WORD_TYPE.VERB]},
  { translationKey: "like", hanzi: '喜欢', pinyin: 'xǐhuan', composition: [['土', '口', '丶', '丶', '一', '口'], ['又', '欠']], type: [WORD_TYPE.VERB]},
]


const ADJECTIVES: Word[] = [
  { translationKey: "busy", hanzi: '忙', pinyin: 'máng', composition: [['忄', '亡']], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "tired, tiring", hanzi: '累', pinyin: 'lèi', composition: [['田', '幺', '小']], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "good looking", hanzi: '好看', pinyin: 'hǎokàn', composition: [['好'], ['手', '目']], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "beautiful", hanzi: '漂亮', pinyin: 'piàoliàng', composition: [['氵', '一', '罒', '一', '一', '小'], ['亠', '口', '冖', '几']], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "cute, lovely", hanzi: '可爱', pinyin: 'kěài', composition: [['𠃌', '口'], ['爫', '冖', '𠂇', '又']], type: [WORD_TYPE.ADJECTIVE]},
];


const COUNTRIES: Word[] = [
  { translationKey: "US", hanzi: '美国', pinyin: 'měiguó', composition: [['羊', '大'], ['国']], type: [WORD_TYPE.NOUN]},
  { translationKey: "China", hanzi: '中国', pinyin: 'zhōngguó', composition: [['中'], ['国']], type: [WORD_TYPE.NOUN]},
  { translationKey: "Japan", hanzi: '日本', pinyin: 'rìběn', composition: [['日'], ['木', '一']], type: [WORD_TYPE.NOUN]},
]

const PERSONS: Word[] = [
  { translationKey: "student", hanzi: '学生', pinyin: 'xuéshēng', composition: [['⺌', '冖', '子'], ['生']], type: [WORD_TYPE.NOUN]},
  { translationKey: "teacher", hanzi: '老师', pinyin: 'lǎoshī', composition: [['耂'], ['刂', '一', '巾']], type: [WORD_TYPE.NOUN]},
  { translationKey: "measure word for family members", hanzi: '口', pinyin: 'kǒu', composition: [['口']], type: [WORD_TYPE.MEASSURE_WORD]},
  { translationKey: "father", hanzi: '爸爸', pinyin: 'bàba', composition: [['丶', '丶', '乂', '己', '丨', '丨']], type: [WORD_TYPE.NOUN]},
  { translationKey: "mother", hanzi: '妈妈', pinyin: 'māma', composition: [['女', '马']], type: [WORD_TYPE.NOUN]},
  { translationKey: "siblings", hanzi: '兄弟姐妹', pinyin: 'xiōngdì jiěmèi', composition: [['口', '儿'], [], [], []], type: [WORD_TYPE.NOUN]},
  { translationKey: "older brother", hanzi: '哥哥', pinyin: 'gēge', composition: [['一', '丿', '口', '一', '口']], type: [WORD_TYPE.NOUN]},
  { translationKey: "older sister", hanzi: '姐姐', pinyin: 'jiějie', composition: [['女', '目']], type: [WORD_TYPE.NOUN]},
  { translationKey: "younger brother", hanzi: '弟弟', pinyin: 'dìdi', composition: [['丶', '丶', '弓', '丿', '丨']], type: [WORD_TYPE.NOUN]},
  { translationKey: "younger sister", hanzi: '妹妹', pinyin: 'mèimei', composition: [['女', '十', '木']], type: [WORD_TYPE.NOUN]},
  { translationKey: "family member", hanzi: '家人', pinyin: 'jiārén', composition: [['家'], ['人']], type: [WORD_TYPE.NOUN]},
];

const QUESTION_WORDS: Word[] = [
  { translationKey: "QUESTION_WORDS.WHO", hanzi: '谁', pinyin: 'shéi', composition: [['x']], type: [WORD_TYPE.QUESTION_WORD]},
];
const PERSONAL_PRONOUN: Word[] = [
  { translationKey: "PERSONAL_PRONOUNS.I", hanzi: '我', pinyin: 'wǒ', composition: [['丿', '一', '一', '戈']], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "PERSONAL_PRONOUNS.HE", hanzi: '他', pinyin: 'nǐ', composition: [['亻', 'x']], type: [WORD_TYPE.PRONOUN]},
  { translationKey: "PERSONAL_PRONOUNS.YOU_PL", hanzi: '你们', pinyin: 'nǐmen', composition: [['你'], ['亻', '门']], type: [WORD_TYPE.PRONOUN]},
];

export const WORDS: Word[] = [
  ...FRUITS,
  ...FOOD,
  ...DRINKS,
  ...GET_TO_KNOW,
  ...VERBS,
  ...ADJECTIVES,
  ...COUNTRIES,
  ...PERSONS,
  ...QUESTION_WORDS,
  ...PERSONAL_PRONOUN,
];

