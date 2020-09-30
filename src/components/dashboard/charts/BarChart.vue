<script>
import { Bar } from 'vue-chartjs'

export default {
  name: 'BarChart',
  extends: Bar,
  props: ['chart_data'],
  data() {
    return {
      data: {
        labels: ['18', '19', '20', 'F'],
        datasets: [{
          label: null,
          barThickness: 10,
          barPercentage: 0.5,
          data: [
            this.chart_data[0].entries[6].volume,
            this.chart_data[0].entries[7].volume,
            this.chart_data[0].entries[8].volume,
            this.chart_data[0].entries[9].volume
          ],
          backgroundColor: [
            'rgba(205, 132, 241,0.8)',
            'rgba(197, 108, 240,0.8)',
            'rgba(125, 95, 255,0.8)',
            'rgba(113, 88, 226,0.8)',
            'rgba(95, 39, 205,0.8)',
            'rgba(52, 31, 151,0.8)'
          ],
          borderColor: [
            'rgba(205, 132, 241,1.0)',
            'rgba(197, 108, 240,1.0)',
            'rgba(125, 95, 255,1.0)',
            'rgba(113, 88, 226,1.0)',
            'rgba(95, 39, 205,1.0)',
            'rgba(52, 31, 151,1.0)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
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
        },
      }
    }
  },
  mounted(){
    this.renderChart(this.data, this.options)
  }
}
</script>

<style scoped>
  .chart {
    width: 100%;
  }
</style>