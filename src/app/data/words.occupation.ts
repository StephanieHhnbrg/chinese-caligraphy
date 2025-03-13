import {Word, WORD_TYPE} from "../interfaces/word.data";

export const SCHOOL: Word[] = [
  { translationKey: "study", hanzi: '学', pinyin: 'xué', composition: [['⺌', '冖', '子']], type: [WORD_TYPE.VERB]},
  { translationKey: "student", hanzi: '学生', pinyin: 'xuéshēng', composition: [['学'], ['生']], type: [WORD_TYPE.NOUN]},
  { translationKey: "teacher", hanzi: '老师', pinyin: 'lǎoshī', composition: [['耂'], ['师']], type: [WORD_TYPE.NOUN]},
  { translationKey: "division, teacher, master", hanzi: '师', pinyin: 'shī', composition: [['刂', '一', '巾']], type: [WORD_TYPE.NOUN]},
  { translationKey: "school", hanzi: '学校', pinyin: 'xuéxiào', composition: [['学'], ['校']], type: [WORD_TYPE.NOUN]},
  { translationKey: "school, field officer, check, proofread", hanzi: '校', pinyin: 'xiào', composition: [['木', '亠', '父']], type: [WORD_TYPE.NOUN, WORD_TYPE.VERB]},
  { translationKey: "study", hanzi: '学习', pinyin: 'xuéxí', composition: [['学'], ['习']], type: [WORD_TYPE.VERB]},
  { translationKey: "habit", hanzi: '习', pinyin: 'xí', composition: [['𠃌', '冫']], type: [WORD_TYPE.NOUN]},
  { translationKey: "lesson, class", hanzi: '课', pinyin: 'kè', composition: [['讠', '田', '木']], type: [WORD_TYPE.NOUN]},
  { translationKey: "go to class, attend class", hanzi: '上课', pinyin: 'shàngkè', composition: [['上'], ['课']], type: [WORD_TYPE.VERB]},
  { translationKey: "homework", hanzi: '功课', pinyin: 'gōngkè', composition: [['功'], ['课']], type: [WORD_TYPE.NOUN]},
  { translationKey: "school assignment, homework", hanzi: '作业', pinyin: 'zuòyè', composition: [['作'], ['业']], type: [WORD_TYPE.NOUN]},
  { translationKey: "teach", hanzi: '教', pinyin: 'jiāo', composition: [['耂', '子', '夂']], type: [WORD_TYPE.VERB]},
  { translationKey: "test, exam", hanzi: '考试', pinyin: 'kǎoshì', composition: [['考'], ['试']], type: [WORD_TYPE.VERB, WORD_TYPE.NOUN]},
  { translationKey: "test, study, examine", hanzi: '考', pinyin: 'kǎo', composition: [['耂', '弓']], type: [WORD_TYPE.VERB]},
  { translationKey: "classmate", hanzi: '同学', pinyin: 'tóngxué', composition: [['同'], ['学']], type: [WORD_TYPE.NOUN]},
  { translationKey: "graduate", hanzi: '毕业', pinyin: 'bìyè', composition: [['毕'],['业']], type: [WORD_TYPE.NOUN]},
  { translationKey: "study abroad", hanzi: '留学', pinyin: 'liúxué', composition: [['留'],['学']], type: [WORD_TYPE.VERB]},
  { translationKey: "blackboard", hanzi: '黑板', pinyin: 'hēibǎn', composition: [['黑'], ['板']], type: [WORD_TYPE.NOUN]},
];

export const WORK: Word[] = [
  { translationKey: "company", hanzi: '公司', pinyin: 'gōngsī', composition: [['公'], ['司']], type: [WORD_TYPE.NOUN]},
  { translationKey: "go to work", hanzi: '上班', pinyin: 'shàngbān', composition: [['上'], ['班']], type: [WORD_TYPE.VERB]},
  { translationKey: "shift, squad, class, scheduled, regular", hanzi: '班', pinyin: 'bān', composition: [['𤣩','刂', '王']], type: [WORD_TYPE.NOUN, WORD_TYPE.ADJECTIVE]},
  { translationKey: "work, job", hanzi: '工作', pinyin: 'gōngzuò', composition: [['工'], ['作']], type: [WORD_TYPE.VERB, WORD_TYPE.NOUN]},
  { translationKey: "make an appointment, invite", hanzi: '约', pinyin: 'yuē', composition: [['纟','勺']], type: [WORD_TYPE.VERB]},
  { translationKey: "hold a meeting", hanzi: '开会', pinyin: 'kāihuì', composition: [['开'], ['会']], type: [WORD_TYPE.VERB]},
  { translationKey: "make a phone call", hanzi: '打电话', pinyin: 'dǎdiànhuà', composition: [['打'], ['电'], ['话']], type: [WORD_TYPE.VERB]},
  { translationKey: "have a vacation", hanzi: '放假', pinyin: 'fàngjià', composition: [['放'], ['假']], type: [WORD_TYPE.VERB]},
  { translationKey: "take a leave", hanzi: '请假', pinyin: 'qǐngjià', composition: [['请'], ['假']], type: [WORD_TYPE.VERB]},
  { translationKey: "work experience", hanzi: '工作经验', pinyin: 'gōngzuò jīngyàn', composition: [['工'], ['作'], ['经'], ['验']], type: [WORD_TYPE.NOUN]},
  { translationKey: "assistance, aid, help, assist", hanzi: '帮助', pinyin: 'bāngzhù', composition: [['帮'], ['助']], type: [WORD_TYPE.NOUN, WORD_TYPE.VERB]},
  { translationKey: "-", hanzi: '助', pinyin: 'zhù', composition: [['月','一', '力']], type: [WORD_TYPE.NOUN, WORD_TYPE.COMB_EL]},
  { translationKey: "aid, help, assist", hanzi: '帮', pinyin: 'bāng', composition: [['手', '⻏', '巾']], type: [WORD_TYPE.VERB]},
  { translationKey: "police, police officer", hanzi: '警察', pinyin: 'jǐngchá', composition: [['警'], ['察']], type: [WORD_TYPE.NOUN]},
  { translationKey: "police, police force, alert, vigilant", hanzi: '警', pinyin: 'jǐng', composition: [['艹', '勹', '口', '攵', '言']], type: [WORD_TYPE.NOUN, WORD_TYPE.ADJECTIVE]}, // 句
];

