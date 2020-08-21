<template>
  <no-ssr>
    <div class="chart-label-wrapper">
      <ChartYaxis :chart-label="chartLabel" @collapseChart="collapseChart" />
      <apexchart
        ref="apexchart"
        class="apex-chart"
        :width="width"
        :height="height"
        :options="mergedOptions"
        :series="localSeries"
      />
    </div>
  </no-ssr>
</template>

<script>
import colors from '@/utils/colors.json'
import ChartYaxis from '@/components/Charts/ChartYaxis.vue'
import { EventBus } from '@/components/EventBus.js'
import moment from 'moment'
const merge = require('deepmerge')

const xaxisFormatter = (value, timestamp, index) => {
  const date = moment(value).format('D')
  if (date % 7 === 0) {
    return moment(value).format('D')
  }
  if (date == 1) {
    return moment(value).format('MMM YYYY')
  }
  return ''
}

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray

export default {
  components: {
    ChartYaxis,
  },
  props: {
    series: {
      type: Array,
      default: () => [],
    },
    chartLabel: {
      type: String,
      default: '',
    },
    chartId: {
      type: String,
    },
    chartType: {
      type: String,
      default: 'line',
    },
    chartOptions: {
      type: Object,
      default: () => {},
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
  },
  data() {
    return {
      localSeries: [],
      hiddenSeries: [],
      mergedOptions: {},
      defaultOptions: {
        colors,
        theme: {},
        fill: {
          opacity: 1,
        },
        stroke: {
          show: true,
          curve: 'straight',
          lineCap: 'round',
          width: 1,
          dashArray: 0,
        },
        dataLabels: {
          enabled: false,
        },
        chart: {
          //   group: 'chart-group',
          animations: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          stacked: false,
          zoom: {
            enabled: false,
            autoScaleYaxis: false,
          },
          events: {
            mounted: this.chartMounted(),
          },
        },
        legend: {
          offsetX: 12,
          offsetY: -1,
          markers: {
            offsetY: -1,
            width: 7,
            height: 7,
            radius: 7,
          },
          show: false,
          showForSingleSeries: true,
          horizontalAlign: 'left',
          fontSize: '13px',
          onItemClick: {
            toggleDataSeries: false,
          },
          onItemHover: {
            highlightDataSeries: true,
          },
        },
        grid: {
          padding: {
            top: -20,
            left: 44,
            right: 19,
            bottom: -10,
          },
          position: 'back',
          show: true,
          column: {
            colors: ['#FFFFFF', '#F5F5F5'],
            opacity: 1,
          },
          borderColor: '#E4E4E4',
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        tooltip: {
          shared: true,
          enabled: true,
          y: {
            show: true,
            title: {
              formatter: (
                seriesName,
                { series, seriesIndex, dataPointIndex, w }
              ) => {
                const currSeries = this.series.filter(
                  (serie) => serie.name === seriesName
                )[0]
                const name =
                  currSeries.navName ||
                  currSeries.dis ||
                  currSeries.name ||
                  seriesName
                return name
              },
            },
            formatter(value, { series, seriesIndex, dataPointIndex, w }) {
              if (value !== null) {
                const unit = series.unit
                const formattedValue = value.toLocaleString('en', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })
                return `${formattedValue} ${unit}`
              }
            },
          },
          x: {
            show: true,
            formatter: (value, y) => {
              //  if (this.date.dateRangeTickType === 'day') {
              return moment(value)
                .tz(`America/New_York`)
                .format('ddd MMM DD YYYY hh:mm a z')
              //  }
            },
          },
        },
        yaxis: {
          floating: true,
          axisTicks: {
            color: '#767676',
            show: true,
          },
          tickAmount: 3,
          forceNiceScale: true,
          show: true,
          showAlways: true,
          labels: {
            offsetY: 2,
            offsetX: 40,
            formatter: (num) => {
              const si = [
                { value: 1, symbol: '' },
                { value: 1e3, symbol: 'k' },
                { value: 1e6, symbol: 'M' },
                { value: 1e9, symbol: 'B' },
                { value: 1e12, symbol: 'T' },
              ]
              const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
              let i
              for (i = si.length - 1; i > 0; i--) {
                if (Math.abs(num) >= si[i].value) {
                  break
                }
              }
              return (
                (num / si[i].value).toFixed(1).replace(rx, '$1') + si[i].symbol
              )
            },
          },
          title: {},
        },
        xaxis: {
          categories: [],
          position: 'bottom',
          hideOverlappingLabels: false,
          //  tickAmount: this.date.dateRangeTicks,
          labels: {
            formatter: xaxisFormatter,
            show: false,
            trim: false,
            offsetY: -2,
            style: {
              colors: '#767676',
            },
          },
          axisBorder: {
            show: false,
            color: '#E4E4E4',
          },
          tooltip: {
            enabled: false,
          },
          axisTicks: {
            color: '#767676',
            show: false,
          },
          tickPlacement: 'between',
          crosshairs: {
            show: true,
            width: 1,
            position: 'front',
            opacity: 0.9,
            stroke: {
              color: '#b6b6b6',
              width: 1,
              dashArray: 0,
            },
            fill: {
              type: 'solid',
              color: '#B1B9C4',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 1,
              opacity: 0.4,
            },
          },
        },
      },
    }
  },
  watch: {
    chartOptions: {
      immediate: true,
      deep: true,
      handler() {
        this.mergedOptions = merge(this.defaultOptions, this.chartOptions, {
          arrayMerge: overwriteMerge,
        })
      },
    },
    series: {
      deep: true,
      handler() {
        this.localSeries = JSON.parse(JSON.stringify(this.series))
      },
    },
  },
  methods: {
    chartMounted() {
      this.$emit('finishRender', true)
    },
    collapseChart() {
      this.$emit('collapseChart', true)
    },
  },
  computed: {},
  created() {
    this.localSeries = JSON.parse(JSON.stringify(this.series))
  },
  mounted() {
    EventBus.$on('toggleSeries', (opts) => {
      if (this.chartId === opts.chartId) {
        if (!this.hiddenSeries.includes(opts.name)) {
          this.hiddenSeries.push(opts.name)
        } else if (this.hiddenSeries.includes(opts.name)) {
          this.localSeries = JSON.parse(JSON.stringify(this.series))
          this.hiddenSeries = this.hiddenSeries.filter(
            (name) => name !== opts.name
          )
        }
        // Filter out items from localSeries that are in hiddenSeries
        this.hiddenSeries.forEach((name) => {
          this.localSeries.forEach((item) => {
            if (item.name === name) {
              item.data = []
            }
          })
        })
        this.$refs.apexchart.refresh()
      }
    })
  },
}
</script>

<style lang="scss">
.chart .apexchart > div {
  min-height: 0 !important;
  display: flex;
  width: 100%;
  align-items: flex-start;
}

.chart-label-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;

  > div,
  .apexcharts-canvas {
    width: 100%;
    // overflow: hidden;
  }
}
.apexcharts-yaxis-label {
  fill: var(--lightText);
}

.apexcharts-legend .apexcharts-legend-series {
  margin: 0 0 0 15px !important;
  &:first-of-type {
    margin-left: 8px !important;
  }
}

.apexcharts-xaxis-label {
}
.apexcharts-legend {
  padding: 0 !important;
}
.apexcharts-tooltip-marker {
  width: 8px;
  height: 8px;
  top: 1px;
}

.apexcharts-yaxis,
.apexcharts-xaxis,
.apexcharts-yaxis-label,
.apexcharts-xaxis-label {
  pointer-events: none;
}
.apexcharts-legend-marker {
  top: -1px;
}
</style>
