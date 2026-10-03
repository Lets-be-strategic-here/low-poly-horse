/* Researched physical and running-style quirks of the roster horses, keyed by horse id (data/horses.js).
   A classic script so index.html still opens from file://. Built from the quirk-research workflow (research/workflows/
   horse-quirk-research.js, 3 Oct 2026): 12 researchers covered all 152 roster horses from Japanese and English sources,
   then a skeptic re-read every cited page; 318 quirks on 122 horses survived (verified or adjusted), none were
   unsupported. Full evidence with the exact quotes: research/quirks/quirks-verified.json; overview: research/quirks/README.md.
   conf: build, run: running style (ranges and meanings: CONF_CONTROLS / RUN_CONTROLS in index.html; 1 or 0 = an average
   Thoroughbred). When several sources set the same value, it is their mean. notes: what the horse was known for, with
   its source, shown on the horse card ("Known for"); notes without a param fit no control yet.
   Precedence: build default < quirks < the horse's own conf / run in data/horses.js < the viewer's sliders. */

window.QUIRKS = {
  // #2 Darley Arabian ダーレーアラビアン
  "darley-arabian": {
    notes: [
      {"text":"Coat markings, not body shape. Thomas Darley's 1703 letter describes a bay with an unusually large blaze down the face ('something of the largest') and white on the near fore…","source":"https://web.archive.org/web/20121112000657/http://www.bloodlines.net/TB/Bios/DarleyArabian.htm","param":null},
    ],
  },
  // #3 Godolphin Barb ゴドルフィンバルブ
  "godolphin-barb": {
    conf: {crest: 1.4, ears: 1.15, earSet: 0.8, earTilt: 0.6, hindquarters: 1.13, tailSet: 0.7},
    notes: [
      {"text":"High, arched, heavy crest. English Wikipedia (citing Whyte, 1840) calls it 'unnaturally high', and Berenger, who saw him, said 'his crest was high'. The very oversized crest…","source":"https://en.wikipedia.org/wiki/Godolphin_Arabian","param":"conf.crest"},
      {"text":"Large ears. The vet Osmer noted the 'plainness of his head and ears', and the Morier portrait, the only one painted from life, shows large ears.","source":"https://web.archive.org/web/20130305160307/http://www.bloodlines.net/TB/Bios/GodolphinArabian.htm","param":"conf.ears"},
      {"text":"Wide-set ears. Richard Berenger (Gentleman of the Horse to George III) described the roots of the ears as wide apart.","source":"https://web.archive.org/web/20130305160307/http://www.bloodlines.net/TB/Bios/GodolphinArabian.htm","param":"conf.earSet"},
      {"text":"Lop ears that droop noticeably outward.","source":"https://web.archive.org/web/20130305160307/http://www.bloodlines.net/TB/Bios/GodolphinArabian.htm","param":"conf.earTilt"},
      {"text":"Very powerful, broad hindquarters with high, broad loins.","source":"https://www.tbheritage.com/Portraits/GodolphinArabian.html","param":"conf.hindquarters"},
      {"text":"High-set tail, carried in the Arabian style.","source":"https://www.tbheritage.com/Portraits/GodolphinArabian.html","param":"conf.tailSet"},
      {"text":"Very short back behind deep shoulders that are well laid back.","source":"https://www.tbheritage.com/Portraits/GodolphinArabian.html","param":null},
      {"text":"Slightly over at the knees (knees sprung forward), with heavy shoulders.","source":"https://web.archive.org/web/20130305160307/http://www.bloodlines.net/TB/Bios/GodolphinArabian.htm","param":null},
    ],
  },
  // #4 Saint Lite セントライト
  "saint-lite": {
    conf: {head: 1.07, hoof: 1.08, barrel: 1.06},
    notes: [
      {"text":"Very long, plain face. Takeda Bungo, Shinzan's trainer, who remembered him from that era, said his face was long, 'really horse-like' [顔は長くて、ホント、馬みたい]. His jockey Konishi Kizo…","source":"https://ja.wikipedia.org/wiki/セントライト","param":"conf.head"},
      {"text":"Big hooves. JRA board member Aoki Eiichi remembered the huge black horse plodding onto the track on big hooves 'like a bull in the dark' [大きな蹄で、ノッシノッシ].","source":"https://ja.wikipedia.org/wiki/セントライト","param":"conf.hoof"},
      {"text":"Large, stocky, unrefined build (166 cm at the withers, about 500 kg+, very big for his era).","source":"https://ja.wikipedia.org/wiki/セントライト","param":"conf.barrel"},
      {"text":"Upright (steep) shoulder [肩は立ってて].","source":"https://ja.wikipedia.org/wiki/セントライト","param":null},
      {"text":"Heavy, thudding, ponderous running action ('dosun, dosun') [ドスン、ドスンて走り方], unlike the light, quick Minami More.","source":"https://ja.wikipedia.org/wiki/セントライト","param":null},
    ],
  },
  // #5 Speed Symboli スピードシンボリ
  "speed-symboli": {
    notes: [
      {"text":"Long body and long legs, a typical stayer's build [胴長・脚長という典型的なステイヤーの体型].","source":"https://ja.wikipedia.org/wiki/スピードシンボリ","param":null},
      {"text":"As a foal and yearling he was very long-legged, tall and slender with a shallow chest [胸の薄い細身].","source":"https://ja.wikipedia.org/wiki/スピードシンボリ","param":null},
      {"text":"Habit of raising his head and neck to look around [首をあげて周りを確かめるしぐさ].","source":"https://ja.wikipedia.org/wiki/シンボリルドルフ","param":null},
      {"text":"After the finish he habitually neighed loudly with tears running, as if complaining about being made to race.","source":"https://ja.wikipedia.org/wiki/スピードシンボリ","param":null},
    ],
  },
  // #6 Haiseiko ハイセイコー
  "haiseiko": {
    conf: {bone: 1.07},
    run: {headCarriage: -0.45, stride: 1.1, hindDrive: 1.18, bodyLow: 0.55, kneeAction: 1.15},
    notes: [
      {"text":"Ran with the neck lowered, pushing straight ahead [首を下げたまま走る / クビを少し下げて].","source":"https://ja.wikipedia.org/wiki/ハイセイコー","param":"run.headCarriage"},
      {"text":"Very long stride: the press reported 8 m per stride [ひと跳び8メートル].","source":"https://ja.wikipedia.org/wiki/ハイセイコー","param":"run.stride"},
      {"text":"Very strong hind legs; he ran on power rather than smoothness and wore out his hind shoes in about a week [後脚の力が強く].","source":"https://ja.wikipedia.org/wiki/ハイセイコー","param":"run.hindDrive"},
      {"text":"Body sank lower when he reached top speed [ぐーんと躰が沈みこんでいく], in jockey Masuzawa's words.","source":"https://ja.wikipedia.org/wiki/ハイセイコー","param":"run.bodyLow"},
      {"text":"Heavy bone. Cannon circumference was measured at 21.5 cm in December 1974 (管囲21.5cm).","source":"https://ja.wikipedia.org/wiki/ハイセイコー","param":"conf.bone"},
      {"text":"Pulling, digging foreleg action [かき込むような走り方].","source":"https://ja.wikipedia.org/wiki/ハイセイコー","param":"run.kneeAction"},
      {"text":"Short below the knee (short cannons), which made him look less refined [膝下が短く].","source":"https://ja.wikipedia.org/wiki/ハイセイコー","param":null},
      {"text":"Huge, short-coupled frame: 171 cm at the withers, body length 163 cm, girth 188 cm, over 650 kg as a stallion.","source":"https://ja.wikipedia.org/wiki/ハイセイコー","param":null},
      {"text":"Occasionally played with his tongue while on the bit, so he raced in a bit lifter [ハミ吊り] from the Satsuki Sho on.","source":"https://ja.wikipedia.org/wiki/ハイセイコー","param":null},
    ],
  },
  // #7 Maruzensky マルゼンスキー
  "maruzensky": {
    run: {bodyLow: 0.6, kneeAction: 1.2, stride: 1.06},
    notes: [
      {"text":"Low centre of gravity; he sank lower as he accelerated [重心が低いから加速するとスーッと沈む], according to his jockey Nakanowatari.","source":"https://ja.wikipedia.org/wiki/マルゼンスキー","param":"run.bodyLow"},
      {"text":"Exceptionally powerful pulling foreleg action [掻き込み]: rivals said clods of dirt came flying back, and on heavy ground he threw mud about three times higher than other horses.","source":"https://ja.wikipedia.org/wiki/マルゼンスキー","param":"run.kneeAction"},
      {"text":"Big stride [跳びも大きい], with a very fast return of the extended hind leg.","source":"https://ja.wikipedia.org/wiki/マルゼンスキー","param":"run.stride"},
      {"text":"Toed-out forelegs [外向肢勢]: below the knee the forelegs bent outward, forming an 'A' seen from the front.","source":"https://ja.wikipedia.org/wiki/マルゼンスキー","param":null},
    ],
  },
  // #8 Katsuragi Ace カツラギエース
  "katsuragi-ace": {
    notes: [
      {"text":"Long-legged, lanky, unimpressive build [脚が長くひょろっとして].","source":"https://ja.wikipedia.org/wiki/カツラギエース","param":null},
      {"text":"Wore a custom white hood [白い覆面 / メンコ] in the 1984 Japan Cup, his first time in a hood, with extra-thick leather over the ears to act as earplugs against the crowd.","source":"https://hochi.news/articles/20181121-OHT1T50272.html?page=1","param":null},
      {"text":"Very bit-sensitive and keen to pull forward, so in the Japan Cup he was ridden on white reins about 30 cm longer than normal, to keep the bit off his mouth.","source":"https://hochi.news/articles/20181121-OHT1T50272.html?page=1","param":null},
    ],
  },
  // #9 Mr. C.B. ミスターシービー
  "mr-cb": {
    conf: {bone: 0.93},
    run: {bodyLow: 0.6},
    notes: [
      {"text":"His whole body sank lower as his speed built [自然に身体が沈み込んでいく], according to jockey Yoshinaga.","source":"https://ja.wikipedia.org/wiki/ミスターシービー","param":"run.bodyLow"},
      {"text":"Small, delicate frame (450-465 kg).","source":"https://ja.wikipedia.org/wiki/ミスターシービー","param":"conf.bone"},
      {"text":"Springy, bouncing 'rubber-ball' action [ゴムまりのような弾むような走り方 / 全身がバネのよう].","source":"https://ja.wikipedia.org/wiki/ミスターシービー","param":null},
      {"text":"His signature tack was a bit lifter [ハミ吊り], the three-pronged device on his face that kept his tongue from going over the bit.","source":"https://ja.wikipedia.org/wiki/ミスターシービー","param":null},
      {"text":"Thin, weak hoof walls [蹄が薄かった]; he raced and trained in aluminium shoes.","source":"https://ja.wikipedia.org/wiki/ミスターシービー","param":null},
      {"text":"Striking, 'human-like' eyes. Jockey Yoshinaga called them his greatest charm and said he never met another horse with eyes like that. The beauty of his eyes was said to pass to…","source":"https://ja.wikipedia.org/wiki/ミスターシービー","param":null},
    ],
  },
  // #10 Symboli Rudolf シンボリルドルフ
  "symboli-rudolf": {
    run: {stride: 1.1, bodyLow: 0.35},
    notes: [
      {"text":"Huge stride under acceleration: 8.70 m in the Derby straight, against an average of 7.30 m for Thoroughbreds of the time.","source":"https://keiba.sponichi.co.jp/news/20200526s00004048363000c","param":"run.stride"},
      {"text":"Lowered his centre of gravity as he shifted into top gear in the 1984 Derby straight [重心を低く下げて].","source":"https://keiba.sponichi.co.jp/news/20200526s00004048363000c","param":"run.bodyLow"},
      {"text":"Habit, inherited from grandsire Speed Symboli, of raising his head and neck to check his surroundings [首をあげて周りを確かめるしぐさ].","source":"https://ja.wikipedia.org/wiki/シンボリルドルフ","param":null},
      {"text":"Strong lead-leg preference: jockey Okabe said he was 'left-handed' [左利き].","source":"https://ja.wikipedia.org/wiki/シンボリルドルフ","param":null},
    ],
  },
  // #11 Sirius Symboli シリウスシンボリ
  "sirius-symboli": {
    notes: [
      {"text":"A known kicker who was supposed to wear a red kicker's ribbon on his tail [蹴る可能性を示す赤いリボンを尻尾に].","source":"https://ja.wikipedia.org/wiki/シリウスシンボリ","param":null},
    ],
  },
  // #12 Mejiro Ramonu メジロラモーヌ
  "mejiro-ramonu": {
    conf: {barrel: 1.07},
    notes: [
      {"text":"Large belly and ribcage [大きな腹袋].","source":"https://ja.wikipedia.org/wiki/メジロラモーヌ","param":"conf.barrel"},
    ],
  },
  // #13 Gold City ゴールドシチー
  "gold-city": {
    notes: [
      {"text":"Flaxen chestnut [尾花栗毛] with a golden mane and tail, inherited from his sire Viceregal.","source":"https://ja.wikipedia.org/wiki/ゴールドシチー","param":null},
    ],
  },
  // #14 Inari One イナリワン
  "inari-one": {
    notes: [
      {"text":"Small, compact, lightweight build that was still very powerful [小柄ながら力も非常に強く / 軽くてコンパクトなボディー].","source":"https://ja.wikipedia.org/wiki/イナリワン","param":null},
      {"text":"Ran with an action that used the whole body, so he did not look small at speed (jockey Masato Shibata) [体全体を使うフォーム].","source":"https://ja.wikipedia.org/wiki/イナリワン","param":null},
    ],
  },
  // #15 Tamamo Cross タマモクロス
  "tamamo-cross": {
    conf: {bone: 0.92},
    run: {bodyLow: 0.6, headCarriage: -0.5},
    notes: [
      {"text":"Once he matured he ran with a low, sinking footwork.","source":"https://ja.wikipedia.org/wiki/タマモクロス","param":"run.bodyLow"},
      {"text":"His aggressive action never lifted the head and neck until the finish line, and was likened to 'a big dog running' [ゴールまで絶対に首を上げない / 大きな犬を思わせる走法].","source":"https://ja.wikipedia.org/wiki/タマモクロス","param":"run.headCarriage"},
      {"text":"Slight, delicate, small frame; his trainer Obara said he looked 'like a girl' [華奢で小柄な馬体].","source":"https://ja.wikipedia.org/wiki/タマモクロス","param":"conf.bone"},
      {"text":"His legs looked long for his small body; their length was the only thing that stood out [脚の長さだけが目立つ].","source":"https://ja.wikipedia.org/wiki/タマモクロス","param":null},
      {"text":"Front legs toed out, which was noted as a conformation fault [前脚に外向].","source":"https://ja.wikipedia.org/wiki/タマモクロス","param":null},
    ],
  },
  // #16 Bamboo Memory バンブーメモリー
  "bamboo-memory": {
    notes: [
      {"text":"A big-bodied, strong-willed horse, described as 'the boss of the stable' [体が大きく].","source":"https://number.bunshun.jp/articles/-/830964","param":null},
      {"text":"Always keen to go and pulled very hard.","source":"https://ja.wikipedia.org/wiki/バンブーメモリー","param":null},
    ],
  },
  // #17 Mejiro Ardan メジロアルダン
  "mejiro-ardan": {
    run: {bodyLow: 0.7, kneeAction: 1.2},
    notes: [
      {"text":"His distinctive action sank his big (500 kg+) body to keep a low centre of gravity, which earned him the nickname 'heavy tank'.","source":"https://news.yahoo.co.jp/expert/articles/f14fdf46b5fa9f6b0218a6fb4cb38e2794ef0932","param":"run.bodyLow"},
      {"text":"Threw the forelegs out with a pawing, ground-raking motion [前肢をかき込むように繰り出す] (掻き込み).","source":"https://news.yahoo.co.jp/expert/articles/f14fdf46b5fa9f6b0218a6fb4cb38e2794ef0932","param":"run.kneeAction"},
      {"text":"A big, heavy-framed horse of over 500 kg [500キロを超える大型馬].","source":"https://news.yahoo.co.jp/expert/articles/f14fdf46b5fa9f6b0218a6fb4cb38e2794ef0932","param":null},
    ],
  },
  // #18 Oguri Cap オグリキャップ
  "oguri-cap": {
    conf: {hoof: 1.1, hindquarters: 1.1},
    run: {headCarriage: -0.9, bodyLow: 0.8, neckPump: 1.3, stride: 1.04, earsAtSpeed: -0.7},
    notes: [
      {"text":"Raced with a very low neck and head: he sank the neck down as he ran.","source":"https://ja.wikipedia.org/wiki/オグリキャップ","param":"run.headCarriage"},
      {"text":"Carried his body low and parallel to the ground, so from his Kasamatsu days he was called 'the horse that crawls along the ground'.","source":"https://ja.wikipedia.org/wiki/オグリキャップ","param":"run.bodyLow"},
      {"text":"Made big use of his neck, balancing front to back as he ran [首を良く使う走法].","source":"https://ja.wikipedia.org/wiki/オグリキャップ","param":"run.neckPump"},
      {"text":"Very strong kick. In each stride he reached the forelegs out to their full extent and floated forward, gaining about 20-30 cm per stride on an ordinary horse…","source":"https://ja.wikipedia.org/wiki/オグリキャップ","param":"run.stride"},
      {"text":"Very large hooves with thin soles, according to trainer Setoguchi [蹄は「ものすごく大きくて、底が薄い」].","source":"https://ja.wikipedia.org/wiki/オグリキャップ","param":"conf.hoof"},
      {"text":"Powerful inner thighs and hindquarters 'solid like a carthorse'.","source":"https://ja.wikipedia.org/wiki/オグリキャップ","param":"conf.hindquarters"},
      {"text":"Ran with his ears pricked up. Jockey Yukio Okabe, after the 1988 Arima Kinen: 'this horse runs with his ears up; maybe he is enjoying the race' [耳を立てて走る].","source":"https://ja.wikipedia.org/wiki/オグリキャップ","param":"run.earsAtSpeed"},
      {"text":"Extremely strong 'raking' of the track with the forefeet.","source":"https://ja.wikipedia.org/wiki/オグリキャップ","param":null},
      {"text":"Right foreleg toed out from birth [生まれつき外向していた右脚].","source":"https://ja.wikipedia.org/wiki/オグリキャップ","param":null},
      {"text":"Preferred to lead on the right leg, so he ran better right-handed.","source":"https://ja.wikipedia.org/wiki/オグリキャップ","param":null},
      {"text":"Broad, well-developed jaw/jowls (あご張りがいい), which his Kasamatsu trainer linked to his big appetite.","source":"https://www.gifu-np.co.jp/articles/-/529044","param":null},
    ],
  },
  // #19 Sakura Chiyono O サクラチヨノオー
  "sakura-chiyono-o": {
    notes: [
      {"text":"Longer in the body (barrel/back) than his full brother Sakura Toko, which made his breeder think he could stay longer distances [胴が長く].","source":"https://ja.wikipedia.org/wiki/サクラチヨノオー","param":null},
    ],
  },
  // #20 Super Creek スーパークリーク
  "super-creek": {
    conf: {head: 1.12},
    notes: [
      {"text":"Well known for having a big face; manga artist Miho Yoshida used it as a gag several times, including a 'giant-face showdown' with Biwa Hayahide [顔が大きい].","source":"https://ja.wikipedia.org/wiki/スーパークリーク","param":"conf.head"},
      {"text":"Left foreleg toed out and crooked from foalhood, which caused recurring leg trouble [左前脚が外向 / 左前脚に歪み].","source":"https://ja.wikipedia.org/wiki/スーパークリーク","param":null},
    ],
  },
  // #21 Yaeno Muteki ヤエノムテキ
  "yaeno-muteki": {
    notes: [
      {"text":"Big and muscular even as a foal.","source":"https://ja.wikipedia.org/wiki/ヤエノムテキ","param":null},
      {"text":"Marked with four white socks and a blaze [四白流星].","source":"https://ja.wikipedia.org/wiki/ヤエノムテキ","param":null},
    ],
  },
  // #22 Daiichi Ruby ダイイチルビー
  "daiichi-ruby": {
    notes: [
      {"text":"Front hooves did not match. The left fore was normal, but the right fore was only the size of an adult's fist and almost round [右前のツメが大人の拳ひと握りしかなく丸に近い形]. Kept as null because…","source":"https://ja.wikipedia.org/wiki/ダイイチルビー","param":null},
    ],
  },
  // #23 Daitaku Helios ダイタクヘリオス
  "daitaku-helios": {
    run: {headCarriage: 0.8},
    notes: [
      {"text":"Had a natural habit of running with his neck held high.","source":"https://ja.wikipedia.org/wiki/ダイタクヘリオス","param":"run.headCarriage"},
      {"text":"Ran at the front with his mouth wide open, which earned him the nickname 'the horse that laughs as he runs' [口を割って走る / 笑いながら走る馬].","source":"https://ja.wikipedia.org/wiki/ダイタクヘリオス","param":null},
      {"text":"Got his tongue over the bit and stuck it out while racing [ハミを越えて舌を出す / 舌を越す].","source":"https://ja.wikipedia.org/wiki/ダイタクヘリオス","param":null},
      {"text":"Always wanted to go left, so he drifted out on right-handed tracks and in on left-handed ones [斜行].","source":"https://ja.wikipedia.org/wiki/ダイタクヘリオス","param":null},
      {"text":"Called 'the big dark-bay body' in a stud-days anecdote [黒鹿毛の巨体].","source":"https://ja.wikipedia.org/wiki/ダイタクヘリオス","param":null},
    ],
  },
  // #25 Ines Fujin アイネスフウジン
  "ines-fujin": {
    conf: {hindquarters: 1.12, chestWidth: 0.95},
    run: {hindDrive: 1.18},
    notes: [
      {"text":"Well-developed, powerful hindquarters [後駆（トモ）は充実していた].","source":"https://ja.wikipedia.org/wiki/アイネスフウジン","param":"conf.hindquarters"},
      {"text":"Exceptionally strong hind push.","source":"https://sarabure.jp/articles/nishiduka/29119","param":"run.hindDrive"},
      {"text":"Underdeveloped, weak forehand compared with his strong hindquarters.","source":"https://ja.wikipedia.org/wiki/アイネスフウジン","param":"conf.chestWidth"},
      {"text":"Because the front and back were out of balance, he ran 'hanging on the bit', leaning his weight into the rider's hands.","source":"https://ja.wikipedia.org/wiki/アイネスフウジン","param":null},
      {"text":"Large horse, 504 kg at his debut [504kgと大柄な馬].","source":"https://ja.wikipedia.org/wiki/アイネスフウジン","param":null},
    ],
  },
  // #26 Mejiro McQueen メジロマックイーン
  "mejiro-mcqueen": {
    conf: {head: 0.95},
    notes: [
      {"text":"Handsome, refined face. Yutaka Take praised his face and added that 'a strong horse's face is always well-proportioned and small' [顔がいい / 強い馬の顔は必ず整っているし、小さい]. Trainer Ikee's…","source":"https://ja.wikipedia.org/wiki/メジロマックイーン","param":"conf.head"},
      {"text":"Big-framed, unlike his dam and brother; his size contributed to sore shins before his debut [母や兄に似ず体が大きかった / ガラ（体格）のある].","source":"https://ja.wikipedia.org/wiki/メジロマックイーン","param":null},
      {"text":"Swaggering walk, 'like a man walking with his shoulders cutting the wind' (trainer Ikee) [肩で風切って歩いている].","source":"https://ja.wikipedia.org/wiki/メジロマックイーン","param":null},
    ],
  },
  // #27 Mejiro Palmer メジロパーマー
  "mejiro-palmer": {
    conf: {bone: 1.08, hindquarters: 1.05},
    notes: [
      {"text":"Heavy-boned: after his successes it was found he had the largest cannon circumference (front-leg girth between knee and fetlock) of his 1987 Mejiro-bred crop, the crop that…","source":"https://ja.wikipedia.org/wiki/メジロパーマー","param":"conf.bone"},
      {"text":"One theory says his jumping (steeplechase) training built up the muscles of his hindquarters, especially around the loins.","source":"https://ja.wikipedia.org/wiki/メジロパーマー","param":"conf.hindquarters"},
    ],
  },
  // #28 Mejiro Ryan メジロライアン
  "mejiro-ryan": {
    conf: {crest: 1.2, bone: 1.07, chestWidth: 1.06},
    notes: [
      {"text":"Thick, heavy neck: trainer Okudaira, comparing him with the handsome Mejiro Ardan, found him unrefined, with a thick neck and thick legs.","source":"https://ja.wikipedia.org/wiki/メジロライアン","param":"conf.crest"},
      {"text":"Thick legs and heavy bone, from the same trainer remark.","source":"https://ja.wikipedia.org/wiki/メジロライアン","param":"conf.bone"},
      {"text":"Long-legged, broad, imposing frame as a youngster.","source":"https://ja.wikipedia.org/wiki/メジロライアン","param":"conf.chestWidth"},
      {"text":"Mane kept cropped short, the 'Ryan cut'.","source":"https://ja.wikipedia.org/wiki/メジロライアン","param":null},
    ],
  },
  // #29 K.S.Miracle ケイエスミラクル
  "ks-miracle": {
    conf: {profile: 0.3},
    notes: [
      {"text":"Unusual forehead profile: thoroughbreds of the time usually had a slight hollow between the eyes, but his was flat to slightly bulging.","source":"https://ja.wikipedia.org/wiki/ケイエスミラクル","param":"conf.profile"},
      {"text":"Hooves with ridges along the hoof wall and small pits along them.","source":"https://ja.wikipedia.org/wiki/ケイエスミラクル","param":null},
    ],
  },
  // #31 Tokai Teio トウカイテイオー
  "tokai-teio": {
    conf: {barrel: 0.95},
    run: {kneeAction: 1.3, stride: 1.1, hindDrive: 0.95},
    notes: [
      {"text":"Extremely high foreleg action at speed: unlike ordinary horses, his forelegs swung up as high as the shoulder.","source":"https://ja.wikipedia.org/wiki/トウカイテイオー","param":"run.kneeAction"},
      {"text":"Stride runner: elastic muscles let him stretch his stride a long way and recover quickly.","source":"https://ja.wikipedia.org/wiki/トウカイテイオー","param":"run.stride"},
      {"text":"Slim build in his early racing days: Yasuda spoke of his 'slim frame', and as a foal he was long-legged and delicate.","source":"https://ja.wikipedia.org/wiki/トウカイテイオー","param":"conf.barrel"},
      {"text":"Hind end felt less powerful than the front early in his career: jockey Tahara said the hindquarters were a little lacking next to the superb forehand ('forelegs like Mercedes…","source":"https://ja.wikipedia.org/wiki/トウカイテイオー","param":"run.hindDrive"},
      {"text":"The 'Teio walk' / 'Teio step'. Before races he walked diagonally forward, lifting his knees high and bouncing rhythmically, with very long, supple pasterns and a hind fetlock…","source":"https://ja.wikipedia.org/wiki/トウカイテイオー","param":null},
      {"text":"Long forelock was one of his trademarks while racing, and the stud deliberately kept it long.","source":"https://ja.wikipedia.org/wiki/トウカイテイオー","param":null},
    ],
  },
  // #32 Twin Turbo ツインターボ
  "twin-turbo": {
    notes: [
      {"text":"Very small horse who ate little, though springy from a young age.","source":"https://ja.wikipedia.org/wiki/ツインターボ_(競走馬)","param":null},
    ],
  },
  // #33 Yamanin Zephyr ヤマニンゼファー
  "yamanin-zephyr": {
    conf: {hindquarters: 1.08},
    notes: [
      {"text":"Well-developed fore- and hindquarters typical of a sprinter, from foalhood; the breeder had mated for a sprinter.","source":"https://ja.wikipedia.org/wiki/ヤマニンゼファー","param":"conf.hindquarters"},
      {"text":"Short-coupled (compact, short body/back), the classic sprinter type.","source":"https://ja.wikipedia.org/wiki/ヤマニンゼファー","param":null},
      {"text":"A small horse, per Suzuki Shiori, the Nishikioka Farm staff member who cared for him in retirement.","source":"https://uma-furusato.com/column/85247.html","param":null},
    ],
  },
  // #35 Mihono Bourbon ミホノブルボン
  "mihono-bourbon": {
    conf: {hindquarters: 1.13},
    notes: [
      {"text":"Massive, thickly muscled hindquarters built by hill-gallop (坂路) training.","source":"https://ja.wikipedia.org/wiki/ミホノブルボン","param":"conf.hindquarters"},
      {"text":"Heavily muscled, 'forged' body overall.","source":"https://ja.wikipedia.org/wiki/ミホノブルボン","param":null},
    ],
  },
  // #36 Nishino Flower ニシノフラワー
  "nishino-flower": {
    conf: {chestWidth: 0.95},
    notes: [
      {"text":"Narrow-bodied: trainer Matsuda remembered her as 'a Bambi-like horse, all spindly long legs and no width' when he inspected her as a foal about a month old.","source":"https://ja.wikipedia.org/wiki/ニシノフラワー","param":"conf.chestWidth"},
      {"text":"Small, slim and very long-legged, with her legs growing longer still in training.","source":"https://ja.wikipedia.org/wiki/ニシノフラワー","param":null},
    ],
  },
  // #37 Rice Shower ライスシャワー
  "rice-shower": {
    notes: [
      {"text":"Small for a colt but very well balanced, per trainer Iizuka.","source":"https://ja.wikipedia.org/wiki/ライスシャワー","param":null},
    ],
  },
  // #38 Sakura Bakushin O サクラバクシンオー
  "sakura-bakushin-o": {
    notes: [
      {"text":"A more muscular version of his sire Sakura Yutaka O, with the same suppleness (per Fujiwara Goro, breeder of the sire).","source":"https://ja.wikipedia.org/wiki/サクラバクシンオー","param":null},
    ],
  },
  // #39 Biwa Hayahide ビワハヤヒデ
  "biwa-hayahide": {
    conf: {head: 1.15, bone: 1.04},
    run: {bodyLow: 0.35},
    notes: [
      {"text":"Famously big, long head, often joked about.","source":"https://ja.wikipedia.org/wiki/ビワハヤヒデ","param":"conf.head"},
      {"text":"Thick legs as a young horse: trainer Hamada, inspecting him in his foal year, saw him as unfinished, big-headed and thick-legged, 'outside the standard'.","source":"https://ja.wikipedia.org/wiki/ビワハヤヒデ","param":"conf.bone"},
      {"text":"Low centre of gravity in his running once he filled out at 4 (old age count; Kikuka Sho), compared to Tanino Chikara by Yamada Masato.","source":"https://ja.wikipedia.org/wiki/ビワハヤヒデ","param":"run.bodyLow"},
    ],
  },
  // #40 Narita Taishin ナリタタイシン
  "narita-taishin": {
    notes: [
      {"text":"Light racing weight. His race-day weights in the race-record table run from 416 to 446 kg (馬体重 416–446kg). No source I fetched calls him small in prose. A 2011 farm visit put…","source":"https://ja.wikipedia.org/wiki/ナリタタイシン","param":null},
    ],
  },
  // #41 North Flight ノースフライト
  "north-flight": {
    notes: [
      {"text":"A big, well-balanced filly. Yushun calls her build 大柄でバランスのよい好馬体, and her breeder said that at birth she had such a good frame he 'almost thought she was a colt'…","source":"https://www.yushunweb.jp/story/story71/2567/","param":null},
    ],
  },
  // #43 Sakura Chitose O サクラチトセオー
  "sakura-chitose-o": {
    notes: [
      {"text":"Drifted inward while finishing, in several races: the 1994 Nakayama Kinen (his jockey was suspended for it), the 1995 Yasuda Kinen and the 1995 Tenno Sho (Autumn) [内側に斜行 /…","source":"https://ja.wikipedia.org/wiki/サクラチトセオー","param":null},
    ],
  },
  // #44 Winning Ticket ウイニングチケット
  "winning-ticket": {
    notes: [
      {"text":"Long-bodied as a newborn foal. Writer Tamaki Abe (優駿, June 2004) said the newborn's long-bodied shape and frame were exactly like his sire Tony Bin's [胴長の体形や骨格が父トニービンに「そっくり」].…","source":"https://ja.wikipedia.org/wiki/ウイニングチケット","param":null},
    ],
  },
  // #45 Yukino Bijin ユキノビジン
  "yukino-bijin": {
    notes: [
      {"text":"Wore a pure-white, ribbon-like braid in her mane [純白のリボン風の編み込みを鬣に].","source":"https://ja.wikipedia.org/wiki/ユキノビジン","param":null},
      {"text":"Raced in white tack [白い馬装], which set off her chestnut body.","source":"https://uma-furusato.com/column/detail/_id_59255","param":null},
    ],
  },
  // #46 Biko Pegasus ビコーペガサス
  "biko-pegasus": {
    notes: [
      {"text":"Small-bodied: never weighed more than 442 kg [最大でも442キロの小柄な馬体].","source":"https://ja.wikipedia.org/wiki/ビコーペガサス","param":null},
      {"text":"Crooked legs [曲がった脚]. Together with his small frame, this is why he sold cheaply as a 2-year-old and drew few mares at stud. This leg conformation fault has no parameter.","source":"https://ja.wikipedia.org/wiki/ビコーペガサス","param":null},
    ],
  },
  // #48 Narita Brian ナリタブライアン
  "narita-brian": {
    conf: {hoof: 1.03},
    run: {bodyLow: 0.35},
    notes: [
      {"text":"His jockey Minai felt that when Narita Brian shifted up into a fast gallop in training, he dropped his centre of gravity: 'the front half of the body drops, then it surges…","source":"https://ja.wikipedia.org/wiki/ナリタブライアン","param":"run.bodyLow"},
      {"text":"His farrier said all four hooves were almost the same size, whereas hind hooves are normally smaller.","source":"https://ja.wikipedia.org/wiki/ナリタブライアン","param":"conf.hoof"},
      {"text":"Raced in a white shadow roll over the nose, fitted to stop him shying at his own shadow, and was nicknamed the 'Shadow-roll Monster' [シャドーロールの怪物].","source":"https://ja.wikipedia.org/wiki/ナリタブライアン","param":null},
    ],
  },
  // #49 Sakura Laurel サクラローレル
  "sakura-laurel": {
    notes: [
      {"text":"Heavy, draft-type build: Keijiro Okawa said he looked more like a horse for pulling a carriage than a racehorse [馬車でも引いていた方が似合うような体つき].","source":"https://ja.wikipedia.org/wiki/サクラローレル","param":null},
      {"text":"Large nostrils, noted by trainer Sakai at birth along with very thin, fine skin [鼻の穴が大きくて].","source":"https://ja.wikipedia.org/wiki/サクラローレル","param":null},
      {"text":"As a youngster at the farm he was gangly ('thin, long and ungainly') and walked lifting his hind legs high like a chicken [鳥足].","source":"https://ja.wikipedia.org/wiki/サクラローレル","param":null},
    ],
  },
  // #50 Samson Big サムソンビッグ
  "samson-big": {
    notes: [
      {"text":"A small, gentle horse, despite his imposing name [小柄なおとなしい馬].","source":"https://ja.wikipedia.org/wiki/サムソンビッグ","param":null},
    ],
  },
  // #51 Fuji Kiseki フジキセキ
  "fuji-kiseki": {
    run: {kneeAction: 1.2},
    notes: [
      {"text":"Unlike most Sunday Silence progeny, his forelegs came out stiffly and he ran with a pawing, digging 'kakikomi' action [前脚がかために出るタイプで、かき込む走法].","source":"https://ja.wikipedia.org/wiki/フジキセキ","param":"run.kneeAction"},
      {"text":"Muscular, with a lot of body volume, in contrast to Sunday Silence's generally slim, long-pasterned offspring [筋肉質で身体のボリュームもある馬].","source":"https://ja.wikipedia.org/wiki/フジキセキ","param":null},
      {"text":"As a 2-year-old he was keen and pulled hard in races, opening his mouth against the bit [口を割って行きたがる].","source":"https://www.yushunweb.jp/story/story73/2576/","param":null},
    ],
  },
  // #52 Genuine ジェニュイン
  "genuine": {
    notes: [
      {"text":"His trainer Matsuyama said that as a youngster he had a big skeletal frame, clearly different from other horses [骨格が大きく].","source":"https://ja.wikipedia.org/wiki/ジェニュイン_(競走馬)","param":null},
    ],
  },
  // #53 Hishi Akebono ヒシアケボノ
  "hishi-akebono": {
    notes: [
      {"text":"Exceptionally massive horse: raced at over 550 kg and won the 1995 Sprinters Stakes at 560 kg, the heaviest JRA G1 winner on record; later raced at 580-582 kg…","source":"https://ja.wikipedia.org/wiki/ヒシアケボノ","param":null},
    ],
  },
  // #54 Marvelous Sunday マーベラスサンデー
  "marvelous-sunday": {
    notes: [
      {"text":"Idled once in front: if he hit the lead too early he would ease off and look around (monomi), so Take held him in the pack until the last moment [ソラを使う癖 / モノ見をしてしまう /…","source":"https://news.netkeiba.com/?pid=news_view&no=234229","param":null},
      {"text":"Raced in a trademark red hood. It was hand-knitted by his groom so he could be spotted anywhere [赤いメンコ（覆面）がトレードマーク]. This is equipment, not anatomy, and fits the existing hood…","source":"https://ja.wikipedia.org/wiki/マーベラスサンデー","param":null},
    ],
  },
  // #55 Mayano Top Gun マヤノトップガン
  "mayano-top-gun": {
    run: {headCarriage: -0.3},
    notes: [
      {"text":"Carried his neck low. His breeder said people at the farm kept stroking his nose, so he lowered his head so often that it became a habit and his neck settled low [首が低かった /…","source":"https://ja.wikipedia.org/wiki/マヤノトップガン","param":"run.headCarriage"},
    ],
  },
  // #56 Air Groove エアグルーヴ
  "air-groove": {
    run: {stride: 1.05},
    notes: [
      {"text":"Long, free-reaching stride in the stretch, as described for her 1996 Oaks win [伸びやかなストライド].","source":"https://jra-van.jp/fun/memorial/1993109154.html","param":"run.stride"},
    ],
  },
  // #58 Shinko Windy シンコウウインディ
  "shinko-windy": {
    notes: [
      {"text":"Bit at rival horses during races.","source":"https://www.famitsu.com/news/202302/13292559.html","param":null},
      {"text":"Long-legged, eye-catching frame [脚長の好馬体 / 脚も長く、とても見栄えがする馬体].","source":"https://www.famitsu.com/news/202302/13292559.html","param":null},
      {"text":"Raced in blinkers from the 1997 Heian Stakes onward, to keep his mind on racing instead of on biting [平安Sからブリンカーを着用].","source":"https://news.netkeiba.com/?pid=news_view&no=222374","param":null},
    ],
  },
  // #59 Matikanefukukitaru マチカネフクキタル
  "matikanefukukitaru": {
    run: {headCarriage: 0.5},
    notes: [
      {"text":"Ran with his head carried high and would not take hold of the bit when he first went into training [頭を高くして走る、ハミを取らない].","source":"https://ja.wikipedia.org/wiki/マチカネフクキタル","param":"run.headCarriage"},
    ],
  },
  // #60 Mejiro Bright メジロブライト
  "mejiro-bright": {
    conf: {bone: 0.93},
    notes: [
      {"text":"Long, slender legs. Unlike his heavy-boned sire Mejiro Ryan, he had thin, long legs and a small frame [脚が細長く、小型な馬 / 父は骨太]. The source describes him around birth, so confidence…","source":"https://ja.wikipedia.org/wiki/メジロブライト","param":"conf.bone"},
      {"text":"Small horse overall, unlike his big sire [小柄].","source":"https://ja.wikipedia.org/wiki/メジロブライト","param":null},
    ],
  },
  // #61 Mejiro Dober メジロドーベル
  "mejiro-dober": {
    run: {headCarriage: 0.2},
    notes: [
      {"text":"Fought the rider at slow paces by running with her head flung up high, at the 1997 Tulip Sho and again at the 1998 Queen Elizabeth II Cup [首を高く上げながら走り / 首を上げて折り合いを欠いた].","source":"https://ja.wikipedia.org/wiki/メジロドーベル","param":"run.headCarriage"},
      {"text":"Gaped her mouth open and repeatedly tossed her head when pulling hard [口を割って何度も頭を上げる].","source":"https://www.yushunweb.jp/story/story64/2537/","param":null},
      {"text":"Short-coupled, speed-type build.","source":"https://ja.wikipedia.org/wiki/メジロドーベル","param":null},
    ],
  },
  // #62 Seeking the Pearl シーキングザパール
  "seeking-the-pearl": {
    notes: [
      {"text":"Large-framed. Arthur Hancock III recalled her as a big, splendid yearling [大型で素晴らしい馬]. This is a yearling description only. It is a candidate for an overall size parameter.","source":"https://ja.wikipedia.org/wiki/シーキングザパール","param":null},
    ],
  },
  // #63 Silence Suzuka サイレンススズカ
  "silence-suzuka": {
    conf: {chestWidth: 1.02},
    notes: [
      {"text":"Filled out across the front as a 4-year-old (old age system): broader shoulders, a thicker chest and stronger muscle, and the body gained width overall [肩は広く、胸は厚く / 全体に幅が出て /…","source":"https://ja.wikipedia.org/wiki/サイレンススズカ","param":"conf.chestWidth"},
      {"text":"Exceptionally supple, springy body.","source":"https://www.nikkansports.com/keiba/news/202206090001213.html","param":null},
      {"text":"Famous stall vice: spun round and round to the left in his box for long periods, especially when tense [旋回癖 / 左へぐるぐる回り始めます].","source":"https://www.nikkansports.com/keiba/news/202206090001213.html","param":null},
      {"text":"Small, light horse. He was 'small and delicate' at birth and peaked at only 452 kg [小さい馬 / 小さくて、華奢で]. This is a candidate for an overall size parameter.","source":"https://number.bunshun.jp/articles/-/844008?page=3","param":null},
      {"text":"Awkward on right-handed tracks: in the 1998 Nakayama Kinen he hung inward in the straight and struggled to change leads, and Take preferred him going left-handed [内側にモタれた /…","source":"https://ja.wikipedia.org/wiki/サイレンススズカ","param":null},
    ],
  },
  // #64 Stay Gold ステイゴールド
  "stay-gold": {
    conf: {bone: 0.92},
    run: {stride: 0.95},
    notes: [
      {"text":"Fine, delicate frame: his groom said his skeleton was 'like a filly's', and Katsumi Yoshida called his build delicate [骨格が牝馬みたい / 馬体は華奢].","source":"https://ja.wikipedia.org/wiki/ステイゴールド_(競走馬)","param":"conf.bone"},
      {"text":"Quick-turnover footwork backed by supple muscle, as described by Shigeyuki Okada [回転の良いフットワーク].","source":"https://ja.wikipedia.org/wiki/ステイゴールド_(競走馬)","param":"run.stride"},
      {"text":"Chronic habit of drifting and leaning left in races.","source":"https://ja.wikipedia.org/wiki/ステイゴールド_(競走馬)","param":null},
      {"text":"Very small horse: 408-436 kg in races, about 15.3 hands at maturity [小柄な体躯].","source":"https://ja.wikipedia.org/wiki/ステイゴールド_(競走馬)","param":null},
    ],
  },
  // #65 Taiki Shuttle タイキシャトル
  "taiki-shuttle": {
    run: {stride: 1.06, hindDrive: 1.08},
    notes: [
      {"text":"Powerful, free-flowing long stride [力強くノビノビと走るストライド].","source":"https://jra-van.jp/fun/memorial/1994109686.html","param":"run.stride"},
      {"text":"Powerful running action suited to heavy ground and European turf [パワフルな走法].","source":"https://news.netkeiba.com/?pid=column_view&cid=25261","param":"run.hindDrive"},
      {"text":"Big, imposing frame of nearly 500 kg [雄大な馬格].","source":"https://www.yushunweb.jp/story/story29/755/","param":null},
      {"text":"Flaxen chestnut: a chestnut coat with a golden mane and tail, and a large white star [尾花栗毛 / タテガミ、尻尾が金色].","source":"https://ja.wikipedia.org/wiki/タイキシャトル","param":null},
      {"text":"Playful hops in races: according to Yukio Okabe he would hop over holes and shadows on the track mid-race, 'running while playing' [穴ぼこや影を見つけるとポンって飛ぶ].","source":"https://www.yushunweb.jp/story/story29/755/","param":null},
    ],
  },
  // #66 El Condor Pasa エルコンドルパサー
  "el-condor-pasa": {
    notes: [
      {"text":"His conformation was described as perfectly balanced, with none of the distinctive features most top horses have [均整がとれていて…欠点もない / 特徴のなさが最大の特徴].","source":"https://ja.wikipedia.org/wiki/エルコンドルパサー","param":null},
      {"text":"During the 1999 campaign in France his running action adapted to the softer, deeper European turf, his muscling changed, and his body became long and slim [胴長で細身の馬体].","source":"https://ja.wikipedia.org/wiki/エルコンドルパサー","param":null},
    ],
  },
  // #67 Grass Wonder グラスワンダー
  "grass-wonder": {
    conf: {hindquarters: 1.1},
    notes: [
      {"text":"Trainer Ogata picked him at the Keeneland sale partly because his hindquarters were exceptionally well developed [後躯の発達が非常によかった].","source":"https://ja.wikipedia.org/wiki/グラスワンダー","param":"conf.hindquarters"},
      {"text":"High-set hocks and a very sloping shoulder [飛節の位置が高い / 肩が非常によく寝ている].","source":"https://ja.wikipedia.org/wiki/グラスワンダー","param":null},
    ],
  },
  // #68 King Halo キングヘイロー
  "king-halo": {
    run: {headCarriage: 0.5},
    notes: [
      {"text":"He ran with a high head carriage [頭の高い走り].","source":"https://uma-furi.com/king-halo/","param":"run.headCarriage"},
    ],
  },
  // #69 Phalaenopsis ファレノプシス
  "phalaenopsis": {
    conf: {hindquarters: 0.95},
    notes: [
      {"text":"As a youngster her hindquarters were very weak [後躯が非常に貧弱], to the point that people doubted she would make a racehorse.","source":"https://ja.wikipedia.org/wiki/ファレノプシス_(競走馬)","param":"conf.hindquarters"},
      {"text":"A small, slight, delicate filly [小柄な…牝馬 / 繊細].","source":"https://uma-furi.com/phalaenopsis/","param":null},
    ],
  },
  // #73 Admire Vega アドマイヤベガ
  "admire-vega": {
    conf: {bone: 0.92},
    notes: [
      {"text":"Fine-boned and slight. Trainer Hashida said Sunday Silence foals are never heavy-boned, but even so this colt was small and delicate [小ぶりで華奢]. This describes him as a youngster.","source":"https://ja.wikipedia.org/wiki/アドマイヤベガ","param":"conf.bone"},
      {"text":"His forelegs turned inward [前脚が内側に曲がっていた], like his dam Vega's but less severely.","source":"https://ja.wikipedia.org/wiki/アドマイヤベガ","param":null},
      {"text":"Small for a colt, with a maximum racing weight of 464 kg.","source":"https://en.wikipedia.org/wiki/Admire_Vega","param":null},
    ],
  },
  // #74 Haru Urara ハルウララ
  "haru-urara": {
    conf: {bone: 0.9},
    notes: [
      {"text":"Thin pasterns [繋ぎが細い]. On seeing them, her trainer predicted she would never grow much. This indicates fine bone.","source":"https://ja.wikipedia.org/wiki/ハルウララ","param":"conf.bone"},
      {"text":"A very small mare: 397 kg at her debut [体格的には小柄な馬].","source":"https://ja.wikipedia.org/wiki/ハルウララ","param":null},
      {"text":"In races she would suddenly try to pull up just when she looked like getting there [ピタッと、突然に止まろうとする], or stop running in the straight.","source":"https://ja.wikipedia.org/wiki/ハルウララ","param":null},
    ],
  },
  // #76 Narita Top Road ナリタトップロード
  "narita-top-road": {
    run: {stride: 1.07},
    notes: [
      {"text":"He ran with a big, long-reaching action [大きなフットワーク], which produced his sustained finishing run.","source":"https://web.archive.org/web/20070307091333/https://www.jra.go.jp/topics/column/museam/tm07_sp08.html","param":"run.stride"},
      {"text":"A big, imposing frame [雄大な馬体]. netkeiba records racing weights of 478–506 kg. This is a candidate for an overall-scale parameter.","source":"https://web.archive.org/web/20070307091333/https://www.jra.go.jp/topics/column/museam/tm07_sp08.html","param":null},
    ],
  },
  // #77 T.M. Opera O テイエムオペラオー
  "tm-opera-o": {
    conf: {hindquarters: 1.06, bone: 1.05},
    notes: [
      {"text":"Owner Takezono bought him on sight because of his big hips and quarters [腰が大きく]; netkeiba says 'strong hindquarters'.","source":"https://ja.wikipedia.org/wiki/テイエムオペラオー","param":"conf.hindquarters"},
      {"text":"Solid, sound bone [骨がしっかりしていて]; netkeiba says 'solid bone'.","source":"https://ja.wikipedia.org/wiki/テイエムオペラオー","param":"conf.bone"},
      {"text":"Announcer Kiyoshi Sugimoto said his physique did not look powerful or imposing [馬体から迫力を感じる馬ではない], so keep him at an average overall size.","source":"https://ja.wikipedia.org/wiki/テイエムオペラオー","param":null},
    ],
  },
  // #78 Agnes Digital アグネスデジタル
  "agnes-digital": {
    conf: {barrel: 0.94},
    notes: [
      {"text":"A slight, narrow-bodied horse [線の細さ / 細身].","source":"https://ja.wikipedia.org/wiki/アグネスデジタル","param":"conf.barrel"},
      {"text":"He started out short-coupled, looking like a sprinter [胴が前後に詰まった], then grew into a slender, rangy horse [すらりとした姿] once serious training began.","source":"https://ja.wikipedia.org/wiki/アグネスデジタル","param":null},
    ],
  },
  // #79 Air Shakur エアシャカール
  "air-shakur": {
    notes: [
      {"text":"Habitually lugged/drifted inward (the opposite of running straight) when asked for an effort in the straight [内によれる癖 / 内にもたれ / ささる]; in the Kobe Shimbun Hai he wove out then in.","source":"https://ja.wikipedia.org/wiki/エアシャカール","param":null},
      {"text":"Unsteady, wobbling head/neck carriage noted while galloping past the stands on the first lap of the Kikuka Sho [首をフラフラさせていました].","source":"https://note.tokyo-sports.co.jp/n/n5e380ffe2881","param":null},
    ],
  },
  // #80 Tap Dance City タップダンスシチー
  "tap-dance-city": {
    notes: [
      {"text":"Pre-race 'tap dance': once saddled he got so wound up that he could not walk normally and jig-jogged as if tap-dancing, so he needed two handlers in the paddock [タップを踏むような歩様 /…","source":"https://number.bunshun.jp/articles/-/852323?page=1","param":null},
      {"text":"In his early career he tended to bolt or drift toward the outside in races [外側への逃避癖].","source":"https://ja.wikipedia.org/wiki/タップダンスシチー","param":null},
      {"text":"Big, imposing frame of over 500 kg [500㌔を超す雄大な馬体].","source":"https://www.yushunweb.jp/story/story61/2508/","param":null},
    ],
  },
  // #82 Believe ビリーヴ
  "believe": {
    notes: [
      {"text":"Early in her career she lost races because she lugged inward and could not run her race [内へもたれて].","source":"https://ja.wikipedia.org/wiki/ビリーヴ_(競走馬)","param":null},
    ],
  },
  // #83 Calstone Light O カルストンライトオ
  "calstone-light-o": {
    notes: [
      {"text":"Tended to lean or drift to the right [右にもたれる面].","source":"https://www.chunichi.co.jp/article/739799","param":null},
      {"text":"Stiff action when cantering to the start, yet he ran brilliantly once out of the gate [返し馬でも走りが硬くて], according to his regular jockey Naohiro Onishi.","source":"https://www.nikkansports.com/keiba/news/202402070000560.html","param":null},
    ],
  },
  // #84 Dantsu Flame ダンツフレーム
  "dantsu-flame": {
    conf: {hindquarters: 1.08, barrel: 1.07, bone: 1.07, head: 1.06},
    notes: [
      {"text":"Wide, broad hindquarters were the first thing his trainer noticed [トモ幅のある馬].","source":"https://ja.wikipedia.org/wiki/ダンツフレーム","param":"conf.hindquarters"},
      {"text":"A muscular, round, barrel-bodied type with a solid belly, like other Brian's Time colts [腹袋がしっかりとしている、コロンとしたタイプ / でっぷりとした身体].","source":"https://ja.wikipedia.org/wiki/ダンツフレーム","param":"conf.barrel"},
      {"text":"Grew heavier-boned as he matured [骨が太くなってきて], according to his breeder.","source":"https://ja.wikipedia.org/wiki/ダンツフレーム","param":"conf.bone"},
      {"text":"His face grew big as he matured [顔は大きくなるわ], according to his breeder.","source":"https://ja.wikipedia.org/wiki/ダンツフレーム","param":"conf.head"},
      {"text":"Short below the knee (short cannons), like other Brian's Time progeny, but with unusually long, relaxed pasterns for the line [膝下は短かった / 繋ぎの部分が...ゆってりしていた].","source":"https://ja.wikipedia.org/wiki/ダンツフレーム","param":null},
      {"text":"His right eye showed white [右目が白い], which made the trainer worry about his temperament.","source":"https://ja.wikipedia.org/wiki/ダンツフレーム","param":null},
    ],
  },
  // #85 Jungle Pocket ジャングルポケット
  "jungle-pocket": {
    run: {neckPump: 1.3, kneeAction: 1.15},
    notes: [
      {"text":"Ungainly action in his 2001 Japan Cup drive, with his head pumping violently up and down [激しく頭を上下させ].","source":"https://uma-furi.com/jungle-pocket-2/","param":"run.neckPump"},
      {"text":"In the same Japan Cup drive he flung his forelegs high and drove them down [前肢を高く振り上げ振り下ろす].","source":"https://uma-furi.com/jungle-pocket-2/","param":"run.kneeAction"},
      {"text":"Ran with his tongue hanging out [舌を出しながら走る仕草]; in the Derby he crossed the line with his tongue out.","source":"https://uma-furi.com/jungle-pocket-4/","param":null},
      {"text":"Tossed his head hard and 'roared' after wins: he violently nodded his head on the Derby winning lap and threw his head up with mouth open after the Japan Cup [激しく頭を上下させる / 天高く吠えた].","source":"https://ja.wikipedia.org/wiki/ジャングルポケット_(競走馬)","param":null},
      {"text":"Did not always run straight once let go.","source":"https://ja.wikipedia.org/wiki/ジャングルポケット_(競走馬)","param":null},
    ],
  },
  // #86 Manhattan Cafe マンハッタンカフェ
  "manhattan-cafe": {
    notes: [
      {"text":"Hooves 'thin and flat like a plate' [蹄は皿のように薄くて平べったく]; the poor feet troubled his connections at four.","source":"https://ja.wikipedia.org/wiki/マンハッタンカフェ","param":null},
      {"text":"A tall horse: 170 cm at the withers (16.3 hands) [体高：170cm].","source":"https://www.jrha.or.jp/stallion/horse/?name=Manhattan_Cafe","param":null},
    ],
  },
  // #87 Durandal デュランダル
  "durandal": {
    notes: [
      {"text":"Thin, weak hoof walls from birth that cracked with racing [生まれつき蹄が薄く / 蹄が弱く].","source":"https://news.sp.netkeiba.com/?pid=column_view&cid=25536","param":null},
    ],
  },
  // #88 Fine Motion ファインモーション
  "fine-motion": {
    conf: {chestWidth: 1.03},
    notes: [
      {"text":"Imposing, well-developed upper body (trunk) typical of Danehill progeny, combined with immature legs [立派な上体と、脚元の未熟さ].","source":"https://ja.wikipedia.org/wiki/ファインモーション","param":"conf.chestWidth"},
      {"text":"Over-keen in her races: she pulled hard and was hard to control from the 2002 Arima Kinen onward [行きっぷりが良すぎる / かかってしまい / 制御不可能].","source":"https://jra-van.jp/fun/memorial/1999110187.html","param":null},
    ],
  },
  // #89 Hishi Miracle ヒシミラクル
  "hishi-miracle": {
    notes: [
      {"text":"Won the 2003 Tenno Sho (Spring) 'with a stride even more powerful than in the Kikuka Sho' [力強いストライド].","source":"https://jra-van.jp/fun/memorial/1999104693.html","param":null},
    ],
  },
  // #91 Symboli Kris S シンボリクリスエス
  "symboli-kris-s": {
    notes: [
      {"text":"A very big, imposing black horse: 540 kg at his debut, towering over his rivals.","source":"https://uma-furi.com/symboli-kris-s/","param":null},
      {"text":"As a three-month-old foal he looked long-legged and gangly [脚の長い、ひょろっとした馬].","source":"https://ja.wikipedia.org/wiki/シンボリクリスエス","param":null},
      {"text":"Wandered and drifted in the straight on right-handed tracks: he lugged in and wavered in the Arima Kinen and veered both ways in the 2003 Takarazuka Kinen, so Fujisawa…","source":"https://ja.wikipedia.org/wiki/シンボリクリスエス","param":null},
    ],
  },
  // #93 Admire Groove アドマイヤグルーヴ
  "admire-groove": {
    notes: [
      {"text":"Her trainer, Mitsuru Hashida, said that when she got upset her eyes went bloodshot red in an instant.","source":"https://www.nikkansports.com/keiba/news/202207080000693.html","param":null},
    ],
  },
  // #94 Neo Universe ネオユニヴァース
  "neo-universe": {
    conf: {hindquarters: 0.97},
    run: {earsAtSpeed: 0.8},
    notes: [
      {"text":"Mirco Demuro said that in the Satsuki Sho stretch duel with Sakura President, Neo Universe had his ears pinned flat back (耳を絞って).","source":"https://news.netkeiba.com/?pid=column_view&cid=48513","param":"run.earsAtSpeed"},
      {"text":"In the same remark, Yoshida said he looked slightly soft through the loins and hindquarters (やや腰が甘い感じに見える), like Sunday Silence.","source":"https://ja.wikipedia.org/wiki/ネオユニヴァース","param":"conf.hindquarters"},
      {"text":"Teruya Yoshida (Shadai Farm) said Neo Universe's hocks were deeply angled (飛節の折りが深い).","source":"https://ja.wikipedia.org/wiki/ネオユニヴァース","param":null},
    ],
  },
  // #96 Zenno Rob Roy ゼンノロブロイ
  "zenno-rob-roy": {
    notes: [
      {"text":"He repeatedly drifted or lugged while finishing in the stretch.","source":"https://ja.wikipedia.org/wiki/ゼンノロブロイ","param":null},
    ],
  },
  // #97 Sweep Tosho スイープトウショウ
  "sweep-tosho": {
    notes: [
      {"text":"Her eyes were 'sanpaku' (三白眼): white sclera showed around the iris, the same as her damsire Dancing Brave.","source":"https://ja.wikipedia.org/wiki/スイープトウショウ","param":null},
    ],
  },
  // #99 Cesario シーザリオ
  "cesario": {
    conf: {hindquarters: 1.06},
    notes: [
      {"text":"Carrot Farm's Kazuki Nagashima described her as having a muscular body that would put a colt to shame (牡馬顔負けの筋肉質な馬体).","source":"https://sportiva.shueisha.co.jp/clm/keiba/keiba/2013/05/22/post_124/index.php","param":"conf.hindquarters"},
    ],
  },
  // #103 Kawakami Princess カワカミプリンセス
  "kawakami-princess": {
    notes: [
      {"text":"She was a big, heavy filly. She won the Oaks at 484 kg (馬体重484kg), the second-heaviest Oaks winner after Tesco Gaby (486 kg). Her dam, Takano Secretary, was also large, taking…","source":"https://ja.wikipedia.org/wiki/カワカミプリンセス","param":null},
      {"text":"She raced in a hood (覆面) from her second start, the Kunshiran Sho, because she was sensitive to sound.","source":"https://ja.wikipedia.org/wiki/カワカミプリンセス","param":null},
    ],
  },
  // #105 Daiwa Scarlet ダイワスカーレット
  "daiwa-scarlet": {
    notes: [
      {"text":"Her only jockey, Katsumi Ando, who rode her in every race, said her action was light and supple, the opposite of her heavy-moving half-brother Daiwa Major (same dam, different…","source":"https://www.keibalab.jp/column/interview/5/","param":null},
    ],
  },
  // #106 Dream Journey ドリームジャーニー
  "dream-journey": {
    notes: [
      {"text":"A very small, slight horse [体型は小柄].","source":"https://ja.wikipedia.org/wiki/ドリームジャーニー","param":null},
    ],
  },
  // #107 Furioso フリオーソ
  "furioso": {
    notes: [
      {"text":"Described as having a large, imposing frame [雄大な馬体], with a build in no way inferior to the JRA horses [決して体つきは中央の馬たちにも劣らない].","source":"https://uma-furi.com/furioso/","param":null},
    ],
  },
  // #108 Vodka ウオッカ
  "vodka": {
    run: {stride: 1.08},
    notes: [
      {"text":"A stride runner with a big, long stride.","source":"https://uma-furusato.com/winner_info/37040.html","param":"run.stride"},
      {"text":"An asymmetric hind action. Trainer Katsuhiko Sumii said she twisted her right hind leg as she brought it forward [右トモをひねりながら前に出していた]. Energy leaked out through that twist, so…","source":"https://news.netkeiba.com/?pid=column_view&cid=43723","param":null},
    ],
  },
  // #110 Espoir City エスポワールシチー
  "espoir-city": {
    notes: [
      {"text":"A tall, large-framed horse. When he arrived at stud, breeders called him tall with a striking body [背が高く、すごい馬体だ]. A photo caption describes a large frame that still did not…","source":"https://uma-furusato.com/news/74823.html","param":null},
    ],
  },
  // #112 Buena Vista ブエナビスタ
  "buena-vista": {
    conf: {barrel: 0.93, bone: 0.93},
    run: {neckPump: 1.1},
    notes: [
      {"text":"A narrow, slab-sided body. JRDB's conformation reviews call her thin-bodied like her dam Biwa Heidi [薄身の体つき] (Tulip Sho) and thin-bodied and slightly croup-high [薄身のやや腰高体型]…","source":"http://keiba100bai.jrdb.com/archives/51137223.html","param":"conf.barrel"},
      {"text":"Fine-boned. Three JRDB reviews describe her as a fine-boned speed type [骨が細めのスピードタイプ], with fine bone and a sharp build [骨が細くてシャープな体つき] and slightly slim cannons [やや細めの管（芝向き）].","source":"http://keiba100bai.jrdb.com/archives/51137223.html","param":"conf.bone"},
      {"text":"In the 2008 Hanshin JF she moved up with a relaxed action that made good use of her neck [首を使ったゆったりした走り].","source":"http://keiba100bai.jrdb.com/archives/51088907.html","param":"run.neckPump"},
      {"text":"Small overall. Yushun's 2016 retrospective on her racing career calls her small and quiet [小柄でおとなしく]. However, JRDB's Yushun Himba review says she stood tall for her weight and…","source":"https://www.yushunweb.jp/story/story13/653/","param":null},
    ],
  },
  // #113 Nakayama Festa ナカヤマフェスタ
  "nakayama-festa": {
    conf: {barrel: 0.94, withers: -0.3},
    run: {hindDrive: 0.96},
    notes: [
      {"text":"A slender build for a colt. JRDB described him at his debut as slim [細身の腰高] and later as compact [コンパクトな体つき; 体重も体高もそれほどなく]. His stud farm said he had looked slight for a colt…","source":"http://keiba100bai.jrdb.com/archives/51055691.html","param":"conf.barrel"},
      {"text":"Croup-high [腰高], meaning his croup stood above his withers.","source":"http://keiba100bai.jrdb.com/archives/51071762.html","param":"conf.withers"},
      {"text":"Hind legs trailing out behind instead of stepping well under [トモ（後肢）が流れる].","source":"http://keiba100bai.jrdb.com/archives/51055691.html","param":"run.hindDrive"},
    ],
  },
  // #114 Red Desire レッドディザイア
  "red-desire": {
    conf: {barrel: 1.05},
    run: {headCarriage: 0.3},
    notes: [
      {"text":"At her debut she ran with her upper body carried slightly high [若干、上体が高い走法].","source":"http://keiba100bai.jrdb.com/archives/51101847.html","param":"run.headCarriage"},
      {"text":"A roomy belly [腹袋も大きく] and a slightly long body, according to JRDB's Oka Sho note.","source":"http://keiba100bai.jrdb.com/archives/51155916.html","param":"conf.barrel"},
      {"text":"Long-limbed. JRDB said at her debut that her legs were a little longer than standard [手脚は標準よりも少し長く], and at the Oka Sho that her legs were long [手脚も長め]. Her yearling syndicate…","source":"http://keiba100bai.jrdb.com/archives/51101847.html","param":null},
      {"text":"At her debut she ran leaning her weight slightly to the right [やや重心を右に傾けて].","source":"http://keiba100bai.jrdb.com/archives/51101847.html","param":null},
    ],
  },
  // #115 Tosen Jordan トーセンジョーダン
  "tosen-jordan": {
    conf: {bone: 0.93},
    run: {kneeAction: 1.12},
    notes: [
      {"text":"Fine-boned. In JRDB's Hopeful Stakes review (age 2) his bone is described as rather fine [骨も細め], giving a slim, rangy look.","source":"http://keiba100bai.jrdb.com/archives/51097183.html","param":"conf.bone"},
      {"text":"He ran with a scooping foreleg action [前肢を掻き込んで走る] but a very supple stride [非常にしなやかなストライド].","source":"http://keiba100bai.jrdb.com/archives/51097183.html","param":"run.kneeAction"},
      {"text":"Long legs and a rangy, slim outline [四肢が長く…スラリとした見映え].","source":"http://keiba100bai.jrdb.com/archives/51097183.html","param":null},
    ],
  },
  // #116 Transcend トランセンド
  "transcend": {
    run: {headCarriage: 0.4},
    notes: [
      {"text":"A high-set, high-carried neck [首の高い馬].","source":"https://glassracetrack.cocolog-nifty.com/blog/2018/08/post-860d.html","param":"run.headCarriage"},
    ],
  },
  // #117 Wonder Acute ワンダーアキュート
  "wonder-acute": {
    conf: {barrel: 1.07},
    run: {hindDrive: 0.96},
    notes: [
      {"text":"A solid frame with a big, roomy belly, a typical dirt horse [骨格がしっかりしていて腹袋が大きく].","source":"http://keiba100bai.jrdb.com/archives/51113931.html","param":"conf.barrel"},
      {"text":"At his debut his hind legs did not step far under the body [後肢の踏み込みも少し甘い], and his joints were a little loose.","source":"http://keiba100bai.jrdb.com/archives/51113931.html","param":"run.hindDrive"},
      {"text":"A big horse of over 500 kg [500キロを超える大型馬].","source":"https://gamewith.jp/uma-musume/article/show/378125","param":null},
    ],
  },
  // #119 Eishin Flash エイシンフラッシュ
  "eishin-flash": {
    notes: [
      {"text":"Known for a jet-black, glossy coat and a handsome, well-featured face [漆黒の艶やかな馬体と端正な顔立ち].","source":"https://www.sanspo.com/race/article/general/20251031-ASC5N2YMUNLMPHAOBXQGGMJK4Y/","param":null},
    ],
  },
  // #121 Rulership ルーラーシップ
  "rulership": {
    notes: [
      {"text":"Habitually slow away from the gate [出遅れ癖].","source":"https://www.sponichi.co.jp/gamble/news/2012/12/23/kiji/K20121223004837320.html","param":null},
    ],
  },
  // #122 Victoire Pisa ヴィクトワールピサ
  "victoire-pisa": {
    run: {stride: 1.1},
    notes: [
      {"text":"A big horse with a long, bounding stride [大型で跳びの大きい走法].","source":"https://ja.wikipedia.org/wiki/ヴィクトワールピサ","param":"run.stride"},
    ],
  },
  // #123 Orfevre オルフェーヴル
  "orfevre": {
    run: {stride: 0.95, bodyLow: 0.3},
    notes: [
      {"text":"On good turf he ran with a pitch-oriented action [ピッチを重視する走り方], meaning quicker, shorter strides.","source":"https://company.jra.jp/equinst/60-2017-6.pdf","param":"run.stride"},
      {"text":"Jockey Ikezoe said that when asked for speed he 'sank' as he took hold of the bit [沈むようにハミを取って], lowering himself as he accelerated (2011 Arima Kinen).","source":"https://news.netkeiba.com/?pid=news_view&no=60772","param":"run.bodyLow"},
      {"text":"Habitually drifted and hung in once in front [斜行癖 / 内にもたれる].","source":"https://ja.wikipedia.org/wiki/オルフェーヴル","param":null},
      {"text":"Bolted mid-race [逸走]. In the 2012 Hanshin Daishoten he refused to take the third turn and ran straight out to the outside rail, then rejoined and finished second. He also threw…","source":"https://ja.wikipedia.org/wiki/オルフェーヴル","param":null},
    ],
  },
  // #124 Win Variation ウインバリアシオン
  "win-variation": {
    conf: {barrel: 0.95},
    notes: [
      {"text":"A large, long-legged but thin-bodied build [脚長の体型 / 大型馬だけど薄手].","source":"https://smart.keibalab.jp/column/interview/549/","param":"conf.barrel"},
      {"text":"Former jockey Katsumi Ando said the horse's gait [歩様] was already suspect, slightly irregular, from the first time he rode him at three.","source":"https://en.wikipedia.org/wiki/Win_Variation","param":null},
    ],
  },
  // #126 Gentildonna ジェンティルドンナ
  "gentildonna": {
    conf: {chestDepth: 1.07, tuckUp: 0.25},
    run: {headCarriage: 0.3},
    notes: [
      {"text":"Her handlers noted a large chest girth [大きな胸囲] when she began training, which they took as a sign of high cardiopulmonary capacity.","source":"https://ja.wikipedia.org/wiki/ジェンティルドンナ","param":"conf.chestDepth"},
      {"text":"Ran with a somewhat high neck carriage [いくらか首が高い走法].","source":"https://ja.wikipedia.org/wiki/ジェンティルドンナ","param":"run.headCarriage"},
      {"text":"Former trainer Suzuki Yasuhiro called her a lean-muscled, willowy type ['細マッチョ', 柳のようにしなやかな馬体], in contrast to the heavily muscled 'gorimatcho' type of Almond Eye.","source":"https://keiba.sponichi.co.jp/news/20240409s00004000092000c","param":"conf.tuckUp"},
    ],
  },
  // #127 Gold Ship ゴールドシップ
  "gold-ship": {
    run: {stride: 1.08},
    notes: [
      {"text":"Strong, soft, elastic muscle let him accelerate with a big stride [大きなストライドで加速できた] up the steep final hills at Nakayama and Hanshin.","source":"https://ja.wikipedia.org/wiki/ゴールドシップ","param":"run.stride"},
      {"text":"Markedly loose, soft hind pasterns [後肢の繋ぎが顕著に緩く].","source":"https://ja.wikipedia.org/wiki/ゴールドシップ","param":null},
      {"text":"Reared in the starting gate. In the 2014 Tenno Sho (Spring) he suddenly stood up and growled after loading. In the 2015 Takarazuka Kinen he reared at his neighbour and again as…","source":"https://ja.wikipedia.org/wiki/ゴールドシップ","param":null},
      {"text":"A big horse. He was bred from a 500 kg+ dam and the small sire Stay Gold to get a mid-sized foal, but turned out large [大きく産まれた] and stood out among his age group. There is no…","source":"https://ja.wikipedia.org/wiki/ゴールドシップ","param":null},
      {"text":"Equipment: wore blinkers from the 2013 Arima Kinen (when Ryan Moore took over) and added a shadow roll [ブリンカーに加えシャドーロール] from the 2014 Takarazuka Kinen.","source":"https://ja.wikipedia.org/wiki/ゴールドシップ","param":null},
    ],
  },
  // #128 Hokko Tarumae ホッコータルマエ
  "hokko-tarumae": {
    notes: [
      {"text":"A big-framed horse, over 500 kg [500キロを超える馬格], according to a stud column on his stallion career.","source":"https://uma-furusato.com/column/91518.html","param":null},
    ],
  },
  // #129 Verxina ヴィルシーナ
  "verxina": {
    notes: [
      {"text":"After the 2012 Queen Cup, jockey Iwata compared her stride [跳び] to how he imagined Deep Impact's action must feel.","source":"https://news.netkeiba.com/?pid=news_view&no=61814","param":null},
      {"text":"Equipment: after losing to Gentildonna throughout the 2012 fillies' Triple Crown, she raced in a hood [メンコ] marked with a large X [バツ印].","source":"https://www.chunichi.co.jp/article/733447","param":null},
    ],
  },
  // #131 Epiphaneia エピファネイア
  "epiphaneia": {
    notes: [
      {"text":"A keen, hard-pulling horse. Japanese Wikipedia says the 2013 Yayoi Sho defeat exposed his problem with settling against an intense forward urge [激しい前進気勢], which his dam Cesario…","source":"https://ja.wikipedia.org/wiki/エピファネイア","param":null},
      {"text":"Yuta Kimiya, manager of Northern Farm Tenei, worked with Epiphaneia during his racing career.","source":"https://news.netkeiba.com/?pid=news_view&no=186765","param":null},
    ],
  },
  // #134 Cheval Grand シュヴァルグラン
  "cheval-grand": {
    run: {stride: 1.05},
    notes: [
      {"text":"Trainer Yasuo Tomomichi passed on Hugh Bowman's view that the wide Tokyo course suited the horse better because of 'his big movement'.","source":"https://japanracing.jp/_news2018/181221-02.html","param":"run.stride"},
    ],
  },
  // #135 Duramente ドゥラメンテ
  "duramente": {
    run: {stride: 1.03},
    notes: [
      {"text":"After his 2016 Nakayama Kinen comeback, Sponichi wrote that 'the double classic winner's stride was still intact' [２冠馬のストライドは健在].","source":"https://www.sponichi.co.jp/gamble/news/2016/02/29/kiji/K20160229012123760.html","param":"run.stride"},
      {"text":"In the 2015 Satsuki Sho he swerved violently at the 4th corner, from near the rail to the far outside ('as if he warped' [まるでワープしたかのように急激に大外へと斜行]).","source":"https://sports.yahoo.co.jp/column/detail/201504190003-spnavi?p=2","param":null},
    ],
  },
  // #136 Kitasan Black キタサンブラック
  "kitasan-black": {
    conf: {bone: 1.06},
    run: {stride: 1.07},
    notes: [
      {"text":"A big-striding horse. Trainer Hisashi Shimizu judged from his long-striding action [ストライドの大きな走り] that he would suit longer distances from the start. Shimizu also said that even…","source":"https://books.netkeiba.com/?pid=book_detail&bid=12&cid=1","param":"run.stride"},
      {"text":"Described as rich in bone with a well-balanced body [骨量に富み] even as a foal.","source":"https://ja.wikipedia.org/wiki/キタサンブラック","param":"conf.bone"},
      {"text":"Tall and long-legged from birth: thin skin, tall, long-legged build [背が高く、脚の長い体型].","source":"https://uma-furusato.com/winner_info/83069.html","param":null},
      {"text":"A large, heavy horse ('He's a big horse').","source":"https://en.wikipedia.org/wiki/Kitasan_Black","param":null},
      {"text":"Several sources describe his hindquarters as loose or unfinished [トモに緩さ].","source":"https://www.nikkei.com/article/DGXMZO17655100U7A610C1000000/","param":null},
    ],
  },
  // #138 Satono Diamond サトノダイヤモンド
  "satono-diamond": {
    run: {stride: 1.07, bodyLow: 0.55},
    notes: [
      {"text":"A big, long-limbed colt who could not shorten his stride.","source":"https://japanracing.jp/_news2016/160527-04.html","param":"run.stride"},
      {"text":"Trainer Yasutoshi Ikee said that in top gear the horse's centre of gravity 'drops sharply and he runs as if sinking' [重心がグッと下がって沈むような走り].","source":"https://number.bunshun.jp/articles/-/852845?page=4","param":"run.bodyLow"},
    ],
  },
  // #139 Vivlos ヴィブロス
  "vivlos": {
    notes: [
      {"text":"A very small mare. She mostly raced at 410-419 kg up to age 3 and never weighed more than 440 kg [小柄な馬体]. Her 414 kg is the lightest of any Shuka Sho winner. Her trainer said…","source":"https://ja.wikipedia.org/wiki/ヴィブロス","param":null},
    ],
  },
  // #140 Kiseki キセキ
  "kiseki": {
    run: {stride: 1.07, headCarriage: 0.3},
    notes: [
      {"text":"A big-striding horse. After his debut win, Christophe Lemaire said 'his stride is big' [跳びが大きくて]. Trainer Katsuhiko Sumii called him supple and springy and said his big stride…","source":"https://www.sponichi.co.jp/gamble/news/2016/12/12/kiji/K20161212013891290.html","param":"run.stride"},
      {"text":"Trainer Yasuyuki Tsujino said Kiseki raises his head a little when ridden hard, and that he had always done so.","source":"https://japanracing.jp/_news2021/211224-02.html","param":"run.headCarriage"},
    ],
  },
  // #141 Almond Eye アーモンドアイ (not in data/horses.js yet)
  "almond-eye": {
    conf: {chestDepth: 1.1},
    run: {hindDrive: 1.2, stride: 1.08, roll: 0.7},
    notes: [
      {"text":"Her hind-leg drive was exceptional.","source":"https://hochi.news/articles/20181011-OHT1T50173.html","param":"run.hindDrive"},
      {"text":"Sponichi's conformation column said her chest depth was unusual for a filly [胸の深さは牝馬離れ].","source":"https://keiba.sponichi.co.jp/news/20181009s00004145367000c","param":"conf.chestDepth"},
      {"text":"A big, powerful stride. Lemaire named her big stride as her strong point [跳びが大きい] and said she accelerates with her long legs. He also said 'her strides kept getting bigger'…","source":"https://hochi.news/articles/20180408-OHT1T50129.html","param":"run.stride"},
      {"text":"Her farrier said she ran with a straight, clean action [真っすぐきれいなフォーム], so her shoes wore down less than other horses'.","source":"https://hochi.news/articles/20201029-OHT1T50212.html","param":"run.roll"},
      {"text":"A distinctive foreleg action. Using a wide range of joint movement, she seemed to fling her forelegs out from the shoulder [肩から前肢を投げ出すような独特の走法]. A foreleg-reach/extension…","source":"https://www.sponichi.co.jp/gamble/news/2020/11/26/kiji/20201125s00004192512000c.html","param":null},
      {"text":"Her right foreleg was longer than her left [左前肢より長い右前肢], and her overreaching hind feet hit that longer right fore.","source":"https://www.sponichi.co.jp/gamble/news/2019/12/19/kiji/20191219s00004048108000c.html","param":null},
    ],
  },
  // #142 Blast Onepiece ブラストワンピース
  "blast-onepiece": {
    conf: {head: 1.12},
    notes: [
      {"text":"He had a big head. Trainer Masahiro Otake said the horse raced in a shadow roll not to correct his behaviour but to look better, 'because he is a big-faced horse' [顔の大きな馬 /…","source":"https://number.bunshun.jp/articles/-/830722?page=2","param":"conf.head"},
      {"text":"An unusually large, heavy colt, raced at 520-550 kg and described as a 巨漢 and a 大型馬.","source":"https://en.wikipedia.org/wiki/Blast_Onepiece","param":null},
      {"text":"His legs turned inward (toed-in) from birth [生まれた時から脚が内向していて], so the farm brought him on carefully.","source":"https://www.daily.co.jp/horse/2018/12/24/0011929868.shtml","param":null},
    ],
  },
  // #143 Lucky Lilac ラッキーライラック
  "lucky-lilac": {
    notes: [
      {"text":"An unusually large mare, weighing up to 524 kg during her career.","source":"https://en.wikipedia.org/wiki/Lucky_Lilac","param":null},
    ],
  },
  // #144 Chrono Genesis クロノジェネシス
  "chrono-genesis": {
    conf: {bone: 0.95},
    run: {stride: 0.95},
    notes: [
      {"text":"Slim, fine frame. Suzuki's 2020 body analysis (Takarazuka Kinen, age 4) says her frame was slim by nature [骨格はスリム] even after she filled out. He says she carried supple, fine…","source":"https://www.sponichi.co.jp/gamble/news/2020/06/23/kiji/20200622s00004048420000c.html","param":"conf.bone"},
      {"text":"Pitch-type runner. A stride-pitch blog analysis (Mahmoud, note.com, June 2021) covered all 15 of her races. It compared her 2020 Takarazuka Kinen, 2020 Tenno Sho (Autumn) and…","source":"https://note.com/mahmoud1933/n/nc250e621291c","param":"run.stride"},
    ],
  },
  // #145 Curren Bouquetd'or カレンブーケドール (not in data/horses.js yet)
  "curren-bouquetd-or": {
    conf: {barrel: 1.06, hindquarters: 1.05},
    notes: [
      {"text":"Colt-like, robust body with a big, full belly [立派な腹袋 / 腹袋はたくましい].","source":"https://www.sponichi.co.jp/gamble/news/2021/04/27/articles/20210427s00004000134000c.html","param":"conf.barrel"},
      {"text":"Well-muscled, colt-like hindquarters [張りに満ちたトモ].","source":"https://www.sponichi.co.jp/gamble/news/2021/04/27/articles/20210427s00004000134000c.html","param":"conf.hindquarters"},
      {"text":"Slightly short-coupled (compact-bodied) middle-distance build [少し詰まり気味の中距離体形].","source":"https://www.sponichi.co.jp/gamble/news/2021/06/22/kiji/20210621s00004000637000c.html","param":null},
      {"text":"As a 3-year-old (2019 Oaks) she stood with her tail raised when tense [尾を上げてキンキン].","source":"https://www.sponichi.co.jp/gamble/news/2020/11/24/articles/20201123s00004048576000c.html","param":null},
    ],
  },
  // #146 Gran Alegria グランアレグリア
  "gran-alegria": {
    conf: {hindquarters: 1.12, crest: 1.25, chestWidth: 1.06},
    notes: [
      {"text":"Massive, thick quarters that would shame a colt [牡馬顔負けの分厚いトモ], with rock-like muscle in the shoulders and quarters.","source":"https://keiba.sponichi.co.jp/news/20190430s00004145338000c","param":"conf.hindquarters"},
      {"text":"Thick, powerful neck [太い首 / 立派な首].","source":"https://www.sponichi.co.jp/gamble/news/2021/11/16/kiji/20211115s00004000599000c.html","param":"conf.crest"},
      {"text":"Thick, deep breast [分厚い胸].","source":"https://keiba.sponichi.co.jp/news/20190430s00004145338000c","param":"conf.chestWidth"},
      {"text":"Forelegs slightly short, so her balance tips a little forward [前脚がやや短いため、重心がやや前傾].","source":"https://www.keibalab.jp/column/focus/350/","param":null},
    ],
  },
  // #147 Loves Only You ラヴズオンリーユー (not in data/horses.js yet)
  "loves-only-you": {
    run: {headCarriage: 0.3, neckPump: 1.15},
    notes: [
      {"text":"Runs with her neck carried somewhat upright, more 'up' than her full brother Real Steel, who stretched out [首を立てて走る / 起きて走っている].","source":"https://www.keibalab.jp/column/interview/1935/","param":"run.headCarriage"},
      {"text":"Yahagi says that when she lowers her neck she first sinks and then stretches out [首を下げる時に沈んでから伸ばす走法], which reads as a pronounced dip-and-reach neck action.","source":"https://www.keibalab.jp/column/interview/1935/","param":"run.neckPump"},
      {"text":"Upright front pasterns [両前のつなぎは立ち気味].","source":"https://www.sponichi.co.jp/gamble/news/2020/05/12/kiji/20200511s00004048334000c.html","param":null},
      {"text":"Habitually stands with both hind legs stretched out behind her [両トモを流した立ち方].","source":"https://www.sponichi.co.jp/gamble/news/2020/05/12/kiji/20200511s00004048334000c.html","param":null},
    ],
  },
  // #149 Daring Tact デアリングタクト
  "daring-tact": {
    conf: {tailSet: 0.5, hindquarters: 1.1},
    notes: [
      {"text":"High-set tail [尾の付け根が上に付いている]. Suzuki notes that quarters usually look plain on horses with a high-set tail, but hers still look impressive because of the muscle.","source":"https://keiba.sponichi.co.jp/news/20200406s00004145300000c","param":"conf.tailSet"},
      {"text":"Her standout feature is muscular, bulging hindquarters [特長はトモ / 筋肉で隆起したトモ].","source":"https://keiba.sponichi.co.jp/news/20200406s00004145300000c","param":"conf.hindquarters"},
      {"text":"In one 2020 photo her ears were spread outward in a 'ハ' shape [ハの字に広げた耳].","source":"https://keiba.sponichi.co.jp/news/20200406s00004145300000c","param":null},
    ],
  },
  // #150 Efforia エフフォーリア
  "efforia": {
    run: {stride: 1.07, hindDrive: 1.08},
    notes: [
      {"text":"Big, dynamic, long-striding action [完歩の大きいダイナミックなフットワーク].","source":"https://www.sponichi.co.jp/gamble/news/2021/12/21/kiji/20211220s00004000498000c.html","param":"run.stride"},
      {"text":"Strong hocks, angled well with the quarters, that turn their power straight into forward drive [強固な飛節がトモのパワーを逃さず推進力に変えています].","source":"https://www.sponichi.co.jp/gamble/news/2021/12/21/kiji/20211220s00004000498000c.html","param":"run.hindDrive"},
      {"text":"Long-legged and long-bodied [脚長で胴伸びの良い馬体], per the Carrot Club yearling catalog quoted in Wikipedia.","source":"https://ja.wikipedia.org/wiki/エフフォーリア","param":null},
    ],
  },
  // #151 Titleholder タイトルホルダー
  "titleholder": {
    conf: {chestWidth: 1.06, hindquarters: 1.06, withers: 0.4},
    run: {stride: 1.05},
    notes: [
      {"text":"Voluminous breast muscle [胸前の筋肉はボリューム満点].","source":"https://news.netkeiba.com/?pid=news_view&no=251325","param":"conf.chestWidth"},
      {"text":"Voluminous hindquarter muscle on a typical stayer's frame [典型的なステイヤー体形].","source":"https://news.netkeiba.com/?pid=news_view&no=251325","param":"conf.hindquarters"},
      {"text":"Raised, prominent withers [キ甲が盛り上がり].","source":"https://news.netkeiba.com/?pid=news_view&no=251325","param":"conf.withers"},
      {"text":"Breeder Okada says Titleholder had a big, dynamic action in training.","source":"https://pacalla.com/article/article-3817/","param":"run.stride"},
      {"text":"Habitually stood with his forelegs set forward, leaning forward [前肢を前踏み / 前方にせり出すように立っていた].","source":"https://www.sponichi.co.jp/gamble/news/2021/12/21/kiji/20211220s00004000506000c.html","param":null},
    ],
  },
  // #152 Forever Young フォーエバーヤング
  "forever-young": {
    conf: {crest: 1.3},
    run: {stride: 1.08},
    notes: [
      {"text":"Big horse with a big, long-reaching stride [大型馬で跳びも大きい].","source":"https://www.sanspo.com/race/article/general/20260820-VO4EKAYZXBIRDOPD2UHQ6I5ZCQ/","param":"run.stride"},
      {"text":"Exceptionally thick neck. His regular jockey Ryusei Sakai posted that the height of his eye-line, the thickness of his neck [首の太さ] and his stability at top speed are completely…","source":"https://www.sanspo.com/race/article/general/20260820-VO4EKAYZXBIRDOPD2UHQ6I5ZCQ/","param":"conf.crest"},
      {"text":"Massive overall frame, described as imposing [馬体は雄大そのもの].","source":"https://keiba.sponichi.co.jp/news/20260109s00004048374000c","param":null},
    ],
  },
};
