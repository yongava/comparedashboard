<script>
import { Bar } from 'vue-chartjs'

export default {
  name: 'BarChart',
  extends: Bar,
  props: ['chart_data'],
  data() {
    return {
      data: {
        labels: ['2017', '2018', '2019', '2020'],
        datasets: [{
          yAxisID: 'right-y-axis',
          label: null,
          barThickness: 20,
          barPercentage: 0.9,
          data: [
            this.chart_data[0].entries[6].volume,
            this.chart_data[0].entries[7].volume,
            this.chart_data[0].entries[8].volume,
            this.chart_data[0].entries[9].volume
          ],
          backgroundColor: [
            '#53C353',
            '#53C353',
            '#53C353',
            '#FFFFFF',
          ],
          borderColor: [
            '#53C353',
            '#53C353',
            '#53C353',
            '#FFFFFF'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
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
              fontSize: 7,
              fontColor: '#FFF',
              callback: function(value) {
                return value / 100000
              }
            },
            gridLines: {
              color: "rgba(255, 255, 255, 0)",
              zeroLineColor: "rgba(255, 255, 255, .3)",
              tickMarkLength: 0
            },
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              fontSize: 7,
              fontColor: '#FFF'
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