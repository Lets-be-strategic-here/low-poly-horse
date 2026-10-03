export const meta = {
  name: 'horse-anatomy-review',
  description: 'Agents critique the low-poly horse anatomy and gaits, skeptics verify each finding, then a to-do list with fix options is written (no fixes)',
  phases: [
    { title: 'Critique', detail: '8 lens critics read code, contact sheets and measurements' },
    { title: 'Merge', detail: 'deduplicate findings across critics' },
    { title: 'Verify', detail: '2 skeptics per finding: real-horse truth + present-in-model' },
    { title: 'Gaps', detail: 'completeness critic + gap critics, verified the same way' },
    { title: 'Synthesize', detail: 'to-do list with fix options for the owner to choose' },
  ],
}

const ROOT = 'C:/Users/Aaron/Documents/GitHub/low-poly-horse/low-poly-horse/.claude/worktrees/anatomy-review-customization'
const SHOTS = ['00-stand', '01-walk', '02-trot', '03-canter', '04-gallop', '05-race', '06-race-jockey'].map((n) => `${ROOT}/research/anatomy-review/shots/${n}.jpeg`)
const CONTEXT = `Project: a procedural low-poly Three.js racehorse, all in ${ROOT}/index.html (single file). The horse is built in code from lofted cross-section rings with flat shading, on a rig: spine/hips/chest/neck1/neck2/head bones (one skinned trunk+neck mesh), rigid limb segments per leg (fore: scapula, humerus, forearm, cannon, pastern, hoof; hind: femur, tibia, cannon, pastern, hoof), two ears, mane blades, a 6-segment tail. Gaits: walk, trot, canter, gallop and a racing gallop ("race"), in the GAITS table, driven by planar two-bone IK with planted hooves (footPath / solveLeg) plus per-gait body motion (BODY.*). Units are metres; the horse faces +X, its right side is +Z; reference size 163 cm at the withers, 475 kg (a Thoroughbred).
Code to read (line ranges in index.html): section 1 GAITS 184-260; section 4 anatomy constants (TRUNK / NECK / HEAD loft tables, FORE / HIND joint positions, pastern angles) 484-597; section 5 buildHorse 598-1309 (look for the head, ears, mane, tail and limb() calls with their cross-section tables); section 6 IK + BODY motion 1310-1681.
Visual evidence (open each with the Read tool — they are images): ${SHOTS.join(' , ')}. Each sheet is a 4x3 grid of labelled tiles rendered with a narrow-angle (near-orthographic) camera: 00 = standing pose from 12 angles incl. close-ups; 01-05 = walk, trot, canter, gallop, race: 8 right-side phases g=0..7/8 then front and rear views; 06 = a roster horse racing with saddle cloth, reins and a jockey.
Measurements: ${ROOT}/research/anatomy-review/measurements.json — world positions (m) of withers, croup, tail head, point of buttock, brisket, girth, poll, muzzle, eye, and every joint of every leg (shoulder, elbow, knee, fetlock, coffin, toe / hip, stifle, hock, fetlock, coffin, toe) for the standing pose and 32 phases of one stride of each gait, plus each gait's parameters (stride, duty, footfall phases, speed). It is ~180 KB: analyse it with small node scripts via Bash (angles, ranges, ratios, timings) rather than reading it whole.
This is a stylised low-poly model: judge anatomy, proportions, conformation and motion against real Thoroughbreds — not polygon count, textures or art style.
Rules: strictly read-only — do not create, modify or delete any file in the repository (scratch scripts only under your own temp folder). Never put personal information (emails, usernames) in any web request; use a generic User-Agent if a client needs one. Cite real references (veterinary anatomy texts, gait biomechanics papers, Muybridge, conformation guides) when you state what a real horse does, with numbers where they exist.`

const AREAS = ['proportions', 'head', 'neck', 'ears', 'trunk', 'chest', 'forelimb', 'hindlimb', 'hoof', 'stand', 'walk', 'trot', 'canter', 'gallop', 'race', 'mane-tail', 'deformation', 'jockey-tack', 'other']
const FINDINGS = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string', description: 'short, specific: what is wrong' },
          area: { type: 'string', enum: AREAS },
          severity: { type: 'string', enum: ['high', 'medium', 'low'], description: 'high = an anatomist would notice at a glance; low = subtle' },
          observed: { type: 'string', description: 'what the model does, with numbers from the measurements and/or the sheet + tile, e.g. "05-race tile g=3/8"' },
          expected: { type: 'string', description: 'what a real Thoroughbred does, with numbers where possible' },
          references: { type: 'array', items: { type: 'string' } },
          evidence: { type: 'string', description: 'code location(s) (index.html:line) and/or sheet tiles' },
          fixOptions: {
            type: 'array', minItems: 1,
            items: { type: 'object', properties: { label: { type: 'string' }, approach: { type: 'string' }, effort: { type: 'string', enum: ['S', 'M', 'L'] }, risk: { type: 'string' } }, required: ['label', 'approach', 'effort', 'risk'] },
          },
          confidence: { type: 'number', minimum: 0, maximum: 1 },
        },
        required: ['title', 'area', 'severity', 'observed', 'expected', 'evidence', 'fixOptions', 'confidence'],
      },
    },
  },
  required: ['findings'],
}

