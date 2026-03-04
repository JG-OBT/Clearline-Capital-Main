import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route to proxy YouTube RSS
  app.get("/api/youtube-rss", async (req, res) => {
    const channelId = req.query.channel_id;
    if (!channelId) {
      return res.status(400).json({ error: "channel_id is required" });
    }

    try {
      const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
      const response = await fetch(rssUrl);
      
      if (!response.ok) {
        throw new Error(`YouTube RSS returned ${response.status}`);
      }

      const xml = await response.text();
      res.set("Content-Type", "text/xml");
      res.send(xml);
    } catch (error) {
      console.error("Error proxying YouTube RSS:", error);
      res.status(500).json({ error: "Failed to fetch YouTube RSS" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
