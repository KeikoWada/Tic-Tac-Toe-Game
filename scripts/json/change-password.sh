#!/bin/bash

# ID=2 sh scripts/json/change-password.sh

curl "http://tic-tac-toe.wdibos.com/change-password/:id/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old":"'"${OLD_PASSWORD}"'",
      "new":"'"${NEW_PASSWORD}"'"
    }
  }'

echo
