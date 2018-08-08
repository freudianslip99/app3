<template>
<div>

  <div class="data">
    <textarea rows="10" v-model="text"></textarea>
    <br>
    <text-reader @load="text = $event"></text-reader>
    <br>
    <br>

    <v-content>

    </v-content>

    <v-footer color="indigo" app inset>
      <div style='text-align:center; width:2000px; color: white'>&copy;2018 — </div>
    </v-footer>
  </div>

</div>
</template>

<script>
</script>

<script>
import TextReader from '@/components/TextReader.vue';
var d3 = require('d3');

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

d3.csv(
  '/home/Documents/github/app3/src/_HFIR_HB2A_IPTS-19949_exp652_Datafiles_HB2A_exp0652_scan0002.dat',
  function(data) {
    console.log(data[0]);
  }
);
</script>

<!--var lines = [
    ['a', 'b', 'c'],
    ['a1', 'b', 'c'],
    ['a2', 'b', 'c']
];

lines.forEach(function(line) {
 console.log(line);
}); -->
