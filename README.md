# Train netmap

![Made in Finland](https://img.shields.io/badge/Made_in_Finland-002F6C?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxOCAxMSc%2BPHJlY3Qgd2lkdGg9JzE4JyBoZWlnaHQ9JzExJyBmaWxsPScjZmZmJy8%2BPHJlY3QgeD0nNScgd2lkdGg9JzMnIGhlaWdodD0nMTEnIGZpbGw9JyMwMDJmNmMnLz48cmVjdCB5PSc0JyB3aWR0aD0nMTgnIGhlaWdodD0nMycgZmlsbD0nIzAwMmY2YycvPjwvc3ZnPg%3D%3D) ![VR](https://img.shields.io/badge/VR-00A651?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nI2ZmZic%2BPHBhdGggZD0nTTEyIDJDNy42IDIgNCAyLjUgNCA2djkuNUEzLjUgMy41IDAgMCAwIDcuNSAxOUw2IDIwLjVWMjFoMTJ2LS41TDE2LjUgMTlhMy41IDMuNSAwIDAgMCAzLjUtMy41VjZjMC0zLjUtMy42LTQtOC00ek03LjUgMTdhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6bTMuNS02SDZWNmg1djV6bTIgMFY2aDV2NWgtNXptMy41IDZhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6Jy8%2BPC9zdmc%2B) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white) ![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-7EBC6F?style=for-the-badge&logo=openstreetmap&logoColor=white)

An **offline-first single html-file page** that follows your train across Finland and records how good the mobile connection is along the way, so the next trip on the same line can tell you when the connection comes back.

<img width="1661" height="1037" alt="image" src="https://github.com/user-attachments/assets/5dea2fa3-98c6-43e5-b420-49b38d51ce43" />

## Quick start

1. Download or clone this repository.
2. Double-click `start.command` on a Mac, or run `./start.sh` on Linux. It serves the folder on `http://localhost:8080/` and opens it in your browser. Opening `index.html` straight from the file works too, with one difference: browsers forget notification permission for a file-opened page, so alerts then show only inside the page.
3. Pick your departure and arrival stations. The train fills itself in, or type one, as `IC 63`, `IC63` or `63`.

That is all it needs. The page tells you on screen if something is missing. The map background wants a free key from [CARTO](https://carto.com/basemaps): copy `config.example.js` to `config.js`, paste the key in and reload.

A trip can also be preset in the address: `index.html?train=63&from=PM&to=OL`, with Digitraffic's station codes.

## How it measures

Every 5 seconds the page sends a 300-byte request to Cloudflare and times the answer. No answer within 10 seconds counts as offline. Every 2 minutes it downloads 2 MB from Cloudflare to measure bandwidth, because the browser's own estimate stops at 10 Mbps.

The train's position and speed come from Digitraffic every 15 seconds. While offline, the position is moved along the track at the last known speed, so dead zones are painted roughly where they happened.

The track is the same train's GPS trail from an earlier day, fetched once per train. The forecast ("Connection should be back in about 4 min") reads two things: the 1.2 km hexagons built from every trip you have logged in this browser, and under them Ookla's Speedtest results for Finland in 610 m tiles, merged from the last four quarters and shipped in `data/fi-mobile.js`. Your own trips win where they exist. Where no one has run a Speedtest within 3 km of the track, the forecast expects no signal.

## Alerts

Press "Alerts" to choose which ones you want; the same panel has a test button. Every alert shows a card on the page, plays a short tone and puts its text in the tab title for 20 seconds; the panel keeps the last one. A system notification banner comes on top of that once you allow notifications from the panel, which sticks when the page was started with `start.command` or `start.sh`; a browser forgets the grant for a page opened straight from the file. The alerts are: a dead zone 3 minutes ahead and again under a minute ahead, the connection dropping, when it is expected back, when it is back, when it is slow for half a minute, when it gets faster, when faster coverage is 2 minutes ahead, bandwidth collapsing under 1 Mbps or recovering, the next stop 2 minutes out, the destination 10 and 2 minutes out, and the train's delay changing by 3 minutes or more. Each alert is also written under the readings for two minutes, so you can tell when the browser sent one that the system swallowed.

Two things on the computer decide whether you see them. On macOS the browser must be allowed under System Settings, Notifications, and a Focus mode such as Do Not Disturb hides them unless the browser is on that Focus mode's allowed list; a web page cannot get past Focus by itself.

The measuring runs in a web worker, which Chrome does not slow down in a hidden tab, so samples, the tab icon and alerts keep going while you browse in other tabs. The one thing that can stop it is Chrome's Memory Saver discarding the tab after a long time unused; turn Memory Saver off or add the page to its exceptions under chrome://settings/performance if you leave the page hidden for an hour or more.

## Working on it

After cloning, run `git config core.hooksPath .githooks` once. A pre-commit hook then keeps `version.js` in step with the changelog. The page shows the version bottom right, with the checked-out commit when it is served from the folder.

## Offline

Leaflet is in the repository, and the station list, timetable, track and samples are kept in the browser, so a trip that was set up once comes back without a connection. Map tiles along the route ahead are fetched while online.

Started with `start.command` or `start.sh`, a service worker keeps the page and every tile it has seen. Opened straight from the file, tiles rely on the browser's own cache instead.

## Data and privacy

- Train positions, timetables and the track: [Fintraffic Digitraffic](https://www.digitraffic.fi), CC BY 4.0.
- Map tiles: [CARTO](https://carto.com) on OpenStreetMap data.
- Latency and bandwidth: `cp.cloudflare.com` and `speed.cloudflare.com`.
- Masts: cell sites from [OpenCelliD](https://opencellid.org), CC BY-SA 4.0, in `data/fi-cells.js`, with cells of one operator within 150 m merged into a site. They show as beacons coloured by operator, Elisa blue, Telia purple, DNA pink, with a circle of the distance the site has been measured from when zoomed in, and every Speedtest tile in view, so what surrounds a mast is measured rather than guessed. Hover a mast for the operator, the technologies and the measurement count. "Masts" turns it all off. That licence covers `data/fi-cells.js` only. It is what volunteers have mapped, so it is far from every base station in the country.
- Coverage baseline: [Speedtest by Ookla Global Mobile Network Performance Maps](https://www.ookla.com/ookla-for-good/open-data), CC BY-NC-SA 4.0. That licence covers `data/fi-mobile.js` only; the code is MIT.

Nothing else leaves the browser. Export writes every trip to one JSON file, Import merges such a file back in, and the page warns when browser storage is full.
