#!/bin/bash

# sh scripts/json/sign-up.sh

curl "https://aqueous-atoll-85096.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
    }
  }'

echo
