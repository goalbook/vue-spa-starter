<template>
  <div>
    <p>Looks like I've received a a prop from the URL: <b>{{dynamicParam}}</b></p>
  </div>
</template>

<script>
  export default {
    name: 'sample-route-component',
    props: {
      // this is meant to specifically demonstrate how props can be passed from the route
      // refer to router/index.js to see which routes mount this component and how it can
      // be configured to automatically pass route params as props
      dynamicParam: {
        type: String
      }
    },
  }
</script>
