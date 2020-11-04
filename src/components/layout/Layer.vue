<template>
  <div class="layer">
    <div class="main-container">
      <table>
        <thead>
          <tr>
            <th>
              <Navbar class="nav-bar" :getItem="getItem"/>
            </th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>EPS</th>
            <th>PG</th>
            <th>EBITDA</th>
            <th>PEG</th>
            <th>PBV</th>
            <th>DIV</th>
            <th>D/E</th>
            <th>ROE</th>
          </tr>
        </thead>
        <Row :item='item'/>
      </table>
    </div>
  </div>
</template>

<script>

import Row from './Row'
import Navbar from './Navbar'
export default {
  name: 'Layer',
  components: {
    Row,
    Navbar,
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
  width: 1100px;
  overflow: hidden;
}
.left-side {
  position: sticky;
  left: 0%;
  z-index: 2
}
.item {
  height: 100px;
  width: 200px !important;
}
.layer {
  display: flex;
  justify-content: center;
}
.main-container {
  margin: auto;
  width: 87%;
  height: 60vh;
  background: rgba(0, 0, 0, 0.7);
  overflow: scroll;
}

table {
  position: relative;
  border-collapse: collapse;
}

td, th {
  padding: 0.25em;
  min-width: 100px;
}

thead th {
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 0;
  color: #FFF;
  text-align: left;
}

thead th:first-child {
  left: 0;
  z-index: 1;
  width: 100px !important;
}

tbody th {
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  left: 0;
  border: 1px solid #CCC;
  border-left: none;
  border-top: none;
  width: 100px !important;
}
td {
  border: 1px solid #CCC;
  border-left: none;
  border-top: none;
}
thead th {
  border-right: 1px solid #CCC;
  font-family: 'Courier New', Courier, monospace;
  font-size: 12px;
}
</style>