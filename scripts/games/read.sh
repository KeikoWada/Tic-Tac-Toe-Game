#!/bin/sh

  # ID=2 TOKEN=tokengoeshere TEXT=textgoeshere sh scripts/examples/update.sh

curl --include --request GET " https://aqueous-atoll-85096.herokuapp.com/games?over=true" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
