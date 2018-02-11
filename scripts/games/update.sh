#!/bin/sh

# ID=2 TOKEN=tokengoeshere TEXT=textgoeshere sh scripts/examples/update.sh

curl "https://aqueous-atoll-85096.herokuapp.com//games/:id/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=<token>" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
