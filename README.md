# vue-spa-starter

> Starter Vue project for Goalbook frontend tech challenge

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## What's Included?
- Default route to demonstrate the most basic router usage (single page, no parameters)
- Sample dynamic route to demonstrate capturing URL parameters and passing them to a component as props
- Sample folder with demo components to get familiar with using/developing/composing Vue components.
- Starter/sample API code with example request to fist-to-five data api

Take some time to peruse/experiment with the sample code and read the comments. Places to start:
- `main.js` is the entry point that bootstraps the entire App
- `App.vue` is the top level component. In its template there is a `<router-view>` where content is rendered based on the current route
- `router/index.js` defines the app's routes and corresponding components (e.g. `/` maps to the `Hello` component)
- `sample/Hello.vue` component is a "kitchen-sink" component that demonstrates the basics of Vue

## Optional dependencies
- Bootstrap CSS v3 (to use, uncomment the relevant import line in main.js)
- The sample API code uses [axios](https://github.com/mzabriskie/axios), a promise-based http client, for making http requests but you're not required to use it

Feel free to use any additional dependencies in this project (e.g. a different CSS framework, lodash, jquery, etc). You can add them by doing `npm install <library> --save` and importing them where needed, or including a link/script tag in index.html if using a CDN. For example, you may find the below helpful (but completely optional):
- [uuid](https://www.npmjs.com/package/uuid) for generating unique IDs
- [Vuex](https://www.npmjs.com/package/vuex) for state management in Vue applications

## .vue files??
`.vue` files allow us to define components in a single file (template in `<template>`, javascript in `<script>`, and styles in `<style>`). This makes it easy and quick to make component-level changes of any kind. The project is pre-configured to load and bundle `.vue` files so you can write regular javascript and ES6 with imports and exports within the script tag, and css rules within the style tag.

Check out the sample components in `sample/` to see how this works.

## Helpful Links
Many of the comments in the sample code link to relevant pages of the docs.

- [Vue docs](https://vuejs.org/v2/guide/)
- [Vue Router docs](http://router.vuejs.org/en/)

Syntax highlighting for `.vue` files:
- For [Sublime Text](https://github.com/vuejs/vue-syntax-highlight)
- For [Atom](https://atom.io/packages/language-vue-component)
- For [Vim](https://github.com/posva/vim-vue)

Browser debugging: [vue-devtools Chrome extension](https://github.com/vuejs/vue-devtools)