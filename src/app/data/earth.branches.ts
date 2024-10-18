export enum SEASON { WINTER, SPRING, SUMMER, AUTUMN }

// https://de.wikipedia.org/wiki/Erdzweige
export const EARTH_BRANCHES = [
  { sign:'子', pinyin: 'zǐ', animal: '鼠', direction: 0, season: SEASON.WINTER, month: 11, hour: 0, radicalIndex: 74 },
  { sign:'丑', pinyin: 'chǒu', animal: '牛', direction: 30, season: SEASON.WINTER, month: 12, hour: 2, meaning: 'ugly, hideous' },
  { sign:'寅', pinyin: 'yín', animal: '虎', direction: 60, season: SEASON.SPRING, month: 1, hour: 4 },
  { sign:'卯', pinyin: 'mǎo', animal: '兔', direction: 90, season: SEASON.SPRING, month: 2, hour: 6 },
  { sign:'辰', pinyin: 'chén', animal: '龍', direction: 120, season: SEASON.SPRING, month: 3, hour: 8, radicalIndex: 187 },
  { sign:'巳', pinyin: 'sì', animal: '蛇', direction: 150, season: SEASON.SUMMER, month: 4, hour: 10 },
  { sign:'午', pinyin: 'wǔ', animal: '馬', direction: 180, season: SEASON.SUMMER, month: 5, hour: 12, meaning: 'midday, noon' },
  { sign:'未', pinyin: 'wèi', animal: '羊', direction: 210, season: SEASON.SUMMER, month: 6, hour: 14, meaning: 'not yet' },
  { sign:'申', pinyin: 'shēn', animal: '猴', direction: 240, season: SEASON.AUTUMN, month: 7, hour: 16, radicalIndex: 144 },
  { sign:'酉', pinyin: 'yǒu', animal: '雞', direction: 270, season: SEASON.AUTUMN, month: 8, hour: 18, radicalIndex: 193 },
  { sign:'戌', pinyin: 'xū', animal: '狗', direction: 300, season: SEASON.AUTUMN, month: 9, hour: 20 },
  { sign:'亥', pinyin: 'hài', animal: '豬', direction: 330, season: SEASON.WINTER, month: 10, hour: 22 },
];

export const ANIMALS = [
  {sign: '鼠', pinyin: 'shǔ', meaning: 'Ratte'}, //225
  {sign: '牛', pinyin: 'niú', meaning: 'Büffel'}, //110
  {sign: '虎', pinyin: 'hǔ', meaning: 'Tiger'}, // 173
  {sign: '兔', pinyin: 'tù', meaning: 'Hase'},
  {sign: '龍', pinyin: 'lóng', meaning: 'Drache'}, //137
  {sign: '蛇', pinyin: 'shé', meaning: 'Schlange'},
  {sign: '馬', pinyin: 'mǎ', meaning: 'Pferd'}, // 75
  {sign: '羊', pinyin: 'yáng', meaning: 'Schaf'}, // 157
  {sign: '猴', pinyin: 'hóu', meaning: 'Affe'},
  {sign: '雞', pinyin: 'jī', meaning: 'Hahn'},
  {sign: '狗', pinyin: 'gǒu', meaning: 'Hund'},
  {sign: '豬', pinyin: 'zhū', meaning: 'Schwein'} //194
];
