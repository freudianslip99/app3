<template>
<v-container grid-list-md>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <h3>{{message}}</h3>
    </v-flex>
  </v-layout>

  <v-layout row>
    <v-flex xs12>
      <svg id="visualization2" width="800" height="600"></svg>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import {
  eventBus
} from '../main.js';

var d3 = require('d3');

export default {
  name: "graph",
  data() {
    return {
      message: "This is a log plot",
      x: [],
      y: []
    }
  },
  created() {
    eventBus.$on('form-x', val => {

      this.x = val;
    });
    eventBus.$on('form-y', val => {

      this.y = val;
    });
  },
  computed: {
    data: function () {
      if (this.x.length > 0 && this.y.length > 0) {
        return this.x.map((v, i) => ({
          x: v,
          y: this.y[i]
        }));
      }
    }
  },
  mounted() {

    this.draw();
  },
  watch: {
    // When the data changes this is called
    data: function () {

      this.draw();
    }
  },

  methods: {
    draw: function () {
      var element = document.getElementById("visualization2");
      while (element.firstChild) {

        element.removeChild(element.firstChild);
      }
      var lineData = this.data;

      var vis = d3.select("#visualization2");
      var margin = {
        top: 20,
        right: 50,
        bottom: 20,
        left: 50
      };

      var width = 800 - margin.left - margin.right;
      var height = 600 - margin.top - margin.bottom;

      // See scales here: http://d3indepth.com/scales/
      var xRange = d3.scaleLog()
        .domain([Math.min(...this.x), Math.max(...this.x)])
        .range([margin.left, width - margin.right]);

      var yRange = d3.scaleLog()
        .range([height - margin.top, margin.bottom])
        .domain([Math.min(...this.y), Math.max(...this.y)]);

      var xAxis = d3.axisBottom(xRange);
      var yAxis = d3.axisLeft(yRange);
      //.tickSize(1);

      function powerOfTen(d) {
        return d / Math.pow(10, Math.ceil(Math.log(d) / Math.LN10 - 1e-12)) === 1;
      }

      vis.append("svg:g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height - margin.bottom) + ")")
        .call(xAxis)
        .selectAll(".tick text")
        .text(null)
        .filter(powerOfTen)
        .text(10)
        .append("tspan")
        .attr("dy", "-.7em") // shifts up the exponentional number
        .text(function (d) {
          return Math.round(Math.log(d) / Math.LN10);
        });

      vis.append("svg:g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + (margin.left) + ",0)")
        .call(yAxis)
        .selectAll(".tick text")
        .text(null)
        .filter(powerOfTen)
        .text(10)
        .append("tspan")
        .attr("dy", "-.7em")
        .text(function (d) {
          return Math.round(Math.log(d) / Math.LN10);
        });

      var lineFunc = d3.line()
        .x(function (d) {
          return xRange(d.x);
        })
        .y(function (d) {
          return yRange(d.y);
        });

      vis.append("svg:path")
        .attr("d", lineFunc(lineData))
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("fill", "none");

    }
  }
}
</script>

<style>
.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.axis text {
  font: 13px 'helvetica neue';
}

.axis tspan {
  font-size: 9px;
}

.grid .tick {
  stroke: lightgrey;
  opacity: 0.7;
}

.grid path {
  stroke-width: 0;
}
</style>
