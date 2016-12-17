FROM saronia/node:7.2.0.7
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
#  to generate the application artefacts.
#

# Upon successful test run build application artefacts
RUN yarn run build

# -------------------------------------------------------------------------
#  pid1
# -------------------------------------------------------------------------
#
#  We are ready to spin up an express web server to serve our app.
#  Either we run a real node.js app or we serve up static build artefacts.

EXPOSE 8080

# Serve application artefacts through a express web server
CMD ["babel-node", "server.js"]
