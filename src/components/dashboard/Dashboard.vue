<template>
  <div class="container">
    <!-- <div v-for="ind in data" :key="ind.label"> -->
      <BankVisual bank_title="BBL" v-if="data" bank_status=0 :chart_data="data"/>
    <!-- </div> -->
  </div>
</template>

<script>
import BankVisual from './BankVisual'
import axios from 'axios'

export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  components: {
    BankVisual
  },
  data(){
    return {
      data: null
    }
  },
  mounted () {
    axios.get('https://market-api.ava.fund/api/exchanges/1/quotes/1817/info/entries?timeframe=DAY1&period=YEAR1').then( res => {
      // console.log(res.data)
      res.data.chart_list.forEach( (ind ,key) => {
        // console.log(ind.entries.slice(Math.max(ind.entries.length - 10, 1)))
        res.data.chart_list[key].entries = ind.entries.slice(Math.max(ind.entries.length - 10, 1))
        // console.log(key)
      });
      this.data = res.data.chart_list
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
