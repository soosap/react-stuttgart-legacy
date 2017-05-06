FROM node:7.9.0
MAINTAINER Prasath Soosaithasan <prasath.soosaithasan@gmail.com>

# Change the working directory to /var/www
WORKDIR /var/www

# -------------------------------------------------------------------------
#  Embed application files into image
# -------------------------------------------------------------------------

# Leverage docker's build cache mechanism
COPY package.json yarn.lock .docker ./

# Install the node.js production dependencies
RUN yarn install --production --pure-lockfile

COPY build .

# -------------------------------------------------------------------------
#  pid1
# -------------------------------------------------------------------------
#
#  We need to include the docker-entrypoint script to leverage docker
#  swarm's built-in secret management.
#
ENTRYPOINT ["./.docker/production/docker-entrypoint.sh"]
#  We are ready to spin up an express web server to serve our app.

ENV NODE_ENV production
EXPOSE 3000

# Serve application artefacts through a express web server
CMD ["babel-node", "server.js"]
