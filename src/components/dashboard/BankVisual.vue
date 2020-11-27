<template>
  <tr v-if="chart_data">
    <th>
      <BankItem :bank_title="bank_title" :end_key="end_key" :bank_status="0" class="bank-item"/>
    </th>
    <td>
      <DonutChart :width="50" :height="50" :chart_data='chart_data' class="item"/>
    </td>
    <td>
      <line-chart-horizontal  :width="50" :height="50" :chart_data='chart_data' class="item"/>
    </td>
    <td>
      <line-chart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    </td>
    <td>
      <line-chart-vertical   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    </td>
    <td>
      <line-chart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    </td>
    <td>
      <line-chart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    </td>
    <td>
      <line-chart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    </td>
    <td>
      <line-chart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    </td>
    <td>
      <line-chart   :width="50" :height="50" :chart_data='chart_data' class="item"/>
    </td>
    <td>
      <RingChart :chart_data='chart_data' class="item" style="mergin: 10px;"/>
    </td>
  </tr>
</template>

<script>
import LineChartHorizontal from './charts/LineChartHorizontal'
import LineChartVertical from './charts/LineChartVertical'
import LineChart from './charts/LineChart'
import DonutChart from './charts/DonutChart'
import RingChart from './charts/RingChart'
import axios from 'axios'
import BankItem from './items/BankItem'

export default {
  name: 'BankVisual',
  props: ['bank_title', 'bank_status', 'end_key'],
  components: {
    LineChartHorizontal,
    LineChartVertical,
    LineChart,
    DonutChart,
    RingChart,
    BankItem
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
</style>