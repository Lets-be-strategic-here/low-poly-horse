# Low-Poly Horse

A low-poly 3D horse galloping in a seamless loop, built with Three.js from primitive geometry. It's a single self-contained HTML file.

**Live demo:** https://derprito64bit.github.io/low-poly-horse/

## What's in it

- **Procedural horse.** Built in code from low-segment primitives with vertex sculpting and flat shading, about 2,400 triangles. There are no model or texture files.
- **Hierarchical rig.** Spine, neck, head, ears, jaw, four legs, a chained tail and a mane.
- **Transverse gallop.** Four-beat footfall (right hind → left hind → right fore → left fore) followed by a suspension phase. Knees fold backward and hocks point backward.
- **Planted hooves.** Leg IK keeps each hoof fixed to the ground during stance with no sliding, and the toe breaks over as the hoof lifts off.
- **Secondary motion.** Body bounce and pitch, head and neck counterbalance, tail follow-through, a wave along the mane, ear flicks, and dust puffs at each hoof strike.
- **Seamless loop.** All motion is a periodic function of one loop phase, scenery included. One loop is 25 strides (about 10.5 s at 1×), and the first and last frames are pixel-identical.

## Controls

- Drag to orbit, scroll to zoom.
- Space or the ▶ button to play or pause.
- The speed slider runs from 0.25× to 2×.
- The Side, ¾ and Front buttons set camera presets; Wire shows a wireframe.

## Run locally

Open `index.html` in a browser. It loads Three.js r186 from jsDelivr, so it needs an internet connection.
