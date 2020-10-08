<template>
  <div class="row bank-visualizer" v-if="chart_data">
    <DonutChart :width="50" :height="50" :chart_data='chart_data' class="item"/>
    <LineChart  :width="50" :height="50" :chart_data='chart_data' class="item"/>
    <BarChart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    <BarChart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    <BarChart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    <BarChart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    <BarChart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    <BarChart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    <BarChart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    <RingChart :chart_data='chart_data' class="item" style="mergin: 10px;"/>
  </div>
</template>

<script>
import LineChart from './charts/LineChart'
import BarChart from './charts/BarChart'
import DonutChart from './charts/DonutChart'
import RingChart from './charts/RingChart'
import axios from 'axios'

export default {
  name: 'BankVisual',
  props: ['bank_title', 'bank_status', 'end_key'],
  components: {
    LineChart,
    BarChart,
    DonutChart,
    RingChart
  },
  data(){
    return {
      chart_data: null
    }
  },
  mounted () {
    axios.get(`https://market-api.ava.fund/api/exchanges/1/quotes/${this.end_key}/info/entries?timeframe=DAY1&period=YEAR1`).then( res => {
      res.data.chart_list.forEach( (ind ,key) => {
        res.data.chart_list[key].entries = ind.entries.slice(Math.max(ind.entries.length - 10, 1))
      });
      this.chart_data = res.data.chart_list
    })
  }
}
</script>

<style scoped>
  .bank-visualizer {
    width: 100%;
    margin-bottom: 1px;
  }
  .bank-visualizer > div{
    min-height: 100px;
    width: 100%;
    border-left: 2px dashed #9276b5;
    border-bottom: 2px dashed #9276b5;
    margin-left: calc(-1 * 2px);
    margin-bottom: calc(-1 * 2px);
  }
</style>