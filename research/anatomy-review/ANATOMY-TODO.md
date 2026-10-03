# Horse anatomy review: to-do list

This review covers the standing pose and the five gaits (walk, trot, canter, gallop, race), plus the customisation controls. It drew on three sources: the code in `index.html`, the near-orthographic contact sheets in `research/anatomy-review/shots/`, and the joint measurements in `research/anatomy-review/measurements.json`. Eight lens critics (proportions, hindlimb, forelimb, trunk, head-neck, slow gaits, fast gaits, secondary rig) and four gap critics (size/weight, conformation controls, running-style controls, transitions/leads) produced the findings. Two skeptics then checked each finding: one against real-horse evidence, one against the actual model. Severity below is the skeptics' corrected value where they agreed, otherwise the lower of the two. Line numbers are the current ones the skeptics re-located. Each item lists the fix options found; tick one, or write your own under "Decision / notes".

| Area | Kept items (high / medium / low) | Disputed |
|---|---|---|
| hindlimb | 5 / 5 / 2 | 0 |
| forelimb | 4 / 6 / 8 | 0 |
| race | 2 / 2 / 11 | 1 |
| trot | 1 / 2 / 3 | 0 |
| walk | 1 / 4 / 5 | 0 |
| proportions | 0 / 5 / 5 | 0 |
| trunk | 0 / 4 / 5 | 0 |
| canter | 0 / 3 / 1 | 0 |
| gallop | 0 / 3 / 1 | 0 |
| jockey-tack | 0 / 3 / 4 | 0 |
| ears | 0 / 2 / 1 | 0 |
| chest | 0 / 1 / 3 | 0 |
| deformation | 0 / 1 / 2 | 0 |
| head | 0 / 1 / 4 | 0 |
| hoof | 0 / 1 / 3 | 0 |
| mane-tail | 0 / 1 / 2 | 0 |
| stand | 0 / 0 / 3 | 0 |
| other | 0 / 0 / 4 | 0 |
| **Total** | **13 / 45 / 66** | **1** |

## To do

### Hindlimb

- [ ] **A-HIND-01 Hind limb set ~15 cm too far forward (camped under behind)** — high. This is the main side-view hindquarter fault, and it shows in every gait.
  - Observed: Point of buttock at x −0.858. The hip joint is at −0.515, directly under the croup peak (−0.525) and 34 cm ahead of the buttock. Point of hock is at ~−0.70, heel −0.59, toe −0.491. The buttock plumb line falls 16 cm behind the point of hock and ~27 cm behind the heel. At lift-off the hind toe is only 10–14 cm behind the buttock (walk/trot/canter) and still 4 cm in front of it at the gallop. No point of hip shows on the surface.
  - Real horse: The tuber ischii plumb line touches the point of hock, runs down the back of the cannon and lands 7.5–10 cm behind the heel (Adams & Stashak). The acetabulum is ~18–22 cm cranial to the tuber ischii, and the croup high point is ~20–25 cm cranial to the acetabulum. The joint angles (stifle 110°, hock 146°) already match TB values (Mostafa & Elemmawy 2020: 113.5°/148.9°). Body length (1.67 m ≈ 1.02 WH) is normal, which favours moving parts back over trimming the rear.
  - Where: index.html:553 HIND; :507-525 TRUNK rear rows; :702 hips pivot; GAITS hind.xc (:207-247).
  - Fix options (choose one):
    - [ ] A. Move hip and hind limb back 10–14 cm with the same angles, shift every hind.xc, and move the croup peak forward to ~−0.42 (M; all hind gait tuning must be re-checked).
    - [ ] B. Shorten the rear overhang by 6–10 cm (S; shorter, steeper croup).
    - [ ] C. Split the difference: ~7–10 cm limb shift plus ~5–7 cm rear trim. The model skeptic preferred this (M).
    - [ ] D. Move the standing hooves only (S; walk/trot centres stay on the old geometry).
    - [ ] E. Surface landmarks only: move the croup peak forward and add a point of hip (S; cosmetic only).
  - Decision / notes: ____

- [ ] **A-HIND-04 Hock hyperextends past straight at race push-off and locks straight in early swing** — high. The bend is anatomically impossible, and it happens in the headline gait.
  - Observed: Race hock reaches 192–193° (RH k6, LH k9), ~194° at lift-off, and ~202° for roster horses with hindDrive 1.2. In early swing it sits at 179.5° (RH k7-9, LH k10-12; LH stifle 133–134°). Canter LH k21-24 is also 179.5°. Walk shows only a 1-sample pop to 162°, which is within the real range. Visible as the straight trailing RH in 05-race g=2/8.
  - Real horse: The hock never reaches 180°. Standing hock angles are ~142–168° (TB 148.9°). The reciprocal apparatus couples stifle and hock, so the true defect is the two joints moving out of step. A gallop push-off peak of ~160–170° is an estimate scaled to the horse's standing angle, not a published value.
  - Where: :217 race hockPush 40°; :262 tuneGait ×hindDrive; :1394-1397 stance push; :1408 swing hold; :1474-1485 femur-clamp fallback straightens tibia and cannon.
  - Fix options (choose one):
    - [ ] A. Hard cap: hock ≤ ~168° in footPath and in the fallback (S; loses 3–5 cm of race push-off reach).
    - [ ] B. Replace hockPush with hip extension plus fetlock: hockPush 10–15°, femur retracts in stance (M; race stride must be retuned).
    - [ ] C. Shorten the race stance reach via hind xc/duty (S; departs from the published stride/duty).
  - Decision / notes: ____

- [ ] **A-HIND-05 Stifle and hock decoupled: the stifle takes all the stance compression** — high. This is how the IK is built, so it affects every gait and causes the touchdown snap.
  - Observed: Stance yield, stifle vs hock: walk −17/−6°, trot −37/−8°, canter −38/−10°, gallop −35/−10°, race −47/−12°. Race before touchdown: the stifle opens 97→168° with the hock fixed at 154°, then folds ~65° in 27 ms. Swing peaks are ~3 samples out of phase.
  - Real horse: The reciprocal apparatus couples the two joints tightly in swing (van Weeren 1990/1992, Back 1995). In stance the stifle moves little at mid-stance (Dutto 2006) and the tarsus/fetlock yield more. So 1:1 coupling is right for swing, not for stance. The fetlock is the main shock absorber, and the tarsus returns energy elastically.
  - Where: :1394-1397 (flex = hockSag·load − push); :1472-1485 (scheduled eta; 2-bone solve puts length change into the stifle); hockSag :205-241.
  - Fix options (choose one):
    - [ ] A. Coupled 3-segment IK, ~1:1 in swing, hock and fetlock yielding more than the stifle in stance (M; some swing targets become unreachable).
    - [ ] B. Distance-driven hock: hock angle from hip–fetlock distance through a coupling table (M; edge cases).
    - [ ] C. Quick retune: hockSag trot ~18, gallop ~25, race ~30°, with less body drop (S; partial fix only).
  - Decision / notes: ____

