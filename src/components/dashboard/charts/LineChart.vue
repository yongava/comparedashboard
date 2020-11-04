<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  name: 'LineChart',
  props: ['chart_data'],
  data() {
    return {
      data: {
        labels: ['2016','20167','2018','2019','2020','','','','',''],
        datasets: [{
            yAxisID: 'right-y-axis',
            data: [
              this.chart_data[1].entries[0].close,
              this.chart_data[1].entries[1].close,
              this.chart_data[1].entries[2].close,
              this.chart_data[1].entries[3].close,
              this.chart_data[1].entries[4].close,
              this.chart_data[1].entries[5].close,
              this.chart_data[1].entries[6].close,
              this.chart_data[1].entries[7].close,
              this.chart_data[1].entries[8].close, 
              this.chart_data[1].entries[9].close
            ], // Specify the data values array
            fill: false,
            pointRadius: 2,
            borderColor: '#53C353', // Add custom color border (Line)
            backgroundColor: '#FFF', // Add custom color background (Points and Fill)
            borderWidth: 1.5 // Specify bar border width
        }]
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            id: 'right-y-axis',
            type: 'linear',
            position: 'right',
            ticks: {
              beginAtZero : true,
              display: true,
              autoSkipe: false,
              fontSize: 7,
              fontColor: '#FFF',
              callback: function(value) {
                return value
              }
            },
            gridLines: {
              display: true,
              color: "rgba(255,255,255, 0)",
              zeroLineColor: "rgba(255,255,255, 0.3)",
              tickMarkLength: 5
            },
            color: "rgba(255,255,255, 0.6)"
          }],
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              fontSize: 5,
              fontColor: '#FFF'
            }
          }],
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

<style scoped>
</style>