<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  name: 'LineChart',
  props: ['chart_data'],
  data() {
    return {
      data: {
        labels: ['','','','','','','','','',''],
        datasets: [{
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
            borderColor: '#5f27cd', // Add custom color border (Line)
            backgroundColor: '#5f27cd', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
                display: false
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
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