- [ ] **A-HIND-06 Femur swings to horizontal; the stifle rises into the barrel** — high. In profile the hind leg seems to sprout from mid-belly.
  - Observed: Femur world max: walk 67°, trot 76°, gallop 82–83°, race 86–89°. In race the stifle is level with the hip joint. Hip range is 2.5–4× real at walk and trot (walk ~64–67°, trot ~75°); gallop ~50–54°, race ~76° relative to the pelvis. Minimum stifle angle: race 26–30°, gallop 50°. The 76° clamp pins the stifle at (−0.217, 1.104), 0.22 m above the belly line. The walk never reaches the clamp, and the walk stance alone sweeps 50°.
  - Real horse: Hip range is ~17–26° at walk and 27–30° at trot (Egenvall 2023; Shen 2026). Hip flexion and extension drive protraction (Hodson 2001); the stifle and hock lift the lower limb for clearance and do not provide reach. At full gallop the stifle stays under the flank. Stifle minimum is roughly 85–100° at trot and 75–90° at gallop (estimate).
  - Where: :1432 FEMUR_RANGE; :1476-1485 swing-only clamp; :1549 race hips gather; :553 short femur.
  - Fix options (choose one):
    - [ ] A. Tighter femur limit, ~45–60° in the pelvis frame (S; swing-only, so it won't fix the walk or the stance sweep).
    - [ ] B. Phase-scheduled hip curve per gait, with IK only for stifle and hock in swing (M).
    - [ ] C. Fix the femur proportions first (A-HIND-02) (L).
    - [ ] D. Skin the flank to the femur (L; mergeRigid rework).
  - Decision / notes: ____

- [ ] **A-GAP-403 Gait blends leave permanent joint twists: hind hooves skid every stride** — high. The error has no bound, it survives later switches, and ordinary UI use triggers it.
  - Observed: Never blended: slip ≤0.7 cm. After 2 blends, LH skids 4–5 cm per stance. After 8 blends: LH 9–12 cm, RH 4–8 cm, femur yaw −3 to −6°, tail roll ~−32° summed. After a 40-switch sweep: 42 cm skid and 10–18° of yaw. Only rebuilding the horse clears it.
  - Real horse: The same gait at the same phase should give the same pose. A hoof slips forward a few cm for ~18–21 ms at impact (Horan 2024), then stays fixed and never moves sideways. Out-of-plane limb rotation exists but repeats with the stride (Lanovaz 2002).
  - Where: :1690 slerp writes all Euler axes; BODY and solveLeg never write scap/fem rotation.y, tail rotation.x or spine rotation.y.
  - Fix options (choose one):
    - [ ] A. Reset every rig node to its stored rest quaternion (not identity: mane mounts and gear nodes aren't identity) at the start of poseGait (S).
    - [ ] B. Write whole rotations (rotation.set(x,0,z)) in BODY and solveLeg (S; a site is easy to miss).
    - [ ] C. Re-pose cleanly when the blend ends (S; only cleans up after the blend).
  - Decision / notes: ____

- [ ] **A-HIND-02 Femur too short, tibia too long (femur:tibia 0.69)** — medium. A stubby thigh and long gaskin show in profile, and it adds to the motion extremes.
  - Observed: Femur 0.306 m, tibia 0.444 m, cannon 0.347 m. Stifle at 0.915 m. The hip joint sits 0.343 m in front of the buttock.
  - Real horse: Joint-centre femur:tibia is ~0.9–1.1 (Senna 2015 thigh:gaskin 0.94), not "≥1.0". Target femur ~0.37–0.41 m and tibia ~0.38–0.42 m. A stifle at ~0.89–0.93 m is plausible, so a 0.84 m target is too low. Most of the femur shortfall comes from the hip sitting ~10 cm too far forward. The short femur contributes to the extreme IK angles; FEMUR_RANGE and the hock schedule drive them more.
  - Where: :553 HIND; :1223-1232 meshes and L.rest/len; :1432.
  - Fix options (choose one):
    - [ ] A. Rebalance segments at the same angles, e.g. hip ~(−0.62..−0.66, 1.18–1.22) (M; also covers most of A-HIND-01).
    - [ ] B. Lower and advance the stifle (S; the skeptic found the stifle height is not wrong).
    - [ ] C. Raise and move back the hip only (S).
    - [ ] D. Cosmetic: deepen the lower femur sections (S).
  - Decision / notes: ____

- [ ] **A-HIND-03 Hind limbs are parallel posts 35 cm apart at every speed** — medium. Plain in front, rear and 3/4-rear views, including race tiles.
  - Observed: Hip, stifle, hock and toe all at z≈0.169–0.176. Toes 0.349–0.351 m apart in every gait, including race. legZ never goes below ~32 cm. The gaskin outline narrows ~8 cm in the mesh, but the bone axis stays vertical.
  - Real horse: Stifles out, gaskin tapering toward the hock, cannons vertical and parallel, toes slightly out (80% outward rotation, Holmström 1990). Slight cow hocks are common, but the plumb-line ideal bisects the hock. A 33–35 cm stance is not clearly wrong (base of support 0.22–0.45 m, Clayton 2013). The track should narrow at canter/gallop, not much at walk/trot (plaiting is a fault). Matsuura 2024 has no limb-alignment data.
  - Where: :553 HIND.z; :687 legZ; :1188; :1222 femur inward offset; :1370-1373 abductedZ (path mode only); prints :3007 and dust :3082 read legZ.
  - Fix options (choose one):
    - [ ] A. Mesh-only frontal shaping: stifle out, gaskin taper, 5–8° hoof toe-out (S).
    - [ ] B. Lean the limb plane in the IK (M; solveLeg assumes one plane).
    - [ ] C. Per-gait track width fed through abductedZ (S; tilts the whole leg base-narrow, so it needs A for stifle-out).
  - Decision / notes: ____

- [ ] **A-HIND-07 Femur dwells at its limits, then whips and snaps; stifle hits 168° at touchdown** — medium. A clamp-driven discontinuity that shows in every fast gait.
  - Observed: Race RH femur pinned at the 0° and 76° clamp bounds (relative to the pelvis), then drops 87→41° in ~27 ms while the stifle goes 97→168°. At touchdown the stifle is 137°, then 90° two frames later. Peak speeds: race femur ~1720–2047°/s, stifle ~2620–3051°/s; gallop ~730–800 and ~1190–1270°/s. Early-stance hip flexion: trot ~6°, canter ~11°, gallop ~7°, race ~15°.
  - Real horse: The hip extends through stance (Dutto 2006). The swing is smooth and pendular. Late-swing retraction is real and active at canter and gallop (St George 2023), so the "≤5–10°" cap is too tight. It should be a gradual reversal over the last 20–30% of swing, not a release from a dwell.
  - Where: :1432 and :1478-1485 hard clamp; :395-398 and :1406 swingX; :1542-1549 race hips rotation.
  - Fix options (choose one):
    - [ ] A. Soft limits plus low-pass on the femur angle (S).
    - [ ] B. Reshape the hind swing path (M).
    - [ ] C. Scheduled femur from A-HIND-06 (M).
  - Decision / notes: ____

- [ ] **A-HIND-08 Point of hock at joint level, with no calcanean tendon line** — medium. A defining landmark of the hind-leg silhouette.
  - Observed: The rearmost point of the hind leg is at y 0.57, x −0.704, ~1 cm above and 8.4 cm behind the hinge. The rear outline above it is up to 4 cm concave (y 0.62–0.67). The back of the tibia ends 6 cm in front of the knob.
  - Real horse: The tuber calcanei sits ~6–11 cm above the tarsocrural axis (Lewczuk 2025: tuber to TMT 17.7 cm). The rearward offset is already right; only the height is ~5–9 cm low. The common calcanean tendon runs straight up to the gaskin, with a hollow in front of it.
  - Where: :1224 tibia and :1225 hind cannon sections.
  - Fix options (choose one):
    - [ ] A. Calcaneus block on the cannon at t≈−0.3..−0.1 (S; check intersection at full flexion).
    - [ ] B. Straight tendon line on the tibia (S).
    - [ ] C. Both, plus a gaskin hollow (S).
  - Decision / notes: ____

- [ ] **A-GAP-305 Hind drive slider barely does anything, and in race only overextends the hock** — medium. A named control that is nearly invisible, and harmful where it does act.
  - Observed: Lift and flex ×0.97–1.03 over the slider range. hockPush exists only in race (32→48°), moving peak hock 185→201°. Duty, sweep, pitch and gather are unchanged. Nakayama Festa's and Wonder Acute's notes (hind legs trailing / not stepping under) describe protraction, which hindDrive doesn't touch.
  - Real horse: At the gallop the hinds give the net forward impulse (Self Davies 2019) and have the longer stance (94 vs 77 ms; Witte 2006). Propulsion comes from hip extension and retraction; the distal joints are elastic (Dutto 2006). Lead and non-lead stance times are equal, so drive does not lengthen duty. The suspension follows lift-off of the leading fore, so drive adds no flight. "Stepping under" means touchdown protraction.
  - Where: :217; :256-263; :1396; :1408; :1548-1549; :3282.
  - Fix options (choose one):
    - [ ] A. Drive = hip retraction at lift-off + hips gather + pitch amplitude, duty about the same, hock capped at ~165–175° (M).
    - [ ] B. Separate "engagement" control for touchdown protraction (S).
    - [ ] C. Minimum: apply hd to gather and pitch in all gaits (S).
  - Decision / notes: ____

- [ ] **A-HIND-09 Hind cannon round in section** — low. Cosmetic; visible from front and rear.
  - Observed: ~7.0–7.2 cm wide × 7.3–7.4 cm deep, perimeter ~22 cm. The fore cannon is the same (7.0 × 7.1 cm).
  - Real horse: The cannon region is ~4.5–5.5 cm wide × ~7–7.5 cm deep, ~20–21 cm round. The MTIII bone itself is near-circular (Sisson); the flattening comes from the tendons and splint bones, and is stronger on the forelimb.
  - Where: :1225 hind and :1209 fore cannon sections; :415 PROF.limb; :457 jitter (±6 mm).
  - Fix options (choose one):
    - [ ] A. Half-width ~0.026–0.028, front ~0.030, back ~0.042–0.045; apply to the fore too and consider less jitter (S; check markings and bandages).
  - Decision / notes: ____

- [ ] **A-GAP-212 No control for hock angle or hock height (sickle / post-legged)** — low. A customisation gap; the default 145.8° is normal.
  - Observed: One hock angle (145.8°) and a hock height ratio of 0.345 WH for every horse. Neo Universe's "deeply angled hocks" and Grass Wonder's "high-set hocks" are param:null.
  - Real horse: TB ~145–155° at joint centres (Mostafa 2020; ± is SD per the paper). Within-breed variation is small (Weller 2006). The Morna 160° figure is a different breed and method. Holmström's "small angles injury-prone" is a suggestion, and Gnagey 2006 shows a trade-off between the two extremes.
  - Where: :553; :1216-1232; :1474-1477 (standing hock = hockRest only).
  - Fix options (choose one):
    - [ ] A. conf.hock: hock x ±2–3 cm (≈±5–8°) for the realistic range, ±4 cm (≈±11°) for caricature (S).
    - [ ] B. Hock height ±3 cm (S; interacts with A-HIND-02).
  - Decision / notes: ____

### Forelimb

- [ ] **A-FORE-01 Shoulder blades stand vertical and stick out beside the withers as flat fins** — high. Visible in every front and 3/4 view, in every gait.
  - Observed: Scapula top and shoulder joint share z 0.165, so the blade is vertical (lean <5 mm). The top ring stands 7 cm proud and is fully detached (inner face 3–4 cm outside). The upper blade is ~75% outside the body in every phase; mid-blade 4–7 cm proud. At protraction the front edge stands 13–16 cm clear.
  - Real horse: The scapula lies flat on a narrow cranial thorax, with the cartilage beside the T3–T6 spines, leaning ~15° from vertical. The arm and triceps being the widest part of the forehand is correct. Real scapular ROM is large (27.6° walk, 23.3° trot; Wagner 2026), so don't fix this by cutting scapSwing. Widening the withers (option D) is wrong for a TB.
  - Where: :552 FORE.z; :1193-1201 blade; :1370-1373; :1442-1451.
  - Fix options (choose one):
    - [ ] A. Tilt only the blade mesh inward: top at z ~0.07–0.10 (S).
    - [ ] B. Lean the forelimb plane in the IK (M).
    - [ ] C. Skin the shoulder region to the scapula and humerus (M).
    - [ ] D. Fill the withers out to the blade (S; mutton withers, wrong for a TB).
  - Decision / notes: ____

- [ ] **A-FORE-03 Fore swing folds through the elbow; elbow and hoof enter the barrel** — high. A hackney-like action, clearly visible from trot to race.
  - Observed: Humerus parked at −72..−79° in mid/late swing. Elbow interior min: race 31–38°, gallop 39–48°, canter 58°, trot 73° (rest 138°). The elbow ends 4–7.4 cm inside the chest wall. Race RF toe peaks at 0.95 m, about half of the hoof buried. Knee over-folds 93–110°.
  - Real horse: Humeral rotation drives protraction; scapula and forearm lift the lower limb (Hodson 2000). Elbow range is ~90–150° at walk/trot; the gallop may go somewhat further, so a floor of ~75–80° is safer. No horse reaches 31–45°. Separately, the race hoof-in-belly frame comes from carpus and fetlock fold at u≈0.42, not from the parked humerus.
  - Where: :1431 ARM_RANGE; :1457-1469; :1407-1408; :206/216 fore lift; :1201-1206.
  - Fix options (choose one):
    - [ ] A. Reshape the fore swing path: early peak, lower lift (race 0.44→~0.30) (M).
    - [ ] B. Tighten arm limits, including in stance (S).
    - [ ] C. Scripted humerus / joint-angle curves; knee action becomes a style parameter (L).
    - [ ] D. Clamp toe targets below the belly, or slim the trunk at the elbow (S; treats the symptom).
    - [ ] E. Skin the body wall to the arm (L).
  - Decision / notes: ____

- [ ] **A-FORE-05 Fetlocks barely sink in any gait; compression happens at elbow and shoulder** — high. Wrong spring mechanism in the main gaits.
  - Observed: Fore fetlock drop: walk 1.5, trot 1.8, canter 2.0, gallop 2.1, race 2.7 cm; hind 1.1–2.2 cm. Contact angles 173–189° (flexed or straight). Gallop peak is only 1–4° above standing. In race the scapTop-to-fetlock distance shortens 153–157 mm while the distal limb shortens 30–40 mm. RF and LF are identical (no lead difference).
  - Real horse: The distal spring shortens 127 mm at the gallop vs 12 mm proximal, and MCP angle is linear with force (McGuigan & Wilson 2003). Fetlock is 199–206° at contact (Ratzlaff 1993). Targets above standing: walk +10–15° (the model's walk is fine), trot +25–30°, canter/gallop +40–50° with the pastern near horizontal, race slightly more. The non-lead fore takes more load at canter and slower gallop; race is about symmetric (Witte 2006).
  - Where: :1388-1390; :1351-1354; :1491; :503 COFFIN_Y/PASTERN (horizontal max drop 11.7 cm); :206-241 sag; :1545.
  - Fix options (choose one):
    - [ ] A. Cannon-relative, speed-scaled sag with pre-extension at touchdown; reduce race body lowering (S; clamp fetlock height ≥~0.07 m).
    - [ ] B. Derive sag from load (1/duty, fore/hind split, lead difference) (M).
    - [ ] C. Strut-and-spring stance, also driving the hock (M).
    - [ ] D. Lower the coffin joint and lengthen the pastern (M).
  - Decision / notes: ____

- [ ] **A-GAP-301 Knee action slider pushes the folded forefoot into the barrel** — high. Affects famous presets such as Tokai Teio.
  - Observed: kneeAction 1.3 in race: lift 0.44→0.572, elbow min 31→16°, toe peak 0.95→1.07 m. Penetration is ~4–6 cm at neutral and ~16.5–18.5 cm with Tokai Teio. The deepest phase is ~0.38 of the way through swing, with the forearm still 22–26° back and the raised target behind it. ARM_RANGE[1] never binds in swing; the 16° elbow comes from the −76° lower bound parking the elbow 7 cm below the shoulder.
  - Real horse: The elbow closes no further than ~53–58° (Santosuosso 2021). In a gallop the hoof is most folded in early swing, behind the forearm near the elbow, never inside the trunk. High action carries the elbow forward (shoulder extension). The model's shoulder is over-flexed (55–64°). The Tokai Teio quote is hyperbole and high action is atypical for a TB.
  - Where: :256-264; :1405-1408; :1431, 1463-1469; :3281; data/quirks.js:271.
  - Fix options (choose one):
    - [ ] A. Knee action as forearm elevation, with the target derived from forearm and fold (M; won't fix it by widening ARM_RANGE[1] alone).
    - [ ] B. Clamp the swing target under the trunk (S).
    - [ ] C. Scale only flex, not lift, and time the lift peak to forward progress (S).
  - Decision / notes: ____

- [ ] **A-FORE-02 Scapula as short as the humerus (1:1)** — medium. Short shoulder, long arm.
  - Observed: Scapula 0.356 m, humerus 0.354 m, forearm 0.460 m. Blade top 12 cm below the withers (visible tip 8–10 cm). Shoulder joint 99°.
  - Real horse: Scapula with cartilage is ~1.4–1.6× the joint-to-joint humerus (~0.42–0.48 vs ~0.28–0.31 m; Equidae bone ratio 1.23, Belyaev 2025). The humerus is ~15–20% long. Senna's surface lengths are landmark-dependent and shouldn't be used for ratios. A 7–10 cm gap below the withers is normal (blade top ~1.53–1.56 m). The arm slope is fine; forearm ~0.40–0.43 m.
  - Where: :552; :1193-1214; :1431.
  - Fix options (choose one):
    - [ ] A. Lengthen scapula, shorten humerus (top ~1.53–1.56, not 1.58) (M).
    - [ ] B. Extend the visible blade only (S).
    - [ ] C. Lower the point of shoulder only (S).
    - [ ] D. Keep as stylisation (S).
  - Decision / notes: ____

- [ ] **A-FORE-04 Elbow snaps near-straight after race lift-off** — medium. Physically impossible, but brief.
  - Observed: Race RF k16-18 177/172/164°, LF k19-21 178/173/165° (133° at end of stance). Canter LF 174°. The default fore flick 0.4 pulls the target 4–17 cm out of reach. Late swing is not "locked straight": the elbow is 128–139° and only the carpus is straight (normal). About 3 of 32 race samples per leg.
  - Real horse: Peak elbow extension is ~155–160° (Back & Clayton 2013). The elbow starts flexing at lift-off. The 05-race g=2/8 look comes from the shoulder joint being carried to the trunk front by the scapula pivot.
  - Where: :216 (no fore flick → 0.4); :1406; :1421-1428; :1431.
  - Fix options (choose one):
    - [ ] A. Keep targets reachable: fore flick ~0.1 (0 in race), clamp to ≤0.95 of leg length (S).
    - [ ] B. Hard joint limits, elbow cap ~160–162° rather than 155° (S).
    - [ ] C. Reduce reach demand: scapula translation or xc (M).
  - Decision / notes: ____

- [ ] **A-FORE-06 Fore stance shifted forward (gallop, trot, walk)** — medium. The gallop forelimb never passes vertical.
  - Observed: Gallop whole-limb +24..−8°, vertical at ~70% of stance, mean +8–9°, cannon never behind vertical. Trot mean +5–6° (sweep 38° is fine). Walk metacarpus vertical at 56% of stance. Canter mild (+3–4°). Race is balanced (+29/−26°).
  - Real horse: Walk metacarpus vertical at 28% of the stride (~45% of stance), with braking→propulsion "considerably" later (Hodson 2000). Trot mean −1..+2° (Hobbs 2016). Gallop fore leaves at ~−25..−30° (Muybridge).
  - Where: fore.xc :206, 216, 224, 232, 240; :1384.
  - Fix options (choose one):
    - [ ] A. Lower fore.xc for gallop (~0.58–0.62) and trot (~0.56–0.62); fix walk/canter through cannon/carpus posture; leave race (S).
    - [ ] B. Angle-based placement (M).
    - [ ] C. Trunk travels over the stance (M).
  - Decision / notes: ____

- [ ] **A-GAP-207 No frontal-plane conformation controls (toe-in/out, base width, bench knees, cow hocks)** — medium. Eight roster horses have notes that can't be expressed.
  - Observed: Fixed vertical leg planes, hoof yaw 0. Unmapped notes: Maruzensky (A-shaped below the knee), Tamamo Cross, Oguri Cap (RF), Super Creek (LF crooked), Admire Vega, Blast Onepiece, Biko Pegasus, Vodka.
  - Real horse: Straight legs are the ideal. Holmström's 60/50/80% figures are Warmbloods, mostly mild. Weller 2006b (NH, preliminary): fetlock valgus lowered performance; carpal valgus raised SDFT risk. Anderson 2004 found carpal valgus protective against carpal fracture. Winging and paddling are qualitative. Angular deviation at the carpus or fetlock is needed as well as toe yaw.
  - Where: :687; :1188; :1393, 1411-1415; :1497-1501 (only rotation.z written).
  - Fix options (choose one):
    - [ ] A. Per-leg toe angle as static pastern yaw (S; account for toe offset in footPath).
    - [ ] B. Base-wide/narrow via fz in footPath (S; add to the roll compensation).
    - [ ] C. Matching flight arcs, plus cow-hock offset and hind toe-out (M; interference check).
  - Decision / notes: ____

- [ ] **A-GAP-211 Pastern length, slope and springiness are global constants** — medium. Four roster pastern quirks are unexpressible.
  - Observed: PASTERN 0.14 m, fore 33° / hind 30° from vertical, sag set per gait. Tokai Teio, Dantsu Flame, Gold Ship (hind) and Loves Only You (upright front) are param:null. The hoof wall (~73°) is already broken forward against the pastern.
  - Real horse: Pastern and hoof angles are correlated, not equal (Anderson 2004a). Racing TBs typically show a broken-back axis (Correa 2026). "Springiness" is fetlock-suspensory compliance; length only lengthens the lever. Long pasterns raise front-limb fracture odds (Anderson 2004b). The baseline race fetlock drop is far too small (see A-FORE-05).
  - Where: :503; :552-553; :1194/1217; :1351-1355; :1379-1403; :1158.
  - Fix options (choose one):
    - [ ] A. Per-rig fore/hind pastern table: length, angle, separate "give" factor; hoof gets its own angle (M).
    - [ ] B. Single conf.pastern for all four (S; can't express Gold Ship's hind-only trait).
  - Decision / notes: ____

- [ ] **A-GAP-309 No frontal-plane limb-flight control; Almond Eye's "straight action" forced onto trunk roll** — medium. Matches the user's quirk goal.
  - Observed: Toes move ≤2–6 mm sideways all stride. Almond Eye's farrier note is mapped to roll 0.7, which roll compensation cancels at the hoof.
  - Real horse: Toe-out tends to wing in and toe-in to paddle, depending on origin and balance. It is clearest at walk/trot and subtle at speed. Hinds are normally slightly toed out (79.5% of 51,134 PRE horses). Almond Eye's longer right fore is overreach (sagittal). Vodka's twist is long-axis hind rotation. Biko Pegasus gives no direction.
  - Where: :1370-1373; :1441-1445; :1716; data/quirks.js:75, 144, 176, 192, 542, 731, 929, 934, 945.
  - Fix options (choose one):
    - [ ] A. Per-leg toe angle plus a speed-scaled swing arc; hinds default slightly out; cannon roll for a hind twist (M; clearance check).
    - [ ] B. Remap Almond Eye to "straightness" once A exists (S).
  - Decision / notes: ____

- [ ] **A-FORE-07 Forelimbs in fixed vertical planes 33 cm apart at every speed** — low. Mostly visible in front and rear views.
  - Observed: Fore fetlock z ±0.165 in every gait; tilt ≤±0.76°.
  - Real horse: Forefeet converge at canter/gallop/race (single-limb support). Parkes 2020 measured lean toward the bend; the symmetric inward part is ~5° (SD ~10) at ~9.5 m/s, which moves each hoof ~8–11 cm and gives a ~11–17 cm race track. Only slight narrowing at walk/trot (~0.85–0.9). No lead-leg effect (p=0.57).
  - Where: :552; :687; :1370; :1393; :1438-1445.
  - Fix options (choose one):
    - [ ] A. Per-gait track width via abductedZ (S).
    - [ ] B. Lean tied to speed (M; drop the lead-leg bias).
  - Decision / notes: ____

- [ ] **A-FORE-08 Scapula pivots about its top: shoulder joint rides up and forward** — low. Minor contributor.
  - Observed: Race +18° moves the joint +7.6 cm forward and +8.2 cm up; −18° moves it 9.7 cm back and 5.4 cm down. The dorsal border never moves. The model's ROM is 14–16° at walk/trot (real is larger).
  - Real horse: The scapula rotates about a moving centre ~1/4–1/3 down the blade, so the dorsal border moves caudally (Wagner 2026; van Bijlert 2024). It also slides on the thorax (up to 80 mm; Lawson & Marlin 2010). The joint still rises with any rotation; expect ~+7 forward / +5–6 cm up at 18°. The link to A-FORE-03 is minor (mid-swing elbow lift comes from ARM_RANGE).
  - Where: :552; :1196; :1443-1454; :216.
  - Fix options (choose one):
    - [ ] A. Move the pivot ~1/3 down (S; shrinks the rise, doesn't remove it).
    - [ ] B. Rotation plus fore-aft slide (M; needed for a mainly fore-aft path).
  - Decision / notes: ____

- [ ] **A-FORE-09 No accessory-carpal bump; knee locked dead straight through stance** — low.
  - Observed: Back of the knee is flush (0–2 mm). Stance carpal angle −0.25..+0.29°.
  - Real horse: The accessory carpal bone is ~3.9–4.4 cm deep, palmarolateral; expect a 2.5–4 cm lateral-biased bump. The carpus overextends in stance (Back 1995), more with speed (Burn 2006, TB), peaking at mid-stance.
  - Where: :1208-1209; :1397; :1455-1458.
  - Fix options (choose one):
    - [ ] A. Add the accessory carpal bump (S).
    - [ ] B. Stance overextension scaled by speed (~3–5° trot, more at gallop) (S; overdone reads as back at the knee).
  - Decision / notes: ____

- [ ] **A-GAP-104 Cannons, fetlocks, pasterns and hooves ignore weight at a fixed height** — low.
  - Observed: Only for explicit-height horses (10/149 roster, or the customizer after Height is moved). The cannon is 21.7 cm at both 400 and 560 kg. Weight-only horses scale ~M^0.2 (cannon 21.1–22.4 cm). Baseline ring is 21.7 cm vs the ~20 cm the quirk mapping assumes, so Haiseiko renders 24.3 cm vs 21.5 measured.
  - Real horse: Within the TB breed the cannon SD is ~3% (~0.5–0.6 cm). Colts gaining 34 kg added only 0.2 cm (Tozaki 2016). Sex adds ~2–3% (Shojaei 2026: Arabs +7%). A realistic rule is ~+4–8% over 400→560 kg. Measured cannon girth includes tendons, so it can't be used for bone stress. Interspecies allometry (Alexander 1979, McMahon 1975) doesn't apply here.
  - Where: :1183; :1209; :1225; :1175-1177; :1158-1165; :634-636.
  - Fix options (choose one):
    - [ ] A. Small mass term (exponent ~0.1–0.25) on the explicit-height path only; re-centre the ring to ~20 cm (S).
    - [ ] B. Sex and build defaults for bone and hoof (S).
  - Decision / notes: ____

- [ ] **A-GAP-204 Bone slider reaches outside the breed; pastern overhangs the coronet (mainly hind)** — low.
  - Observed: Neutral cannon 21.7 cm fore / 22.0 cm hind. Slider max gives 24.9 cm, clamp gives 26 cm. The hind pastern is already proud of the coronet at bone ≥~1.03 (4.9 mm at 1.15), which affects 7 roster horses by 0.4–2.2 mm; fore only at max. Hidden by ±3–6 mm jitter.
  - Real horse: An adult 163 cm TB is ~20.5–21 cm (SD ~1–1.2 cm; Mura 2020), so neutral is fine (~+0.7 SD). 24.9 cm is ~+3.6 SD. The coronary band is wider than the pastern.
  - Where: :683; :1158-1177; :1209; :1225; :3273.
  - Fix options (choose one):
    - [ ] A. Scale sections ~0.96, or narrow the slider to ~0.86–1.06 (S).
    - [ ] B. Tie the coronet width to max(hoof ring, pastern × 1.1) (S).
    - [ ] C. Express "bone" mostly at the knee, hock and fetlock (S).
  - Decision / notes: ____

- [ ] **A-GAP-208 Shoulder slope and knee set fixed for every horse** — low.
  - Observed: Scapula 51.4° and knee 180° for all. Saint Lite, Grass Wonder and Godolphin Barb notes are param:null. No build trait feeds motion.
  - Real horse: TB variation is small (Weller 2006a; Morna SD ~2°). Defaults are within norms (scapulohumeral 99°, knee 180° vs TB 178°). Weller 2006b's "shoulder flexor angle" is the joint angle, not the slope. Back at the knee loads the dorsal carpus (clinical opinion). Upright-shoulder→choppy stride is lore.
  - Where: :552; :1196-1213; :1371 (abductedZ reads the global FORE.sc); :1397; :1456.
  - Fix options (choose one):
    - [ ] A. conf.shoulder ±4–5° about the point of shoulder (S; also pass the rig's scapula top into abductedZ).
    - [ ] B. conf.knee: +3..+6° over at the knee, ≤−3° back at the knee (S).
    - [ ] C. Weak, optional link from build to motion (S).
  - Decision / notes: ____

- [ ] **A-GAP-308 Kakikomi (raking) mapped to knee action; Oguri Cap's raking unmapped** — low.
  - Observed: 5 of 6 kakikomi horses use kneeAction 1.12–1.2. Oguri Cap is param:null. Fore retract (0.2) and flick (0.4) are fixed. The model already overshoots 0.13–0.17 m and pulls back before race touchdown.
  - Real horse: The sources describe a down-and-back pull with no knee height. Swing-leg retraction is universal (Seyfarth 2003), so kakikomi is a modest increase plus a steeper strike. Kickback comes mostly at toe-off and the early flick. Mild knee action may stay for dirt types; the low runners should not get it.
  - Where: :257-261; :395-398; :1406; data/quirks.js:55-62, 70-73, 156-159, 175, 396-398, 775-778.
  - Fix options (choose one):
    - [ ] A. New run.rake: retract and overshoot, flick, per-horse kick-up; Oguri Cap → rake only (S).
    - [ ] B. Re-label kneeAction and reset the low runners to 1 (S).
  - Decision / notes: ____

- [ ] **A-GAP-316 Low posture makes the trailing foreleg's knee snap at race lift-off** — low.
  - Observed: Race only, trailing fore (LF under a right lead). At lift-off ARM_RANGE clamps the humerus (e.g. −82→−76°) and the knee jumps 180→146° (Oguri Cap) for ~5–6 ms. 11 of 28 run-quirk horses snap 8–40°; bodyLow ≥~0.3 is the trigger. Shows ~1 frame in 3–4 strides at 60 fps. Not in the sheets.
  - Real horse: The carpus unlocks and starts flexing at breakover (late stance, ~27–32 ms at gallop; Clayton 2004/2000, Horan 2021) and flexes smoothly into swing. A humerus at ~88° is itself unrealistic; low runners flex shoulder, elbow and fetlock.
  - Where: :1431; :1459-1469; :1717; :256-263.
  - Fix options (choose one):
    - [ ] A. Blend the clamp in, starting the carpal ease during breakover (S).
    - [ ] B. Keep the humerus inside ARM_RANGE in stance (M; root cause).
  - Decision / notes: ____

### Race

- [ ] **A-RACE-01 Racing-gallop footfalls bunched in pairs; airborne 43% of the stride** — high. The headline gait reads as two doublets and a long float.
  - Observed: land RH 0 / LH 0.09 / RF 0.27 / LF 0.37, duty 0.2. Lags 39/77/43 ms. Overlap 0.23 (~99 ms). Aerial 0.43 (~185 ms; 13/32 samples; 3 of 8 side tiles airborne). A stride slider above 1 lengthens the aerial phase further.
  - Real horse: At 17 m/s: aerial ~119 ms (~28–29%; Witte 2006; race starts 28%, Leach 1987), overlap ~35 ms, fore 77 / hind 94 ms. Individual lags are not reported, only bounded: hind and diagonal ~50–94 ms, fore ~30–77 ms; none as short as 0.09–0.10 of the stride. Hind and fore pair timing differ (Leach 1987).
  - Where: :213-216; :1376-1383; :1542-1570 (BODY.race phases keyed to the long aerial).
  - Fix options (choose one):
    - [ ] A. Retime the land table to ~{0, 0.17, 0.36, 0.53}, duty ~0.2, shift BODY.race phases ~+0.12 (S).
    - [ ] B. Lag parameters (hindLag/diagLag/foreLag + fore/hind duty) as style knobs (M).
  - Decision / notes: ____

- [ ] **A-RACE-02 Trunk pitch at gallop and race far too small; rocks about the croup** — high.
  - Observed: Race croup–withers pitch 7.6°, thorax 3.2°. Gallop 7.0° and 4.3°. Croup height range 3.0 cm (race) and 0.5 cm (gallop) vs withers ~12 cm. Rocking centre ~x −0.34. The tail head moves ~14 cm in antiphase. Pitch keeps rotating through flight (+55 → −43°/s).
  - Real horse: Withers IMU pitch range 11.2° at 7 m/s and 19.0° at 17 m/s, with a near-zero pitch-velocity plateau through the aerial phase (Pfau 2006). The thoracolumbar spine pitches largely as a unit (Faber 2001). Race should gain pitch, not more vertical bob. The model gallop (6.19 m/s) target of ~10.5° is extrapolated. "Pivot near the girth" and the croup–withers excursion are inferences.
  - Where: :1509-1539 BODY.gallop; :1542-1567 BODY.race.
  - Fix options (choose one):
    - [ ] A. Bigger pitch with no chest counter-rotation, pivot near the girth (S; check stance reach and reins).
    - [ ] B. Stance-driven C1 pitch curve with a flight plateau (M).
    - [ ] C. Physics-lite pitch from leg loads (L).
  - Decision / notes: ____

- [ ] **A-GAP-306 Low posture is a rigid 5 cm trunk drop that folds the proximal joints** — medium. The main control for ~12 low-runner quirks behaves wrongly.
  - Observed: bodyLow 1 in race: same excursion, elbow min 105→95°, stifle 90→79°, humerus reaches horizontal. Fore fetlock unchanged. Folded toe ~3 cm deeper into the barrel. Sweep grows only ~2–2.5°. In the default model the fore spring is already inverted: elbow→toe changes 3–6 cm, scapula→elbow 12–15 cm.
  - Real horse: Horses run lower through distal compliance (fetlock vs force; elbow→foot 127 mm vs proximal 12 mm; McGuigan & Wilson 2003) plus head/neck carriage. Hind stifle/hock flexion is legitimate. The thoracic sling also lets the trunk sink. Groucho running costs up to +50% (human data). A higher duty would lower peak force.
  - Where: :1717; :1386-1399; :1407; :3283.
  - Fix options (choose one):
    - [ ] A. Redefine low as compliance + small drop + head/neck link (M; don't raise duty).
    - [ ] B. Lower swing paths with the body (S).
  - Decision / notes: ____

- [ ] **A-GAP-404 Gait changes accelerate impossibly fast; each gait's legs cycle at the wrong cadence mid-transition** — medium. Only on manual gait clicks; 0.6 s.
  - Observed: Peaks: walk↔race ±38.4 m/s² (3.9 g), gallop↔race ±26.5, walk→gallop ~11.9, walk→canter ~8.7. Walk legs reach 10.6 Hz and gallop legs 6.5 Hz, while race legs start at 0.2–0.86 Hz. Adjacent gaits are within limits: walk→trot 5.4, trot→canter 3.3, canter→gallop 3.2 m/s².
  - Real horse: ≤~6 m/s² at low speed, then ~30 W/kg power-limited (Williams 2009). Walk→race takes ≥~5 s and ~53 m. Braking is lower (~3.9 m/s², ~−23 W/kg), so race→walk takes ~6.5 s. Cadence ~0.9–2.4 Hz (Witte 2006). Hard acceleration strikes off into canter from walk, not through trot.
  - Where: :4092-4095; :3345-3354; :1675-1693; :267-275.
  - Fix options (choose one):
    - [ ] A. Speed controller with a_max(v), braking limit and chained gaits; per-gait phase clocks (L).
    - [ ] B. Blend duration from |Δv|/a_max, separate phase clocks per gait (M).
  - Decision / notes: ____

- [ ] **A-RACE-04 Fore and hind share one duty and stance length** — low.
  - Observed: One G.duty; race 86 ms and 1.44 m stance for every leg.
  - Real horse: At 17 m/s fore duty 0.18 (77 ms, ~1.31 m) vs hind 0.22 (94 ms, ~1.60 m); at 9 m/s 0.27/0.29 (Witte 2006). No lead vs non-lead difference. The model gallop (6.2 m/s) is below the measured range, so keep a smaller split there.
  - Where: :274; :1382.
  - Fix options (choose one):
    - [ ] A. Per-limb duty with fallback; retime land[] together (S; hind reach).
  - Decision / notes: ____

- [ ] **A-GAP-105 Stride rate never depends on size; the hero's height sets the field's pace** — low.
  - Observed: tuneGait/makeGait keep T, so speed scales with s (Tokyo 15.25–17.55 m/s). Field pace follows the hero: Twin Turbo hero 15.77 m/s, Kitasan Black hero 17.05 m/s. run.stride already varies hero cadence (2.11–2.45 Hz). Every cadence and stride is individually realistic.
  - Real horse: Race pace is shared and roughly size-independent (max speed flat to falling at horse size: Hirt 2017; Usherwood & Gladman 2020). At a given speed, bigger horses take longer, slower strides. Above ~12.5 m/s speed comes mainly from stride length. Type differences (~±0.07 Hz) are as large as size effects (Schrurs 2022). Froude scaling suits walk, trot and canter only.
  - Where: :267-275; :3661-3662; :3442; :4094.
  - Fix options (choose one):
    - [ ] A. Speed-invariant gaits per reference speed (M).
    - [ ] B. Drive the Field scroll at RACE.speed (S).
  - Decision / notes: ____

- [ ] **A-GAP-302 Stride slider changes airtime but not the bounce** — low.
  - Observed: Fixed 0.05 m cosine. Crest acceleration 1.41 g (st 0.88), 1.08 g (1.0), 0.86 g (1.12). Averaged over flight: ~1.05 / 0.77 / 0.58 g. Roster range 0.95–1.10 gives 0.89–1.20 g.
  - Real horse: Withers acceleration in flight is about −1 g at every speed (Pfau 2006). Real aerial phase ~80 ms, about half the model's. "A stride runner bounces higher" follows only from the model's fixed-stance design. Real spread: ±3.5% in length and ~5% in frequency (Schrurs 2022); duty ~±7% between horses (Witte 2006).
  - Where: :256-264; :1545; :3280.
  - Fix options (choose one):
    - [ ] A. Scale the vertical amplitude by st² so the crest stays at ~1 g (S).
    - [ ] B. Ballistic parabola in the aerial window, derived from land/duty (M).
    - [ ] C. Narrow the range (S).
  - Decision / notes: ____

- [ ] **A-GAP-303 "Stride runner" gets no extra reach** — low.
  - Observed: Stance 1.40 m, xc, scapSwing and touchdown protraction are all unchanged. The overshoot grows only ±2.5 cm. All extra length goes into swing and airtime (292/344/396 ms).
  - Real horse: At a fixed speed, a longer stride must be mostly swing or airtime anyway (stance is ~20% of the stride). Stance duration doesn't track gait quality (Back 1994), and stayers spend less of the stride on the ground (Barrey 2001). The real gap is the limb range: scapular rotation and protraction/retraction (Back 1994). Witte's 6% is a population speed trend, not a limit between horses.
  - Where: :260; :274; :1384; :1450.
  - Fix options (choose one):
    - [ ] A. Split stride into reach + float (M; the "swing within ±5%" goal isn't supported).
    - [ ] B. Separate foreleg reach control for Oguri Cap and Almond Eye (S).
  - Decision / notes: ____

- [ ] **A-GAP-307 Low posture is constant from the gate; most sources describe a sink on acceleration** — low.
  - Observed: bodyLow scales only with gait. rig.push ramps 0→0.22 but only the jockey's hands read it. 8 of 11 bodyLow horses sink as they speed up (Haiseiko, Maruzensky, Mr. CB, Symboli Rudolf, Narita Brian, Orfevre, Satono Diamond, plus Oguri Cap per Washimi). Tamamo Cross, Mejiro Ardan and Biwa Hayahide are always low. Visible difference ~1–2 cm.
  - Real horse: Every horse compresses more with speed (Witte 2006; McGuigan & Wilson 2003); the model already shows this between gallop and race. The quirk is a posture change. Narita Brian's "front half drops" is a brief dip at the gear change (fits Williams 2009). Orfevre sank while keeping a short stride.
  - Where: :1717; :3649-3651; :1741.
  - Fix options (choose one):
    - [ ] A. Keep bodyLow constant; add a separate push-driven drive-sink for the group-(a) horses (S; don't scale everyone by push; clamp push ×1.2).
    - [ ] B. Forehand-pitch dip at the start of the push ramp (S).
  - Decision / notes: ____

- [ ] **A-GAP-311 No "spring" control for springy runners (Mr. CB, Silence Suzuka, Twin Turbo)** — low.
  - Observed: The race trunk amplitude is a fixed ±5 cm. Mr. CB gets only bodyLow 0.6 (3 cm lower).
  - Real horse: The gallop doesn't fit spring-mass mechanics (Pfau 2006). Vertical motion is ~83 mm at 17 m/s, ±10% between horses, and falls with speed while pitch rises to ~19°. A shorter contact means less compression (Farley 1993). The model already moves 100–126 mm with 7.6° pitch. Silence Suzuka's note is about suppleness.
  - Where: :1545; :1717; data/quirks.js:93, 282, 479.
  - Fix options (choose one):
    - [ ] A. Modest run.spring (±10–15%) carried mainly by pitch, neck, head and limb action; small duty change; sag follows load (M).
  - Decision / notes: ____

- [ ] **A-GAP-312 No light/heavy footfall control (Saint Lite, Daiwa Scarlet)** — low.
  - Observed: Shared fall and load curves, cosine trunk, phase-only dust. Mejiro Ardan's "heavy tank" is already mapped to bodyLow. Race touchdown already slams: the leg is fully straight and the fetlock drops 4–6 cm in ~13 ms.
  - Real horse: Impact is ~30 ms of passive loading (Hjertén & Drevemo 1993). Severity is set mainly by surface and shoeing (Setterbo 2009; Chateau 2010) and by horizontal braking time (Gustås 2001). Only ~13% of the amplitude reaches the metacarpus (Willemen 1999), so there is no visible trunk jolt. The anecdotes are subjective.
  - Where: :1388-1407; :1431-1432, 1463-1485; :1542-1567; :3079-3098.
  - Fix options (choose one):
    - [ ] A. run.footfall: hoof deceleration, early load rise and oscillation rhythm, after making the race touchdown reachable (S; no trunk jolt or dust link).
  - Decision / notes: ____

- [ ] **A-GAP-313 No whole-body action control (Inari One)** — low.
  - Observed: Race trunk motion is fixed; no slider scales pitch or gather. Race gather is already 18° peak-to-peak (pelvis line 22.5°), pitch 7.6°.
  - Real horse: The lumbosacral joint is the most mobile flexion joint (Townsend 1983), but the horse back is stiff: ~16° total flexion-extension at canter, L5–S3 ≤8.6° (Faber 2001), trunk pitch 2–8° (Dunbar 2008). "Uses the whole body" is best shown through limb reach and neck excursion.
  - Where: :1540-1553; :1709-1720.
  - Fix options (choose one):
    - [ ] A. run.bodyAction mainly on reach and neck/head pump; trunk only within ~0.8–1.1, ideally after lowering the base gather (S).
  - Decision / notes: ____

- [ ] **A-GAP-317 Stride slider quantised by short scenery loops** — low.
  - Observed: At W=65, Oguri Cap's 1.04 gives 0% stride change and −3.8% speed; 0.95 gives −10% / −5.3%. At W=400 the error is ≤~1–1.8 points. Per-value results depend on scale s.
  - Real horse: Oguri Cap's "+20–30 cm" comes from his owner and is ~3–4% (inside SL 7.30±0.39 m; Takahashi). It would show only in stride count or cadence. Constant speed is a modelling choice (Schrurs 2022: sprinter profiles are faster).
  - Where: :252-275; :4092-4094.
  - Fix options (choose one):
    - [ ] A. Derive T from the quantised stride (S; still hides 1.04 at W=65; extremes go ~3 SD out of range).
    - [ ] B. Longer stride-count basis on short loops, or a non-integer stride count (M).
  - Decision / notes: ____

- [ ] **A-GAP-318 No lead preference or drifting control** — low.
  - Observed: Lead comes only from the location. Lanes have no per-horse drift. 13+ notes are param:null.
  - Real horse: The turn dictates the lead. Preference shows as going better one way, or reluctance to change in the straight. Only 10 of 44 horses were significantly lateralised, with no population bias in 2,095 horses (Cully 2018). Drifting is partly situational (fatigue, whip). Lean during a drift is ~1–2°, and under correction the head turns away from the drift.
  - Where: :267-274; :3347; :3469-3508; :3719.
  - Fix options (choose one):
    - [ ] A. run.lead (turn lead + change behaviour) and signed run.drift with a both-ways option, scaled by fatigue/push; per-rig lead in gaitFor (S).
  - Decision / notes: ____

- [ ] **A-GAP-408 One fixed lead for the whole field; no lead changes** — low.
  - Observed: All 18 runners share loc.lead (Tokyo 'R'). The race is a straight scroll with no drawn bend, so 'R' is the correct straight lead. Footfall phases already differ between runners. The hoof teleport happens only via the debug console.
  - Real horse: Inside lead on bends, change in the straight to the easier lead (JRA 手前). Racing changes are often front-first with the hind 0–2 strides behind (FEI one-suspension change is the dressage ideal). Use "disunited", not "cross-firing". Late re-changes are anecdotal. ~19% of strides are on the outside lead when horses choose freely (Parkes 2020).
  - Where: :250-275; :3345-3362; :3719.
  - Fix options (choose one):
    - [ ] A. Flying-change routine with an optional hind lag (M).
    - [ ] B. Leads in the race story plus per-horse lead/leadChange (M).
    - [ ] C. Stopgap: seeded lead per field horse; quirk preference for the hero (S).
  - Decision / notes: ____

### Trot

- [ ] **A-TROT-01 Trot bounce and head nod inverted** — high. The legs are longest while bearing weight, so the horse vaults instead of bouncing.
  - Observed: Withers peak at g=0.156 (~39% of stance) and bottom at 0.406 (lift-off). Poll 1.867 vs 1.797. The code comment says the opposite.
  - Real horse: Minima at ~39–46% of fore stance and maxima near hoof-off (91–98%) for head, withers and pelvis (Rhodin 2022). Same in racing TBs (Pfau 2018). Amplitude is fine.
  - Where: :389 cyc; :1568-1579 BODY.trot.
  - Fix options (choose one):
    - [ ] A. Negate the term (−0.022·cyc(g,2,0.32)) and flip or shift the pitch, neck and head terms (S; touchdown reach ~97.9%).
    - [ ] B. Derive height from stance-leg loads (M).
    - [ ] C. Per-gait spring-mass table (M).
    - [ ] D. Automated phase check against Rhodin (S).
  - Decision / notes: ____

- [ ] **A-TROT-02 Trot excursion small; croup moves less than half the withers** — medium.
  - Observed: Withers 48 mm, croup 22 mm, tail head 3 mm, poll 70 mm. Spine and hips pitch cancels the croup motion.
  - Real horse: Withers and pelvis rise together by similar amounts (Buchner 1996; Rhodin 2022 Warmblood 92/89 mm, Iberian 66/71). Trot COM is 53 mm (Buchner 2000). Target ~60–75 mm, equal at withers and croup. Segmental flexion is 2.8–4.9° (Faber 2001), nearly in phase.
  - Where: :1570-1576.
  - Fix options (choose one):
    - [ ] A. Amplitude ~0.03–0.035 and drop the counter-pitch, done together with A-TROT-01 (S).
    - [ ] B. Spring-mass integration (M).
  - Decision / notes: ____

- [ ] **A-TROT-04 Walk and trot trunk moves as one rigid block** — medium. Shows from front and rear.
  - Observed: Withers z = croup z (±1 mm). Withers–croup line yaw 0.12°. Rigid roll ±1° walk, ±1.2° trot. Only spine.rotation.x rolls.
  - Real horse: Walk lateral bending up to 5.6° and axial rotation 4° (T6) → 13° (tubera coxae) (Faber 2000), i.e. ~±6.5° at the pelvis. Trot roll 4.6–5.8° (~2× the model) and bending 1.9–3.6°; whole-back 6.5–7.5° (Hardeman 2020). The trot roll must satisfy roll(g+½) = −roll(g): use 1st + 3rd harmonics, not cyc(g,2).
  - Where: :1572-1576; :1622-1626; :701-703.
  - Fix options (choose one):
    - [ ] A. Pelvic roll plus opposed lateral bend, with the harmonic note above (S).
    - [ ] B. Distribute rotations along the spine (M).
  - Decision / notes: ____

- [ ] **A-TROT-03 Departing forefoot meets the landing same-side hind (forging/scalping)** — low.
  - Observed: Contact for ~45 ms per stride on both sides (g≈0.94–0.0, 0.44–0.5). Hoof-into-hoof/pastern overlap 2–3.8 cm. The hind lands ~12 cm ahead of the fore print, and the tracks are only 1 cm apart. The fore already lifts faster than real (toe 14 cm up 59 ms after toe-off).
  - Real horse: Fore toe-off is only ~20–50 ms before hind contact (stance 43–46%; Horan 2023). The early-swing peak is ~13–16 cm (Gottleib 2025), so clearance is a few cm. Overtracking is normal (Clayton 1994). Contact counts as interference.
  - Where: :221-226; :1406; :1409; :552-553.
  - Fix options (choose one):
    - [ ] A. Faster fore pick-up (S; pushes further from real heights).
    - [ ] B. Retime: fore duty slightly lower (S).
    - [ ] C. Separate tracks (S; HIND.z 0.19 still overlaps).
    - [ ] D. Local collision guard or less overtrack (M; the geometric fix fits best).
  - Decision / notes: ____

- [ ] **A-TROT-05 Trot diagonals perfectly synchronous** — low. Optional polish.
  - Observed: LF=RH and RF=LH land and lift on the same frame.
  - Real horse: At ~3.3–3.6 m/s horses land hind-first, synchronous or fore-first in roughly equal shares (Hobbs 2016). The 29.8 ms hind lead is from elite Warmbloods (Holmström 1994). Hind-first lift-off is consistent (Clayton & Hobbs 2019).
  - Where: :221-223.
  - Fix options (choose one):
    - [ ] A. Small hind-first offset (RH 0.97 / LH 0.47; ~22 ms, also lifts first) (S).
    - [ ] B. Separate fore/hind duty (M).
  - Decision / notes: ____

- [ ] **A-TROT-06 Trot hoof flight too high (fore and hind)** — low.
  - Observed: Fore toe 0.32 m, fetlock 0.43 m. Hind toe 0.19 m, coronet 0.30 m. The forearm peaks at 48° (30–37° in the cited tiles); the near-horizontal segment is the curled pastern. kneeAction above 1 raises it further.
  - Real horse: Hoof peak at a working trot is fore 13.8±3.8 cm, hind 10.8±2.4 cm (Brown 2015; Gottleib 2025: 12.9–15.9 cm). Fore/hind ~1.3. The Hackney comparison doesn't apply.
  - Where: :224-225; :1401-1409; :256-264.
  - Fix options (choose one):
    - [ ] A. Lower fore lift to ~0.08–0.12 together with flex, and hind lift to ~0.08–0.10 (S).
    - [ ] B. kneeAction-based default (S; it scales every gait).
  - Decision / notes: ____

### Walk

- [ ] **A-GAP-401 Gait-change cross-fade drives hooves into the ground and drags them along** — high. Happens on every interactive gait change.
  - Observed: Every pair fails during the 0.6 s blend. Typical 2–10 cm penetration and 0.2–1 m skid; extremes −17 cm, coffin joint −7 cm, 1.4 m skid at up to 23 m/s. Steady state is fine.
  - Real horse: Hooves slip ~18–40 ms after impact, by cm, and sink a few cm (Horan 2024; Harvey 2012). "Within about one stride" holds only for adjacent gaits. Race pairs need 1.8–3.9 g, beyond the μ≈0.6 limit (Tan & Wilson 2011), so speed changes also need rate limits (see A-GAP-404).
  - Where: :1675-1693 (slerp after solveLeg at :1746); :3351; :4092-4095.
  - Fix options (choose one):
    - [ ] A. Blend foot targets, then solve once (M).
    - [ ] B. Per-leg handover at lift-off (M; per-leg state).
    - [ ] C. Ground clamp after the slerp (S; can pop).
  - Decision / notes: ____

- [ ] **A-WALK-01 Walk head nod in phase with the withers** — medium. The main walk cue.
  - Observed: Poll lowest at ~9% of fore stance and highest at ~51%, in step with the withers. Amplitudes are right (head 116 mm, withers 34 mm).
  - Real horse: Head lowest at 46–48% of fore stance and highest at 86–88% (fore double support); withers ~25% of a stride out of phase (Rhodin 2022; Loscher 2016: 25.0±2.5%).
  - Where: :389; :1619-1631.
  - Fix options (choose one):
    - [ ] A. Shift neck/head phases by ~0.45 cyc units (~0.225 stride) and raise neck1 amplitude, since the trunk bob adds ~17 mm in phase (S).
    - [ ] B. Head-mass pendulum (M).
    - [ ] C. Add Rhodin phase targets to the measurement script (S).
  - Decision / notes: ____

- [ ] **A-WALK-02 Walk croup nearly flat** — medium.
  - Observed: Withers 34 mm, croup 6 mm (peaks near hind touchdown), tail head 17 mm. Spine and hips pitch cancels it.
  - Real horse: The pelvis moves 66–79 mm, more than twice the withers (27–36 mm). It peaks at 51–57% of hind stance and is lowest at 8–11% (Rhodin 2022; Buchner 1996 tuber sacrale 5.7 cm). Griffin 2004 is a dog study. Faber's 7° is per-vertebra flexion.
  - Where: :1619-1626; :701-702.
  - Fix options (choose one):
    - [ ] A. Hind vault term, croup ±25–35 mm peaking at g~0.32/0.82 (S).
    - [ ] B. Fore and hind heights from their own stance pairs (M).
  - Decision / notes: ____

- [ ] **A-GAP-310 The Teio step can't be built** — medium. A walk quirk the user asked for.
  - Observed: Only the fore toe rises (15→~19.5 cm). Croup bounce 0.6 cm, fixed walk sag, no yaw.
  - Real horse: High carpal lift, plus hind lift (experts compared it to stringhalt), rump bounce (お尻が跳ね上がる), long compliant pasterns (deep, especially hind), diagonal travel. The step vanished at the gallop; the pasterns stayed (they are build). The yaw angle is unsourced. "Fetlock near the ground" is figurative. McQueen's "swagger" is an idiom; Sakura Laurel's chicken-like hind was juvenile.
  - Where: :236-242; :252-263; :503, 552-553; :1619-1626.
  - Fix options (choose one):
    - [ ] A. Walk style block: lift, bounce, crab, jig (M).
    - [ ] B. conf.pastern compliance used in every gait (S).
  - Decision / notes: ____

- [ ] **A-GAP-406 Background horses' legs jump at every gait change** — medium.
  - Observed: Parade 0.13–1.0 m in one frame (steady 0.07–0.12 m). Companion 0.45 m. Field 0.05–1.94 m. Hero unaffected. Setting ex.phase to 0 removes it.
  - Real horse: Limbs move continuously through a transition; there is no one-frame jump.
  - Where: :1680; :3662; :3782; :3755/3780 (pathS stale in the old gait).
  - Fix options (choose one):
    - [ ] A. Pass the old-gait phase (exact for parade; field needs its x-phase stored) (S).
    - [ ] B. Shared per-rig phase offset (S).
  - Decision / notes: ____

- [ ] **A-WALK-03 Walk lateral sway on the wrong side** — low.
  - Observed: Withers about +19 mm right during left-lateral support. The comment says the opposite. Not visible in the cited tiles.
  - Real horse: The COM sways toward the supporting pair, leftmost at g≈0.44 (inverted-pendulum estimate; MacKinnon & Winter 1993). Bending and rotation are one cycle per stride (Faber 2000). The roll is fine: the swing-side hip drops (keep its sign; maybe enlarge it at the pelvis).
  - Where: :1621-1624; :236-242.
  - Fix options (choose one):
    - [ ] A. Negate only position.z (e.g. −0.012·sin(TAU(g−0.19))) (S).
    - [ ] B. Derive from planted feet (M).
  - Decision / notes: ____

- [ ] **A-WALK-04 Default walk tracks up but doesn't overtrack** — low.
  - Observed: Hind toe lands 3.1 cm short of the fore toe on both sides. The comment claims overtrack. Roster stride ≥1.07 already overtracks 4.5–10 cm.
  - Real horse: It matches a collected walk (1.37 m/s, 157 cm, 1.16 s; Clayton 1995). Free TB walk ~1.6–1.8 m/s with ~1.8 m stride overtracks; the extra length comes from overtrack (Gmel 2024). The 10–25 cm figure is unsourced.
  - Where: :235-242; :1384.
  - Fix options (choose one):
    - [ ] A. Lengthen the walk (~1.8 m, ~1.05 s) (S; reach margin).
    - [ ] B. Re-centre the stances (S).
    - [ ] C. Walk-length style parameter (S).
  - Decision / notes: ____

- [ ] **A-WALK-05 Walk footfalls exactly even (25%) with one duty** — low.
  - Observed: land 0/0.25/0.5/0.75, duty 0.6 for all. The twice-per-stride rise is already prescribed.
  - Real horse: Median limb phase ~24% (Usherwood 2017). Only 1 of 6 horses was exactly even (Clayton 1995). Fore and hind stance differ ~1–2% (direction disputed). Real walk duty is ~0.63–0.67. Griffin 2004 is dogs.
  - Where: :235-242.
  - Fix options (choose one):
    - [ ] A. LF 0.24 / RF 0.74 at most (not 0.22) (S).
    - [ ] B. Per-horse lateralness parameter ~0.21–0.27 (S).
  - Decision / notes: ____

- [ ] **A-WALK-06 Walk hoof flight flat-topped and too high** — low.
  - Observed: Hind toe plateau ~11 cm for ~a third of swing. Fore peaks early (15.1 cm) then decays slowly. The same construction is used in every gait.
  - Real horse: Walk fore hoof peak ~8 cm at 1.5 m/s (Zellner 2017); hind lower. Fore flight is two-peaked (late-swing peak ≈ early); hind single-peaked (Gottleib 2025).
  - Where: :1405-1409; :240-241.
  - Fix options (choose one):
    - [ ] A. Skewed early-peak profile, hind only; walk lift ~0.08–0.10 (S).
    - [ ] B. Data-driven per-limb curves (M).
  - Decision / notes: ____

- [ ] **A-GAP-304 Racing-style leg settings apply at full strength at the walk** — low.
  - Observed: tuneGait is unscaled; neckPump and roll are unscaled. Stride 1.12 gives walk duty 0.536, swing 572 ms, +13 cm overtrack. 0.88 gives 0.68 / 308 ms / −16 cm. Trot suspension 29/72/115 ms. Still a valid walk.
  - Real horse: Walks lengthen by overtracking, with stride time slightly shorter (Clayton 1995), swing ~0.4 s and duty ~0.6. Overtrack for a long-strider and Teio's knees at the walk are realistic carry-over.
  - Where: :268; :1694-1720; :3347.
  - Fix options (choose one):
    - [ ] A. Fade by RUN_SPEED; apply walk stride as stance length; scale pump and roll by k (S).
    - [ ] B. Per-gait style blocks (M).
  - Decision / notes: ____

### Proportions

- [ ] **A-PROP-02 Back/loin too long; withers sit too far forward** — medium.
  - Observed: Withers to croup 0.982 m (60.5% WH). Skin length 1.09 WH; skeletal 1.02 WH (normal). Withers to point of shoulder 0.54 m. The croup peak sits over the hip joint.
  - Real horse: Back is 51–57% WH (Ünal 2025 81.2/157.9; Weller 87; Senna 92.5±5.7), so the model is ~6–12 cm long. TB body length ~0.99–1.03 WH. Senna shoulder 69±5 cm. Better to move the withers and scapula back than to compress the trunk, and to pair with A-HIND-01.
  - Where: :507-525; :702; :745; :748.
  - Fix options (choose one):
    - [ ] A. Compress back/loin and move hind parts forward (M; shrinks the base).
    - [ ] B. Trim the pointed caps (S).
    - [ ] C. conf.back parameter (M).
    - [ ] D. Move the withers peak and scapula back ~8–10 cm, keeping length (skeptic suggestion).
  - Decision / notes: ____

- [ ] **A-GAP-101 Weight slider only widens the trunk at a fixed height** — medium.
  - Observed: At pinned height (10/149 roster horses or after Height is moved), 400→560 kg gives girth 187.7→200.8 cm, volume +20% vs +40% asked, depth +1.3 cm. Weight-only horses get ~80% via height instead. Neck and limbs also scale. The baseline girth (194–195 cm) is ~5 cm above C&H.
  - Real horse: Girth ~√weight at a fixed frame. Realistic 440–510 kg at 163 cm gives ~182–196 cm. C&H overestimates racing TBs 6–8% (Secretariat: 193 cm girth, 513–524 kg), so use Y≈12,500–12,700. Condition shows as width and fat depots; depth is skeletal.
  - Where: :633-637; :725-739; :751; :687.
  - Fix options (choose one):
    - [ ] A. Calibrate bulk to a girth target (S).
    - [ ] B. Spread mass over regions plus a condition slider (M).
  - Decision / notes: ____

- [ ] **A-GAP-205 Quarters, barrel and chest sliders only scale half-widths** — medium.
  - Observed: Quarters 1.15 doesn't change the side silhouette (thigh relief over the rump even shrinks 3.3→2.7 cm). Rear width +~10% (visible). Barrel girth +1%.
  - Real horse: Heavy quarters show as a fuller posterior croup and thigh outline, the hamstrings carrying low into the gaskin, and width at the thighs. Muscling doesn't raise the bony croup summit. Matsuura SDs come from n=9 caliper widths. "Second thigh" means the gaskin. Stifles wider than the points of hip is a stock-horse ideal.
  - Where: :687; :731-737; :1184; :1223-1224.
  - Fix options (choose one):
    - [ ] A. Give quarters a profile: round the posterior croup and buttock, scale the hamstring mass (M; don't lift the croup peak).
    - [ ] B. Start the width ramp at the croup (S).
  - Decision / notes: ____

- [ ] **A-GAP-209 Leg proportions are global constants** — medium.
  - Observed: Fixed FORE/HIND/HOOF_H/PASTERN; uniform scale only. Leggy, short-cannon, high-hock and per-leg quirks are param:null. chestDepth and withers sliders give partial proxies.
  - Real horse: Lengths scale with height (Anderson 2004, moderate-to-strong). Variation is relatively small (Weller 2006). Mostafa values are mean±SD, skin-landmark. Cannon ±1–2 cm is realistic. Left/right asymmetry is mostly in the hooves. Mature horses are about level (Matsuura).
  - Where: :503; :552-553; :633-638; :1193-1231; :1371.
  - Fix options (choose one):
    - [ ] A. Per-rig limb table plus conf.cannon and leg length/depth (M).
    - [ ] B. Per-leg delta plus static pitch offset (M).
    - [ ] C. Leg length drives stride (S).
  - Decision / notes: ____

- [ ] **A-GAP-210 No back/loin length control** — medium.
  - Observed: All trunk and hind x positions are absolute. 11 long-bodied or short-coupled notes are param:null. Ratio is fixed at ~0.97–1.03. Red Desire's "long body" is mapped to barrel width.
  - Real horse: TB body length ≈ height (~0.99–1.0; Ünal 2025). Matsuura's 1.10 is mixed older riding horses. Haiseiko 163/171 = 0.95 (~1 SD). Notes describe whole-trunk length. Effects on motion are weak (Johnston 2002: lumbar lateral bending only). Body length doesn't predict distance aptitude.
  - Where: :507-525; :553; :653; :702; :748; :777; :1127.
  - Fix options (choose one):
    - [ ] A. conf.coupling scaling the thoracolumbar trunk through one x-helper (L).
    - [ ] B. Small extra bend only (S).
  - Decision / notes: ____

- [ ] **A-PROP-01 Head at the long end, neck at the short end** — low.
  - Observed: Head 0.661 m (0.670 m from the true poll, 41% WH). Poll to withers 0.84–0.85 m. Neck:head ~1.25. Topline:bottomline ~1.75 (the 1.3 figure was measured to a buried throat row).
  - Real horse: Ünal TB head 54.8 cm at 157.9 cm, measured to the os incisivum. Like-for-like the model is ~3–15% long. The 2/5-WH classical canon matches. The neck range across classical sources is 1.0–1.5 heads. The 1.6–1.8 target mixed two studies.
  - Where: :536-548; :675-696; :772; :3262.
  - Fix options (choose one):
    - [ ] A. Default head ~0.90–0.95 (slider min 0.88) (S).
    - [ ] B. NECK_BASE ~1.15–1.2 (S).
    - [ ] C. Trapezoid neck (M; skeptic says not needed).
  - Decision / notes: ____

- [ ] **A-GAP-102 Height and Weight sliders don't render what they show** — low.
  - Observed: Clamp 0.93–1.07, so 150/176 cm render 151.6/174.4. Godolphin Barb shows 146, the thumb sits at 150, and it renders 151.6. Dead weight ranges exist at extreme height/weight corners. For horses without a height, the weight slider moves height (1%/24 kg).
  - Real horse: Clamped corners correspond to realistic horses (~7–8.7 kg/cm). Height given weight is compressed toward the mean (~0.06–0.10 cm/kg), close to the current rule; M~h³ is a convention. TB range 157–173 cm typical; the roster has 146 cm.
  - Where: :150-151; :633-637; :3953-3954; :4051-4055.
  - Fix options (choose one):
    - [ ] A. Match clamps, show the rendered values, slider min ~145 (S).
    - [ ] B. Decouple weight from height (S).
  - Decision / notes: ____

- [ ] **A-GAP-103 Measured girth and cannon ignored; bone counts height twice** — low.
  - Observed: girthCm and cannonCm are never read (2 horses). Haiseiko renders 201 vs 188 cm girth and 24.3 vs 21.5 cm cannon. ~8 points of the cannon excess come from the 21.7 vs 20 cm baseline. Reference girth 195 cm (~3% big for every horse).
  - Real horse: Haiseiko's relative bone is ~1.0–1.03 (7.5 in/1000 lb). His 重戦車 label describes his running and frame; girth/height 1.10 is lean, so bulk <1 is right. Body length gap is only +2.6 cm. Efforia (yearling) and Kitasan (age 2) are not adult norms.
  - Where: :632-638; :729-739; :1209; :1225; research/workflows/horse-quirk-research.js:26.
  - Fix options (choose one):
    - [ ] A. Use measured values when present; re-centre the cannon ring (S).
    - [ ] B. Make bone relative to height in the quirk mapping (S; affects 1 value).
    - [ ] C. Body-length control (M).
  - Decision / notes: ____

- [ ] **A-GAP-107 Sex ignored by the build** — low.
  - Observed: Sex is a label only. The weight gap (486 vs 466 kg) is modelled. 'Heavy' build gives males crest 1.1 (29/112 vs 1/37). 6 explicit crests. Crest only lifts the line 7–14 mm; neck width ignores crest and sex.
  - Real horse: Racing-age dimorphism is ~3–4% mass and ~1–2 cm height (KY yearlings 461.7/446.8 kg). Crest and jowl belong to mature or stud stallions. The cited 2026 studies are Mugalzhar and Arab horses. Barrel depth in mares is a broodmare trait.
  - Where: :3191; :3293-3298; :675; :692; :751.
  - Fix options (choose one):
    - [ ] A. Small sex layer (colts +3–5% neck); stallion crest only at age 4+ or stud; quirks override (S).
    - [ ] B. Neck girth from weight, sex and crest (S).
  - Decision / notes: ____

- [ ] **A-GAP-108 Build labels barely change the body** — low.
  - Observed: Labels change only neck and crest. Bulk 0.957–1.045. No leg- or body-length control. 40/149 horses already get shape values from quirks. Barrel 53.6–58.5 cm at scale 1.
  - Real horse: In this roster 'compact' mostly means 小柄/華奢 and 'heavy' means 大型馬. Bone is an independent axis (Brooks 2010). Haiseiko's measured girth supports lower bulk; his trait is short coupling and short cannons. Uniform scaling is first-order correct. Many "leggy" notes describe foals. Average TB chest depth is ~48% WH.
  - Where: :633-637; :3293.
  - Fix options (choose one):
    - [ ] A. Shape defaults per label (rangy → shallower; avoid the compact/heavy defaults as proposed) (S).
    - [ ] B. Leg-length control (L).
  - Decision / notes: ____

### Trunk

- [ ] **A-TRUNK-01 Hindquarters a closed box: rear-bottom corner and rigid rump** — medium.
  - Observed: The trunk corner (−0.68, 0.85) sits ~10 cm behind the gaskin, making a ~12 cm × 28 cm concavity down to the hock. The rump doesn't follow the femur (race −7..+89°). Rear: flat, ~18 cm-wide apex with no buttock cleft. The femur is ~64% inside and forms the lateral rear outline. The gap apex is at ~0.85 m (not "split up behind"). Gaskin 18–25 cm deep.
  - Real horse: Continuous caudal outline from buttock to hock near the plumb line. Hamstrings move with the limb. The underline rises to the flank fold, with no belly visible behind the stifle in profile. Hams touch, then part well above the hocks (TB: near stifle height or above). "Second thigh" means the gaskin.
  - Where: :507-525; :412; :748; :1223-1224; :1298-1320.
  - Fix options (choose one):
    - [ ] A. Raise the rear underline (S; only with B or C, or it creates a split).
    - [ ] B. Rigid hamstring mass on the leg (M).
    - [ ] C. Skinned hamstring curtain (L).
    - [ ] D. Notch the rear rings (buttock cleft) (S).
  - Decision / notes: ____

- [ ] **A-TRUNK-02 Narrow, peaked croup and loin; single buttock cone** — medium. Rear, top and 3/4 views.
  - Observed: Croup ~29 cm wide at 10 cm down, ~36 cm at point-of-hip level, sides ~58°. Rear closes to one cone. No tuber coxae.
  - Real horse: Points of hip ~48–52 cm wide (Matsuura 2024: 52.2 cm, riding horses). A square to slightly pear-shaped rump is fine. Points of hip are soft prominences (Henneke). There are no visible points of buttock: two hams meet at a shallow crease. This is narrow-hipped, not "rafter-hipped".
  - Where: :412; :508-512; :740-745; :785/:795 (tack uses PROF.trunk).
  - Fix options (choose one):
    - [ ] A. Widen and flatten the upper 15 cm (wu ~0.95–1.0) (S).
    - [ ] B. Add tuber coxae and twin hams (M; seams in race).
    - [ ] C. Per-region cross-sections (L).
  - Decision / notes: ____

- [ ] **A-TRUNK-03 Withers hidden under the neck root** — medium.
  - Observed: Trunk peak (0.46, 1.625) sits under the crest (1.662). The topline rises 27° with no summit; a concave kink at x≈0.40. Mane starts at the summit. At withers +1 the summit is still 7 mm under.
  - Real horse: The T3–T9 summit (highest ~T4–T6) stands above the crest tie-in. Nuchal ligament inserts there. ~9 cm drop behind (Matsuura 2024). A dip in front is a fault (don't carve one). The mane may run back to about the summit.
  - Where: :507-529; :689-695; :734; :1105.
  - Fix options (choose one):
    - [ ] A. Move the neck root forward and down (S).
    - [ ] B. Taller, longer withers ridge (M).
    - [ ] C. conf.withers also lowers the neck root (S).
  - Decision / notes: ____

- [ ] **A-GAP-203 Withers slider never forms a summit** — medium.
  - Observed: Bell peak at 0.46 stays under the crest (1.655 vs 1.662). It only changes behind the neck root: ±2.2 cm at 0.40 and a neck-root step 4.3/2.1/0 cm. "High" blurs the back into the crest.
  - Real horse: The summit stands above the back and the crest tie-in. A ~9 cm drop is common to all horses (model already has it). Mutton withers are rare in TBs and look like the current blend. No source sets a ±5 cm range.
  - Where: :734; :507-534; :689-695; :3271.
  - Fix options (choose one):
    - [ ] A. Add a trunk row near x 0.38–0.42 and lower/move back NECK_ROWS[0] at the high end (M).
    - [ ] B. Dedicated withers ridge (S).
  - Decision / notes: ____

- [ ] **A-TRUNK-04 Barrel slightly big for 475 kg** — low.
  - Observed: Heart girth 1.95 m (ratio 1.195). Girth floor 13 cm below the elbow. Underline already rises 6 cm. tuckUp exists (default 0).
  - Real horse: ~1.85–1.91 m for 475 kg (Secretariat scaled; C&H overestimates TBs). The excess is depth (chest ~49% vs ~45% WH). A fit TB belly rises gently; herring-gutted is a fault.
  - Where: :507-525; :683; :725-739; :3272.
  - Fix options (choose one):
    - [ ] A. Raise the girth/mid-belly floor (~0.88–0.90) (S).
    - [ ] B. Small non-zero tuckUp default (S).
  - Decision / notes: ____

- [ ] **A-TRUNK-05 No respiratory flank motion** — low.
  - Observed: Barrel shape varies ~1.5 mm. Only a 4 mm graze bob and cold-weather nostril puffs.
  - Real horse: 10–14/min at rest, visible mostly at the flank (Koterba 1988). 1:1 with the stride at canter and gallop (Young 1992). The gallop shows as millimetres of girth change; obvious heaving comes after the race.
  - Where: :701-706; :748; :1508-1662; :2966-2993.
  - Fix options (choose one):
    - [ ] A. Flank/belly breathing via a ribs bone: ±0.5% rest, ±1% gallop, low point in fore stance; reuse buildBreath timing (M).
  - Decision / notes: ____

- [ ] **A-GAP-202 chestDepth/tuckUp underline composition** — low.
  - Observed: Visible underline from girth to front of stifle rises under tuck in all tested combos. The rows behind the stifle are thigh. chestDepth 0.9 alone sags ~2 cm (window x>−0.25). The tuck bell peaks inside the stifle. During gait the stifle swings back and briefly exposes 4–5 cm of downslope.
  - Real horse: Deepest at the girth, rising to the flank fold; behind it is limb outline (stifle and hamstrings descend). Level bellies occur in unfit horses.
  - Where: :729-739; :507-521; :1223-1224.
  - Fix options (choose one):
    - [ ] A. Make chestDepth a ramp fading to the flank; move the tuck ramp to ~x −0.05..−0.3 (S; don't raise or clamp the rear rows).
  - Decision / notes: ____

- [ ] **A-GAP-206 Tail set moves only the dock; no croup/pelvis control** — low.
  - Observed: Tail root ±2.5 cm, ±14°. Croup and HIND.hip fixed. Standing and walk tails already hang 56–61° at −1. 2 horses use it.
  - Real horse: Flat croup → high tail is a tendency only. Croup and pelvic angle can vary independently. Weller's coxal angle is ilium–ischium shape (preliminary, NH horses).
  - Where: :684; :1127; :507-509; :553; :1639/1658.
  - Fix options (choose one):
    - [ ] A. Croup-slope control rotating rear rows, tail and acetabulum (M).
    - [ ] B. Couple the croup end to tailSet (S).
  - Decision / notes: ____

- [ ] **A-GAP-409 Parade-ring bends: no lean, bend or head inside** — low.
  - Observed: Upright and straight on the 11.4 m bend at every gait; any gait is allowed. The paddock is a walk location.
  - Real horse: No lean at walk. Lean ~1–3° below atan(v²/gR) (Egenvall 2023; Pfau 2012). Egenvall's numbers are from an ~9 m-diameter lunge circle; scaled to 11.4 m: back bend ~2–2.4°, head a few °. Grip caps speed at ~8.2–8.8 m/s (Tan & Wilson 2011).
  - Where: :3741-3757; :1508-1662; :1803-1818; :3345-3347.
  - Fix options (choose one):
    - [ ] A. Feed curvature into the pose (lean only if fast gaits are kept; total bend ~0.5 m·k) (M).
    - [ ] B. Cap or restrict gaits on the ring; inside lead from path.dir (S).
  - Decision / notes: ____

### Canter

- [ ] **A-CANTER-01 Canter neck nod ~0.35–0.45 of a stride out of phase** — medium.
  - Observed: Neck-to-trunk highest ~0.56–0.6, lowest ~0.06. Gallop and race are timed correctly. Neck amplitudes already match Dunbar (12.3–12.6 vs 12±4°; 7.1–7.7 vs 8±3°). Only head-on-neck (~5 vs 11±3°) is low.
  - Real horse: Neck lowest near leading-fore touchdown (~0.45–0.5), highest late suspension (Dunbar 2008, n=3). Head-on-neck timing is uncertain.
  - Where: :1602-1604; compare :1520-1522, :1551-1553.
  - Fix options (choose one):
    - [ ] A. Shift phases ~+0.35–0.45; keep or cut neck gain (0.5–0.7×); raise head-on-neck only (S; not "enlarge neck1").
    - [ ] B. Key the nod to lead-fore touchdown (S).
    - [ ] C. Couple neck to trunk pitch (M).
    - [ ] D. Per-gait nod gain (S; amplitude only).
  - Decision / notes: ____

- [ ] **A-CANTER-02 Canter bounce and head/pelvis pitch about half of real** — medium.
  - Observed: Withers 8.3 cm, dock 10.9, poll 11.9. Head pitch 4.4°. Pelvis 10.7°. Withers–dock pitch 6.9°.
  - Real horse: Withers 18±5, dock 20±4, ear 23±5 cm; trunk pitch 8±1°; head 10±4° (Dunbar 2008). Pelvic pitch ~15° (Egenvall 2023; Faber 2001 15.8±1.3°). Trunk pitch is roughly right; keep the back flexion.
  - Where: :1593-1617.
  - Fix options (choose one):
    - [ ] A. Height amplitude ~0.07–0.085, hips gather ~4.5–5° (pelvis ~15°), head ~8–10°, spine pitch ~2.5–3° (S).
    - [ ] B. Shared stance-driven body model (M).
  - Decision / notes: ____

- [ ] **A-GAP-402 Transition footfalls aren't a gait** — medium. Lasts 0.6 s per click.
  - Observed: Irregular orders (trot→canter RH,LF,RH,LH+RF,LF). Genuine re-steps (>8 cm) in 18/80 runs; most "stutters" are 1–3 cm bobs. All-four-down frames in 12/80. The new gait's start phase follows the loop clock. Steady footfalls are correct after ~0.7 s.
  - Real horse: No re-landing sooner than stance plus swing; at most a diagonal pair together. Trot→canter takes ~2.5 strides, initiated by an early, short fore placement (Nauwelaerts 2013). "Outside hind first" is the FEI stride definition, not the transition sequence. Canter→gallop and gallop→race keep the lead and change continuously.
  - Where: :1675-1693; :3345-3362; :3753-3758.
  - Fix options (choose one):
    - [ ] A. Phase-aligned switch with a per-rig offset (M).
    - [ ] B. Per-leg footfall scheduler (L).
  - Decision / notes: ____

- [ ] **A-CANTER-03 Canter diagonal lands and lifts together** — low. Within normal range.
  - Observed: LH and RF at 0.27 and 0.65.
  - Real horse: At extended canter the diagonal interval is ~0, and order varies by horse (Clayton 1993, incl. TBs). Collected canter is fore-first in 9/11 horses (Burns & Clayton 1997). Hind-first belongs to the gallop and pirouettes.
  - Where: :229-234.
  - Fix options (choose one):
    - [ ] A. Optional signed per-horse knob, default 0 (±0.02–0.04) (S).
  - Decision / notes: ____

### Gallop

- [ ] **A-GALLOP-01 "Gallop" uses trot-length strides at racing cadence** — medium.
  - Observed: T 0.42 s, 2.6 m, 2.38 Hz, 6.19 m/s. Stride shorter than the canter's (2.955 m); cadence above race (2.33 Hz). Duty 0.35. Swing 0.27 s. Roster 2.17–2.51 Hz. Used by the Countryside trail and the Gallop button only.
  - Real horse: 2.02 Hz at 9 m/s to 2.41 at 17 (Witte 2006; fit f = 1.7052+0.0305v+0.0004v²). ~1.9 Hz / ~3.3 m at 6.2 m/s (extrapolated; Heglund & Taylor 1988). Race already matches.
  - Where: :203-208.
  - Fix options (choose one):
    - [ ] A. Make it a 9–10 m/s gallop (T ~0.49 s, ~4.5–4.8 m) (S).
    - [ ] B. Keep 6.2 m/s, T ~0.53 s, ~3.3 m (S).
    - [ ] C. Speed-driven cadence (M).
  - Decision / notes: ____

- [ ] **A-GALLOP-02 Canter and gallop too flat; croup barely moves** — medium.
  - Observed: Spine pp: canter 7.0, gallop 8.0, race 10.0 cm. Croup 7.2 / 0.5 / 3.0. Canter crest acceleration only 3.8 m/s². Gallop and race ~1 g. Race is only ~20% over.
  - Real horse: COM 185 mm at 7 m/s → 83 mm at 17 m/s; −1 g in flight (Pfau 2006). Canter withers 18±5, dock 20±4 cm (Dunbar 2008). Cosine amplitude is capped at gT²/4π² (gallop T 0.42 → ~8.8 cm pp), so a fuller gallop also needs a longer T.
  - Where: :1513; :1545; :1596.
  - Fix options (choose one):
    - [ ] A. Canter ~0.07–0.085; gallop with longer T; race ~0.04; dock follows (S).
    - [ ] B. Ballistic flight plus stance dip (M).
  - Decision / notes: ____

- [ ] **A-GAP-405 Re-switching gait mid-blend: 3× speed jump, hooves skate metres** — medium.
  - Observed: Walk→race then gallop at 0.2 s: 4.6→16.8 m/s in one frame, then 6.2. 3–4.3 m skids on 1–2 hooves. Trot→canter→trot: ~4 g, 1–2 m skids.
  - Real horse: Speed is continuous; max ~6 m/s² (Williams 2009). Slip is cm-scale at impact (Holden-Douilly 2013).
  - Where: :3345-3352 (from = target gait, frozen pose); :4092.
  - Fix options (choose one):
    - [ ] A. Carry the current rate and keep the old pose live (S).
    - [ ] B. Queue the request to a safe beat (S).
  - Decision / notes: ____

- [ ] **A-GALLOP-03 Hind leg leaves the ground with little hip retraction** — low.
  - Observed: Gallop lift-off at ~−14..−17° limb angle (femur still 23–31° forward); stance centred ~0.14 m ahead of the hip. Hock does recoil 142→152°. Stifle stays ~102°. Trot stance centred ~+0.09 m.
  - Real horse: The hip extends and retracts the limb to lift-off (Hodson 2001; Dutto 2006). The tarsus recoils elastically. The stifle stays flexed or flexes further, so don't extend it. Caudal bias suits walk/trot and the trailing hind (St George 2023).
  - Where: :207; :225; :1394-1408.
  - Fix options (choose one):
    - [ ] A. Late-stance extension term (M; drop stifle extension, use femur retraction only).
    - [ ] B. Shift trot/gallop hind xc back 0.10–0.15 m (S).
  - Decision / notes: ____

### Jockey and tack

- [ ] **A-JOCKEY-01 Feet not in the irons; no leathers; knees splayed** — medium.
  - Observed: Irons are always the run-up boxes 17–19 cm from the feet; no leathers. Boot surface ~7–8 cm off the cloth. Knee at z 0.28, about 19 cm above the back. The irons themselves float ~8 cm off the barrel.
  - Real horse: Short irons on leathers carry the weight (Walker 2016); feet move with the horse. Knee near withers height against the knee roll. A correctly placed foot is still ~6–8 cm off the hair. Toe-only and acey-deucey styles are normal.
  - Where: :868; :957; :884; :1726-1731.
  - Fix options (choose one):
    - [ ] A. Irons and leathers under the feet when ridden (S).
    - [ ] B. Re-pose legs from rowAt (M).
    - [ ] C. Leg IK pinned to trunk-skinned irons (L; most faithful).
  - Decision / notes: ____

- [ ] **A-JOCKEY-02 Rider bolted to the spine; same crouch at every gait** — medium.
  - Observed: Race head 14.0 cm, seat 12.6, withers 12.6, all in phase. 30% of pitch stays. Full crouch at a walk.
  - Real horse: Jockeys decouple from the horse (Pfau 2009). Jockey near-COM ~0.65× the horse (Horan 2021: ~8.5 vs ~13 cm) with a slight lag; fore-aft isolation strongest. Legg 2025's 0.06 m is a filtered 3D mean, not a per-stride bob. Hands following the head nod is realistic. Riders are upright or two-point at walk/trot.
  - Where: :884; :1726-1731; :1545; :877-964.
  - Fix options (choose one):
    - [ ] A. Low-pass vertical (seat ~0.6–0.7×) (S; legs must re-solve or they leave the irons).
    - [ ] B. Phase-lagged spring rider (L).
    - [ ] C. Gait-dependent posture (S).
  - Decision / notes: ____

- [ ] **A-JOCKEY-03 Reins pass through the neck** — medium.
  - Observed: 20–23% of each rein inside the neck in every race phase (≤~3 cm), 23–26% at gallop. Hands are not hovering: 2.6–6.8 cm from the neck and they clip into it (gallop: half inside).
  - Real horse: Reins run taut from the bit along the upper neck to bridged hands; never through. Hand height varies by jockey. Running martingale: a straight line from hand to bit.
  - Where: :945; :1073; :1245-1291 (fixed 5 cm sag at :1260).
  - Fix options (choose one):
    - [ ] A. Route via a neck waypoint at half-width + margin; drop sag at speed (S).
    - [ ] B. Hands onto the neck (S; don't lower further; fix clipping instead).
    - [ ] C. Per-frame push-out (M).
  - Decision / notes: ____

- [ ] **A-JOCKEY-04 Overgirth floats; girth passes through the elbow** — low.
  - Observed: Overgirth 4.2–6.1 cm off (hangs below the belly). Girth 0.8–2.9 cm off. Race g 0.375–0.875: up to 7/48 vertices inside the forearm/humerus, up to ~4 cm, mainly in early swing.
  - Real horse: Girth in the groove ~a hand behind the point of elbow. Overgirth tight over the saddle (Wikipedia). The elbow may touch (girth galls) but never passes through.
  - Where: :783-786; :864-867; :1204-1208.
  - Fix options (choose one):
    - [ ] A. Height-dependent overgirth offset (S).
    - [ ] B. Move tack back 4–6 cm or limit swing humerus retraction (S).
  - Decision / notes: ____

- [ ] **A-JOCKEY-05 Jockey thighs short, forearm/shank long** — low.
  - Observed: Thigh 0.319, shank 0.406, upper arm 0.227, elbow-to-wrist 0.280 m (forearm tube ends at the fist; elbow-to-grip 0.314).
  - Real horse: Joint-centre upper arm ~0.165H, forearm ~0.15H (Winter's 0.186H is from the acromion). Thigh ~0.24H, shank ~0.25H. Main errors: forearm, shank and thigh; upper arm ~10% short.
  - Where: :879; :945-957.
  - Fix options (choose one):
    - [ ] A. Derive from stature (~1.58 m) using joint-centre fractions (S; knees move toward the withers).
    - [ ] B. Jockey build parameters (M).
  - Decision / notes: ____

- [ ] **A-GAP-106 Jockey, cloth and camera scale with the horse** — low.
  - Observed: Rider ~1.51 m × s (1.41–1.63 m). Auto-fit camera hides size when comparing horses. Moving the Height slider does visibly resize (no refit). Rail and field still show size.
  - Real horse: Riders are absolute size, ~1.50–1.72 m (Take 171, Nakadate 152). JRA cloth is a fixed 51×69.5 cm. Weights 49–60 kg, typically 54–58. The ratio is one size cue among several.
  - Where: :653; :849-870; :877-884; :3164-3168; :3795.
  - Fix options (choose one):
    - [ ] A. Counter-scale rider and tack with a jockey-height parameter (M).
    - [ ] B. Stop auto-zooming on size (S).
  - Decision / notes: ____

- [ ] **A-GAP-314 No "leaning on the bit" control (Ines Fujin)** — low.
  - Observed: No per-horse pitch offset; hands re-centre on a running mean (±6 cm); no rein tension or length. Head/neck carriage already exists via headCarriage. The pivot cancels 70% of pitch.
  - Real horse: Ines Fujin leaned on the bit because of a front/back imbalance; a pull unbalanced him. Show heavier, steadier contact with hands forward and down. A small forehand load shift (Weishaupt 2006, walk). Any downhill look is build, not gait. Katsuragi Ace is the opposite: longer rein, lighter contact.
  - Where: :1709-1720; :1726-1741; :1241-1290.
  - Fix options (choose one):
    - [ ] A. run.lean: contact weight, hands forward, slight neck extension; optional small pitch offset as style (S).
  - Decision / notes: ____

### Ears

- [ ] **A-EARS-01 Ears are solid base-widest pyramids with no opening; can't swivel** — medium.
  - Observed: ConeGeometry(0.036, 0.15, 4) scaled (0.62, 1, 1); 7.2×4.5 cm base, linear taper. Faces point mostly fore and aft. No dark tip at all (the `c.y>0.1` branch never fires). Only tilt and lean are animated.
  - Real horse: Lanceolate, widest at the middle, funnel base, pointed tip (Sisson 1914). Opening forward when pricked, with rotation about the long axis. Ears move independently (EquiFACS EAD101–104; there is no EAD105). Pinna shape varies little between horses; size, set and carriage vary more.
  - Where: :990-1001; :1057 hood covers; :1524-1527, 1554-1557, 1605-1608, 1663-1670.
  - Fix options (choose one):
    - [ ] A. Leaf or scoop ear with a pale concha (M; rebuild hood covers).
    - [ ] B. 3-sided cone, flat forward face (S).
    - [ ] C. Ear-swivel joint (S).
    - [ ] D. Ear-shape quirks (M; low priority given low real variation).
  - Decision / notes: ____

- [ ] **A-GAP-407 Ears and mane snap 14–35° at a gait change** — medium.
  - Observed: Walk→race ears ~24°, mane ~33° in one frame. Neck moves 2–3° (normal per-frame). Forelocks snap too. Ear/mane meshes are excluded from the blend.
  - Real horse: The mane is passive and must change gradually. Ears are voluntary and attention-driven; they can flick fast and independently, so only a zero-duration symmetric jump is wrong.
  - Where: :1682 (`!o.isMesh` filter); :990-1001; :1087-1122.
  - Fix options (choose one):
    - [ ] A. Drop the !isMesh filter or add the ear/mane meshes. Do not use skeleton.bones: it lacks the limb and tail joints (S).
  - Decision / notes: ____

- [ ] **A-EARS-02 Ears never point forward; ears in lock-step at speed** — low.
  - Observed: Default ears never pass vertical (walk at rest −12..−1°). Flick only goes back. L/R difference ≤4–6° at speed. earTilt −1 does reach +14° at walk. earsAtSpeed +1 already lies along the skull. 2× flap ±3–5° at gallop/race only.
  - Real horse: Neutral ears are upright, to the side, or loosely back; forward when attentive (Dyson & Pollard 2024: 77.6% forward/erect/side). Racing ears vary; laid back under drive is common. Pinned means flattened and abducted (EAD103).
  - Where: :997; :1524-1527; :1554-1557; :1605-1608; :1664-1670; :1718.
  - Fix options (choose one):
    - [ ] A. Neutral ~0..+10° with forward episodes; flicks both ways (S).
    - [ ] B. Independent ears with seeded states (forward / one back / laid back); 1× bounce (S).
    - [ ] C. Ear yaw channel (M).
  - Decision / notes: ____

### Chest

- [ ] **A-GAP-201 Chest depth slider moves the floor but not the elbow** — medium.
  - Observed: Floor-to-elbow: neutral 13 cm, 0.90 → 5.5–6.4 cm, 1.12 → 21.9 cm. At 1.12 the barrel encloses the inner 4–7 cm of the upper forearm. At 0.90 the elbow and arm hang below a trunk that ends above y 0.95. The breast drops 9 cm in front of the forearm. Two roster horses use it (1.07, 1.10).
  - Real horse: The elbow lies against the sternum. Deeper-bodied horses have lower elbows (Adams & Stashak: depth vs leg). The floor-to-elbow offset is ~5–18 cm, not fixed. Couple the elbow at ~60–100% of the floor change.
  - Where: :681; :730-735; :552; :1193; :3267.
  - Fix options (choose one):
    - [ ] A. Elbow (and knee) follows the floor in a per-rig FORE copy (M).
    - [ ] B. Split into girth depth and leg length/depth controls (M).
    - [ ] C. Stopgap: window x≤0.45, ±5 cm (S).
  - Decision / notes: ____

- [ ] **A-CHEST-01 Forehand a little wide across the arms** — low.
  - Observed: 44.4 cm at the points of shoulder, 47.3 cm across the arms, 49 cm at the elbows. Hooves 33 cm on centre, each under its shoulder joint. chestWidth min still gives 40.9/43.8 cm.
  - Real horse: 39–45 cm at 163 cm (Matsuura 38.6 at 160; Turkoman 38.9; Ünal TB 43.75). The plumb line from the point of shoulder bisects the limb, so 30–36 cm hoof spacing is right; 0.14 would be base-narrow.
  - Where: :552; :682-687; :736; :1201-1208; :3268.
  - Fix options (choose one):
    - [ ] A. Thin the humerus/triceps/forearm sections (~0.06) and front rows −5–10%; FORE.z ≥0.15 (S).
    - [ ] B. chestWidth also scales limb thickness (M).
  - Decision / notes: ____

- [ ] **A-CHEST-02 Breast projects forward (mild pigeon breast)** — low.
  - Observed: Cap (0.86, 1.18) is 4–6 cm ahead of the point of shoulder. Breast meets the forearm flush. Girth is already the deepest point. 45° slope. Humerus 47° (elbow 24 cm behind the shoulder joint).
  - Real horse: The point of shoulder is the most cranial point. A pectoral bulge is normal. The breast meets the forearm near girth line + a few cm (~elbow height). Real breast projection ~17–21 cm ahead of the forearm vs the model's 23–28.
  - Where: :507-525; :745; :1193-1208.
  - Fix options (choose one):
    - [ ] A. Pull the last ring and cap back 3–5 cm, raise bottoms at x 0.68–0.81 by 3–5 cm (S; don't raise the floor at 0.58).
    - [ ] B. Shape pectorals instead (S).
  - Decision / notes: ____

- [ ] **A-CHEST-03 No pectoral masses, groove or inverted V from the front** — low.
  - Observed: The single bottom vertex hangs as a keel (centre 3–4.5 cm below corners), the opposite of a median groove.
  - Real horse: Descending pectorals form two masses with a median groove; the transverse pectorals fill the inverted V between the forearms. Shallow in TBs.
  - Where: :412; :520-524.
  - Fix options (choose one):
    - [ ] A. Pectoral blobs plus a groove limited to rows x≥0.58 (S).
    - [ ] B. Two-lobed breast profile (M).
  - Decision / notes: ____

### Deformation

- [ ] **A-DEFORM-01 Rigid thigh shell reads as a shelf/plate against the flank** — medium.
  - Observed: Protraction (race g~0.72–0.94): upper-front edge is a horizontal shelf. Extension (~0.28–0.38): front edge is a vertical plate. Outside-the-trunk fraction is 48–50% at rest, so it's an edge problem, not penetration. Femur 1–77° relative to the hips.
  - Real horse: Continuous hindquarter with mobile skin (greater trochanter skin 13–17 cm at walk, 142 mm mean at trot; van Weeren 1990). Soft folds, no seams. The protraction shelf is partly the unreal femur angle (see A-HIND-06).
  - Where: :1223; :748; :1432, 1479-1485; :1298-1345.
  - Fix options (choose one):
    - [ ] A. Skin the proximal thigh into the body (M).
    - [ ] B. Stifle-fold strip (M).
    - [ ] C. Reshape the rigid shell rings (S; don't hide the thigh inside the trunk).
  - Decision / notes: ____

- [ ] **A-DEFORM-02 Grazing neck: crest stretched ~2×, mane roots slide** — low. Background grazers only.
  - Observed: Crest ring 0–1 edge 0.221→0.450 m. Mane blades lift off by up to ~20 cm (withers) and 7–10 cm mid-neck. The throat inverts in the mesh, but those faces are hidden inside the chest.
  - Real horse: Lowering happens mostly at the cervicothoracic base and the poll opens (Clayton 2010), so the bone pose is realistic. Soft tissue makes a smooth arc, and the mane stays rooted. The ventral base creases; the throatlatch opens.
  - Where: :1643-1661; :762; :1101-1122; :1293-1320.
  - Fix options (choose one):
    - [ ] A. Spread the bend (S; skeptics: lifts the muzzle and contradicts the in-vivo data).
    - [ ] B. More base rings plus a neck0 bone (M).
    - [ ] C. Skin the mane roots (S).
  - Decision / notes: ____

- [ ] **A-DEFORM-03 Lumbosacral bend spread through the loin** — low.
  - Observed: Bend spread over ~25 cm centred at x≈−0.33. Pivot is 21.5 cm cranial of the hip joint (about right relative to the femur); the croup peak sits over the hip joint.
  - Real horse: LS joint is the most mobile caudal segment (Townsend 1983; Haussler 2001). Faber 2001's 8.6° is L5–S3 (two joints), Warmbloods. The loin still bends somewhat (~9° FE at canter).
  - Where: :702; :748; :777; :1517, 1549, 1600.
  - Fix options (choose one):
    - [ ] A. Move the pivot with the pelvis fix and tighten keys (~[−0.40/−0.48], [−0.22/−0.30]) (S).
    - [ ] B. Lumbar bone (M).
  - Decision / notes: ____

### Head

- [ ] **A-HEAD-01 Eyes float off the head; skull narrows at eye level** — medium.
  - Observed: Gap 0.5–3.7 cm, no contact. Head 16.6 cm at eye height (forehead ~12 cm), widest 22.3 cm below and behind the eye. No orbit rim, brow or lid. Visible from front, top and 3/4.
  - Real horse: Complete orbit. Forehead ~19 cm, zygomatic ~22.6 cm (Merkies 2020); the zygomatic arch being widest (below/behind the eye) is fine. Subtle brow in young TBs. Prominent globe: ~23.8 cm across the corneas is already right, so don't pull the eyes in.
  - Where: :984-986; :536-545; :969-971.
  - Fix options (choose one):
    - [ ] A. Seat the eye and add a brow (S; skeptics: don't move the eye inward to 0.08).
    - [ ] B. Widen the head at eye height (M; preferred).
    - [ ] C. Almond eye with a lid (M).
  - Decision / notes: ____

- [ ] **A-HEAD-02 Nostrils small, flush, sideways, never flare** — low.
  - Observed: Protrude 0.69/0.34 cm. Visible ~3.7×3.0 cm. Contrast 1.2–1.4 on dark muzzles. Overlaps the trunk "static nostrils" item.
  - Real horse: Obligate nasal breathers, 1 breath/stride at canter (Young 1992). Nostrils flare during exertion (Holcombe 2002). The soft alar fold flares outward and upward. Flare is graded with speed.
  - Where: :979; :987-989; :2966-2990.
  - Fix options (choose one):
    - [ ] A. Bigger, forward-facing nostrils (S).
    - [ ] B. Flare with breathing and speed (S).
    - [ ] C. True opening in the loft (L).
  - Decision / notes: ____

- [ ] **A-HEAD-03 Forelock sticks out like a horn** — low.
  - Observed: Leaves the face at 18°, tip 4–5 cm off. In race it pivots to 25–36° forward-up.
  - Real horse: Lies on the forehead at rest. At speed it lifts and streams up and back over the poll, so lifting isn't the error; the direction is.
  - Where: :1087-1099; :1558-1561.
  - Fix options (choose one):
    - [ ] A. Lay it on the face (S; must still stream back at speed).
    - [ ] B. Gravity/speed-driven forelock (M).
    - [ ] C. Surface shards (S).
  - Decision / notes: ____

- [ ] **A-HEAD-04 Muzzle a single tapered cap; no lips, chin or mouth line** — low.
  - Observed: Last ring 10.5 cm deep; the cap reads blunt rather than a beak. Bit ring sits ~2.3 cm off a smooth cheek, at the correct position.
  - Real horse: Upper lip leads; lower lip and chin sit behind; chin groove; bit at the mouth corners (bars). A TB muzzle is fine and rounded (~6–8 cm upper lip). Horses don't open the mouth to breathe at speed.
  - Where: :543-544; :972; :1072.
  - Fix options (choose one):
    - [ ] A. Square the muzzle (S; don't keep full depth to the tip).
    - [ ] B. Paint a mouth line (S).
    - [ ] C. Separate lower jaw (M).
  - Decision / notes: ____

- [ ] **A-GAP-315 No mouth or tongue control** — low.
  - Observed: Single closed loft; no jaw bone. Daitaku Helios, Fuji Kiseki, Mejiro Dober and Jungle Pocket notes unmapped. The bit lifter already exists (Haiseiko, Mr. CB). Overlaps A-HEAD-04.
  - Real horse: TMJ mandible drop (TMJ ~0.45–0.5 m from the incisors): gaping is ~5–15°, 20–25° extreme. Follows rein conflict at any head position (Dyson & Pollard 2021). Tongue over the bit ≠ tongue out. Jungle Pocket's open mouth was a post-race roar.
  - Where: :536-545; :701-707; :1077-1081.
  - Fix options (choose one):
    - [ ] A. Hinged jaw plus run.mouth (0–15°, 25° extreme), with noseband and bit following (L).
  - Decision / notes: ____

### Hoof

- [ ] **A-HOOF-01 Hoof capsules are tall upright boots** — medium.
  - Observed: Level coronet at 0.104 m. Wall 72.6° fore / 71.6° hind. Toe and heel both 10.2 cm. Coffin 9.2 cm up. HPA broken forward ~16° fore, ~12° hind. Heel ~84° (correct direction, too upright). Sole 10×11.2 cm (already wider than the coronet). conf.hoof exists.
  - Real horse: Fore ~50° (47–55), hind ~52–57°. Toe ~6–7 cm vertical, heels ~3–4 cm, parallel. Coffin within ~1 cm of the coronet (Cripps & Eustace 1999). Straight HPA is the ideal; racing TBs often go broken-back (Kane 1998). Sole ~12–13 cm.
  - Where: :503-504; :552-553; :1158-1164; :684.
  - Fix options (choose one):
    - [ ] A. Re-author the capsule; heel ground edge ahead of the heel coronet (S; skeptics reversed the heel direction in the original).
    - [ ] B. Align the pastern too (S).
    - [ ] C. Lower the coffin joint, lengthen the pastern (M).
    - [ ] D. Parametric hoof per horse (wall angle, heel) (M).
  - Decision / notes: ____

- [ ] **A-HOOF-02 Breakover: hoof rolls back toward flat after toe-off** — low.
  - Observed: Dip 9–15° (race/gallop), 22–30° at walk (hind stays nearly flat). Race fore fetlock re-extends ~22° in the air. Caused by a nested lerp.
  - Real horse: Continuous ~90° rotation through breakover (Horan 2021). Single flexion cycle in swing (Hodson 2000). Fetlock extension is load-driven. Gallop breakover ~85–100% of stance, so BREAKOVER_START 0.62 is early.
  - Where: :195-196; :1389; :1405-1409; :1491-1492.
  - Fix options (choose one):
    - [ ] A. Monotonic hand-off from tip into curl (S).
    - [ ] B. Gait-dependent breakover (S).
  - Decision / notes: ____

- [ ] **A-HOOF-03 Hooves land flat, not heel-first, at gallop/race** — low.
  - Observed: Sole goes 8.2→0° toe-up just before touchdown. Late swing already holds 6–11° toe-up.
  - Real horse: Gallop contact heel-first, ~6–7° toe-up (Ratzlaff 1993, n=2; Symons 2014 hind), with ~20 ms forward slip (Horan 2024). No firm heel-first norm at canter. 28–31° is heel-up at peak toe force.
  - Where: :1351-1355; :1389; :1409; :1492.
  - Fix options (choose one):
    - [ ] A. Keep ~5–7° toe-up into the first few % of stance at gallop/race (move the curl fade past touchdown) (M; <1 frame at race speed).
  - Decision / notes: ____

- [ ] **A-GAP-213 One hoof size and shape for all four** — low.
  - Observed: hoofK per horse; fixed wall and heel; hoofGeo gets no leg id. Daiichi Ruby (small round RF) and Manhattan Cafe (flat) unmapped. Thin walls aren't visible.
  - Real horse: Mild L/R asymmetry is near-universal (Chan 2026: 70% wider RF), including hinds. Club foot in ~13–16% of foals. van Heel 2006 is a Warmblood laterality study. Pastern angle follows the hoof.
  - Where: :503-504; :684; :1158-1179; :1352-1353; :3817.
  - Fix options (choose one):
    - [ ] A. Per-leg {size, angle, heel} incl. hinds, starting from a corrected base shape; pass per-leg HOOF_TOE/H to plantedFetlock (S).
    - [ ] B. Wider per-leg range (~0.8–1.2) (S).
  - Decision / notes: ____

### Mane and tail

- [ ] **A-MANE-01 Mane is a stiff comb that ignores gravity** — medium.
  - Observed: At rest the blades point back along the crest, 87–107° from down. Walk and race have the same envelope. Race tips down and toward the near side. Grazers' blades stick out sideways and up.
  - Real horse: Hangs on one side at rest (convention: off side); split manes are normal variation. Lift comes from inertia (≈1 g at trot, weightless in suspension) plus airflow (30–120 Pa canter/gallop, ~157 Pa race), so it grows through trot, canter and gallop. Pulled manes (76–127 mm) partly stand off; hogged manes stand up.
  - Where: :1102-1122; :1529-1635; :1655.
  - Fix options (choose one):
    - [ ] A. Crest-frame mount, maneSide (S).
    - [ ] B. Speed-squared plus stride-inertial lift blend (M).
    - [ ] C. Skinned mane strips (L).
  - Decision / notes: ____

- [ ] **A-MANE-02 Race tail curve uniform; tail carriage only re-angles the dock** — low.
  - Observed: The race chord is already −1..−25°, mean bend 6.1°/joint (walk ~11, gallop 9), and there is a travelling wave. tailCarriage rotates segment 0 rigidly (−1: chord down to −42°).
  - Real horse: Sallie Gardner at ~16 m/s: chord −5..−30°, tip ~40 cm swing, tip flicks up. Annie G. (banged tail) nearly level. Only the dock is muscular.
  - Where: :1124-1144; :1562-1566; :1719.
  - Fix options (choose one):
    - [ ] A. Moderate race droop, more lag plus a 2nd harmonic for curvature reversal; tailCarriage bends the dock and hair re-streams (S).
    - [ ] B. Analytic damped tail (M).
  - Decision / notes: ____

- [ ] **A-GAP-411 Right lead doesn't mirror mane sway or ear flicks** — low.
  - Observed: Legs, roll and tail mirror. Ear phases are keyed to e.side, so the same ear leads on both leads (~2–5°). Mane rotation.x is a vertical flop and the mane is one-sided. The head does move sideways ±1–2 cm (roll-driven, already mirrors).
  - Real horse: Mane lies on one side whatever the lead; bounce is lead-independent. Ears follow attention (Wathan & McComb 2014). Footfalls mirror (FEI 405).
  - Where: :1525-1526, 1555-1556, 1606-1607; :1110-1121.
  - Fix options (choose one):
    - [ ] A. Ears: side' = m·e.side, rx·m (optional consistency). Mane: lead-independent bounce plus a small m·roll term (S; don't multiply all mane rx by m).
  - Decision / notes: ____

### Stand

- [ ] **A-STAND-01 Fore pastern slightly upright** — low.
  - Observed: Fore 57° to ground (fetlock 147°); hind 60° (147°).
  - Real horse: Fore ~51–53° (TB fetlock 141–143°), within ~1 SD. Hind 60° is normal: normal hind fetlock 152.8°, and lower values go with disorders (Mostafa 2020). The upright look comes mainly from the 72° hoof.
  - Where: :552-553; :1194; :1217; :1351-1355.
  - Fix options (choose one):
    - [ ] A. FORE.pastern ~36–38° from vertical with the hoof fix; keep hind ~30° (S).
    - [ ] B. Per-horse conf.pastern (S).
  - Decision / notes: ____

- [ ] **A-STAND-02 Grazing pose sinks the forehand ~24 cm and folds the elbows** — low. Background grazers only.
  - Observed: Shoulder joint drops 24 cm, withers 19 cm. Elbow 137→84°, humerus near horizontal. Hock unchanged; only the stifle closes.
  - Real horse: The thoracic sling holds the thorax and the stay apparatus keeps the limbs extended (Payne 2005). Reach comes from lowering the neck at its base; the poll opens. Staggered stance is common (van Heel 2006: ~50% foals) but not universal. Withers drop ~3–8 cm (estimate).
  - Where: :1643-1661; :244-248; :1378-1380.
  - Fix options (choose one):
    - [ ] A. Keep forelimbs straight; spine drop ~0.03–0.06; reach via the neck (S; needs neck1 ~−85..−90° to reach the grass).
    - [ ] B. Staggered stance per horse (M).
    - [ ] C. Graze and rest variants (M).
  - Decision / notes: ____

- [ ] **A-GAP-215 No per-horse standing posture** — low.
  - Observed: One stand xc for all. The stand gait is only reachable by background grazers (setGait maps 'stand' to gallop for the hero). The neutral stance is already ~17 cm camped under behind.
  - Real horse: Camped out/under is judged against plumb lines (Stashak). Roster notes describe habitual postures (behavioural). The camped-out ↔ post-legged link is weak.
  - Where: :244-248; :1376-1381; :3346; :3409.
  - Fix options (choose one):
    - [ ] A. After A-HIND-01 and a hero stand pose: conf.standFore/standHind ±6–8 cm, stand pose only (S).
  - Decision / notes: ____

### Other

- [ ] **A-OTHER-01 Head scale is uniform; no head length/jowl/throatlatch/neck-set/nostril controls** — low.
  - Observed: head.scale scales the whole head and its children. Neck skin is weighted to the head bone, so conf.head also thickens the throatlatch (~15% at 1.15). conf.ears (0.7–1.4) already sets ear size independently. Oguri Cap's jowls, Sakura Laurel's nostrils and Biwa Hayahide's long head are unexpressible.
  - Real horse: Ear size scales with the head. Larger heads have relatively longer faces and smaller eyes (Heck 2019). Within-TB range is narrow. "Large eyes" in quirks means expression.
  - Where: :675-688; :762; :771-772; :984-1000.
  - Fix options (choose one):
    - [ ] A. Split the head scale: headLength (±5–8%), jowl, nostril; divide the ear mount by headSize (S).
    - [ ] B. Neck set-on control (M).
    - [ ] C. Throatlatch control (S).
  - Decision / notes: ____

- [ ] **A-OTHER-02 Cold-weather breath puffs: two exhales per breath** — low. Snow field only.
  - Observed: Puffs at g=0 and 0.25 every stride at canter/gallop/race; a pair ~0.62 s apart at walk and trot (cycle ~2.5 s).
  - Real horse: 1:1 at canter and gallop; expiration during forefoot contact (Young 1992), i.e. from ~trailing-fore contact (g≈0.27–0.30). Trot is loosely coupled near stride rate (Lafortuna 1996). Resting expiration is biphasic but one plume.
  - Where: :2966-2993 (age formula :2982, count :2983).
  - Fix options (choose one):
    - [ ] A. One puff per cycle with age = wrap01(n·p)/n·L (S).
    - [ ] B. Lock the exhale to fore support (S).
  - Decision / notes: ____

- [ ] **A-GAP-214 Build never reaches the gait** — low.
  - Observed: tuneGait and makeGait read look.run only. Links that do exist: legZ → track width, scale → stride. The limb axes that would drive motion don't exist yet.
  - Real horse: Conformation affects motion weakly in TBs (Love 2006: sire-explained). Mild toe-out is common (30%) and doesn't reliably change landing (Mokry 2021; Wilson 2016). Weller 2006b and Holmström 1990 measured performance, not kinematics.
  - Where: :256-275; :685-687.
  - Fix options (choose one):
    - [ ] A. Add the limb conformation axes first; then small optional couplings (toe angle → arc, coupling → bend) (M).
  - Decision / notes: ____

- [ ] **A-GAP-410 Hoofprints jump at a gait change** — low. Beach only.
  - Observed: The trail is rebuilt every frame from the current gait: slots move up to ~20 m (visually ~0.8–2.9 m, up to 5.9 m) and the trail length changes. During the blend, prints and dust follow the new gait.
  - Real horse: Prints are fixed impressions. A transition shows old spacing, then irregular transition prints, then the new spacing. Sand prints smear slightly (Pardoe 2001).
  - Where: :2997-3024; :3079-3098; :3766-3768.
  - Fix options (choose one):
    - [ ] A. Record real touchdowns into a per-hoof buffer (M).
    - [ ] B. Freeze the old trail on a gait change (S).
  - Decision / notes: ____

## Disputed (one skeptic refuted it — your call)

- [ ] **A-RACE-03 Race head more flexed than at rest; "very low" carriage tucks the nose** — disputed (finding: medium).
  - Observed: Race face line −47..−59° (mean −53°) vs −44.6° standing. Head-to-neck angle 114–123° (mean 118.2°) vs 120.5° standing, so the poll is about as open as at rest; the extra nose-down tilt comes from the lowered neck. headCarriage −1: face mean ~−60° (−54..−66°), head-to-neck opens ~3.6° to ~122°, poll ~3 cm below the withers.
  - Real horse: Galloping horses span roughly −30..−60° (Muybridge; Danon Platina ~−54°). Head-to-neck can close with speed (Dunbar 2008). Lowering the neck normally drops the face even with the poll opening. Go 2014: the race head is unrestrained, between neutral and extended. Oguri Cap's sources document only a low neck.
  - Skeptics: Real-horse skeptic (refuted, low): "the model's race head is within real range and not flexed… headCarriage −1 already opens the poll ~4°; at most a low-severity style option." Model skeptic (partly, medium): "the default race head is only a minor tuning issue, but the low-style setting points the nose down instead of out (head turns back +7° against a 14° neck drop)."
  - Where: :1547-1553; :1712-1715; :3278.
  - Fix options (choose one):
    - [ ] A. Open the race poll: head.rotation.z +5..12° (S).
    - [ ] B. Head counter-rotation ≥ neck drop at low carriage (e.g. head −hc·14°+), optional pollFlexion control (S).
    - [ ] C. Carriage as target angles per gait and style (M).
    - [ ] D. Leave as is; reword the code comment only.
  - Decision / notes: ____

## Dropped (both skeptics refuted)

None. Neither skeptic refuted any finding outright except A-RACE-03, where only one did (listed above as disputed).
