<template>
<div>

  <div class="data">
    <textarea rows="10" v-model="text"></textarea>
    <br>
    <text-reader @load="text = $event"></text-reader>
    <br>
    <br>

    <v-content>

      <v-container>


      </v-container>

    </v-content>

    <v-footer color="indigo" app inset>
      <div style='text-align:center; width:2000px; color: white'>&copy;2018 — </div>
    </v-footer>
  </div>

</div>
</template>

<script>
import TextReader from '@/components/TextReader.vue';

export default {
  name: 'data',
  data: () => ({
    text: '',
  }),
  components: {
    TextReader,
  },

  methods: {},
};
</script>
