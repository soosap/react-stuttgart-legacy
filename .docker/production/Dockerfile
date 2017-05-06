FROM node:7.9.0
MAINTAINER Prasath Soosaithasan <prasath.soosaithasan@gmail.com>

# Change the working directory to /var/www
WORKDIR /var/www

# -------------------------------------------------------------------------
#  Embed application files into image
# -------------------------------------------------------------------------
#
#  We first install the application's external dependencies using yarn.
#  We leverage docker's layer caching to speed up builds. The command to
#  download npm dependencies will only be retriggered in case the
#  "package.json" or the "yarn.lock" files change. Only thereafter, we
#  bake in the application-specific files into a separate layer.

# Leverage docker's build cache mechanism
COPY package.json yarn.lock ./

# Install the app's production dependencies using yarn
RUN yarn --pure-lockfile

# Place all files from the build context inside the image
COPY . .

# -------------------------------------------------------------------------
#  Build application artefacts
# -------------------------------------------------------------------------
#
#  Next we run unit tests and when successful we kick off a build script
#  to generate the application artefacts. Testing and linting covered in
#  yarn run prebuild.
#
RUN yarn run build

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
