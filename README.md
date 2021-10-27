# Getting Started Eugene's test project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installating

If you are using nvm, please try `nvm use` inside the root directory.\
It will install Node v14.15.3, what version I used for building this project.\
Or you can manually install Node v14.15.3\
`npm install` will install all packages needed in the project.

## Code formatting

There project is using Prettier for code formatting and you can update the formatting option on `.prettierrc` file.\
And you can also modify vscode project settings from `.vscode` folder.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\

### `npm run gql`

Builds generated graphql types by using `graphql-codegen` CLI.\
You can add plugins or customize it by updating `codegen.yml` file in the project root directory

> The project is using graphql-node API I wrote with firebase, so API repo doesn't exist here. It is using schema from `http://localhost:4000/graphql` but needs to be updated when we go with this project in development. Because of that, when you run `npm run gql` it will fail to load schema.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
