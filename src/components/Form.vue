<template>
<v-form v-model="valid">

  <v-container grid-list-md>
    <v-layout row wrap align-center>
      <v-flex xs2>
        <v-text-field id="from" name="from" label="From" :rules="[rules.required, rules.numval]" clearable v-model.number="from">
          <span class='error-msg'>Please enter a valid integer or float value.</span>
        </v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-text-field id="to" name="to" label="To" :rules="[rules.required, rules.numval]" clearable v-model.number="to"></v-text-field>

      </v-flex>
      <v-flex xs2>
        <v-text-field id="steps" name="steps" label="Steps" :rules="[rules.required, rules.numval]" clearable v-model.number="steps"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs8>
        <v-text-field id="equation" name="equation" label="Equation" :rules="[rules.required, rules.equation]" @keyup.enter.native="calculateY" v-model.number="equation"></v-text-field>
        <span class='error-msg'>Please enter a valid integer or float value.</span>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs8>
        <v-btn round v-on:click="calculateY" :disabled="this.equation === '' || this.to === '' || this.from === '' || this.steps === '' " color="info">Calulate Y</v-btn>
        <v-btn round @click="clear" :disabled="this.y === ''" color="error">clear</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs8>
        <v-text-field name="arange" label="X" v-model.number="arange" disabled></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs8>
        <v-text-field name="y" label="Y" v-model.number="y" disabled></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>

</v-form>
</template>

<script>
const math = require('mathjs')

import {
  eventBus
} from '../main.js';
export default {
  name: "form",

  data: () => ({
    valid: false,
    from: 2,
    to: 1000,
    steps: 100,
    y: '',
    equation: '',
    rules: {
      required: (value) => !!value || 'Required.',
      equation: (value) => {
        return value.includes('x') || 'You must include x'
      },
      numval: (value) => {
        const pattern = /^[0-9]+$/
        return pattern.test(value) || 'Must be a number'
      }
    }
  }),
  methods: {
    calculateY: function () {
      let scope = {
        // x: math.matrix(this.arange)
        x: this.arange
      }
      this.y = math.eval(this.equation, scope);
      // DenseMatrix to Array: this.y.toArray
      eventBus.$emit('form-y', this.y);
    },

    clear() {

      this.equation = ''
      this.arange = ''
      this.y = ''
    }
  },

  computed: {
    arange: function () {
      if (this.to && this.from && this.steps) {
        var increment = (this.to - this.from) / this.steps;
        var result = [];
        var i = 0;
        for (i = this.from; i <= this.to; i += increment) {
          result.push(parseFloat(i.toFixed(2)));
        }
        //console.log(result);
        eventBus.$emit('form-x', result);
        return result;
      }
    }
  }
};
</script>

<style>
.error-msg {
  display: none;
  /* Hide by default */
}

.number-only:invalid {
  background: pink;
}

.number-only:invalid + .error-msg {
  display: inline;
}
</style>
