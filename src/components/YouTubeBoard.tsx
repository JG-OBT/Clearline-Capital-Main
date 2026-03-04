import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";

type YouTubeVideo = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string; // formatted for display
  publishedRaw: string; // ISO date for sorting
  url: string;
};

type YouTubeJson = {
  channelId: string;
  fetchedAt: string;
  channelTitle?: string;
  items: Array<{
    videoId?: string;
    title?: string;
    published?: string;
    link?: string;
    thumbnail?: string;
  }>;
};

const CHANNEL_HANDLE_URL = "https://www.youtube.com/@Oscar_Lindhardt";
// Confirmed channel ID for @Oscar_Lindhardt
const CHANNEL_ID = "UCHIFSavpHG0kGXNlZrrMVwQ";
// Uploads playlist is always "UU" + channelId without the leading "UC"
const UPLOADS_PLAYLIST_ID = `UU${CHANNEL_ID.slice(2)}`;

// Static file generated in /public by GitHub Actions
const YT_JSON_URL = `${import.meta.env.BASE_URL}youtube.json`;

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function mapJsonToVideos(data: YouTubeJson): YouTubeVideo[] {
  const items = Array.isArray(data?.items) ? data.items : [];

  const videos: YouTubeVideo[] = items
    .map((it) => {
      const id = (it.videoId ?? "").trim();
      const title = (it.title ?? "").trim();
      const publishedRaw = (it.published ?? "").trim();

      // your JSON uses `link`, not `url`
      const url = (it.link ?? (id ? `https://www.youtube.com/watch?v=${id}` : "")).trim();

      // your JSON uses `thumbnail`
      const thumbnail = (it.thumbnail ?? (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "")).trim();

      if (!id || !title) return null;

      return {
        id,
        title,
        thumbnail,
        publishedAt: formatDate(publishedRaw),
        publishedRaw,
        url,
      } satisfies YouTubeVideo;
    })
    .filter((v): v is YouTubeVideo => Boolean(v))
    .sort((a, b) => (a.publishedRaw < b.publishedRaw ? 1 : a.publishedRaw > b.publishedRaw ? -1 : 0));

  return videos;
}

const YouTubeBoard = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);
  const [feedUnavailable, setFeedUnavailable] = useState(false);

  const featured = useMemo(() => activeVideo ?? videos[0] ?? null, [activeVideo, videos]);

  useEffect(() => {
    let cancelled = false;

    const loadVideos = async () => {
      try {
        setLoading(true);
        setFeedUnavailable(false);

        // cache-bust so it updates after each deploy
        const res = await fetch(`${YT_JSON_URL}?t=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) throw new Error(`youtube.json fetch failed: ${res.status}`);

        const data = (await res.json()) as YouTubeJson;
        const parsed = mapJsonToVideos(data);

        if (!cancelled) {
          setVideos(parsed);
          setActiveVideo(parsed[0] ?? null);
          if (!parsed.length) setFeedUnavailable(true);
        }
      } catch (err) {
        console.error("YouTube JSON feed load failed:", err);
        if (!cancelled) setFeedUnavailable(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadVideos();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">
            Latest Insights with Oscar Lindhardt
          </h2>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Market Perspectives & Entrepreneurship</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay up to date with Clearline Capital’s latest insights, interviews, and market perspectives from our Managing
            Partner&apos;s YouTube channel.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin" />
          </div>
        ) : feedUnavailable ? (
          // Fallback: guaranteed to show only this channel's uploads
          <div className="max-w-5xl mx-auto">
            <div className="rounded-sm overflow-hidden border border-slate-200 bg-white">
              <div className="aspect-video">
                <iframe
                  title="Oscar Lindhardt — Latest uploads"
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed?listType=playlist&list=${UPLOADS_PLAYLIST_ID}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-6 flex items-center justify-between flex-wrap gap-3">
                <p className="text-sm text-slate-600">
                  Showing the latest uploads from the channel. (Feed data isn’t available yet.)
                </p>
                <a
                  href={CHANNEL_HANDLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                >
                  View all on YouTube <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Featured Video */}
            <div className="lg:col-span-2">
              {featured && (
                <motion.div
                  key={featured.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative aspect-video bg-slate-100 rounded-sm overflow-hidden group cursor-pointer"
                  onClick={() => window.open(featured.url, "_blank")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") window.open(featured.url, "_blank");
                  }}
                >
                  <img
                    src={featured.thumbnail}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                      <Play fill="white" className="text-white ml-1" size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-2xl font-bold text-white mb-2">{featured.title}</h4>
                    <p className="text-white/70 text-sm">Published on {featured.publishedAt}</p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Video List */}
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
              {videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`flex gap-4 p-3 rounded-sm cursor-pointer transition-all ${
                    featured?.id === video.id ? "bg-slate-50 border-l-4 border-slate-900" : "hover:bg-slate-50"
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActiveVideo(video);
                  }}
                >
                  <div className="w-32 h-20 flex-shrink-0 bg-slate-100 rounded-sm overflow-hidden relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play size={16} fill="white" className="text-white opacity-80" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="text-sm font-bold text-slate-900 line-clamp-2 mb-1">{video.title}</h5>
                    <p className="text-xs text-slate-500">{video.publishedAt}</p>
                  </div>
                </div>
              ))}

              <a
                href={CHANNEL_HANDLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 border border-dashed border-slate-200 text-slate-500 text-sm font-medium hover:bg-slate-50 transition-colors rounded-sm"
              >
                View all on YouTube <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeBoard;
