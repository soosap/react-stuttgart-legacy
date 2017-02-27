#!/bin/bash

docker build -f docker/build/Dockerfile -t ${DOCKER_HUB_USERNAME}/${APP_NAME}:${APP_VERSION} .
