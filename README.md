# react-stuttgart

## Setup

### development

1. Clone the repository w/ `$ git clone https://github.com/soosap/react-stuttgart.git`
2. Install node modules w/ `$ cd react-stuttgart && yarn install`
3. Create a `.env` file at the root of the project which contains the exact same key-value pairs that are specified inside of `.env.example`.
4. Start the webpack-dev-server using `$ yarn start`

### docker in development

**- for future reference -**
Using docker in development is blocked by a bad experience when using Hot Module Replacement. Currently, there is no proper way to sync file changes on the host w/ the mounted volume inside the container. The only viable option today is to use webpack-dev-server's watchMode. Yet running the stack w/ these options requires way to much CPU and also takes ages for code changes to be reflected in the browser. So while it technically works, it's currently not suitable for real development purposes. We keep this guide for further reference and keep an eye open on what the future of docker holds.
Starting the project w/ the attached `.docker/development/docker-compose.yml` requires the use of **docker swarm mode**. The setup is straightforward however:
1. `$ brew install docker-compose` or better yet install **Docker for Mac** or **Docker for Windows** which comes pre-installed w/ `docker` and `docker-compose`.
2. Create a single-node docker swarm via `$ docker swarm init`. We need it to leverage docker-swarm's built-in secret management capabilites.
3. Create all the necessary secrets w/ the docker secret mangement command. All the required secrets that need to be specified are listed in the docker-compose.yml's **secrets** section.
  * `$ echo supersecretpassword | docker secret create reactstuttgart_contentful_api_key -`
  * `$ echo supersecretpassword2 | docker secret create reactstuttgart_meetup_api_key -`
4. Now that the one-off setup is complete we can start up the services using `$ yarn run stack:deploy`. Likewise, we can bring down the services in the stack using `$ yarn run stack:remove`.
5. Visit `localhost:3000` and start developing.

### production

In production, we use docker swarm mode. When you push code into the `master` branch you automatically trigger a build via the TeamCity (TC) continuous integration tool. TC checks out the new code base and builds a docker image using the Dockerfile located in `.docker/production/Dockerfile`. If the build is successful the service's docker image will be updated w/ the new one.

## Workflow
Whenever we develop a new feature or fix/improve an existing one, we checkout a new branch, develop the feature/fix/improvement and eventually merge it back into master by creating a PR.

* `$ git checkout -b 'fix/improve-styling-event-history' origin/master`
* `$ git checkout -b 'feature/speaker-wanted' origin/master`