const LENSES = [
  { key: 'proportions', focus: 'Overall conformation and proportions in the standing pose: height at withers vs croup; body length (point of shoulder to point of buttock) vs height; depth of body (withers to brisket/girth) vs leg length (girth floor to ground); neck length vs head length vs body; shoulder slope (scapula angle) and humerus angle; croup/pelvis slope; elbow and stifle positions; overall balance from front and rear views (chest width, leg set, base narrow/wide, toe in/out); does it read as a Thoroughbred racehorse?' },
  { key: 'head-neck', focus: 'Head and neck: skull shape and length, jaw/cheek (jowl), eye position and size, forehead, nasal bone, nostrils and muzzle, chin, ear size/position/set/shape and how they move, forelock; neck set-on at the withers and chest, crest line, throatlatch, neck length and thickness, poll flexion, head-neck angle at rest and in each gait.' },
  { key: 'trunk', focus: 'Trunk and chest: withers prominence, back and loin length, croup and tail set, ribcage/barrel shape from above and behind, belly line and flank, chest (breast, pectorals) and brisket depth/width between the forelegs, shoulder and hindquarter muscle masses, surface landmarks (point of shoulder, point of hip, point of buttock, stifle), how the limbs attach to the trunk.' },
  { key: 'forelimb', focus: 'Forelimb anatomy and its motion: scapula, humerus, elbow (tucked against the chest?), forearm, knee (carpus), cannon, fetlock, pastern, hoof; segment lengths and angles at rest; joint ranges through every gait (use the measurements: knee and elbow flexion, fetlock drop/hyperextension under load, hoof flight arc, reach at touchdown, breakover); anything physically impossible (hyperextension, interpenetration, joints bending the wrong way).' },
  { key: 'hindlimb', focus: 'Hindlimb anatomy and its motion: pelvis/hip, femur, stifle, gaskin (tibia), hock (angle and point of hock), cannon, fetlock, pastern, hoof; segment lengths and angles at rest; hock and stifle flexion through each gait, reciprocal apparatus (stifle and hock flex together), hind reach under the body at speed, push-off extension; anything impossible or unnatural.' },
  { key: 'slow-gaits', focus: 'Standing pose, walk and trot: footfall sequence and timing (from GAITS land/duty and the measurements), duty factor, tracking up / overtrack, stride length vs speed, head-and-neck nod (walk: two nods per stride; trot: steady head), back motion, lateral sway, diagonal synchrony and suspension at the trot, hoof flight height; compare with published gait data (e.g. Clayton, Hildebrand, Barrey).' },
  { key: 'fast-gaits', focus: 'Canter, gallop and racing gallop: footfall sequence and lead (transverse gallop), duty factors and stance durations, suspension phase (gathered, after the leading fore), stride length and frequency vs speed (a racing Thoroughbred ~16-18 m/s, ~7 m strides, ~2.3-2.5 strides/s), spinal (lumbosacral) flexion and extension, head-neck pumping amplitude and phase, limb extension at reach and fold in the swing, fetlock drop near the ground at race speed, body height oscillation, rocking pitch at the canter.' },
  { key: 'secondary-rig', focus: 'Secondary motion and deformation: mane and tail carriage and motion per gait, ears (position and flicks), breathing/flank, skin deformation of the skinned trunk+neck (pinching, collapsing, gaps where limbs meet the body), interpenetration of segments, and the jockey/tack in sheet 06: crouched race seat, stirrup length, hands and reins to the bit, saddle and saddle-cloth placement and how the rider moves with the horse.' },
]

