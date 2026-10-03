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
];

// Every other venue on the roadmap, shown as "soon" in the picker (order = build order).
window.LOCATION_QUEUE = [
  { id: 'kyoto', en: 'Kyoto Racecourse', group: 'JRA G1' },
  { id: 'hanshin', en: 'Hanshin Racecourse', group: 'JRA G1' },
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
