<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  name: 'LineChart',
  props: ['chart_data'],
  data() {
    return {
      data: {
        labels: [],
        datasets: [{
          data: [], // Specify the data values array
          fill: false,
          pointRadius: [3, 0, 0, 0, 0],
          borderColor: '#FFF', // Add custom color border (Line)
          backgroundColor: '#FFF', // Add custom color background (Points and Fill)
          borderWidth: 1.5, // Specify bar border width,
          lineTension: 0
        }, {
          backgroundColor: "#799b3e",
          borderDash: [5, 5],
          data: [], // Specify the data values array
          fill: false,
          pointRadius: [0, 0, 0, 0, 3],
          borderColor: '#FFF', // Add custom color border (Line)
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
      }
    }
  },
  mounted () {
    for(var i = 0; i < this.chart_data.actual_entries.length; i++)
    this.chart_data.actual_entries.forEach( item => {
      this.data.labels.push(item.year)
      this.data.datasets[0].data.push(item.value)
      this.data.datasets[1].data.push(null)
    })
    this.data.labels.push(this.chart_data.forecast_entries[0].year)
    this.data.labels.push('')
    this.data.datasets[0].data.push(this.chart_data.forecast_entries[0].value)
    this.data.datasets[0].data.push(null)
    this.data.datasets[1].data.push(this.chart_data.forecast_entries[0].value)
    this.data.datasets[1].data.push(this.chart_data.forecast_entries[1].value)
    this.renderChart(this.data, this.options)
  }
}
</script>

<style scoped>
</style>