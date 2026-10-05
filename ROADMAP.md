# Roadmap

> **Status (4 Oct 2026).** The roster is complete: **all 152 horses** are built (the last three, Almond Eye, Curren
> Bouquetd'or and Loves Only You, joined in batch 18), and **Oi on Tokyo Daishoten day** is the fifth seasonal variant
> (23 locations). The build and running-style controls, `data/quirks.js` (318 verified quirks on 122 horses) and the
> anatomy review were merged into `main` on 3 Oct (PR #1). **Next is the owner's call:** tick fix options in
> [research/anatomy-review/ANATOMY-TODO.md](research/anatomy-review/ANATOMY-TODO.md) (124 verified items: 13 high,
> 45 medium, 66 low severity, plus 1 disputed); only the ticked fixes get implemented.

Where the low-poly horse goes next, in build order. Each **batch** adds the next horses in generation
order, a location or two, and one engine item. Horses come from the official character list at
<https://umamusume.jp/character/>; every entry models the **real racehorse** behind a character.

## Status after batch 19 (October 2026)

| Area | Done |
|---|---|
| Build and running style (B18–19) | **16 build controls** (`conf`): the earlier neck, crest, head, profile and ears (ear size now 0.7–1.4), plus **ear set** (close/wide) and **ear tilt** (pricked … lop), **chest depth** and **chest width** (the forelegs stand wider on a broad chest), **barrel**, **hindquarters** (wider quarters, thicker thighs, hind legs set wider), **withers**, **tuck-up**, **bone** (cannons and fetlocks), **hooves** (bigger feet grow back from the toe, so the IK still pins the toe) and **tail set**. The barrel's cross-sections are built once per horse and shared with the saddle, rug and rider, so tack follows the body. **9 running-style controls** (`run`): **head carriage** (very low and stretched like Oguri Cap … high-headed), **neck action**, **stride** (pitch ピッチ走法 … stride ストライド走法: a longer stride at the same speed and the same stance length, so it is extra airtime and the hooves stay planted), **knee action**, **hind drive**, **low posture**, **roll**, **ears** and **tail at speed**. The style shows a little at the walk and fully at racing speed. Measured: stance slip 0.00 mm at walk, trot, canter, gallop and race with every control at its extremes. Researched quirks live in `data/quirks.js` (build default < quirks < the horse's own `conf` / `run` < the panel) and show on the horse card as **Known for**. |
| Anatomy review (B18–19) | Eight critic agents (proportions, head and neck, trunk, forelimb, hindlimb, slow gaits, fast gaits, secondary motion and rider) reviewed the model from near-orthographic contact sheets and joint measurements; two skeptics checked every finding (is it true of real horses? is it really in the model?) and gap critics looked for what the first round missed. 265 agents in all. The result is a to-do list with fix options for the owner to choose from: **[research/anatomy-review/ANATOMY-TODO.md](research/anatomy-review/ANATOMY-TODO.md)**: 124 verified items (13 high, 45 medium, 66 low severity) and 1 disputed; the skeptics refuted none outright. Nothing in it has been fixed yet. |
| Engine | Horse profiles drive the whole model: coat, markings, size and hair length. A gait table holds the gallop (left or right lead), a new **walk** and a standing **graze** pose. Stride counts are recomputed for each horse and location, so the loop stays seamless and planted hooves have 0.00 mm slip (measured). Includes a location system, background horses, the side panel and the URL hash. |
| Hood patterns (B17) | A hood can carry a **pattern** over the crown in a second colour (`hoodColors.pattern`, `accent`): `stripes` running poll to nose, `hoops` round the head, `checks` (市松), a `centre` stripe, a `band` across the brow with bars round the eye holes, or an `x` across the face. Painted per face on the hood's own rows, like the silks. Eleven horses use one: Nice Nature, Durandal and Win Variation (stripes), Wonder Acute (stripes), Hishi Miracle (hoops), Furioso (checks), Kawakami Princess (centre), Air Messiah and Hokko Tarumae (band), Believe and Verxina (x). The fourth seasonal variant is **Nakayama for the Satsuki Sho** (`nakayama-satsuki`): a pale, hazy mid-April sky, fresh overseeded turf, cherries already in leaf, the classics' cloth with yellow numbers and a 0.8 crowd. Silks: hoops on the body now carry on round the sleeves when the notation names no sleeves (Kitasan Black's 「黒、茶三本輪」). |
| Race-day crowds (B16) | Racecourses now have their **crowd** (`crowd` 0..1, 0.4 by default): people pressed two deep against the outer rail, scattered across the apron, and two rows to every terrace step of the stand, all along its length. Each figure is a jacket in one of a few clothing colours over dark trousers, and a head, about 32 triangles, drawn as two instanced meshes. Derby day is the full crowd (`crowd: 1`); the wet Takarazuka Kinen a thin one. A **tail ribbon** (`gear.tailRibbon`), the red bow tied in the top of a kicker's tail, is drawn for Gold Ship. The third seasonal variant is **Kyoto for the Tenno Sho (Spring)** (`kyoto-tenno-spring`): a high Golden Week sun, the overseeded turf at its freshest, new-leaf trees round the lake (no blossom, no autumn colour) and a 0.6 crowd. |
| Reins and a quieter rider (B15) | **Reins** run from the bit rings to the jockey's hands (`gear.reins` colour, else the bridle's). Each end rides on its own node, a marker on the head and one at the rider's hands, and the strap between is skinned to both with the weight sliding along it, so it stays taut between them however the head nods (one extra draw call per ridden horse). The **rider now hangs from a pivot at the irons** and turns against about 70% of the back's pitch, so the upper body stays quieter over a horse that rocks under it. Each **arm** is its own node: the hands give and take along the rein as the head nods out and back (up to 6 cm about a slow running mean, so the rein keeps its length within about 3 cm at racing speed), and in race mode the riders **push** in the home straight, the hands pumping once a stride until past the post. **Puddles** (`wet.puddles`) lie on the dirt course and the apron of a soaked racecourse: flat glossy patches the colour of the grey sky. The second seasonal variant is **Tokyo on Derby day** (`tokyo-derby`): a bright, hazy early-summer afternoon with a higher, whiter sun, the overseeded turf at its greenest, trees in fresh leaf, Fuji faint with snow only near the top, and the Derby's white saddle cloths with black text and gold edging. Changing location now rebuilds the hero whenever its tack changes (a Derby cloth to a G1 cloth, not only cloth to no cloth). |
| Rain and seasonal variants (B14) | **Location variants:** `variantOf: 'hanshin'` takes an existing entry and merges the variant's fields over it (objects key by key; arrays, colours and `null` replace), so a season or a race day reuses the course, stand and backdrop and changes only the light, colours and weather. **Rain** (`rain` { intensity, slantDeg }): fine streaks in a box that rides with the horse, a whole number of box lengths per scenery period and box heights per loop, so the loop stays seamless. Each streak is the path its drop sweeps in a 35 ms exposure as seen from the camera, so it falls nearly straight at a walk and rakes back past the horse at racing speed; wind slants it across the course. On a soaked course the hooves throw dark clods instead of dust. The first variant is **Hanshin for the Takarazuka Kinen in the rainy season** (梅雨): a flat grey overcast with soft, almost shadowless light, fog that swallows the Rokko hills, deep-green summer noshiba, dark wet dirt and the standard G1 cloth. Silks: hoops named after the sleeves now run across the sleeves too (「青、赤袖、白三本輪」). |
| Race mode (B13) | On a racecourse the **Field** button runs a race: the hero against the **17 roster racehorses foaled closest to it**, each in its own coat, gear, silks and cap, numbered 1–18 round the hero's own number. A race is a ~52 s story told in metres behind a virtual leader. The field breaks from an 18-stall **starting gate** (it stays on the ground and slides away behind), settles into **running-style order** (逃げ in front, 先行, 差し, 追込 at the back, with a 30% chance of a horse's secondary style) in lanes off the inner rail, then fans out across the course off the home turn while the finishing order is decided (front-runners fade, closers kick; seeded per race). The leader passes the **winning post** (ゴール板) and the next race starts. Every runner's gait phase follows the ground it covers, so hooves stay planted while it gains or drops back, and it turns into its sideways drift. The camera side is kept clear: the hero sits just outside its row and comes wide in the straight (a front-runner keeps its line). A line under the hint shows the hero's place and the leader, then the result. The field shows at the race and gallop gaits (the story slows with the gait); the hash stores it as `race=1`. The gate is JRA's JSS40 as photographed: white posts, grey padded stalls, a green truss with yellow number plates (stall 1 on the inner rail) and the course's name on a white sign band, in two sections of 10 and 8. 18 horses with riders draw in about 115 calls. |
| Limb ranges (B13) | The **front legs** looked wrong at speed: the swing path was a cubic Hermite carrying the ground's speed at both ends, which overshoots by 0.1 × the stride, so at racing speed the forefoot was flung half a metre past its landing spot and the IK pushed the elbow out in front of the chest (humerus +49° forward) or up level with the point of shoulder. The swing now spends the ground's speed in short windows at each end (`flick` after lift-off, `retract` before landing, per gait), and in the swing the **humerus keeps to −76°…+2°** and the **femur to 0°…76°**: past a limit the bone stops and the knee or hock bends to reach instead (the same pose at the limit, so nothing jumps). The race gait's fore lift is a little lower (forearm at most 65° forward). Stance slip is unchanged at 0.00 mm. |
| Jockey (B12) | A low-poly **jockey in the owner's silks** rides on racecourses: crouched over the withers in short irons, hands at the crest, white breeches and black boots, goggles and a cap in the colour of the gate bracket (枠; an 18-runner field is assumed). The silks are **parsed from the JRA notation** in `silks.desc` (「黄、青一本輪、袖青」): the body colour, the body pattern (hoops 一本輪/二本輪/三本輪, band 一文字, chevrons 山形, sash 襷, cross-sash 十字襷, stripes 縦縞, checks 元禄/格子, sawtooth yoke 鋸歯形, spots 玉霰/銭形, stars 星散 (B13), diamonds 菱, ring 蛇目) and the sleeves (X袖, 袖X一本輪, 袖X縦縞, 段). Colour words snap to the researched `silks.colors`. Patterns are painted per face on a subdivided torso, so they need no texture. On the training hill a work rider in a dark vest and a blue jockey's helmet rides the hero and the work partner. The rider is carried by the spine bone and merged into the horse's single skinned mesh. A **Rider** toggle in the panel. |
| Snow (B11) | `builder: 'snow'`: a trampled track through fetlock-deep snow with sunlit and blue-shaded drifts, mud and hay where the horses dig, half-buried board fences, bare birches (twig crowns), firs with snow on their tiers, barns with snow on the roofs (`buildings`), and snow caps on the far ranges above `snowline`. **Winter rugs** (`rug`, 馬着): a draped blanket with a binding and belly straps, on the hero and the turned-out horses. **Breath** (`breath`): a puff from the nostrils at each exhale, once per stride at a canter or gallop (locomotor-respiratory coupling) and about every 2.5 s at a walk. **Falling snow** (`snow.falling`) is supported but the researched morning is clear. Cloths (rug, saddle cloth) are now **draped**: each cross-section of the barrel is clipped to the cloth's band and resampled, so hems run straight instead of zig-zagging across faces. |
| Slopes (B10) | **Sloped straights**: a height along the direction of travel. `slope` (a training hill) is a climb that never ends: each period of the strip rises by the same amount, the copies are drawn one rise higher each and the world sinks as it scrolls, with the real course's sections squeezed into one period. A racecourse's `facts.straightProfile` becomes a closed bump: the home straight's profile over 70% of the period, easing back down over the rest, so Tokyo, Nakayama, Hanshin, Chukyo and Morioka now have their final hills. The grade is smoothed so the pitch never jumps; the horse (and any companion) pitches with the ground, and the hooves stay on it (toes 1–3 mm above the slope, about 5 mm of slip on a 4.5% grade). **Training hill** builder: a wood-chip course between rails, churned lanes, verges, banks and woods, timing posts, light poles and an observation tower; training saddle cloths carry the horse's name and no number (`saddleCloth.numbered: false`). |
| Rigid-skin merge (B10, ahead of B11) | Each horse is now one SkinnedMesh for everything but its eyes and saddle cloth: every rigid part (limbs, hooves, head, ears, mane blades, tail, gear) is baked in and weighted 100% to its own node, and the nodes keep animating as before. About 60 draw calls per horse became 3; the paddock's 18 horses draw in about 100 calls for the whole scene. |
| Hooves (B10) | Fore hooves are rounder and wider than the hind ones; racehorses carry aluminium racing plates, a silver U on the sole that shows when the foot flips up. |
| Beach (B9) | `builder: 'beach'`: the sea on one side of the horse (`sea.waterlineZ`), a foam line, a band of wet sand, dry sand with wind ripples rising to grassy dunes and a black-pine windbreak; driftwood, rocks and tetrapods as props. The surf moves: three waves a loop rush up the wet sand as foam sheets with bright ragged lips and drain back, and breaker lines roll in further out, a whole number of times per loop so it stays seamless. The biggest waves wash round the hooves. **Kick-up variants** per hoof and surface: dust off dry sand, small dark clods off wet sand, white splashes when the swash is under the hoof. **Hoof prints** (`prints: true`): each hoof's last 14 touchdowns, carried back with the ground and fading, water-filled so they catch the sky. |
| Path mode (B8) | `path` { straightM, radiusM, laneWidthM, dir }: the horse walks a closed stadium-shaped ring instead of a straight. The location is still authored as a straight strip (x along the path, z across it) and bent round the ring at build time: ground rows, rails, terraces and trees follow the curve, boards stretch on the outside of the bends, and items flagged `world` stand in ring coordinates (the centre lawn, the screen, buildings). The hero stays at the origin while the ring turns under it, with the sky, far scenery and sun turning too. Planted hooves stay fixed in the ring through the bends: the stance toe is carried through the path frame at touchdown, and the limb tilts sideways so the toe, not just the fetlock, lands on its spot (worst slip on the paddock's 11.4 m bends: 6 mm at the walk, 2 mm at the canter; 0.00 mm on the straights). The rest of the field walks the ring in number order (馬番順) with the location's saddle cloth and their own numbers. |
| Conformation (B6–B7) | Per-horse `conf` { neck, crest, head, profile, ears }: the neck stretches along its own axis (bones, mane, poll and head follow), the crest rises in the middle of the neck, the head scales about the poll with everything mounted on it. **B7:** `profile` bends the top line of the face from dished (−1, the Arabian face: Darley Arabian) through straight to Roman (+1, the Barb's ram head: Godolphin Barb), and the hood and bridle follow it; `ears` scales the ears. A gentle default comes from `size.build`. Every horse's neck is 10% longer (`NECK_BASE`), closer to a real Thoroughbred's. Neck, Crest, Head, Profile and Ears sliders in the panel. |
| Race tack (B5) | On racecourses: a **saddle cloth** (ゼッケン) in the colours of the location's signature race (`saddleCloth`: JRA G1 紫紺 with white text, the classics with yellow text, NAR graded races as at Oi) with the horse's katakana name and its number in its signature win (`saddleNumber`), over a black racing saddle on a dark pad, a cream girth and black overgirth, irons run up. Cloth and saddle are skinned to the body's own skeleton, so they stay glued to the back. |
| Trot and canter (B5, ahead of B6) | A two-beat diagonal **trot** (2.6 m strides at 0.72 s, diagonal pairs landing together, a steady head) and a three-beat **canter** with a lead (3.0 m at 0.6 s, the diagonal pair together, a rocking pitch). Both measured at 0.00 mm stance slip. |
| Grazing (B5) | The grazing pose now reaches the grass (muzzle ~8 cm off the ground, measured) and the mane falls to one side. |
| Gear (B4) | Drawn from each horse's `gear`: a **hood (メンコ)** shell with eye holes, coloured trim and ear covers that move with the ears (`hoodColors`; `ears: false` for a hood with bare ears; since B7 its lower edge and trim follow the head's own rows, so they run straight down the cheek), **blinker** cups, a sheepskin **shadow roll**, the **bit-lifter (ハミ吊り)**, a **bridle** (headpiece, browband, noseband, cheekpieces, bit rings; `bridle`, `browband`, `noseband` colours), a **poll pompom** and **leg bandages**. All head gear is merged into one mesh. A Gear toggle in the panel. |
| Night racing (B4) | `time.night`: floodlights become the key and fill light (`floodlights` colour, intensity), a dark sky, lit windows in the skyline, glowing screen and stand glass, floodlight masts with glowing lamp banks on both sides, light HUD text. `dirtOnly`: one dirt course with the infield inside its rail. |
| Race gallop (B3) | A **race** gait at racing speed (~16 m/s): 7 m strides at 0.43 s, duty factor 0.2, a long suspension with all four legs gathered under the body. The body runs lower with more bound and lumbosacral flexion, 18° of scapular swing, and the hock opens up to 40° past rest at push-off (`hockPush`) so the hoof stays planted far behind the hip. Racecourses use it by default; the bar has Walk / Gallop / Race. Stance slip is still 0.00 mm for every horse size. |
| Forelimbs (B2) | Deeper, broader brisket so the elbow and forearm tuck into the chest instead of hanging off a rounded barrel; a broad flat shoulder blade, a triceps mass and a muscular forearm top; at the gallop the forefoot flips up into a hook behind the knee (deeper fetlock curl, higher fore lift). |
| Colour | All 8 JBIS registry coats (鹿毛 … 白毛), pickers for coat, mane/tail and lower legs, 10 face markings, white height per leg, and Reset. **Greys (B2):** greyness slider with a slow-greying curve, **dapples** (cellular noise painted on 16× subdivided coplanar faces, strongest at mid grey, with their own slider), lighter faces and dark lower legs on young greys, and a separate `coat.tail` colour. |
| Parts | Mane and tail length, height (uniform scale) and weight (bulk of trunk, neck and upper limbs). |
| Horses | **152 of 152**, the whole roster, from Byerley Turk (c.1680) to Forever Young (2021). 135 carry their verified number (馬番) in their signature win (Haru Urara's is from her famous 2004 race with Yutaka Take). |
| Locations | **Hidaka stud farm** (walk, with a companion and grazing horses), **Countryside trail** (the original scene), and the JRA G1 courses **Tokyo**, **Nakayama**, **Kyoto** (infield lake), **Hanshin** (cherry blossom: `blossom` colours flowering broadleaf trees only) and **Chukyo** (B3); the NAR tracks **Oi** (B4), **Kawasaki** and **Funabashi** (B5) at night, **Urawa** at twilight and **Morioka** at night with the turf course inside the dirt (`innerTurf`, B6), **Kanazawa** in low November sun and **Saga** at night (B7); the **Tokyo Racecourse paddock** on Derby day, walked in path mode with the rest of the field (B8); a **beach at dawn** modelled on Kujukuri, the sun rising out of the Pacific behind the horse (B9); the **Ritto hill gallop** (坂路), an endless climb up the wood chips (B10); a **snowy Hidaka farm** on a clear February morning (B11); **Hanshin in the rain** for the Takarazuka Kinen, the first seasonal variant (B14). |
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
| ✅ 5 | #36–43 · 1989–90 · Nishino Flower, Rice Shower, Sakura Bakushin O, Biwa Hayahide, Narita Taishin, North Flight, Royce and Royce, Sakura Chitose O | Kawasaki (72 m screen), Funabashi (both at night) | Saddle and saddle cloth (the shadow roll came with B4's gear) |
| ✅ 6 | #44–51 · 1990–92 · Winning Ticket, Yukino Bijin, Biko Pegasus, Hishi Amazon, Narita Brian, Sakura Laurel, Samson Big, Fuji Kiseki | Urawa, Morioka (Mt Iwate, NAR's only turf course) | Trot and canter gaits (done in B5); conformation started early |
| ✅ 7 | #52–59 · 1992–94 · Genuine, Hishi Akebono, Marvelous Sunday, Mayano Top Gun, Air Groove, Bubble Gum Fellow, Shinko Windy, Matikanefukukitaru | Kanazawa (tiled-roof screen), Saga (both JpnI only in JBC years) | Head profile and ear size (conformation); cleaner hood edges |
| ✅ 8 | #60–67 · 1994–95 · Mejiro Bright, Mejiro Dober, Seeking the Pearl, Silence Suzuka, Stay Gold, Taiki Shuttle, El Condor Pasa, Grass Wonder | Tokyo Racecourse paddock (walking the parade ring) | Path mode (curved walking paths) |
| ✅ 9 | #68–75 · 1995–96 · King Halo, Phalaenopsis, Seiun Sky, Special Week, Tsurumaru Tsuyoshi, Admire Vega, Haru Urara, Meisho Doto | Beach at dawn (Kujukuri) | Sand builder, surf, splash / clods / dust variants, hoof prints |
| ✅ 10 | #76–83 · 1996–98 · Narita Top Road, T.M. Opera O, Agnes Digital, Air Shakur, Tap Dance City, Agnes Tachyon, Believe, Calstone Light O | Ritto hill gallop (坂路) | Sloped straights (and the racecourses' final hills); fore/hind hoof shapes and racing plates |
| ✅ 11 | #84–91 · 1998–99 · Dantsu Flame, Jungle Pocket, Manhattan Cafe, Durandal, Fine Motion, Hishi Miracle, No Reason, Symboli Kris S | Snowy Hokkaido field | Snow builder, winter rugs, breath, draped cloths (rigid-skin merge done early in B10) |
| ✅ 12 | #92–99 · 1999–2002 · Tanino Gimlet, Admire Groove, Neo Universe, Still in Love, Zenno Rob Roy, Sweep Tosho, Air Messiah, Cesario | — | Jockey in the owner's silks (勝負服, parsed from `silks.desc`) |
| ✅ 13 | #100–107 · 2002–04 · Daring Heart, Rhein Kraft, Fusaichi Pandora, Kawakami Princess, Aston Machan, Daiwa Scarlet, Dream Journey, Furioso | — | **Race mode** (a field of roster horses by running style, gate start, winning post); limb ranges in the swing |
| ✅ 14 | #108–115 · 2004–06 · Vodka, Casino Drive, Espoir City, Smart Falcon, Buena Vista, Nakayama Festa, Red Desire, Tosen Jordan | Hanshin in the rain (Takarazuka Kinen, 梅雨) | Location variants (`variantOf`); rain; clods off a wet course |
| ✅ 15 | #116–123 · 2006–08 · Transcend, Wonder Acute, Curren Chan, Eishin Flash, Rose Kingdom, Rulership, Victoire Pisa, Orfevre | Tokyo on Derby day | Reins; the rider steadied at the irons |
| ✅ 16 | #124–131 · 2008–10 · Win Variation, Fenomeno, Gentildonna, Gold Ship, Hokko Tarumae, Verxina, Copano Rickey, Epiphaneia | Kyoto for the Tenno Sho (Spring) | Race-day crowds on the apron and the stand; tail ribbons |
| ✅ 17 | #132–139 · 2010–13 · Logotype, Sounds of Earth, Cheval Grand, Duramente, Kitasan Black, Satono Crown, Satono Diamond, Vivlos | Nakayama for the Satsuki Sho | Hood patterns (stripes, hoops, checks, centre, band, x) |
| ✅ 18 | #140–147 · 2014–16 · Kiseki, Almond Eye, Blast Onepiece, Lucky Lilac, Chrono Genesis, Curren Bouquetd'or, Gran Alegria, Loves Only You | Oi on Tokyo Daishoten day (a low winter sun in daylight; the last races under the lights) | Smooth gait changes; **build and running-style controls**; **anatomy review** (to-do list, no fixes yet) |
| ✅ 19 | #148–152 · 2016–21 · Marche Lorraine, Daring Tact, Efforia, Titleholder, Forever Young | — | **Quirk research** over the whole roster (`data/quirks.js`) |
| 20 | Re-check the official list for new characters | — | Fixes chosen by the owner from ANATOMY-TODO.md |

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
  - ✅ Kawasaki 川崎 (B5, at night)
  - ✅ Funabashi 船橋 (B5, at night)
  - ✅ Urawa 浦和: JpnI since the 2024 dirt reform (B6, at twilight).
  - ✅ Morioka 盛岡 (B6, at night): the dirt course is outside the turf course (`innerTurf`).
- JpnI only in JBC host years: ✅ Kanazawa 金沢 (B7, November afternoon) and ✅ Saga 佐賀 (B7, at night).
- The track builder needs a **dirt-only layout** and night lighting before Oi.

### Strolling and generic locations
| Location | Status |
|---|---|
| Hidaka stud farm | ✅ |
| Countryside trail | ✅ |
| Racecourse paddock (Tokyo, B8) | ✅ |
| Beach at dawn (Kujukuri, B9) | ✅ |
| Training-centre hill (Ritto 坂路, B10) | ✅ |
| Snowy field (Hidaka in February, B11) | ✅ |

Each strolling location gets 1–3 **background horses**: generic coats, either walking beside the hero or grazing in a field.

### Seasonal variants (from B14)
| Variant | Status |
|---|---|
| Hanshin in the rainy season, Takarazuka Kinen (B14) | ✅ |
| Tokyo on Derby day (B15) | ✅ |
| Kyoto in spring, Tenno Sho (Spring) (B16) | ✅ |
| Nakayama in spring, Satsuki Sho (B17) | ✅ |

## Anatomical accuracy (ordered by visual payoff)
**The full, verified list is now [research/anatomy-review/ANATOMY-TODO.md](research/anatomy-review/ANATOMY-TODO.md)**: every
finding with what the model does, what a real horse does (with references), where it lives in the code and 1–3 fix
options to choose from. The reference material it was made from (contact sheets of every gait, joint measurements)
is in `research/anatomy-review/`; re-render it after any anatomy change and run the review again. The older list below
is kept for history.

1. ✅ **Race-speed gallop** (B3; the old gallop stays as the "Gallop" button). The old gallop has 2.6 m strides at 0.42 s, about 6 m/s, which is a canter pace. A racing Thoroughbred runs about 16–17 m/s:
   - stride 6.5–7.5 m, about 2.3 strides/s;
   - duty factor about 0.2–0.25 per limb;
   - longer suspension;
   - more scapular swing and more lumbosacral flexion.

   The legs need more reach (lower body, about 18° scapular swing). Race tracks switch to this gait.
2. **Lead changes.** The lead is already set per location (the outside lead on the home straight). Animate flying changes in race mode.
3. ~~Trot and canter~~ (done in B5); blended transitions between gaits are still to do.
4. **Conformation parameters** per horse (neck length, crest and head size done in B6; head profile and ear size in B7; the rest to do):
   - neck length and crest (Godolphin's high crest);
   - head profile (straight, dished, Roman);
   - ear size;
   - croup slope;
   - pastern angle.
5. ~~**Hooves.** Front hooves rounder and larger than hind; aluminium racing plates.~~ (done in B10)
6. **Muscle landmarks**: shoulder, forearm, gaskin, point of hip, point of buttock. Use the girth and cannon measurements when the data has them (Haiseiko: 188 cm chest, 21.5 cm cannon).
7. **Breathing locked to the stride** at the gallop (1:1 nostril flare and flank). The breath puffs in cold air follow it since B11; the flare and flank movement are still to do.
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

## Part customization
**Done in B18–19:** ear set and tilt, chest depth and width, barrel, hindquarters, withers, tuck-up, bone, hooves, tail
set, and the nine running-style controls (see the status table). **Next**, in order:
- Body and leg length (`bodyLength`, `legLength`): they move the leg roots, so the gait's stance centres must move
  with them.
- Croup slope and pastern angle (the IK reads the pastern angle, so it has to be per horse).
- Quirks that fit no control yet: they are listed in `research/quirks/` under "candidates for new parameters"
  (for example running with the tongue out, head tossing, drifting off a straight line).
- Mane styles (pulled, long, braided) and forelock.

The earlier plan, for history:
1. ~~Gear~~ (done in B4). It was recorded in the data as:
   - hood (メンコ): Haiseiko, Katsuragi Ace;
   - shadow roll: Narita Brian, B6;
   - blinkers;
   - bit-lifter (ハミ吊り): Mr. C.B.;
   - pompom: Maruzensky.
2. Bridle, reins, saddle, saddle cloth with a race number, leg bandages.
3. Mane styles (pulled, long, braided), forelock, tail set.
4. Jockey wearing the owner's silks (勝負服).

## Race mode
- ~~A field of horses whose positions follow their real running styles (逃げ 先行 差し 追込, already in the data).~~ Done in B13 (the Field button).
- ~~Gate start.~~ Done in B13; the gate stays on the ground as the field breaks.
- ~~Elevation from `facts.straightProfile`.~~ The final hills came in B10; the field rides them too.
- Real course geometry: the turns (path mode on a racecourse, with the stands only on the home straight).
- Lead changes: a flying change off the home turn, for the hero and the field.
- The race is told on one long straight; the clock is a story, not the real race distance.
- Prerequisite: the rigid-skin merge (done in B10).

## Performance
- ~~**Rigid-skin merge.**~~ Done in B10: each horse is one skinned mesh plus its eyes and saddle cloth (3 draw calls, was about 60). Grazer copies could still share one skeleton.
- Props are already static instanced strips that only slide each frame, so they cost no per-frame CPU.

## Research workflow (one agent per horse / per location)
- **No personal information in requests.** Agents must never put the user's email (or anything personal) in a request, URL or header; a client that needs a User-Agent uses a generic one (`low-poly-horse-research/1.0`). Both templates say so since B15.
- **Run the agents without Playwright.** The browser is shared, so parallel agents navigate each other's pages; they read photos by calling WebFetch on the image URL instead.
- **Agent templates:**
  - `.claude/agents/horse-researcher.md` returns one `HORSES` entry.
  - `.claude/agents/location-researcher.md` returns one `LOCATIONS` entry.
  - Both run on Sonnet. In the smoke tests a horse took about 1 minute and a track about 35 seconds.
- **Quirks** (since B19): the horse-researcher template now also returns documented build and running-style quirks as
  `conf`, `run` and `knownFor` (every value with a source). For the whole roster at once, the **quirk-research
  workflow** splits the 152 horses into 12 groups, one researcher each, then a skeptic re-reads every cited page; what
  survives is written to `data/quirks.js`, with the evidence in `research/quirks/`.
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

### Horses (batch 5)
- [ ] **Nishino Flower.** Face and legs from left-side photos only.
- [ ] **Rice Shower.** Silks: race photos show blue / brown sash / red sleeves, but the registry text reads 青、赤襷、茶袖; gear changed race by race (the 1993 set is used).
- [ ] **Sakura Bakushin O.** Leg whites (LF coronet, LH pastern) from small photos; side inferred.
- [ ] **Biwa Hayahide.** Greyness, dapples, head lightness and leg whites from photos; the current registry silks image (white, red diamonds) disagrees with the 1993–94 photos (black, pink chevron).
- [ ] **Narita Taishin.** Which hind is white (one paddock photo).
- [ ] **North Flight.** Silks wording read from an image.
- [ ] **Royce and Royce.** Face hidden by his hood; silks from a small image.
- [ ] **Sakura Chitose O.** 黒鹿毛 (netkeiba) or 鹿毛 (Wikipedia)? JBIS would settle it.

### Horses (batch 6)
- [ ] **Winning Ticket.** Face and legs from one race photo and two stud photos.
- [ ] **Yukino Bijin.** Blaze shape and three white socks from photos; signature race for the cloth is the 1993 Oaks (2nd).
- [ ] **Biko Pegasus.** No white seen anywhere; bridle colour from photos.
- [ ] **Hishi Amazon.** Blue shade of the silks (the Commons image uses pure blue).
- [ ] **Narita Brian.** Face shape (星額刺毛鼻梁鼻白) as drawn is approximate.
- [ ] **Sakura Laurel.** Hind white heights (fetlock or pastern) from photos.
- [ ] **Samson Big.** No photo of the Kisaragi Sho itself; gear inferred from 1993–94 paddock shots.
- [ ] **Fuji Kiseki.** RH white from low-res photos.
- [ ] **Saint Lite.** His 1941 Derby number is not recorded anywhere (netkeiba shows 0), so his cloth shows only his name.

### Horses (batch 7)
- [ ] **Genuine.** Snip and bare legs from stud photos; a lavender hood seen once in a paddock photo (left off).
- [ ] **Hishi Akebono.** Star and leg white from photos (LH coronet is a low-confidence read); conf from photos; the JRA archive returned 403, so his number comes from ja.wikipedia and en.netkeiba.
- [ ] **Marvelous Sunday.** Face unseen under the red knitted hood; hind white heights from two photos; dark mane from photos.
- [ ] **Mayano Top Gun.** No face type for a stripe that runs over both lips, so `blaze`; leg heights mapped from the registry wording.
- [ ] **Air Groove.** Face from one race photo; legs always wrapped; her yellow and blue mane bobbles have no engine field yet.
- [ ] **Bubble Gum Fellow.** Face, legs and gear from photos; the blue shadow roll is certain only for 1995 to early 1996.
- [ ] **Shinko Windy.** A black blinker hood with bare ears, read from one finish photo; star from retirement photos.
- [ ] **Matikanefukukitaru.** Fore legs bandaged in every photo; LH white from one blurred photo.
- [ ] **Darley Arabian / Godolphin Barb.** `conf.profile` follows the breed type (Arabian dish, Barb convex face); the portraits differ.

### Horses (batch 8)
- [ ] **Mejiro Bright.** Star from one photo; legs from photos; the 1998 Takarazuka weight is missing.
- [ ] **Mejiro Dober.** No race photo of her lower legs; bandages seen only at her retirement ceremony.
- [ ] **Seeking the Pearl.** No frontal photo (face); her silks changed pattern between 1997 and 1998; the netkeiba photo pages show another horse.
- [ ] **Silence Suzuka.** The hood covers the upper face; the white left hind may be a bandage rather than a sock.
- [ ] **Stay Gold.** Face and legs from small photos; the navy hood is from the 1999 Arima, not confirmed for the Hong Kong Vase; his blinker was on the left eye only (drawn as a pair).
- [ ] **Taiki Shuttle.** LH white placed from two race photos; the netkeiba photos show another horse.
- [ ] **El Condor Pasa.** netkeiba and JRA-VAN link a blue-and-white silks image, but race photos show yellow, blue and red; no photo of his 1997–98 races.
- [ ] **Grass Wonder.** Hind coronets hidden by grass in the stud photos; gear from the 1999 Arima only.

### Horses (batch 9)
- [ ] **King Halo.** Face hidden by his hood; one white hind lower leg in a small photo (marking or bandage); the white polka dots on his hood are not drawn.
- [ ] **Phalaenopsis.** Coat 黒鹿毛 (netkeiba) vs 鹿毛 (ja.wikipedia); the browband hides the forehead.
- [ ] **Seiun Sky.** Greyness from photos; the silks' hoop colour (teal in photos, blue or purple in the sources).
- [ ] **Special Week.** Face and the white hind pastern from small race photos (the side is a guess).
- [ ] **Tsurumaru Tsuyoshi.** One racing photo; no frontal view of the face.
- [ ] **Admire Vega.** One leg photo (retirement ceremony): the white hind's side is a best guess; the pompom and fore bandages seen there are left off.
- [ ] **Haru Urara.** Her face is always under the hood; the hood's printed pattern is drawn plain; jockey silks, not an owner's.
- [ ] **Meisho Doto.** Foreleg whites from recent farm photos (bandaged in races).
- [ ] **netkeiba photo pages.** For most horses since batch 8 the show_photo pages show a different horse; agents now check the coat first.

### Horses (batch 10)
- [ ] **Narita Top Road.** Face and foreleg whites from two race photos; whether the stripe reaches the muzzle.
- [ ] **T.M. Opera O.** The white fore is read as RF from the JRA portrait (could be LF); the coat's tone rests on one quote.
- [ ] **Agnes Digital.** Which hind is fetlock-high and which a sock, read from one paddock stride; the white hood is paddock-only.
- [ ] **Air Shakur.** Bandaged above the pasterns in every photo; the white hind may be RH.
- [ ] **Tap Dance City.** Coat tone from photos; silks hexes sampled from race photos.
- [ ] **Agnes Tachyon.** The height of the white on both hinds is estimated; a tiny star may hide under the forelock.
- [ ] **Believe.** The hood's red X strap is drawn as plain trim; the hood is not confirmed for the 2002 Sprinters S.
- [ ] **Calstone Light O.** Legs from one paddock photo (hinds hidden); left and right fore judged from which crosses in front.

### Horses (batch 11)
- [ ] **Dantsu Flame.** Both hinds white; which is which judged from the gait; the hood hides the top of the blaze.
- [ ] **Jungle Pocket.** Legs from one side photo; a small hind coronet cannot be ruled out.
- [ ] **Manhattan Cafe.** Bandaged in every race; the bandages' black stripes and his tail-root tuft are not drawn.
- [ ] **Durandal.** Leg sides could be mirrored; the black stripes on his yellow hood are not drawn.
- [ ] **Fine Motion.** Leg whites from one paddock photo under wraps; silks from the netkeiba graphic.
- [ ] **Hishi Miracle.** Greyness from photos; the white hind pastern placed as LH.
- [ ] **No Reason.** Only two photos; a tiny fleck may be a star.
- [ ] **Symboli Kris S.** Coat tone from photos and the trainer's "black and big".

### Horses (batch 12)
- [ ] **Tanino Gimlet.** Leg whites from one 2026 photo partly hidden by plants; which hind is which is a guess.
- [ ] **Admire Groove.** The hood hides the forehead and the forelegs are always bandaged; the hind whites may be bandages; the "RK" monogram on her hood is not drawn.
- [ ] **Neo Universe.** Face from one stud photo; hind whites from one paddock photo.
- [ ] **Still in Love.** Star from one photo; darker mane from photos.
- [ ] **Zenno Rob Roy.** Registry gives 左後一白; the height is read from photos.
- [ ] **Sweep Tosho.** Blaze or long star-stripe; her JRA silks wording is reconstructed from photos.
- [ ] **Air Messiah.** The hood hides the forehead in every photo.
- [ ] **Cesario.** Legs bandaged in every photo, so her natural markings are unknown.

### Horses (batch 13)
- [ ] **Daring Heart.** The hood covers the forehead in every photo; the thin nose line may be hood or noseband trim; bandages vary by race.
- [ ] **Rhein Kraft.** The white hind (RH over LH) is read from how the legs overlap in two photos; a star may hide under the paddock hood.
- [ ] **Fusaichi Pandora.** The face comes from one farm photo that may not be her; her hood hides it in every race photo.
- [ ] **Kawakami Princess.** No source gives markings; the hood covers the forehead; by 2007 the hood had turquoise ear covers.
- [ ] **Aston Machan.** Face from one photo; bandages hid her legs in every photo.
- [ ] **Daiwa Scarlet.** Face and legs from photos only; striped bandages hide any leg white.
- [ ] **Dream Journey.** The small star is from one photo.
- [ ] **Furioso.** These are jockey 戸崎圭太's NAR silks (the notation is built from Wikipedia's wording); his checkerboard (市松) hood is drawn plain.

### Horses (batch 14)
- [ ] **Vodka.** Raced bandaged in every photo; the white coronets on LF and LH come from the JRA Hall of Fame oil portrait and pale hooves; the near-black tone is from photos.
- [ ] **Casino Drive.** Face and leg whites from one paddock photo (the blaze may be a star-stripe-snip; LF/RH read from the stride); saddle number 1 in the Peter Pan rests on ja.wikipedia's table alone (Equibase returned 403); his silks in the US races are not checked.
- [ ] **Espoir City.** Face from photos; senko over nige is a count of his corner positions, while ja.wikipedia leans 逃げ.
- [ ] **Smart Falcon.** No text gives his silks notation: 「桃、黒元禄」 is read from the netkeiba colours image; the sleeves may carry a black hoop. Legs from one paddock photo.
- [ ] **Buena Vista.** The white hind pastern shows only in left-side photos (LH inferred); her paddock hood is not drawn.
- [ ] **Nakayama Festa.** Star from one photo; before late 2009 he raced in 和泉信子's silks 「白、赤星散、袖赤一本輪」.
- [ ] **Red Desire.** Face and legs from the 2009 Shuka Sho photos only (bandaged).
- [ ] **Tosen Jordan.** Leg whites from photos; the white hind may be LH rather than RH.

### Horses (batch 15)
- [ ] **Transcend.** Face and the white RF pastern from photos; these are the owner's current 水色 silks (an older 青 version existed); his number is from the 2011 JCD (3 in 2010).
- [ ] **Wonder Acute.** Face, legs and gear are not checked against any photo; 「桃、白菱山形」 is read from the Commons silks image, not an official string; the red stripe on his white hood is not drawn.
- [ ] **Curren Chan.** Greyness and the silvery tail from photos (a small star may not show on a grey); the black-and-gold hood of her 2011 Hanshin Himba S is left off.
- [ ] **Eishin Flash.** Face from side views only; he may have worn a black hood in the 2012 Japan Cup paddock.
- [ ] **Rose Kingdom.** His silks are taken from the other Sunday Racing entries (they match the photo); his paddock-only black hood is not drawn.
- [ ] **Rulership.** The face is from one small front view; legs bandaged in every photo.
- [ ] **Victoire Pisa.** The white hind is put on LH by perspective; the silks colours come from the Commons image; his Dubai World Cup number (6) is not used.
- [ ] **Orfevre.** The side of the white hind is read from perspective; the paler golden ends of his tail are not drawn; he may have raced hooded in the 2012 Tenno Sho (Spring).

### Horses (batch 16)
- [ ] **Win Variation.** No G1 win: his number is from the 2011 Aoba Sho (GII); the small star is from one stallion photo and may be scar hair; the white hind is put on RH by perspective; the black stripes on his red hood are drawn as trim.
- [ ] **Fenomeno.** The white coronet is put on RH by perspective; the silks colours are reused from the other Sunday Racing entries.
- [ ] **Gentildonna.** The star is from one presentation photo (hidden under her hood in races); the white hind is put on RH by perspective; the yellow mark on her hood is not drawn.
- [ ] **Gold Ship.** Greyness is set for 2014 (he whitened from about 0.35 to 0.7 while racing); the snip is read from pink muzzle skin; the "Gold Ship" lettering on his hood is not drawn; he raced bare-faced before December 2013.
- [ ] **Hokko Tarumae.** The stripe shows only below his hood; the leg whites are read between bandages and ankle boots; the turquoise stripes on his orange hood are drawn as trim.
- [ ] **Verxina.** Always hooded, so a star can't be ruled out; the blue X on her hood is drawn as trim only; 「水色、青鋸歯形、白袖青二本輪」 is read from the silks image, not an official text.
- [ ] **Copano Rickey.** The white hind is put on LH from three photos; 「黄、赤一本輪、黄袖」 is Wikipedia's wording (JRA's order may differ); he raced hooded (perhaps with blinkers) from 2016.
- [ ] **Epiphaneia.** The star may be a star with a short stripe; the tongue tie is not drawn.

### Horses (batch 17)
- [ ] **Logotype.** Always hooded, so a star can't be ruled out; the badge and "T" patch on his hood are not drawn.
- [ ] **Sounds of Earth.** No graded win: his number is from the 2015 Arima Kinen (2nd); the small star and the white hinds are from small photos; his later black hood (2017-18) is not drawn. Teruya Yoshida's silks are written 「黄、黒縦縞、赤袖」 here and 「黄、黒縦縞、袖赤」 in an older entry (the same silks).
- [ ] **Cheval Grand.** The blaze may be a star-stripe-snip; ja.wikipedia now lists him as a gelding (he raced entire); his paddock hood with the X is left off.
- [ ] **Duramente.** The brown hood is read from photos only; a star under it can't be ruled out.
- [ ] **Kitasan Black.** Height (170 cm) and girth (190 cm) were measured at two, before he raced; the white hind is put on LH from two photos.
- [ ] **Satono Crown.** A tiny pale fleck under the forelock may be a very small star; the sheepskin tufts on his noseband are not drawn.
- [ ] **Satono Diamond.** The text says 流星 but the photos show only a diamond-shaped star.
- [ ] **Vivlos.** The coronet/pastern split between the hinds is read from which leg overlaps the other; the white label on her hood is not drawn.

### Horses (batch 18)
- [ ] **Kiseki** (キセキ): coat.reg (JBIS 403; ja.wiki and en.netkeiba agree), coat.tone, face.type, legs.LF, legs.RF, legs.LH, legs.RH, style.secondary, size.build, size.withersCm, size.girthCm, size.cannonCm, gear.bridle, gear.bitLifter, gear.bandages, silks.desc, silks.colors.
- [ ] **Blast Onepiece** (ブラストワンピース): coat.reg (JBIS not read), coat.tone, face.type, legs.LF, legs.RF, legs.LH, legs.RH, conf.head (magnitude), style.secondary, size.build, size.withersCm, size.girthCm, size.cannonCm, gear.shadowRoll (hex from photos), gear.bridle, gear.bitLifter, silks.colors.
- [ ] **Lucky Lilac** (ラッキーライラック): coat.tone, face.type, legs.LF, legs.RF, legs.LH, legs.RH, style.secondary, size.build, size.withersCm, size.girthCm, size.cannonCm, gear.hoodColors, gear.bridle, gear.bitLifter, silks.colors.
- [ ] **Chrono Genesis** (クロノジェネシス): coat.reg (JBIS not read directly), coat.greyness, coat.tail, face.type, legs.LF, legs.RF, legs.LH, legs.RH, style.secondary, size.build, size.withersCm, size.girthCm, size.cannonCm, gear.bridle, gear.reins, gear.bitLifter, silks.colors.
- [ ] **Gran Alegria** (グランアレグリア): coat.tone, face.type, legs.LF, legs.RF, legs.LH, legs.RH, style.secondary, size.build, size.withersCm, size.girthCm, size.cannonCm, gear.bridle, gear.bitLifter, silks.colors, saddleNumber (choice of signature race).
- [ ] **Almond Eye** (アーモンドアイ): a possible snip under the small star; 先行 for her peak (2018 Japan Cup on) but 差し in the 2018 classics; hood trim colour and bridle; coat registry not read (JBIS 403).
- [ ] **Curren Bouquetd'or** (カレンブーケドール): face unknown (hooded in every usable photo); which hind is white (put on RH); the forelegs were bandaged in photos (one fore hoof looks pale); hood seen at the Shuka Sho, not checked for the Oaks.
- [ ] **Loves Only You** (ラヴズオンリーユー): the small star is from distant photos; which fore and hind are white (put on LF and LH; another leg may have a white coronet); her gear in the 2019 Oaks itself; the red-and-white bridle is drawn red, the breastplate not at all.
- [ ] **Oi on Tokyo Daishoten day**: the base Oi entry's sun bearing (-161) does not fit the course (about -20 in the OSM frame; cosmetic, as the base is lit by floodlights); whether the floodlights are on at 15:40; leafless winter trees need a new kit; the race title printed on the saddle cloth is not drawn.

### Horses (batch 19)
- [ ] **Marche Lorraine** (マルシュロレーヌ): coat.reg (JBIS not read), coat.tone, face.type, legs.LF, legs.RF, legs.LH, legs.RH, style.secondary, size.build, size.withersCm, size.girthCm, size.cannonCm, gear.hoodColors (BC photos only 480 px; one ear cover white), gear.bridle, gear.blinkers, gear.bitLifter, gear.bandages (none seen at Del Mar; bandaged at the Heian S), silks.colors.
- [ ] **Daring Tact** (デアリングタクト): coat.reg (JBIS 403; en.netkeiba says "Dark Bay"), coat.tone, face.type, legs.LF, legs.RF, legs.LH, legs.RH, style.secondary, size.build, size.withersCm, size.girthCm, size.cannonCm, gear.bridle, gear.bitLifter, silks.colors.
- [ ] **Efforia** (エフフォーリア): coat.reg (JBIS 403, from ja.wiki/netkeiba), coat.tone, face.type, legs.LF, legs.RF, legs.LH, legs.RH, style.secondary, size.build, size.withersCm (only a yearling figure, 158.0), size.girthCm (only a yearling figure, 176.5), size.cannonCm (only a yearling figure, 20.8), gear.shadowRoll, gear.bridle, gear.reins, gear.bitLifter, silks.colors.
- [ ] **Titleholder** (タイトルホルダー): coat.reg (JBIS not read), coat.tone, face.type, legs.LF, legs.RF, legs.LH, legs.RH, style.secondary, size.build, size.withersCm, size.girthCm, size.cannonCm, gear.hoodColors.ears, gear.shadowRoll, gear.blinkers, gear.bridle, gear.bitLifter, silks.desc (word order), silks.colors.
- [ ] **Forever Young** (フォーエバーヤング): coat.reg (JBIS 403), coat.tone, face.type, legs.LF, legs.RF, legs.LH, legs.RH, size.typicalKg (prep-race weight; not weighed abroad), size.build, size.withersCm, size.girthCm, size.cannonCm, gear.hoodColors (the centre pattern approximates the white face panel), gear.bridle, gear.bitLifter, gear.bandages, silks.colors.

### Hood patterns
- [ ] Not drawn: lettering (Ines Fujin's "AF", Nice Nature, Gold Ship, Copano Rickey), King Halo's polka dots, Haru Urara's Hello Kitty face, emblems (Dantsu Flame, Gentildonna, Curren Chan), Admire Groove's "RK" monogram, Twin Turbo's ringed ear covers, Wonder Acute's second (red) stripe colour. Paddock-only patterned hoods (Air Groove's band, Sweep Tosho's checks, Still in Love's cross) stay off because those horses raced bare-headed.

### Race-day crowds
- [ ] Crowd sizes per location are guesses (0.4 by default; Derby day 1, the wet Takarazuka 0.25); the figures don't move, cheer or hold umbrellas, and there are none in the paddock's stand or at the farm.

### Race mode
- [ ] The gate (JRA's JSS40: green truss, yellow number plates, white posts, grey padded stalls, two sections of 10 + 8) is drawn from Commons photos; no source gives its sizes, so the ~1.15 m stalls, ~2.9 m depth and ~4.3 m truss are read off photos against the tractor. The tractor and the starter's stand are not drawn.
- [ ] The winning post uses Tokyo's style (white pylons, the dark mirror box of the photo-finish camera, a sky-blue badge) at every course; Kyoto, Nakayama and the NAR tracks have their own frames.
- [ ] Field sizes are always 18 (smaller real fields change the bracket colours); the field is the hero's contemporaries, not a real race card.
- [ ] No turns, no flying lead changes, no whips or riders urging in the straight.

### Jockey
- [ ] The cap colour assumes an 18-runner field; a horse's real bracket (枠) in its signature race is often in the research notes and could be stored (`saddleBracket`).
- [ ] Patterns not drawn yet: the "ダイヤモンド" variants, two-colour sleeves split down the middle, and names written on the silks. Silks described only in English fall back to the first two colours.
- [ ] The rider turns against the back's pitch at the irons and the hands follow the mouth (B15), but the body still rises and falls with the back; a jockey's knees take up the bounce too. The arms slide as rigid pieces (no elbow). Reins and pushing are in (B15); the whip, rein covers and a rider for the paddock (mounting at 「とまれ」) are still to do.

### Locations
- [ ] **Tokyo.** Stand colours, Mt Fuji's bearing, and the infield pond's position.
- [ ] **Nakayama.** Stand colours and length; the backdrop.
- [ ] **Kyoto.** Stand colours and floors (6 or 7); the lake's size and distance (±15 m from the aerial); the big screen really stands on the lake's near shore; needs kits for Benten island, fountains, 淀の坂 and the poplar wall.
- [ ] **Hanshin.** Stand colours and size; the straight's profile (±0.2 m); needs a cherry-tree row along the outer rail.
- [ ] **Kawasaki / Funabashi.** Floodlight and screen details from photos; stand orientation read from aerials; the NAR saddle-cloth convention is assumed to match Oi's.
- [ ] **Oi.** Floodlight count, height and colour (no published spec); the screen's real size and position; skyline bearings; needs kits for the lit Tokyo Monorail, the L-WING roof and the left-handed course.
- [ ] **Chukyo.** Course widths (secondary source); stand size and colours; only the 2.0 m climb 340–240 m out is sourced in the straight's profile; needs kits for the Pegasus membrane-fin roof and Twin Hat.
- [ ] **Urawa.** The sun is raised from 1.5° to 8° for readable shading; floodlights and stand size from photos; skyline bearings; needs kits for the topiary and the dark slab stand roof.
- [ ] **Kanazawa.** The 2026 JBC post time is from the announced schedule; JBC Classic cloth text colour (yellow assumed; the Sprint and Ladies' used white); Hakusan's bearing; the screen and board really stand ~30 m inside the rail; needs kits for the kawara tiled roofs, topiary and the inner training track.
- [ ] **Saga.** Floodlight count and height from a photo; stand floors and colours from photos; needs kits for the red-brick stand, the infield playground and pergola.
- [ ] **Ritto hill gallop.** The course's four grade sections are squeezed into one 300 m loop; the time (22 Oct, 07:00) is chosen within the sourced hours; hedge heights, utility-pole spacing and the 200 m board spacing are read from photos and the aerial; the G1-winner training cloth's stars are not drawn; needs kits for riders in coloured helmets and vests and the 坂路 stand at the top.
- [ ] **Snowy field.** Snow depth is a compromise between the coast (15–28 cm) and the valleys; colours sampled from a Biei photo; the one Urakawa winter photo shows weathered grey fences and an unrugged horse; rug colours, buildings and trees are not sourced; larch windbreaks need a kit.
- [ ] **Beach.** The shoreline bearing (±10°) and the sun's position are computed; sand and sea colours are sampled from photos exposed for the sky; dune distance, pines and driftwood are guesses; needs a sun-glitter path on the sea and wet sand.
- [ ] **Tokyo paddock.** The ring is a stadium fitted to a 0.49 m/px aerial (the real ends are flatter); the lane width varies (2.4 m on the straights, 4–5 m at the ends); the walking direction is read from two photos; terrace rows, screen size and the stand behind are estimates; the hero keeps the number of its own signature win on the Derby cloth; needs kits for the stand's deck balconies, the lawn numbers and lettering, the Tokinominoru statue, jockeys and handlers.
- [ ] **Hanshin in the rain.** The light, sky, fog and rain strength are look values for a tsuyu overcast, not measured; turf, lawn and clod colours are read off June 2026 photos; umbrellas in the crowd are not drawn and the puddles (B15) are scattered at random; the Takarazuka Kinen runs on the inner course, whose straight is shorter than the outer course's profile used here.
- [ ] **Tokyo on Derby day.** The sun keeps the base Tokyo entry's bearing offset, but OpenStreetMap puts the straight at ~268° true, so the real Derby sun would be at +85° in the scene frame (the Japan Cup sun at +122°) and Fuji at about +66°: the base Tokyo bearings need re-deriving. Light and colours are look values from Derby-day photos; the C-course rail 6 m out is not drawn.
- [ ] **Kyoto in spring.** The sun bearing relies on the base entry's stand facing (~145° from the aerial); light and colours are look values from 2023–2025 photos; the crowd size is a guess; the flower beds by the winning post, the C-course rail and the tall hedge along the dirt course need kits.
- [ ] **Nakayama in spring.** The sun bearing keeps the base entry's offset; the elevation is the real 31° while the base raises its December sun; light and colours are look values from 2022–2025 photos; the crowd size is a guess; the magenta azalea bank inside the dirt course and the paddock flower beds need kits.
- [ ] **Morioka.** Mt Iwate really stands behind the stand (bearing ~178°) and is moved across the infield as artistic licence; floodlight count, height and colour are not published; the screen's size and the pond are read from the aerial; needs kits for the V-shaped glass atrium, the pale inner ring and the forest behind the back straight.

### Source access (affects every batch)
- JBIS (jbis.or.jp) returns 403 to WebFetch. Read it through Playwright.
- netkeiba and JRA-VAN come back garbled through WebFetch (Shift_JIS / EUC-JP). Read them through Playwright.
- netkeiba hides 馬体重 for older races. keibabook race pages show it from 1982 onward.
