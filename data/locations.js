/* Locations for the low-poly horse. A classic script (not a module) so index.html still opens from file://.
   Schema (see ROADMAP.md "Location schema"): the scene shows a straight the horse runs along (+X) forever.
   builder: 'country' | 'pasture' | 'track'; hand: course direction ('left' puts the grandstand on the
   camera's side as seen from the stands, 'right' mirrors it); W: metres before the scenery repeats.
   time: sun/sky/fog; extras: background horses ('companion' walks beside the hero, 'grazer' stands in a field).
   saddleCloth (tracks): the cloth of the signature race; default JRA G1 = 紫紺 #3a2a96 with white text.
   variantOf: a seasonal variant of another entry (its fields are merged over that entry's); rain: { intensity 0..1, slantDeg }.
   crowd (tracks): 0..1, the race-day crowd on the apron and the stand's steps (0.4 by default; Derby day is 1).
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
    // Seasonal variant: Tokyo on Japanese Derby day (東京優駿 / 日本ダービー). `variantOf` takes the 'tokyo' entry (stand, course, facts)
    // and merges these fields over it.
    id: 'tokyo-derby', variantOf: 'tokyo', en: 'Tokyo Racecourse (Japanese Derby)', jp: '東京競馬場（日本ダービー）', group: 'JRA G1',
    // Since 2000 the race is run on the Sunday after the last Saturday of May (26 May to 1 June). Every running from 2021 to 2026 had
    // post 15:40, weather 晴, going 良, turf 2400 m on the C course (inner rail 6 m out). Sources: netkeiba, ja.wikipedia.
    // Sun computed for 31 May 2026, 15:40 JST, at 35.663N 139.485E: elevation 36.4°, true azimuth 272.4°. The scene azimuth keeps
    // the base entry's offset (the base sets -35 for a true 236.1°): -35 - (272.4 - 236.1) = -71.
    time: {
      month: 5, post: '15:40', sunElevDeg: 36, sunAzimDeg: -71, fogNear: 125, fogFar: 390, exposure: 1.0,
      sky: { top: '#6a9ad4', mid: '#b2cbe2', horizon: '#e4e6e0', sun: '#fff5de' }, // bright early-summer blue, milky haze low down
      sunColor: '#fff3dc', sunIntensity: 3.0,                                     // a higher, whiter sun than the Japan Cup's
      hemiSky: '#dde8f3', hemiGround: '#7e8c4e', hemiIntensity: 1.22,             // green bounce off the fresh turf
    },
    // JRA (2025 and 2026 spring meetings): 野芝に洋芝（イタリアンライグラス）をオーバーシード; in late May both grasses are green, so the
    // turf is at its brightest (sampled from 2021 and 2024 Derby-day photos, toned down for the scene's sun).
    turf: { color: '#6a9838' },
    lawn: '#71964a', verge: '#689444',
    leaf: ['#4a7236', '#5a843c', '#6b9545', '#3f5e35'], autumn: 0, // fresh early-summer broadleaves plus darker evergreens
    crowd: 1, // the year's biggest crowd
    dust: '#86774f', // dry, firm 良 ground (JRA turf moisture 13.5% / 11.5% on 31 May 2026)
    saddleCloth: { cloth: '#f4f4f0', ink: '#141414', edge: '#c9a227' }, // Derby: 白地に黒文字, gold-thread edging (金糸の縁取り刺繍) since 1994
    backdrop: {
      ranges: [
        { r: 585, base: '#8f97b5', h: [12, 28], step: 0.16, haze: 0.65 }, // Tanzawa / Okutama, washed out in the early-summer haze
        { r: 545, base: '#8e9a8c', h: [4, 10], step: 0.1, haze: 0.55 },
      ],
      landmarks: [
        { type: 'fuji', bearingDeg: 22, distM: 575, heightM: 42, snowLine: 0.72, haze: 0.62 }, // late May: snow only on the upper slopes; faint in the haze
        { type: 'screen', bearingDeg: -4, distM: 320, wM: 66.4, hM: 11.2, liftM: 5 },           // Turf Vision (as in the base)
        { type: 'tree', bearingDeg: -58, distM: 360, heightM: 24, leaf: '#4f7a38' },             // 大ケヤキ (really an エノキ) in full early-summer leaf
        { type: 'skyline', fromDeg: 70, toDeg: 115, distM: 520, heightM: [6, 26] },              // Fuchu (as in the base)
      ],
    },
    signature: 'Derby Day: the year\'s biggest crowd (78,678 in 2024; the course record is 196,517 at the 1990 Derby) lines the 525.9 m straight on a bright, hazy early-summer afternoon, with the overseeded turf at its greenest, the white Derby saddle cloths with gold edging, and Mt Fuji at most a pale shape in the haze.',
    sources: [
      'https://ja.wikipedia.org/wiki/東京優駿',
      'https://ja.wikipedia.org/wiki/第93回東京優駿',
      'https://ja.wikipedia.org/wiki/第92回東京優駿',
      'https://ja.wikipedia.org/wiki/第91回東京優駿',
      'https://ja.wikipedia.org/wiki/第90回東京優駿',
      'https://race.netkeiba.com/race/result.html?race_id=202605021211',
      'https://race.netkeiba.com/race/result.html?race_id=202505021211',
      'https://race.netkeiba.com/race/result.html?race_id=202405021211',
      'https://race.netkeiba.com/race/result.html?race_id=202305021211',
      'https://race.netkeiba.com/race/result.html?race_id=202205021211',
      'https://race.netkeiba.com/race/result.html?race_id=202105021211',
      'https://ja.wikipedia.org/wiki/ゼッケン_(競馬)',
      'https://ja.wikipedia.org/wiki/東京競馬場',
      'https://www.jra.go.jp/keiba/baba/overview/2026_2-3_tokyo.html',
      'https://www.jra.go.jp/keiba/baba/overview/2025_2-3_tokyo.html',
      'https://www.jra.go.jp/keiba/baba/archive/2026pdf/tokyo02.pdf',
      'https://www.openstreetmap.org/way/155529613',
      'https://commons.wikimedia.org/wiki/File:11R_Tokyo_Yushun_(Japanese_Derby)_(G1,_3yo)_Turf_2400m_at_Tokyo_racecourse_(53747047631).jpg',
      'https://commons.wikimedia.org/wiki/File:11R_Tokyo_Yushun_(Japanese_Derby)_(Grade_1,_3yo)_Turf_2400m_2021_at_tokyo_racecourse_(51216444985).jpg',
    ],
    uncertain: [
      'time.sunAzimDeg (-71 keeps the base entry\'s offset; OSM puts the straight at ~268° true, which would make the real Derby sun +85 and the Japan Cup sun +122 in the scene frame, so the base Tokyo bearings need re-deriving)',
      'time.sky, fog, exposure, light colours and intensities (look values from 2022 and 2024 Derby-day photos, not measured)',
      'turf / lawn / verge / leaf colours (sampled from Commons photos and toned down by eye)',
      'dust (estimated; only the dry going is sourced)',
      'saddleCloth.edge hex (the gold edging is sourced but too thin to sample)',
      'backdrop.landmarks[0] (Fuji on Derby afternoons: one Derby-day photo shows it faint through haze; snowLine and haze set by eye; its bearing kept at the base\'s 22 though the real bearing in this frame is about +66)',
      'needs a kit: the C-course inner rail 6 m out, with the worn A-course strip inside it',
    ],
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
    // Seasonal variant: Nakayama on Satsuki Sho day (皐月賞). `variantOf` takes the 'nakayama' entry (stand, course, jumps, backdrop, facts)
    // and merges these fields over it.
    id: 'nakayama-satsuki', variantOf: 'nakayama', en: 'Nakayama Racecourse (Satsuki Sho)', jp: '中山競馬場（皐月賞）', group: 'JRA G1',
    // Turf 2000 m, right-handed. Run between 14 and 20 April in every year 2019-2026 (ja.wikipedia); post 15:40 in every running checked (netkeiba 2021-2026).
    // Sun (NOAA algorithm) for 19 Apr 2026, 15:40 JST, at 35.7259N 139.9624E: elevation 30.6°, true azimuth 261.5°. Scene mapping from the base entry
    // (its -50 is for ~24 Dec 15:40, true azimuth 233.4°): sunAzimDeg = trueAz - 283.4, the same rule as Kyoto's (the stand's facing, ~103°, + 180).
    time: {
      month: 4, post: '15:40', sunElevDeg: 31, sunAzimDeg: -22, fogNear: 120, fogFar: 380, exposure: 1.02,
      sky: { top: '#82a8d4', mid: '#c4d5e6', horizon: '#e6e6df', sun: '#fff3de' }, // pale, hazy Kanto spring blue
      sunColor: '#fff0da', sunIntensity: 2.85,                                    // mid-afternoon sun about 31° up, softened by spring haze
      hemiSky: '#e0e8f2', hemiGround: '#7d884c', hemiIntensity: 1.22,             // yellow-green bounce off the fresh turf
    },
    // JRA 2025/2026 Nakayama going pages: Italian ryegrass overseeded. By mid-April the overseed is fresh green but a little yellower than Tokyo or
    // Kyoto in May (race-day samples 2022-2025, toned down for the scene's sun).
    turf: { color: '#76993e' },
    lawn: '#84945a', verge: '#7c9452', // noshiba-only lawns and banks still greening
    leaf: ['#6f9a4a', '#82a656', '#4e6b3f', '#3d5237'], autumn: 0, // pale new spring leaves, plus dark evergreens
    blossom: null, // Somei Yoshino are well past full bloom (JMA Tokyo full bloom 22 Mar-4 Apr in 2021-2026); no blossom in any race-day photo checked
    dust: '#837352', // mostly dry ground: 良 in 4 of 6 runnings 2021-2026 (稍重 2021, 重 2023)
    crowd: 0.8,      // a classic: a packed paddock and apron (2023 photo), below Derby day
    saddleCloth: { cloth: '#3a2a96', ink: '#f5c800' }, // classic: 紫紺 with yellow text (ja.wikipedia ゼッケン; seen in 2023 and 2024 photos)
    signature: 'Satsuki Sho, the first colts\' classic: a packed mid-April crowd under a pale, hazy spring sky, fresh overseeded turf against noshiba lawns still greening, cherries already in leaf, and purple classic cloths with yellow numbers coming up the 310 m straight and its 2.2 m hill.',
    sources: [
      'https://ja.wikipedia.org/wiki/皐月賞',
      'https://ja.wikipedia.org/wiki/ゼッケン_(競馬)',
      'https://ja.wikipedia.org/wiki/中山競馬場',
      'https://race.netkeiba.com/race/result.html?race_id=202606030811',
      'https://race.netkeiba.com/race/result.html?race_id=202506030811',
      'https://race.netkeiba.com/race/result.html?race_id=202406030811',
      'https://race.netkeiba.com/race/result.html?race_id=202306030811',
      'https://race.netkeiba.com/race/result.html?race_id=202206030811',
      'https://race.netkeiba.com/race/result.html?race_id=202106030811',
      'https://www.jra.go.jp/keiba/baba/overview/2026_2-3_nakayama.html',
      'https://www.jra.go.jp/keiba/baba/overview/2025_2-3_nakayama.html',
      'https://www.data.jma.go.jp/sakura/data/sakura004_07.html',
      'https://commons.wikimedia.org/wiki/File:中山競馬場パドック20230416-P1025343.jpg',
      'https://commons.wikimedia.org/wiki/File:Sol_Oriens_20230416a.jpg',
      'https://commons.wikimedia.org/wiki/File:2024年皐月賞.jpg',
      'https://commons.wikimedia.org/wiki/File:皐月賞2022.jpg',
    ],
    uncertain: [
      'time.sunAzimDeg (-22 keeps the base entry\'s offset; the low-resolution GSI tile only roughly confirms the ~103° stand facing it implies)',
      'time.sunElevDeg (31 is the real computed value, but the base raises a real ~8° December sun to 16, so the two are not raised the same way)',
      'time.sky, fog, exposure, light colours and intensities (look values from 2023-2025 race-day photos, not measured)',
      'turf / lawn / verge / leaf colours (median samples from Commons photos 2022-2025, toned down by eye)',
      'blossom: null (JMA Tokyo full-bloom dates plus photos; 2024 was closest at 10 days past full bloom and might keep a few petals)',
      'crowd 0.8 (no attendance figure found)',
      'dust (estimated; only the going is sourced)',
      'needs a kit: the magenta azalea bank on the infield side of the dirt course; flower beds round the paddock; the B/C-course inner rail',
    ],
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
    // Seasonal variant: Kyoto on Tenno Sho (Spring) day (天皇賞（春）). `variantOf` takes the 'kyoto' entry (stand, lake, backdrop, facts)
    // and merges these fields over it.
    id: 'kyoto-tenno-spring', variantOf: 'kyoto', en: 'Kyoto Racecourse (Tenno Sho Spring)', jp: '京都競馬場（天皇賞・春）', group: 'JRA G1',
    // Turf 3200 m on the OUTER course: the start is on the back straight, the field goes about 1.5 laps, climbs the 淀の坂 twice and passes
    // the stands once. Post 15:40 in every running checked (netkeiba: 2019, 2020, 2023-2026 at Kyoto; 2021-22 at Hanshin while Kyoto was rebuilt).
    // Sun (NOAA algorithm) for 3 May 2026, 15:40 JST, at 34.908N 135.727E: elevation 36.2°, true azimuth 264.2°. Scene mapping from the base
    // entry (stand facing ~145°, straight ~55°): sunAzimDeg = trueAz - 325, which gives the base's -83 for late October; 264.2 - 325 = -61.
    time: {
      month: 5, post: '15:40', sunElevDeg: 36, sunAzimDeg: -61, fogNear: 130, fogFar: 400, exposure: 1.0,
      sky: { top: '#6b9dd8', mid: '#b3cde7', horizon: '#e0e6e6', sun: '#fff5e0' }, // Golden Week blue, pale bluish-white haze low down
      sunColor: '#fff3dc', sunIntensity: 3.0,                                     // a high, white mid-afternoon sun
      hemiSky: '#dde8f4', hemiGround: '#7d8d4e', hemiIntensity: 1.22,             // green bounce off the fresh turf
    },
    // JRA going notes (2025, 2026): 野芝に洋芝（イタリアンライグラス）をオーバーシード; the overseed is at its freshest (median of race-day photos 2023-2026).
    turf: { color: '#66983a' },
    lawn: '#7a9a4e', verge: '#6e9447', // noshiba-only lawns still greening
    leaf: ['#5f8c42', '#73a04b', '#526b3e', '#3f5637'], autumn: 0, // fresh new broadleaves; dark columnar trees and clipped hedges
    blossom: null, // no flowering trees in any race-day photo (the cherries are long over)
    dust: '#84754e', // dry, firm turf: 良 in 5 of the 6 Kyoto runnings from 2019 to 2026
    crowd: 0.6,
    saddleCloth: { cloth: '#3a2a96', ink: '#ffffff' }, // an ordinary G1: 紫紺 with white text (seen on the 2023 and 2024 race-day cloths)
    signature: 'Tenno Sho (Spring), the 3200 m marathon: the field passes the stands once on its 1.5 laps, climbs the 淀の坂 twice and comes home down the flat 400 m outer straight under a high Golden Week sun, with fresh overseeded turf, new-leaf trees and clipped hedges round the lake, and purple G1 cloths with white text.',
    sources: [
      'https://ja.wikipedia.org/wiki/天皇賞（春）',
      'https://ja.wikipedia.org/wiki/ゼッケン_(競馬)',
      'https://ja.wikipedia.org/wiki/京都競馬場',
      'https://race.netkeiba.com/race/result.html?race_id=202608030411',
      'https://race.netkeiba.com/race/result.html?race_id=202508020411',
      'https://race.netkeiba.com/race/result.html?race_id=202408030411',
      'https://race.netkeiba.com/race/result.html?race_id=202308010411',
      'https://race.netkeiba.com/race/result.html?race_id=202008030411',
      'https://race.netkeiba.com/race/result.html?race_id=201908030311',
      'https://www.jra.go.jp/keiba/baba/overview/2026_3_kyoto.html',
      'https://www.jra.go.jp/keiba/baba/overview/2025_2_kyoto.html',
      'https://commons.wikimedia.org/wiki/File:Croix_du_Nord-2026-5-3.jpg',
      'https://commons.wikimedia.org/wiki/File:Redentor-2025-5-4.jpg',
      'https://commons.wikimedia.org/wiki/File:Blow_the_Horn-2024-4-28.jpg',
      'https://commons.wikimedia.org/wiki/File:Justin_Palace_Tenno_Sho_(Spring)_2023(IMG1).jpg',
      'https://commons.wikimedia.org/wiki/File:Kyoto_Racecourse_2023_3.jpg',
    ],
    uncertain: [
      'time.sunAzimDeg (-61 relies on the base entry\'s stand facing of ~145° from the GSI aerial; not re-measured)',
      'time.month (5; the race fell on 28 or 30 April in 2019, 2023 and 2024)',
      'time.sky, fog, exposure, light colours and intensities (look values from 2023-2025 photos, not measured)',
      'turf / lawn / verge / leaf colours (median samples from Commons photos, toned down by eye)',
      'dust (estimated; only the 良 going is sourced)',
      'crowd 0.6 (a guess between an ordinary G1 and Derby day)',
      'needs a kit: the flower beds by the winning post; the C-course inner rail 7 m out (2025-26); the tall clipped hedge along the infield side of the dirt course',
    ],
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
    // Seasonal variant: Hanshin in the rainy season (梅雨) for the Takarazuka Kinen. `variantOf` takes the 'hanshin' entry
    // (stand, course, backdrop, facts) and merges these fields over it.
    id: 'hanshin-takarazuka', variantOf: 'hanshin', en: 'Hanshin Racecourse (Takarazuka Kinen, rain)', jp: '阪神競馬場（宝塚記念・雨）', group: 'JRA G1',
    // Turf 2200 m on the INNER course (netkeiba: 芝2200m 右). Post time 15:40 in every running checked, 2015-2026. Since 2025 it is
    // run in mid-June (2025-06-15, 2026-06-14) 「暑熱や梅雨の影響を鑑み」; before that the last Sunday of June.
    // Sun computed for 14 Jun 15:40 JST at Hanshin: elevation 40.8°, true azimuth 272° (mapped through the base entry's bearing).
    time: {
      month: 6, post: '15:40', sunElevDeg: 41, sunAzimDeg: 77, fogNear: 60, fogFar: 280, exposure: 0.96,
      sky: { top: '#7d858d', mid: '#9aa1a7', horizon: '#b4b8b9', sun: '#d6d7d2' }, // flat tsuyu overcast, a brighter grey patch where the sun is
      sunColor: '#e4e7e6', sunIntensity: 0.8,                                     // soft, cool, almost shadowless key light
      hemiSky: '#c6ccd1', hemiGround: '#4f5e3c', hemiIntensity: 1.65,             // the diffuse light does the work; wet green bounce from below
    },
    rain: { intensity: 0.6, slantDeg: 8 }, // steady tsuyu rain: fine, dense, near-vertical streaks in little wind; grey veils hide the Rokko range
    // The 2026 running went off in rain (天候:雨) on 重. 2015-2026 (netkeiba results): 7 of 12 on 稍重 or softer, 2 on 重 (2024 at Kyoto, 2026), none on 不良.
    going: { show: '重', softShare: '7 of the last 12 runnings (2015-2026) on 稍重 or softer; 2 on 重; none on 不良' },
    // Summer noshiba (Zoysia) in full growth as the winter ryegrass overseed fades; deep green, soaked, under overcast light
    // (sampled from the 14 Jun 2026 winner's-circle photo). The dirt is darkened for the wet (wet.darken 0.3 of the base '#a8a194').
    turf: { color: '#4e8a34' }, dirt: { color: '#76716a' },
    wet: { darken: 0.3, puddles: true }, // puddles would go on the dirt course and the apron (JRA turf drains): not drawn yet
    lawn: '#6a8c45', verge: '#5c7d3d',
    leaf: ['#3f6a35', '#4a7a3c', '#577f45'], blossom: null, // the infield cherries in dark summer leaf
    dust: '#4b4535',                                        // the wet root zone flung up as dark clods
    crowd: 0.25,                                            // a thin crowd out on the apron in the rain (most stay under the roof)
    saddleCloth: { cloth: '#3a2a96', ink: '#ffffff' },      // the standard JRA G1 紫紺 with white text
    backdrop: { clouds: 0 },                                // one low grey deck, no separate clouds
    signature: 'Takarazuka Kinen in the rainy season: a low grey sky swallowing the Rokko hills, steady rain over deep-green summer noshiba, the dirt dark and shining, clods flying, and the purple G1 cloths soaked almost black.',
    sources: [
      'https://ja.wikipedia.org/wiki/宝塚記念',
      'https://en.wikipedia.org/wiki/Takarazuka_Kinen',
      'https://race.netkeiba.com/top/race_list_sub.html?kaisai_date=20260614',
      'https://race.netkeiba.com/race/result.html?race_id=202609030411',
      'https://race.netkeiba.com/race/result.html?race_id=202509030411',
      'https://race.netkeiba.com/race/result.html?race_id=202408040811',
      'https://race.netkeiba.com/race/result.html?race_id=202309030811',
      'https://race.netkeiba.com/race/result.html?race_id=202209030411',
      'https://race.netkeiba.com/race/result.html?race_id=202109030411',
      'https://race.netkeiba.com/race/result.html?race_id=202009030811',
      'https://race.netkeiba.com/race/result.html?race_id=201909030811',
      'https://race.netkeiba.com/race/result.html?race_id=201809030811',
      'https://race.netkeiba.com/race/result.html?race_id=201709030811',
      'https://race.netkeiba.com/race/result.html?race_id=201609030811',
      'https://race.netkeiba.com/race/result.html?race_id=201509030811',
      'https://ja.wikipedia.org/wiki/オーバーシード',
      'https://ja.wikipedia.org/wiki/ゼッケン_(競馬)',
      'https://commons.wikimedia.org/wiki/File:Meisho_Tabaru-2026-06-14.jpg',
      'https://commons.wikimedia.org/wiki/File:Zendan_Hayabusa-2026-6-14.jpg',
      'https://commons.wikimedia.org/wiki/File:ブローザホーン_宝塚記念優勝時.jpg',
    ],
    uncertain: [
      'time.sunElevDeg / sunAzimDeg (computed; the scene azimuth is mapped through the base entry, not re-derived from the aerial)',
      'time.sky, fog, exposure, light colours and intensities (look values for tsuyu overcast, not measured)',
      'rain.intensity / slantDeg (2026 was 天候:雨 on 重; how hard it rained was not measured)',
      'turf grass (Hanshin-specific overseeding not confirmed; the summer noshiba / winter ryegrass split is from the general オーバーシード article)',
      'turf.color, lawn, verge, leaf, dust (read off two June 2026 Hanshin photos and one 2024 Kyoto photo)',
      'wet.darken and puddles (no photo of the dirt course or apron in rain)',
      'umbrellas in the crowd (no photo found)',
      'saddleCloth (no explicit source for the Takarazuka Kinen cloth; white ink as for non-classic G1s)',
      'the race uses the INNER course, whose home straight is shorter than the base entry\'s outer straightProfile',
    ],
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
    // Seasonal variant: Oi on Tokyo Daishoten day (東京大賞典; GI with international status since 2011, dirt 2000 m, run on
    // 29 December since 1999). Unlike the base (Teio Sho, a Twinkle night race) it is an afternoon race in daylight: every
    // running from 2021 to 2025 was 9R with post 15:40, weather 晴, going 良 (2021–2024) or 重 (2025). The meeting goes on past
    // sunset under the floodlights (2025: 11R 17:05, 12R 17:45). Sources: ja.wikipedia 東京大賞典, nar.netkeiba results.
    id: 'oi-daishoten', variantOf: 'oi', en: 'Oi Racecourse (Tokyo Daishoten)', jp: '大井競馬場（東京大賞典）', group: 'NAR JpnI',
    // Sun computed (NOAA algorithm) for 29 Dec 2025, 15:40 JST, at 35.593N 139.743E: elevation 8.8° (8.5° at the ~15:42 finish),
    // true azimuth 233.0° (NAOJ: Tokyo sunset 16:36 at 241.7°). The base is a night entry whose sun is never used (the floodlights
    // light it) and whose -161 does not fit the course, so the frame comes from OSM, which also matches the base's landmark
    // bearings: the home straight runs 60° true (ENE) with the stands on its NNW side (330°), so scene = true - 330 = 233.0 - 330
    // = -97. The low sun shines almost straight down the home straight from behind the approaching field, 7° out over the infield.
    time: {
      month: 12, post: '15:40', sunElevDeg: 9, sunAzimDeg: -97, fogNear: 150, fogFar: 480, exposure: 1.0, night: false,
      sky: { top: '#6f98cc', mid: '#bfcbdc', horizon: '#f0d5ae', sun: '#ffe0aa' }, // dry, clear winter blue; gold low in the WSW
      sunColor: '#ffd49e', sunIntensity: 2.5,                                     // low golden sun about 55 min before sunset
      hemiSky: '#d6deea', hemiGround: '#9a8c78', hemiIntensity: 1.1,              // warm bounce off the pale sand
    },
    // The white Western Australian sand (2023) in low winter sun: sunlit #dccdbb, shade #cdc4c0 in 2023 Daishoten-day photos
    dirt: { color: '#d5cabb' },
    lawn: '#7f7a50', // winter-dormant infield grass (dry brown-olive behind the inner rail in the 2023 race photo)
    leaf: ['#3b5233', '#4a5c3a', '#5b6240', '#7a6a48'], autumn: 0.1, // dark evergreens plus bare / brown deciduous crowns
    crowd: 0.8, // 37,259 (2024) and 31,447 (2025), against 18,079–19,118 at the Teio Sho: about twice the base's crowd
    saddleCloth: { cloth: '#3a2a96', ink: '#f5c800' }, // Oi graded races: 紫紺, yellow numbers plus the title 「第69回東京大賞典」 (2023 photos)
    backdrop: { clouds: 2 }, // 晴 in every running 2021–2025
    signature: 'The year-end finale on 29 December, 「1年を締めくくるダート競馬の総決算レース」: Oi\'s biggest crowd of the year fills the apron on a clear, cold afternoon. The field comes up the 386 m straight with the golden sun 9° up straight behind it, the white sand glowing cream, 紫紺 saddle cloths with yellow numbers. After sunset (16:36) the last races run under the floodlights.',
    sources: [
      'https://ja.wikipedia.org/wiki/東京大賞典',
      'https://nar.netkeiba.com/race/result.html?race_id=202544122909',
      'https://nar.netkeiba.com/race/result.html?race_id=202444122909',
      'https://nar.netkeiba.com/race/result.html?race_id=202344122909',
      'https://nar.netkeiba.com/race/result.html?race_id=202244122909',
      'https://nar.netkeiba.com/race/result.html?race_id=202144122909',
      'https://nar.netkeiba.com/race/result.html?race_id=202544122911',
      'https://nar.netkeiba.com/race/result.html?race_id=202544122912',
      'https://ja.wikipedia.org/wiki/大井競馬場',
      'https://ja.wikipedia.org/wiki/帝王賞',
      'https://ja.wikipedia.org/wiki/ゼッケン_(競馬)',
      'https://eco.mtk.nao.ac.jp/koyomi/dni/2025/s1312.html',
      'https://www.openstreetmap.org/way/207543031',
      'https://www.openstreetmap.org/way/207543013',
      'https://www.openstreetmap.org/way/690276609',
      'https://prtimes.jp/main/html/rd/p/000000335.000039442.html',
      'https://commons.wikimedia.org/wiki/File:69th_Tokyo_Daishoten.jpg',
      'https://commons.wikimedia.org/wiki/File:Mirai_Iwata_2023_Tokyo_Daishoten.jpg',
      'https://commons.wikimedia.org/wiki/File:9R_Tokyo_Daishoten_(G1,_3yo_and_up)_Dirt_2000m_at_Oi_racecourse.jpg',
      'https://commons.wikimedia.org/wiki/File:9R_Tokyo_Daishoten_(G1,_3yo_and_up)_Dirt_2000m_at_Oi_racecourse_-_53428804220.jpg',
    ],
    uncertain: [
      'time.sunAzimDeg (-97 comes from OSM: straight segments 59.5–60.0° true, L-WING / G-FRONT ~185 m NNW of the oval; the Tokyo Ryutsu Center warehouses seen across the track in the 2023 race photo agree. It does NOT keep the base\'s offset: the base\'s -161 for 2 July 2025 20:10 (true 310.5°) would be -20 in this frame, and keeping its offset as tokyo-derby does would give +122, a sun in the east. The base value is cosmetic, since night entries are lit by the floodlights.)',
      'time.sunElevDeg (9 is the true value; the Nakayama Arima Kinen entry, same week and post time, raises its sun to 16 for readable shadows)',
      'time.sky, fog, exposure, light colours and intensities (chosen by eye from 2023 race-day photos, whose skies are overexposed, and the Nakayama December entry; not measured)',
      'dirt.color (sampled from 2023 photos and set between sun and shade; the 2025 running was on 重 going, so darker, wetter sand is also typical)',
      'lawn, leaf, autumn (from 2023 photos; the bare deciduous trees there need a new kit: leafless trees)',
      'crowd (0.8 scaled from attendance against the Teio Sho and Derby day = 1; Tokyo Derby-day attendance at Oi not checked)',
      'saddleCloth hexes (photos: shade #141836, sunlit and overexposed #8779c6–#9e8dd3, so the base 紫紺 #3a2a96 is kept; the race title printed on the cloth needs a kit)',
      'floodlights (masts kept from the base; whether the lamps are already on at 15:40 is unconfirmed; they must be on for 11R 17:05 / 12R 17:45)',
      'backdrop.clouds (2 is a guess for a 晴 day)',
      'the phrase 「大井の年末」 was not found in any source; TCK\'s 2025 release uses 「年の瀬を遊び尽くす」 and 「1年を締めくくるダート競馬の総決算レース」',
    ],
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
  {
    id: 'paddock', en: 'Tokyo Racecourse paddock', jp: '東京競馬場 パドック', group: 'Strolling', builder: 'paddock', gait: 'walk', seed: 2050,
    // Path mode: the horse walks round the parade ring with the rest of the Derby field, in number order (馬番順).
    // Centre line of the beige walking lane, fitted to the GSI aerial at 0.485 m/px: the lane runs 76.9 × 22.8 m centre to centre and
    // its outer edge measures 83 × 25 m, long axis E–W. The real ends are flatter than semicircles (more like a rounded rectangle).
    // Horses walk counter-clockwise with the handler on the inside; the near-side runners walk west to east (+X) past the south terraces.
    path: { shape: 'stadium', straightM: 54, radiusM: 11.4, laneWidthM: 3, dir: 'ccw' },
    // Derby post 15:40 (2025); the field parades about 15:00–15:10. Sun computed for 1 Jun 15:05 JST at 35.666N 139.483E:
    // elevation 43.7°, azimuth 267° (W), i.e. from the direction the near-side horses come from.
    time: {
      month: 5, post: '15:40', sunElevDeg: 43, sunAzimDeg: -87, fogNear: 60, fogFar: 260, exposure: 1.0,
      sky: { top: '#5a8ed6', mid: '#a0c3ea', horizon: '#d8e5ec', sun: '#fff6e2' }, sunColor: '#fff2da', sunIntensity: 3.0,
      hemiSky: '#dce8f4', hemiGround: '#8e8660', hemiIntensity: 1.25,
    },
    // Bands from the lawn outward: teal rubber apron ~3 m, the salmon-beige lane ~2.5–3 m (4–5 m at the ends), a teal strip ~1.2 m,
    // a flower strip (Derby day: red salvia, marigolds, begonias, blue spikes), a two-tier clipped box hedge ~0.9 m, then the rail
    ground: { lane: '#d0a580', edging: '#5e9a87', centre: '#71894c', outer: '#cbc1b2', bed: '#6b5a44', innerApronM: 3, outerStripM: 1.2, flowersM: 0.6 },
    flowers: ['#d8263a', '#d8263a', '#f29a1c', '#f2c81e', '#e8648c', '#5a6ad0'],
    hedge: { side: 'outer', heightM: 0.9, tiers: 2, color: '#4f5c2a' },
    rail: { color: '#5a4c3e', top: '#8a6a48', heightM: 1.1, gapM: 3.0, drape: '#a3233a' }, // bronze-brown slatted metal fence, wood-look top rail; crimson drapes on Derby day
    centre: {
      trees: 0, flowerBeds: 0, discs: 18, discColor: '#8fcab4', logo: '#4d6e3a',
      features: ['18 numbered pale-teal discs (white numbers) in two rows of 9 along the long sides of the lawn: the とまれ / mounting spots',
        'a darker-green logo panel with white lettering in the middle of the lawn', 'jockeys walk out in a line across the lawn from the west end to their horses'],
    },
    // South (stand) side: shallow light-stone steps with darker nosing bands, about 13.5 m from the rail to the edge of the Fuji View
    // Stand's 2F deck, which overhangs the back rows. span: the terraces line the near straight and run a little into both bends.
    terraces: {
      rows: 8, stepM: 1.4, riseM: 0.25, distM: 1.0, span: [-8, 62],
      colors: { step: '#cdc3b4', nosing: '#8e8a84', crowd: ['#f1efe9', '#262a33', '#8d939c', '#c8b89e', '#5b7da6', '#d9d4c8', '#3d4a5c'] },
      roof: { depthM: 4, heightM: 5.3, color: '#b8a588', fascia: '#b83a50' }, // 2F deck: warm-beige soffit, crimson fascia on Derby day
    },
    // Paddock Vision (also the odds board): a grey aluminium frame 29.5 × 13 m on two beige stone plinths, 14.9 m tall overall; the LED
    // face is about 23 × 11 m, wrapped in a red-and-gold 日本ダービー frame on Derby day. Its centre is 7.6 m west and 27.5 m north of the ring centre.
    screen: { wM: 23, hM: 11, liftM: 3, bearingDeg: -15, distM: 28, frameM: 1.4, frameColor: '#b4b5bb', plinth: '#d1c8b9', wrap: '#b02a3a' },
    buildings: [
      { name: 'Fuji View Stand, rear face: 2F deck plus three balcony tiers over the paddock', bearingDeg: 180, distM: 34, wM: 300, hM: 34, color: '#c4bdb1', glass: '#7d98ab' },
      { name: 'West-end deck over the horses’ entrance passage', bearingDeg: -90, distM: 48, wM: 30, hM: 5.5, color: '#cec7bb' },
      { name: 'Two-storey block NW of the ring (OSM, 11.1 m)', bearingDeg: -65, distM: 67, wM: 20, hM: 11, color: '#e6e4de' },
      { name: 'JRA stone monolith, NE corner', bearingDeg: 65, distM: 45, wM: 6, hM: 3.5, color: '#cfc6b6' },
    ],
    trees: { count: 22, heightM: [12, 24], conifer: 0.6, leaf: ['#3a5440', '#4a6548', '#5d7f40', '#6f8f4a'] }, // huge deodar cedars (ヒマラヤスギ) and broadleaves behind the screen and at the ends
    lawn: '#6f9047', dust: null,
    saddleCloth: { cloth: '#f4f4f0', ink: '#141414', edge: '#c9a227' }, // Derby day: white cloth, black text, gold edging (ja.wikipedia ゼッケン)
    runners: 18,
    backdrop: { ranges: [], clouds: 6 },
    facts: {
      ringLengthM: 180, built: null,
      notes: 'Outer edge of the beige lane is 83 × 25 m and the lawn is about 64 × 14.5 m. Spectators line the south terraces, the west end, a narrow standing strip under the screen on the north side, and the east-end plaza. The Paddock Vision doubles as the odds board; the Tokinominoru (トキノミノル) statue and the Yasuda Isaemon (安田伊左衛門) bust are meeting spots in the paddock. 2025 Derby: 1 June, post 15:40, 18 runners.',
    },
    signature: 'A long, flat-ended oval with a salmon-beige lane between teal rubber bands round a bright lawn of numbered discs; across the ring the Paddock Vision (Derby-red 日本ダービー wrap) stands among huge deodar cedars, and the Fuji View Stand’s deck rises over the stone terraces opposite.',
    sources: ['https://www.openstreetmap.org/way/1426167544', 'https://www.openstreetmap.org/way/1540198726', 'https://www.openstreetmap.org/way/1540198727', 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/18/232640/103240.jpg', 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/18/232641/103240.jpg', 'https://ja.wikipedia.org/wiki/東京競馬場', 'https://ja.wikipedia.org/wiki/東京優駿', 'https://db.netkeiba.com/race/202505021211/', 'https://commons.wikimedia.org/wiki/Category:Racecourse_saddling_paddocks_in_Tokyo_Racecourse', 'https://commons.wikimedia.org/wiki/File:無人_(48555723597).jpg', 'https://commons.wikimedia.org/wiki/File:短軸側から_(47935906562).jpg', 'https://commons.wikimedia.org/wiki/File:Japanese_derby_day_日本ダービーデー_(52106904801).jpg', 'https://commons.wikimedia.org/wiki/File:Japanese_derby_day_日本ダービーデー_(52107191564).jpg', 'https://commons.wikimedia.org/wiki/File:February_stakes_paddock_-_フェブラリーステークス_パドック_(46208106935).jpg', 'https://commons.wikimedia.org/wiki/File:Paddock_at_Japan_cup_パドック、ジャパンカップ_2019_(49122339546).jpg'],
    uncertain: ['path (a stadium fitted to a 0.49 m/px aerial: the real ends are flatter and the long sides bulge about 1 m)', 'path.laneWidthM (2.4 m on the straights, 4–5 m at the ends)', 'path.dir (ccw worked out from horse headings in two photos)', 'ground / rail / terraces colours (from phone photos)', 'rail.heightM, rail.gapM', 'terraces rows / step / rise / dist (only the ~13.5 m total depth is measured)', 'terraces.roof (the crimson fascia may be Derby-day bunting)', 'screen size and lift (from the OSM height, the footprint and one 2019 photo)', 'buildings (stand height and distance not sourced; the stand is drawn as one flat block)', 'trees (count, heights and species by eye)', 'saddleCloth (the Derby cloth colours from the ゼッケン article; the hero keeps the number of its own signature win)', 'runners are generic coats', 'needs kits: the deck balconies of the Fuji View Stand, the lawn numbers and logo lettering, the statue and bust, jockeys and handlers'],
  },
  {
    id: 'beach', en: 'Beach at dawn', jp: '夜明けの浜辺', group: 'Strolling', builder: 'beach', gait: 'canter', W: 120, seed: 2060,
    reference: 'Kujukuri-hama (九十九里浜), Chiba: a 66 km Pacific sand arc from 刑部岬 to 太東崎, as seen near Kujukuri town / Toyoumi (不動堂海岸). Riding: 九十九里浜一宮乗馬センター at the south end (Ichinomiya).',
    // 23 Sep, ~05:55 JST: the sun is 4° up, rising out of the sea. The shoreline bears ~40°, so the beach faces ~130° (SE).
    // The camera is on the land side looking out to sea, +X = SW: the sun (az 93°) stands 36° left of straight out to sea,
    // inside the default three-quarter view, so the horse is backlit against the sunrise.
    time: {
      month: 9, sunElevDeg: 4, sunAzimDeg: -144, fogNear: 70, fogFar: 380, exposure: 1.2, fillIntensity: 0.9, // exposure and fill raised: the horse is backlit
      sky: { top: '#647b9e', mid: '#bfc3c6', horizon: '#f3b574', sun: '#ffd890' }, // sampled from a Toyoumi sunrise photo: orange band at the horizon, grey-blue above
      sunColor: '#ffb27a', sunIntensity: 1.8, hemiSky: '#b3bccc', hemiGround: '#8e806a', hemiIntensity: 1.35,
    },
    sea: { side: 'far', waterlineZ: -6, color: '#66737f', deep: '#4f5c6a', foam: '#e9e6df', waveM: 0.4 }, // a wide surf zone: 3–4 breaker lines ~20–120 m out
    sand: { wet: '#67625a', dry: '#a69e8c', print: '#8d949c', wetWidthM: 14 }, // prints: water standing in them catches the sky // flat (遠浅) grey-beige fine sand; the horse canters on the firm wet strip
    dunes: { side: 'near', distM: 45, heightM: [2, 5], grass: '#87894f' }, // a low foredune with コウボウムギ / ハマヒルガオ / ハマナス
    pines: { count: 36, distM: 75, leaf: ['#2e4630', '#37523a', '#405c3e'] }, // the クロマツ coastal forest (防風林) behind the dune
    props: { driftwood: 3, rocks: 0, tetrapods: 0 },
    prints: true, // hoof prints in the wet sand behind the horse
    backdrop: { ranges: [], landmarks: [], clouds: 4 }, // open sea horizon; the Kujukuri plain behind is flat, and the pines hide the inland hills
    dust: '#9a9282', // damp sand thrown up from the firm strip by the water
    extras: [{ mode: 'companion', x: -5, z: -2.5 }], // guided beach rides go out in small groups
    signature: 'Kujukuri at first light: a dead-flat grey-beige sand arc facing the Pacific, the sun lifting straight out of the sea through an orange haze band, long lines of surf, a mirror of wet sand, and a low grassy dune backed by a dark belt of Japanese black pines.',
    sources: ['https://ja.wikipedia.org/wiki/九十九里浜', 'https://ja.wikipedia.org/wiki/一宮町', 'https://ja.wikipedia.org/wiki/浦河町', 'https://ja.wikipedia.org/wiki/うらかわ優駿ビレッジAERU', 'https://commons.wikimedia.org/wiki/File:Toyoumi_beach_new_year.jpg', 'https://commons.wikimedia.org/wiki/File:First_sunrise_at_Kujukuri_Beach,_Japan.jpg', 'https://commons.wikimedia.org/wiki/File:蓮沼海浜公園付近（九十九里浜、山武市）_-_panoramio.jpg', 'https://commons.wikimedia.org/wiki/File:Sirasato_beach_2022.jpg', 'https://commons.wikimedia.org/wiki/File:Kujukuri_beach_and_around_2.jpg', 'https://commons.wikimedia.org/wiki/File:Kujukuri_Beach.jpg'],
    uncertain: ['time (sun computed for 23 Sep at 35.53°N 140.46°E; the ~40° shoreline bearing from the GPS tags of two Commons photos, ±10°; 4° chosen so the sun stays in the three-quarter view)', 'sky / light (sampled from a clear 1 Jan 2018 sunrise photo; September air is hazier)', 'sand colours (the photos are exposed for the sky; dry sand scaled up about 1.5×)', 'sand.wetWidthM, sea.waterlineZ, sea.waveM (estimates)', 'sea colours (dawn photo samples, darkened for the far sea)', 'dunes.distM / heightM (not sourced)', 'pines (the black-pine coastal forest is sourced; count, distance and colours are guesses)', 'props.driftwood (count guessed; no rocks on this sand coast)', 'backdrop: the headlands at the ends of the arc (~30 km) and the 九十九里ビーチタワー are not drawn', 'extras (a companion for a group ride is plausible, not verified)', 'needs kits: a sun-glitter path on the sea and wet sand, a drawn sun disc'],
  },
  {
    id: 'hill-gallops', en: 'Ritto hill gallop (坂路)', jp: '栗東トレセン 坂路コース', group: 'Strolling', builder: 'hill', gait: 'race', W: 300, seed: 2070,
    // JRA: 1,085 m long, 7 m wide, 32 m rise. From the bottom: 300 m at 2.0%, then 570 m at 3.5%, then 100 m at 4.5%, then 115 m at 1.25%.
    // The timed section (800 m, IC chips) runs from 70 m to 870 m. The sections are squeezed into one 300 m loop (slope mode).
    // A fast work over the timed 800 m takes about 51–55 s (~15 m/s), so the race gait fits.
    slope: { meanPct: 2.95, sectionsPct: [[0, 2.0], [300, 3.5], [870, 4.5], [970, 1.25]], lengthM: 1085, riseM: 32 },
    // Uphill bearing 127.6° (SE) on the main straight (OSM way 595273486); the camera stands on the SW (woods) side looking NE across
    // the course, so +X is uphill. Autumn schedule 06:00–10:00. Sun for Wed 22 Oct 07:00 at 34.99N 136.01E: elevation 9.4°,
    // azimuth 110.7°, 17° left of the uphill heading, so horses gallop almost into the low sun.
    time: {
      month: 10, post: '07:00', sunElevDeg: 9, sunAzimDeg: 107, fogNear: 60, fogFar: 300, exposure: 1.05,
      sky: { top: '#6d95c8', mid: '#b4c8de', horizon: '#ecd8bd', sun: '#ffe6b8' }, sunColor: '#ffd7a0', sunIntensity: 2.3,
      hemiSky: '#cdd9e6', hemiGround: '#6b5a48', hemiIntensity: 1.2,
    },
    course: {
      widthM: 7, chip: '#7a5e4e', chipDark: '#5a4438', // red-brown wood chips (red pine + cedar); hoof-churned lanes darker
      rail: { color: '#f3f3ef', heightM: 1.1 }, // white round-pipe rails, top and middle pipe, both sides
      verge: '#55693c', hedge: { color: '#55693c', heightM: 1.5 }, // clipped evergreen hedges right behind both rails
      farDirt: [22, 48], farDirtColor: '#a08a6a', // beyond the far hedge strip: open ground and the dirt of the main training ovals
    },
    // SW (camera) side: continuous mixed broadleaf woods from 2–5 m beyond the rail; NE (far) side: the hedge strip, a line of
    // wired utility poles ~17 m from the centre line, then the open dirt course
    woods: { side: 'near', distM: 5, count: 80, leaf: ['#3f5a34', '#4b6a3a', '#5a7444', '#6e7a3c'], autumn: 0.15 },
    props: { timingPoles: 2, lightPoles: 0, utilityPoles: 5, utilityDistM: 14, tower: { heightM: 15, color: '#e6e4dc' } },
    saddleCloth: { cloth: '#5b2c83', ink: '#f5c800', numbered: false }, // JRA G1-winner training cloth: 紫 with yellow text, the horse's name (and a ★ per G1 win, not drawn)
    backdrop: {
      ranges: [
        { r: 580, base: '#8f9db6', h: [5, 17], step: 0.16, haze: 0.62 }, // Hira and Suzuka ranges, ~1.7° high over the Lake Biwa basin
        { r: 470, base: '#61774f', h: [1.5, 4], step: 0.12, haze: 0.45 }, // low wooded hills across the Ōmi plain
      ],
      landmarks: [
        { type: 'fuji', bearingDeg: -19, distM: 520, heightM: 20, snow: false, base: '#5f7650', haze: 0.45 }, // Mt Mikami 三上山 "Ōmi Fuji", a green cone 2.2° high
        { type: 'skyline', fromDeg: -70, toDeg: 30, distM: 520, heightM: [3, 9] }, // stable blocks and Ritto town across the training ovals
      ],
      clouds: 4,
    },
    dust: '#5e4a3d', // dark clods of damp chip kicked up behind
    extras: [{ mode: 'companion', x: -1.2, z: -2.4 }], // 併せ馬: a work partner half a length back on the far side of the 7 m course
    facts: {
      typical4F: 'Fast work (追い切り) over the timed 800 m: about 51–55 s (Indy Champ 52.4 s; Silence Suzuka 52.3 s; Doura Erede 54.5 s). Routine work is about 15 s a furlong (~60 s).',
      opened: 1985, // Nov 1985 at 394 m; three extensions brought it to 1,085 m by Nov 1992
      notes: 'The busiest course at Ritto: more than 1,000 horses a day on busy days. Training hours: summer 05:00–09:00, spring/autumn 06:00–10:00, winter 07:00–11:00. Training cloths by age and sex; G1 entrants wear 紫紺/yellow until the race, G1 winners 紫/yellow with stars. Helmet colours are compulsory (jockeys blue, trainers black, 調教厩務員 orange). Horses go up singly or in pairs, then walk back down the 逍遥馬道 on the SW side.',
    },
    signature: 'A dead-straight 7 m ribbon of dark red-brown wood chips climbs south-east between low white pipe rails and clipped hedges; woods crowd one side and a line of wired poles runs along the other. A white gantry and red-on-white boards count down the timed 800 m, and horses come up in pairs into the low morning sun toward the four-storey 坂路 stand at the top.',
    sources: ['https://www.jra.go.jp/facilities/tc/rittou/guide/', 'https://www.jra.go.jp/facilities/tc/rittou/guide/img/img_hill.png', 'https://www.jra.go.jp/facilities/tc/rittou/guide/img/pic_course_hanro.jpg', 'https://www.jra.go.jp/facilities/tc/rittou/guide/img/img_allmap.jpg', 'https://www.jra.go.jp/facilities/tc/rittou/intro/', 'https://ja.wikipedia.org/wiki/栗東トレーニングセンター', 'https://ja.wikipedia.org/wiki/インディチャンプ', 'https://ja.wikipedia.org/wiki/ドゥラエレーデ', 'https://ja.wikipedia.org/wiki/サイレンススズカ', 'https://www.openstreetmap.org/way/595273486', 'https://www.openstreetmap.org/way/1414517042', 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/18/230113/103843.jpg', 'https://cyberjapandata2.gsi.go.jp/general/dem/scripts/getelevation.php?lon=136.00552&lat=34.99306&outtype=JSON'],
    uncertain: ['time (22 Oct 07:00 chosen within the sourced autumn hours; sky colours invented for a clear morning)', 'course chip colours (two JRA photos and the aerial)', 'rail height and type (photos)', 'hedge heights (by eye; the camera-side hedge is drawn lower so it does not hide the legs)', 'woods (count, leaf, gap from the aerial and one photo)', 'timing boards every 200 m (inferred from the 800 m timed section); one gantry', 'lightPoles 0 (pre-dawn floodlighting not verified)', 'utility pole spacing (aerial shadows)', 'tower 15 m (4 floors in OSM)', 'saddleCloth (from the JRA table; assumes the hero is a G1 winner; stars not drawn)', 'backdrop (ranges are rings; Hira and Suzuka really sit only at -53..-68° and +32..+62°; the near 阿星山 hills straight up the course are not drawn)', 'companion position (plausible, not measured)', 'the slope sections are squeezed into one 300 m loop', 'needs kits: riders in coloured helmets and vests, the 坂路 stand at the top, the hedge on the bend'],
  },
  {
    id: 'snow-field', en: 'Snowy Hokkaido field', jp: '雪の牧場', group: 'Strolling', builder: 'snow', gait: 'walk', W: 130, seed: 2080,
    // a clear February morning, ~08:00 JST, 42.2°N (Urakawa): horses just turned out after the morning feed. The Hidaka coast gets
    // little snow (JMA: monthly maximum depth ~15–28 cm on the coast, deeper in the valleys), so the snow is fetlock-deep.
    time: {
      month: 2, sunElevDeg: 16, sunAzimDeg: -55, fogNear: 40, fogFar: 170, exposure: 0.92,
      sky: { top: '#3f78c8', mid: '#93bbe6', horizon: '#dfe9f1', sun: '#fff4e2' },
      sunColor: '#ffeedc', sunIntensity: 2.7, hemiSky: '#cddff2', hemiGround: '#c8d4e2', hemiIntensity: 1.15,
    },
    snow: { sunlit: '#f2f6fa', shade: '#a6c2e2', depthM: 0.25, tracks: '#9c8473', straw: '#b09c74', falling: 0 }, // trampled to mud and hay round the feeding spots
    fence: { color: '#eef0ec', buriedM: 0.25 },
    trees: { birch: 8, conifer: 14, coniferLeaf: '#2c4638', snowOnBranches: true }, // bare white birches; dark todomatsu firs
    buildings: [
      { type: 'barn', roof: '#a3402f', wall: '#ece6da', distM: 70 },
      { type: 'barn', roof: '#3d6a58', wall: '#e3e0d8', distM: 110 },
    ],
    rug: { color: '#22305e', trim: '#c23a33', colors: ['#22305e', '#2e5a3a', '#6a2a2a', '#3a3f48'] }, // winter turnout rugs (馬着)
    breath: true, // mean daily lows of -6 to -8 °C in January: the breath steams
    backdrop: {
      ranges: [
        { r: 470, base: '#8d9cb8', h: [26, 62], step: 0.18, haze: 0.5, snowline: 30 }, // the Hidaka mountains, white above the forest
        { r: 380, base: '#76807c', h: [10, 26], step: 0.12, haze: 0.38, snowline: 18 }, // foothills: bare woods and conifers over snow
      ],
      clouds: 3,
    },
    dust: '#eef2f6', // kicked-up snow
    extras: [
      { mode: 'companion', x: -3.6, z: -2.0 },
      { mode: 'grazer', x: 20, z: -11, rotY: 0.7 }, // mares and yearlings nosing through to hay and grass
      { mode: 'grazer', x: 24, z: -13.5, rotY: 1.1 },
      { mode: 'grazer', x: 86, z: -18, rotY: 2.8 },
    ],
    signature: 'A clear February morning on a Hidaka farm: fetlock-deep snow trampled to mud and hay round the feeding spots, white board fences, long blue shadows, steaming breath, horses in winter rugs, and the Hidaka range white on the horizon.',
    sources: ['https://www.data.jma.go.jp/obd/stats/etrn/view/nml_sfc_ym.php?prec_no=22&block_no=47426&year=&month=&day=&view=', 'https://www.data.jma.go.jp/obd/stats/etrn/view/nml_sfc_ym.php?prec_no=21&block_no=47424&year=&month=&day=&view=', 'https://ja.wikipedia.org/wiki/浦河町', 'https://ja.wikipedia.org/wiki/馬着', 'https://commons.wikimedia.org/wiki/File:マイネルキッツ_うらかわ優駿ビレッジAERUにて（2024年2月）.jpg', 'https://commons.wikimedia.org/wiki/File:Blue_Sky_And_White_World_(131608635).jpeg'],
    uncertain: ['snow.depthM (a compromise between the coast and the valleys)', 'snow colours (sampled from a clear-day photo in Biei, brightened)', 'snow.tracks / straw (sampled from an Urakawa February photo)', 'snow.falling 0 (a clear day; snow falls on about 21 February days at Tomakomai, mostly light)', 'fence.color (the one Urakawa winter photo shows weathered grey boards; white kept to match the summer farm)', 'trees (counts and mix from general knowledge; larch windbreaks would need a kit; snow is often blown off the branches on this windy coast)', 'buildings (colours and distances not sourced)', 'rug (colours invented; whether turned-out horses wear 馬着 varies by farm, and the one February photo shows an unrugged horse)', 'time (sun computed for about 10 Feb, 08:00; azimuth staged for long blue shadows)', 'backdrop (ranges reused from the summer farm; winter Hidaka range not photo-checked)', 'extras positions are placeholders'],
  },
];

// Every other venue on the roadmap, shown as "soon" in the picker (order = build order).
window.LOCATION_QUEUE = [
];

window.DEFAULT_LOCATION = 'tokyo';
