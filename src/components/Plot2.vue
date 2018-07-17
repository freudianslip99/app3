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

var d3 = require("d3");

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

            var vis = d3.select("#visualization2"),
                margin = {
                    top: 20,
                    right: 10,
                    bottom: 20,
                    left: 10
                },
                
                
                
                width = 800 - margin.left - margin.right,
                height = 600 - margin.top - margin.bottom,
                
                
                
                // See scales here: http://d3indepth.com/scales/
                xRange = d3.scaleLog()
                .range([margin.left, width - margin.right])
                .domain([Math.min(...this.x), Math.max(...this.x)]),
                yRange = d3.scaleLog()
                .range([height - margin.top, margin.bottom])
                .domain([Math.min(...this.y), Math.max(...this.y)]),



                xAxis = d3.axisBottom(xRange)
                .scale(xRange)
                .orient("bottom")
                .innerTickSize(-height)
                .outerTickSize(0)
                .tickPadding(10),

                yAxis =  d3.axisLeft(yRange)
                .scale(yRange)
                .orient("left")
                .innerTickSize(-width)
                .outerTickSize(0)
                .tickPadding(10);

            



            vis.append("svg:g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + (height - margin.bottom) + ")")
                
                .call(xAxis)
                
            vis.append("svg:g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (margin.left) + ",0)")
                .call(yAxis)
            
            
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
.line {
    fill: none;
    stroke: rgb(45, 141, 219);
    stroke-width: 2px;
}
.grid .tick {
    stroke: lightgrey;
    opacity: 0.7;
}
.grid path {
      stroke-width: 0;
}
</style>
