# Europe Journey (Next.js) — Apple Photos Auto-Pull

This version auto-pulls images from an **Apple Photos Shared Album** (public web link) and shows them in your Gallery.

## How it works
- Turn on **Public Website** for your Shared Album in Photos.
- Copy the link that looks like: `https://www.icloud.com/sharedalbum/#<TOKEN>`
- In Vercel, add an environment variable: `ICLOUD_SHARED_ALBUM_TOKEN=<TOKEN>`
- The site calls `/api/icloud` (server-side) which uses the token to fetch image URLs. Cached for 15 minutes.

> Note: Apple Shared Albums reduce photo resolution (typically ~2048px). For original quality, consider a Shared iCloud Photo Library or another source.

## Local
```bash
npm install
npm run dev
```

## Deploy (Vercel)
1. Push repo to GitHub.
2. Import in Vercel (Framework: Next.js).
3. After first deploy, go to **Settings → Environment Variables** and set:
   - `ICLOUD_SHARED_ALBUM_TOKEN` = your token (the characters after `#` in the album URL).
4. Redeploy. Gallery will auto-fill.
