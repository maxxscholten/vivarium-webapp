<template>
  <div class="chart-percent-xaxis">
    <span class="start">{{ startFormatted }}</span>
    <span class="half">{{ halfFormatted }}</span>
    <span class="end">{{ endFormatted }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    unit: {
      type: String,
      default: '%',
    },
    start: {
      type: Number,
      default: 0,
    },
    end: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {}
  },
  computed: {
    halfFormatted() {
      const half = parseInt(this.end / 2).toLocaleString('en', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      if (this.unit === '$') return this.unit + half
      return half + ' ' + this.unit
    },
    startFormatted() {
      const start = this.start.toLocaleString('en', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      if (this.unit === '$') return this.unit + start
      return start + ' ' + this.unit
    },
    endFormatted() {
      const end = this.end.toLocaleString('en', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      if (this.unit === '$') return this.unit + end
      return end + ' ' + this.unit
    },
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.chart-percent-xaxis {
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  background: white;
  z-index: 2;
  border-bottom: 1px solid var(--border);
  margin-right: 24px;
  margin-left: 4px;

  span {
    position: relative;
  }

  .start {
    margin-left: -4px;
  }

  .end {
    margin-right: -19px;
    position: relative;
    left: -20px;
  }

  .half {
    &:after {
      display: block;
      position: absolute;
      left: 50%;
      width: 1px;
      background: var(--border);
      height: 10px;
      bottom: -10px;
      content: '';
    }
  }
}
</style>
