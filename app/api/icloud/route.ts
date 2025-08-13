import { NextResponse } from "next/server";
import { getImages } from "icloud-shared-album";

// Revalidate every 15 minutes (900 seconds) on Vercel
export const revalidate = 900;

export async function GET() {
  try {
    const token = process.env.ICLOUD_SHARED_ALBUM_TOKEN;
    if (!token) {
      return NextResponse.json({ error: "Missing ICLOUD_SHARED_ALBUM_TOKEN" }, { status: 500 });
    }
    const data = await getImages(token);

    const photos = (data.photos || []).map((p: any) => {
      const heights = Object.keys(p.derivatives || {}).map(h => parseInt(h, 10)).sort((a,b)=>b-a);
      const key = String(heights[0] || "");
      const d = p.derivatives?.[key];
      return {
        url: d?.url || null,
        width: d?.width || null,
        height: d?.height || null,
        caption: p.caption || "",
        id: p.guid || Math.random().toString(36).slice(2),
        ts: p.ts || null
      };
    }).filter(x => !!x.url);

    return NextResponse.json({ metadata: data.metadata, photos });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to fetch iCloud album" }, { status: 500 });
  }
}
