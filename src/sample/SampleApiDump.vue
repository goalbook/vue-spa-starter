<template>
  <div>
    <p>Component that illustrates usage of an ajax call:</p>
    <label>AJAX Response</label>
    <pre>{{responseData}}
    </pre>
  </div>
</template>

<script>
  import api from '@/api'
  export default {
    name: 'sample-api-dump',
    data () {
      return {
        responseData: null
      }
    },
    methods: {
      ajaxCall () {
        api.getQuestions().then((data) => {
          this.responseData = data
        })
      }
    },

    // this is a lifecycle method; we're making a sample AJAX call after this component is created.
    // See more here: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
    created () {
      this.ajaxCall()
    }
  }
</script>