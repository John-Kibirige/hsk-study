// HSK Standard Course 3 — grammar points by lesson.
// Quiz items: { q, options, answer } = fill the blank; { words, en } = put words in order.

const hsk3 = [
  {
    n: 1,
    title: "周末你有什么打算",
    points: [
      {
        title: "The result complement 好",
        pattern: "V + 好",
        explain:
          "好 after a verb means the action is finished and done well. 吃完了 only says you finished; 吃好了 says you are satisfied too.",
        examples: [
          ["我早就想好了。", "I've already got it planned."],
          ["是啊，我已经找好饭馆了，电影票也买好了。", "Yes. I've found a restaurant and bought the movie tickets."],
        ],
        quiz: [
          { q: "水果、面包、茶都准备___了。", options: ["好", "到", "过"], answer: "好" },
          { words: ["我", "早就", "想好", "了"], en: "I've already got it planned." },
        ],
      },
      {
        title: "一……也 / 都 + 不 / 没",
        pattern: "一 + M + N + 也 / 都 + 不 / 没 + V",
        explain: "This makes a complete negative: not even one. With adjectives, use 一点儿也不.",
        examples: [
          ["明天不是有考试吗？你怎么一点儿也不着急？", "Isn't there a test tomorrow? Why aren't you worried at all?"],
          ["手机、电脑、地图，一个也不能少。", "Mobile phone, computer, map. We can't leave any of them behind."],
        ],
        quiz: [
          { q: "我一个苹果___没吃。", options: ["也", "还", "就"], answer: "也" },
          { words: ["我", "一点儿", "也不", "累"], en: "I'm not tired at all." },
        ],
      },
      {
        title: "The conjunction 那",
        pattern: "那 + conclusion",
        explain: "At the start of a sentence, 那 means in that case, based on what was just said.",
        examples: [
          ["A：我不想看电影。B：那我也不去了。", "A: I don't want to see a film. B: Then I won't go either."],
          ["那也不能一直玩儿啊。", "Even so, you can't just keep playing."],
        ],
        quiz: [
          { q: "A：我早就复习好了。B：___也不能一直玩儿啊。", options: ["那", "这", "都"], answer: "那" },
          { words: ["那", "我", "也不", "去了"], en: "Then I won't go either." },
        ],
      },
    ],
  },
  {
    n: 2,
    title: "他什么时候回来",
    points: [
      {
        title: "Simple complements of direction",
        pattern: "V + 来 / 去",
        explain: "来 means towards the speaker and 去 means away from the speaker.",
        examples: [
          ["他出去办事了，下午回来。", "He's out on business and will be back in the afternoon."],
          ["你在这儿等吧，我拿了伞就下来。", "Wait here. I'll come down as soon as I get the umbrella."],
        ],
        quiz: [
          { q: "你在这儿等吧，我拿了伞就下___。", options: ["来", "去", "到"], answer: "来" },
          { words: ["他", "出去", "办事了"], en: "He's gone out on business." },
        ],
      },
      {
        title: "Two actions in a row",
        pattern: "V1 了 (O) + 就 + V2",
        explain: "As soon as the first action is done, the second one happens.",
        examples: [
          ["回来了就让他给我打个电话。", "Have him call me when he comes back."],
          ["好的，他到了办公室我就告诉他。", "OK. I'll tell him once he gets to the office."],
        ],
        quiz: [
          { q: "你每天晚上吃了饭___睡觉。", options: ["就", "才", "再"], answer: "就" },
          { words: ["他到了", "办公室", "我就", "告诉他"], en: "I'll tell him once he arrives." },
        ],
      },
      {
        title: "Rhetorical 能……吗",
        pattern: "能 + V + 吗 ？",
        explain: "A question that expects the answer no. It really means of course not, or how could it.",
        examples: [
          ["你每天晚上吃了饭就睡觉，也不出去走走，能不胖吗？", "You sleep right after dinner and never go for a walk. How could you not be fat?"],
        ],
        quiz: [
          { q: "你每天都不运动，___不胖吗？", options: ["能", "会", "要"], answer: "能" },
          { words: ["这么多作业", "能", "做完", "吗"], en: "How could anyone finish this much homework?" },
        ],
      },
    ],
  },
  {
    n: 3,
    title: "桌子上放着很多饮料",
    points: [
      {
        title: "还是 and 或者",
        pattern: "A 还是 B ？ / A 或者 B",
        explain: "Use 还是 for or in a question. Use 或者 for or in a statement.",
        examples: [
          ["明天是晴天还是阴天？", "Will it be sunny or cloudy tomorrow?"],
          ["茶或者咖啡都可以。", "Either tea or coffee is fine."],
        ],
        quiz: [
          { q: "你喝茶___喝咖啡？", options: ["还是", "或者", "和"], answer: "还是" },
          { words: ["你", "喝茶", "还是", "喝咖啡"], en: "Would you like tea or coffee?" },
        ],
      },
      {
        title: "Existence with 着",
        pattern: "Place + V 着 + Num + M + N",
        explain: "Describe what is somewhere, and in what position. The place comes first.",
        examples: [
          ["桌子上放着很多饮料，你喝什么？", "There are plenty of drinks on the table. What would you like?"],
          ["这上面写着320元。", "It says 320 yuan on it."],
        ],
        quiz: [
          { q: "桌子上放___很多饮料。", options: ["着", "了", "过"], answer: "着" },
          { words: ["桌子上", "放着", "很多", "饮料"], en: "There are lots of drinks on the table." },
        ],
      },
      {
        title: "会 for possibility",
        pattern: "会 + V",
        explain: "会 here means will probably: it predicts what is likely to happen.",
        examples: [
          ["天冷了或者工作累了的时候，喝杯热茶会很舒服。", "When it's cold or you're tired, a cup of hot tea will feel good."],
          ["你总是吃甜的东西，会越吃越胖。", "You always eat sweet things. You'll get fatter and fatter."],
        ],
        quiz: [
          { q: "明天___下雨吗？", options: ["会", "能", "可以"], answer: "会" },
          { words: ["喝杯热茶", "会", "很", "舒服"], en: "A cup of hot tea will feel good." },
        ],
      },
    ],
  },
  {
    n: 4,
    title: "她总是笑着跟客人说话",
    points: [
      {
        title: "又……又……",
        pattern: "又 + Adj , 又 + Adj",
        explain: "Two qualities at the same time: both A and B.",
        examples: [
          ["她又聪明又热情，也很努力。", "She's clever, warm and hard-working."],
          ["这家超市的蛋糕又便宜又好吃。", "The cakes in this supermarket are cheap and delicious."],
        ],
        quiz: [
          { q: "她___聪明又热情。", options: ["又", "也", "还"], answer: "又" },
          { words: ["这家超市的蛋糕", "又便宜", "又好吃"], en: "The cakes here are cheap and tasty." },
        ],
      },
      {
        title: "The accompanying action V1 着 V2",
        pattern: "V1 着 (O1) + V2 (O2)",
        explain: "The first verb with 着 describes the way the second action is done.",
        examples: [
          ["她总是笑着跟客人说话。", "She always smiles when talking to customers."],
          ["我们买两块，回家吃着蛋糕看电视，怎么样？", "Let's buy two and watch TV at home while eating them."],
        ],
        quiz: [
          { q: "她总是笑___回答老师的问题。", options: ["着", "了", "过"], answer: "着" },
          { words: ["她", "总是", "笑着", "跟客人说话"], en: "She always smiles when talking to customers." },
        ],
      },
    ],
  },
  {
    n: 5,
    title: "我最近越来越胖了",
    points: [
      {
        title: "了 for a change",
        pattern: "Adj / V + 了",
        explain: "了 at the end of a sentence can mean a new situation: it is now different from before.",
        examples: [
          ["前几天有点儿发烧，现在好多了。", "I had a fever a few days ago, but I'm much better now."],
          ["草和树都绿了，花也开了。", "The grass and trees turn green and flowers bloom."],
        ],
        quiz: [
          { q: "春天来了，花都开___。", options: ["了", "着", "过"], answer: "了" },
          { words: ["草和树", "都", "绿了"], en: "The grass and trees have turned green." },
        ],
      },
      {
        title: "越来越 + adjective",
        pattern: "越来越 + Adj / mental V",
        explain: "越来越 means more and more. Do not add 很 after it.",
        examples: [
          ["我最近越来越胖了。", "I'm getting fatter and fatter lately."],
          ["我做的饭越来越好吃，我能少吃吗？", "My cooking gets better and better. How can I eat less?"],
        ],
        quiz: [
          { q: "天气___冷了。", options: ["越来越", "又", "最"], answer: "越来越" },
          { words: ["我做的饭", "越来越", "好吃"], en: "My cooking keeps getting better." },
        ],
      },
    ],
  },
  {
    n: 6,
    title: "怎么突然找不到了",
    points: [
      {
        title: "Complements of possibility",
        pattern: "V + 得 / 不 + complement",
        explain: "得 between the verb and its complement means can; 不 means cannot.",
        examples: [
          ["没有眼镜，我一个字也看不清楚。", "Without glasses, I can't read a single word."],
          ["我怎么看得到啊？", "How can I see it?"],
          ["电话里讲不明白，你来我家吧。", "I can't explain on the phone. Come to my place."],
        ],
        quiz: [
          { q: "音乐会人太多，买不___票。", options: ["到", "完", "好"], answer: "到" },
          { words: ["我", "怎么", "看得到", "啊"], en: "How can I see it?" },
        ],
      },
      {
        title: "Asking where something is with 呢",
        pattern: "N + 呢 ？",
        explain: "Without any other context, Noun + 呢 asks where that thing is.",
        examples: [
          ["我的眼镜呢？怎么突然找不到了？", "Where are my glasses? Why can't I find them?"],
          ["好吧，牛奶呢？", "All right, where's the milk?"],
        ],
        quiz: [
          { q: "我的眼镜___？怎么突然找不到了？", options: ["呢", "吗", "吧"], answer: "呢" },
          { words: ["我的", "手机", "呢"], en: "Where's my phone?" },
        ],
      },
      {
        title: "刚 and 刚才",
        pattern: "刚 + V / 刚才 + …",
        explain:
          "刚 is an adverb that sits right before the verb. 刚才 is a time word: it can go before the subject and can describe a noun (刚才的事).",
        examples: [
          ["你去房间找找，是不是刚才放在桌子上了？", "Look in the room. Maybe you put them on the desk just now?"],
          ["刚做完，你呢？", "Just finished. And you?"],
        ],
        quiz: [
          { q: "___的事情你别告诉他。", options: ["刚才", "刚", "已经"], answer: "刚才" },
          { words: ["你", "刚才", "去哪儿", "了"], en: "Where did you go just now?" },
        ],
      },
    ],
  },
  {
    n: 7,
    title: "我跟她都认识五年了",
    points: [
      {
        title: "Saying how long",
        pattern: "V + 了 + duration (+ 了)",
        explain: "Put the length of time after the verb. A final 了 means it is still going on.",
        examples: [
          ["不，她在北京工作三年了。", "No. She has worked in Beijing for three years."],
          ["我们唱了两个小时歌。", "We sang for two hours."],
          ["我跟她都认识五年了。", "I've known her for five years."],
        ],
        quiz: [
          { q: "我们唱了两个___歌。", options: ["小时", "点", "时候"], answer: "小时" },
          { words: ["我跟她", "都", "认识", "五年了"], en: "I've known her for five years." },
        ],
      },
      {
        title: "对……感兴趣",
        pattern: "A 对 B 感兴趣",
        explain: "To be interested in something. Degree words go before 感兴趣: 很感兴趣, 更感兴趣.",
        examples: [
          ["你们都对音乐感兴趣吗？", "Are you both interested in music?"],
          ["她对音乐感兴趣，我对她更感兴趣。", "She's interested in music. I'm more interested in her."],
        ],
        quiz: [
          { q: "我___音乐很感兴趣。", options: ["对", "跟", "给"], answer: "对" },
          { words: ["他", "对音乐", "很", "感兴趣"], en: "He's very interested in music." },
        ],
      },
      {
        title: "Telling time with 半, 刻, 差",
        pattern: "差 + 一刻 + 八点",
        explain: "半 is half past, 一刻 is a quarter, and 差 means short of: 差一刻八点 is 7:45.",
        examples: [
          ["你不是说七点半来接我吗？", "Didn't you say you'd pick me up at half past seven?"],
          ["已经差一刻八点了！", "It's already a quarter to eight!"],
        ],
        quiz: [
          { q: "现在七点四十五，就是差一___八点。", options: ["刻", "半", "分"], answer: "刻" },
          { words: ["已经", "差一刻", "八点了"], en: "It's already a quarter to eight." },
        ],
      },
    ],
  },
  {
    n: 8,
    title: "你去哪儿我就去哪儿",
    points: [
      {
        title: "又 and 再",
        pattern: "又 + V 了 / 再 + V",
        explain: "Both mean again. 又 is for something that already happened again; 再 is for the future.",
        examples: [
          ["昨天去看了看，今天又去看了看，明天还要再去看看。", "I went yesterday, went again today, and will go again tomorrow."],
        ],
        quiz: [
          { q: "他昨天来过，今天___来了。", options: ["又", "再", "还"], answer: "又" },
          { words: ["明天", "还要", "再去", "看看"], en: "I'll go and look again tomorrow." },
        ],
      },
      {
        title: "Question words used twice",
        pattern: "…哪儿 / 什么… , 就…哪儿 / 什么…",
        explain: "The same question word in both halves links them: wherever you sit, I sit.",
        examples: [
          ["你坐哪儿我就坐哪儿。", "I'll sit wherever you sit."],
          ["你喝什么我就喝什么。", "I'll have whatever you have."],
          ["想吃什么就吃什么。", "I eat whatever I want."],
        ],
        quiz: [
          { q: "你去哪儿，我就去___。", options: ["哪儿", "那儿", "这儿"], answer: "哪儿" },
          { words: ["你喝什么", "我就", "喝", "什么"], en: "I'll drink whatever you drink." },
        ],
      },
    ],
  },
  {
    n: 9,
    title: "她的汉语说得跟中国人一样好",
    points: [
      {
        title: "越 A 越 B",
        pattern: "越 + A , 越 + B",
        explain: "The more A happens, the more B happens.",
        examples: [
          ["休息得越多，好得越快。", "The more you rest, the quicker you recover."],
          ["山越高，路越难走。", "The higher the mountain, the harder the path."],
        ],
        quiz: [
          { q: "你的中文___说越好了！", options: ["越", "更", "最"], answer: "越" },
          { words: ["山", "越高", "路", "越难走"], en: "The higher the mountain, the harder the path." },
        ],
      },
      {
        title: "A 跟 B 一样",
        pattern: "A 跟 B 一样 (+ Adj)",
        explain: "Say A is the same as B. The negative is 不一样.",
        examples: [
          ["她的汉语说得跟中国人一样好。", "She speaks Chinese like a native."],
          ["你的眼睛怎么跟大熊猫一样了？", "Why do your eyes look like a panda's?"],
        ],
        quiz: [
          { q: "她的汉语说得___中国人一样好。", options: ["跟", "比", "对"], answer: "跟" },
          { words: ["她的汉语", "说得", "跟中国人", "一样好"], en: "She speaks Chinese as well as a native." },
        ],
      },
    ],
  },
  {
    n: 10,
    title: "数学比历史难多了",
    points: [
      {
        title: "比 sentences with a degree",
        pattern: "A 比 B + Adj + 一点儿 / 一些 / 多了",
        explain: "Add 一点儿 or 一些 for a little, and 多了 or 得多 for much. Never use 很 or 非常 here.",
        examples: [
          ["马可比我高，我比马可矮一点儿。", "Marco is taller than me. I'm a bit shorter."],
          ["我觉得数学比历史难多了。", "I think maths is much harder than history."],
        ],
        quiz: [
          { q: "我觉得数学比历史难___。", options: ["多了", "很", "非常"], answer: "多了" },
          { words: ["你", "最近", "比以前", "来得早多了"], en: "You've been coming in much earlier lately." },
        ],
      },
      {
        title: "Approximate numbers (1)",
        pattern: "Num + Num (+ M)",
        explain: "Two neighbouring numbers together give a rough amount: 两三, 七八, 三四个.",
        examples: [
          ["骑车七八分钟就能到。", "It only takes seven or eight minutes by bike."],
          ["附近有三四个车站。", "There are three or four bus stops nearby."],
        ],
        quiz: [
          { q: "骑车___分钟就能到。", options: ["七八", "七十八", "第七"], answer: "七八" },
          { words: ["附近", "有", "三四个", "车站"], en: "There are three or four stops nearby." },
        ],
      },
    ],
  },
  {
    n: 11,
    title: "别忘了把空调关了",
    points: [
      {
        title: "The 把 sentence (1)",
        pattern: "A 把 B + V + 了",
        explain:
          "把 moves a known object in front of the verb to show what you do to it. The verb never stands alone at the end.",
        examples: [
          ["帮我把这本词典还了吧。", "Please return this dictionary for me."],
          ["会议结束后，别忘记把空调关了。", "Don't forget to turn off the air conditioner after the meeting."],
        ],
        quiz: [
          { q: "会议结束后，别忘记___空调关了。", options: ["把", "被", "给"], answer: "把" },
          { words: ["记得", "把灯", "关了"], en: "Remember to turn off the light." },
        ],
      },
      {
        title: "Approximate numbers with 左右",
        pattern: "Num + M + 左右",
        explain: "左右 after a number means about or around.",
        examples: [
          ["王经理两点左右来了个电话。", "Manager Wang called at around two."],
          ["这个笔记本电脑我去年买的时候要五千块左右。", "When I bought this laptop last year it was about 5,000 yuan."],
        ],
        quiz: [
          { q: "这个电脑去年要五千块___。", options: ["左右", "几", "第"], answer: "左右" },
          { words: ["王经理", "两点左右", "来了", "个电话"], en: "Manager Wang called around two." },
        ],
      },
    ],
  },
  {
    n: 12,
    title: "把重要的东西放在我这儿吧",
    points: [
      {
        title: "才 and 就",
        pattern: "Time + 才 / 就 + V",
        explain: "才 means later or slower than expected. 就 means earlier or sooner.",
        examples: [
          ["你怎么才来？", "Why are you so late?"],
          ["以前都要12点以后才睡觉。", "You used to go to bed after 12."],
          ["一个星期就回来。", "I'll be back in a week."],
        ],
        quiz: [
          { q: "以前都要12点以后___睡觉。", options: ["才", "就", "再"], answer: "才" },
          { words: ["你", "怎么", "才", "来"], en: "Why are you so late?" },
        ],
      },
      {
        title: "The 把 sentence (2)",
        pattern: "A 把 B + V + 在 / 到 / 给 + …",
        explain: "Use 把 when you move something to a place or give it to someone.",
        examples: [
          ["那我帮你把衣服放到行李箱里吧。", "I'll help you put your clothes in the suitcase."],
          ["司机把我送到机场的时候，我才发现忘记带钱包了。", "When the driver dropped me at the airport, I realized I had forgotten my wallet."],
        ],
        quiz: [
          { q: "我已经把照片放___你的包里了。", options: ["在", "给", "往"], answer: "在" },
          { words: ["把", "重要的东西", "放在", "我这儿吧"], en: "Leave the important things with me." },
        ],
      },
    ],
  },
  {
    n: 13,
    title: "我是走回来的",
    points: [
      {
        title: "Compound complements of direction",
        pattern: "V + 上 / 下 / 进 / 出 / 回 / 过 / 起 + 来 / 去",
        explain: "Two direction words after a verb: the first shows the path, the second shows towards or away from the speaker.",
        examples: [
          ["没有公共汽车了，我是走回来的。", "There were no buses, so I walked back."],
          ["快拿出来让我看看。", "Take it out and show me."],
          ["坐久了还可以站起来休息一会儿。", "If you sit too long you can stand up and rest."],
        ],
        quiz: [
          { q: "没有公共汽车了，我是走回___的。", options: ["来", "去", "到"], answer: "来" },
          { words: ["快", "拿出来", "让我", "看看"], en: "Take it out and show me." },
        ],
      },
      {
        title: "一边……一边……",
        pattern: "一边 + V1 , 一边 + V2",
        explain: "Two actions at the same time.",
        examples: [
          ["是啊，一边喝咖啡一边说了些过去的事。", "Yes. We talked about the past over coffee."],
          ["他喜欢每天早上起床后，一边吃早饭一边看报纸。", "He likes reading the paper over breakfast every morning."],
        ],
        quiz: [
          { q: "我们___喝咖啡一边聊天儿。", options: ["一边", "一起", "一直"], answer: "一边" },
          { words: ["他", "一边吃饭", "一边", "看报纸"], en: "He reads the paper while eating." },
        ],
      },
    ],
  },
  {
    n: 14,
    title: "你把水果拿过来",
    points: [
      {
        title: "The 把 sentence (3)",
        pattern: "A 把 B + V + result / direction",
        explain: "After the verb, add a result (干净, 好) or a direction (出来, 过来).",
        examples: [
          ["先把茶和杯子放好，然后把冰箱里的西瓜拿出来。", "Set out the tea and cups, then take the watermelon out of the fridge."],
          ["客人来的时候，他们会把房间打扫干净。", "They'll have the room cleaned before the guests come."],
        ],
        quiz: [
          { q: "你先把冰箱里的西瓜拿___。", options: ["出来", "出", "起"], answer: "出来" },
          { words: ["我", "先", "把桌椅", "搬出去"], en: "I'll move the table and chairs out first." },
        ],
      },
      {
        title: "先……再 / 然后……",
        pattern: "先 + V1 , 然后 / 再 + V2",
        explain: "Give steps in order: first this, then that.",
        examples: [
          ["其实做水果饭很简单，先把米饭做好，然后再把新鲜的水果放进去。", "Fruit rice is simple: cook the rice first, then add fresh fruit."],
          ["你先等一下，我去把电视关了。", "Hold on, let me turn off the TV."],
        ],
        quiz: [
          { q: "我们___吃饭，然后再去看电影。", options: ["先", "再", "就"], answer: "先" },
          { words: ["先", "把茶和杯子放好", "然后", "把西瓜拿出来"], en: "First set out the tea and cups, then bring the watermelon." },
        ],
      },
    ],
  },
  {
    n: 15,
    title: "其他都没什么问题",
    points: [
      {
        title: "除了……以外",
        pattern: "除了 A (以外) , 都 / 还 / 也 + …",
        explain: "With 都, A is left out (everyone except A). With 还 or 也, A is included (besides A, also B).",
        examples: [
          ["写得不错，除了这个句子意思有些不清楚外，其他都没什么问题。", "Well done. Apart from this sentence, the rest is fine."],
          ["除了看新闻，人们还可以在网上听歌、看电影、买东西。", "Besides news, people can listen to music, watch films and shop online."],
        ],
        quiz: [
          { q: "除了小云，其他人___来了。", options: ["都", "还", "也"], answer: "都" },
          { words: ["除了游泳以外", "我", "还", "喜欢爬山"], en: "Besides swimming, I also like climbing." },
        ],
      },
      {
        title: "Question words meaning something / anything",
        pattern: "有 + 什么 + N",
        explain: "In a statement, 什么 can mean any or some, not what.",
        examples: [
          ["以后有什么不明白的地方，可以给我打电话或者发电子邮件。", "If anything is unclear, call or email me."],
        ],
        quiz: [
          { q: "你有___问题，可以问我。", options: ["什么", "哪儿", "谁"], answer: "什么" },
          { words: ["以后", "有什么问题", "可以", "给我打电话"], en: "If you have any questions, call me." },
        ],
      },
      {
        title: "极了 for a high degree",
        pattern: "Adj + 极了",
        explain: "极了 after an adjective means extremely.",
        examples: [
          ["不用花钱，还有新衣服穿，他满意极了。", "No cost and new clothes to wear. He's extremely happy."],
        ],
        quiz: [
          { q: "有新衣服穿，他满意___。", options: ["极了", "很多", "非常"], answer: "极了" },
          { words: ["他", "满意", "极了"], en: "He's extremely satisfied." },
        ],
      },
    ],
  },
  {
    n: 16,
    title: "我现在累得下了班就想睡觉",
    points: [
      {
        title: "如果……(的话)，就……",
        pattern: "如果 + condition (的话) , (Subj) 就 + result",
        explain: "If A, then B. 的话 at the end of the first part is optional.",
        examples: [
          ["我年轻的时候也这么想，但是那时候没有钱，如果有钱，就去了。", "I thought so when I was young, but I had no money. If I had, I'd have gone."],
          ["如果不舒服，就去医院检查一下吧。", "If you don't feel well, get it checked at the hospital."],
        ],
        quiz: [
          { q: "___你有时间，就来我家玩儿吧。", options: ["如果", "虽然", "因为"], answer: "如果" },
          { words: ["如果", "不舒服", "就去", "医院检查一下吧"], en: "If you feel unwell, go to the hospital." },
        ],
      },
      {
        title: "Complex complements of state",
        pattern: "V / Adj + 得 + clause",
        explain: "After 得 you can put a whole phrase that shows how much: so tired that…",
        examples: [
          ["我现在累得下了班就想睡觉。", "I'm so tired I want to sleep as soon as I finish work."],
          ["刚出生时她爸爸高兴得一个晚上都没睡着。", "When she was born her dad was so happy he didn't sleep all night."],
        ],
        quiz: [
          { q: "她爸爸高兴___一个晚上都没睡着。", options: ["得", "的", "地"], answer: "得" },
          { words: ["我", "累得", "下了班", "就想睡觉"], en: "I'm so tired I want to sleep right after work." },
        ],
      },
      {
        title: "Doubling one-syllable adjectives",
        pattern: "AA + 的",
        explain: "Doubling an adjective makes a lively, vivid description. Do not add 很.",
        examples: [
          ["你女儿长得白白的、胖胖的，真可爱！", "Your daughter is fair and chubby. So lovely!"],
          ["你看她鼻子小小的，头发黑黑的。", "Look at her little nose and her black hair."],
        ],
        quiz: [
          { q: "你看她鼻子___的。", options: ["小小", "很小", "小小小"], answer: "小小" },
          { words: ["她的头发", "黑黑的"], en: "Her hair is nice and black." },
        ],
      },
    ],
  },
  {
    n: 17,
    title: "谁都有办法看好你的“病”",
    points: [
      {
        title: "Doubling two-syllable verbs",
        pattern: "ABAB",
        explain: "Two-syllable verbs double as a whole word: 锻炼锻炼, 认识认识. This softens the request.",
        examples: [
          ["为了健康，我真应该多锻炼锻炼了。", "For my health, I really should exercise more."],
          ["真的？那你介绍我们认识认识吧。", "Really? Then introduce us."],
        ],
        quiz: [
          { q: "我真应该多___了。", options: ["锻炼锻炼", "锻锻炼炼", "锻炼炼"], answer: "锻炼锻炼" },
          { words: ["你", "带我", "去医院", "检查检查吧"], en: "Take me to the hospital for a check-up." },
        ],
      },
      {
        title: "Question words meaning everyone / everywhere",
        pattern: "谁 / 哪儿 / 什么 + 都 / 也",
        explain: "A question word with 都 or 也 means all of them: everyone, everywhere, everything.",
        examples: [
          ["谁都知道运动对身体好。", "Everybody knows exercise is good for you."],
          ["最近我觉得哪儿都不舒服。", "Lately I feel unwell all over."],
          ["唱歌、画画儿、踢足球，什么都会。", "Singing, drawing, football. He can do everything."],
        ],
        quiz: [
          { q: "最近我觉得___都不舒服。", options: ["哪儿", "那儿", "这儿"], answer: "哪儿" },
          { words: ["他", "什么", "都", "会"], en: "He can do everything." },
        ],
      },
    ],
  },
  {
    n: 18,
    title: "我相信他们会同意的",
    points: [
      {
        title: "只要……就……",
        pattern: "只要 + condition , 就 + result",
        explain: "As long as A happens, B will follow. A is enough on its own.",
        examples: [
          ["只要你给我买，我就能照顾好它。", "As long as you buy it for me, I can look after it."],
          ["没问题，只要我有，就一定会借给你的。", "No problem. As long as I have it, I'll lend it to you."],
        ],
        quiz: [
          { q: "___我有，就一定会借给你的。", options: ["只要", "只有", "虽然"], answer: "只要" },
          { words: ["只要", "你给我买", "我就能", "照顾好它"], en: "As long as you buy it, I'll look after it." },
        ],
      },
      {
        title: "The preposition 关于",
        pattern: "关于 + N , …",
        explain: "关于 means about or regarding. It usually starts the sentence.",
        examples: [
          ["关于这个工作，还有什么问题吗？", "Any questions about the job?"],
        ],
        quiz: [
          { q: "___这个工作，你还有什么问题吗？", options: ["关于", "对", "为了"], answer: "关于" },
          { words: ["关于", "这个工作", "还有", "什么问题吗"], en: "Any questions about this job?" },
        ],
      },
    ],
  },
  {
    n: 19,
    title: "你没看出来吗",
    points: [
      {
        title: "Extended meanings of direction complements",
        pattern: "V + 出来 / 起来 / 下来",
        explain: "出来 can mean recognize, 起来 can mean recall or start, and 下来 can mean calm down or stop.",
        examples: [
          ["你没看出来吗？他是小刚啊。", "Didn't you recognize him? It's Xiaogang."],
          ["我也想起来了。", "I remember now."],
          ["只要他爸爸学小鸟叫，她马上就安静下来了。", "As soon as her dad imitates a bird, she calms down."],
        ],
        quiz: [
          { q: "他是小刚啊，你没看___吗？", options: ["出来", "起来", "下来"], answer: "出来" },
          { words: ["我", "也", "想起来", "了"], en: "I remember now too." },
        ],
      },
      {
        title: "使, 叫 and 让",
        pattern: "A 使 / 叫 / 让 B + V / Adj",
        explain: "All three mean make or let. 使 is more formal; 叫 and 让 are everyday.",
        examples: [
          ["这样可以使她的脸看上去漂亮一些。", "This makes her face look prettier."],
          ["我想快点儿把照片发给大家，叫朋友们也高兴高兴。", "I want to send everyone the photos to make my friends happy too."],
        ],
        quiz: [
          { q: "穿运动服___他更年轻。", options: ["让", "给", "被"], answer: "让" },
          { words: ["这样", "可以", "使她的脸", "看上去漂亮一些"], en: "This makes her face look prettier." },
        ],
      },
    ],
  },
  {
    n: 20,
    title: "我被他影响了",
    points: [
      {
        title: "The 被 sentence",
        pattern: "A 被 B + V + other",
        explain: "A receives the action and B does it. The verb usually has something after it, like 了 or a result.",
        examples: [
          ["我的照相机被谁拿走了？", "Who took my camera?"],
          ["我被他影响的。", "I've been influenced by him."],
          ["我们经常被别人认错。", "People often mistake us for each other."],
        ],
        quiz: [
          { q: "我的照相机___谁拿走了？", options: ["被", "把", "对"], answer: "被" },
          { words: ["我们", "经常", "被别人", "认错"], en: "People often mix us up." },
        ],
      },
      {
        title: "只有……才……",
        pattern: "只有 + condition , 才 + result",
        explain: "Only if A happens can B happen. Compare 只要……就, where A is enough.",
        examples: [
          ["只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。", "Only your parents can tell which is the older brother."],
          ["看来只有爱，才能让人有变化。", "It seems only love can change a person."],
        ],
        quiz: [
          { q: "只有你们的爸爸妈妈___能分出来。", options: ["才", "就", "都"], answer: "才" },
          { words: ["只有", "多练习", "才能", "提高水平"], en: "Only by practising can you improve." },
        ],
      },
    ],
  },
];

export default hsk3;
