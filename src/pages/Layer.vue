<template>
  <div class="layer">
    <div class="main-container">
      <div class="title">
          <h1 class="logo-title">Sector Compare</h1>
      </div>
      <div class="table-container">
        <table>
          <thead>
            <tr class="table-header">
              <th style="z-index: 11; text-transform:uppercase;">
                {{sector}}
              </th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Net Profit</th>
              <th>EPS</th>
              <th>PE</th>
              <th>PBV</th>
              <th>Dividend</th>
              <th>PEG</th>
              <th>EV / EBITDA</th>
              <th>ROE</th>
            </tr>
          </thead>
          <row :symbol_list="symbol_list"/>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import Row from './Row'
import axios from 'axios'
export default {
  name: 'Layer',
  props: ['symbol'],
  components: {
    Row,
  },
  data(){
    return{
      sector: '',
      symbol_list: []
    }
  },
  mounted () {
    axios.get(`https://dbs-funda.alpha.lab.ai/active/${this.$route.query.symbol}`).then( res => {
      if(res.status === 200){
        this.symbol_list = res.data.result.symbol_list
        this.sector = res.data.result.sector
      }
    })
  }
}
</script>

<style>
@font-face {
  font-family: frutiger;
  src: url(../assets/fonts/Frutiger.ttf);
  font-style: normal;
}
.row {
  display: flex;
}
th {
  background-color: #3b3530;
  z-index: 10;
  font-family: Arial;
  font-weight: lighter;
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
  height: 150px;
  width: 300px !important;
}
.layer {
  display: flex;
  justify-content: center;
}
.main-container {
  margin-top: 0px;
  margin: auto;
  height: 90vh;
  font-family: Arial, Helvetica, sans-serif;
  min-width: 350px;
}
.logo-title {
  margin-top: 8px;
  font-size: 24px;
  padding-left: 20px;
  font-family: Arial;
  font-weight: lighter;
}
table {
  position: relative;
  border-collapse: collapse;
}

td, th {
  padding: 0.25em;
  min-width: 100px;
}

.table-header > th{
  padding-top: 10px;
  padding-bottom: 10px;
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
  font-size: 12px;
}

.table-container {
  margin: auto;
  width: 87%;
  height: 80vh;
  background: rgba(0, 0, 0, 0.7);
  overflow: scroll;
}
.title {
  display: flex;
  justify-content: flex-start;
  width: 87%;
  margin-left: 7%;
  align-items: center;
}

</style>