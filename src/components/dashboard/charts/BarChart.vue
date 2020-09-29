<script>
import { Bar } from 'vue-chartjs'

export default {
  name: 'BarChart',
  extends: Bar,
  props: ['chart_data'],
  data() {
    return {
      data: {
        labels: ['', '', '', ''],
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
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
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
            gridLines: {
              display: false
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