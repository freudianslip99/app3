<template>

  <div class="home">
    <img src="">
    <HelloWorld msg="Graphing Application"/>
  </div>
  
</template>

<template>
  <v-footer class="justify-center">
       &copy;2018 — <strong>Vuetify</strong>
  </v-footer>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
