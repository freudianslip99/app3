<template>
<div>
  <div class="graph">

    <v-content>

      <v-container>


<upload-button class="btn--light-round jbtn-file" title="Browse" :selectedCallback="fileSelectedFunc">
</upload-button>


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

<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vuetify-upload-button/dist/upload-button.min.js"></script>
<script type="text/javascript">
  Vue.use(UploadButton);
</script>

<script>
// @ is an alias to /src

import UploadButton from 'vuetify-upload-button';
import Form from '@/components/Form.vue'
import Counter from '@/components/Counter.vue'
import store from '@/store.js'







export default {
  name: 'graph',
  components: {
    UploadButton,
    Counter,
    store
  }
}
</script>
