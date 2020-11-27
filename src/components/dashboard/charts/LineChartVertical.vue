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
        labels: ['2017','2018','2019','2020', ''],
        datasets: [{
          data: [5, 10, 10, 20, null], // Specify the data values array
          fill: false,
          pointRadius: [3, 0, 0, 0, 0],
          borderColor: '#FFF', // Add custom color border (Line)
          backgroundColor: '#FFF', // Add custom color background (Points and Fill)
          borderWidth: 1.5, // Specify bar border width
        }, {
          backgroundColor: "#799b3e",
          borderDash: [5, 5],
          data: [null, null, null, 20, 15], // Specify the data values array
          fill: false,
          pointRadius: [0, 0, 0, 0, 3],
          borderColor: 'white', // Add custom color border (Line)
          borderWidth: 1.5 // Specify bar border width
        }]
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false,
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
              callback: function(value) {
                return value
              }
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
            mode: 'vertical',
            scaleID: 'right-y-axis',
            value: 10,
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