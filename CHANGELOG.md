### 1.3.1: 2026-10-15

* Keep measuring, the tab icon and alerts running while the tab is hidden

### 1.3.0: 2026-10-15

* Alert on drops, slowdowns, bandwidth collapse, next stop, arrival and delay changes
* Warn again under a minute before a dead zone, play a tone with every alert
* Add an alerts panel with per-alert switches and a test button

### 1.2.4: 2026-10-15

* Make the offline and good line smaller with more space above it

### 1.2.3: 2026-10-15

* Dim the offline and good line

### 1.2.2: 2026-10-15

* Put the offline and good figures on their own line

### 1.2.1: 2026-10-15

* Tint offline time red and good share green, spell out the arrival countdown on one line

### 1.2.0: 2026-10-15

* Colour the tab icon by connection quality, show bandwidth and speed in the title
* Count down to the destination under the forecast
* Sample on a fixed 5 second clock and weight hexes by time covered
* Keep the probe quiet during the bandwidth test
* Use the Finnish date, keep a night train's trip after midnight
* Ignore replies for a trip that was changed meanwhile
* Cache map tiles in the service worker
* Stop the faster-connection alert firing a minute late

### 1.1.0: 2026-10-15

* Forecast from Speedtest open data where own trips have none
* Show the forecast in minutes, distance after it
* Send a test alert when alerts are turned on, keep a record on the page
* Send the Digitraffic-User header for a higher request rate
* Move the trip summary under the forecast

### 1.0.0: 2026-10-15

* Follow the train live with speed, route and stops on the map
* Measure latency every 5 seconds and bandwidth every 2 minutes
* Paint the track and 1.2 km hexagons by connection quality
* Forecast when the connection comes back from earlier trips
* Notify on reconnect, faster connection and dead zones ahead
* Work offline with cached timetable, track, tiles and samples
* Export and import every logged trip as JSON
