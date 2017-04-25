<template>
  <!--
  // Hello.vue - a kitchen sink component
  // Summary of what's demonstrated:
  // - Mustache style templating, e.g. {{msg}}
  // - v-bind, v-on to bind data and methods in the template
  // - v-if, v-for to render content conditionally and for multiple items
  // - v-model for binding data to form inputs
  // - Composing custom components, e.g. <child-component-with-props> and <sample-api-dump>
  // - Computed properties
  // - Component methods
  // - Scoped CSS styles
  -->
  <div class="hello">
    <div class="component-label">Hello</div>
    <h2>Hello Component</h2>

    <p>Here's the msg as defined in the component's data: {{msg}}.
      <br>
      Here's someObj: {{someObj}}
      <br>
      Here's someArr: {{someArr}}
    </p>

    <h3>Computed Properties</h3>
    <p>Reversed msg: {{reversedMsg}}</p>
    <p>Joined someArr: {{joinedArr}}</p>

    <h3>Component Methods</h3>
    <!-- See https://vuejs.org/v2/guide/events.html -->
    <p><button v-on:click="handleClick">Click me to trigger a component method</button></p>
    <p><button v-on:click="handleClickWithArg('some argument string')">Click me to trigger a component method with an argument</button></p>

    <h3>Binding Data to Form Inputs</h3>
    <!-- See https://vuejs.org/v2/guide/forms.html -->
    <input type="text" v-model="msg"> <b>msg: </b> {{msg}}

    <br>
    <br>

    <input type="text" v-model="newArrData" placeholder="Add data to someArr"> <button v-on:click="addToArray">Add</button>
    <ul>
      <li v-for="(elem, index) in someArr" v-bind:key="index">{{index}}: {{elem}}</li>
    </ul>

    <label>
      <input type="checkbox" v-model="switchVal"> <b>switchVal:</b>
      <span v-if="switchVal">On!</span>
      <span v-if="!switchVal">Off</span>
    </label>

    <h3>Composing Components</h3>

    <p>Below we are using a child component and passing msg as a property.</p>
    <child-component-with-props v-bind:someProp="msg"></child-component-with-props>
    <br>
    <p>We can also pass in literal strings as properties like so:</p>
    <child-component-with-props someProp="some literal text"></child-component-with-props>
    <br>
    <p>Parent components can listen for events emitted by a child component (check console):</p>
    <counter v-on:countUpdated="notifyLatestCount"></counter>
    <br>
    <sample-api-dump></sample-api-dump>

    <h3>Routing/Navigation</h3>
    <ul>
      <li>Navigate using router-link elements <router-link :to="{name: 'SampleDynamicRoute', params: {dynamicParam: msg}}">like this</router-link></li>
      <li>Navigate programmatically with a component method <button v-on:click="navigateProgrammatically()">like this</button></li>
    </ul>
  </div>
</template>

<script>
import ChildComponentWithProps from './ChildComponentWithProps'
import Counter from './Counter'
import SampleApiDump from './SampleApiDump'

export default {
  name: 'hello',

  // This declares or "registers" any child components this component references.
  // <child-component-with-props> will only be available in parent's template
  // Components can also be registered globally when necessary.
  // See here: https://vuejs.org/v2/guide/components.html#Registration
  components: {
    'child-component-with-props': ChildComponentWithProps,
    'sample-api-dump': SampleApiDump,
    'counter': Counter
  },

  // whatever is returned by data() can be referenced directly in the template
  // or programmatically in methods using "this"
  // declare any fields for this component here to make them reactive, including nested fields
  data () {
    return {
      msg: 'Hello, World',
      switchVal: false,
      someArr: ['add', 'some', 'data'],
      newArrData: '',
      someObj: {
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
    },
    joinedArr () {
      return this.someArr.join(' ')
    }
  },

  // defines methods that can be referenced directly in the template
  // or programmatically invoked using "this"
  methods: {
    handleClick () {
      alert('Triggered from a component method')
    },
    handleClickWithArg (argString) {
      alert(argString)
    },
    addToArray () {
      if (this.newArrData) {
        this.someArr.push(this.newArrData)
        this.newArrData = ''
      }
    },
    notifyLatestCount (count) {
      console.log(`Counter was incremented to ${count}`)
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

// scoped means that these styles will be scoped to this component - it shouldn't affect anything outside of it
<style scoped>
  .hello {
    border: 4px solid black;
  }
</style>
