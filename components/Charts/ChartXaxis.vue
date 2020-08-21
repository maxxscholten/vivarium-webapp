<template>
  <section class="container chart-xaxis-group">
    <div class="chart-xaxis-wrapper">
      <Timeline ref="xaxis" class="chart-xaxis" :options="timelineOptions">
      </Timeline>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import Timeline from '@/components/Charts/Timeline.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Timeline,
  },
  props: {
    date: {
      type: Object,
      default: () => ({
        dateRange: [],
        dateRangeTickType: 'day',
        dateRangeTicks: 0,
      }),
    },
  },
  computed: {
    ...mapGetters({}),
    axisScale() {
      const start = moment(this.dateRange[0])
      const end = moment(this.dateRange[1])
      const steps = end.diff(start, 'day')
      let scale = 'day'
      if (steps < 1) {
        scale = 'hour'
      }
      if (steps > 31) {
        scale = 'month'
      }
      if (steps > 365) {
        scale = 'year'
      }
      return scale
    },
    timelineOptions() {
      return {
        showMinorLabels: true,
        showCurrentTime: false,
        start: moment(this.date.dateRange[0]),
        // Add one day so it goes to the end of the endDate
        end: moment(this.date.dateRange[1]).add(1, 'day'),
        orientation: {
          axis: 'top',
        },
        margin: {
          axis: 0,
          item: 0,
        },
        timeAxis: {
          step: 1,
          scale: this.date.dateRangeTickType,
        },
        height: 45,
        moveable: false,
        zoomable: false,
        groupHeightMode: 'fixed',
        groupOrder: 'content',
        showTooltips: true,
        format: {
          minorLabels: {
            millisecond: 'SSS',
            second: 's',
            minute: 'HH:mm',
            hour: 'ha',
            weekday: 'ddd D',
            day: 'D',
            week: 'w',
            month: 'MMM',
            year: 'YYYY',
          },
          majorLabels: {
            millisecond: 'HH:mm:ss',
            second: 'D MMMM HH:mm',
            minute: 'ddd D MMMM',
            hour: 'ddd D MMMM',
            weekday: 'MMMM YYYY',
            day: 'MMMM YYYY',
            week: 'MMMM YYYY',
            month: 'YYYY',
            year: '',
          },
        },
        moment: (date) => {
          return moment(date).tz(`America/New_York`)
        },
      }
    },
  },
  watch: {
    dateRange() {
      const startDate = moment(this.date.dateRange[0]).format('YYYY-MM-DD')
      const endDate = moment(this.date.dateRange[1])
        .add(1, 'day')
        .format('YYYY-MM-DD')
      if (
        this.$refs.xaxis.setWindow(startDate, endDate, { animation: false })
      ) {
        this.$refs.xaxis
          .setWindow(startDate, endDate, { animation: false })
          .zoomIn(0)
      }
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.chart-xaxis-group {
}
.chart-xaxis-wrapper {
  border-bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: var(--foreground);
}
.chart-xaxis-group,
.chart-xaxis {
  width: 100%;
}
.chart-xaxis {
  padding: 10px 0 0 0;
  align-items: flex-end;
}
</style>
<style lang="scss">
.chart-xaxis #vis-timeline {
  padding-left: 68px;

  .vis-time-axis.vis-foreground,
  .vis-panel.vis-top,
  .vis-panel.vis-center {
    height: 100% !important;
  }

  .vis-panel.vis-bottom {
    display: none;
  }

  .vis-shadow {
    background: white;
    box-shadow: none;
  }
  .vis-time-axis .vis-grid.vis-major {
    top: 0 !important;
    border: 0 !important;
  }
  .vis-time-axis.vis-background {
    border: 1px solid var(--border);
    margin-top: 20px;
  }
  .vis-panel.vis-background {
    border: 0;
  }
  .vis-panel.vis-background.vis-vertical {
    border-bottom: 1px solid var(--border);
  }
  .vis-time-axis.vis-background .vis-grid.vis-vertical {
    height: 100% !important;
    top: -13px;
  }
  .vis-time-axis .vis-text {
    margin-top: 14px;

    &.vis-major {
      margin: 0;
    }
  }
}
</style>
