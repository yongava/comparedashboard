<template>
  <layer/>
</template>

<script>
import Vue from 'vue'
import Layer from './components/layout/Layer'
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns'
import VueKonva from 'vue-konva'

Vue.use(VueKonva)
Vue.use(DropDownListPlugin)

export default {
  name: 'App',
  components: {
    Layer
  }
}
</script>

<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
.row {
  display: flex;
}
.justify-content-space {
  justify-content: space-between;
}
body {
  margin: 0px;
}
h3 {
  margin: 5px;
}
.layer {
  position: relative;
}
</style>