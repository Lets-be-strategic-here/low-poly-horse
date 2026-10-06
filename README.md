# Low-Poly Horse

A low-poly 3D horse built with Three.js from primitive geometry. It walks or gallops in a seamless loop through real Japanese racecourses and generic places. The horse presets are the real racehorses behind the [Uma Musume](https://umamusume.jp/character/) roster, built in generation order.

**Live demo:** https://lets-be-strategic-here.github.io/low-poly-horse/

## What's in it

- **Procedural horse.** Built in code from low-segment primitives with vertex sculpting and flat shading. There are no model or texture files. A hierarchical rig covers the spine, neck, head, ears, four legs, a chained tail and a mane.
- **Real horses.** All 152 on the roster, from Byerley Turk (c.1680) to Forever Young (2021). Each one sets:
  - coat, using the JBIS registry colour (鹿毛, 黒鹿毛, 芦毛 …);
  - face and leg markings;
  - size: height at the withers and race weight;
  - running style (逃げ, 先行, 差し or 追込);
  - racing gear (hood with its pattern, blinkers, bit-lifter, bridle…), the owner's silks (worn by the jockey on racecourses, read from the JRA notation, with reins from the bit to the rider's hands), and its number in its signature win (on the saddle cloth).

  The values are researched and sourced; anything unconfirmed is listed in the horse's info card. The full build queue (152 horses) is in `data/roster.js`.
