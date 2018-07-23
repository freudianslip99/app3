<template>
<div>
  <div class="home">
    <img src="">
    <HelloWorld msg="Graphing Application" />
  </div>
  <v-footer color="indigo" app inset>
    <div style='text-align:center; width:2000px; color: white'>&copy;2018 — </div>
  </v-footer>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Form
  }
}
</script>