phase('Critique')
const raw = await parallel(LENSES.map((L) => () => agent(
  `${CONTEXT}\n\nYOUR LENS: ${L.focus}\n\nTask: critique the model through your lens only. Look at the relevant sheets and tiles, read the relevant code, run measurement scripts, and compare with real Thoroughbred anatomy and published data. Report every concrete problem you find (aim for thoroughness: typically 5-15 findings), each with what the model does (with numbers or tile references), what a real horse does, where it lives in the code, and 1-3 alternative fix options (with effort S/M/L and risk) — the owner will choose fixes later, so present options, don't pick one. Do NOT report things the model already does right. Do not fix anything.`,
  { label: `critic:${L.key}`, phase: 'Critique', schema: FINDINGS },
)))
const allFindings = raw.filter(Boolean).flatMap((r, i) => (r.findings || []).map((f) => ({ ...f, lens: LENSES[i]?.key })))
log(`${allFindings.length} raw findings from ${raw.filter(Boolean).length}/${LENSES.length} critics`)

phase('Merge')
const MERGED = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'stable short id like A-FORE-03' },
          title: { type: 'string' }, area: { type: 'string', enum: AREAS }, severity: { type: 'string', enum: ['high', 'medium', 'low'] },
          observed: { type: 'string' }, expected: { type: 'string' }, references: { type: 'array', items: { type: 'string' } }, evidence: { type: 'string' },
          fixOptions: { type: 'array', items: { type: 'object', properties: { label: { type: 'string' }, approach: { type: 'string' }, effort: { type: 'string' }, risk: { type: 'string' } }, required: ['label', 'approach', 'effort', 'risk'] } },
          sourceLenses: { type: 'array', items: { type: 'string' } },
        },
        required: ['id', 'title', 'area', 'severity', 'observed', 'expected', 'evidence', 'fixOptions', 'sourceLenses'],
      },
    },
  },
  required: ['findings'],
}
const merged = await agent(
  `You are merging anatomy-review findings about a low-poly horse model from several independent critics. Merge findings that describe the same underlying problem (combine their evidence, references and fix options; keep the most precise numbers; take the higher severity only if justified). Keep distinct problems separate even if they share an area. Do not invent new findings and do not drop any unique one. Give each merged finding a stable id: A-<AREA in caps, e.g. FORE, HIND, HEAD, NECK, EARS, TRUNK, CHEST, PROP, HOOF, STAND, WALK, TROT, CANTER, GALLOP, RACE, MANE, DEFORM, JOCKEY, OTHER>-<2-digit number>.\n\nFindings (JSON):\n${JSON.stringify(allFindings)}`,
  { label: 'merge', phase: 'Merge', schema: MERGED },
)
const items = (merged && merged.findings) || []
log(`${items.length} findings after merging`)

const VERDICT = {
  type: 'object',
  properties: {
    verdict: { type: 'string', enum: ['confirmed', 'partly', 'refuted'] },
    reasoning: { type: 'string' },
    correctedSeverity: { type: 'string', enum: ['high', 'medium', 'low'] },
    correction: { type: 'string', description: 'if partly: what the accurate version of the claim is' },
    references: { type: 'array', items: { type: 'string' } },
  },
  required: ['verdict', 'reasoning', 'correctedSeverity'],
}
const verifyOne = (f, phaseName) => parallel([
  () => agent(`${CONTEXT}\n\nSKEPTIC ROLE (real-horse truth): try to REFUTE the following anatomy/biomechanics claim on the grounds that it misdescribes REAL horses — e.g. the "expected" behaviour is wrong, exaggerated, breed-specific, or within normal variation for Thoroughbreds. Check references (web search is allowed). Verdict "refuted" if the real-horse claim is wrong, "partly" if it is overstated or needs correction (say how), "confirmed" only if it holds up.\n\nFINDING:\n${JSON.stringify(f)}`, { label: `truth:${f.id}`, phase: phaseName, schema: VERDICT }),
  () => agent(`${CONTEXT}\n\nSKEPTIC ROLE (present in the model): try to REFUTE the following finding on the grounds that the MODEL does not actually have this problem — re-check the code at the cited location, re-measure from measurements.json with node, and look at the cited sheet tiles. Verdict "refuted" if the model already behaves correctly or the critic misread it, "partly" if the problem exists but is smaller/different (say how), "confirmed" only if you can reproduce it.\n\nFINDING:\n${JSON.stringify(f)}`, { label: `model:${f.id}`, phase: phaseName, schema: VERDICT }),
]).then((vs) => {
  const [truth, model] = vs
  const refuted = [truth, model].filter((v) => v && v.verdict === 'refuted').length
  const status = refuted === 2 ? 'dropped' : refuted === 1 ? 'disputed' : 'kept'
  return { ...f, truth, model, status }
})

