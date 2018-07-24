<template>
<div>
  <div class="home">
    <img src="https://neutrons.ornl.gov/sites/default/files/styles/page_width_1240w/public/SNS-aerial_0.jpg?itok=AvDXDamH">
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
    Form,

  }
}
</script>
