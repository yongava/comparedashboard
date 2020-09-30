<template>
  <div class="layer">
    <Navbar class="nav-bar" :getItem="getItem"/>
    <Dashboard class="main" :item='item'/>
  </div>
</template>

<script>

import Navbar from './Navbar'
import Dashboard from '../dashboard/Dashboard'

export default {
  name: 'Layer',
  components: {
    Navbar,
    Dashboard
  },
  data: () => {
    return {item: 'BANK'}
  },
  methods: {
    getItem(value){
      this.item = value
      // this.$forceUpdate();
    }
  }
}
</script>

<style scoped>
/* .layer {
  width: 100%;
} */
.row {
  display: flex;
}
.main {
  /* margin-top: 65px; */
}
.nav-bar{
  position: sticky;
  top: 0%;
  width: 2560px;
}
</style>