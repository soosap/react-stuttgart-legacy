#!/bin/bash

ENVCONSUL_OPTS=""

if [ -n "${ENVCONSUL_OPTS}" ]; then
  echo "inside"
else
  echo "outside"
fi
