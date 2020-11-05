<template>
  <div>
    <h1>Chart</h1>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  props: {
    lineChart: {
      default: false,
      type: Boolean
    },
    doughnutChart: {
      default: false,
      type: Boolean
    },
    pieChart: {
      default: false,
      type: Boolean
    },
    chartData: {
      type: Array,
      required: true
    }
  },
  methods: {
    createChart () {
      let chartType = ''

      if (this.doughnutChart) {
        chartType = 'doughnut'
      } else if (this.pieChart) {
        chartType = 'pie'
      } else {
        chartType = 'line'
      }

      new Chart(this.$refs.chart, {
        type: chartType,
        data: this.chartData,
        options: {
           responsive: true
        }
      })
    }
  },
  mounted () {
    this.createChart()
  }
}
</script>

<style>

</style>