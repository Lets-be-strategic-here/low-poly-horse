# Roadmap

Where the low-poly horse goes next, in build order. Each **batch** adds the next horses in generation
order, a location or two, and one engine item. Horses come from the official character list at
<https://umamusume.jp/character/>; every entry models the **real racehorse** behind a character.

## Status after batch 4 (October 2026)

| Area | Done |
|---|---|
| Engine | Horse profiles drive the whole model: coat, markings, size and hair length. A gait table holds the gallop (left or right lead), a new **walk** and a standing **graze** pose. Stride counts are recomputed for each horse and location, so the loop stays seamless and planted hooves have 0.00 mm slip (measured). Includes a location system, background horses, the side panel and the URL hash. |
| Gear (B4) | Drawn from each horse's `gear`: a **hood (メンコ)** shell with eye holes, coloured trim and ear covers that move with the ears (`hoodColors`), **blinker** cups, a sheepskin **shadow roll**, the **bit-lifter (ハミ吊り)**, a **bridle** (headpiece, browband, noseband, cheekpieces, bit rings; `bridle`, `browband`, `noseband` colours), a **poll pompom** and **leg bandages**. All head gear is merged into one mesh. A Gear toggle in the panel. |
| Night racing (B4) | `time.night`: floodlights become the key and fill light (`floodlights` colour, intensity), a dark sky, lit windows in the skyline, glowing screen and stand glass, floodlight masts with glowing lamp banks on both sides, light HUD text. `dirtOnly`: one dirt course with the infield inside its rail. |
| Race gallop (B3) | A **race** gait at racing speed (~16 m/s): 7 m strides at 0.43 s, duty factor 0.2, a long suspension with all four legs gathered under the body. The body runs lower with more bound and lumbosacral flexion, 18° of scapular swing, and the hock opens up to 40° past rest at push-off (`hockPush`) so the hoof stays planted far behind the hip. Racecourses use it by default; the bar has Walk / Gallop / Race. Stance slip is still 0.00 mm for every horse size. |
| Forelimbs (B2) | Deeper, broader brisket so the elbow and forearm tuck into the chest instead of hanging off a rounded barrel; a broad flat shoulder blade, a triceps mass and a muscular forearm top; at the gallop the forefoot flips up into a hook behind the knee (deeper fetlock curl, higher fore lift). |
| Colour | All 8 JBIS registry coats (鹿毛 … 白毛), pickers for coat, mane/tail and lower legs, 10 face markings, white height per leg, and Reset. **Greys (B2):** greyness slider with a slow-greying curve, **dapples** (cellular noise painted on 16× subdivided coplanar faces, strongest at mid grey, with their own slider), lighter faces and dark lower legs on young greys, and a separate `coat.tail` colour. |
| Parts | Mane and tail length, height (uniform scale) and weight (bulk of trunk, neck and upper limbs). |
| Horses | 35 of 152, roster #1–#35, from Byerley Turk (c.1680) to Mihono Bourbon (1989). |
| Locations | **Hidaka stud farm** (walk, with a companion and grazing horses), **Countryside trail** (the original scene), and the JRA G1 courses **Tokyo**, **Nakayama**, **Kyoto** (infield lake), **Hanshin** (cherry blossom: `blossom` colours flowering broadleaf trees only) and **Chukyo** (B3). |
| Research | Two reusable agent templates in `.claude/agents/`, run for every horse and track since batch 2 (8–10 agents in parallel, about 3–9 minutes each). |

## Order of work

Each batch runs in this order:
1. Research (agents in parallel).
2. Engine item.
3. Data entry.
4. Visual check.
5. Commit.

Engine items are placed before the first horse that needs them.

