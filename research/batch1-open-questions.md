# Batch 1: open questions

These are the values the research could not confirm for horses #1–11. Each item gives the default that
`data/horses.js` uses until it is resolved, and where to check it. ★ = changes how the model looks.

## Roster-level decisions
- [ ] **★ Should the 3 founding sires count?** Byerley Turk, Darley Arabian and Godolphin Barb are real horses on the official list but not really racehorses: two never raced, and Byerley Turk has one unverified race. **Default: included**, following the rule "real horse, oldest first". If they are dropped, batch 1 starts at Saint Lite. *Needs a decision from the owner.*
- [ ] **Foaling years.** Byerley Turk c.1679/80 (one source says c.1684); Godolphin c.1724 ±1–2. Neither changes the order.
- [ ] **English spellings in the global release** may differ from the Japanese portal (for example, "Matikane Fukukitaru"). Default: the spellings on the JP portal's cards.
- [ ] **Unofficial motifs.** Fans guess Yamanin Global for Sugar Lights, and Dictus or Real Shadai for Satake Mei. Default: treat both as having no real horse.

## Per horse
| Horse | Open question | Default used | Where to check |
|---|---|---|---|
| Byerley Turk | ★ Markings come only from a posthumous portrait; height not documented | No white; 152 cm assumed | Wootton 1731 portrait |
| Darley Arabian | ★ How high the white goes on LF, LH, RH; blaze width | LF pastern, LH/RH fetlock; wide blaze (Darley's 1703 letter) | Wootton portrait at Aldby (Commons) |
| Godolphin Barb | ★ Face marking; height (146 vs "15 hh"); coat | None; 146 cm (stud book); 黒鹿毛 | Wootton and Morier portraits |
| Saint Lite | ★ Silks; ★ star and no leg white (photo); weight | 青、黄袖、赤二本輪; small star; 500 kg | JRA 殿堂 digital book, ja.wikipedia 加藤雄策 |
| Speed Symboli | ★ Leg white; ★ face; ★ red sleeve hoop; weight | LF, LH, RH at the coronet; no face white; no hoop; 450 kg | JRA 殿堂 horse17 book, 1969–70 Arima photos |
| Haiseiko | Race weights; silks wording; stripe length | 510 kg; white with purple sleeves; short stripe (under the hood anyway) | keibabook 1973–74 |
| Maruzensky | Weights only from Japanese Wikipedia; ★ possible tiny star; race-day bandages | 505 kg; plain face; no bandages | JRA 殿堂 horse19 |
| Katsuragi Ace | ★ Hind-leg white; hood pattern in the Arima | None; white hood (Japan Cup look) | JRA-VAN memorial photos |
| Mr. C.B. | ★ Which hind leg is white | LH | Race photos |
| Symboli Rudolf | Which way the crescent star points | Horns up | JRA 殿堂 horse14 |
| Sirius Symboli | ★ Which hind leg is white; star shape; owner (和田共弘 vs Symboli Farm); red hoop | RH; small round star; 和田共弘 (シンボリ牧場); no hoop | Race photos |

## Blocked sources (fixing these resolves several of the above)
- JBIS returned 403 to WebFetch but opened in Playwright. Retry horse pages through the browser.
- netkeiba race weights need a premium account. Use keibabook race pages (1982 onward).
- JRA 殿堂 digital books (`jra.go.jp/gallery/dendo/horseNN/`) were only partly read.
- Height at the withers (体高) is documented only for Saint Lite (166 cm) and Haiseiko (171 cm). For the others the scale is estimated from race weight.
