<template>
  <div class="layer">
    <Navbar />
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
  margin-top: 65px;
}
</style>