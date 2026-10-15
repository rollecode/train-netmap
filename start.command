#!/bin/sh
# Serves this folder on localhost and opens the page, so the browser keeps notification permission and caches tiles.
cd "$(dirname "$0")" || exit 1
PORT=8080
URL="http://localhost:$PORT/"
if command -v open >/dev/null 2>&1; then (sleep 1; open "$URL") &
elif command -v xdg-open >/dev/null 2>&1; then (sleep 1; xdg-open "$URL") &
fi
echo "Train netmap at $URL. Close this window to stop."
exec python3 -m http.server "$PORT" --bind 127.0.0.1
