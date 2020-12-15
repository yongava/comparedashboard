<template>
  <span>bank</span>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['getItem'],
  data() {
    return {
      dropdown: [
        {Id: 'BANK', Game: 'Bank'},
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
.e-selected-style{
  color: white;
}
#ej2_dropdownlist_0 {
  color: white;
}
.e-input-group-icon .e-ddl-icon .e-search-icon {
  color: white !important;
}
.e-input-group .e-control-wrapper .e-ddl .e-lib .e-keyboard .e-valid-input{
  border-color: white !important;
}
</style>