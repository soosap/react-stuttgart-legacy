FROM saronia/node:7.2.0.8
MAINTAINER Prasath Soosaithasan <prasath.soosaithasan@gmail.com>

# Change the working directory to /var/www
WORKDIR /var/www

# Leverage docker's build cache mechanism
COPY package.json yarn.lock ./

# Add test docker-entrypoint shell script
ADD docker/test/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["jest"]

# Add application source (to be refined/later we check in only the files required to execute testing!
COPY . .
