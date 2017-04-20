<template>
  <div id="app">
    <div class="component-label">App</div>
    <h1><router-link to="/">Goalbook Fist to Five</router-link></h1>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

// since this style tag does not have "scoped", it defines global styles
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border: 3px solid green;
}

.component-label {
  float: right;
  font-size: 10px;
  font-weight: bold;
  color: #666;
}
</style>
