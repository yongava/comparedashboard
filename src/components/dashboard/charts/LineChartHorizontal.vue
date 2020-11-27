<script>
import { Line } from 'vue-chartjs'
import chartjsPluginAnnotation from "chartjs-plugin-annotation"

export default {
  extends: Line,
  name: 'LineChartVertical',
  props: ['chart_data'],
  data() {
    return {
      data: {
        labels: ['2016','2017','2018','2019','2020'],
        datasets: [{
          data: [5, 10, 10, 20, 11], // Specify the data values array
          fill: false,
          pointRadius: 3,
          borderColor: '#229922', // Add custom color border (Line)
          backgroundColor: '#FFF', // Add custom color background (Points and Fill)
          borderWidth: 1.5, // Specify bar border width
          lineTension: 0
        }]
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false,
        bezierCurve: false,
        legend: {
          display: false
        },
        clip: {left: 5, top: false, right: -2, bottom:0},
        scales: {
          yAxes: [{
            id: 'right-y-axis',
            type: 'linear',
            position: 'right',
            ticks: {
              beginAtZero : false,
              display: true,
              autoSkipe: false,
              fontSize: 12,
              fontColor: '#FFF',
              autoSkip: false,
              min: 25,
              max: 0,
              callback: function(value) {
                return value + 'K'
              }
            },
            afterBuildTicks: function(scale) {
              scale.ticks = [11, 15];
              return;
            },
            gridLines: {
              display: true,
              color: "rgba(255,255,255, 0)",
              zeroLineColor: "rgba(255,255,255, 0.3)",
            },
            color: "rgba(255,255,255, 0.6)"
          }],
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              fontSize: 12,
              fontColor: '#FFF'
            }
          }],
        },
        annotation: {
          drawTime: 'afterDatasetsDraw',
          annotations: [{
            type: 'line',
            mode: 'horizontal',
            scaleID: 'right-y-axis',
            value: 15,
            borderColor: 'rgb(255, 255, 255)',
            borderWidth: 2,
            borderDash: [5, 5],
          }]
        }
      }
    }
  },
  mounted () {
    this.addPlugin(chartjsPluginAnnotation)
    this.renderChart(this.data, this.options)
  }
}
</script>

<style scoped>
</style>