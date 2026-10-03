export const meta = {
  name: 'horse-quirk-research',
  description: 'Research documented physical and running-style quirks of all 152 roster horses (ears, chest, head carriage, stride…) and map them to customization parameters, each verified against its source',
  phases: [
    { title: 'Research', detail: '12 researchers, ~13 horses each' },
    { title: 'Verify', detail: 'a skeptic re-reads every cited source per group' },
  ],
}

const ROSTER = args
const PARAMS = `PARAMETER VOCABULARY (map each documented quirk to at most one of these; 1 or 0 = an average Thoroughbred):
conf (build, static):
- ears: ear size 0.8 (very small) .. 1.25 (very large)
- earSet: -1 close-set/upright .. +1 wide-set/slanting outward
- earTilt: -1 pricked forward at rest .. +1 lop/drooping ears (垂れ耳)
- head: head size 0.88 (small, refined) .. 1.15 (very big head, 顔がデカい)
- profile: -1 dished .. 0 straight .. +1 Roman-nosed
- neck: neck length 0.85 .. 1.2
- crest: neck thickness/crest 0.6 (thin, ewe-necked) .. 1.6 (thick, heavy crest)
- chestDepth: 0.9 (shallow, 胸が浅い) .. 1.12 (very deep girth, 胸が深い)
- chestWidth: 0.9 (narrow breast) .. 1.15 (very broad chest, 胸前が広い)
- barrel: 0.9 (slab-sided) .. 1.1 (well-sprung, round ribcage)
- hindquarters: 0.9 (light behind) .. 1.15 (massive quarters, トモが発達)
- withers: -1 low/flat .. +1 high/prominent
- tuckUp: 0 .. 1 (belly tucked up toward the flank; lean, 腹が巻き上がる)
- bone: 0.9 (fine-boned) .. 1.15 (heavy bone; use 管囲 cannon circumference if known: ~20 cm = 1.0, 21.5 cm ≈ 1.07)
- hoof: 0.9 (small feet) .. 1.1 (big feet)
- tailSet: -1 low-set .. +1 high-set
run (running pattern, at speed):
- headCarriage: -1 very low, neck stretched forward and down (e.g. 首を低く使う / 頭の低いフォーム) .. +1 high-headed (頭が高い)
- neckPump: 0.5 (still neck) .. 1.5 (big nodding/pumping neck action, 首を大きく使う)
- stride: 0.9 (pitch runner, short quick strides: ピッチ走法) .. 1.1 (stride runner, long reaching strides: ストライド走法 / 大跳び)
- kneeAction: 0.7 (low, daisy-cutting, 地を這うような) .. 1.3 (high knee action, 掻き込み / 前脚を高く上げる)
- hindDrive: 0.8 .. 1.2 (powerful hind push-off, トモの踏み込み)
- bodyLow: 0 .. 1 (runs with the whole body low to the ground / 沈み込むフォーム)
- roll: 0.5 (very straight, no sway) .. 1.5 (rolling, swaying action)
- earsAtSpeed: -1 ears pricked forward while racing .. +1 ears pinned flat back
- tailCarriage: -1 tail clamped down .. +1 tail held high / streaming (尻尾を振る etc.)
If a documented quirk fits none of these (tongue out, head-tossing, drifting, unusual action), keep it with param null — it becomes a candidate for a new parameter.`

const QUIRKS = {
  type: 'object',
  properties: {
    horses: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          n: { type: 'integer' }, en: { type: 'string' }, jp: { type: 'string' },
          quirks: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                description: { type: 'string', description: 'what the source says, in English, with the original Japanese phrase in brackets' },
                param: { type: ['object', 'null'], properties: { group: { type: 'string', enum: ['conf', 'run'] }, key: { type: 'string' }, value: { type: 'number' } }, required: ['group', 'key', 'value'] },
                quote: { type: 'string', description: 'the exact supporting phrase from the source (Japanese is fine)' },
                sources: { type: 'array', items: { type: 'string' }, minItems: 1 },
                confidence: { type: 'number', minimum: 0, maximum: 1 },
              },
              required: ['description', 'param', 'quote', 'sources', 'confidence'],
            },
          },
          searched: { type: 'array', items: { type: 'string' }, description: 'pages actually read for this horse' },
        },
        required: ['n', 'en', 'jp', 'quirks', 'searched'],
      },
    },
  },
  required: ['horses'],
}
const CHECK = {
  type: 'object',
  properties: {
    horses: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          n: { type: 'integer' }, en: { type: 'string' },
          quirks: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                description: { type: 'string' },
                param: { type: ['object', 'null'], properties: { group: { type: 'string' }, key: { type: 'string' }, value: { type: 'number' } }, required: ['group', 'key', 'value'] },
                quote: { type: 'string' }, sources: { type: 'array', items: { type: 'string' } },
                verdict: { type: 'string', enum: ['verified', 'adjusted', 'unsupported'] },
                note: { type: 'string', description: 'why; for adjusted: what changed' },
              },
              required: ['description', 'param', 'quote', 'sources', 'verdict', 'note'],
            },
          },
        },
        required: ['n', 'en', 'quirks'],
      },
    },
  },
  required: ['horses'],
}

