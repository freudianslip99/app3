<template>
<div>
  <div class="graph">
    <h1>This is the graph page.</h1>
    <v-content>

      <v-container>

        <v-tabs>
          <v-tab>Plot </v-tab>

          <v-tab-item>
            <plot3 />
          </v-tab-item>

        </v-tabs>

        <Form />
      </v-container>

      <v-container>
        <counter />
        <store />
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
import Plot3 from '@/components/Plot3.vue'

import Form from '@/components/Form.vue'
import Counter from '@/components/Counter.vue'
import store from '@/store.js'

export default {
  name: 'graph',
  components: {
    Plot3,

    Form,
    Counter,
    store
  }
}
</script>
