<template>
<div class="row justify-content-space">
  <div class="nav-div">
    <div class="top-left-fixed">

      <div class="fixed-feedback">
        <ejs-dropdownlist :dataSource='dropdown' :fields='dropField' width="70" value="BANK" @change="onChange($event)">
        </ejs-dropdownlist>
      </div>
    </div>
  </div>
<<<<<<< HEAD
  <div class="nav-div">
    <h3 class="nav-item">Mct Cap</h3>
  </div>
  <div class="nav-div">
    <h3 class="nav-item">PRICES</h3>
=======
  <div style="padding-left: 252px">
    <h3 class="nav-item">MKTCAP</h3>
  </div>
  <div>
    <h3 class="nav-item">PRICE</h3>
>>>>>>> fc2f7c121725f5d7538f7be4242b8385420521cc
  </div>
  <div class="nav-div">
    <h3 class="nav-item">EPS</h3>
  </div>
  <div class="nav-div">
    <h3 class="nav-item">PG</h3>
  </div>
<<<<<<< HEAD
  <div class="nav-div">
    <h3 class="nav-item">EV / EBITDA</h3>
=======
  <div>
    <h3 class="nav-item">EBITDA</h3>
>>>>>>> fc2f7c121725f5d7538f7be4242b8385420521cc
  </div>
  <div class="nav-div">
    <h3 class="nav-item">PEG</h3>
  </div>
  <div class="nav-div">
    <h3 class="nav-item">PBV</h3>
  </div>
  <div class="nav-div">
    <h3 class="nav-item">DIV</h3>
  </div>
  <div class="nav-div">
    <h3 class="nav-item">D/E</h3>
  </div>
  <div class="nav-div">
    <h3 class="nav-item">ROE</h3>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['getItem'],
  data() {
    return {
      dropdown: [
        {Id: 'BANK', Game: 'BANK'},
        {Id: 'ICT', Game: 'ICT'},
        {Id: 'ENERG', Game: 'ENERG'}
      ],
      dropField: {value: 'Id', text: 'Game'}
    }
  },
  methods: {
    onChange(event) {
      this.getItem(event.value)
    }
  },
}
</script>
<style scoped>
  .nav-bar > div {
    background-color: #833ebe;
    width: 100%;
    padding: 20px;
  }
  .nav-bar > div:hover {
    background-color: #6610f2;
    /* width: 100%; */
    /* padding: 20px; */
  }
  h3 {
    text-align: center;
  }
  .nav-div{
    display: flex;
    align-items: center;
    position: relative;
  }
  .top-left-fixed {
    position: absolute;
    right: 0;
    top: 0;
    width: 70px;
  }
  .fixed-feedback {
    position: fixed;
    width: 100px;
    height: 93px;
    z-index: 10000;
    margin-left: -27px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #833ebe;
  }
</style>