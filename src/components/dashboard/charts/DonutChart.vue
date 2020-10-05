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
    if(this.chart_data[0].entries[9].volume >= 10000000) {diagmar = 55; }
    else if(this.chart_data[0].entries[9].volume < 10000000 && this.chart_data[0].entries[9].volume > 1000000) diagmar = 55 * this.chart_data[0].entries[9].volume/10000000
    else diagmar = 5
    return {
      configKonva: {
        width: 232,
        height: 232
      },
      configCircle: {
        x: 116,
        y: 116,
        radius: diagmar,
        fill: "#d79df4",
        stroke: "#ca7af1",
        strokeWidth: 2,
      },
      configText: {
        x: 100,
        y: 110,
        text: this.generate_text(this.chart_data[0].entries[9].volume),
        fontSize: 15,
        fontFamily: 'Calibri',
        fill: 'red'
      }
    };
  },
  methods: {
    generate_text: function(num) {
      if(num > 100000) return (num / 1000000).toFixed(1) + 'M'
      else return (num / 1000).toFixed(1) + 'K'
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