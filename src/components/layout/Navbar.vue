<template>
<div class="row justify-content-space">
  <div>
    <h3 class="nav-item">Banking</h3>
  </div>
  <div>
    <h3 class="nav-item">Mct Cap</h3>
  </div>
  <div>
    <h3 class="nav-item">Price</h3>
  </div>
  <div>
    <h3 class="nav-item">EPS</h3>
  </div>
  <div>
    <h3 class="nav-item">PG</h3>
  </div>
  <div>
    <h3 class="nav-item">EV / EBITDA</h3>
  </div>
  <div>
    <h3 class="nav-item">PEG</h3>
  </div>
  <div>
    <h3 class="nav-item">PBV</h3>
  </div>
  <div>
    <h3 class="nav-item">DIV</h3>
  </div>
  <div>
    <h3 class="nav-item">D/E</h3>
  </div>
  <div>
    <h3 class="nav-item">ROE</h3>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
<style scoped>
  
  .nav-bar > div {
    background-color: aquamarine;
    width: 100%;
    padding: 20px;
  }
  .nav-bar > div:hover {
    background-color:chartreuse;
    /* width: 100%; */
    /* padding: 20px; */
  }
  
  h3 {
    text-align: center;
  }
  

  .nav-item {
    margin: auto;
  }
</style>