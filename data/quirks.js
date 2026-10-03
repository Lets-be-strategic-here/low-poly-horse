/* Researched physical and running-style quirks of the roster horses, keyed by horse id (data/horses.js).
   A classic script so index.html still opens from file://. Filled from the quirk-research workflow (every entry
   checked against its source by a second agent); see research/quirks/ for the full evidence.
   conf: build parameters, run: running-style parameters (ranges and meanings: CONF_CONTROLS / RUN_CONTROLS in
   index.html; 1 or 0 = an average Thoroughbred). notes: what the horse was known for, with the source shown on its card.
   Precedence: build default < quirks < the horse's own `conf` / `run` in data/horses.js < the viewer's sliders. */
window.QUIRKS = {};
