/* Locations for the low-poly horse. A classic script (not a module) so index.html still opens from file://.
   Schema (see ROADMAP.md "Location schema"): the scene shows a straight the horse runs along (+X) forever.
   builder: 'country' | 'pasture' | 'track'; hand: course direction ('left' puts the grandstand on the
   camera's side as seen from the stands, 'right' mirrors it); W: metres before the scenery repeats.
   time: sun/sky/fog; extras: background horses ('companion' walks beside the hero, 'grazer' stands in a field).
   saddleCloth (tracks): the cloth of the signature race; default JRA G1 = 紫紺 #3a2a96 with white text.
   Racetrack facts come from the JRA course pages and Japanese Wikipedia (sources listed per entry). */
window.LOCATIONS = [
  {
    id: 'hidaka', en: 'Hidaka stud farm', jp: '日高の牧場', group: 'Strolling', builder: 'pasture', gait: 'walk', W: 130,
    time: {
      sunElevDeg: 34, sunAzimDeg: -25, fogNear: 30, fogFar: 120, exposure: 1.02,
      sky: { top: '#6c9fd6', mid: '#bcd3e8', horizon: '#e4e8dc', sun: '#fff4dc' },
      sunColor: '#fff0d8', sunIntensity: 2.8, hemiSky: '#dfeaf2', hemiGround: '#6f7a4c', hemiIntensity: 1.25,
    },
    ground: { grass: ['#6f9a45', '#77a24b', '#689043', '#80a852', '#5f8a3e'], lush: '#4d7c35', path: '#a08c63' },
    fence: { color: '#f3f1ea' },
    dust: null,
    backdrop: {
      ranges: [
        { r: 470, base: '#8a99b8', h: [26, 62], step: 0.18, haze: 0.55 }, // Hidaka mountains
        { r: 380, base: '#6f8a5c', h: [10, 26], step: 0.12, haze: 0.42 }, // green foothills
      ],
      clouds: 9,
    },
    extras: [
      { mode: 'companion', x: -3.6, z: -2.0 },
      { mode: 'grazer', x: 22, z: -11, rotY: 0.6 },
      { mode: 'grazer', x: 84, z: -17, rotY: 2.6 },
    ],
    signature: 'White board fences, wrapped hay rolls, birches and a red-roofed barn under the Hidaka mountains: Hokkaido horse country, where most Japanese racehorses are born.',
  },
  {
    id: 'country', en: 'Countryside trail', jp: '田舎道', group: 'Strolling', builder: 'country', gait: 'gallop', W: 65,
    time: { sunElevDeg: 40, sunAzimDeg: -20, fogNear: 24, fogFar: 92 },
    signature: 'The original scene: a sandy trail, a wooden fence and rolling autumn hills.',
  },
  {
    id: 'tokyo', en: 'Tokyo Racecourse', jp: '東京競馬場', group: 'JRA G1', builder: 'track', gait: 'race',
    hand: 'left', surface: 'turf', lead: 'R', W: 400, seed: 2031,
    // Japan Cup afternoon, late November (sun raised a little for readable shadows)
    time: {
      month: 11, post: '15:40', sunElevDeg: 22, sunAzimDeg: -35, fogNear: 140, fogFar: 420, exposure: 1.0,
      sky: { top: '#6f9fd6', mid: '#b8cfe6', horizon: '#ecdcc4', sun: '#fff0d6' },
      sunColor: '#ffe9c8', sunIntensity: 2.8, hemiSky: '#dfe7f2', hemiGround: '#7d8a55', hemiIntensity: 1.2,
    },
    turf: { color: '#5c8f3a', widthM: 31 }, dirt: { color: '#bba684', widthM: 25 }, rails: { color: '#f6f6f2' },
    lawn: '#6f9a46', leaf: ['#5f7d45', '#6f8a4c', '#c58a45', '#b9733c'], autumn: 0.25, dust: '#7a6c4a',
    stand: { name: 'Fuji View Stand', lengthM: 380, floors: 9, depthM: 30, colors: { body: '#e4e2dc', roof: '#f2f3f4', glass: '#7d98ab', seats: '#9aa7b0' } },
    infield: [{ type: 'pond', xFrac: 0.62, sizeM: [70, 30], distM: 75, notes: 'Japanese garden with a pond' }],
    backdrop: {
      ranges: [
        { r: 585, base: '#8f97b5', h: [12, 28], step: 0.16, haze: 0.6 }, // Tanzawa / Okutama
        { r: 545, base: '#8e9a8c', h: [4, 10], step: 0.1, haze: 0.5 },
      ],
      landmarks: [
        { type: 'fuji', bearingDeg: 22, distM: 575, heightM: 42 },                       // beyond the 1st-2nd corner
        { type: 'screen', bearingDeg: -4, distM: 320, wM: 66.4, hM: 11.2, liftM: 5 },     // Turf Vision
        { type: 'tree', bearingDeg: -58, distM: 360, heightM: 24, leaf: '#6d7f45' },       // 大ケヤキ, 3rd-4th corner
        { type: 'skyline', fromDeg: 70, toDeg: 115, distM: 520, heightM: [6, 26] },       // Fuchu
      ],
      clouds: 6,
    },
    facts: {
      turfCircM: 2083.1, dirtCircM: 1899, turfStraightM: 525.9, dirtStraightM: 501.6, elevationM: 2.7,
      straightProfile: [[525.9, 0], [460, 0], [300, 2.0], [0, 2.0]],
      races: [
        { name: 'February Stakes', jp: 'フェブラリーステークス', surface: 'dirt', distM: 1600, month: 2 },
        { name: 'NHK Mile Cup', jp: 'NHKマイルカップ', surface: 'turf', distM: 1600, month: 5 },
        { name: 'Victoria Mile', jp: 'ヴィクトリアマイル', surface: 'turf', distM: 1600, month: 5 },
        { name: 'Yushun Himba (Japanese Oaks)', jp: '優駿牝馬', surface: 'turf', distM: 2400, month: 5 },
        { name: 'Tokyo Yushun (Japanese Derby)', jp: '東京優駿', surface: 'turf', distM: 2400, month: 5 },
        { name: 'Yasuda Kinen', jp: '安田記念', surface: 'turf', distM: 1600, month: 6 },
        { name: 'Tenno Sho (Autumn)', jp: '天皇賞(秋)', surface: 'turf', distM: 2000, month: 10 },
        { name: 'Japan Cup', jp: 'ジャパンカップ', surface: 'turf', distM: 2400, month: 11 },
      ],
    },
    signature: 'Japan’s biggest grandstand, the 525.9 m home straight with its rise 460–300 m out, the 66 m infield screen, and Mt Fuji beyond the first turn.',
    sources: ['https://www.jra.go.jp/facilities/race/tokyo/course/index.html', 'https://ja.wikipedia.org/wiki/東京競馬場', 'https://www.tokyokeibajo.com/s/fvs.html'],
    uncertain: ['stand.colors', 'backdrop.landmarks[0].bearingDeg', 'infield[0] position'],
  },
  {
    id: 'nakayama', en: 'Nakayama Racecourse', jp: '中山競馬場', group: 'JRA G1', builder: 'track', gait: 'race',
    hand: 'right', surface: 'turf', lead: 'L', W: 400, seed: 2032,
    // Arima Kinen, late December: low golden winter sun, overseeded turf going yellow-green
    time: {
      month: 12, post: '15:40', sunElevDeg: 16, sunAzimDeg: -50, fogNear: 130, fogFar: 400, exposure: 1.0,
      sky: { top: '#7f9fc8', mid: '#c9c6cf', horizon: '#f0cfa8', sun: '#ffe2b0' },
      sunColor: '#ffd9a8', sunIntensity: 2.6, hemiSky: '#dfe3ee', hemiGround: '#857a52', hemiIntensity: 1.15,
    },
    turf: { color: '#879a4e', widthM: 30 }, dirt: { color: '#b4a080', widthM: 25 }, rails: { color: '#f6f6f2' },
    lawn: '#8a9a55', verge: '#7f9050', leaf: ['#5b7046', '#6d7a4a', '#8a7a52', '#4f6a42'], autumn: 0.3, dust: '#7c6d4a',
    stand: { name: 'Main stand (blocks A–D)', lengthM: 300, floors: 7, depthM: 26, colors: { body: '#d8d3c8', roof: '#c9ced2', glass: '#7c94a6', seats: '#8a9a8c' } },
    infield: [{ type: 'jumps', count: 6, depthM: 150, notes: '大竹柵 brush fence 1.6 m x 2.05 m and 大生垣 hedge 1.6 m x 2.4 m on the diagonal たすき course' }],
    backdrop: {
      ranges: [{ r: 580, base: '#9a9cae', h: [5, 14], step: 0.14, haze: 0.62 }],
      landmarks: [
        { type: 'screen', bearingDeg: 8, distM: 330, wM: 40.8, hM: 9.6, liftM: 4 },        // Turf Vision No.1
        { type: 'skyline', fromDeg: -95, toDeg: -25, distM: 540, heightM: [10, 45] },     // Funabashi / Ichikawa
      ],
      clouds: 8,
    },
    facts: {
      turfCircM: 1667.1, dirtCircM: 1493, turfStraightM: 310, dirtStraightM: 308, elevationM: 5.3,
      straightProfile: [[310, 0], [180, 0], [70, 2.2], [0, 2.2]],
      races: [
        { name: 'Satsuki Sho', jp: '皐月賞', surface: 'turf', distM: 2000, month: 4 },
        { name: 'Nakayama Grand Jump', jp: '中山グランドジャンプ', surface: 'jump', distM: 4260, month: 4 },
        { name: 'Sprinters Stakes', jp: 'スプリンターズステークス', surface: 'turf', distM: 1200, month: 9 },
        { name: 'Nakayama Daishogai', jp: '中山大障害', surface: 'jump', distM: 4100, month: 12 },
        { name: 'Hopeful Stakes', jp: 'ホープフルステークス', surface: 'turf', distM: 2000, month: 12 },
        { name: 'Arima Kinen', jp: '有馬記念', surface: 'turf', distM: 2500, month: 12 },
      ],
    },
    signature: 'A short 310 m straight ending in the JRA’s steepest hill (+2.2 m), and the giant hedge and brush jumps of the steeplechase course in the infield.',
    sources: ['https://www.jra.go.jp/facilities/race/nakayama/course/index.html', 'https://ja.wikipedia.org/wiki/中山競馬場'],
    uncertain: ['stand.colors', 'stand.lengthM', 'backdrop'],
  },
  {
    id: 'kyoto', en: 'Kyoto Racecourse', jp: '京都競馬場', group: 'JRA G1', builder: 'track', gait: 'race',
    hand: 'right', surface: 'turf', lead: 'L', W: 400, seed: 2033,
    // Kikuka Sho, late October (post 15:40): a low WSW sun toward the 4th corner, slightly behind the stand
    // (stand faces ~145°, the straight runs ~55°, from the GSI aerial; elevation raised 16.7° -> 18° for readable shadows)
    time: {
      month: 10, post: '15:40', sunElevDeg: 18, sunAzimDeg: -83, fogNear: 140, fogFar: 420, exposure: 1.0,
      sky: { top: '#6d9dd3', mid: '#b5cce4', horizon: '#ead8bf', sun: '#fff0d4' },
      sunColor: '#ffe7c4', sunIntensity: 2.7, hemiSky: '#dde6f1', hemiGround: '#7b8650', hemiIntensity: 1.18,
    },
    turf: { color: '#62903f', widthM: 30 }, dirt: { color: '#c0b294', widthM: 25 }, rails: { color: '#f6f6f2' },
    lawn: '#6e9a47', verge: '#679245', water: '#5f8590', leaf: ['#5d7c43', '#6d8a4a', '#b9a04a', '#c08240'], autumn: 0.2, dust: '#7b6c4b',
    infieldTrees: 0, // the infield is nearly all lake
    saddleCloth: { cloth: '#3a2a96', ink: '#f5c800' }, // classic (Kikuka Sho): 紫紺 with yellow text
    stand: { name: 'Goal Side Stand (2023)', lengthM: 255, floors: 7, depthM: 38, colors: { body: '#e7e6e2', roof: '#ecebe7', glass: '#41698c', seats: '#dcdcd8' } },
    infield: [{ type: 'pond', xFrac: 0, sizeM: [550, 100], distM: 80, notes: 'The flood-control lake (a remnant of Ogura-ike) fills almost the whole infield; longer than W, so it reads as one continuous lake. Benten island with its shrine sits near the middle.' }],
    backdrop: {
      ranges: [
        { r: 585, base: '#8d97b2', h: [6, 26], step: 0.16, haze: 0.62 }, // Uji / Daigo hills E–SE, Kyotanabe hills S
        { r: 550, base: '#8a9784', h: [3, 8], step: 0.1, haze: 0.5 },    // Otokoyama and nearer low hills
      ],
      landmarks: [
        { type: 'screen', bearingDeg: 0, distM: 300, wM: 64.0, hM: 10.8, liftM: 4 }, // Turf Vision (really on the lake's near shore)
      ],
      clouds: 5,
    },
    facts: {
      turfCircM: 1894.3, dirtCircM: 1607.6, turfStraightM: 403.7, dirtStraightM: 329.1, elevationM: 4.3,
      straightProfile: [[403.7, 0], [0, 0]],
      races: [
        { name: 'Tenno Sho (Spring)', jp: '天皇賞(春)', surface: 'turf', distM: 3200, month: 5 },
        { name: 'Shuka Sho', jp: '秋華賞', surface: 'turf', distM: 2000, month: 10 },
        { name: 'Kikuka Sho', jp: '菊花賞', surface: 'turf', distM: 3000, month: 10 },
        { name: 'Queen Elizabeth II Cup', jp: 'エリザベス女王杯', surface: 'turf', distM: 2200, month: 11 },
        { name: 'Mile Championship', jp: 'マイルチャンピオンシップ', surface: 'turf', distM: 1600, month: 11 },
      ],
    },
    signature: 'A huge infield lake with wooded Benten island beyond a flat 403.7 m straight, the 4.3 m 淀の坂 hill on the far 3rd corner, and the 2023 Goal Side stand with its long blue glass band and thin cantilevered roof.',
    sources: ['https://www.jra.go.jp/facilities/race/kyoto/course/index.html', 'https://ja.wikipedia.org/wiki/京都競馬場', 'https://en.wikipedia.org/wiki/Kyoto_Racecourse', 'https://www.obayashi.co.jp/thinking/detail/project78.html', 'https://commons.wikimedia.org/wiki/File:Kyoto_Racecourse_Aerial_photograph_2020_cropped.jpg'],
    uncertain: ['stand.colors (2023 photos)', 'stand.floors (6 or 7)', 'stand.depthM (estimated)', 'time (computed sun)', 'infield[0] size and distance (±15 m from the aerial)', 'backdrop.ranges', 'backdrop.landmarks[0] (the screen is really much closer, on the shore)', 'facts.races[0].month (late April or early May)', 'needs new kits: Benten island, fountains, 淀の坂, the poplar wall along the back straight'],
  },
  {
    id: 'hanshin', en: 'Hanshin Racecourse', jp: '阪神競馬場', group: 'JRA G1', builder: 'track', gait: 'race',
    hand: 'right', surface: 'turf', lead: 'L', W: 400, seed: 2034,
    // Oka Sho, early-to-mid April (post 15:40): spring haze, Somei Yoshino in full bloom, overseeded turf bright green
    time: {
      month: 4, post: '15:40', sunElevDeg: 33, sunAzimDeg: 60, fogNear: 120, fogFar: 390, exposure: 1.02,
      sky: { top: '#7aa6d6', mid: '#bdd2e6', horizon: '#e7e4da', sun: '#fff4e0' },
      sunColor: '#fff1dc', sunIntensity: 2.8, hemiSky: '#e2eaf2', hemiGround: '#7f8752', hemiIntensity: 1.22,
    },
    turf: { color: '#5f9a3c', widthM: 27 }, dirt: { color: '#a8a194', widthM: 24 }, rails: { color: '#f4f4f0' },
    lawn: '#a3a467', verge: '#8e9c57', leaf: ['#7c9a52', '#6f8f4a', '#86a258'], autumn: 0, dust: '#7d7158',
    blossom: ['#f4d4dc', '#eec3cf', '#f7e0e6'], infieldTrees: 28, // cherry trees ring the course and line the infield
    saddleCloth: { cloth: '#3a2a96', ink: '#f5c800' }, // classic (Oka Sho): 紫紺 with yellow text
    stand: { name: 'Grandstand (east and west wings, 1991)', lengthM: 280, floors: 7, depthM: 35, colors: { body: '#c4c8c9', roof: '#d3d6d8', glass: '#4f6b70', seats: '#5d6b7d' } },
    infield: [{ type: 'jumps', count: 4, depthM: 140, notes: 'Steeplechase course inside the dirt (1366.7 m loop plus a diagonal).' }],
    backdrop: {
      ranges: [
        { r: 590, base: '#76879a', h: [24, 50], step: 0.2, haze: 0.5 },  // the Rokko range to the west
        { r: 555, base: '#6e8263', h: [8, 22], step: 0.13, haze: 0.42 }, // Takarazuka / Nishinomiya foothills
      ],
      landmarks: [
        { type: 'screen', bearingDeg: -15, distM: 300, wM: 46.4, hM: 11.2, liftM: 4 }, // Turf Vision
        { type: 'skyline', fromDeg: -50, toDeg: 50, distM: 520, heightM: [6, 20] },    // Nigawa / Takarazuka apartments
      ],
      clouds: 7,
    },
    facts: {
      turfCircM: 2089, dirtCircM: 1517.6, turfStraightM: 473.6, dirtStraightM: 352.7, elevationM: 2.4,
      straightProfile: [[473.6, 0], [200, -1.4], [80, 0.4], [0, 0.4]], // outer course: a gentle dip off the turn, then the 1.8 m hill 200–80 m out
      races: [
        { name: 'Osaka Hai', jp: '大阪杯', surface: 'turf', distM: 2000, month: 4 },
        { name: 'Oka Sho (Japanese 1000 Guineas)', jp: '桜花賞', surface: 'turf', distM: 1600, month: 4 },
        { name: 'Takarazuka Kinen', jp: '宝塚記念', surface: 'turf', distM: 2200, month: 6 },
        { name: 'Hanshin Juvenile Fillies', jp: '阪神ジュベナイルフィリーズ', surface: 'turf', distM: 1600, month: 12 },
        { name: 'Asahi Hai Futurity Stakes', jp: '朝日杯フューチュリティステークス', surface: 'turf', distM: 1600, month: 12 },
      ],
    },
    signature: 'The Oka Sho under full cherry blossom, the long glass grandstand with its thin flat roof, the 473.6 m outer straight that dips and then climbs a 1.8 m hill, and the green Rokko hills close behind the back straight.',
    sources: ['https://www.jra.go.jp/facilities/race/hanshin/course/index.html', 'https://ja.wikipedia.org/wiki/阪神競馬場', 'https://en.wikipedia.org/wiki/Hanshin_Racecourse', 'https://ja.wikipedia.org/wiki/桜花賞', 'https://commons.wikimedia.org/wiki/File:Hanshin_Racecourse_Aerial_photograph_2012.jpg'],
    uncertain: ['stand.colors (c.2009 photo)', 'stand.lengthM / depthM (from the aerial)', 'time (computed sun)', 'backdrop.ranges (map geography)', 'backdrop.landmarks', 'infield[0] jump count', 'facts.straightProfile (±0.2 m, read off the JRA chart)', 'lawn / verge', 'needs a new kit: a cherry-tree row along the outer rail and the 1600 m start pocket'],
  },
  {
    id: 'chukyo', en: 'Chukyo Racecourse', jp: '中京競馬場', group: 'JRA G1', builder: 'track', gait: 'race',
    hand: 'left', surface: 'turf', lead: 'R', W: 400, seed: 2035,
    // Takamatsunomiya Kinen, late March (post 15:40). Sun computed for 29 Mar 15:40 at 35.07N: elevation 29.6°, azimuth 252° (WSW);
    // from the GSI aerial the Pegasus stand faces ~144° and the straight runs ~234°, so the sun is toward +X, 18° round toward the stand side
    time: {
      month: 3, post: '15:40', sunElevDeg: 30, sunAzimDeg: 72, fogNear: 125, fogFar: 400, exposure: 1.02,
      sky: { top: '#76a2d3', mid: '#bbd0e5', horizon: '#e8e2d4', sun: '#fff2dc' },
      sunColor: '#fff0d8', sunIntensity: 2.8, hemiSky: '#e0e8f1', hemiGround: '#81844f', hemiIntensity: 1.2,
    },
    turf: { color: '#6a963e', widthM: 28 }, dirt: { color: '#b1a693', widthM: 25 }, rails: { color: '#f4f4f0' },
    lawn: '#a59e68', verge: '#7d9a4a', leaf: ['#4f6b3e', '#5d7745', '#6b7f4a', '#8a8a62'], autumn: 0, dust: '#7f7662',
    infieldTrees: 12, // the infield is a children's playland, pony ring and steeplechase course with scattered trees
    stand: { name: 'Pegasus (main stand, 2012)', lengthM: 200, floors: 6, depthM: 40, colors: { body: '#dfe1e2', roof: '#dedbd0', glass: '#8eaabb', seats: '#b9b048' } },
    infield: [{ type: 'jumps', count: 4, depthM: 120, notes: 'Steeplechase course in the infield (jumps 1.15–1.55 m); a hedge, flower beds and topiary line the dirt’s inner rail below the screen.' }],
    backdrop: {
      ranges: [
        { r: 585, base: '#9aa0a8', h: [3, 9], step: 0.12, haze: 0.62 }, // low, hazy Owari / Mikawa hills: a flat horizon
        { r: 545, base: '#7f8e74', h: [2, 6], step: 0.1, haze: 0.45 },  // tree belts of the Toyoake suburbs
      ],
      landmarks: [
        { type: 'screen', bearingDeg: 0, distM: 300, wM: 26, hM: 10.5, liftM: 2 },   // Turf Vision (really just inside the dirt, behind the finish post)
        { type: 'skyline', fromDeg: -30, toDeg: 50, distM: 520, heightM: [5, 24] }, // Toyoake / Nagoya Midori-ku flats
      ],
      clouds: 6,
    },
    facts: {
      turfCircM: 1705.9, dirtCircM: 1530, turfStraightM: 412.5, dirtStraightM: 410.7, elevationM: 3.5,
      straightProfile: [[412.5, 0], [340, 0], [240, 2.0], [0, 2.0]], // down off the 3rd–4th corner, then a 2.0 m climb 340–240 m out
      races: [
        { name: 'Takamatsunomiya Kinen', jp: '高松宮記念', surface: 'turf', distM: 1200, month: 3 },
        { name: 'Champions Cup', jp: 'チャンピオンズカップ', surface: 'dirt', distM: 1800, month: 12 },
      ],
    },
    signature: 'A long 412.5 m straight that climbs a 2.0 m hill right at its start; the Pegasus stand’s huge one-way cantilevered roof of steel ribs and white membrane fins (Pegasus’s wings), with the tower-shaped Twin Hat behind it.',
    sources: ['https://www.jra.go.jp/facilities/race/chukyo/course/index.html', 'https://ja.wikipedia.org/wiki/中京競馬場', 'https://en.wikipedia.org/wiki/Chukyo_Racecourse', 'https://ja.wikipedia.org/wiki/高松宮記念_(競馬)', 'https://ja.wikipedia.org/wiki/チャンピオンズカップ_(競馬)', 'https://www.yamashitasekkei.co.jp/project/post_4/', 'https://commons.wikimedia.org/wiki/File:Chukyo_Racecourse_Main-Stand_PEGASUS,_Toyoake_2018.jpg'],
    uncertain: ['time (computed sun; sunAzimDeg 70–78)', 'turf / dirt widths (secondary source)', 'stand.colors and size (photos, aerial)', 'stand.floors', 'infield[0] jump count', 'backdrop (flat horizon; heights are guesses)', 'backdrop.landmarks[0] (the screen is really ~60 m away; size estimated)', 'facts.straightProfile (only the 340→240 m climb is sourced)', 'needs new kits: the Pegasus membrane-fin roof, Twin Hat, power pylons'],
  },
  {
    id: 'oi', en: 'Oi Racecourse (night)', jp: '大井競馬場', group: 'NAR JpnI', builder: 'track', gait: 'race',
    hand: 'right', surface: 'dirt', lead: 'L', W: 400, seed: 2036,
    dirtOnly: true, // one 25 m dirt course, no turf: the infield starts at its inner rail
    // Teio Sho (JpnI, 2000 m), a "Twinkle" night race in early July, post ~20:10; the sun is 12° below the horizon,
    // so the horse is lit by the floodlights (floodlights.*), not by `sunElevDeg`
    time: {
      month: 7, post: '20:10', sunElevDeg: -12, sunAzimDeg: -161, fogNear: 150, fogFar: 480, exposure: 1.15, night: true,
      sky: { top: '#060b1d', mid: '#111a35', horizon: '#3e3650', sun: '#2a2540' }, // navy sky, mauve city glow at the horizon
      hemiSky: '#26304a', hemiGround: '#2b2822', hemiIntensity: 0.4,
    },
    floodlights: { count: 10, heightM: 32, color: '#f4f2ea', intensity: 1.0, poleColor: '#b8bcc0' }, // masts per 400 m, both sides
    dirt: { color: '#d3ccbd', widthM: 25 }, // pale, near-white Western Australian sand (since 2023)
    rails: { color: '#f4f4f0' },
    lawn: '#3f6a31', apron: '#5fa391', // the teal-coated apron in front of the stands; the infield is lit less than the track
    leaf: ['#3f6436', '#4d7340', '#5a7d45'], autumn: 0, dust: '#bdb5a5',
    saddleCloth: { cloth: '#3a2a96', ink: '#f5c800' }, // TCK graded race: 紫紺 with yellow text
    stand: { name: 'L-WING (2003) and G-FRONT (2015)', lengthM: 330, floors: 7, depthM: 40, colors: { body: '#e3e5e6', roof: '#eceeef', glass: '#5d7a87', seats: '#e07a3c' } },
    infield: [], infieldTrees: 3, // hedges and a few trees, not a park
    backdrop: {
      ranges: [], // reclaimed Tokyo Bay lowland: no hills, the horizon is all city
      landmarks: [
        { type: 'screen', bearingDeg: 0, distM: 300, wM: 28.48, hM: 8.0, liftM: 4 },        // Aurora Vision
        { type: 'skyline', fromDeg: -45, toDeg: 25, distM: 520, heightM: [8, 30] },       // Heiwajima warehouses and flats across the infield
        { type: 'skyline', fromDeg: -120, toDeg: -65, distM: 520, heightM: [25, 75] },    // Minami-Oi / Omori-kaigan towers
        { type: 'skyline', fromDeg: 30, toDeg: 105, distM: 520, heightM: [6, 14] },       // Tokyo Monorail viaduct along the Keihin Canal
        { type: 'skyline', fromDeg: 145, toDeg: 180, distM: 520, heightM: [60, 140] },    // Shinagawa high-rises behind the stands
      ],
      clouds: 3,
    },
    facts: {
      turfCircM: null, dirtCircM: 1600, turfStraightM: null, dirtStraightM: 386, elevationM: 0,
      straightProfile: [[386, 0], [0, 0]],
      races: [
        { name: 'Haneda Hai', jp: '羽田盃', surface: 'dirt', distM: 1800, month: 4 },
        { name: 'Tokyo Derby', jp: '東京ダービー', surface: 'dirt', distM: 2000, month: 6 },
        { name: 'Teio Sho', jp: '帝王賞', surface: 'dirt', distM: 2000, month: 7 },
        { name: 'Japan Dirt Classic', jp: 'ジャパンダートクラシック', surface: 'dirt', distM: 2000, month: 10 },
        { name: 'JBC Classic (host years)', jp: 'JBCクラシック', surface: 'dirt', distM: 2000, month: 11 },
        { name: 'JBC Sprint (host years)', jp: 'JBCスプリント', surface: 'dirt', distM: 1200, month: 11 },
        { name: 'JBC Ladies’ Classic (host years)', jp: 'JBCレディスクラシック', surface: 'dirt', distM: 1800, month: 11 },
        { name: 'Tokyo Daishoten', jp: '東京大賞典', surface: 'dirt', distM: 2000, month: 12 },
      ],
    },
    signature: 'Twinkle night racing (Japan’s first, 1986): a flat, near-white sand oval glowing under tall floodlight masts, a 386 m straight, the L-WING’s white cantilevered roof beside the G-FRONT glass stand, and the lit city all around.',
    sources: ['https://ja.wikipedia.org/wiki/大井競馬場', 'https://www.oddspark.com/keiba/racetrack/33/course.html', 'https://keibajo.jp/oi/top.html', 'https://ja.wikipedia.org/wiki/帝王賞', 'https://ja.wikipedia.org/wiki/ジャパンダートクラシック', 'https://ja.wikipedia.org/wiki/東京大賞典', 'https://ja.wikipedia.org/wiki/ナイター競走', 'https://commons.wikimedia.org/wiki/File:大井競馬場.jpg'],
    uncertain: ['time.post (20:10 assumed)', 'sky / light values (chosen for an urban night)', 'dirt.color (dusk photo)', 'stand size and colours', 'floodlights (count, height, colour from photos; no published spec)', 'backdrop.landmarks[0] (28.48 × 8.0 m from an old install list; position unknown)', 'skyline bearings and heights (OSM)', 'the Tokyo Daishoten is run at a day/dusk meeting, not under lights', 'needs new kits: the monorail with a lit train, the L-WING roof, the left-handed course (2021)'],
  },
  {
    id: 'kawasaki', en: 'Kawasaki Racecourse (night)', jp: '川崎競馬場', group: 'NAR JpnI', builder: 'track', gait: 'race',
    hand: 'left', surface: 'dirt', lead: 'R', W: 400, seed: 2037,
    dirtOnly: true, // one 25 m dirt course, no turf
    // Kawasaki Kinen (JpnI, 2100 m): moved to early April in 2024 and run under lights since (post ~20:10)
    time: {
      month: 4, post: '20:10', sunElevDeg: -24, sunAzimDeg: 60, fogNear: 140, fogFar: 460, exposure: 1.15, night: true,
      sky: { top: '#070b1c', mid: '#121a34', horizon: '#4a3a48', sun: '#2a2540' }, // navy sky, warm industrial glow low down
      hemiSky: '#262f48', hemiGround: '#2b2822', hemiIntensity: 0.4,
    },
    floodlights: { count: 8, heightM: 25, color: '#f3f1e8', intensity: 1.0, poleColor: '#b8bcc0' },
    dirt: { color: '#b09a7e', widthM: 25 }, // warm grey-tan Aomori sand (since 2011)
    rails: { color: '#f4f4f0' },
    lawn: '#55573a', apron: '#9a9c98', leaf: ['#3f6436', '#4d7340', '#5a7d45'], autumn: 0, dust: '#a8957c',
    saddleCloth: { cloth: '#3a2a96', ink: '#f5c800' }, // assumed as at Oi (per-track NAR conventions unchecked)
    stand: { name: 'No.1 (1983) and No.2 (1997, renewed 2016) stands', lengthM: 185, floors: 5, depthM: 40, colors: { body: '#e6e7e8', roof: '#eef0f1', glass: '#4a5a66', seats: '#d46a3a' } },
    infield: [], infieldTrees: 2, // lawn plaza, betting halls and a car park
    backdrop: {
      ranges: [],
      landmarks: [
        { type: 'screen', bearingDeg: -22, distM: 300, wM: 72, hM: 16, liftM: 3 },        // Kawasaki Dream Vision (72 × 16 m, a 2010 Guinness record)
        { type: 'skyline', fromDeg: -40, toDeg: 35, distM: 520, heightM: [8, 36] },       // Fujimi flats and shops beyond the back straight
        { type: 'skyline', fromDeg: 35, toDeg: 70, distM: 520, heightM: [15, 50] },       // downtown Kawasaki-ku
        { type: 'skyline', fromDeg: 70, toDeg: 115, distM: 520, heightM: [30, 110] },     // Kawasaki Station high-rises
        { type: 'skyline', fromDeg: -115, toDeg: -45, distM: 520, heightM: [10, 45] },    // Keihin coastal factory belt
        { type: 'skyline', fromDeg: -160, toDeg: -135, distM: 520, heightM: [60, 100] },  // Minatocho riverside towers behind the stands
      ],
      clouds: 3,
    },
    facts: {
      turfCircM: null, dirtCircM: 1200, turfStraightM: null, dirtStraightM: 300, elevationM: 0,
      straightProfile: [[300, 0], [0, 0]],
      races: [
        { name: 'Kawasaki Kinen', jp: '川崎記念', surface: 'dirt', distM: 2100, month: 4 },
        { name: 'Zen-Nippon Nisai Yushun', jp: '全日本2歳優駿', surface: 'dirt', distM: 1600, month: 12 },
        { name: 'JBC Classic (host years)', jp: 'JBCクラシック', surface: 'dirt', distM: 2100, month: 11 },
        { name: 'JBC Sprint (host years)', jp: 'JBCスプリント', surface: 'dirt', distM: 1400, month: 11 },
        { name: 'JBC Ladies’ Classic (host years)', jp: 'JBCレディスクラシック', surface: 'dirt', distM: 1600, month: 11 },
      ],
    },
    signature: 'Sparking Night: a tight, flat 1,200 m left-handed sand oval with a 300 m straight, the 72 m Kawasaki Dream Vision across the infield, and the city’s lights all round.',
    sources: ['https://ja.wikipedia.org/wiki/川崎競馬場', 'https://en.wikipedia.org/wiki/Kawasaki_Racecourse', 'https://www.oddspark.com/keiba/racetrack/34/course.html', 'https://ja.wikipedia.org/wiki/川崎記念', 'https://nar.netkeiba.com/race/result.html?race_id=202545040911', 'https://en.wikipedia.org/wiki/List_of_largest_video_screens'],
    uncertain: ['time (computed sun; stand orientation from the aerial)', 'sky / light values', 'floodlights (from photos)', 'dirt.color', 'lawn (dormant in April)', 'stand size and colours', 'backdrop.landmarks[0] (size sourced; really ~190 m away)', 'skyline bearings and heights', 'JBC distances (2012/2016)', 'needs new kits: the infield car park and halls, lamps along the stand roofs'],
  },
  {
    id: 'funabashi', en: 'Funabashi Racecourse (night)', jp: '船橋競馬場', group: 'NAR JpnI', builder: 'track', gait: 'race',
    hand: 'left', surface: 'dirt', lead: 'R', W: 400, seed: 2038,
    dirtOnly: true, // one dirt oval, no turf
    // Kashiwa Kinen (JpnI, 1600 m), early May, "Heartbeat Nighter" post ~20:05
    time: {
      month: 5, post: '20:05', sunElevDeg: -18, sunAzimDeg: 54, fogNear: 150, fogFar: 480, exposure: 1.15, night: true,
      sky: { top: '#060b1c', mid: '#121a33', horizon: '#4a3a4c', sun: '#2a2540' }, // full night, bayside city glow
      hemiSky: '#25304a', hemiGround: '#2c2a24', hemiIntensity: 0.4,
    },
    floodlights: { count: 12, heightM: 25, color: '#f3f5f7', intensity: 1.0, poleColor: '#b9bdc1' },
    dirt: { color: '#b2a898', widthM: 25 }, // grey sand
    rails: { color: '#f4f4f0' },
    lawn: '#466e35', apron: '#7f837f', leaf: ['#3e5f37', '#4f7540', '#5f8447'], autumn: 0, dust: '#a99f90',
    saddleCloth: { cloth: '#3a2a96', ink: '#f5c800' }, // assumed as at Oi (per-track NAR conventions unchecked)
    stand: { name: 'New stand (A 2022, B 2024)', lengthM: 140, floors: 5, depthM: 35, colors: { body: '#e4e5e3', roof: '#e9eaea', glass: '#424850', seats: '#9b93bf' } },
    infield: [{ type: 'pond', xFrac: 0.8, sizeM: [55, 90], distM: 125, notes: 'Reedy pond and wetland at the 1st–2nd-corner end of the infield.' }],
    infieldTrees: 6,
    backdrop: {
      ranges: [],
      landmarks: [
        { type: 'screen', bearingDeg: -10, distM: 300, wM: 17.5, hM: 9.2, liftM: 2 },      // infield vision (2017)
        { type: 'skyline', fromDeg: -35, toDeg: 75, distM: 520, heightM: [6, 16] },       // stable rows, Keiyo Line and expressway viaducts
        { type: 'skyline', fromDeg: 35, toDeg: 70, distM: 560, heightM: [20, 60] },       // Minami-Funabashi towers, IKEA, LaLa arena
        { type: 'skyline', fromDeg: 75, toDeg: 115, distM: 500, heightM: [12, 30] },      // LaLaport TOKYO-BAY
        { type: 'skyline', fromDeg: -120, toDeg: -75, distM: 520, heightM: [10, 20] },    // public-housing flats; Yatsu tidal flat beyond
        { type: 'skyline', fromDeg: 135, toDeg: 170, distM: 540, heightM: [20, 80] },     // central Funabashi behind the stands
      ],
      clouds: 2,
    },
    facts: {
      turfCircM: null, dirtCircM: 1400, turfStraightM: null, dirtStraightM: 308, elevationM: 0,
      straightProfile: [[308, 0], [0, 0]],
      races: [
        { name: 'Kashiwa Kinen', jp: 'かしわ記念', surface: 'dirt', distM: 1600, month: 5 },
        { name: 'JBC Classic (host years)', jp: 'JBCクラシック', surface: 'dirt', distM: 1800, month: 11 },
        { name: 'JBC Sprint (host years)', jp: 'JBCスプリント', surface: 'dirt', distM: 1000, month: 11 },
        { name: 'JBC Ladies’ Classic (host years)', jp: 'JBCレディスクラシック', surface: 'dirt', distM: 1800, month: 11 },
      ],
    },
    signature: 'Heartbeat Nighter: a flat, grey-sand, left-handed oval with banked spiral turns and a short 308 m straight, floodlight masts on both sides, the 2022–24 stand of white slabs and dark glass, and LaLaport TOKYO-BAY next door.',
    sources: ['https://ja.wikipedia.org/wiki/船橋競馬場', 'https://en.wikipedia.org/wiki/Funabashi_Racecourse', 'https://ja.wikipedia.org/wiki/かしわ記念', 'https://nar.netkeiba.com/race/result.html?race_id=202543050511', 'https://ja.wikipedia.org/wiki/ナイター競走', 'https://commons.wikimedia.org/wiki/File:Funabashi_Racecourse_Aerial_view.jpg'],
    uncertain: ['time (computed sun; stand orientation from a 1989 aerial)', 'sky / light values', 'floodlights (from photos)', 'dirt.color', 'apron / lawn / leaf', 'stand size and colours', 'backdrop.landmarks[0] (size estimated; really ~60–80 m away)', 'skyline bearings and heights', 'infield pond size and position', 'needs new kits: the slab-and-glass stand, yellow-lit rails, the infield mini-oval'],
  },
  {
    id: 'urawa', en: 'Urawa Racecourse (twilight)', jp: '浦和競馬場', group: 'NAR JpnI', builder: 'track', gait: 'race',
    hand: 'left', surface: 'dirt', lead: 'R', W: 400, seed: 2039,
    dirtOnly: true, // one dirt oval, no turf (24 m on the home straight)
    // Sakitama Hai (JpnI since 2024, 1400 m), late June, post 18:50: sunset (sun ~1.5° up over the 4th corner, raised to 8° for
    // readable shading); the floodlights (2023) are on but the low sun is still the key light
    time: {
      month: 6, post: '18:50', sunElevDeg: 8, sunAzimDeg: -71, fogNear: 140, fogFar: 440, exposure: 1.05,
      sky: { top: '#5476a8', mid: '#a6b4cc', horizon: '#f0c6a0', sun: '#ffb35c' }, // early-summer sunset
      sunColor: '#ffb46e', sunIntensity: 1.9, hemiSky: '#b9c3d8', hemiGround: '#6e6248', hemiIntensity: 1.0,
    },
    floodlights: { count: 22, heightM: 20, color: '#f4f6f8', intensity: 1.0, poleColor: '#b8bcc0' }, // slim lamp poles ~35 m apart
    dirt: { color: '#b5a088', widthM: 24 }, // light beige-grey sand
    rails: { color: '#f4f4f0' },
    lawn: '#62903f', apron: '#a3a29c', leaf: ['#3f6436', '#4d7340', '#5a7d45'], autumn: 0, dust: '#a8957c',
    saddleCloth: { cloth: '#3a2a96', ink: '#ffffff' }, // Sakitama Hai: 紫紺 with white text (ゼッケン (競馬))
    stand: { name: 'No.3 and No.2 stands (2019)', lengthM: 180, floors: 5, depthM: 30, colors: { body: '#cfd3d8', roof: '#45474d', glass: '#46637d', seats: '#3a7f96' } },
    infield: [{ type: 'pond', xFrac: 0.25, sizeM: [45, 25], distM: 40, notes: 'The retention basin in the infield memorial park (浦和記念公園).' }],
    infieldTrees: 8, // park lawn with clipped shrubs, hedges and small trees
    backdrop: {
      ranges: [], // Kanto plain: houses all round
      landmarks: [
        { type: 'screen', bearingDeg: -12, distM: 300, wM: 22, hM: 10, liftM: 3 },        // infield big monitor / odds board
        { type: 'skyline', fromDeg: -50, toDeg: 50, distM: 520, heightM: [6, 14] },      // two-storey houses beyond the back straight
        { type: 'skyline', fromDeg: 5, toDeg: 30, distM: 540, heightM: [18, 42] },       // mid-rise flats
        { type: 'skyline', fromDeg: 55, toDeg: 115, distM: 520, heightM: [6, 14] },      // houses past the 1st corner
        { type: 'skyline', fromDeg: -100, toDeg: -75, distM: 560, heightM: [10, 22] },   // Saitama-Shintoshin towers
        { type: 'skyline', fromDeg: -150, toDeg: -120, distM: 520, heightM: [15, 40] },  // Urawa Station area, behind the stands
        { type: 'skyline', fromDeg: 125, toDeg: 160, distM: 520, heightM: [12, 30] },    // Minami-Urawa Station area
      ],
      clouds: 5,
    },
    facts: {
      turfCircM: null, dirtCircM: 1200, turfStraightM: null, dirtStraightM: 220, elevationM: 0,
      straightProfile: [[220, 0], [0, 0]],
      races: [
        { name: 'Sakitama Hai', jp: 'さきたま杯', surface: 'dirt', distM: 1400, month: 6 },
        { name: 'JBC Classic (2019)', jp: 'JBCクラシック', surface: 'dirt', distM: 2000, month: 11 },
        { name: 'JBC Sprint (2019)', jp: 'JBCスプリント', surface: 'dirt', distM: null, month: 11 },
        { name: 'JBC Ladies’ Classic (2019)', jp: 'JBCレディスクラシック', surface: 'dirt', distM: null, month: 11 },
      ],
    },
    signature: 'A tight, flat 1,200 m left-handed sand oval with a 220 m straight packed into Saitama housing; an infield memorial park of clipped shrubs and a pond; glass stands with dark slab roofs; twilight (薄暮) racing under new floodlights since 2023.',
    sources: ['https://ja.wikipedia.org/wiki/浦和競馬場', 'https://en.wikipedia.org/wiki/Urawa_Racecourse', 'https://ja.wikipedia.org/wiki/さきたま杯', 'https://nar.netkeiba.com/race/result.html?race_id=202542062511', 'https://ja.wikipedia.org/wiki/ゼッケン_(競馬)', 'https://commons.wikimedia.org/wiki/File:Urawa_Racecourse_Aerial_photograph.1989.jpg'],
    uncertain: ['time (computed; sun raised from 1.5° to 8° for readable shading)', 'sky / light values', 'floodlights (from a photo)', 'dirt.color', 'lawn (June assumed)', 'stand size and colours', 'infield pond size and position', 'backdrop.landmarks (screen size estimated; really ~140 m away)', 'skyline bearings and heights', 'JBC 2019 Sprint / Ladies’ distances not fetched', 'needs new kits: topiary, the dark slab stand roof, the narrower back straight'],
  },
  {
    id: 'morioka', en: 'Morioka Racecourse (night)', jp: '盛岡競馬場', group: 'NAR JpnI', builder: 'track', gait: 'race',
    hand: 'left', surface: 'dirt', lead: 'R', W: 400, seed: 2040,
    // a 1600 m dirt oval with the 1400 m turf course INSIDE it (the only NAR track with turf): the horse runs on the outer dirt
    innerTurf: true, // from the stands: apron, dirt (25 m), turf (25 m), then the infield
    // Mile Championship Nambu Hai (JpnI, dirt 1600 m), mid-October (Sports Day), post 18:15 in both 2024 and 2025,
    // run under the dirt course's floodlights (installed Sept 2018). Sun computed for 13 Oct 2025 18:15 at 39.69N 141.22E:
    // elevation -15.4°, azimuth 272°. From the OSM track and GSI aerial, the stand faces ~135° (SE) and the home straight runs ~225° (SW).
    time: {
      month: 10, post: '18:15', sunElevDeg: -15, sunAzimDeg: 43, fogNear: 150, fogFar: 480, exposure: 1.15, night: true,
      sky: { top: '#050a1a', mid: '#0f1830', horizon: '#1f2640', sun: '#2a2540' }, // rural night: dark forest across the infield, the city glow is behind the stands
      hemiSky: '#232c45', hemiGround: '#26281f', hemiIntensity: 0.38,
    },
    floodlights: { count: 10, heightM: 30, color: '#f3f1e8', intensity: 1.0, poleColor: '#b8bcc0' }, // dirt course only
    turf: { color: '#5f8f3e', widthM: 25 }, dirt: { color: '#b3a993', widthM: 25 }, rails: { color: '#f4f4f0' },
    lawn: '#6a8f45', verge: '#6f9447', apron: '#bfa9a0', water: '#6f8c86', // apron: pinkish brick paving in front of the stand
    leaf: ['#3f5f37', '#4e6d3e', '#8a7a3e', '#b0743a'], autumn: 0.2, dust: '#a59c88',
    infieldTrees: 8,
    saddleCloth: { cloth: '#3a2a96', ink: '#f5c800' }, // Iwate Dirt Grade races: 紫紺 with yellow text (cloth reads "MCS南部杯")
    stand: { name: 'Main stand with glass atrium (1996)', lengthM: 135, floors: 4, depthM: 45, colors: { body: '#d3d6d7', roof: '#a7abad', glass: '#4f6a76', seats: '#2f8a78' } },
    infield: [{ type: 'pond', xFrac: 0.45, sizeM: [170, 55], distM: 110, notes: 'Long egg-shaped pond with a round feature (fountain?) in the middle of the infield, from the GSI aerial.' }],
    backdrop: {
      ranges: [
        { r: 545, base: '#3f5a38', h: [8, 22], step: 0.12, haze: 0.4 },  // forested hillside right behind the back straight
        { r: 585, base: '#6f7d96', h: [14, 32], step: 0.16, haze: 0.6 }, // Kitakami highlands to the E / SE
      ],
      landmarks: [
        // Mt Iwate (2038 m, 25.8 km NW) really stands at bearing ~178, directly behind the stand, where the camera never looks.
        // It is moved across the infield (artistic licence) so the track's best-known view is in the picture.
        { type: 'fuji', bearingDeg: -28, distM: 575, heightM: 40 },
        { type: 'screen', bearingDeg: 0, distM: 300, wM: 30, hM: 9, liftM: 3 },     // infield vision (renewed 2014), opposite the stand
      ],
      clouds: 3,
    },
    facts: {
      turfCircM: 1400, dirtCircM: 1600, turfStraightM: 300, dirtStraightM: 300, elevationM: 4.4, // turf course: 4.6 m
      straightProfile: [[300, 0], [160, -1.6], [0, -0.4]], // down off the 3rd–4th-corner hill, then a climb from ~150 m out
      races: [
        { name: 'Mile Championship Nambu Hai', jp: 'マイルチャンピオンシップ南部杯', surface: 'dirt', distM: 1600, month: 10 },
        { name: 'JBC Classic (host years: 2002, 2014, 2022)', jp: 'JBCクラシック', surface: 'dirt', distM: 2000, month: 11 },
        { name: 'JBC Sprint (host years)', jp: 'JBCスプリント', surface: 'dirt', distM: null, month: 11 },
        { name: 'JBC Ladies’ Classic (host years)', jp: 'JBCレディスクラシック', surface: 'dirt', distM: null, month: 11 },
      ],
    },
    signature: 'OROパーク: a big, hilly left-handed 1,600 m dirt oval with Japan’s only NAR turf course inside it, a 4.4 m hill over the 3rd–4th corner and a rise from ~150 m out on a 300 m straight. The 1996 stand is clad in silver aluminium, with angular cantilevered decks and a V-shaped glass atrium. Forest runs right behind the back straight, Mt Iwate stands to the NW, and the Nambu Hai is now run under floodlights.',
    sources: ['https://ja.wikipedia.org/wiki/盛岡競馬場', 'https://www.oddspark.com/keiba/racetrack/11/course.html', 'https://en.wikipedia.org/wiki/Morioka_Racecourse', 'https://ja.wikipedia.org/wiki/マイルチャンピオンシップ南部杯', 'https://nar.netkeiba.com/race/result.html?race_id=202535101312', 'https://nar.netkeiba.com/race/result.html?race_id=202435101412', 'https://ja.wikipedia.org/wiki/ゼッケン_(競馬)', 'https://ja.wikipedia.org/wiki/JBCクラシック', 'https://www.openstreetmap.org/way/566989957', 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/16/58476/24883.jpg', 'https://commons.wikimedia.org/wiki/File:Morioka_racecourse_grandstand.JPG', 'https://commons.wikimedia.org/wiki/File:Morioka_Racecourse_2024.jpg', 'https://commons.wikimedia.org/wiki/File:11R_南部杯_トウホクビジン_(10287637683).jpg'],
    uncertain: ['time.post (18:15 in 2024 and 2025; earlier years ran ~16:30 in daylight)', 'sky / light values', 'floodlights (count, height, colour: only “towers on the dirt course since Sept 2018” is sourced)', 'backdrop.landmarks[0]: Mt Iwate really stands at bearing ~178, behind the stand; it is moved to -28 (across the infield) as artistic licence. Its height is computed', 'backdrop.landmarks[1]: screen size and position are guessed. A ~55 m dark structure on the aerial, opposite the stand and ~65 m from the dirt rail, is probably the screen', 'backdrop.ranges (heights are guesses; Mt Hayachine lies ~123° (scene -13) but is probably hidden by the near hills)', 'stand.lengthM / depthM (from the aerial, ±15 m) and colours (2015 and 2024 photos)', 'infield[0] (pond reading, size and position from the aerial)', 'turf.color / lawn / leaf / autumn (October in Iwate)', 'facts.straightProfile (only the shape is sourced: the 3rd–4th-corner hill and a climb from ~150 m out; the heights are guesses)', 'JBC Sprint / Ladies’ Classic distances at Morioka (not fetched)', 'needs new kits: the V-shaped glass atrium and angular cantilevered stand decks; the pale inner ring (~20 m) inside the turf and a small loop at the NE end of the infield; the 芝スタンド grass bank near the 4th corner; the forest close behind the back straight'],
  },
  {
    id: 'kanazawa', en: 'Kanazawa Racecourse (JBC years)', jp: '金沢競馬場', group: 'NAR JpnI', builder: 'track', gait: 'race',
    hand: 'right', surface: 'dirt', lead: 'L', W: 400, seed: 2041,
    dirtOnly: true, // one 20 m dirt oval, no turf; a 1,080 m x 16 m training track runs just inside it
    // JBC Classic (JpnI, 2100 m), scheduled for 3 Nov 2026, post 16:25: a day meeting, so no floodlights.
    // Sun at 36.636N 136.675E: elevation 4.8°, azimuth 247° (WSW). Sunset is about 16:51.
    // On the GSI aerial the stand faces 90° (E) and the home straight runs 0° (N), so the sun is low behind the stand,
    // 23° toward the 4th corner. Elevation raised 4.8° -> 6° for readable light.
    time: {
      month: 11, post: '16:25', sunElevDeg: 6, sunAzimDeg: -23, fogNear: 130, fogFar: 420, exposure: 1.0, night: false,
      sky: { top: '#6c8cbd', mid: '#c6c1c6', horizon: '#f1c896', sun: '#ffd6a0' }, // late-autumn golden hour on the Japan Sea side
      sunColor: '#ffc88e', sunIntensity: 2.2, hemiSky: '#d6d8e2', hemiGround: '#776c4c', hemiIntensity: 1.05,
    },
    dirt: { color: '#d6ccb6', widthM: 20 }, // pale Aichi mountain sand (山砂, since 2021)
    rails: { color: '#f2f2ee' },
    lawn: '#7a8a48', apron: '#a8a6a0', // grey concrete apron about 20 m deep in front of the stand
    leaf: ['#4f6a3c', '#5d7444', '#8a8a4a', '#a8783e'], autumn: 0.25, dust: '#b5ab98',
    saddleCloth: { cloth: '#3a2a96', ink: '#f5c800' }, // Kanazawa's top-tier 重賞 (白山大賞典, 百万石賞…): 紫紺 with yellow text
    stand: { name: 'Main stand (1973, SRC, 5 storeys, 15,000 capacity)', lengthM: 130, floors: 5, depthM: 40, colors: { body: '#e2dfd6', roof: '#d4d4d0', glass: '#3e4c56', seats: '#9a9c98' } },
    infield: [], infieldTrees: 14, // lawn, topiary, a playground and a small ring, with a tall tree belt along the back straight
    backdrop: {
      ranges: [
        { r: 585, base: '#8790aa', h: [8, 26], step: 0.15, haze: 0.6 },  // Ryohaku foothills east of the Kahokugata polder (Iozen, 939 m, to the SE)
        { r: 550, base: '#7f8b78', h: [3, 8], step: 0.1, haze: 0.45 },   // treelines and farm villages on the reclaimed polder
      ],
      landmarks: [
        { type: 'screen', bearingDeg: 0, distM: 300, wM: 15, hM: 7.5, liftM: 0.5 },          // big screen under a traditional kawara tiled roof (really ~30 m inside the inner rail, opposite the middle of the stand)
        { type: 'screen', bearingDeg: 6, distM: 300, wM: 8, hM: 5.5, liftM: 0.5 },           // results board (着順掲示板), also with a tiled roof, just north of the screen
        { type: 'fuji', bearingDeg: -81, distM: 575, heightM: 28 },                          // Hakusan (2,702 m), about 54 km SSE; may have early snow
        { type: 'skyline', fromDeg: -125, toDeg: -95, distM: 540, heightM: [3, 10] },       // central Kanazawa / station towers, about 7 km SSW
      ],
      clouds: 8,
    },
    facts: {
      turfCircM: null, dirtCircM: 1200, turfStraightM: null, dirtStraightM: 236, elevationM: 0,
      straightProfile: [[236, 0], [0, 0]],
      races: [ // JpnI only in JBC host years: 2013 (4 Nov), 2021 (3 Nov), 2026 (3 Nov)
        { name: 'JBC Classic (host years)', jp: 'JBCクラシック', surface: 'dirt', distM: 2100, month: 11 },
        { name: 'JBC Sprint (host years)', jp: 'JBCスプリント', surface: 'dirt', distM: 1400, month: 11 },
        { name: 'JBC Ladies’ Classic (host years)', jp: 'JBCレディスクラシック', surface: 'dirt', distM: 1500, month: 11 },
      ],
    },
    signature: 'Hokuriku’s only local track, by the Kahokugata lagoon near the Sea of Japan: a flat 1,200 m right-handed oval of pale sand with a short 236 m straight. Across the infield the big screen and the results board both wear traditional grey kawara tiled roofs, among clipped topiary and a tall tree belt. The 5-storey 1973 stand has a deep cantilevered roof, and Hakusan stands far to the SSE.',
    sources: ['https://ja.wikipedia.org/wiki/金沢競馬場', 'https://www.kanazawakeiba.com/race/course/', 'https://www.kanazawakeiba.com/facilities/outline/', 'https://www.kanazawakeiba.com/race/info-37700/', 'https://ja.wikipedia.org/wiki/JBCクラシック', 'https://ja.wikipedia.org/wiki/ジャパンブリーディングファームズカップ', 'https://ja.wikipedia.org/wiki/ゼッケン_(競馬)', 'https://commons.wikimedia.org/wiki/File:Kanazawa_racecourse_vision.JPG', 'https://commons.wikimedia.org/wiki/File:Kanazawa_racecourse_stand.jpg', 'https://commons.wikimedia.org/wiki/File:Kanazawa_Racecourse_Aerial_photograph.1975.jpg', 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/17/115297/51182.jpg'],
    uncertain: ['time (the 2026 JBC post time is from the announced schedule; the sun is computed; elevation raised 4.8° -> 6°; at 16:25 the stand’s ~300 m shadow really covers the straight and most of the infield)', 'the 22 track floodlights (2023, for 薄暮/night racing) are probably already lit at a 16:25 post in November; left out because night: false', 'sky / light values (Hokuriku in November is often overcast)', 'saddleCloth: Wikipedia says the 2013/2021 JBC Sprint and Ladies’ Classic at Kanazawa used 紫紺 with WHITE text; the JBC Classic is not listed (yellow assumed from the top-tier row); JBC logo on the cloth since 2021', 'dirt.color (2016 photo predates the 2021 sand)', 'lawn / leaf / autumn (season guessed)', 'stand.lengthM / depthM (from the GSI aerial) and stand.colors (2016 photo)', 'stand year (the site opened 1973; any later renovation not checked)', 'backdrop.landmarks[0..1] (sizes estimated from a photo; really ~30 m inside the inner rail, not 300 m; the finish-post position is unknown)', 'backdrop.landmarks[2] Hakusan (bearing and distance from map coordinates recalled, not fetched; snow cap and visibility past the 4th-corner trees not verified)', 'backdrop.ranges and the Kanazawa skyline (map geography, not verified)', 'infieldTrees (the tree belt along the back straight)', 'the Sea of Japan and the Kahokugata lagoon are behind the stand (W/NW), so the camera cannot see them', 'needs new kits: kawara tiled roofs on the screen and board, topiary hedges, the inner training track, the infield playground and ring'],
  },
  {
    id: 'saga', en: 'Saga Racecourse (night)', jp: '佐賀競馬場', group: 'NAR JpnI', builder: 'track', gait: 'race',
    hand: 'right', surface: 'dirt', lead: 'L', W: 400, seed: 2042,
    dirtOnly: true, // one 1,100 m dirt oval (19.2–24 m wide), no turf
    // JBC Classic (JpnI, 2000 m), 4 Nov 2024, post 18:30 under the lights (Hotomeki Nighter, lights since 2018);
    // sun -14.3° at azimuth 260.6°, and the stand faces 122.5° (OSM way 850680074), so the sun is behind and to the right of the camera
    time: {
      month: 11, post: '18:30', sunElevDeg: -14, sunAzimDeg: -42, fogNear: 150, fogFar: 480, exposure: 1.15, night: true,
      sky: { top: '#050a1a', mid: '#0f1730', horizon: '#2e3048', sun: '#2a2540' }, // rural night: dark, only a faint Tosu/Kurume glow low down
      hemiSky: '#232c44', hemiGround: '#262620', hemiIntensity: 0.38,
    },
    floodlights: { count: 16, heightM: 28, color: '#f3f3ec', intensity: 1.0, poleColor: '#c4c7ca' }, // slim masts close together along both straights (2024 photo)
    dirt: { color: '#cbbfa8', widthM: 24 }, // pale, coarse-grained sand ("whitish Chinese sand" per oddspark)
    rails: { color: '#f4f4f0' },
    lawn: '#5f6d3c', apron: '#9c9a94', // infield lawn in early November, starting to go dormant
    leaf: ['#2f4f2c', '#3d5e35', '#4a6a3c'], autumn: 0.1, dust: '#b8ad98', // evergreen woods on the ridge
    saddleCloth: { cloth: '#3a2a96', ink: '#f5c800' }, // Saga graded races and NAR dirt-graded races: 紫紺 with yellow text (ja.wikipedia ゼッケン)
    stand: { name: 'Main stand (red brick)', lengthM: 175, floors: 4, depthM: 35, colors: { body: '#b0503c', roof: '#c0583f', glass: '#3d4a52', seats: '#8a8f96' } },
    infield: [], infieldTrees: 5, // lawn with round clipped hedges along the inner rail, a playground, a pergola and a few trees
    backdrop: {
      ranges: [
        { r: 545, base: '#2b4530', h: [18, 38], step: 0.12, haze: 0.42 }, // wooded ridge just behind the back straight (ground ~57 m vs track ~33 m, at ~350–450 m)
        { r: 590, base: '#3b4660', h: [16, 30], step: 0.18, haze: 0.6 },  // east end of the Sefuri range (Kusenbu-yama 848 m, Ishitani-yama 754 m), really NNW behind the stands
      ],
      landmarks: [
        { type: 'screen', bearingDeg: -15, distM: 300, wM: 20, hM: 9, liftM: 3 }, // infield video screen beside the result board
      ],
      clouds: 2, // clear on JBC night (netkeiba: 晴)
    },
    facts: {
      turfCircM: null, dirtCircM: 1100, turfStraightM: null, dirtStraightM: 200, elevationM: 1, // straight is 250 m in all, 200 m of it to the post
      straightProfile: [[200, 0], [0, 0]],
      races: [
        { name: 'JBC Classic (2024)', jp: 'JBCクラシック', surface: 'dirt', distM: 2000, month: 11 },          // post 18:30
        { name: 'JBC Sprint (2024)', jp: 'JBCスプリント', surface: 'dirt', distM: 1400, month: 11 },          // post 17:20, at sunset
        { name: 'JBC Ladies’ Classic (2024)', jp: 'JBCレディスクラシック', surface: 'dirt', distM: 1860, month: 11 }, // post 16:40, daylight
      ],
    },
    signature: 'Hotomeki Nighter (ほとめきナイター): a tiny, flat 1,100 m right-handed oval of pale coarse sand with only 200 m to the post, a long red-brick stand, slim floodlight masts, and a dark wooded ridge right behind the back straight. It staged its first JpnI races at the 2024 JBC.',
    sources: ['https://ja.wikipedia.org/wiki/佐賀競馬場', 'https://www.sagakeiba.net/raceinfo/course/', 'https://www.sagakeiba.net/guide/', 'https://www.oddspark.com/keiba/racetrack/61/course.html', 'https://ja.wikipedia.org/wiki/JBCクラシック', 'https://nar.netkeiba.com/race/result.html?race_id=202455110411', 'https://nar.netkeiba.com/race/result.html?race_id=202455110410', 'https://nar.netkeiba.com/race/result.html?race_id=202455110409', 'https://ja.wikipedia.org/wiki/ゼッケン_(競馬)', 'https://ja.wikipedia.org/wiki/ナイター競走', 'https://www.openstreetmap.org/way/850680074', 'https://commons.wikimedia.org/wiki/File:Saga_Racecourse_Aerial_photograph.1987.jpg', 'https://commons.wikimedia.org/wiki/File:Saga_Racecourse._20080815.jpg', 'https://commons.wikimedia.org/wiki/File:Vaincre_Tateyama_in_Saga_Race_Cource.jpg', 'https://commons.wikimedia.org/wiki/File:UMATENAデビューステージにて(2024年4月28日).jpg', 'https://cyberjapandata2.gsi.go.jp/general/dem/scripts/getelevation.php'],
    uncertain: ['time (sun computed for 18:30, 4 Nov 2024; stand bearing 32.5°/122.5° from the OSM/GSI footprint)', 'sky / light values', 'floodlights (count and height from a 2024 photo; no published spec)', 'dirt.color (photos)', 'dirt.widthM (19.2–24 m; 24 used)', 'lawn / leaf / apron', 'stand (length and depth from the footprint; floors, colours and seats from photos; build year unknown)', 'backdrop.ranges (ranges are rings, so the Sefuri peaks that stand NNW behind the stands also show over the ESE ridge; the Minō range 20+ km ESE is hidden by the ridge and left out)', 'backdrop.landmarks[0] (screen size and bearing estimated from a photo; really ~100 m away in the infield)', 'Kyushu Shinkansen (~2.2 km ESE, behind the ridge) and Nagasaki Expressway (~2 km N, behind the stands) not drawn', 'saddleCloth (the 2024 JBC Ladies’ Classic used pink text for horse and race names)', 'needs new kits: red-brick stand, infield playground, pergola and clipped hedges'],
  },
];

// Every other venue on the roadmap, shown as "soon" in the picker (order = build order).
window.LOCATION_QUEUE = [
  { id: 'paddock', en: 'Racecourse paddock', group: 'Strolling' },
  { id: 'beach', en: 'Beach at dawn', group: 'Strolling' },
  { id: 'hill-gallops', en: 'Training-centre hill gallop (坂路)', group: 'Strolling' },
];

window.DEFAULT_LOCATION = 'tokyo';
