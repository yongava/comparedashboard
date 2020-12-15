<template>
  <div class="bank-item">
    <h3 class="bank-title">
      {{symbol}}
    </h3>
    <h3 class="set">set</h3>
    <div class="status">
      <span :class="className">{{symbol_status}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankItem',
  props: ['symbol', 'symbol_status'],
  data(){
    let className = 'success'
    if(this.symbol_status == 'Hold') className = 'hold'
    if(this.symbol_status == 'Sell') className = 'not-sure'
    return {
      className
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
  .bank-item {
    display: block;
    padding-left: 10px;
  }
  .status {
    text-align: left;
  }
  .status > span {
    border-radius: 8px;
    color: white;
    font-size: 10px;
    padding: 2px 10px;
    text-align: left;
  }
  .success {
    background-color: #53C353;
  }
  .hold {
    background-color: #f1c40f;
  }
  .not-sure {
    background-color: #e74c3c;
  }
  .bank-title {
    color: white;
    text-align: start;
    font-weight: lighter;
  }
  .set {
    text-transform: uppercase;
    font-size: 10px;
    text-align: left;
  }
</style>