/* Locations for the low-poly horse. A classic script (not a module) so index.html still opens from file://.
   Schema (see ROADMAP.md "Location schema"): the scene shows a straight the horse runs along (+X) forever.
   builder: 'country' | 'pasture' | 'track'; hand: course direction ('left' puts the grandstand on the
   camera's side as seen from the stands, 'right' mirrors it); W: metres before the scenery repeats.
   time: sun/sky/fog; extras: background horses ('companion' walks beside the hero, 'grazer' stands in a field).
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
    id: 'tokyo', en: 'Tokyo Racecourse', jp: '東京競馬場', group: 'JRA G1', builder: 'track', gait: 'gallop',
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
    id: 'nakayama', en: 'Nakayama Racecourse', jp: '中山競馬場', group: 'JRA G1', builder: 'track', gait: 'gallop',
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
    id: 'kyoto', en: 'Kyoto Racecourse', jp: '京都競馬場', group: 'JRA G1', builder: 'track', gait: 'gallop',
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
    id: 'hanshin', en: 'Hanshin Racecourse', jp: '阪神競馬場', group: 'JRA G1', builder: 'track', gait: 'gallop',
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
];

// Every other venue on the roadmap, shown as "soon" in the picker (order = build order).
window.LOCATION_QUEUE = [
  { id: 'chukyo', en: 'Chukyo Racecourse', group: 'JRA G1' },
  { id: 'oi', en: 'Oi Racecourse (night)', group: 'NAR JpnI' },
  { id: 'kawasaki', en: 'Kawasaki Racecourse', group: 'NAR JpnI' },
  { id: 'funabashi', en: 'Funabashi Racecourse', group: 'NAR JpnI' },
  { id: 'urawa', en: 'Urawa Racecourse', group: 'NAR JpnI' },
  { id: 'morioka', en: 'Morioka Racecourse', group: 'NAR JpnI' },
  { id: 'kanazawa', en: 'Kanazawa Racecourse (JBC years)', group: 'NAR JpnI' },
  { id: 'saga', en: 'Saga Racecourse (JBC years)', group: 'NAR JpnI' },
  { id: 'paddock', en: 'Racecourse paddock', group: 'Strolling' },
  { id: 'beach', en: 'Beach at dawn', group: 'Strolling' },
  { id: 'hill-gallops', en: 'Training-centre hill gallop (坂路)', group: 'Strolling' },
];

window.DEFAULT_LOCATION = 'tokyo';
