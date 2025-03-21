import {Word, WORD_TYPE} from "../interfaces/word.data";

export const BODY: Word[] = [
  { translationKey: "head", hanzi: '头', pinyin: 'tóu', composition: ['冫', '大'], type: [WORD_TYPE.NOUN]},
  { translationKey: "hair", hanzi: '头发', pinyin: 'tóufà', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "eye", hanzi: '眼睛', pinyin: 'yǎnjīng', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "-", hanzi: '睛', pinyin: 'jīng', composition: ['目', '青'], type: [WORD_TYPE.COMB_EL]},
  { translationKey: "face", hanzi: '脸', pinyin: 'liǎn', composition: ['月', '佥'], type: [WORD_TYPE.NOUN]},
  { translationKey: "brain", hanzi: '脑', pinyin: 'nǎo', composition: ['月', '亠', '乂', '凵'], type: [WORD_TYPE.NOUN]},
  { translationKey: "belly", hanzi: '肚', pinyin: 'dù', composition: ['月', '土'], type: [WORD_TYPE.NOUN]},
  { translationKey: "height, stature", hanzi: '个子', pinyin: 'gèzi', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "body, health", hanzi: '身体', pinyin: 'shēntǐ', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "-", hanzi: '体', pinyin: 'tǐ', composition: ['亻', '木'], type: [WORD_TYPE.COMB_EL]},
  { translationKey: "physical strength, physical power", hanzi: '体力', pinyin: 'tǐlì', composition: [], type: [WORD_TYPE.NOUN]},
];

export const MEDICINE: Word[] = [
  { translationKey: "medical", hanzi: '医', pinyin: 'yī', composition: ['匚', '矢'], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "doctor", hanzi: '医生', pinyin: 'yīshēng', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "nurse", hanzi: '护士', pinyin: 'hùshì', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "scholar, warrior, knight", hanzi: '士', pinyin: 'shì', composition: ['十', '一'], type: [WORD_TYPE.NOUN]},
  { translationKey: "be sick", hanzi: '生病', pinyin: 'shēngbìng', composition: [], type: [WORD_TYPE.VERB]},
  { translationKey: "sick, sickness, disease, illness", hanzi: '病', pinyin: 'bìng', composition: ['疒', '丙'], type: [WORD_TYPE.ADJECTIVE, WORD_TYPE.NOUN]},
  { translationKey: "get sick because of bad food", hanzi: '吃坏肚子', pinyin: 'chī huài dùzi', composition: [], type: [WORD_TYPE.VERB]},
  { translationKey: "have diarrhea", hanzi: '拉肚子', pinyin: 'lādùzi', composition: [], type: [WORD_TYPE.VERB]},
  { translationKey: "see a doctor", hanzi: '看病', pinyin: 'kànbìng', composition: [], type: [WORD_TYPE.VERB]},
  { translationKey: "medicine", hanzi: '药', pinyin: 'yào', composition: ['艹', '纟','勺'], type: [WORD_TYPE.NOUN]},
  { translationKey: "hospital", hanzi: '医院', pinyin: 'yīyuàn', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "accident", hanzi: '事故', pinyin: 'shìgù', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "emergency", hanzi: '急诊', pinyin: 'jízhěn', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "hurried, to make (somebody) anxious", hanzi: '急', pinyin: 'jí', composition: ['⺈', '彐', '心'], type: [WORD_TYPE.ADJECTIVE, WORD_TYPE.VERB]}, // 刍
  { translationKey: "diagnosis", hanzi: '诊', pinyin: 'zhěn', composition: [ '讠', '人', '彡'], type: [WORD_TYPE.NOUN]}, // 㐱
  { translationKey: "ambulance", hanzi: '救护车', pinyin: 'jiùhùchē', composition: [], type: [WORD_TYPE.NOUN]},
  { translationKey: "rescue, save, help", hanzi: '救', pinyin: 'jiù', composition: ['求', '攵'], type: [WORD_TYPE.VERB]},
  { translationKey: "health, healthy", hanzi: '健康', pinyin: 'jiànkāng', composition: [], type: [WORD_TYPE.NOUN, WORD_TYPE.ADJECTIVE]},
  { translationKey: "healthy, strong, healthful", hanzi: '健', pinyin: 'jiàn', composition: ['亻', '廴', '肀', '二'], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "healthy, peaceful, spongy", hanzi: '康', pinyin: 'kāng', composition: ['⺁','肀','水'], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "grave, serious, severe, critical", hanzi: '严重', pinyin: 'yánzhòng', composition: [], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "strict, stringent, severe", hanzi: '严', pinyin: 'yán', composition: ['亚', '丿'], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "painful", hanzi: '疼', pinyin: 'téng', composition: ['疒', '冬'], type: [WORD_TYPE.ADJECTIVE]},
  { translationKey: "lose weight", hanzi: '减肥', pinyin: 'jiǎnféi', composition: [], type: [WORD_TYPE.VERB]},
  { translationKey: "fat, fertile", hanzi: '肥', pinyin: 'féi', composition: ['月','巴'], type: [WORD_TYPE.ADJECTIVE, WORD_TYPE.NOUN]},
  { translationKey: "sustain injuries, be wounded, be harmed (in an accident etc)", hanzi: '受伤', pinyin: 'shòushāng', composition: [], type: [WORD_TYPE.VERB]},
  { translationKey: "suffer, receive, be subject", hanzi: '受', pinyin: 'shòu', composition: ['爫', '冖', '又'], type: [WORD_TYPE.VERB]},
  { translationKey: "hurt, be harmful, distress", hanzi: '伤', pinyin: 'shāng', composition: ['亻', '𠂉', '力'], type: [WORD_TYPE.VERB]},
  { translationKey: "inject, give an injection", hanzi: '打针', pinyin: 'dǎzhēn', composition: [], type: [WORD_TYPE.VERB]},
  { translationKey: "needle, pin, acupuncture", hanzi: '针', pinyin: 'zhēn', composition: ['钅', '十'], type: [WORD_TYPE.NOUN]},
];
