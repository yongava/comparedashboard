<template>
  <div class="bank-item">
    <div>
      <h3 class="bank-title">
        {{bank_title}}
      </h3>
      <div class="status">
        <span class="success" v-if="bank_status === 0">success</span>
        <span class="success" v-else-if="bank_status === 1">hold</span>
        <span class="success" v-else>not sure</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankItem',
  props: {
    bank_title: String,
    bank_status: String
  }
}
</script>

<style scoped>
  .bank-item {
    display: flex;
    background-color:cyan;
    align-items: center;
    justify-content: center;
  }
  .status {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .status > span {
    padding: 5px 20px;
  }
  .success {
    background-color: green;
  }
  .bank-title {
    text-align: center;
  }
</style>