#!/bin/bash

# Add node_modules to PATH
export PATH=/var/www/node_modules/.bin:${PATH}

# Install npm packages
yarn --cache-folder /home/ubuntu/.yarn-cache

exec $@
# We use the exec command along with the bash dollar @ positional parameter specifier.
# The exec command replaces the current bash shell program with the command string
# that follows, relinquishing control of the current pid1 process to the specified
# command, i.e. babel-node server.js, without creating a new one.
