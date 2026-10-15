# Train netmap

![Made in Finland](https://img.shields.io/badge/Made_in_Finland-002F6C?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxOCAxMSc%2BPHJlY3Qgd2lkdGg9JzE4JyBoZWlnaHQ9JzExJyBmaWxsPScjZmZmJy8%2BPHJlY3QgeD0nNScgd2lkdGg9JzMnIGhlaWdodD0nMTEnIGZpbGw9JyMwMDJmNmMnLz48cmVjdCB5PSc0JyB3aWR0aD0nMTgnIGhlaWdodD0nMycgZmlsbD0nIzAwMmY2YycvPjwvc3ZnPg%3D%3D) ![VR](https://img.shields.io/badge/VR-00A651?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nI2ZmZic%2BPHBhdGggZD0nTTEyIDJDNy42IDIgNCAyLjUgNCA2djkuNUEzLjUgMy41IDAgMCAwIDcuNSAxOUw2IDIwLjVWMjFoMTJ2LS41TDE2LjUgMTlhMy41IDMuNSAwIDAgMCAzLjUtMy41VjZjMC0zLjUtMy42LTQtOC00ek03LjUgMTdhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6bTMuNS02SDZWNmg1djV6bTIgMFY2aDV2NWgtNXptMy41IDZhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6Jy8%2BPC9zdmc%2B) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white) ![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-7EBC6F?style=for-the-badge&logo=openstreetmap&logoColor=white)

An **offline-first single html-file page** that follows your train across Finland and records how good the mobile connection is along the way, so the next trip on the same line can tell you when the connection comes back.

<img width="1633" height="1039" alt="image" src="https://github.com/user-attachments/assets/a7f2c9c4-8e4b-4ea0-bf77-493b3ae3eed6" />

## Quick start

1. Download or clone this repository.
2. Double-click `start.command` on a Mac, or run `./start.sh` on Linux. It serves the folder on `http://localhost:8080/` and opens it in your browser. Opening `index.html` straight from the file works too, with one difference: browsers forget notification permission for a file-opened page, so alerts then show only inside the page.
3. Pick your departure and arrival stations. The train fills itself in, or type one, as `IC 63`, `IC63` or `63`. After a change of trains, the station where you boarded this one works best; with no direct train the page lists the trains running towards your destination right now.

That is all it needs. The page tells you on screen if something is missing. The map background wants a free key from [CARTO](https://carto.com/basemaps): copy `config.example.js` to `config.js`, paste the key in and reload.

A trip can also be preset in the address: `index.html?train=63&from=PM&to=OL`, with Digitraffic's station codes.

## Features

🚆 Follows your train live, with speed, the real track and every stop, and keeps the map pinned to it.<br>
📶 Measures latency every 5 seconds and bandwidth every 2 minutes, from a web worker that keeps going in a hidden tab.<br>
🗺️ Paints the track and 1.2 km hexagons by connection quality, green, yellow, red and grey, with the measured median in each hexagon's tooltip.<br>
🔮 Forecasts the connection ahead: dead zones, when it comes back, when it gets faster, in minutes at the train's speed, from your own trips first and Speedtest data where you have none.<br>
📈 Gets more precise with every trip on a line, in either direction; trips older than 30 days fold into the coverage map so storage never fills.<br>
🔔 Alerts for dead zones ahead, drops, recoveries, slowdowns, bandwidth, next stop, arrival and delay changes, each with its own tone, a card on the page, the tab title and a system banner.<br>
🗼 Shows every mapped mast in Finland as a beacon, coloured by operator where OpenCelliD knows it, the Speedtest coverage around them, and the nearest mast to the train.<br>
📍 Route line at the bottom with all stops, the next one with its time, the delay, and the connection quality of every stretch travelled, plus the best and worst stretch of the trip.<br>
⏱️ Counts down to the destination to the second, and shows bandwidth and speed in the tab title with a tab icon that glows with the connection.<br>
📴 Works offline: Leaflet, the station list, the timetable, the track, the samples and the map tiles along the route are kept in the browser.<br>
💾 Keeps every trip in the browser, asks you to export on arrival, and imports the file back into a cleared browser or another computer.

## How it measures

Every 5 seconds the page sends a 300-byte request to Cloudflare and times the answer. No answer within 5 seconds counts as offline. Every 2 minutes it downloads 2 MB from Cloudflare to measure bandwidth, because the browser's own estimate stops at 10 Mbps. The measuring runs in a web worker, which Chrome does not slow down in a hidden tab, so samples, the tab icon and alerts keep going while you browse elsewhere. The one thing that can stop it is Chrome's Memory Saver discarding the tab after a long time unused; turn Memory Saver off or add the page to its exceptions under chrome://settings/performance if you leave the page hidden for an hour or more.

The train's position and speed come from Digitraffic every 15 seconds. While offline, the position is moved along the track at the last known speed, so dead zones are painted roughly where they happened. The track is the same train's GPS trail from an earlier day, fetched once per train.

The forecast reads two things: the 1.2 km hexagons built from every trip logged in this browser, and under them Ookla's Speedtest results for Finland in 610 m tiles, merged from the last four quarters and shipped in `data/fi-mobile.js`. Your own trips win wherever they exist, and the forecast line says which source it used. Where no one has run a Speedtest within 3 km of the track, the forecast expects no signal.

## Alerts

Press "Alerts" to choose which ones you want; the same panel has an "Enable system notifications" button and a test button. Every alert shows a card on the page, plays a short tone, puts its text in the tab title for 20 seconds, and the panel keeps the last one together with what became of the system banner. A system banner comes on top of that once notifications are allowed, which sticks when the page was started with `start.command` or `start.sh`; a browser forgets the grant for a page opened straight from the file.

The alerts are: a dead zone 3 minutes ahead and again under a minute ahead, the connection dropping, when it is expected back, when it is back, when it is slow for half a minute, when it gets faster, when faster coverage is 2 minutes ahead, bandwidth collapsing under 1 Mbps or recovering, the next stop 2 minutes out, the destination 10 and 2 minutes out, the train's delay changing by 3 minutes or more, and arrival. Bad news falls in tone, good news rises, information is two even notes.

Two things on the computer decide whether you see the banners. On macOS the browser must be allowed under System Settings, Notifications, and a Focus mode such as Do Not Disturb hides them unless the browser is on that Focus mode's allowed list; a web page cannot get past Focus by itself.

## Offline

Leaflet is in the repository, and the station list, timetable, track and samples are kept in the browser, so a trip that was set up once comes back without a connection. Map tiles along the route ahead are fetched while online. Started with `start.command` or `start.sh`, a service worker keeps the page and every tile it has seen; opened straight from the file, tiles rely on the browser's own cache instead.

## Working on it

After cloning, run `git config core.hooksPath .githooks` once. A pre-commit hook then keeps `version.js` in step with the changelog. The page shows the version bottom right, with the checked-out commit when it is served from the folder. Every batch of changes gets a changelog entry, and a push that touches `CHANGELOG.md` publishes the release.

## Data and privacy

- Train positions, timetables and the track: [Fintraffic Digitraffic](https://www.digitraffic.fi), CC BY 4.0.
- Map tiles: [CARTO](https://carto.com) on OpenStreetMap data.
- Latency and bandwidth: `cp.cloudflare.com` and `speed.cloudflare.com`.
- Coverage baseline: [Speedtest by Ookla Global Mobile Network Performance Maps](https://www.ookla.com/ookla-for-good/open-data), CC BY-NC-SA 4.0, in `data/fi-mobile.js`.
- Masts: every communication mast mapped in [OpenStreetMap](https://www.openstreetmap.org/copyright), ODbL, with cell data from [OpenCelliD](https://opencellid.org), CC BY-SA 4.0, attached where a cell was seen within 1.2 km, in `data/fi-cells.js`. A mast with cell data pulses in its operator's colour, Elisa blue, Telia purple, DNA pink; a mast without it pulses grey; a cell seen from the road with no mapped mast near it sits dim and still. Hover a mast for the operator, the technologies and how far away it has been measured from. It is what volunteers and app users have recorded, so it is far from every base station in the country.

Those licences cover the two data files only; the code is MIT. Nothing else leaves the browser. Every trip stays in the browser's storage for the address you use and sharpens the forecast on that line the next time. On arrival the page asks you to export: the file holds every trip logged so far, and Import on the first screen puts it all back.
