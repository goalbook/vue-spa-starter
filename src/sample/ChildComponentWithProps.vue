<template>
  <div class="child-component">
    <div class="component-label">ChildComponentWithProps</div>
    <p><b>someProp: </b>{{someProp}}</p>
  </div>
</template>

<script>
  export default {
    name: 'child-component-with-props',
    props: {
      someProp: {
        type: String,
        required: true
      }
    }

    // this component is simple and doesn't need attributes for data, computed, methods, lifecycle hooks, etc. All it demonstrates is props being passed in.
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .child-component {
    padding: 12px;
    background: lightyellow;
    border: 3px solid yellow;
  }
</style>