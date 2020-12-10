export const scenesAll = [
  {
    scenes: 's1',
    description: '有一天，武松要回家探望兄長，經過景陽崗之前看到一家酒館...',
    animationTime: 2000,
    questionOpt: [
      {
        optScenes: 's2',
        optQuestion: '進去喝酒',
      },
      {
        optScenes: 's3',
        optQuestion: '叫朋友來唱KTV',
      },
      {
        optScenes: 's4',
        optQuestion: '繼續趕路',
      },
    ],
  },
  {
    scenes: 's2',
    description: '喝酒中，遇到醉漢把桌子直接翻掉...',
    animationTime: 2000,
    questionOpt: [
      {
        optScenes: 's5',
        optHeader: '為了面子大戰',
        optQuestion: '是男子漢就要為了面子與醉漢大戰一波',
      },
      {
        optScenes: 's6',
        optHeader: '翻桌子吧!!',
        optQuestion: '把桌子翻回去，跟醉漢玩起翻翻樂',
      },
      {
        optScenes: 's7',
        optHeader: '哼，不理你',
        optQuestion: '好漢不惹麻煩，直接付錢走人',
      },
    ],
  },
  {
    scenes: 's3',
    description: '因為唱歌太難聽，被朋友摑了一巴掌...',
    animationTime: 2000,
    questionOpt: [
      {
        optScenes: 's5',
        optHeader: '大戰起來!!',
        optQuestion: '為了面子與朋友大戰一波',
      },
      {
        optScenes: 's6',
        optHeader: '搧回去!!',
        optQuestion: '一巴掌打回去，跟朋友玩起了互搧巴掌',
      },
      {
        optScenes: 's7',
        optHeader: '哼，我下台',
        optQuestion: '因為朋友情誼，直接離開',
      },
    ],
  },
  {
    scenes: 's4',
    description: '路上看到一男子在調戲良家婦女...',
    animationTime: 2000,
    questionOpt: [
      {
        optScenes: 's5',
        optHeader: '見義勇為',
        optQuestion: '見義勇為與該男子大戰一波',
      },
      {
        optScenes: 's6',
        optHeader: '調戲回去!!',
        optQuestion: '以其人之道還治其人之身，調戲該男子後玩起扮家家酒',
      },
      {
        optScenes: 's7',
        optHeader: '誤會人家',
        optQuestion: '看起來像是情竇初開的情侶，直接避開',
      },
    ],
  },
  {
    scenes: 's5',
    description: '大戰一波後...<br>武松繼續上路',
    animationTime: 5000,
    redirectTo: 's8',
  },
  {
    scenes: 's6',
    description: '玩完以後...<br>武松繼續上路',
    animationTime: 5000,
    redirectTo: 's8',
  },
  {
    scenes: 's7',
    description: '迴避以後...<br>武松繼續上路',
    animationTime: 5000,
    redirectTo: 's8',
  },
  {
    scenes: 's8',
    description: '途中，遇到一位神仙指示<br>山中有隻母老虎，戰力很高，十分恰北北，武松會？',
    animationTime: 2000,
    questionOpt: [
      {
        optScenes: 's9',
        optHeader: '跟他拼了!!',
        optQuestion: '為了當地民安，我就要看看這老虎能有多跩',
      },
      {
        optScenes: 's10',
        optHeader: '沒關係，我繞路',
        optQuestion: '身為人體GPS又聰明的我，當然繞道而行',
      },
      {
        optScenes: 's11',
        optHeader: '我生命線很長，我不怕',
        optQuestion: '命運掌握在我自己手上，我生命線很長，勇往直前我不怕',
      },
    ],
  },
  {
    scenes: 's9',
    description: '繼續上路',
    animationTime: 5000,
    redirectTo: 's12',
  },
  {
    scenes: 's10',
    description: '繞道上路',
    animationTime: 5000,
    redirectTo: 's12',
  },
  {
    scenes: 's11',
    description: '勇往直前',
    animationTime: 5000,
    redirectTo: 's12',
  },
  {
    scenes: 's12',
    description: '母老虎此時一個轉身，以芭雷舞的姿勢出現在武松面前耀武揚威打算把武松吃掉！！',
    animationTime: 2000,
    questionOpt: [
      {
        optScenes: 's13',
        optHeader: '看我功夫',
        optQuestion: '打出一套伏虎漂漂拳，試圖壓制母老虎在地上',
      },
      {
        optScenes: 's14',
        optHeader: '讓我算出你的弱點',
        optQuestion: '拿出電腦計算母老虎的每一個弱點，從而計算攻擊',
      },
      {
        optScenes: 's15',
        optHeader: '來追我啊～笨蛋',
        optQuestion: '跟母老虎玩起了你追我跑的遊戲...',
      },
    ],
  },
  {
    scenes: 's13',
    description: '結果，母老虎使出泰山壓頂把武松反制在地上...',
    animationTime: 2000,
    questionOpt: [
      {
        optScenes: 's16',
        optHeader: '不小心一見鍾情',
        optQuestion: '被母老虎的泰山姿勢吸引，瞬間產生情愫，決定與母老虎一起闖蕩...',
      },
      {
        optScenes: 's17',
        optHeader: '看我反制',
        optQuestion: '武松使用金蟾脫殼掙脫後，與母老虎打了個三天三夜...',
      },
    ],
  },
  {
    scenes: 's14',
    description: '怎知道，母老虎直接打壞電腦，把武松壓在了地上，準備要吃武松...',
    animationTime: 2000,
    questionOpt: [
      {
        optScenes: 's16',
        optHeader: '萌生愛的情愫',
        optQuestion: '母老虎果斷的攻擊打破武松的計畫，瞬間產生情愫，決定與母老虎開一家店',
      },
      {
        optScenes: 's17',
        optHeader: '打電話問功夫',
        optQuestion: '武松拿出手機開始打電話問功夫，與母老虎過招了三百回合...',
      },
    ],
  },
  {
    scenes: 's15',
    description: '追著追著，母老虎一個熊抱將武松壓在了地上，準備品嚐武松...',
    animationTime: 2000,
    questionOpt: [
      {
        optScenes: 's16',
        optHeader: '感情發展起來',
        optQuestion:
          '武松一個翻轉與母老虎抱在一起，讓武松感受到單身狗也有人抱的美好，決定與母老虎一起發展未來',
      },
      {
        optScenes: 's17',
        optHeader: '抱起來轉',
        optQuestion: '武松不甘被抱著，反抱回去與母老虎滾了三百公里之遠',
      },
    ],
  },
  {
    scenes: 's16',
    description: '武松與母老虎一起努力，有紀律的理財習慣，最後開了一家健身房。',
    animationTime: 2000,
    conclusion:
      '只要肯努力有夢想，小錢終將累積而成大財富，好好計劃，精打細算將來的每一步，聰明有規劃的你，養成儲蓄理財的好習慣，你也會開創一個更愜意的將來。',
    tips: '理財保障未來好工具，你我都知年金險！！',
    tags: ['富邦人壽', '年金險'],
  },
  {
    scenes: 's17',
    description: '這一拼讓武松成了當地的紅人，但卻住進醫院，必須負擔大筆的醫療與相關費用。',
    animationTime: 2000,
    conclusion:
      '辛苦打拼與努力，卻忘了意外的發生總是讓人措手不及，如果身為家中支柱與社會棟樑，你更應該備好保障與失能風險，讓保險在你需要幫助的時候成為你的最佳助手。',
    tips: '規劃保障與管理風險，守護萬一更能保障家人！！',
    tags: ['富邦人壽', '傷害險'],
  },
];