- **Customization.** Coat presets and colour pickers, greyness and dapple sliders for greys, 10 face markings, white height per leg, height, weight, mane and tail length, and a gear toggle.
  - **Build:** neck, crest, head size, head profile (dished to Roman), ear size, set and tilt (pricked to lop), chest depth and width, barrel, hindquarters, withers, tuck-up, bone, hoof size and tail set.
  - **Running style:** head carriage (Oguri Cap's famously low head to high-headed), neck action, stride vs pitch, knee action, hind drive, low posture, roll, and ears and tail at speed. It shows a little at the walk and fully at racing speed.
  - Each roster horse starts from its own researched quirks (`data/quirks.js`), listed on its card under **Known for**.
- **Locations.**
  - Tokyo, Nakayama, Kyoto, Hanshin and Chukyo racecourses; the NAR tracks Oi (white sand), Kawasaki (72 m screen), Funabashi, Morioka (turf inside the dirt) and Saga under floodlights, Urawa at twilight and Kanazawa in low November sun. On a racecourse the horse wears a saddle and a saddle cloth in that race's colours. They're built from JRA course data: left- or right-handed layout, turf and dirt courses, rails, grandstand, infield (steeplechase jumps, Kyoto's lake), the big screen, Mt Fuji beyond Tokyo's first turn, and Hanshin's cherry blossom.
  - The Tokyo Racecourse paddock on Derby day: the horse walks round the parade ring (path mode) with the rest of the field in number order, in front of the crowd.
  - A beach at dawn modelled on Kujukuri: the sun rises out of the sea behind the horse, waves rush up the wet sand and around the hooves, and hoof prints trail behind.
  - The Ritto training centre's hill gallop (坂路): an endless climb up the wood chips in a training saddle cloth.
  - A Hidaka stud farm, where the horse walks with a companion and other horses graze, and the same farm in February snow: horses in winter rugs, steaming breath, white mountains.
  - The original countryside trail.
  - Race-day crowds along the rail and up the stands, biggest on Derby day.
  - Seasonal variants of the courses: Tokyo on Derby day, Nakayama in spring for the Satsuki Sho, Kyoto in spring for the Tenno Sho, and Hanshin in the rainy season for the Takarazuka Kinen, with rain that rakes past at racing speed, a grey sky over the Rokko hills, and clods flying off the soaked turf; and Oi on Tokyo Daishoten day (29 December), an afternoon race with the low winter sun behind the field and the white sand glowing cream.
- **Race mode.** On a racecourse, **Field** runs a race against the 17 roster horses foaled closest to yours, each in its own coat, gear and silks: out of an 18-stall starting gate, into running-style order (逃げ in front, 追込 at the back) along the inner rail, then fanning out across the home straight as the closers come, past the winning post, and round again. A line at the top right shows your horse's place and the leader, then the result.
- **Gaits.**
  - Four-beat lateral walk.
  - Two-beat diagonal trot (about 3.6 m/s) and three-beat canter with a lead (about 5 m/s).
  - Transverse gallop with left or right lead; on a racecourse it takes the outside lead for the home straight.
  - Racing gallop at about 16 m/s: 7 m strides, a long suspension, a lower and longer body, push-off through the hocks. Racecourses start in it.
  - Standing graze pose for background horses.

  Leg IK keeps each hoof planted with no sliding (measured slip: 0.00 mm on the flat, under 6 mm through the paddock's 11.4 m bends and up a 4.5% hill). In the swing the upper arm and thigh keep to their real ranges and the knee and hock bend to reach instead, so the elbow never comes out in front of the chest. The ground can slope: the horse pitches with it, and the racecourses' final hills are in. The toe breaks over as the hoof lifts off.
- **Seamless loop.** All motion is a periodic function of one loop phase, scenery included. Each horse gets a whole number of strides per scenery period, so the loop is seamless at any horse size.

## Controls

- Drag to orbit, scroll to zoom. Space or ▶ plays and pauses; the slider sets speed from 0.25× to 2×.
- **Walk / Trot / Canter / Gallop / Race** switches gait. **Side, ¾, Front, Far** set camera presets; at a racecourse, Far looks across from the infield side. **Field** (racecourses) runs a race against a field of 17. **Wire** shows a wireframe.
- **Horse** opens the panel with the horse and location pickers, the horse's info card and the customization controls.
- The URL hash stores the horse, location, gait and race mode, for example `#h=symboli-rudolf&l=tokyo&g=race&race=1`.

## Files

| Path | What |
|---|---|
| `index.html` | The engine: model, rig, gaits, IK, world kits and UI |
| `data/horses.js` | Horse presets, with sources and uncertainties |
| `data/locations.js` | Locations: course facts, lighting, layout and landmarks |
| `data/roster.js` | All 152 real horses on the official list, in generation order |
| `data/quirks.js` | Researched build and running-style quirks per horse, with sources |
| `research/anatomy-review/` | The anatomy to-do list (`ANATOMY-TODO.md`: verified findings with fix options to choose from), plus the contact sheets and joint measurements it was made from |
| `research/quirks/` | The evidence behind `data/quirks.js` |
| `ROADMAP.md` | The build order (anatomy, colour, parts, every JRA G1 and NAR JpnI course, race mode), ending in a to-do checklist of every unconfirmed value |
| `research/batch1-open-questions.md` | Batch 1's open questions: the default used for each and where to check it |
| `.claude/agents/` | Research-agent templates: one agent per horse or location |

## Status

- **All 19 batches are done:** 152 of 152 horses (Byerley Turk to Forever Young), plus 23 locations: Hidaka in summer and in snow, the countryside trail, a beach at dawn, the Ritto hill gallop, the Tokyo paddock, the Tokyo, Nakayama, Kyoto, Hanshin and Chukyo racecourses, Oi, Kawasaki and Funabashi at night, Urawa at twilight, Morioka at night, Kanazawa and Saga, Tokyo on Derby day, Nakayama and Kyoto in spring, Hanshin in the rain, and Oi on Tokyo Daishoten day.
- **Batch 2 added** dappled grey coats (Oguri Cap, Tamamo Cross), cherry blossom at Hanshin, Kyoto's infield lake, and a reworked chest and forelimbs.
- **Batch 3 added** a racing gallop at about 16 m/s (7 m strides), the default on racecourses.
- **Batch 4 added** racing gear (hoods/メンコ in each horse's colours, blinkers, shadow rolls, bit-lifters, bridles, pompoms, bandages) and night racing under floodlights at Oi.
- **Batch 5 added** race tack on racecourses: a saddle cloth in the signature race's colours with the horse's name and number, saddle, girths and run-up irons; plus a grazing pose that reaches the grass.
- **Batch 6 added** conformation (neck length, crest, head size per horse, with panel sliders) and a longer, more natural neck for every horse.
- **Batch 7 added** head profile (dished to Roman) and ear size, hoods with bare ears, and hood edges that run cleanly down the cheek.
- **Batch 8 added** path mode: the horse walks a curved, closed path (the paddock's parade ring) with the scenery bent round it, hooves still planted through the bends, and the rest of the field walking in number order.
- **Batch 9 added** the beach: moving surf, splashes, wet-sand clods and dust by surface, and hoof prints in the sand.
- **Batch 10 added** sloped ground (an endless training hill, and the final hills of five racecourses), rounder fore hooves and racing plates, and one draw call per horse (rigid-skin merge).
- **Batch 11 added** the snowy field: snow, winter rugs, breath in the cold, snow-capped roofs and mountains, and cloths draped with clean hems.
- **Batch 12 added** the jockey: crouched in the owner's silks with the pattern and sleeves read from the JRA notation, a cap in the gate colour, and a work rider on the training hill.
- **Batch 13 added** race mode: an 18-horse field of roster horses running to their real styles, a starting gate and a winning post; and front legs that keep to their real range of motion at speed.
- **Batch 14 added** rain and seasonal variants of the courses, starting with a wet Takarazuka Kinen at Hanshin.
- **Batch 15 added** reins, riders whose hands follow the horse's mouth and who push in the home straight, a quieter upper body over the horse's back, puddles on a soaked course, and Tokyo on Derby day.
- **Batch 16 added** race-day crowds on the apron and up the stands, Gold Ship's tail ribbon, and Kyoto in spring.
- **Batch 17 added** patterned hoods (stripes, hoops, checks, a centre stripe, a brow band, an X) and Nakayama for the Satsuki Sho.
- **Batches 18–19 added** the last 13 horses (Kiseki to Forever Young), Oi on Tokyo Daishoten day (a low winter sun in daylight), smooth gait changes, the build and running-style controls with researched quirks for 122 horses, and the anatomy review (`research/anatomy-review/ANATOMY-TODO.md`, fixes for the owner to choose).
- **Unconfirmed values:** a value the sources couldn't confirm is never presented as fact. Each one is flagged in the data's `uncertain` lists, shown on the horse's info card, and listed as a to-do in `ROADMAP.md`. Examples are which hind leg is white on Mr. C.B., and Saint Lite's silks.

## Run locally

Open `index.html` in a browser. The data files are classic scripts, so this works straight from disk. It loads Three.js r186 from jsDelivr, so it needs an internet connection.
