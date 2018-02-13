#!/bin/sh

# ID=2 TOKEN=tokengoeshere TEXT=textgoeshere sh scripts/examples/update.sh




  curl --include --request PATCH " https://aqueous-atoll-85096.herokuapp.com/games/${ID}" \
    --header "Content-Type: application/json" \
    --header "Authorization: Token token=${TOKEN}" \
    --data '{
      "game": {
        "cell": {
          "index": "0",
          "value": "x"
        },
        "over": "FALSE"
      }
    }'

  echo
