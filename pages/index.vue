<template>
  <div class="container">
    <div class="row">
      <div class="stats" v-html="stats" />

      <!--<div class="controls">
        <div style="margin-bottom: 20px;">
          <el-button class="button" @click="runMister()">Mist</el-button>
        </div>
        <div>
          <label>Lights</label>
          <el-switch
            class="switch"
            v-model="lightsStatus"
            :active-value="1"
            :inactive-value="0"
            @change="switchLight"
          ></el-switch>
        </div>
      </div>-->
      <div class="chart">
        <client-only>
          <apexchart
            ref="chart"
            class="apex-chart"
            width="100%"
            height="100%"
            :options="chartOptions"
            :series="chartSeries"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
import prettyMilliseconds from 'pretty-ms'
import { mapGetters } from 'vuex'
export default {
  components: {},
  props: {},
  data: function () {
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
        legend: {
          show: true,
          offsetX: 0,
          offsetY: 5,
          markers: {
            width: 8,
            height: 8,
          },
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 10,
            left: 0,
          },
        },
        colors: ['#FF0000', '#0000FF'],
        chart: {
          id: 'realtime',
          height: 350,
          type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000 * 60,
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
          width: 2,
          curve: 'smooth',
        },
        markers: {
          size: 0,
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: true,
            formatter: (val) => {
              return moment(val).format('hh:mm:ss a')
            },
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          range: 600000,
          tickAmount: 2,
          tooltip: {
            formatter: (val) => {
              return moment(val).format('hh:mm:ss a')
            },
          },
          labels: {
            show: true,
            datetimeUTC: false,
            formatter: (val) => {
              return moment(val).format('hh:mm a')
            },
            datetimeFormatter: {
              year: 'yyyy',
              month: "MMM 'yy",
              day: 'dd MMM',
              hour: 'hh:mm a',
            },
          },
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
      },
    }
  },
  computed: {
    ...mapGetters({
      vivStore: 'vivStore',
    }),
    stats() {
      return `
        Temperature: ${this.vivStore.humiture.temperature}<br/>
        Humidity: ${this.vivStore.humiture.humidity}<br/><br/>

        Waterbowl State: ${
          this.vivStore.water.sensor.state
            ? '<span style="background: green; color: black;">Full</span>'
            : '<span style="background: red; color: black;">Empty</span>'
        }<br/><br/>

        Waterpump: ${
          this.vivStore.water.pump.state
            ? '<span style="background: green; color: black;">Running</span>'
            : '<span style="background: red; color: black;">Off</span>'
        }<br/>
        Waterpump Automation: ${
          this.vivStore.water.pump.automate ? 'Automatic' : 'Manual'
        }<br/>
        Waterpump Countdown: ${prettyMilliseconds(
          this.vivStore.water.pump.countdown
        )}<br/>
        Waterpump Runtime: ${prettyMilliseconds(
          this.vivStore.water.pump.runtime
        )}<br/><br/>

        Mister: ${
          this.vivStore.mister.state
            ? '<span style="background: green; color: black;">Running</span>'
            : '<span style="background: red; color: black;">Off</span>'
        }<br/>
        Mister Automation: ${
          this.vivStore.mister.automate ? 'Automatic' : 'Manual'
        }<br/>
        Mister Countdown: ${prettyMilliseconds(
          this.vivStore.mister.countdown
        )}<br/>
        Mister Runtime: ${prettyMilliseconds(
          this.vivStore.mister.runtime
        )}<br/><br/>

        Lights: ${
          this.vivStore.lights.state
            ? '<span style="background: green; color: black;">On</span>'
            : '<span style="background: red; color: black;">Off</span>'
        }<br/>
        Lights Automation: ${
          this.vivStore.lights.automate ? 'Automatic' : 'Manual'
        }<br/>
        Lights Countdown: ${prettyMilliseconds(
          this.vivStore.lights.countdown
        )}<br/>
        Lights Runtime: ${prettyMilliseconds(
          this.vivStore.lights.runtime
        )}<br/><br/>

        Sunrise: ${this.secondsToTime(this.vivStore.lights.sunrise)}a<br/>
        Sunset: ${this.secondsToTime(this.vivStore.lights.sunset)}p
      `
    },
  },
  watch: {
    vivStore: {
      deep: true,
      handler: function (val, oldVal) {
        this.lightsStatus = val.lights.state
      },
    },
  },
  mounted() {
    this.lightsStatus = this.vivStore.lights.state
    this.updateChart()
    setInterval(() => {
      this.updateChart()
    }, 1000)

    // Reset the dataset to prevent memory leak
    setInterval(() => {
      this.chartSeries.forEach((series) => {
        series.data = series.data.slice(series.data.length - 20)
      })
    }, 1000 * 60 * 60)
  },
  methods: {
    secondsToTime(t) {
      const dt = new Date(t)
      const hr = (dt.getHours() + 24) % 12 || 12
      const m = '0' + dt.getMinutes()

      return hr + ':' + m.substr(-2)
    },
    updateChart() {
      const time = new Date().getTime()
      let chartSeries = JSON.parse(JSON.stringify(this.chartSeries))
      chartSeries[0].data.push({
        x: time,
        y: this.vivStore.humiture.humidity,
      })

      chartSeries[1].data.push({
        x: time,
        y: this.vivStore.humiture.temperature,
      })
      this.chartSeries = chartSeries
      if (process.client) {
      }
    },
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
html {
  background: #000;
}
.container {
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.stats,
.controls,
.chart {
  background: #111;
  text-align: left;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  font: 1rem Inconsolata, monospace;
}

.chart {
  margin-left: 20px;
  padding: 0;
  min-height: 300px;
}

.chart text,
.apexcharts-legend-text {
  color: green !important;
  fill: green;
  font: 1rem Inconsolata, monospace !important;
}

.stats {
  color: green;
}

.controls {
  color: #fff;
  margin-left: 20px;
}

.button,
.switch {
  background: #0e2135;
  border-color: #0e2135;
  color: #fff;
}

@media screen and (max-width: 768px) {
  .stats,
  .controls,
  .chart {
    width: 90%;
    margin: 0;
  }
  .stats {
    margin-top: 20px;
  }
  .chart {
    margin: 20px 0;
  }
  .row {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
