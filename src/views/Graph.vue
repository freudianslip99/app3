<template>

<div>
  <div class="graph">
    <h1>This is a graph.</h1>
    <div>
    <svg width="200" height="200">
  <circle fill="#3E5693" cx="50" cy="120" r="20" />
  <text x="100" y="100">Hello SVG!</text>
  <path d="M100,10L150,70L50,70Z" fill="#BEDBC3" stroke="#539E91" stroke-width="3"></path>
</svg>

    </div>
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



export default {
  name: 'graph',
  components: {
    plot,
    form
    
  }
}
</script>
