<template>
  <tbody>
    <template  v-for="(symbol, index) in symbol_list">
      <BankVisual :symbol="symbol" :key="index"/>
    </template >
  </tbody>
</template>
<script>

import BankVisual from '../components/dashboard/BankVisual'

export default {
  name: 'Layer',
  components: {
    BankVisual
  },
  props: ['symbol_list'],
  mounted(){
  },
  data(){
    return {
    }
  }
}
</script>