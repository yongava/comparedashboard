<template>
  <div class="row bank-visualizer" v-if="chart_data">
    <BankItem :bank_title='bank_title' :bank_status="bank_status" />
    <BlankItem />
    <LineChart :width="100" :height="100" :chart_data='chart_data'/>
    <BarChart :width="100" :height="100" :chart_data='chart_data'/>
    <BarChart :width="100" :height="100" :chart_data='chart_data'/>
    <BarChart :width="100" :height="100" :chart_data='chart_data'/>
    <BarChart :width="100" :height="100" :chart_data='chart_data'/>
    <BarChart :width="100" :height="100" :chart_data='chart_data'/>
    <BarChart :width="100" :height="100" :chart_data='chart_data'/>
    <BarChart :width="100" :height="100" :chart_data='chart_data'/>
    <BlankItem />

  </div>
</template>

<script>
import BankItem from './items/BankItem'
import BlankItem from './items/BlankItem'
import LineChart from './charts/LineChart'
import BarChart from './charts/BarChart'
import axios from 'axios'

export default {
  name: 'BankVisual',
  props: ['bank_title', 'bank_status', 'end_key'],
  components: {
    BankItem,
    BlankItem,
    LineChart,
    BarChart
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