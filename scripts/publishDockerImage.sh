#!/bin/bash

docker login -u ${DOCKER_HUB_USERNAME} -p ${DOCKER_HUB_PASSWORD}
docker push ${DOCKER_HUB_USERNAME}/${APP_NAME}:${APP_VERSION}
