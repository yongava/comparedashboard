<template>
  <layer class="back-transparent"/>
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
.back-transparent {
  height: 100vh;
  background-image: url('./assets/images/back.png');
  background-size: cover;
  color: white;
  font-family: 'Courier New', Courier, monospace;
}
@font-face {
  font-family: 'custom-main';
  src: url('./assets/fonts/NotoSans-Bold.ttf') format('noto-bold'),
  url('./assets/fonts/NotoSans-BoldItalic.ttf') format('noto-bold-italic'),
  url('./assets/fonts/NotoSans-Italic.ttf') format('noto-italic'),
  url('./assets/fonts/NotoSans-Regular.ttf') format('noto-regular');
}
</style>