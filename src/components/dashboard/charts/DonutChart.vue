<template>
  <div class="item-center">
    <v-stage :config="configKonva">
      <v-layer>
        <v-circle :config="configCircle">
        </v-circle>
        <v-text :config="configText"></v-text>
      </v-layer>
    </v-stage>
  </div>
</template>
<script>
export default {
  name: 'DonutChart',
  props: ['chart_data'],
  data() {
    var diagmar = 0
    if(this.chart_data[0].entries[9].volume >= 10000000) {diagmar = 35; }
    else if(this.chart_data[0].entries[9].volume < 10000000 && this.chart_data[0].entries[9].volume > 1000000) diagmar = 35 * this.chart_data[0].entries[9].volume/10000000
    else diagmar = 5
    return {
      configKonva: {
        width: 100,
        height: 100
      },
      configCircle: {
        x: 48,
        y: 48,
        radius: diagmar,
        fill: "#53C353",
        stroke: "#53C353",
        strokeWidth: 2,
      },
      configText: {
        x: 0,
        y: 40,
        text: this.generate_text(this.chart_data[0].entries[9].volume),
        fontSize: 15,
        fontFamily: 'Calibri',
        fill: 'white'
      }
    };
  },
  methods: {
    generate_text: function(num) {
      if(num > 100000) return (num / 1000000).toFixed(1) + 'M'
      else return (num / 1000).toFixed(1) + 'K'
    },
    x_padding: function(num) {
      if(this.generate_text(num).length > 4) return 35-(this.generate_text(num).length - 3)*3
      else return 35
    }
  }
 }
</script>

<style scoped>
  .chart {
    width: 100%;
  }
  .absolute-center {
    width: 50%;
    height: 50%;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  }
  .item-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>