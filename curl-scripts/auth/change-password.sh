#!/bin/#!/usr/bin/env bash

curl "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "credentials": {
      "password": "'"${OLDPASSWORD}"'",
      "password": "'"${NEWPASSWORD}"'"
    }
  }'
