# react-stuttgart webapp

## Pending issues

* Update todos

## Project setup

1. Clone repo via `git clone https://github.com/soosap/react-stuttgart.git react-stuttgart && cd $_`
2. Install package.json deps using `yarn` or `npm install`
3. Create a `.env` environment variables file following the pattern specified in `.env.example`
4. Ask maintainer for a Contentful API Key
5. Create a docker bridge network via `docker network create react_stuttgart_network`
6. Run `yarn run compose:up`

### Update packages

1. If the containers are running, bring them down via `yarn run compose:down`
2. Install package.json deps using `yarn` or `npm install`
3. Bring the containers back up via `yarn run compose:up`

The whole app is work in progress. Contributions are welcome.
