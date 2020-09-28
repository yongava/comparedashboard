<template>
  <div class="row bank-visualizer">
    <BankItem :bank_title='bank_title' bank_status='0' />
    <BlankItem />
    <LineChart :width="50" :height="50" :chart_data='chart_data'/>
    <BarChart :width="50" :height="50" :chart_data='chart_data'/>
    <BlankItem />
    <BlankItem />
    <BlankItem />
    <BlankItem />
    <BlankItem />
    <BlankItem />
    <BlankItem />

  </div>
</template>

<script>
import BankItem from './items/BankItem'
import BlankItem from './items/BlankItem'
import LineChart from './charts/LineChart'
import BarChart from './charts/BarChart'

export default {
  name: 'BankVisual',
  props: ['bank_title', 'bank_status', 'chart_data'],
  components: {
    BankItem,
    BlankItem,
    LineChart,
    BarChart
  },
}
</script>

<style scoped>
  .bank-visualizer > div{
    min-height: 100px;
    width: 100%;
    border-left: 2px dashed #ccc;
    border-bottom: 2px dashed #ccc;
    margin-left: calc(-1 * 2px);
    margin-bottom: calc(-1 * 2px);
  }
</style>