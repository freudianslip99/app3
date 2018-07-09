<template>

  <div>
  <div class="graph">
    <h1>This is a graph.</h1>
    <v-layout row>
        <v-flex xs12>
            <svg id="visualization"  width="800" height="600"></svg>
        </v-flex>
</v-layout>
  </div>

</template>




<script>
// @ is an alias to /src
import plot from '@/components/plot.vue'
import form from '@/components/form.vue'



export default {
  name: 'home',
  components: {
    plot,
    form
  }
}
</script>
  <v-footer color="indigo" app inset>
      <div style='text-align:center; width:2000px;'>&copy;2018 — </div>
  </v-footer>
 </div>
</template>

