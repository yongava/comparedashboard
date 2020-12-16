<template>
  <tr v-if="chart_data">
    <th>
      <BankItem :symbol="symbol" :symbol_status="symbol_status" class="bank-item"/>
    </th>
    <td>
      <donut-chart :width="50" :height="50" :market_cap='market_cap' class="item"/>
    </td>
    <td>
      <line-chart-horizontal v-if="yearly_price" :width="50" :height="50" :chart_data='yearly_price' :target_price='target_price' class="item"/>
    </td>
    <td>
      <line-chart-vertical :width="50" :height="50" :chart_data='chart_data[0]' class="item"/>
    </td>
    <td>
      <line-chart-vertical :width="50" :height="50" :chart_data='chart_data[1]' class="item"/>
    </td>
    <td>
      <line-chart-vertical :width="50" :height="50" :chart_data='chart_data[2]' class="item"/>
    </td>
    <td>
      <line-chart-vertical :width="50" :height="50" :chart_data='chart_data[3]' class="item"/>
    </td>
    <td>
      <line-chart-vertical :width="50" :height="50" :chart_data='chart_data[4]' class="item"/>
    </td>
    <td>
      <line-chart-vertical :width="50" :height="50" :chart_data='chart_data[5]' class="item"/>
    </td>
    <td>
      <line-chart-vertical :width="50" :height="50" :chart_data='chart_data[6]' class="item"/>
    </td>
    <td>
      <ring-chart :width="50" :height="50" :ring_chart='ring_chart' class="item"/>
    </td>
  </tr>
</template>

<script>
import DonutChart from './charts/DonutChart'
import LineChartHorizontal from './charts/LineChartHorizontal'
import LineChartVertical from './charts/LineChartVertical'
// import LineChart from './charts/LineChart'
import RingChart from './charts/RingChart'
import BankItem from './items/BankItem'
import axios from 'axios'

export default {
  name: 'BankVisual',
  props: ['symbol'],
  components: {
    DonutChart,
    LineChartHorizontal,
    LineChartVertical,
    // LineChart,
    RingChart,
    BankItem
  },
  data(){
    return {
      chart_data: null,
      yearly_price: null,
      symbol_status: '',
      target_price: 0,
      ring_chart: 0,
      market_cap: 0
    }
  },
  mounted () {
    axios.get(`https://dbs-funda.alpha.lab.ai/active/${this.symbol}`).then( res => {
      if(res.status === 200){
        this.symbol_status = res.data.result.recommend
        this.chart_data = res.data.result.items[0].items
        this.ring_chart = res.data.result.ROE
        this.target_price = res.data.result.target_price
        this.market_cap = res.data.result['MarketCap.']
      }
    })
    axios.get(`https://dbs-funda.alpha.lab.ai/yearly_price/${this.symbol}`).then( res => {
      if(res.status === 200){
        this.yearly_price = res.data.chart_list[0].entries
      }
    })
  }
}
</script>

<style scoped>
</style>