const RULES = 'Rules: research the REAL racehorse (not the Uma Musume game character). Prefer Japanese Wikipedia, JRA (jra.go.jp, 名馬の肖像 / 顕彰馬), JBIS, netkeiba news and columns, Sports Nippon / Sponichi, Racing Post, English Wikipedia, books quoted in those. Check each page is about the right horse. Never fill anything from memory: every quirk needs a source URL you actually fetched and an exact supporting quote. Only report notable, documented traits (most horses will have 0-3; an empty list is a fine answer). Never put personal information (emails, usernames) in any web request; use a generic User-Agent if one is needed. Do not create or modify any file in the repository.'

const groups = []
for (let i = 0; i < ROSTER.length; i += 13) groups.push(ROSTER.slice(i, i + 13))
log(`${ROSTER.length} horses in ${groups.length} groups`)

const results = await pipeline(
  groups,
  (g, _, gi) => agent(
    `You research documented PHYSICAL and RUNNING-STYLE quirks of famous Japanese racehorses so a 3D horse model can reproduce them (e.g. Oguri Cap's famously low head carriage when racing, very small or very large ears, a big head, a deep chest, a pitch vs stride running action, Tokai Teio's springy, flexible "Teio step" action).\n\nSearch terms to try per horse (with its Japanese name): 走法, フォーム, ストライド, ピッチ, 首, 頭, 耳, 胸, 馬体, 体型, トモ, 脚, 蹄, 管囲, 尻尾, 特徴. Read the horse's Japanese Wikipedia article (特徴 / 競走馬としての特徴 sections) at minimum.\n\n${PARAMS}\n\n${RULES}\n\nHORSES (group ${gi + 1}):\n${g.map((h) => `#${h.n} ${h.en} / ${h.jp} (foaled ${h.born})`).join('\n')}\n\nReturn one entry per horse in this group (all ${g.length}), with its quirks (possibly none) and the pages you read.`,
    { label: `research:${g[0].n}-${g[g.length - 1].n}`, phase: 'Research', schema: QUIRKS },
  ),
  (r, g, gi) => {
    const withQuirks = ((r && r.horses) || []).filter((h) => h.quirks && h.quirks.length)
    if (!withQuirks.length) return { horses: ((r && r.horses) || []).map((h) => ({ n: h.n, en: h.en, quirks: [] })) }
    return agent(
      `SKEPTIC. For each claimed horse quirk below, re-fetch its cited source(s) and check: (1) the page is about this real racehorse (not the game character or another horse); (2) the quoted phrase is really there (or an equivalent statement); (3) the parameter value is a fair reading (not exaggerated). Verdict per quirk: verified, adjusted (fix the description / value and say how) or unsupported (source missing, wrong horse, quote not found, or from memory). Keep every quirk in your output with its verdict.\n\n${PARAMS}\n\n${RULES}\n\nCLAIMS (group ${gi + 1}):\n${JSON.stringify(withQuirks)}`,
      { label: `verify:${g[0].n}-${g[g.length - 1].n}`, phase: 'Verify', schema: CHECK },
    )
  },
)
const flat = results.filter(Boolean).flatMap((r) => r.horses || [])
const kept = flat.flatMap((h) => (h.quirks || []).filter((q) => q.verdict !== 'unsupported').map((q) => ({ n: h.n, en: h.en, ...q })))
const dropped = flat.flatMap((h) => (h.quirks || []).filter((q) => q.verdict === 'unsupported').map((q) => ({ n: h.n, en: h.en, description: q.description, note: q.note })))
log(`${kept.length} verified/adjusted quirks across ${new Set(kept.map((q) => q.n)).size} horses; ${dropped.length} unsupported dropped`)
return { kept, dropped, groupsDone: results.filter(Boolean).length, groupsTotal: groups.length }