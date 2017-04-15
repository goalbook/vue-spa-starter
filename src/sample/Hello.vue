<template>
  <div>
    <h2>Hello Component</h2>

    <sample-api-dump class="float-right"></sample-api-dump>

    <p>Here's the msg as defined in the component's data: {{msg}}. <br>And here's my other data: {{dataObj.nestedField}}</p>

    <h3>Computed Properties</h3>
    <p>Reversed msg: {{reversedMsg}}</p>

    <h3>Component Methods</h3>
    <p><button v-on:click="handleClick()">Click me to trigger a component method</button></p>

    <h3>Binding Data to Form Inputs</h3>
    <input type="text" v-model="msg"> <b>Input value: </b> {{msg}}

    <h3>Composing Components</h3>
    <p>Below we are using a child component and passing msg as a property.</p>
    <child-component-with-props v-bind:someProp="msg"></child-component-with-props>
    <br>
    <p>We can also pass in literal strings as properties like so:</p>
    <child-component-with-props someProp="some literal text"></child-component-with-props>

    <h3>Navigation</h3>
    <ul>
      <li>Navigate using router-link elements <router-link :to="{name: 'SampleDynamicRoute', params: {dynamicParam: msg}}">like this</router-link></li>
      <li>Navigate programmatically <a v-on:click="navigateProgrammatically()">like this</a></li>
    </ul>
  </div>
</template>

<script>
import ChildComponentWithProps from './ChildComponentWithProps'
import SampleApiDump from './SampleApiDump'

export default {
  name: 'hello',

  // This declares or "registers" any child components this component references.
  // <child-component-with-props> will only be available in parent's template
  // Components can also be registered globally when necessary.
  // See here: https://vuejs.org/v2/guide/components.html#Registration
  components: {
    'child-component-with-props': ChildComponentWithProps,
    'sample-api-dump': SampleApiDump
  },

  // whatever is returned by data() can be referenced directly in the template
  // or programmatically in methods using "this"
  data () {
    return {
      msg: 'Hello, World',
      dataObj: {
        // when declaring the component's data, it is best to declare and set defaults for every field in objects in order for them to become reactive
        // see here: https://vuejs.org/v2/guide/instance.html#Properties-and-Methods
        nestedField: 'nested field'
      }
    }
  },

  // computed properties can also be referenced directly in the template as a property
  // or programmatically in methods using "this"
  computed: {
    reversedMsg () {
      return this.msg.split('').reverse().join('')
    }
  },

  // defines methods that can be referenced directly in the template
  // or programmatically invoked using "this"
  methods: {
    handleClick () {
      alert('Triggered from a component method')
    },
    // see http://router.vuejs.org/en/api/component-injections.html
    navigateProgrammatically () {
      this.$router.push({name: 'SampleDynamicRoute', params: {dynamicParam: this.msg}})
    }
  },

  // lifecyle hook methods. See more here: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
  created () {
    console.log(`I'm created! My message is ${this.msg}`)
  }
}
</script>

<style scoped>
  .float-right {
    float: right;
    width: 300px;
    margin-right: 20px;
  }
</style>
