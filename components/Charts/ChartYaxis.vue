<template>
  <div v-if="chartLabel.length" class="chart-label" @click="collapseChart">
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    chartLabel: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {
    label() {
      return this.chartLabel === 'undefined' ? 'Unitless' : this.chartLabel
    },
  },
  mounted() {},
  methods: {
    collapseChart() {
      this.$emit('collapseChart', true)
    },
  },
}
</script>

<style lang="scss" scoped>
.chart-label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  position: relative;

  span {
    color: var(--lightText);
    transform: rotate(-90deg);
    display: block;
    position: absolute;
    text-align: center;
    font-size: $fontSize;
    cursor: pointer;
    //    margin-top: -5px;
    //    width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: 50% 51%;

    &:hover {
    }
  }
}
</style>
