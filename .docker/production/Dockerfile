FROM node:7.9.0
MAINTAINER Prasath Soosaithasan <prasath.soosaithasan@gmail.com>

# -------------------------------------------------------------------------
#  Embed application files into image
# -------------------------------------------------------------------------
WORKDIR /var/www

# Leverage docker's build cache mechanism
COPY package.json yarn.lock ./
COPY build ./

RUN yarn install --production --pure-lockfile

# -------------------------------------------------------------------------
#  pid1
# -------------------------------------------------------------------------
#
#  We need to include the docker-entrypoint script to leverage docker
#  swarm's built-in secret management.
#
COPY .docker/production/docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

ENV NODE_ENV production
EXPOSE 3000
USER node

CMD ["node", "server.js"]
