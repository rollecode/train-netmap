### 1.5.2: 2026-10-15

* Name the best and worst stretch of the trip, with weak and offline shares

### 1.5.1: 2026-10-15

* Size alert cards to their text and make them more translucent

### 1.5.0: 2026-10-15

* Give each kind of alert its own tone and a coloured icon in the system banner

### 1.4.9: 2026-10-15

* Slide alert cards in and out like macOS, with a softer shadow
* Drop the alert line under the readings

### 1.4.8: 2026-10-15

* Report in the alerts panel whether the system banner was shown, and why not

### 1.4.7: 2026-10-15

* Ask for notification permission as soon as the alerts panel opens on localhost
* Make the test alert button green, add an Enable system notifications button

### 1.4.6: 2026-10-15

* Show the import result in green

### 1.4.5: 2026-10-15

* Round the buttons into pills

### 1.4.4: 2026-10-15

* Offer Import data on the first screen, and resume the imported trip

### 1.4.3: 2026-10-15

* Close the trip and alerts panels with Esc or a click outside

### 1.4.2: 2026-10-15

* Offer the trains running now towards the destination when there is no direct train
* Start the route at the stop where this train was boarded after a change

### 1.4.1: 2026-10-15

* Explain a missing direct train and what to enter instead

### 1.4.0: 2026-10-15

* Add start.command and start.sh, which serve the page locally so system notifications stick
* Mark alert cards with a dot instead of a bar

### 1.3.4: 2026-10-15

* Show every alert as a card on the page, and the last one in the alerts panel
* Ask for notification permission once, only from the panel's link

### 1.3.3: 2026-10-15

* Play the tone, flash the title and write the alert line without notification permission
* Say in the alerts panel what the browser answered and how to get system banners

### 1.3.2: 2026-10-15

* Colour the figures in the hexagon tooltip
* Repaint the tab icon at once, show the bandwidth estimate in the title
* Take one sample at a time in the worker

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
