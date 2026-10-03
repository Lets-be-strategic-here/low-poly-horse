/* Batch-2 drafts from the first smoke tests of the agent templates (2026-10-02). NOT loaded by the app.
   Both were produced before the templates were hardened (page-identity checks, no values from memory,
   photo check for markings), so re-run the current templates on them before moving them into data/. */

// horse-researcher → Mejiro Ramonu / メジロラモーヌ / 1983 (52 s, 10 tool calls; JBIS records 403'd)
const MEJIRO_RAMONU_DRAFT = {
  id: 'mejiro-ramonu', en: 'Mejiro Ramonu', jp: 'メジロラモーヌ', born: 1983, sex: 'female',
  coat: { reg: '青鹿毛', key: 'aokage', greyness: null, tone: 0, mane: null, notes: 'JBIS + ja.wikipedia agree on 青鹿毛; described as glossy (黒光りする).' },
  face: { type: 'stripe', notes: 'A web-search summary mentions a large 流星; not confirmed on a primary page.' },
  legs: { LF: 'none', RF: 'none', LH: 'none', RH: 'none' },
  style: { primary: 'senko', secondary: 'sashi', why: 'Race-by-race 通過 data unavailable (JBIS 403); sources conflict.' },
  size: { weightKg: [450, 466], typicalKg: 454, withersCm: null, girthCm: null, cannonCm: null, build: 'average', notes: '466 kg at debut, 454 kg in the Oka Sho.' },
  gear: { shadowRoll: false, blinkers: false, hood: false, notes: 'No gear information found.' },
  silks: { owner: 'メジロ牧場 (北野ミヤ)', desc: 'UNVERIFIED (from memory): white with a green hoop', colors: ['#ffffff', '#1f7a3a'] },
  career: '1986 Oka Sho, Yushun Himba and Queen Elizabeth II Cup — the first Japanese filly triple crown; 12 starts, 9 wins.',
  sources: ['https://ja.wikipedia.org/wiki/メジロラモーヌ', 'https://www.jbis.or.jp/horse/0000158372/'],
  uncertain: ['face.type', 'legs', 'style', 'size.typicalKg', 'gear', 'silks'],
};

// location-researcher → Kyoto Racecourse / 京都競馬場 (34 s, 6 tool calls; G1 list from memory — re-verify)
const KYOTO_DRAFT = {
  id: 'kyoto', en: 'Kyoto Racecourse', jp: '京都競馬場', group: 'JRA G1', builder: 'track', gait: 'gallop',
  hand: 'right', surface: 'turf', lead: 'L', W: 400,
  time: { month: 11, post: '15:40', sunElevDeg: 20, fogFar: 300, sky: { top: '#6fa3d8', mid: '#a9cbe6', horizon: '#e3e8e2', sun: '#fff1d0' } },
  turf: { color: '#7fa24a', widthM: 30 }, dirt: { color: '#b89a6a', widthM: 25 }, rails: { color: '#ffffff' },
  stand: { name: 'Goal Side Stand (2023) / Station Side Stand', lengthM: 300, floors: 7, colors: { body: '#e8e6df', roof: '#b9bcc0', glass: '#9cc3d5', seats: '#4c8a5a' } },
  // needs new kits: the infield is mostly a large pond with Benten island and its shrine (track research);
  // the 2023 stand has stepped green terraces and a 25 m cantilevered truss roof
  infield: [{ type: 'pond', xFrac: 0.3, sizeM: [200, 70], distM: 120 }],
  facts: { turfCircM: 1894.3, dirtCircM: 1607.6, turfStraightM: 403.7, dirtStraightM: 329.1, elevationM: 4.3 },
  signature: 'The infield lake with Benten island, the 淀の坂 hill at the 3rd corner, and the rebuilt 2023 stand.',
  uncertain: ['time', 'turf.color', 'stand.colors', 'infield', 'backdrop', 'facts.races (from memory)'],
};
