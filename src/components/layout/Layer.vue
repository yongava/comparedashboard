<template>
  <div class="layer">
    <Navbar class="nav-bar" :getItem="getItem" style="z-index: 3"/>
    <div class="row" style="z-index: 2">
      <Sidebar class="left-side" :item='item'/>
      <Dashboard class="main" :item='item'/>
    </div>
  </div>
</template>

<script>

import Navbar from './Navbar'
import Dashboard from '../dashboard/Dashboard'
import Sidebar from './Sidebar'
export default {
  name: 'Layer',
  components: {
    Navbar,
    Dashboard,
    Sidebar
  },
  data: () => {
    return {item: 'BANK'}
  },
  methods: {
    getItem(value){
      this.item = value
    }
  }
}
</script>

<style>
.row {
  display: flex;
}
.nav-bar {
  position: sticky;
  top: 0%;
  width: 1110px;
  overflow: hidden;
}
.main {
}
.left-side {
  position: sticky;
  left: 0%;
  z-index: 2
}
.item {
  height: 232.77777px;
  width: 232.77777px !important;
}
</style>