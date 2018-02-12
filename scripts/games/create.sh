#!/bin/sh

# TOKEN=tokengoeshere TEXT=textgoeshere sh scripts/examples/create.sh

curl "http://tic-tac-toe.wdibos.com/games/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\

echo
