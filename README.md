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
- Starter API code with example request to fist-to-five data api

Take some time to peruse/experiment with the sample code and read the comments. In particular the `sample/Hello.vue` component is kind of like the "kitchen-sink" component, so start there.

## Optional dependencies
- Bootstrap CSS v3 (to remove, comment out the import line in main.js)

Feel free to use any additional dependencies in this project (e.g. a different CSS framework, lodash, jquery, etc). You can add them by doing `npm install <library> --save` or including a link/script tag in index.html if using a CDN.

## .vue files??
.vue files allow us to define components in a single file (template, javascript, and styles). This makes it easy and quick to make component-level changes of any kind. The project is pre-configured to load and bundle .vue files so you can write regular javascript and ES6 with imports and exports within the script tag, and css rules within the style tag.

Check out the sample components in sample/ to see how this works.

## Helpful Links
Many of the comments in the sample code link to relevant pages of the docs.

- [Vue docs](https://vuejs.org/v2/guide/)
- [Vue Router docs](http://router.vuejs.org/en/)
