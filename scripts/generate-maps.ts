// scripts/generate-maps.ts
import StaticMaps from "staticmaps";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

import clinicsData from "@contents/clinics/clinics.json";

const clinics = clinicsData.clinic;
const outDir = join(process.cwd(), "public", "assets", "maps");
mkdirSync(outDir, { recursive: true });

for (const c of clinics) {
  const lat = parseFloat(c.lat);   // ← string → number
  const lng = parseFloat(c.lng);   // ← string → number
  const radiusKm = c.radiusKm ?? 1; // ← default if missing

  const map = new StaticMaps({
    width: 800,
    height: 600,
    tileUrl: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    tileSubdomains: ["a", "b", "c"],
  });

  map.addCircle({
    coord: [lng, lat],
    radius: radiusKm * 1000,
    fill: "#0000ff",
    width: 0,
  });

  await map.render([lng, lat], 14);

  const buffer = await map.image.buffer("image/png");
  writeFileSync(join(outDir, `${c.id}.png`), buffer);
  console.log(`✓ ${c.id}.png`);
}   