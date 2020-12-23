<script>
import { Line } from 'vue-chartjs'
import chartjsPluginAnnotation from "chartjs-plugin-annotation"

export default {
  extends: Line,
  name: 'LineChartVertical',
  props: ['chart_data', 'target_price'],
  data() {
    var target_price = this.target_price
    var last_price = this.chart_data[4].close
    console.log(this.chart_data)
    console.log(this.target_price)
    return {
      data: {
        labels: ['2016','2017','2018','2019','2020'],
        datasets: [{
          data: [
            this.chart_data[0].close ? parseInt(this.chart_data[0].close) : null,
            this.chart_data[1].close ? parseInt(this.chart_data[1].close) : null,
            this.chart_data[2].close ? parseInt(this.chart_data[2].close) : null,
            this.chart_data[3].close ? parseInt(this.chart_data[3].close) : null,
            this.chart_data[4].close ? parseInt(this.chart_data[4].close) : null,
          ],
          fill: false,
          pointRadius: 3,
          borderColor: this.chart_data[4].close > this.target_price ? '#229922' : '#E0383F', // Add custom color border (Line)
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
              callback: function(value) {
                return value
              }
            },
            afterBuildTicks: function(scale) {
              scale.ticks = [last_price < target_price ? last_price : target_price, last_price < target_price ? target_price : last_price];
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
            value: target_price,
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