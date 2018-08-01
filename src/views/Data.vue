<template>
<div>

  <div class="data">
    <!-- <textarea rows="10" v-model="text"></textarea>
    <br>
    <text-reader @load="text = $event"></text-reader> -->
    <br>
    <br>

    <v-content>

      <v-container>
<form class="form-inline">
    <div class="form-group">
      <label for="files">Upload a CSV formatted file:</label>
      <input type="file" id="files" class="form-control" accept=".csv" required />
    </div>
    <div class="form-group">
      <button type="submit" id="submit-file" class="btn btn-primary">Upload File</button>
    </div>
  </form>
      </v-container>

    </v-content>

    <v-footer color="indigo" app inset>
      <div style='text-align:center; width:2000px; color: white'>&copy;2018 — </div>
    </v-footer>
  </div>

</div>
</template>

<script>
//import TextReader from '@/components/TextReader.vue';
import Papa from 'papaparse';
import JQuery from 'jquery';
let $ = JQuery;

export default {
  name: 'data',
  data: () => ({
    text: '',
  }),
  components: {
    //TextReader,
    Papa,
    JQuery,
  },

  methods: {},
};

$('#submit-file').on('click', function(e) {
  e.preventDefault();
  $('#files').parse({
    config: {
      delimiter: 'auto',
      complete: displayHTMLTable,
    },
    /* before: function (files, inputElem) {
      //console.log("Parsing file...", file);
    },
    error: function (err, file) {
      //console.log("ERROR:", err, file); */

    complete: function() {
      //console.log("Done with all files");
    },
  });
  let i = 0;
  function displayHTMLTable(results) {
    var table = "<table class='table'>";
    var data = results.data;

    for (i = 0; i < data.length; i++) {
      table += '<tr>';
      var row = data[i];
      var cells = row.join(',').split(',');
      let j = 0;
      for (j = 0; j < cells.length; j++) {
        table += '<td>';
        table += cells[j];
        table += '</th>';
      }
      table += '</tr>';
    }
    table += '</table>';
    $('#parsed_csv_list').html(table);
  }
});
</script>
