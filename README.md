# react-starter-kit

## Pending issues

* Write components using styled-components!
* Use FlowType
* Improve technologies table in README
* Use yarn powered docker image
* Protect individual routes, best practice?! requireAuth HoC?
* Run unit tests in a single container
* Run integration tests in a multi-container setting w/ docker-compose
* Write stories w/ react-storyboard or at least evaluate if it makes sense


## Project setup

1. Clone repo via `git clone https://github.com/saronia/react-starter-kit.git react-starter-kit && cd $_`
2. Install package.json deps using `yarn` or `npm install`
3. Compile project-specific semantic-ui css and js via `yarn run semantic:build` 
4. Create a `.env` environment variables file following the pattern specified in `.env.example`

## npm scripts

| Script | Description |
|--------|-------------|
| **start** | Start express server |
| **localtunnel** | Make localhost:8080 publicly available through a custom domain as long as the localtunnel exists |

## Technology stack

| Technology | Purpose | State | Comment |
|------------|---------|-------|---------|
| **apollo** | GraphQL client | yes |  |
| browsersync | Cross-device ui testing | yes |  |
| styled-components | Library for styling React components | yes | |
| **docker** | Continuous deployment | no |  |
| editorconfig | A team's agreed upon editor configuration | yes |   |
| **enzyme** | Javascript testing utilities for React | no | wip |
| eslint | Maintain code quality and scalability | yes | preset: airbnb |
| express | Application web server | yes |   |
| **jest** | Javascript testing framework for React | no | is jsdom still relevant? |
| localtunnel | Share work-in-progress w/ team | yes | |
| react | Javascript framework of choice | yes | |
| react-router | React's defacto routing library | yes | |
| recompose | Managing higher order components in React | yes | |
| **redux** | Handling application state | no | wip |
| semantic | Component framework to design beautiful ui | yes |  |
| segment | Integration of third-party services such as Google Analytics | yes |  |
| **vault** | Secret management | no | wip |
| webpack | Bundle dependencies into modules | yes | |
| yarn | Speed up package installation/ensure package consistency across installations | yes |   |
| **plop** | Generator to create boilerplate files | no | wip |


styled-components
https://polished.js.org/docs/#rgba
