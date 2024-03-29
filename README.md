# vue-graph
This project is built on VueJS framework and javascript making use of state management features of VueX store to interact between different components.Made use of following vue js features-Options API, Composition API, Event emitters, Reactive state properties and Teleport. 

Most of the business logic stays in the vuex store and presentation is done in the components created. The components and vuex store are re-usable , mainataibale and readable. 

Express server is the backend which hosts the api to send the data to FE using the GET call.

Unit testing tool configured is Jest.
The automation suite used is Cypress framework to run end to end tests.

The application is deployed at following location - https://vue-graph-nodes.netlify.app/ using netlify app

# Description of the project
The application is a single page application. On load Fetch Nodes button is displayed. On click of the button, parent nodes are displayed. On click of the parent node, heirarchical nodes are displayed. 

On click of any node, card gets highlighted and a popup is opened to display the desription of the selected Node. The popup has a close button which can used to close the popup

# NON FUNCTIONAL REQUIREMENTS
• This assignment should contain the source files in one repository.

• You can read the data from a database or copy the data into your code.

• As a data store we recommend you to use graph database you are comfortable with.

• We expect from you to create a express.js server which has a GET endpoint which
serves the data with correct hierarchy.

• Read the data from database and serve it to frontend with JSON format.

• Read the data from Backend via GET endpoint

• Please feel free to use a front-end visualization library like D3.js.

• You can use plain VanillaJS or VueJS

• Usage of TypeScript, Sass, Webpack is your consideration

# vue-graph-assignment

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```
or

```sh
npm insall --force
```
 
### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Unit test with jest
```sh
npm run test
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run dev
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Production deployed version

```sh
Run express server locally
node src/express/server.js

https://vue-graph-nodes.netlify.app/
```

# Issues noticed in app
1. Child nodes are loaded on the same grid instead of hierearchial loading. Using recursive component tried to fix the issue but did not work as expected.

# Future scope
1. Connecting to a database and fetching the data from the database. Currently data is stored locally in the express server module.
2. Making use of any front end visualization library to display the nodes

