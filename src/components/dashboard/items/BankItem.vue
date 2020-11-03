<template>
  <div class="bank-item">
    <div>
      <h3 class="bank-title">
        {{bank_title}}
      </h3>
      <div class="status">
        <span :class="className" v-if="bank_status === 0">buy</span>
        <span :class="className" v-else-if="bank_status === 1">hold</span>
        <span :class="className" v-else>sell</span>
      </div>
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .status {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .status > span {
    padding: 5px 5px;
    border-radius: 5px;
  }
  .success {
    background-color: #27ae60;
  }
  .hold {
    background-color: #f1c40f;
  }
  .not-sure {
    background-color: #e74c3c;
  }
  
  .bank-title {
    color: white;
    font-family: 'Courier New', Courier, monospace;
  }
</style>