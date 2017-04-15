import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/sample/Hello'
import SampleRouteComponent from '@/sample/SampleRouteComponent'

Vue.use(Router)

export default new Router({
  routes: [
    // Default route, no parameters
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    // Sample route with dynamic parameters
    {
      path: '/sample/:dynamicParam',
      name: 'SampleDynamicRoute',
      component: SampleRouteComponent,

      // when this is set to true, the params of this route (e.g. route.params) are passed as props to the component
      // see more details and advanced usage here: http://router.vuejs.org/en/essentials/passing-props.html
      props: true
    }
  ]
})
