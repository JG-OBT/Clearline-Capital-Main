import fs from "fs";
import path from "path";

const CHANNEL_ID = process.env.YT_CHANNEL_ID;
if (!CHANNEL_ID) {
  console.error("Missing YT_CHANNEL_ID env var");
  process.exit(1);
}

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

function pick(tag, xml) {
  const m = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return m ? m[1].trim() : "";
}

function pickAllEntries(xml) {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => m[1]);
  return entries
    .map((e) => {
      const title = pick("title", e);
      const published = pick("published", e);
      const videoId = pick("yt:videoId", e);

      const linkMatch = e.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"/);
      const link = linkMatch ? linkMatch[1] : videoId ? `https://www.youtube.com/watch?v=${videoId}` : "";

      const thumbMatch = e.match(/<media:thumbnail[^>]*url="([^"]+)"/);
      const thumbnail = thumbMatch ? thumbMatch[1] : videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";

      if (!videoId) return null;
      return { title, published, videoId, link, thumbnail };
    })
    .filter(Boolean);
}

const res = await fetch(FEED_URL, { headers: { "User-Agent": "github-actions" } });
if (!res.ok) {
  console.error("Failed to fetch RSS:", res.status);
  process.exit(1);
}
const xml = await res.text();

const out = {
  channelId: CHANNEL_ID,
  fetchedAt: new Date().toISOString(),
  channelTitle: pick("title", xml),
  items: pickAllEntries(xml),
};

const outPath = path.join(process.cwd(), "public", "youtube.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(out, null, 2), "utf8");

console.log("Wrote", outPath, "items:", out.items.length);
