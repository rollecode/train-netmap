### 2.0.5: 2026-10-16

* Count down to the next stop to the second, bottom right

### 2.0.4: 2026-10-16

* Show the time left to the next change bottom right, with the delay on its own line

### 2.0.3: 2026-10-16

* Show offline in red everywhere, the headline and the train marker included

### 2.0.2: 2026-10-16

* Count down to the journey's final stop only, show the offline share in red

### 2.0.1: 2026-10-16

* Move Follow train, Whole route and Masts to pill switches at the bottom right
* Make Whole route a switch that returns to the previous view
* Put Change trip, Alerts, Export and Import behind a settings button
* Show offline in red and time with no samples in grey
* Count the connection as back only when pages load again

### 2.0.0: 2026-10-16

* Track journeys with train changes, switching trains at each change
* Draw connecting trains on the map, name railbuses Kiskobussi
* Give each connecting train the same From, To and Train fields
* Use only GPS trails that cover a train's whole stretch, ask again for missing stops
* Fetch map tiles for the whole journey and around the view for offline use
* Show the time at every stop on the map
* Separate the map switches from the buttons that open something

### 1.8.2: 2026-10-15

* Spell out the online and offline time in full on wide screens

### 1.8.1: 2026-10-15

* Bring the README up to date with a Features section

### 1.8.0: 2026-10-15

* Ask to export on arrival, with what the saved trips do for the next one
* Fold trips older than 30 days into the coverage map, warn before storage fills
* Say whether a forecast comes from your own trips or from Speedtest data
* End every header line with a full stop

### 1.7.3: 2026-10-15

* Write clock times with a colon
* Fade the masts and their beacons

### 1.7.2: 2026-10-15

* Show every mapped mast, with operator data where OpenCelliD has it, and the nearest mast to the train
* Add the good time of the trip next to its share

### 1.7.1: 2026-10-15

* Place cell sites on mapped masts where one is near, dim the ones only seen from the road

### 1.7.0: 2026-10-15

* Show OpenCelliD cell sites with operator colours, measured range and technologies

### 1.6.2: 2026-10-15

* Draw measured Speedtest coverage around the masts instead of guessed discs, and calm the beacons

### 1.6.1: 2026-10-15

* Colour the masts, brighten their beacons and draw a 3 km disc around each, on by default
* Follow the train from the start, ask for notifications on the first click
* Show the version and commit bottom right

### 1.6.0: 2026-10-15

* Show communication masts from OpenStreetMap as beacons with a Masts switch

### 1.5.4: 2026-10-15

* Write durations as "1 hour, 10min, 5s" everywhere, and the countdown as "2 hours, 4 minutes, 7 seconds"

### 1.5.3: 2026-10-15

* Shorten the alert switch labels
* Put the worst stretch on its own line

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
