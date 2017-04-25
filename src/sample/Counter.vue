<template>
  <div class="counter">
    <div class="component-label">Counter</div>
    <p><b>Count: </b>{{count}} <button v-on:click="increment">Increment</button></p>
  </div>
</template>

<script>
  export default {
    name: 'counter-with-props',
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
        this.count += 1

        // See https://vuejs.org/v2/guide/components.html#Custom-Events
        this.$emit('countUpdated', this.count)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .counter {
    padding: 12px;
    background: lightyellow;
    border: 3px solid yellow;
  }
</style>