#!/bin/#!/usr/bin/env bash

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'
