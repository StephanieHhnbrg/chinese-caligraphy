import {Word, WORD_TYPE} from "../interfaces/word.data";

export const FAUNA: Word[] = [
  { translationKey: "cat", hanzi: '猫', pinyin: 'māo', composition: [['扌', '艹', '田']], type: [WORD_TYPE.NOUN]},
  { translationKey: "elephant", hanzi: '象', pinyin: 'xiàng', composition: [['刀', '口', '丨', '豕']], type: [WORD_TYPE.NOUN]},
  { translationKey: "macaque", hanzi: '猕', pinyin: 'mí', composition: [['犭', '弓', '丶', '乛', '小']], type: [WORD_TYPE.NOUN]},
  { translationKey: "monkey", hanzi: '猴', pinyin: 'hóu', composition: [['犭', '亻', '一', '亠', '矢']], type: [WORD_TYPE.NOUN]},
  { translationKey: "chicken", hanzi: '鸡', pinyin: 'jī', composition: [['又','鸟']], type: [WORD_TYPE.NOUN]},
  { translationKey: "elephant, picture, image, resemblance", hanzi: '像', pinyin: 'xiàng', composition: [['亻', '象']], type: [WORD_TYPE.NOUN]},

];

export const FLORA: Word[] = [
  { translationKey: "scenery", hanzi: '风景', pinyin: 'fēngjǐng', composition: [['风'], ['景']], type: [WORD_TYPE.NOUN]},
  { translationKey: "view, scene, scenery", hanzi: '景', pinyin: 'fēngjǐng', composition: [['日', '京']], type: [WORD_TYPE.NOUN]},
  { translationKey: "ocean, sea", hanzi: '海', pinyin: 'hǎi', composition: [['氵', '𠂉', '母']], type: [WORD_TYPE.NOUN]},
  { translationKey: "sand, sandy", hanzi: '沙', pinyin: 'shā', composition: [['氵', '少']], type: [WORD_TYPE.NOUN]},
  { translationKey: "river", hanzi: '河', pinyin: 'hé', composition: [['氵', '可']], type: [WORD_TYPE.NOUN]},
  { translationKey: "beach", hanzi: '海边', pinyin: 'hǎibiān', composition: [['海'],['边']], type: [WORD_TYPE.NOUN]},
  { translationKey: "flower", hanzi: '花', pinyin: 'huā', composition: [['艹', '亻', '匕']], type: [WORD_TYPE.NOUN]},
  { translationKey: "flower, hero, brave", hanzi: '英', pinyin: 'yīng', composition: [['艹', '央']], type: [WORD_TYPE.NOUN]},
  { translationKey: "grass, straw", hanzi: '草', pinyin: 'cǎo', composition: [['艹','日','十']], type: [WORD_TYPE.NOUN]},
  { translationKey: "awn, arista", hanzi: '芒', pinyin: 'máng', composition: [['艹', '亡']], type: [WORD_TYPE.COMB_EL]},
  { translationKey: "star, satellite", hanzi: '星', pinyin: 'xīng', composition: [['日', '生']], type: [WORD_TYPE.NOUN]},
];

export const WEATHER: Word[] = [
  { translationKey: "weather", hanzi: '天气', pinyin: 'tiānqì', composition: [['天'],['气']], type: [WORD_TYPE.NOUN]},
  { translationKey: "raining", hanzi: '下雨', pinyin: 'xiàyǔ', composition: [['下'], ['雨']], type: [WORD_TYPE.VERB]},
  { translationKey: "snowing", hanzi: '下雪', pinyin: 'xiàxuě', composition: [['下'], ['雪']], type: [WORD_TYPE.VERB]},
  { translationKey: "snow", hanzi: '雪', pinyin: 'xuě', composition: [['雨', '彐']], type: [WORD_TYPE.NOUN]},
  { translationKey: "cloudy", hanzi: '阴天', pinyin: 'yīn tiān', composition: [['阴'], ['天']], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "negative, lunar, hidden, shade, moon, Yin", hanzi: '阴', pinyin: 'yīn', composition: [['⻖', '月']], type: [WORD_TYPE.ADJECTIVE, WORD_TYPE.NOUN]},
  { translationKey: "forecast", hanzi: '预报', pinyin: 'yùbào', composition: [['预'],['报']], type: [WORD_TYPE.NOUN]},
  { translationKey: "temperature", hanzi: '气温', pinyin: 'qìwēn', composition: [['气'], ['温']], type: [WORD_TYPE.NOUN]},
  { translationKey: "warm, lukewarm", hanzi: '温', pinyin: 'wēn', composition: [['氵','日', '皿']], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "cold", hanzi: '冷', pinyin: 'lěng', composition: [['冫', '人', '丶', '龴']], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "hot", hanzi: '热', pinyin: 'rè', composition: [['扌','丸', '灬']], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "wet", hanzi: '湿', pinyin: 'shī', composition: [['氵', '日', '业']], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "dry", hanzi: '干', pinyin: 'gān', composition: [['一','十']], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "season", hanzi: '季节', pinyin: 'jìjié', composition: [['季'],['节']], type: [WORD_TYPE.NOUN]},
  { translationKey: "season, period", hanzi: '季', pinyin: 'jì', composition: [['木', '子']], type: [WORD_TYPE.NOUN]},
  { translationKey: "festival, joint, knot", hanzi: '节', pinyin: 'jié', composition: [['艹', '𠃌','丨']], type: [WORD_TYPE.NOUN]},
  { translationKey: "summer", hanzi: '夏天', pinyin: 'xiàtiān', composition: [['夏'],['天']], type: [WORD_TYPE.NOUN]},
  { translationKey: "summer, Xia dynasty", hanzi: '夏', pinyin: 'xià', composition: [['一','自','夂']], type: [WORD_TYPE.NOUN]},
  { translationKey: "winter", hanzi: '冬', pinyin: 'dōng', composition: [['夂','冫']], type: [WORD_TYPE.NOUN]},
  { translationKey: "winter", hanzi: '冬天', pinyin: 'dōngtiān', composition: [['冬'],['天']], type: [WORD_TYPE.NOUN]},
  { translationKey: "ice", hanzi: '冰', pinyin: 'bīng', composition: [['氵', '水']], type: [WORD_TYPE.NOUN]},
  { translationKey: "umbrella, parasol", hanzi: '伞', pinyin: 'sǎn', composition: [['人','丶','丶','十']], type: [WORD_TYPE.VERB]},

];
