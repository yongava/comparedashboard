<template>
  <div>
    <div v-for="(value, name) in dropdown[item]" :key="name">
      <BankItem :bank_title="name" :end_key="value" :bank_status="1" :chart_data="data" class="item bank-item"/>
    </div>
  </div>
</template>

<script>
import BankItem from '../dashboard/items/BankItem'

export default {
  name: 'Sidebar',
  components: {
    BankItem,
  },
  props: ['item'],
  data(){
    return {
      data: null,
      dropdown: {
        BANK: {
          BAY: 1210,
          BBL: 1213,
          KBANK: 1817,
          KKP: 1784,
          KTB: 1793,
          SCB: 2170,
          TCAP: 1622,
          TISCO: 2562,
          TMB: 2366
        },
        ICT: {
          ADVANC: 1069,
          DTAC: 1831,
          TRUE: 2493
        },
        ENERG: {
          PIT: 2099,
          PTTEP: 2081,
          ESSO: 1324
        }
      }
    }
  }
}
</script>

<style scoped>
.bank-item {
  padding-bottom: 1px;
}
</style>