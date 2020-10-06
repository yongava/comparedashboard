<template>
<div class="row justify-content-space">
  <div style="position: fixed; width: 195px; padding: 18.5px;">
    <ejs-dropdownlist :dataSource='dropdown' :fields='dropField' value="BANK" @change="onChange($event)">
    </ejs-dropdownlist>
  </div>
  <div style="padding-left: 252px">
    <h3 class="nav-item">MKTCAP</h3>
  </div>
  <div>
    <h3 class="nav-item">PRICE</h3>
  </div>
  <div>
    <h3 class="nav-item">EPS</h3>
  </div>
  <div>
    <h3 class="nav-item">PG</h3>
  </div>
  <div>
    <h3 class="nav-item">EBITDA</h3>
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
</style>