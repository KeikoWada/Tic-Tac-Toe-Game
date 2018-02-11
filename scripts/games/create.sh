#!/bin/sh

# TOKEN=tokengoeshere TEXT=textgoeshere sh scripts/examples/create.sh

curl "https://aqueous-atoll-85096.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=<token>" \
  --data '{
  "game": {
    "id": 3,
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": 1,
      "email": "k@gmail.com"
    },
    "player_o": null
  }
}'

echo