| Batch | Horses (roster #, generation) | Locations | Engine item |
|---|---|---|---|
| ✅ 1 | #1–11 · c.1680–1982 · Byerley Turk, Darley Arabian, Godolphin Barb, Saint Lite, Speed Symboli, Haiseiko, Maruzensky, Katsuragi Ace, Mr. C.B., Symboli Rudolf, Sirius Symboli | Hidaka, Countryside, Tokyo, Nakayama | Profiles, gaits, locations, UI |
| ✅ 2 | #12–19 · 1983–85 · Mejiro Ramonu, Gold City, Inari One, Tamamo Cross, Bamboo Memory, Mejiro Ardan, Oguri Cap, Sakura Chiyono O | Kyoto (big infield pond + Benten island), Hanshin (cherry trees, Rokko mountains) | **Grey coats**: dapple pattern, darker heads and legs on young greys (Oguri Cap, Tamamo Cross); forelimb and chest rework |
| ✅ 3 | #20–27 · 1985–87 · Super Creek, Yaeno Muteki, Daiichi Ruby, Daitaku Helios, Ikuno Dictus, Ines Fujin, Mejiro McQueen, Mejiro Palmer | Chukyo (Pegasus and Twin Hat stands) | **Race-speed gallop** (see Anatomy 1) |
| ✅ 4 | #28–35 · 1987–89 · Mejiro Ryan, K.S.Miracle, Nice Nature, Tokai Teio, Twin Turbo, Yamanin Zephyr, Matikanetannhauser, Mihono Bourbon | Oi (night racing: floodlights, white sand, dirt-only layout) | **Gear rendering** from `gear`: hood/メンコ, blinkers, bit-lifter, bridle (reins wait for the jockey, B12) |
| 5 | #36–43 · 1989–90 · Nishino Flower … Sakura Chitose O | Kawakami → see NAR list: Kawasaki (72 m screen), Funabashi | Shadow roll (needed for Narita Brian in B6), saddle and saddle cloth |
| 6 | #44–51 · 1990–92 · Winning Ticket … Fuji Kiseki | Urawa, Morioka (Mt Iwate, NAR's only turf course) | Trot and canter gaits |
| 7 | #52–59 · 1992–94 · Genuine … Matikanefukukitaru | Kanazawa (tiled-roof screen), Saga (both JpnI only in JBC years) | Head shape, ear and crest parameters (conformation) |
| 8 | #60–67 · 1994–95 · Mejiro Bright … Grass Wonder | Racecourse paddock (walking the parade ring) | Path mode (curved walking paths) |
| 9 | #68–75 · 1995–96 · King Halo … Meisho Doto | Beach at dawn | Sand builder, splash and dust variants |
| 10 | #76–83 · 1996–98 · Narita Top Road … Calstone Light O | Training-centre hill gallop (坂路) | Sloped straights (also needed for real hills) |
| 11 | #84–91 · 1998–99 · Dantsu Flame … Symboli Kris S | Snowy Hokkaido field | **Rigid-skin merge** (one draw call per horse; see Performance) |
| 12 | #92–99 · 1999–2002 · Tanino Gimlet … Cesario | — | **Jockey in the owner's silks** (勝負服, already in `silks`) |
| 13–19 | #100–152 · 2002–2021 · Daring Heart … Forever Young (8 per batch; the exact split is in `data/roster.js`) | Seasonal variants of existing tracks | **Race mode** (below), then polish |

Before every batch, re-read the official list. New characters are added over time, and they slot into the roster by foaling year.

## Locations

### JRA G1 courses (5): build all
| Venue | Hand | Straight (turf/dirt) | Signature | Status |
|---|---|---|---|---|
| Tokyo 東京 | L | 525.9 / 501.6 m | Fuji View Stand, Mt Fuji, 66 m Turf Vision | ✅ |
| Nakayama 中山 | R | 310 / 308 m | 2.2 m final hill, steeplechase hedge and brush jumps | ✅ |
| Kyoto 京都 | R | 403.7 (outer) / 329.1 m | Infield lake with Benten island, 淀の坂 at the 3rd corner | ✅ |
| Hanshin 阪神 | R | 473.6 (outer) / 352.7 m | Cherry blossom for the Oka Sho, final hill, Rokko mountains | ✅ |
| Chukyo 中京 | L | 412.5 / 410.7 m | Pegasus and Twin Hat stands, hill at the start of the straight | ✅ |

### NAR JpnI venues (7)
- Run JpnI races every year:
  - ✅ Oi 大井: night "Twinkle" racing on white sand (B4).
  - Kawasaki 川崎
  - Funabashi 船橋
  - Urawa 浦和: JpnI since the 2024 dirt reform.
  - Morioka 盛岡
- JpnI only in JBC host years: Kanazawa 金沢 and Saga 佐賀.
- The track builder needs a **dirt-only layout** and night lighting before Oi.

### Strolling and generic locations
| Location | Status |
|---|---|
| Hidaka stud farm | ✅ |
| Countryside trail | ✅ |
| Racecourse paddock | Planned |
| Beach | Planned |
| Training-centre hill | Planned |
| Snowy field | Planned |

Each strolling location gets 1–3 **background horses**: generic coats, either walking beside the hero or grazing in a field.

## Anatomical accuracy (ordered by visual payoff)
1. ✅ **Race-speed gallop** (B3; the old gallop stays as the "Gallop" button). The old gallop has 2.6 m strides at 0.42 s, about 6 m/s, which is a canter pace. A racing Thoroughbred runs about 16–17 m/s:
   - stride 6.5–7.5 m, about 2.3 strides/s;
   - duty factor about 0.2–0.25 per limb;
   - longer suspension;
   - more scapular swing and more lumbosacral flexion.

   The legs need more reach (lower body, about 18° scapular swing). Race tracks switch to this gait.
2. **Lead changes.** The lead is already set per location (the outside lead on the home straight). Animate flying changes in race mode.
3. **Trot and canter**, plus blended transitions between gaits.
4. **Conformation parameters** per horse:
   - neck length and crest (Godolphin's high crest);
   - head profile (straight, dished, Roman);
   - ear size;
   - croup slope;
   - pastern angle.
5. **Hooves.** Front hooves rounder and larger than hind; aluminium racing plates.
6. **Muscle landmarks**: shoulder, forearm, gaskin, point of hip, point of buttock. Use the girth and cannon measurements when the data has them (Haiseiko: 188 cm chest, 21.5 cm cannon).
7. **Breathing locked to the stride** at the gallop (1:1 nostril flare and flank).
8. **Neck skinning.** Add a neck bone or spread the weights; the grazing pose pinches the throat.
9. Eye detail (brow, sclera); chestnuts and ergots.

**Validation:**
- Compare frames side by side with Muybridge's photo sequences.
- Proportion checks: body length ≈ height at the withers, leg length ≈ body depth.
- The slip and reach test below.

## Colour customization (next)
- ~~Dapples~~ (done in B2); roan and flea-bitten (age-greying) patterns.
- Flaxen mane toggle (today: a `coat.mane` hex, as on Gold City).
- Lighter muzzle and flank (soft-tan) for 青鹿毛.
- Share a customized horse through the URL hash; today the hash stores the horse, location and gait, not the overrides.
- `recolor()` without rebuilding the geometry.

## Part customization (next, in order)
1. ~~Gear~~ (done in B4). It was recorded in the data as:
   - hood (メンコ): Haiseiko, Katsuragi Ace;
   - shadow roll: Narita Brian, B6;
   - blinkers;
   - bit-lifter (ハミ吊り): Mr. C.B.;
   - pompom: Maruzensky.
2. Bridle, reins, saddle, saddle cloth with a race number, leg bandages.
3. Mane styles (pulled, long, braided), forelock, tail set.
4. Jockey wearing the owner's silks (勝負服).

## Race mode (later)
- A field of horses whose positions follow their real running styles (逃げ 先行 差し 追込, already in the data).
- Real course geometry: turns, plus elevation from `facts.straightProfile`.
- Gate start and lead changes.
- Prerequisite: the rigid-skin merge.

## Performance
- **Rigid-skin merge.** Each horse is 58 meshes, about 112 draw calls with shadows. Merge them into one SkinnedMesh per horse, and let grazer copies share one skeleton. Required before race mode or larger herds.
- Props are already static instanced strips that only slide each frame, so they cost no per-frame CPU.

## Research workflow (one agent per horse / per location)
- **Run the agents without Playwright.** The browser is shared, so parallel agents navigate each other's pages; they read photos by calling WebFetch on the image URL instead.
- **Agent templates:**
  - `.claude/agents/horse-researcher.md` returns one `HORSES` entry.
  - `.claude/agents/location-researcher.md` returns one `LOCATIONS` entry.
  - Both run on Sonnet. In the smoke tests a horse took about 1 minute and a track about 35 seconds.
- **Per batch:**
  1. Read the official list again and take the next 8 names from `data/roster.js`.
  2. Start 8 horse-researcher agents and 1–2 location-researcher agents **in one message**. The prompt is just the subject:
     - `Mejiro Ramonu / メジロラモーヌ / 1983`
     - `track: Kyoto Racecourse / 京都競馬場`
  3. Review each result's `uncertain` list, then paste the entries into `data/horses.js` / `data/locations.js`.
  4. Take a screenshot of each new entry and run the checks below.
- If a session doesn't list the custom agent types (they load at start-up), use a general-purpose agent with `Read .claude/agents/<name>.md and follow it. <subject>`.
- **Blender is not part of this pipeline;** the scene is procedural Three.js. If Blender is ever used (for example, reference renders), configure it for **GPU only**: Cycles device = GPU (OptiX/CUDA/HIP) with the CPU devices unticked.

## Checks for every batch
- **No slip and no IK clamping.** In the console, for each leg `id`, step `__horse.setPhase(p)` through the loop. During stance, `__horse.toeWorld(id).x + p * W` must stay constant (measured 0.00 mm at walk and gallop for scale 0.93–1.05) and `toeWorld(id).y` must stay ≈ 0.
- **Seamless loop.** `__horse.strides` is a whole number for every horse, gait and location.
- **Console** is clean.
- **Phone width.** At 375 px there's no horizontal scroll.
- **Visual.** A side and a 3/4 screenshot of each new horse and location.

## To-do: open research uncertainties
Every item below is flagged in an entry's `uncertain` list in `data/horses.js` or `data/locations.js`.
When a primary source settles a value, fix it, remove it from `uncertain` and tick the box. Primary sources:
JBIS, a JRA 顕彰馬 page, a netkeiba or keibabook race table, or a dated photo.

### Horses (batch 1)
- [ ] **Byerley Turk.**
  - Foaling year: c.1679 or c.1680?
  - Height and size are not documented anywhere.
  - Unverified: the 1690 Down Royal "Silver Bell" win.
- [ ] **Darley Arabian.**
  - How high the white goes on LF, LH and RH. The 1703 letter says only "white upon them". Check the Wootton portrait at Aldby.
  - Blaze width: one secondary source says narrow. The data uses the letter's "something of the largest".
- [ ] **Godolphin Barb.**
  - Foaling year: c.1724, ±1–2 years.
  - Face: none recorded, but not checked against the Wootton and Morier portraits.
  - The size of the tiny white patch inside the LH hoof.
- [ ] **Saint Lite.**
  - The small star and the clean legs come only from photos.
  - 500 kg is an estimate; no race weights exist from 1941.
  - Owner 加藤雄策's silks (青、黄袖、赤二本輪) come only from secondary summaries.
- [ ] **Speed Symboli.**
  - Face: none, or a tiny star?
  - Which legs are white. LF, LH and RH come only from the painting and one photo.
  - The peak weight in the mid-460s is weakly sourced.
  - Did 和田共弘's silks have the red sleeve hoop?
- [ ] **Haiseiko.**
  - Race-day weights: only "500 kg+" at his debut and an unverified 516 kg.
  - The official registry wording of the silks (white, purple sleeves).
- [ ] **Maruzensky.**
  - Race weights come only from the Japanese Wikipedia table; keibabook and netkeiba have no weights for 1976–77.
  - Race-day bandaging. Front bandages are confirmed only at the retirement gallop.
- [ ] **Katsuragi Ace.**
  - Hind-leg white. No white is seen on the forelegs.
  - The 1984 Arima menko pattern matching the silks is marked 要出典 (citation needed).
- [ ] **Mr. C.B.** Which hind leg is white. LH is inferred from photos; no text names the side.
- [ ] **Symboli Rudolf.**
  - LH white height: pastern or short sock?
  - Which way the crescent (三日月) star points.
- [ ] **Sirius Symboli.**
  - Which hind leg is white: RH, medium confidence.
  - The exact star shape.
  - Whether the silks had the red sleeve hoop.
  - The registered owner: 和田共弘 or シンボリ牧場?
- [ ] **Withers height (体高)** is undocumented for all of them except Saint Lite (166 cm) and Haiseiko (171 cm). The engine uses its default for the rest.

### Horses (batch 2)
JBIS returned 403 for every batch-2 horse, so the registry colours come from netkeiba and Japanese Wikipedia.
- [ ] **Mejiro Ramonu.** Star-and-stripe shape, and the leg whites (LF pastern, LH sock) are read from photos that mostly show her left side.
- [ ] **Gold City.** Stripe width; all four whites are set to fetlock height from one small photo (四白).
- [ ] **Inari One.** The LH coronet white comes from one magazine line; face unseen front-on; do the hood's eye pieces include blinker cups?
- [ ] **Tamamo Cross.** Greyness (0.35 in spring 1988 → 0.5 by the Arima); mane and tail colours from photos; is there a face marking under the hood?
- [ ] **Bamboo Memory.** Blaze width and the four white heights come from two small photos; silks wording read from an image.
- [ ] **Mejiro Ardan.** Star and both hind pasterns come from one race photo of his left side.
- [ ] **Oguri Cap.** Greyness and mane colour from photos; no face marking visible under the grey.
- [ ] **Sakura Chiyono O.** No face or leg markings found; was the thick white noseband in the Derby photo a shadow roll?

### Horses (batch 3)
- [ ] **Super Creek.** Star from photos (a small snip?); one white hind pastern, but which hind is a guess (LH); silks colours from a silks image.
- [ ] **Yaeno Muteki.** Four white socks and the star-stripe-snip from photos (the hind whites look a little higher).
- [ ] **Daiichi Ruby.** No face or leg white in her one photo (right side only); owner kanji 春雄 or 晴雄; silks from an image.
- [ ] **Daitaku Helios.** No photo shows his lower legs clearly; do the hood's eye pieces include blinker cups?
- [ ] **Ikuno Dictus.** The LF coronet comes from one low-resolution photo; does the stripe end in a snip?
- [ ] **Ines Fujin.** The star (en.wikipedia only) was always under his hood; the LF coronet comes from photo angles.
- [ ] **Mejiro McQueen.** Greyness, dapple strength, and mane and tail colours from photos (greying from near black in 1990 to a dappled mid-dark grey by 1993).
- [ ] **Mejiro Palmer.** Star-stripe from photos; the LH white is confirmed in text, but its height and the RH are judgement calls.

### Horses (batch 4)
- [ ] **Mejiro Ryan.** Star or narrow stripe? The leg whites come from one side-on photo (left and right may be swapped).
- [ ] **K.S.Miracle.** Face hidden by his hood; gear and silks from two photos of one race.
- [ ] **Nice Nature.** Did he race in the green-and-red hood after mid-1994, or only parade in it?
- [ ] **Tokai Teio.** Exact star-stripe shape; the RF white is the weakest call.
- [ ] **Twin Turbo.** Face hidden by the hood; blinkers in 1994–96 unchecked; the hood was white in 1991, blue in 1993 (the data uses blue).
- [ ] **Yamanin Zephyr.** One white fore foot: RF or LF? Bandages are from the 1993 Yasuda Kinen only.
- [ ] **Matikanetannhauser.** Which hind is white (one 2012 photo).
- [ ] **Mihono Bourbon.** Height of the RH white (registry 右後一白).

### Locations
- [ ] **Tokyo.** Stand colours, Mt Fuji's bearing, and the infield pond's position.
- [ ] **Nakayama.** Stand colours and length; the backdrop.
- [ ] **Kyoto.** Stand colours and floors (6 or 7); the lake's size and distance (±15 m from the aerial); the big screen really stands on the lake's near shore; needs kits for Benten island, fountains, 淀の坂 and the poplar wall.
- [ ] **Hanshin.** Stand colours and size; the straight's profile (±0.2 m); needs a cherry-tree row along the outer rail.
- [ ] **Oi.** Floodlight count, height and colour (no published spec); the screen's real size and position; skyline bearings; needs kits for the lit Tokyo Monorail, the L-WING roof and the left-handed course.
- [ ] **Chukyo.** Course widths (secondary source); stand size and colours; only the 2.0 m climb 340–240 m out is sourced in the straight's profile; needs kits for the Pegasus membrane-fin roof and Twin Hat.

### Source access (affects every batch)
- JBIS (jbis.or.jp) returns 403 to WebFetch. Read it through Playwright.
- netkeiba and JRA-VAN come back garbled through WebFetch (Shift_JIS / EUC-JP). Read them through Playwright.
- netkeiba hides 馬体重 for older races. keibabook race pages show it from 1982 onward.
