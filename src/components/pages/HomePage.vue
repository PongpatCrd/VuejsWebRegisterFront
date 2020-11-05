<template>
  <div class="container">
    <h1>This is home content</h1>
    <Chart :lineChart="true" :chartData="registerCountChartData"></Chart>
  </div>
</template>

<script>
import Chart from '@/components/Chart'

export default {
  name: 'HomePage',
  data () {
    return {
      registerCountChartData: null,
      activatedCountChartData: null
    }
  },
  components: {
    Chart
  },
  methods: {
    async getRegisterCountChartData () {
      const res = await this.callApi(
        'get',
        'http://localhost:8000/api/register/get_register_chart_data'
      )

      this.registerCountChartData = res.data.data
    },
    async getActivatedCountChartData () {
      const res = await this.callApi(
        'get',
        'http://localhost:8000/api/register/get_activated_chart_data'
      )

      this.activatedCountChartData = res.data.data
    },
  },
  beforeMount () {
    this.getRegisterCountChartData()
    this.getActivatedCountChartData()
  }
}
</script>

<style>

</style>