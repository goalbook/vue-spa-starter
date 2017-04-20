import Vue from 'vue'
import App from './App'
import router from './router'

// Bootstrap CSS v3: Uncomment below if you want to use bootstrap css
// import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // mounts our Vue app in the DOM element with id="app" (see index.html)
  router, // makes our Vue app utilize the router we defined in router/index.js
  template: '<App/>',
  components: { App } // defines custom components that appear in the template, in this case <App/>
})
