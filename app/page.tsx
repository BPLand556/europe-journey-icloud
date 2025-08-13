"use client";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import "./globals.css";

type TripStop = {
  id: string; title: string; date: string; coords: [number, number];
  story?: string; photos: string[]; videos: string[]; links: { label: string; url: string }[];
};

const INITIAL_STOPS: TripStop[] = [
  { id: "rome", title: "Rome", date: "2025-09-10", coords: [41.9028, 12.4964], story: "Touchdown in Italy. Espresso-fueled wander through Trastevere and a nighttime Colosseum peek.", photos: [], videos: [], links: [] },
  { id: "naples", title: "Naples", date: "2025-09-13", coords: [40.8518, 14.2681], story: "Pizza pilgrimage. Day trip options: Pompeii or Capri if the weather plays nice.", photos: [], videos: [], links: [] },
  { id: "florence", title: "Florence", date: "2025-09-16", coords: [43.7696, 11.2558], story: "Renaissance overload. Ponte Vecchio at golden hour; gelato policy: daily.", photos: [], videos: [], links: [] },
  { id: "bern", title: "Bern", date: "2025-09-19", coords: [46.948, 7.4474], story: "River float in the Aare (if not freezing) and old-town strolls.", photos: [], videos: [], links: [] },
  { id: "lyon", title: "Lyon", date: "2025-09-22", coords: [45.764, 4.8357], story: "France’s food capital. Bouchon crawl and riverside night shots.", photos: [], videos: [], links: [] },
];

const MapContainer = dynamic(async () => (await import("react-leaflet")).MapContainer, { ssr: false });
const TileLayer = dynamic(async () => (await import("react-leaflet")).TileLayer, { ssr: false });
const Marker = dynamic(async () => (await import("react-leaflet")).Marker, { ssr: false });
const Popup = dynamic(async () => (await import("react-leaflet")).Popup, { ssr: false });
const Polyline = dynamic(async () => (await import("react-leaflet")).Polyline, { ssr: false });

function Country([lat, lng]: [number, number]) {
  if (lat>41 && lat<52 && lng>-6 && lng<10) return "France";
  if (lat>45 && lat<48 && lng>6 && lng<10) return "Switzerland";
  if (lat>36 && lat<48 && lng>6 && lng<19) return "Italy";
  return "EU";
}

