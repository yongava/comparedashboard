<template>
  <div class="bank-item">
    <h3 class="bank-title">
      {{bank_title}}
    </h3>
    <h3 class="set">set</h3>
    <div class="status">
      <span :class="className" v-if="bank_status === 0">buy</span>
      <span :class="className" v-else-if="bank_status === 1">hold</span>
      <span :class="className" v-else>sell</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankItem',
  props: ['bank_title', 'bank_status'],
  data(){
    let className = 'success'
    if(this.bank_status === 1) className = 'hold'
    if(this.bank_status === 2) className = 'not-sure'
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
  }
  .set {
    text-transform: uppercase;
    font-size: 10px;
    text-align: left;
  }
</style>