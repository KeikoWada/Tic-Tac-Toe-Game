#!/bin/sh

# TOKEN=tokengoeshere TEXT=textgoeshere sh scripts/examples/create.sh

curl "https://aqueous-atoll-85096.herokuapp.com/games/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\

echo