export default function Page() {
  const [stops, setStops] = useState<TripStop[]>(INITIAL_STOPS);
  const [activeId, setActiveId] = useState<string | null>(stops[0]?.id ?? null);
  const active = useMemo(() => stops.find(s => s.id === activeId) ?? stops[0], [stops, activeId]);
  const polyline = useMemo(() => stops.map(s => s.coords), [stops]);

  // Shared Album state
  const [albumPhotos, setAlbumPhotos] = useState<{url:string; caption?:string}[]>([]);
  const [albumError, setAlbumError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/icloud", { cache: "no-store" })
      .then(r => r.json())
      .then(d => {
        if (d.error) { setAlbumError(d.error); return; }
        setAlbumPhotos(d.photos || []);
      })
      .catch(e => setAlbumError(String(e)));
  }, []);

  // Add Stop form
  const [title, setTitle] = useState(""); const [date, setDate] = useState("");
  const [lat, setLat] = useState(""); const [lng, setLng] = useState("");
  const [story, setStory] = useState(""); const [photos, setPhotos] = useState(""); const [videos, setVideos] = useState("");

  function addStop() {
    if (!title || !date || !lat || !lng) return;
    const newStop: TripStop = {
      id: title.toLowerCase().replace(/\s+/g, "-") + "-" + Math.floor(Math.random()*9999),
      title, date, coords: [parseFloat(lat), parseFloat(lng)],
      story, photos: photos.split(/,\s*/).filter(Boolean), videos: videos.split(/,\s*/).filter(Boolean), links: [],
    };
    const next = [...stops, newStop].sort((a,b)=>a.date.localeCompare(b.date));
    setStops(next); setActiveId(newStop.id);
    setTitle(""); setDate(""); setLat(""); setLng(""); setStory(""); setPhotos(""); setVideos(""); 
  }

  // Create Leaflet icon only on client side
  const icon = useMemo(() => {
    if (typeof window === 'undefined') return null;
    const L = require('leaflet');
    return new L.Icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
    });
  }, []);

  // Load Leaflet CSS only on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet/dist/leaflet.css');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-semibold">Ben's Europe — 2025</h1>
          <button onClick={() => navigator.clipboard?.writeText(window.location.href)} className="text-xs md:text-sm border px-3 py-1.5 rounded-2xl hover:bg-white/10">Share</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-7 rounded-3xl overflow-hidden border border-slate-700 bg-slate-900/60">
            <div className="h-[380px] md:h-[520px]">
              <MapContainer center={[45, 9]} zoom={5} scrollWheelZoom className="h-full w-full">
                <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Polyline positions={polyline} />
                {stops.map(s => (
                  // @ts-ignore Leaflet types mismatch in this environment
                  <Marker key={s.id} position={s.coords} icon={icon} eventHandlers={{ click: () => setActiveId(s.id) }}>
                    <Popup>
                      <div className="text-slate-900">
                        <div className="font-semibold">{s.title}</div>
                        <div className="text-xs opacity-70">{new Date(s.date).toLocaleDateString()}</div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="rounded-3xl p-5 border border-slate-700 bg-slate-900/70">
              <div className="text-sm opacity-70">Current Stop</div>
              <div className="text-2xl font-bold">{active?.title}</div>
              <div className="text-xs opacity-70">{active ? new Date(active.date).toLocaleDateString() : ""}</div>
              {active?.story && <p className="mt-3 text-sm opacity-90">{active.story}</p>}
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div className="border border-slate-700 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold">{new Set(stops.map(s=>Country(s.coords))).size}</div>
                  <div className="text-[10px] opacity-70">Countries</div>
                </div>
                <div className="border border-slate-700 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold">{stops.length}</div>
                  <div className="text-[10px] opacity-70">Stops</div>
                </div>
                <div className="border border-slate-700 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold">{(() => { const sorted=[...stops].sort((a,b)=>a.date.localeCompare(b.date)); const d1=new Date(sorted[0].date).getTime(); const d2=new Date(sorted[sorted.length-1].date).getTime(); return Math.max(1, Math.round((d2-d1)/(1000*60*60*24))+1) })()}</div>
                  <div className="text-[10px] opacity-70">Days</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-5 border border-slate-700 bg-slate-900/60">
              <div className="font-semibold mb-2">Add a stop</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} className="col-span-2 bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-2" />
                <input placeholder="YYYY-MM-DD" value={date} onChange={e=>setDate(e.target.value)} className="bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-2" />
                <input placeholder="Latitude" value={lat} onChange={e=>setLat(e.target.value)} className="bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-2" />
                <input placeholder="Longitude" value={lng} onChange={e=>setLng(e.target.value)} className="bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-2" />
                <input placeholder="Photo URLs (comma-separated)" value={photos} onChange={e=>setPhotos(e.target.value)} className="col-span-2 bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-2" />
                <input placeholder="Video URLs (comma-separated)" value={videos} onChange={e=>setVideos(e.target.value)} className="col-span-2 bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-2" />
                <button onClick={addStop} className="col-span-2 mt-1 border border-slate-600 rounded-2xl px-3 py-2 hover:bg-white/10">Add</button>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-10">
          <div className="flex gap-3 text-sm">
            <span className="border border-slate-700 rounded-2xl px-3 py-1.5">Timeline</span>
            <span className="border border-slate-700 rounded-2xl px-3 py-1.5">Gallery (Apple)</span>
          </div>
          <div className="mt-6">
            {!albumError && albumPhotos.length === 0 && (
              <div className="text-sm opacity-70">Add your Apple Shared Album token in Vercel env to auto-pull photos.</div>
            )}
            {albumError && <div className="text-sm text-red-300">{albumError}</div>}
            {albumPhotos.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {albumPhotos.map((p, i) => (
                  <figure key={i} className="group relative overflow-hidden rounded-2xl border border-slate-700">
                    <img src={p.url} alt={p.caption || ""} className="aspect-square object-cover group-hover:scale-105 transition"/>
                    {p.caption && <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-xs">{p.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm opacity-70 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Ben in Europe. Built with ❤️</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-100 opacity-70">Photos</a>
            <a href="#" className="hover:opacity-100 opacity-70">Videos</a>
            <a href="#" className="hover:opacity-100 opacity-70">Gallery</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