phase('Verify')
const verified = await parallel(items.map((f) => () => verifyOne(f, 'Verify')))
const v1 = verified.filter(Boolean)
log(`verified: ${v1.filter((f) => f.status === 'kept').length} kept, ${v1.filter((f) => f.status === 'disputed').length} disputed, ${v1.filter((f) => f.status === 'dropped').length} dropped`)

phase('Gaps')
const GAPS = {
  type: 'object',
  properties: { gaps: { type: 'array', maxItems: 4, items: { type: 'object', properties: { key: { type: 'string' }, focus: { type: 'string' } }, required: ['key', 'focus'] } } },
  required: ['gaps'],
}
const gapPlan = await agent(
  `${CONTEXT}\n\nCOMPLETENESS CRITIC. Below are the anatomy-review findings collected so far (titles and areas). Identify up to 4 important aspects of horse anatomy, conformation or locomotion that NO critic examined (e.g. a body region, a gait phase, a view, a joint, a size/breed-type issue, how different horse sizes/weights scale). For each, write a focused brief for a new critic. Return an empty list if coverage is genuinely complete.\n\nFINDINGS SO FAR:\n${JSON.stringify(v1.map((f) => ({ id: f.id, area: f.area, title: f.title, status: f.status })))}`,
  { label: 'completeness', phase: 'Gaps', schema: GAPS },
)
const gapLenses = (gapPlan && gapPlan.gaps) || []
log(`${gapLenses.length} gap areas: ${gapLenses.map((g) => g.key).join(', ') || 'none'}`)
const gapFindings = await pipeline(
  gapLenses,
  (g) => agent(`${CONTEXT}\n\nYOUR LENS (a gap the first critics missed): ${g.focus}\n\nAlready reported (do not repeat): ${JSON.stringify(v1.map((f) => f.title))}\n\nReport only NEW concrete problems in the same format (observed with numbers/tiles, expected with references, code location, 1-3 fix options with effort and risk). Do not fix anything.`, { label: `gap:${g.key}`, phase: 'Gaps', schema: FINDINGS }),
  (r, g, gi) => parallel(((r && r.findings) || []).map((f, j) => () => verifyOne({ ...f, id: `A-GAP-${gi + 1}${String(j + 1).padStart(2, '0')}`, sourceLenses: [`gap:${g.key}`] }, 'Gaps'))),
)
const v2 = gapFindings.filter(Boolean).flat().filter(Boolean)
const all = [...v1, ...v2]
log(`total ${all.length}: ${all.filter((f) => f.status === 'kept').length} kept, ${all.filter((f) => f.status === 'disputed').length} disputed, ${all.filter((f) => f.status === 'dropped').length} dropped`)

phase('Synthesize')
const doc = await agent(
  `Write the anatomy to-do list for the owner of a low-poly Three.js racehorse project, as GitHub-flavoured Markdown (return ONLY the markdown). The owner will read it and later CHOOSE how to fix each issue, so present choices, not decisions.\n\nStructure:\n1. Title "# Horse anatomy review: to-do list" and a 3-5 sentence intro: what was reviewed (standing pose and five gaits, from code, near-orthographic contact sheets in research/anatomy-review/shots/ and joint measurements in research/anatomy-review/measurements.json), how (8 lens critics + gap critics; every finding checked by two skeptics: real-horse truth and present-in-model), and how to use the list (tick one fix option per item, or write your own).\n2. A summary table: area | kept items (by severity) | disputed.\n3. "## To do" grouped by area (order areas by their worst severity, high first), each item as:\n   - [ ] **<id> <title>** — severity (after verification: use the skeptics' corrected severity when they agree, else the more conservative), one line on why it matters\n     - Observed: … (numbers / tile refs)\n     - Real horse: … (with references; apply any 'partly' correction from the skeptics)\n     - Where: code location(s)\n     - Fix options (choose one): - [ ] A. <label> — approach (effort S/M/L; risk) - [ ] B. … (include every option, merging near-duplicates)\n     - Decision / notes: ____\n4. "## Disputed (one skeptic refuted it — your call)": same format plus a line quoting both skeptics' reasoning briefly.\n5. "## Dropped (both skeptics refuted)": one line each: id, title, why it was dropped.\nBe precise and concise; keep every number and reference that survived verification; do not add new findings.\n\nVERIFIED FINDINGS (JSON):\n${JSON.stringify(all)}`,
  { label: 'synthesize', phase: 'Synthesize' },
)
return { markdown: doc, counts: { raw: allFindings.length, merged: items.length, gap: v2.length, kept: all.filter((f) => f.status === 'kept').length, disputed: all.filter((f) => f.status === 'disputed').length, dropped: all.filter((f) => f.status === 'dropped').length }, findings: all }