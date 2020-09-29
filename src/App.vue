<template>
  <layer/>
</template>

<script>
import Layer from './components/layout/Layer'

export default {
  name: 'App',
  components: {
    Layer
  }
}
</script>

<style>
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
  /* overflow: scroll; */
  position: relative;
}
</style>
