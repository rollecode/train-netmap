# Train netmap

![Made in Finland](https://img.shields.io/badge/Made_in_Finland-002F6C?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxOCAxMSc%2BPHJlY3Qgd2lkdGg9JzE4JyBoZWlnaHQ9JzExJyBmaWxsPScjZmZmJy8%2BPHJlY3QgeD0nNScgd2lkdGg9JzMnIGhlaWdodD0nMTEnIGZpbGw9JyMwMDJmNmMnLz48cmVjdCB5PSc0JyB3aWR0aD0nMTgnIGhlaWdodD0nMycgZmlsbD0nIzAwMmY2YycvPjwvc3ZnPg%3D%3D) ![VR](https://img.shields.io/badge/VR-00A651?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nI2ZmZic%2BPHBhdGggZD0nTTEyIDJDNy42IDIgNCAyLjUgNCA2djkuNUEzLjUgMy41IDAgMCAwIDcuNSAxOUw2IDIwLjVWMjFoMTJ2LS41TDE2LjUgMTlhMy41IDMuNSAwIDAgMCAzLjUtMy41VjZjMC0zLjUtMy42LTQtOC00ek03LjUgMTdhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6bTMuNS02SDZWNmg1djV6bTIgMFY2aDV2NWgtNXptMy41IDZhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6Jy8%2BPC9zdmc%2B) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white) ![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-7EBC6F?style=for-the-badge&logo=openstreetmap&logoColor=white)

An **offline-first single html-file page** that follows your train across Finland and records how good the mobile connection is along the way, so the next trip on the same line can tell you when the connection comes back.

<img width="1642" height="1047" alt="Train netmap" src="https://github.com/user-attachments/assets/fae6f96e-d3bc-4123-8cea-f3da810907d1" />

## Quick start

1. Download or clone this repository.
2. Open `index.html` in Chrome or Chromium.
3. Pick your departure and arrival stations. The train fills itself in, or type one, as `IC 63`, `IC63` or `63`.

That is all it needs. The page tells you on screen if something is missing. The map background wants a free key from [CARTO](https://carto.com/basemaps): copy `config.example.js` to `config.js`, paste the key in and reload.

A trip can also be preset in the address: `index.html?train=63&from=PM&to=OL`, with Digitraffic's station codes.

## How it measures

Every 5 seconds the page sends a 300-byte request to Cloudflare and times the answer. No answer within 10 seconds counts as offline. Every 2 minutes it downloads 2 MB from Cloudflare to measure bandwidth, because the browser's own estimate stops at 10 Mbps.

The train's position and speed come from Digitraffic every 15 seconds. While offline, the position is moved along the track at the last known speed, so dead zones are painted roughly where they happened.

The track is the same train's GPS trail from an earlier day, fetched once per train. The coverage hexagons are about 1.2 km wide and are built from every trip you have logged in this browser, which is also what the forecast ("Connection should be back in about 4 min") reads from. On a line you have not travelled before it has nothing to say.

## Offline

Leaflet is in the repository, and the station list, timetable, track and samples are kept in the browser, so a trip that was set up once comes back without a connection. Map tiles along the route ahead are fetched while online.

Opened straight from the file, tiles rely on the browser's own cache. To be certain they are kept, serve the folder once while online and open that address instead:

```
python3 -m http.server 8080
```

A service worker then keeps the page and every tile it has seen.

## Data and privacy

- Train positions, timetables and the track: [Fintraffic Digitraffic](https://www.digitraffic.fi), CC BY 4.0.
- Map tiles: [CARTO](https://carto.com) on OpenStreetMap data.
- Latency and bandwidth: `cp.cloudflare.com` and `speed.cloudflare.com`.

Nothing else leaves the browser. Export writes every trip to one JSON file, Import merges such a file back in, and the page warns when browser storage is full.
