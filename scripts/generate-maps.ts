// scripts/generate-maps.ts
import StaticMaps from "staticmaps";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { Resvg } from "@resvg/resvg-js";

import clinicsData from "@contents/clinics/clinics.json";

const clinics = clinicsData.clinic;
const outDir = join(process.cwd(), "public", "assets", "maps");
mkdirSync(outDir, { recursive: true });

// Pin icon
const pinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#212121" fill-rule="evenodd" d="M5.672 4.095a9.017 9.017 0 0 1 12.627-.03h.002l.032.03c3.545 3.487 3.552 9.088.042 12.54l-5.671 5.578a1 1 0 0 1-1.403 0L5.63 16.635a8.74 8.74 0 0 1 0-12.499zM12 6.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"/></svg>`;

// Convert SVG → PNG buffer once
const resvg = new Resvg(pinSvg, {
  fitTo: { mode: "width", value: 48 }, // render at 48px
});
const pinPng = resvg.render().asPng();

const pinPath = join(process.cwd(), "public", "assets", "icons", "clinic-pin.png");
mkdirSync(join(process.cwd(), "public", "assets", "icons"), { recursive: true });
writeFileSync(pinPath, pinPng);

for (const c of clinics) {
  const lat = parseFloat(c.lat);
  const lng = parseFloat(c.lng);

  const map = new StaticMaps({
    width: 800,
    height: 600,
    tileUrl: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    tileSubdomains: ["a", "b", "c"],
  });

  map.addMarker({
    img: pinPath,
    offsetX: 24,   // center of 48px icon
    offsetY: 44,   // tip of the pin (near bottom)
    width: 48,
    height: 48,
    coord: [lng, lat],
  });

  await map.render([lng, lat], 14);

  const buffer = await map.image.buffer("image/png");
  writeFileSync(join(outDir, `${c.id}.png`), buffer);
  console.log(`✓ ${c.id}.png`);
}   