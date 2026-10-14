// HSK Standard Course 2 — grammar points by lesson.
// Quiz items: { q, options, answer } = fill the blank; { words, en } = put words in order.

const hsk2 = [
  {
    n: 1,
    title: "九月去北京旅游最好",
    points: [
      {
        title: "The auxiliary verb 要",
        pattern: "Subj 要 V O",
        explain:
          "Put 要 before a verb to say you want to, or plan to, do something. The usual negative is 不想, not 不要.",
        examples: [
          ["我要去北京旅游。", "I want to take a trip to Beijing."],
          ["我们要不要买几个新的椅子？", "Should we buy some new chairs?"],
        ],
        quiz: [
          { q: "明天下午我___去买椅子。", options: ["要", "最", "也"], answer: "要" },
          { words: ["我", "要", "去北京", "旅游"], en: "I want to travel to Beijing." },
        ],
      },
      {
        title: "The adverb of degree 最",
        pattern: "最 + Adj / V",
        explain: "最 means the most. It goes directly before an adjective or a verb of liking.",
        examples: [
          ["九月去北京旅游最好。", "September is the best time to visit Beijing."],
          ["我最喜欢踢足球。", "I like playing football most."],
        ],
        quiz: [
          { q: "我觉得它的眼睛___漂亮。", options: ["最", "多", "几"], answer: "最" },
          { words: ["我", "最", "喜欢", "踢足球"], en: "I like playing football most." },
        ],
      },
      {
        title: "Approximate numbers with 几 and 多",
        pattern: "Num + 多 + M + N",
        explain:
          "多 after a number means a bit more than. 几 before a measure word means a few, usually fewer than ten.",
        examples: [
          ["它多大了？——六个多月。", "How old is it? — More than six months."],
          ["三点多。", "A little after three o'clock."],
          ["我们要不要买几个新的椅子？", "Should we buy a few new chairs?"],
        ],
        quiz: [
          { q: "它多大了？——六个___月。", options: ["多", "几", "最"], answer: "多" },
          { words: ["你", "明天", "几点", "能", "回来"], en: "What time can you be back tomorrow?" },
        ],
      },
    ],
  },
  {
    n: 2,
    title: "我每天六点起床",
    points: [
      {
        title: "Questions with 是不是",
        pattern: "Subj 是不是 V O ？",
        explain:
          "Use 是不是 when you are fairly sure of something and want the other person to confirm it.",
        examples: [
          ["你很少生病，是不是喜欢运动？", "You seldom get sick. You like sports, don't you?"],
          ["你听，是不是送报纸的来了？", "Listen. Is that the man who delivers newspapers?"],
        ],
        quiz: [
          { q: "你___喜欢运动？", options: ["是不是", "多", "每"], answer: "是不是" },
          { words: ["你", "是不是", "喜欢", "运动"], en: "You like sports, don't you?" },
        ],
      },
      {
        title: "The pronoun 每",
        pattern: "每 + M + N (+ 都)",
        explain: "每 means every. It usually needs a measure word, and 都 often follows later in the sentence.",
        examples: [
          ["我每天早上都要出去跑步。", "I go out for a jog every morning."],
          ["他每天回来都很累。", "Every day he comes home exhausted."],
        ],
        quiz: [
          { q: "我___天六点起床。", options: ["每", "多", "最"], answer: "每" },
          { words: ["他", "每天", "回来", "都", "很累"], en: "Every day he comes home exhausted." },
        ],
      },
      {
        title: "The question word 多 + adjective",
        pattern: "多 + Adj ？",
        explain: "多 before an adjective asks how much: 多大 how old, 多高 how tall, 多长 how long.",
        examples: [
          ["大卫今年多大？", "How old is David?"],
          ["他多高？——一米八几。", "How tall is he? — More than 180 cm."],
        ],
        quiz: [
          { q: "你哥哥___高？——一米八。", options: ["多", "几", "每"], answer: "多" },
          { words: ["你", "在这儿", "工作", "多长时间了"], en: "How long have you been working here?" },
        ],
      },
    ],
  },
  {
    n: 3,
    title: "左边那个红色的是我的",
    points: [
      {
        title: "The 的 phrase",
        pattern: "Adj / N / Pron + 的",
        explain:
          "When everyone knows which thing you mean, drop the noun and keep 的. 红色的 means the red one.",
        examples: [
          ["这块手表不是我的，是我爸爸的。", "This watch isn't mine. It's my father's."],
          ["左边那个红色的是我的。", "The red one on the left is mine."],
        ],
        quiz: [
          { q: "这是谁的书？——是老师___。", options: ["的", "得", "地"], answer: "的" },
          { words: ["左边", "那个", "红色的", "是", "我的"], en: "The red one on the left is mine." },
        ],
      },
      {
        title: "一下 after a verb",
        pattern: "V + 一下",
        explain: "一下 after a verb makes the action short or casual: have a quick look, ask quickly.",
        examples: [
          ["我看一下。不是，是送牛奶的。", "Let me see. No, it's the milkman."],
          ["好，晚上我问一下儿子。", "OK, I'll ask our son this evening."],
        ],
        quiz: [
          { q: "你等___，我马上来。", options: ["一下", "真", "最"], answer: "一下" },
          { words: ["晚上", "我", "问一下", "儿子"], en: "I'll ask our son this evening." },
        ],
      },
      {
        title: "The modal adverb 真",
        pattern: "真 + Adj ！",
        explain: "真 means really. It is used in exclamations, not in front of a noun as a description.",
        examples: [
          ["你女儿的房间真漂亮！", "Your daughter's room is so pretty!"],
          ["时间过得真快！", "How time flies!"],
        ],
        quiz: [
          { q: "你女儿的房间___漂亮！", options: ["真", "最", "每"], answer: "真" },
          { words: ["时间", "过得", "真快"], en: "How time flies!" },
        ],
      },
    ],
  },
  {
    n: 4,
    title: "这个工作是他帮我介绍的",
    points: [
      {
        title: "是……的 for emphasis",
        pattern: "Subj 是 + who / when / how + V 的",
        explain:
          "For something that already happened, 是……的 puts the focus on who did it, when, where or how.",
        examples: [
          ["对，这本书是我写的。", "Yes, it's a book written by me."],
          ["我是2011年来的。", "I came in 2011."],
          ["这个工作是他帮我介绍的。", "He's the one who recommended me for this job."],
        ],
        quiz: [
          { q: "电话是谁打___？", options: ["的", "了", "过"], answer: "的" },
          { words: ["这个工作", "是", "他帮我", "介绍的"], en: "He recommended me for this job." },
        ],
      },
      {
        title: "……的时候 for time",
        pattern: "Clause + 的时候 , …",
        explain: "Add 的时候 after an event or an age to mean when that happened.",
        examples: [
          ["我十一岁的时候开始踢足球。", "I started playing football when I was eleven."],
          ["我第一次跳舞是在七岁的时候。", "I first danced when I was seven."],
        ],
        quiz: [
          { q: "我十一岁的___开始踢足球。", options: ["时候", "时间", "小时"], answer: "时候" },
          { words: ["我", "十一岁的时候", "开始", "踢足球"], en: "I started playing football at eleven." },
        ],
      },
      {
        title: "The adverb of time 已经",
        pattern: "已经 + V / Adj + 了",
        explain: "已经 means already. The sentence usually ends with 了.",
        examples: [
          ["已经踢了十年了。", "It has been ten years."],
          ["我已经喝了两杯了。", "I've already had two cups."],
        ],
        quiz: [
          { q: "我___喝了两杯咖啡了。", options: ["已经", "还", "再"], answer: "已经" },
          { words: ["我", "已经", "喝了", "两杯了"], en: "I've already had two cups." },
        ],
      },
    ],
  },
  {
    n: 5,
    title: "就买这件吧",
    points: [
      {
        title: "The adverb 就 for a decision",
        pattern: "就 + V (+ 吧)",
        explain: "就 marks a conclusion: that settles it, let's do this one.",
        examples: [
          ["就做你爱吃的鱼吧。", "I'm thinking of fish, your favorite."],
          ["这件不错，就买这件吧。", "This one is good. Take this one."],
        ],
        quiz: [
          { q: "这件不错，___买这件吧。", options: ["就", "还", "再"], answer: "就" },
          { words: ["就", "买", "这件", "吧"], en: "Let's take this one." },
        ],
      },
      {
        title: "The modal adverb 还 (passably)",
        pattern: "还 + 可以 / 不错",
        explain: "Here 还 means fairly or OK-ish. It is mild praise, not strong praise.",
        examples: [
          ["颜色还可以，就是有点儿大。", "The color is OK, but it seems too large."],
          ["我觉得听和说还可以，读和写不好。", "I did OK in listening and speaking, but not in reading and writing."],
        ],
        quiz: [
          { q: "这件衣服颜色___可以，就是有点儿大。", options: ["还", "就", "最"], answer: "还" },
          { words: ["颜色", "还", "可以"], en: "The color is OK." },
        ],
      },
      {
        title: "The adverbial modifier 有点儿",
        pattern: "有点儿 + Adj / V",
        explain:
          "有点儿 goes before an adjective and usually sounds a little negative. Compare Adj + 一点儿, which comes after.",
        examples: [
          ["就是有点儿大。", "It's just a bit too big."],
          ["这两天有点儿累，不去打球了。", "I've been a bit tired lately, so I won't play ball."],
        ],
        quiz: [
          { q: "这件衣服___大，有小的吗？", options: ["有点儿", "一点儿", "一下"], answer: "有点儿" },
          { words: ["这两天", "有点儿", "累"], en: "I've been a bit tired lately." },
        ],
      },
    ],
  },
  {
    n: 6,
    title: "你怎么不吃了",
    points: [
      {
        title: "The question word 怎么 (how come)",
        pattern: "Subj 怎么 + (不 / 没) V ？",
        explain: "怎么 can ask why, with a feeling of surprise.",
        examples: [
          ["今天的羊肉很好吃，你怎么不吃了？", "The mutton is excellent. Why don't you eat more?"],
          ["昨天你们怎么都没去打篮球？", "Why didn't you guys play basketball yesterday?"],
        ],
        quiz: [
          { q: "你___知道他来了？", options: ["怎么", "什么", "怎么样"], answer: "怎么" },
          { words: ["你", "怎么", "不吃了"], en: "Why don't you eat more?" },
        ],
      },
      {
        title: "Reduplicated measure words",
        pattern: "M M (+ 都)",
        explain: "Doubling a measure word means every one: 天天 every day, 个个 every one.",
        examples: [
          ["这个星期天天都吃羊肉。", "I eat mutton every day this week."],
          ["这个月我天天游泳。", "I swim every day this month."],
        ],
        quiz: [
          { q: "这个月我___游泳。", options: ["天天", "每", "多"], answer: "天天" },
          { words: ["这个月", "我", "天天", "游泳"], en: "I swim every day this month." },
        ],
      },
      {
        title: "因为……所以……",
        pattern: "因为 + reason , 所以 + result",
        explain: "因为 gives the reason and 所以 gives the result. You can use both together.",
        examples: [
          ["因为昨天下雨，所以我们都没去。", "Because it rained yesterday, none of us went."],
        ],
        quiz: [
          { q: "___昨天下雨，所以我们都没去。", options: ["因为", "所以", "虽然"], answer: "因为" },
          { words: ["因为", "昨天下雨", "所以", "我们都没去"], en: "Because it rained, none of us went." },
        ],
      },
    ],
  },
  {
    n: 7,
    title: "你家离公司远吗",
    points: [
      {
        title: "The modal adverb 还 (still)",
        pattern: "还 + (在) V",
        explain: "还 means still: the action has not stopped yet.",
        examples: [
          ["没有，他还在教室学习呢。", "No. He is still studying in the classroom."],
          ["已经9点多了，他怎么还在学习？", "It's after 9. Why is he still studying?"],
        ],
        quiz: [
          { q: "已经十点了，他怎么___在学习？", options: ["还", "就", "再"], answer: "还" },
          { words: ["他", "还在", "教室", "学习呢"], en: "He is still studying in the classroom." },
        ],
      },
      {
        title: "The adverb of time 就 (soon)",
        pattern: "Time + 就 + V",
        explain: "就 after a time phrase means sooner or faster than you might expect.",
        examples: [
          ["二十分钟就到。", "In 20 minutes."],
          ["离这儿不远有一个中国饭馆，走几分钟就到了。", "There's a Chinese restaurant nearby, only a few minutes' walk away."],
        ],
        quiz: [
          { q: "坐地铁二十分钟___到了。", options: ["就", "才", "还"], answer: "就" },
          { words: ["走", "几分钟", "就", "到了"], en: "It's a few minutes' walk." },
        ],
      },
      {
        title: "The verb 离",
        pattern: "A 离 B + 远 / 近",
        explain: "离 gives the distance between two places, or between now and a time.",
        examples: [
          ["你家离公司远吗？", "Do you live far from your company?"],
          ["离我的生日还有一个多星期呢！", "My birthday is more than one week away!"],
        ],
        quiz: [
          { q: "我家___公司很远。", options: ["离", "从", "往"], answer: "离" },
          { words: ["你家", "离", "公司", "远吗"], en: "Do you live far from your company?" },
        ],
      },
      {
        title: "The modal particle 呢",
        pattern: "Sentence + 呢",
        explain: "At the end of a statement, 呢 stresses that something is ongoing or worth noticing.",
        examples: [
          ["很远，坐公共汽车要一个多小时呢！", "Very far. It takes more than an hour by bus!"],
          ["你现在在哪儿呢？", "Where are you now?"],
        ],
        quiz: [
          { q: "你现在在哪儿___？", options: ["呢", "吗", "吧"], answer: "呢" },
          { words: ["坐公共汽车", "要", "一个多小时", "呢"], en: "It takes over an hour by bus!" },
        ],
      },
    ],
  },
  {
    n: 8,
    title: "让我想想再告诉你",
    points: [
      {
        title: "Suggestions with ……，好吗？",
        pattern: "Suggestion , 好吗 ？",
        explain: "Make a suggestion, then add 好吗 to ask if the other person agrees.",
        examples: [
          ["我们下午去看电影，好吗？", "Let's see a movie this afternoon, shall we?"],
          ["你等等我，好吗？", "Wait for me, will you?"],
        ],
        quiz: [
          { q: "我们下午去看电影，___？", options: ["好吗", "怎么", "什么"], answer: "好吗" },
          { words: ["你", "等等我", "好吗"], en: "Wait for me, will you?" },
        ],
      },
      {
        title: "The adverb 再",
        pattern: "再 + V",
        explain: "再 points to the future: again later, or first this and then that.",
        examples: [
          ["今天下午我没有时间，明天下午再去吧。", "I'm not free this afternoon. Let's go tomorrow afternoon."],
          ["让我想想再告诉你。", "Let me think about it and I'll tell you later."],
        ],
        quiz: [
          { q: "回来___打吧。", options: ["再", "又", "还"], answer: "再" },
          { words: ["让我", "想想", "再", "告诉你"], en: "Let me think and I'll tell you later." },
        ],
      },
      {
        title: "Pivotal sentences with 让 / 叫",
        pattern: "A 让 / 叫 B + V",
        explain: "B is both the person asked by A and the one who does the next action.",
        examples: [
          ["王老师让我给大卫打个电话。", "Professor Wang asked me to give David a call."],
          ["好的，我叫人去看看。", "OK. I'll send someone to have a look."],
        ],
        quiz: [
          { q: "医生___你多休息。", options: ["让", "给", "对"], answer: "让" },
          { words: ["王老师", "让我", "给大卫", "打个电话"], en: "Professor Wang asked me to call David." },
        ],
      },
      {
        title: "Reduplicated verbs",
        pattern: "V V / V一V",
        explain: "Doubling a verb makes it light and short: have a little look, have a think.",
        examples: [
          ["外边天气很好，我们出去运动运动吧！", "It's a nice day. Let's go out and do some exercise."],
          ["让我再看看。", "I'll look around."],
        ],
        quiz: [
          { q: "让我___再告诉你。", options: ["想想", "想过", "想着"], answer: "想想" },
          { words: ["我们", "出去", "运动运动", "吧"], en: "Let's go out and get some exercise." },
        ],
      },
    ],
  },
  {
    n: 9,
    title: "题太多，我没做完",
    points: [
      {
        title: "Complements of result",
        pattern: "V + 完 / 懂 / 到 / 错",
        explain:
          "A second word after the verb tells you the result. The negative uses 没: 没做完, 没听懂.",
        examples: [
          ["你都听懂了吗？", "Did you understand everything you heard?"],
          ["题太多，我没做完。", "There were too many questions. I didn't finish."],
          ["你打错了。", "You've got the wrong number."],
        ],
        quiz: [
          { q: "题太多，我没做___。", options: ["完", "得", "过"], answer: "完" },
          { words: ["大卫", "找到", "工作了"], en: "David has found a job." },
        ],
      },
      {
        title: "The preposition 从",
        pattern: "从 + time / place (+ 开始)",
        explain: "从 marks a starting point in time or place.",
        examples: [
          ["您从几岁开始学习跳舞？", "At what age did you start learning to dance?"],
          ["从下个星期一开始。", "From next Monday."],
        ],
        quiz: [
          { q: "他___什么时候开始上班？", options: ["从", "离", "往"], answer: "从" },
          { words: ["从", "下个星期一", "开始"], en: "Starting next Monday." },
        ],
      },
      {
        title: "第 for order",
        pattern: "第 + Num (+ M + N)",
        explain: "Put 第 before a number to make first, second, third.",
        examples: [
          ["这是他的第一个工作。", "This is his first job."],
          ["我第一次跳舞是在七岁的时候。", "I first danced when I was seven."],
        ],
        quiz: [
          { q: "这是他的___一个工作。", options: ["第", "每", "几"], answer: "第" },
          { words: ["这是", "他的", "第一个", "工作"], en: "This is his first job." },
        ],
      },
    ],
  },
  {
    n: 10,
    title: "别找了，手机在桌子上呢",
    points: [
      {
        title: "不要……了 / 别……了",
        pattern: "别 / 不要 + V + 了",
        explain: "Tell someone to stop doing something they are already doing.",
        examples: [
          ["不要看电视了，明天上午还有汉语课呢。", "Stop watching TV. You have a Chinese class tomorrow morning."],
          ["别找了，手机在桌子上呢。", "Stop looking. Your phone is on the desk."],
        ],
        quiz: [
          { q: "___看报纸了，医生说你要多休息。", options: ["别", "没", "不是"], answer: "别" },
          { words: ["别", "看报纸", "了"], en: "Stop reading the newspaper." },
        ],
      },
      {
        title: "The preposition 对",
        pattern: "A 对 B + 有帮助 / 好 / 不好",
        explain: "对 shows who or what is affected: good for, bad for, helpful to.",
        examples: [
          ["看电视对学汉语有帮助。", "Watching TV is good for Chinese learning."],
          ["咖啡喝多了对身体不好。", "Too much coffee is bad for your health."],
        ],
        quiz: [
          { q: "看电视___学汉语有帮助。", options: ["对", "给", "离"], answer: "对" },
          { words: ["咖啡", "喝多了", "对身体", "不好"], en: "Too much coffee is bad for you." },
        ],
      },
    ],
  },
  {
    n: 11,
    title: "他比我大三岁",
    points: [
      {
        title: "A verb phrase as a modifier",
        pattern: "V (O) + 的 + N",
        explain: "Describe a person by what they are doing: the person reading the paper, the one singing.",
        examples: [
          ["王方，昨天和你一起唱歌的人是谁？", "Wang Fang, who was the guy singing with you yesterday?"],
          ["左边这个看报纸的女孩子是你姐姐吗？", "Is the girl on the left reading a newspaper your sister?"],
        ],
        quiz: [
          { q: "前边说话___那个人是我的汉语老师。", options: ["的", "得", "地"], answer: "的" },
          { words: ["昨天和你", "一起唱歌的", "人", "是谁"], en: "Who was the person singing with you?" },
        ],
      },
      {
        title: "比 sentences (1)",
        pattern: "A 比 B + Adj (+ amount)",
        explain: "Compare two things with 比. The difference comes after the adjective. Do not put 很 in front.",
        examples: [
          ["他比我大三岁。", "He is three years older than me."],
          ["苹果也比昨天便宜一些。", "The apples are also a bit cheaper than yesterday."],
        ],
        quiz: [
          { q: "今天的西瓜___昨天便宜。", options: ["比", "跟", "对"], answer: "比" },
          { words: ["他", "比我", "大", "三岁"], en: "He is three years older than me." },
        ],
      },
      {
        title: "The auxiliary verb 可能",
        pattern: "可能 + V",
        explain: "可能 means maybe or probably.",
        examples: [
          ["你可能不认识她。", "You may not know her."],
        ],
        quiz: [
          { q: "你___不认识她，她是新来的老师。", options: ["可能", "可以", "最"], answer: "可能" },
          { words: ["你", "可能", "不认识", "她"], en: "You may not know her." },
        ],
      },
    ],
  },
  {
    n: 12,
    title: "你穿得太少了",
    points: [
      {
        title: "Complements of degree with 得",
        pattern: "V + 得 + Adj",
        explain:
          "得 links a verb to a comment on how it is done. With an object, repeat the verb: 做饭做得好.",
        examples: [
          ["你穿得太少了。", "You're wearing too little."],
          ["你做饭做得怎么样？", "How well can you cook?"],
        ],
        quiz: [
          { q: "你吃___太少了。", options: ["得", "的", "地"], answer: "得" },
          { words: ["你", "穿得", "太少了"], en: "You're wearing too little." },
        ],
      },
      {
        title: "比 sentences (2)",
        pattern: "A 比 B + V 得 + Adj",
        explain: "Compare how two people do something. 比 can come before the verb or after 得.",
        examples: [
          ["我妻子比我做得好。", "My wife cooks better than me."],
          ["你比我早起一个小时。", "You get up one hour earlier than me."],
        ],
        quiz: [
          { q: "我妻子___我做得好。", options: ["比", "跟", "对"], answer: "比" },
          { words: ["我妻子", "比我", "做得", "好"], en: "My wife cooks better than I do." },
        ],
      },
    ],
  },
  {
    n: 13,
    title: "门开着呢",
    points: [
      {
        title: "The particle 着",
        pattern: "V + 着 (+ 呢)",
        explain: "着 shows that a state continues: the door is open, she is holding a pencil.",
        examples: [
          ["门开着呢，请进。", "The door is open. Come on in."],
          ["那个手里拿着铅笔的呢？", "What about the girl with a pencil in her hand?"],
        ],
        quiz: [
          { q: "门开___呢，请进。", options: ["着", "了", "过"], answer: "着" },
          { words: ["她", "手里", "拿着", "铅笔"], en: "She has a pencil in her hand." },
        ],
      },
      {
        title: "Rhetorical 不是……吗",
        pattern: "不是 + … + 吗 ？",
        explain: "This sounds like a question but means isn't it the case that…, often with surprise.",
        examples: [
          ["她不是有男朋友吗？", "She's already got a boyfriend, hasn't she?"],
        ],
        quiz: [
          { q: "她___有男朋友吗？", options: ["不是", "是不是", "没有"], answer: "不是" },
          { words: ["你", "不是", "认识他", "吗"], en: "Don't you know him?" },
        ],
      },
      {
        title: "The preposition 往",
        pattern: "往 + direction + V",
        explain: "往 means towards. It is common in giving directions.",
        examples: [
          ["从这儿一直往前走，到了前面的路口再往右走。", "Walk straight ahead and turn right at the first crossing."],
        ],
        quiz: [
          { q: "从这儿一直___前走。", options: ["往", "从", "离"], answer: "往" },
          { words: ["到了路口", "再", "往右", "走"], en: "Turn right at the crossing." },
        ],
      },
    ],
  },
  {
    n: 14,
    title: "你看过那个电影吗",
    points: [
      {
        title: "The particle 过",
        pattern: "V + 过 (+ O)",
        explain: "过 shows past experience: have ever done. The negative is 没 + V + 过.",
        examples: [
          ["你看过那个电影没有？——没看过。", "Have you seen that movie? — No."],
          ["听说你去过中国，还想去吗？", "It's said you've been to China. Do you want to go again?"],
        ],
        quiz: [
          { q: "我没看___那个电影。", options: ["过", "了", "着"], answer: "过" },
          { words: ["你", "去过", "中国", "吗"], en: "Have you been to China?" },
        ],
      },
      {
        title: "虽然……但是……",
        pattern: "虽然 + A , 但是 + B",
        explain: "Although A is true, B still happens. Both words are usually used together.",
        examples: [
          ["虽然是晴天，但是很冷。", "It will be fine, but cold."],
          ["我虽然去过好几次，但是还想再去玩儿玩儿。", "Though I've been there several times, I still want to go again."],
        ],
        quiz: [
          { q: "___是晴天，但是很冷。", options: ["虽然", "因为", "所以"], answer: "虽然" },
          { words: ["虽然", "是晴天", "但是", "很冷"], en: "Although it's sunny, it's cold." },
        ],
      },
      {
        title: "The frequency complement 次",
        pattern: "V + 过 / 了 + Num + 次",
        explain: "Say how many times you have done something by putting Num + 次 after the verb.",
        examples: [
          ["买过一次，这儿的东西还可以。", "Yes, once. Things here are pretty good."],
        ],
        quiz: [
          { q: "这个商店我买过一___。", options: ["次", "个", "件"], answer: "次" },
          { words: ["我", "买过", "一次"], en: "I've bought something there once." },
        ],
      },
    ],
  },
  {
    n: 15,
    title: "新年就要到了",
    points: [
      {
        title: "要……了 for something about to happen",
        pattern: "(快 / 就) 要 + V + 了",
        explain: "Something is about to happen. 就要 can follow a time word like 明天; 快要 cannot.",
        examples: [
          ["今天是12月20日，新年就要到了。", "Today is December 20th. The New Year is coming."],
          ["快要下雨了，你路上慢点儿。", "It's going to rain. Be careful on your way."],
        ],
        quiz: [
          { q: "明天___要考试了。", options: ["就", "快", "还"], answer: "就" },
          { words: ["新年", "就要", "到了"], en: "The New Year is coming." },
        ],
      },
      {
        title: "都……了",
        pattern: "都 + time / amount + 了",
        explain: "都……了 means already, and it shows that the speaker feels it is late or a lot.",
        examples: [
          ["都八点四十了！", "It's already eight forty!"],
          ["都等她半个小时了！", "We've already waited for half an hour!"],
        ],
        quiz: [
          { q: "___八点四十了，她怎么还没来？", options: ["都", "就", "还"], answer: "都" },
          { words: ["都", "等她", "半个小时了"], en: "We've waited half an hour already!" },
        ],
      },
    ],
  },
];

export default hsk2;
