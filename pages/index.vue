<template>
  <div class="container">
    <el-button @click="runMister()">Mist</el-button>

    <div>
      <br />
      <label>Lights</label>
      <el-switch
        v-model="lightsStatus"
        :active-value="1"
        :inactive-value="0"
        @change="switchLight"
      ></el-switch>

      <apexchart
        ref="chart"
        class="apex-chart"
        :width="600"
        :height="300"
        :options="chartOptions"
        :series="chartSeries"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {
      lightsStatus: 0,
      chartSeries: [
        {
          name: 'Humidity',
          data: [],
        },
        {
          name: 'Temperature',
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          id: 'realtime',
          height: 350,
          type: 'line',
          animations: {
            // enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              // speed: 5000,
            },
          },
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        markers: {
          size: 2,
        },
        xaxis: {
          type: 'datetime',
          // range: 60000,
        },
        yaxis: [
          {
            // seriesName: 'Temperature',
            decimalsInFloat: 0,
            tickAmount: 3,
            min: 50,
            max: 100,
            title: {
              text: 'Temperature (°F)',
              style: {},
            },
          },

          {
            // seriesName: 'Humidity',
            decimalsInFloat: 0,
            tickAmount: 3,
            opposite: true,
            min: 50,
            max: 100,
            title: {
              text: 'Humidity (%)',
              style: {},
            },
          },
        ],
        legend: {
          show: true,
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      humiture: 'humiture',
    }),
  },
  watch: {
    humiture(val, oldVal) {
      const time = new Date().getTime()
      this.chartSeries[0].data.push({
        x: time,
        y: val.humidity,
      })

      this.chartSeries[1].data.push({
        x: time,
        y: val.temperature,
      })
      this.$refs.chart.updateSeries(this.chartSeries)
    },
  },
  mounted() {
    console.log(this.$axios.defaults.baseURL)
    setInterval(() => {
      this.chartSeries.forEach((series) => {
        series.data = series.data.slice(series.data.length - 20)
      })
    }, 60000)
  },
  methods: {
    async switchLight() {
      const status = +!this.lightsStatus
      await this.$axios.get(`/api/proxy/lights/${status}`)
    },
    async runMister() {
      await this.$axios.get('/api/proxy/mist')
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>
