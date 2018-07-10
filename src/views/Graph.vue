<template>

<div>
  <div class="graph">
    <h1>This is the graph page.</h1>

  <v-content>
        <v-container >
            <plot />
            <form />
        </v-container>
        
</v-content>
    



<v-footer color="indigo" app inset>
      <div style='text-align:center; width:2000px; color: white'>&copy;2018 — </div>
</v-footer>
  </div>
</div>


</template>




<script>
// @ is an alias to /src
import plot from '@/components/plot.vue'
import form from '@/components/form.vue'
import counter from '@/components/counter.vue'


export default {
  name: 'graph',
  components: {
    plot,
    form,
    counter
    
  }
}
</script>
