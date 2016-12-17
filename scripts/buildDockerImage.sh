#!/bin/bash

docker build -t ${DOCKER_HUB_ORGANIZATION}/${APP_NAME}:${APP_VERSION} .
