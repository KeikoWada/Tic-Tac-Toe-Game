#!/bin/bash

# ID=2 sh scripts/json/change-password.sh

curl "https://aqueous-atoll-85096.herokuapp.com/change-password/:id/${ID}" \
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
