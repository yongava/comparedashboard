<template>
  <div class="layer">
    <Navbar class="nav-bar"/>
    <Dashboard class="main"/>
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