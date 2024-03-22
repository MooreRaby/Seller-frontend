Star⭐ the repo if you like what you see😉.
# 1. Dashboard Page
<img src="src/assets/images/Screenshot 2024-03-22 091721.png">

# 2. Menu nav
<img src="src/assets/images/Screenshot 2024-03-22 091817.png">

# 3. Order Page
<img src="src/assets/images/Screenshot 2024-03-22 091842.png" >

## Getting started

#### Developed with:

- [React](https://reactjs.org/) - ^18.2.0
- [Node.js](https://nodejs.org/en/) - 18.12.1

First, install the dependencies using `npm install` or `yarn install`.

Then, run the development server:

```bash
yarn start
# OR
npm run start
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing pages or components. The page auto-updates as you edit and save a file.

To avoid any issues, please make sure you have the latest stable version of [Node.js](https://nodejs.org/en/) installed.

If you need to have multiple versions of Node.js installed, you can use [nvm](https://github.com/nvm-sh/nvm).

### List of available scripts:

This Dashboard Template is developed using Vite. You can find more information about Vite [here](https://vitejs.dev/).

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) with [rich built-in features](https://vitejs.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).
- A [build command](https://vitejs.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

### `start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

You can customize the build process using the `vite.config.js` file.

### `serve`

Serves the production build from the `build` folder locally.

### How to customize icon font

You can import *selection.json* located in `src/fonts/icomoon` back to the [IcoMoon app](https://icomoon.io/app) using the *Import Icons* button (or via Main Menu → Manage Projects) to retrieve icon selection.

### How to use environment variables

All environment variables should be prefixed with `VITE_` in order to be accessible in the app.

You can use environment variables in your app by prefixing them with `import.meta.env.VITE_`:

```js
const API_KEY = import.meta.env.VITE_API_KEY
```

This dashboard template uses environment variables to store the API keys and other sensitive data used for Google Maps, Google Analytics and social media login functionality.

##### .env.local example:

```bash
VITE_FB_APP_ID=<your_facebook_app_id>
VITE_GOOGLE_APP_ID=<your_google_app_id>
VITE_MAP_KEY=<your_google_maps_key>
VITE_GA=<your_google_analytics_key>
```

------

## File structure

    .
    ├── public                  # static files
    │   ├── favicon.ico
    │   ├── robots.txt
    ├── src                     # source files
    │   ├── assets              # static assets
    │   ├── components          # reusable components shared across the app
    │   ├── constants           
    │   ├── contexts            # context providers
    │   ├── db                  # fake database
    │   ├── fonts               
    │   ├── hooks               # custom hooks
    │   ├── pages               
    │   ├── styles              # global styles
    │   ├── ui                  # reusable UI components
    │   ├── utils               # helper functions
    │   ├── widgets             # reusable widgets
    │   ├── App.jsx              # main app component
    │   ├── index.jsx            # app entry point
    ├── .eslintrc                  # eslint config
    ├── .htaccess                       # htaccess file for Apache server
    ├── index.html                      # main html file
    ├── jsconfig.json                   # jsconfig for IDE
    ├── package.json   
    ├── postcss.config.js               # postcss config for tailwind
    ├── tailwind.config.js              # tailwind config where you can add additional colors, fonts, etc.
    ├── vite.config.js
