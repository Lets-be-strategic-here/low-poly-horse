# Low-Poly Horse

A low-poly 3D horse built with Three.js from primitive geometry. It walks or gallops in a seamless loop through real Japanese racecourses and generic places. The horse presets are the real racehorses behind the [Uma Musume](https://umamusume.jp/character/) roster, built in generation order.

**Live demo:** https://derprito64bit.github.io/low-poly-horse/

## What's in it

- **Procedural horse.** Built in code from low-segment primitives with vertex sculpting and flat shading. There are no model or texture files. A hierarchical rig covers the spine, neck, head, ears, four legs, a chained tail and a mane.
- **Real horses.** The first batch is 11 horses, from Byerley Turk (c.1680) to Sirius Symboli (1982). Each one sets:
  - coat, using the JBIS registry colour (鹿毛, 黒鹿毛, 芦毛 …);
  - face and leg markings;
  - size: height at the withers and race weight;
  - running style (逃げ, 先行, 差し or 追込);
  - gear and the owner's silks.

  The values are researched and sourced; anything unconfirmed is listed in the horse's info card. The full build queue (152 horses) is in `data/roster.js`.
- **Customization.** Coat presets and colour pickers, a greyness slider, 10 face markings, white height per leg, height, weight, and mane and tail length.
- **Locations.**
  - Tokyo and Nakayama racecourses. They're built from JRA course data: left- or right-handed layout, turf and dirt courses, rails, grandstand, infield (Nakayama's steeplechase jumps, Tokyo's garden pond), the big screen, and Mt Fuji behind Tokyo.
  - A Hidaka stud farm, where the horse walks with a companion and other horses graze.
  - The original countryside trail.
- **Gaits.**
  - Four-beat lateral walk.
  - Transverse gallop with left or right lead; on a racecourse it takes the outside lead for the home straight.
  - Standing graze pose for background horses.

  Leg IK keeps each hoof planted with no sliding (measured slip: 0.00 mm). The toe breaks over as the hoof lifts off.
- **Seamless loop.** All motion is a periodic function of one loop phase, scenery included. Each horse gets a whole number of strides per scenery period, so the loop is seamless at any horse size.

## Controls

- Drag to orbit, scroll to zoom. Space or ▶ plays and pauses; the slider sets speed from 0.25× to 2×.
- **Walk / Gallop** switches gait. **Side, ¾, Front, Far** set camera presets; at a racecourse, Far looks across from the infield side. **Wire** shows a wireframe.
- **Horse** opens the panel with the horse and location pickers, the horse's info card and the customization controls.
- The URL hash stores the horse, location and gait, for example `#h=symboli-rudolf&l=tokyo&g=gallop`.

## Files

| Path | What |
|---|---|
| `index.html` | The engine: model, rig, gaits, IK, world kits and UI |
| `data/horses.js` | Horse presets, with sources and uncertainties |
| `data/locations.js` | Locations: course facts, lighting, layout and landmarks |
| `data/roster.js` | All 152 real horses on the official list, in generation order |
| `ROADMAP.md` | The build order: anatomy, colour, parts, every JRA G1 and NAR JpnI course, race mode |
| `.claude/agents/` | Research-agent templates: one agent per horse or location |

## Run locally

Open `index.html` in a browser. The data files are classic scripts, so this works straight from disk. It loads Three.js r186 from jsDelivr, so it needs an internet connection.
